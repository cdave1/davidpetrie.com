// Builds the site, serves public/ at http://localhost:8000 and rebuilds the pages whenever
// something under src/ changes. Restart it after changing static/. Includes the design lab at /lab/.
//
//   node scripts/dev.mjs

import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from './build.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'public');
const port = Number(process.env.PORT || 8000);

const types = {
    '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json',
    '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif',
    '.webp': 'image/webp', '.webm': 'video/webm', '.mp4': 'video/mp4', '.ico': 'image/x-icon', '.pdf': 'application/pdf',
};

await build({ lab: true });

let timer;
fs.watch(path.join(root, 'src'), { recursive: true }, () => {
    clearTimeout(timer);
    timer = setTimeout(() => build({ clean: false, copy: false, lab: true }).catch((error) => console.error(error.message)), 150);
});

http.createServer((req, res) => {
    let file = path.join(out, decodeURIComponent(new URL(req.url, 'http://x').pathname));
    if (!file.startsWith(out)) file = out;
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
    if (!fs.existsSync(file) && fs.existsSync(file + '/index.html')) file += '/index.html';
    const found = fs.existsSync(file);
    if (!found) file = path.join(out, '404.html');
    res.writeHead(found ? 200 : 404, { 'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
}).listen(port, () => console.log(`Serving public/ at http://localhost:${port}  (design lab: http://localhost:${port}/lab/)`));
