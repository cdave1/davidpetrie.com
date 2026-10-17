// Builds the site into public/: every page as plain HTML, one stylesheet, one small script,
// and the contents of static/. React is only used here, to render the pages; none is sent to
// the browser.
//
//   node scripts/build.mjs          the site
//   node scripts/build.mjs --lab    the site plus the design lab at /lab/ (never deployed)

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';
import * as esbuild from 'esbuild';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'public');
const work = path.join(root, '.build');

process.env.NODE_ENV = 'production';

const hashed = (name, ext, contents) => {
    const hash = crypto.createHash('sha256').update(contents).digest('hex').slice(0, 10);
    return `${name}.${hash}.${ext}`;
};

// Copy static/ into public/, cloning files where the file system allows it (instant on APFS).
function copyStatic(from, to) {
    fs.mkdirSync(to, { recursive: true });
    for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
        if (entry.name === '.DS_Store') continue;
        const src = path.join(from, entry.name);
        const dst = path.join(to, entry.name);
        if (entry.isDirectory()) copyStatic(src, dst);
        else fs.copyFileSync(src, dst, fs.constants.COPYFILE_FICLONE);
    }
}

export async function build({ clean = true, copy = true, lab = false } = {}) {
    const started = Date.now();

    if (clean) fs.rmSync(out, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
    fs.mkdirSync(out, { recursive: true });
    if (copy) copyStatic(path.join(root, 'static'), out);

    // The stylesheet and the browser script, minified and named by their contents.
    for (const old of fs.readdirSync(out).filter((f) => /^(styles|site|lab)\.[0-9a-f]{10}\.(css|js)$/.test(f))) {
        fs.rmSync(path.join(out, old));
    }
    const [css, js] = await Promise.all([
        esbuild.build({ entryPoints: [path.join(root, 'src/styles/global.css')], bundle: true, minify: true, write: false, logLevel: 'error' }),
        esbuild.build({ entryPoints: [path.join(root, 'src/client/site.js')], bundle: true, minify: true, format: 'iife', target: 'es2019', write: false, logLevel: 'error' }),
    ]);
    const assets = {
        css: '/' + hashed('styles', 'css', css.outputFiles[0].contents),
        js: '/' + hashed('site', 'js', js.outputFiles[0].contents),
    };
    fs.writeFileSync(path.join(out, assets.css), css.outputFiles[0].contents);
    fs.writeFileSync(path.join(out, assets.js), js.outputFiles[0].contents);
    if (lab) {
        const labCss = await esbuild.build({ entryPoints: [path.join(root, 'src/lab/lab.css')], bundle: true, minify: true, write: false, logLevel: 'error' });
        assets.labCss = '/' + hashed('lab', 'css', labCss.outputFiles[0].contents);
        fs.writeFileSync(path.join(out, assets.labCss), labCss.outputFiles[0].contents);
    }

    // The page renderer: the JSX components compiled for Node, then run.
    const renderer = path.join(work, `site.${Date.now()}.mjs`);
    await esbuild.build({
        entryPoints: [path.join(root, 'src/site.jsx')],
        outfile: renderer,
        bundle: true,
        platform: 'node',
        format: 'esm',
        packages: 'external',
        jsx: 'automatic',
        loader: { '.js': 'jsx' },
        logLevel: 'error',
    });
    let site;
    try {
        site = await import(pathToFileURL(renderer).href);
    } finally {
        fs.rmSync(renderer, { force: true });
    }

    const pages = site.renderSite({ root, assets, lab });
    for (const page of pages) {
        const file = path.join(out, page.file);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, page.html);
    }

    console.log(`Built ${pages.length} pages into public/ in ${((Date.now() - started) / 1000).toFixed(1)}s`);
    return pages;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
    build({ lab: process.argv.includes('--lab') }).catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
