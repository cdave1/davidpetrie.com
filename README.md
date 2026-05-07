# My Personal Website

This is the public source code to my personal website, [www.davidpetrie.com](https://www.davidpetrie.com).

Built with [Gatsby](https://www.gatsbyjs.com/) (v1).

## Local development

Install dependencies:

```sh
npm install
```

Start the dev server:

```sh
./node_modules/.bin/gatsby develop
```

The site is then available at [http://localhost:8000/](http://localhost:8000/).

To produce a production build locally:

```sh
./node_modules/.bin/gatsby build
```

The static output is written to `public/`.

## Deployment

The site is deployed via [Cloudflare Pages](https://pages.cloudflare.com/), connected directly to this GitHub repository. Every push to `master` triggers a build and deploy automatically.

**Cloudflare Pages build settings:**

| Setting | Value |
|---|---|
| Framework preset | Gatsby |
| Build command | `./node_modules/.bin/gatsby build` |
| Build output directory | `public` |
| Root directory | `/` |
| Node version | set `NODE_VERSION` env var (e.g. `14`) — Gatsby v1 needs an older Node |

Pull requests get preview deployments automatically.
