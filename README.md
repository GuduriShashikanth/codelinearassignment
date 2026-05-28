# N7 — Modern Banking Landing Page

A pixel-faithful, fully responsive implementation of the **N7** banking landing page
(Figma design), built with **React + Vite + TypeScript** and CSS Modules.

## Tech stack

- **React 19** + **TypeScript**
- **Vite** for dev/build
- **CSS Modules** + a small design-token layer (`src/styles/global.css`)
- Fonts: **Archivo** (headings/body) and **Chivo Mono** (labels/buttons) via Google Fonts
- Zero runtime UI dependencies — components, animations and the carousel are hand-built

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build
npm run preview    # preview the production build
```

## Project structure

```
src/
  assets/                 product screenshots exported from Figma (dashboards, phones, logos)
  components/
    layout/               Header (floating pill nav + mobile drawer), Footer
    sections/             one component per page section (Hero, Solutions, …)
    ui/                   reusable primitives: Button, Marquee, Reveal, LearnMore, Icons
  data/content.ts         single source of truth for all page copy
  styles/global.css       design tokens (colors, type scale, spacing), resets, utilities
  App.tsx                 composes the sections into the page
```

## Design fidelity

Design tokens were extracted directly from the Figma file via the REST API:

- **Palette** — page `#000D12`, off-white text `#E9F4F9`, accent `#00B4FD`,
  signature gradient `#00B4FD → #003ACE` (buttons, the N7 wordmark, glows).
- **Type scale** — Archivo display at ~67px down to 14px; Chivo Mono for tracked
  uppercase labels — mirrored in CSS custom properties.
- **Sections** — Hero, Solutions grid, Cloud banking, Efficiency checklist,
  Paper-less CTA, Digital banking (light), Insights, Case Studies carousel, Footer.

## Responsiveness & interaction

- Fluid layouts using `clamp()` and CSS grid; verified to have **no horizontal
  overflow** from 375px → 1440px+.
- Nav collapses to a hamburger + drawer below 1024px.
- Scroll-reveal animations (`IntersectionObserver`), an interactive case-study
  carousel, an infinite marquee, hover/parallax micro-interactions.
- All motion respects `prefers-reduced-motion`.

## Notes

- `src/assets/*` product screenshots are exported renders of the Figma device/dashboard
  mockups (these are bitmap UI inside the design, not page chrome).
- `.figma_token` and the `.design/` working folder are git-ignored.
