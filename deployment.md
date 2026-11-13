# Deployment

This project is a static React (Vite) landing page intended for Cloudflare Pages.

## Prerequisites

- Node.js 18+
- npm
- A Cloudflare account (free tier is fine)

## Local development

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build

```bash
npm run build
```

Outputs static assets to `dist/`.

## Deploy to Cloudflare Pages

### Option A: Wrangler CLI

```bash
npx wrangler login
npm run deploy
```

`npm run deploy` runs `wrangler pages deploy dist --project-name ai-robot-maker-landing`.

### Option B: Cloudflare dashboard

1. Push this repo to GitHub/GitLab.
2. In the Cloudflare dashboard, create a new Pages project and connect the repo.
3. Set build command: `npm run build`
4. Set build output directory: `dist`
5. Deploy.

## Environment variables

- `PUBLIC_SITE_URL` — public URL of the deployed site (set in `wrangler.toml` under `[vars]`).

## Notes

- No server-side secrets are required for this static landing page.
- Custom domains can be attached in the Cloudflare Pages project settings.
