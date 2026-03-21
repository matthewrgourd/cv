#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer');

async function run() {
  const root = path.resolve(__dirname);
  const indexPath = path.join(root, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('index.html not found in', root);
    process.exit(2);
  }

  const output = process.argv[2] || path.join(root, 'Matthew-Gourd.pdf');
  const htmlInput = process.argv[3] ? path.resolve(process.argv[3]) : indexPath;

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    const a4Viewport = { width: 1240, height: 1754, deviceScaleFactor: 2 };
    await page.setViewport(a4Viewport);
    await page.emulateMediaType('screen');
    await page.goto('file://' + htmlInput, { waitUntil: 'networkidle2', timeout: 60000 });

    await page.evaluate(async () => {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
    });

    await page.addStyleTag({
      content: `
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          width: 1240px !important;
          min-width: 1240px !important;
          max-width: 1240px !important;
          background: #fff !important;
          overflow: hidden !important;
        }
        #app,
        section.container-fluid,
        .container-fluid {
          width: 1240px !important;
          max-width: 1240px !important;
          margin: 0 !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
      `
    });

    await new Promise((resolve) => setTimeout(resolve, 1200));

    const app = await page.$('#app');
    if (!app) {
      throw new Error('#app not found');
    }

    const clip = await page.evaluate(() => {
      const app = document.querySelector('#app');
      if (!app) return null;
      const rects = [];
      app.querySelectorAll('*').forEach((el) => {
        const style = window.getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) return;
        const r = el.getBoundingClientRect();
        if (r.width < 8 || r.height < 8) return;
        rects.push({ left: r.left, top: r.top, right: r.right, bottom: r.bottom });
      });
      if (!rects.length) return null;
      const minLeft = Math.min(...rects.map(r => r.left));
      const minTop = Math.min(...rects.map(r => r.top));
      const maxRight = Math.max(...rects.map(r => r.right));
      const maxBottom = Math.max(...rects.map(r => r.bottom));
      const pad = 24;
      return {
        x: Math.max(0, minLeft - pad),
        y: Math.max(0, minTop - pad),
        width: Math.ceil(maxRight - minLeft + pad * 2),
        height: Math.ceil(maxBottom - minTop + pad * 2)
      };
    });

    if (!clip) {
      throw new Error('Could not determine content bounds');
    }

    const pngBuffer = await page.screenshot({
      type: 'png',
      clip
    });

    const pxPerIn = 96;
    const leftMarginPx = 100;
    const rightMarginPx = 0;
    const topMarginPx = 0;
    const bottomMarginPx = 0;
    const pdfWidthPx = clip.width + leftMarginPx + rightMarginPx;
    const pdfHeightPx = clip.height + topMarginPx + bottomMarginPx;
    const pdfWidthIn = pdfWidthPx / pxPerIn;
    const pdfHeightIn = pdfHeightPx / pxPerIn;

    const pdfPage = await browser.newPage();
    await pdfPage.setViewport({ width: Math.ceil(pdfWidthPx), height: Math.ceil(Math.min(pdfHeightPx, 4000)), deviceScaleFactor: 1 });
    await pdfPage.setContent(`<!DOCTYPE html>
<html>
<head>
  <style>
    @page {
      size: ${pdfWidthIn}in ${pdfHeightIn}in;
      margin: 0;
    }
    html, body {
      margin: 0;
      padding: 0;
      width: ${pdfWidthIn}in;
      height: ${pdfHeightIn}in;
      overflow: hidden;
      background: #ffffff;
    }
    .page {
      width: ${pdfWidthIn}in;
      height: ${pdfHeightIn}in;
      background: #ffffff;
      position: relative;
      overflow: hidden;
    }
    img {
      position: absolute;
      left: ${leftMarginPx / pxPerIn}in;
      top: ${topMarginPx / pxPerIn}in;
      width: ${clip.width / pxPerIn}in;
      height: ${clip.height / pxPerIn}in;
      object-fit: fill;
      display: block;
    }
  </style>
</head>
<body>
  <div class="page">
    <img src="data:image/png;base64,${pngBuffer.toString('base64')}" alt="CV">
  </div>
</body>
</html>`, { waitUntil: 'load' });

    await pdfPage.pdf({
      path: output,
      width: `${pdfWidthIn}in`,
      height: `${pdfHeightIn}in`,
      printBackground: true,
      margin: { top: '0in', bottom: '0in', left: '0in', right: '0in' },
      preferCSSPageSize: true,
      pageRanges: '1'
    });

    await pdfPage.close();
    console.log('PDF generated at', output);
  } catch (err) {
    console.error('Failed to generate PDF:', err);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

run();
