# My Personal Website

This is the public source code to my personal website, [www.davidpetrie.com](https://www.davidpetrie.com).

The site is plain static HTML. A small build script renders the pages from `src/` (React
components, markdown pages and `src/data/projects.json`) and copies `static/` alongside them.
React runs only at build time; the browser gets HTML, one stylesheet and one small script.

## Local development

Install dependencies:

```sh
npm install
```

Build the site and serve it at [http://localhost:8000/](http://localhost:8000/), rebuilding
whenever something under `src/` changes:

```sh
npm run dev
```

To produce a production build:

```sh
npm run build
```

The static output is written to `public/`.

## Where things are

| Path | What it is |
|---|---|
| `src/pages/*.js` | The home, AI projects, pre AI projects, reading and 404 pages |
| `src/pages/*.md` | Markdown pages; the `path` in each file's front matter is its URL |
| `src/data/projects.json` | Every project; each gets a page at `/project/<name>/` |
| `src/components/` | Shared page parts |
| `src/styles/global.css` | All styles |
| `src/client/site.js` | The one script sent to the browser |
| `src/site.jsx` | The list of pages and the HTML document around each one |
| `scripts/build.mjs` | Renders everything into `public/` |
| `static/` | Images and files copied into `public/` as they are |

## Deployment

The site is a Cloudflare Worker (`davidpetriedotcom`, configured in `wrangler.jsonc`) that serves
`public/` as static assets on davidpetrie.com and www.davidpetrie.com. Workers Builds rebuilds and
deploys it on every push to `master`.

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Node version | from `.node-version` (a `NODE_VERSION` build variable overrides it) |

To deploy from your machine instead: `npm run deploy`.
