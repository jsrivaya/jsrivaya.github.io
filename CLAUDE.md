# Personal Website

Next.js static export personal website for Jorge Suarez-Rivaya.

## Stack
- Next.js (App Router, `output: "export"`, `trailingSlash: true`)
- TypeScript
- Inter font via `next/font/google`
- Inline styles throughout (no Tailwind usage)
- CSS custom property `--sidebar-width: 200px`

## Deployment
- GitHub repo: https://github.com/jsrivaya/jsrivaya.github.io
- Deploys to: https://jsrivaya.github.io/
- CI: `.github/workflows/deploy.yml` — builds on push to `main`, deploys via GitHub Pages

## Key conventions
- Server Components by default; add `"use client"` only when event handlers are needed
- Use `.entry-link` CSS class (defined in `globals.css`) for hover underline effects on links — do NOT use inline `onMouseEnter`/`onMouseLeave` in Server Components
- All pages use inline styles, not Tailwind classes
- Static images go in `public/`, photos in `public/photos/`

## Nav structure (Sidebar.tsx)
Links support a `coming: true` flag to show a small "soon" label.
Current order: books → projects → photos → links (soon) → press → about → resume (soon)

## Pages
- `/` — home, 3 Matisse-inspired SVG art pieces (cut-01, cut-02, cut-03)
- `/books` — reading list grouped by category, with "currently reading" at top
- `/projects` — project list with tags and year
- `/photos` — single-image gallery with prev/next nav, links to Flickr
- `/links` — coming soon placeholder
- `/press` — press mentions grouped by year
- `/about` — bio, believes section, LinkedIn link, Asimov quote
- `/resume` — coming soon placeholder
