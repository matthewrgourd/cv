# CV

Matthew Gourd's CV as static HTML, with a local Puppeteer-based PDF export.

Layout and animation patterns are based on [this CodePen template](https://codepen.io/itsmesuraj20/pen/NWEwXOp) (Vue 2, Bootstrap 5, `@proyecto26/animatable-component`). This repo refactors that structure for maintainability and common web best practices (semantic HTML, `ignoredElements`, progressive enhancement for links, `mailto:` / `tel:`, skip link, reduced motion, data in `data/resume.js`).

## Layout

| Path | Role |
|------|------|
| `index.html` | CV page (`<main id="app">` for Vue) |
| `css/style.css` | Presentation |
| `data/resume.js` | CV copy only (`window.CV_RESUME_DATA`) |
| `js/app.js` | Vue bootstrap and `formatResume` |
| `generate-pdf.js` | PDF generator (Puppeteer) |

Third-party UI: Bootstrap 5, Bootstrap Icons, Vue 2, Web Animations, `animatable-component`.

## Local preview

Opening `index.html` directly (`file://`) works for the CV (scripts load in order). Optional local server:

```bash
npm run preview
```

Then open the URL shown (serves the project root).

## Assets

- `matt-profile-photo2.png`
- Certificate PDFs linked from `data/resume.js`

## Install

```bash
npm install
```

Installs the Puppeteer dependency used for PDF generation.

## Generate PDFs

```bash
npm run generate-pdf -- /Users/matt/Downloads/Matthew-Gourd.pdf
```

Or:

```bash
node generate-pdf.js /Users/matt/Downloads/Matthew-Gourd.pdf
```

Optional third argument: path to another HTML file (defaults to `index.html` in this folder).

## Export behaviour

The generator renders the chosen HTML in headless Chromium, waits for fonts, captures `#app` to PNG, and wraps it in a single-page PDF so the layout matches the on-screen design.

## Editing the CV

1. Update copy in **`data/resume.js`**.
2. Adjust structure in **`index.html`** if sections change.
3. Adjust styling in **`css/style.css`**.

## Git notes

Ignored in `.gitignore`:

- `node_modules/`
- `Matthew-Gourd.pdf` (optional local export)
- `.DS_Store`, logs, editor noise, caches

Commit `package.json` and `package-lock.json` when present; do not commit `node_modules/`.
