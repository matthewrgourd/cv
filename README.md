# CV

Matthew Gourd's CV in HTML, with a local Puppeteer-based PDF export workflow.

## Files

Main source files:

- `index.html` — primary HTML layout
- `style.css` — shared styling
- `script.js` — full CV content source
- `generate-pdf.js` — local PDF generator using Puppeteer

Derived one-page render files:

- `index-1page.html` — curated one-page render template
- `script-1page.js` — curated data for the one-page PDF variant

Assets:

- `matt-profile-photo2.png`
- certificate PDFs / images used by the CV content

## Install

```bash
npm install
```

This installs the local dev dependency used for PDF generation:

- `puppeteer`

## Generate PDFs

Default export:

```bash
npm run generate-pdf -- /Users/matt/Downloads/Matthew-Gourd.pdf
```

Equivalent direct command:

```bash
node generate-pdf.js /Users/matt/Downloads/Matthew-Gourd.pdf
```

Generate from a specific HTML entry point:

```bash
node generate-pdf.js /Users/matt/Downloads/Matthew-Gourd-1page.pdf /Users/matt/cv/index-1page.html
```

## Export behaviour

The PDF generator is tuned to preserve the rendered on-screen layout rather than relying purely on print CSS.

Current behaviour:

- renders the chosen HTML file in Puppeteer
- waits for fonts to load
- captures the rendered CV as an image snapshot
- embeds that snapshot into a PDF
- preserves source text sizing more faithfully than the previous A4-only export approach

This means the output is visual-first and designed to match the intended layout closely.

## Git notes

The repository should keep source files and assets, but ignore local/generated dependency noise.

Ignored in `.gitignore`:

- `node_modules/`
- `.DS_Store`
- common log files
- local env files
- editor/cache/temp files

In general:

- commit `package.json`
- commit `package-lock.json` if generated
- do **not** commit `node_modules/`
