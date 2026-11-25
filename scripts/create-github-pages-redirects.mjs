import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outputDir = path.join(root, 'out');
const siteOrigin = (process.env.NEXT_PUBLIC_SITE_URL || 'https://wishly.rafahim.com').replace(/\/$/, '');

if (!fs.existsSync(outputDir)) {
  console.error('The static export directory "out" does not exist. Run next build before creating redirect pages.');
  process.exit(1);
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function htmlForRedirect(destination, title) {
  const safeDestination = escapeHtml(destination);
  const canonical = escapeHtml(`${siteOrigin}${destination}`);
  const jsDestination = JSON.stringify(destination);
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <link rel="canonical" href="${canonical}">
  <meta http-equiv="refresh" content="0;url=${safeDestination}">
  <script>window.location.replace(${jsDestination});</script>
</head>
<body>
  <p>This page has moved. <a href="${safeDestination}">Continue to the current page</a>.</p>
</body>
</html>
`;
}

function writeRedirect(legacyFile, destination, title) {
  const destinationFile = path.join(outputDir, destination.replace(/^\//, ''), 'index.html');
  if (!fs.existsSync(destinationFile)) {
    throw new Error(`Cannot redirect ${path.relative(outputDir, legacyFile)}: destination ${destination} was not exported.`);
  }
  fs.writeFileSync(legacyFile, htmlForRedirect(destination, title));
}

let countryRedirects = 0;
const legacyCountriesDir = path.join(outputDir, 'countries');
if (fs.existsSync(legacyCountriesDir)) {
  for (const entry of fs.readdirSync(legacyCountriesDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const legacyFile = path.join(legacyCountriesDir, entry.name, 'index.html');
    if (!fs.existsSync(legacyFile)) continue;
    writeRedirect(legacyFile, `/${entry.name}/`, `Country guide moved | ${entry.name}`);
    countryRedirects += 1;
  }
}

let translationRedirects = 0;
const translationSource = path.join(root, 'lib', 'country-translations');
if (fs.existsSync(translationSource)) {
  for (const language of fs.readdirSync(translationSource, { withFileTypes: true })) {
    if (!language.isDirectory()) continue;
    for (const translationFile of fs.readdirSync(path.join(translationSource, language.name))) {
      if (!translationFile.endsWith('.ts') || translationFile === 'index.ts' || translationFile === 'types.ts') continue;
      const slug = translationFile.replace(/\.ts$/, '');
      const legacyFile = path.join(outputDir, language.name, 'countries', slug, 'index.html');
      fs.mkdirSync(path.dirname(legacyFile), { recursive: true });
      writeRedirect(legacyFile, `/${language.name}/${slug}/`, `Translated country guide moved | ${slug}`);
      translationRedirects += 1;
    }
  }
}

let guideRedirects = 0;
const legacyGuidesDir = path.join(outputDir, 'guides');
if (fs.existsSync(legacyGuidesDir)) {
  const indexFile = path.join(legacyGuidesDir, 'index.html');
  if (fs.existsSync(indexFile)) {
    writeRedirect(indexFile, '/insights/', 'Wishly Insights');
    guideRedirects += 1;
  }
  for (const entry of fs.readdirSync(legacyGuidesDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const legacyFile = path.join(legacyGuidesDir, entry.name, 'index.html');
    if (!fs.existsSync(legacyFile)) continue;
    writeRedirect(legacyFile, `/insights/${entry.name}/`, `Insight article moved | ${entry.name}`);
    guideRedirects += 1;
  }
}

console.log(`GitHub Pages redirect documents created: ${countryRedirects} country, ${translationRedirects} translated, ${guideRedirects} Insights legacy paths.`);
console.log('Note: GitHub Pages cannot emit server-side HTTP 301 responses. These static pages use a zero-second meta refresh, location.replace and a canonical target; public/_redirects remains available for hosts that support native redirects.');
