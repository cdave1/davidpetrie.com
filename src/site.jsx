// Every page of the site, rendered to a complete HTML document. scripts/build.mjs compiles this
// file for Node and writes what renderSite() returns into public/.

import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { marked } from 'marked';

import projects, { projectPath } from './data/helpers';
import Index from './pages/index';
import ProjectsPage from './pages/projects';
import AiProjectsPage from './pages/aiProjects';
import Reading from './pages/reading';
import NotFound from './pages/404';
import Blog from './pages/blog';
import MarkdownPage from './templates/default';
import PostPage from './templates/post';
import ProjectPage from './components/ProjectPage';
import { heroes, paletteCss, headScript, LabBar, barScript, LabIndex, labIndexCss } from './lab';

const DEFAULT_TITLE = 'David Petrie - New Zealand based Software Engineer';
const DEFAULT_DESCRIPTION = 'David Petrie - Software Engineer';
const KEYWORDS = 'software engineer, developer, projects';

const escape = (s) =>
    String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// A markdown file starts with a few `key: "value"` lines between --- fences.
function readFile(file) {
    const raw = fs.readFileSync(file, 'utf8');
    const fence = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
    const meta = {};
    if (fence) {
        for (const line of fence[1].split(/\r?\n/)) {
            const kv = line.match(/^(\w+):\s*"?(.*?)"?\s*$/);
            if (kv) meta[kv[1]] = kv[2];
        }
    }
    return { meta, text: fence ? raw.slice(fence[0].length) : raw };
}

function readMarkdown(file) {
    const { meta, text } = readFile(file);
    return { meta, html: marked.parse(text) };
}

// A blog post, src/posts/<name>.md: a note about the post, a `<!-- essay -->` line, then the essay.
// (With no such line the whole file is the essay.) In its front matter, `notes` and `notesLabel`
// put a link under the title to the project the post is about, and `site` and `siteLabel` one to
// the project's own website, which opens in a new tab.
//
// If <name>.raw.md sits beside it, that is the transcript the essay was written from, cut into
// passages by lines saying what each became: `<!-- essay 3 -->` for the essay's third paragraph,
// `<!-- essay 6-7 -->` for two of them, `<!-- cut -->` for a passage that was left out. The
// passages must cover every paragraph once, in order. The page then shows them side by side.
function readPost(file) {
    const { meta, text } = readFile(file);
    const [essay, note = ''] = text.split(/^<!--\s*essay\s*-->\s*$/m).reverse();
    const paragraphs = marked.lexer(essay).filter((token) => token.type !== 'space').map((token) => marked.parser([token]));
    const post = { path: meta.path, title: meta.title, description: meta.description, date: meta.date, notes: meta.notes, notesLabel: meta.notesLabel, site: meta.site, siteLabel: meta.siteLabel, note: marked.parse(note) };

    const transcript = file.replace(/\.md$/, '.raw.md');
    if (!fs.existsSync(transcript)) return { ...post, pairs: [{ essay: paragraphs.join('') }] };

    const [before, ...parts] = fs.readFileSync(transcript, 'utf8').split(/^<!--\s*(essay\s+\d+(?:\s*-\s*\d+)?|cut)\s*-->\s*$/m);
    const wrong = (why) => new Error(`${path.basename(transcript)}: ${why}`);
    if (before.trim()) throw wrong('there is text before the first passage marker');
    const pairs = [];
    let next = 1;
    for (let i = 0; i < parts.length; i += 2) {
        const [from, to = from] = (parts[i].match(/\d+/g) || []).map(Number);
        if (from !== undefined && (from !== next || to < from || to > paragraphs.length)) throw wrong(`"${parts[i]}" is out of order; expected paragraph ${next}`);
        if (from !== undefined) next = to + 1;
        pairs.push({ raw: marked.parse(parts[i + 1]), essay: from === undefined ? '' : paragraphs.slice(from - 1, to).join('') });
    }
    if (next !== paragraphs.length + 1) throw wrong(`the essay has ${paragraphs.length} paragraphs but the passages stop at ${next - 1}`);
    return { ...post, pairs };
}

const formatDate = (date) =>
    new Date(date + 'T00:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

// The 2000 to 2009 list, shown under the other projects. Its headings drop one level so they sit
// under the section's own heading.
function archiveHtml(root) {
    const { html } = readMarkdown(path.join(root, 'src/content/archive.md'));
    return html.replace(/<(\/?)h4/g, '<$1h5').replace(/<(\/?)h2/g, '<$1h3');
}

const redirectPage = (to) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Moved</title>
<meta http-equiv="refresh" content="0; url=${to}">
<link rel="canonical" href="${to}">
<meta name="robots" content="noindex">
</head>
<body>
<p>This page has moved to <a href="${to}">${to}</a>.</p>
</body>
</html>
`;

// A URL path to the file that serves it: /about/ → about/index.html, /404.html → 404.html.
const fileFor = (url) => (url.endsWith('.html') ? url.slice(1) : path.join(url.slice(1), 'index.html'));

function pages(root) {
    const list = [
        // The home page also loads the game that plays in its masthead.
        { url: '/', element: <Index />, arcade: true },
        { url: '/ai-projects/', title: 'AI Projects', element: <AiProjectsPage /> },
        { url: '/projects/', title: 'Pre AI Projects', element: <ProjectsPage archiveHtml={archiveHtml(root)} /> },
        // The 2000 to 2009 archive used to be its own page; it is now the last section of /projects/.
        { url: '/projects/archive/', redirect: '/projects/#2000-2009' },
        { url: '/reading/', title: 'Reading List', element: <Reading /> },
        { url: '/404.html', title: 'Page Not Found', element: <NotFound />, sitemap: false },
        { url: '/404/', title: 'Page Not Found', element: <NotFound />, sitemap: false },
    ];

    const dir = path.join(root, 'src/pages');
    for (const name of fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort()) {
        const { meta, html } = readMarkdown(path.join(dir, name));
        list.push({
            url: meta.path,
            title: meta.title,
            element: <MarkdownPage html={html} title={meta.title} path={meta.path} date={meta.date ? formatDate(meta.date) : null} />,
        });
    }

    // The blog: its posts, newest first, and the list of them.
    const posts = fs.readdirSync(path.join(root, 'src/posts')).filter((f) => f.endsWith('.md') && !f.endsWith('.raw.md'))
        .map((name) => readPost(path.join(root, 'src/posts', name)))
        .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
        .map((post) => ({ ...post, date: post.date ? formatDate(post.date) : null }));
    list.push({ url: '/blog/', title: 'Blog', element: <Blog posts={posts} /> });
    for (const post of posts) {
        list.push({ url: post.path, title: post.title, description: post.description, element: <PostPage post={post} /> });
    }

    for (const project of projects) {
        list.push({
            url: projectPath(project) + '/',
            title: project.title,
            description: project.description,
            element: <ProjectPage project={project} />,
        });
    }
    return list;
}

function document({ title, description, body, assets, head = '', tail = '', arcade = false }) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(title ? `${title} | David Petrie` : DEFAULT_TITLE)}</title>
<meta name="description" content="${escape(description || DEFAULT_DESCRIPTION)}">
<meta name="keywords" content="${KEYWORDS}">
<script>document.documentElement.classList.add('js')</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;600;800&display=swap">
<link rel="stylesheet" href="${assets.css}">
<script src="${assets.js}" defer></script>${arcade ? `\n<script src="${assets.arcade}" defer></script>` : ''}${head}
</head>
<body>
${body}${tail}
</body>
</html>
`;
}

// The lab: /lab/ and one page per hero layout, the palette chosen with ?palette=.
function labPages(assets) {
    const head = `\n<link rel="stylesheet" href="${assets.labCss}">\n<style>${paletteCss}</style>\n<script>${headScript}</script>\n<meta name="robots" content="noindex">`;
    const list = [{ url: '/lab/', title: 'Lab', element: <LabIndex />, head: head.replace(paletteCss, paletteCss + labIndexCss), sitemap: false }];
    for (const hero of heroes) {
        list.push({
            url: `/lab/${hero.id}/`,
            title: `Lab: ${hero.name}`,
            element: <Index hero={hero.render()} />,
            sitemap: false,
            head,
            tail: '\n' + renderToStaticMarkup(<LabBar current={hero.id} />) + `\n<script>${barScript}</script>`,
        });
    }
    return list;
}

export function renderSite({ root, assets, lab = false }) {
    return [...pages(root), ...(lab ? labPages(assets) : [])].map((page) => {
        if (page.redirect) return { url: page.url, file: fileFor(page.url), html: redirectPage(page.redirect), sitemap: false };
        // React leaves `muted` off server-rendered video; every video here is a silent loop.
        let body = renderToStaticMarkup(page.element).replace(/<video(?![^>]*\bmuted\b)/g, '<video muted=""');
        // Mark the current page in the site bar.
        body = body.replace(/<nav aria-label="Main">[\s\S]*?<\/nav>/, (nav) =>
            nav.replace(`<a href="${page.url}">`, `<a href="${page.url}" aria-current="page">`));
        return { url: page.url, file: fileFor(page.url), html: document({ ...page, body, assets }), sitemap: page.sitemap !== false };
    });
}
