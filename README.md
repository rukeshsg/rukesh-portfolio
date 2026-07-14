# Rukesh SG — Portfolio

A premium, minimal portfolio built with Next.js 14 (App Router), TypeScript,
Tailwind CSS, and Framer Motion.

## Design language

- **Palette** — warm near-black (`ink`), off-white paper text, and a single
  restrained amber "signal" accent used for emphasis, links, and the loss
  curve in the hero.
- **Type** — Fraunces (display/serif) for the name and pull quotes, Inter for
  body copy, JetBrains Mono for eyebrows, labels, and section markers
  (`// 01 — About`), echoing code comments.
- **Signature element** — a small animated training-loss sparkline in the
  hero, a quiet nod to iterative learning rather than a decorative flourish.
- **Motion** — smooth scroll, scroll-triggered fade-ins, card lift on hover,
  navbar blur on scroll, and a faint cursor-following glow (desktop only,
  respects `prefers-reduced-motion`). Nothing else moves.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing your content

All personal content — name, bio, skills, projects, certifications, badges,
education, and links — lives in one file:

```
data/portfolio.json
```

Update that file and the site (including the AI assistant) updates
automatically. You should not need to touch component code to change
content.

## Adding your real assets

Drop files into `public/assets/` following the paths already referenced in
`data/portfolio.json` (see `public/assets/README.txt`), or edit the JSON
paths to match your own filenames:

- Profile photo, resume PDF
- Project screenshots (`public/assets/projects/`)
- Certificate logos + preview images (`public/assets/certs/`)
- Badge images (`public/assets/badges/`)
- Education institution logos (`public/assets/education/`)
- `public/og-image.png` — 1200×630 social share preview

## The AI assistant

The floating assistant in the bottom-right corner is intentionally simple
and fully local: it does keyword matching against `data/portfolio.json` in
the browser, so it only ever answers questions about this portfolio (no
external API calls, no general knowledge). See `components/AIAssistant.tsx`
if you'd like to extend the matching logic or wire it to a real LLM later.

## SEO

Metadata, Open Graph tags, Twitter cards, a JSON-LD `Person` schema,
`sitemap.xml`, and `robots.txt` are all generated from `meta` and `profile`
in `data/portfolio.json` — update the values there (especially `siteUrl`)
before deploying.

## Deploying

This project is ready to deploy on [Vercel](https://vercel.com):

```bash
npm run build
```

Push to a Git repository and import it in Vercel, or run `vercel` from the
project root.
