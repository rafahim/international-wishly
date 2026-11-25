import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const countriesSource = fs.readFileSync(path.join(root, 'lib/countries.ts'), 'utf8');
const sitemapSource = fs.readFileSync(path.join(root, 'app/sitemap.ts'), 'utf8');
const translationSource = fs.readFileSync(path.join(root, 'lib/country-translations/index.ts'), 'utf8');
const footerSource = fs.readFileSync(path.join(root, 'components/Footer.tsx'), 'utf8');
const robotsSource = fs.readFileSync(path.join(root, 'app/robots.ts'), 'utf8');
const outputDir = path.join(root, 'out');
const siteOrigin = 'https://wishly.rafahim.com';

const rowsBlock = countriesSource.match(/const countryRows:[\s\S]*?= \[([\s\S]*?)\n\];/);
const factsPath = path.join(root, 'lib/country-content-facts.json');
const additionalPath = path.join(root, 'lib/country-content-additional.ts');
const facts = fs.existsSync(factsPath) ? JSON.parse(fs.readFileSync(factsPath, 'utf8')) : {};
const additionalSource = fs.existsSync(additionalPath) ? fs.readFileSync(additionalPath, 'utf8') : '';
const additionalBlock = additionalSource.match(/export const additionalCountryContent:[\s\S]*?= \{([\s\S]*?)\n\};/);
const manualBlock = countriesSource.match(/const countryContentRaw:[\s\S]*?= \{([\s\S]*?)\n\};/);
if (!rowsBlock || !additionalBlock || !manualBlock) {
  console.error('Could not parse countryRows or country-content sources.');
  process.exit(1);
}

const allRows = [...rowsBlock[1].matchAll(/^\s*\['([a-z0-9-]+)'\s*,\s*'([^']+)'\s*,\s*'([A-Z]{2})'/gm)];
const allSlugs = allRows.map((match) => match[1]);
const generatedSlugs = Object.keys(facts);
const additionalSlugs = [...additionalBlock[1].matchAll(/^\s{2}(?:'([^']+)'|([a-z0-9-]+)):\s*\{/gm)].map((match) => match[1] || match[2]);
const manualSlugs = [...manualBlock[1].matchAll(/^\s{2}(?:'([^']+)'|([a-z0-9-]+)):\s*\{/gm)].map((match) => match[1] || match[2]);
const readySlugs = [...new Set([...generatedSlugs, ...additionalSlugs, ...manualSlugs])];
const translationRoot = path.join(root, 'lib/country-translations');
const translationFiles = fs.existsSync(translationRoot)
  ? fs.readdirSync(translationRoot, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .flatMap((entry) => fs.readdirSync(path.join(translationRoot, entry.name))
        .filter((file) => file.endsWith('.ts'))
        .map((file) => ({ lang: entry.name, slug: file.replace(/\.ts$/, '') })))
  : [];

function translationIsReviewed({ lang, slug }) {
  const filePath = path.join(translationRoot, lang, `${slug}.ts`);
  const source = fs.readFileSync(filePath, 'utf8');
  return /\breviewed\s*:\s*true\b/.test(source);
}

function hasStaticRedirect(html, destination) {
  const escaped = destination.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const refresh = new RegExp(`<meta\\s+http-equiv=[\"']refresh[\"'][^>]*content=[\"']0;url=${escaped}[\"']`, 'i');
  return refresh.test(html)
    && html.includes(`rel=\"canonical\" href=\"${siteOrigin}${destination}\"`)
    && html.includes(`window.location.replace(\"${destination}\")`)
    && html.includes(`href=\"${destination}\"`);
}

const featuredBlock = footerSource.match(/const featuredCountrySlugs = \[([\s\S]*?)\] as const;/);
const featuredCountrySlugs = featuredBlock
  ? [...featuredBlock[1].matchAll(/'([a-z0-9-]+)'/g)].map((match) => match[1])
  : [];

const errors = [];
const warnings = [];
if (allSlugs.length !== 195) errors.push(`Expected 195 country rows; found ${allSlugs.length}.`);
if (new Set(allSlugs).size !== allSlugs.length) errors.push('Duplicate country slugs found.');
if (new Set(readySlugs).size !== generatedSlugs.length + additionalSlugs.length + manualSlugs.length) errors.push('A country content slug is defined in more than one source.');
for (const slug of allSlugs) if (!readySlugs.includes(slug)) errors.push(`Country guide content is missing: ${slug}`);
for (const slug of readySlugs) if (!allSlugs.includes(slug)) errors.push(`Country content references an unknown slug: ${slug}`);
if (generatedSlugs.length !== 185) errors.push(`Expected 185 generated country fact records; found ${generatedSlugs.length}.`);
for (const [slug, fact] of Object.entries(facts)) {
  if (!Array.isArray(fact.occasions) || fact.occasions.length < 3) errors.push(`Generated country facts need at least 3 occasions: ${slug}`);
  if (!Array.isArray(fact.source) || fact.source.length < 2) errors.push(`Generated country facts need at least 2 source records: ${slug}`);
}
if (!countriesSource.includes("status: countryContent[slug] ? 'ready' : 'draft'")) errors.push('Country ready status is not derived from available guide content.');
if (!sitemapSource.includes('countries.flatMap')) errors.push('Sitemap is not wired to every country.');
if (!sitemapSource.includes('publishableLanguagesFor')) errors.push('Sitemap language publication gate was not found.');
if (!translationSource.includes('isTranslationPublishable')) errors.push('Translation publishability gate was not found.');
if (!footerSource.includes('featuredCountries')) errors.push('Featured country links are missing from the footer.');
if (!featuredBlock) errors.push('Footer featuredCountrySlugs list was not found.');
if (new Set(featuredCountrySlugs).size !== featuredCountrySlugs.length) errors.push('Duplicate featured country slugs found in the footer.');
for (const slug of featuredCountrySlugs) if (!allSlugs.includes(slug)) errors.push(`Footer country link points to an unknown country: ${slug}`);
if (!robotsSource.includes('sitemap: `${SITE.url}/sitemap.xml`')) errors.push('robots.ts does not advertise the sitemap URL.');
if (!robotsSource.includes("{ userAgent: '*', allow: '/' }")) errors.push('robots.ts does not allow general crawling.');
if (!fs.existsSync(path.join(root, 'app', '[lang]', 'page.tsx'))) errors.push('Root-level English country route app/[lang]/page.tsx is missing.');
if (!fs.existsSync(path.join(root, 'app', '[lang]', '[country]', 'page.tsx'))) errors.push('Root-level translated country route app/[lang]/[country]/page.tsx is missing.');

const redirectsPath = path.join(root, 'public', '_redirects');
const redirects = fs.existsSync(redirectsPath) ? fs.readFileSync(redirectsPath, 'utf8') : '';
if (!redirects) errors.push('public/_redirects is missing or empty.');

console.log(`Country records: ${allSlugs.length}`);
console.log(`Full guides: ${readySlugs.length} (${readySlugs.join(', ') || 'none'})`);
console.log(`Root-level English country pages expected: ${allSlugs.length}`);
console.log(`Translation preview modules: ${translationFiles.length} (${translationFiles.filter((item) => !translationIsReviewed(item)).length} intentionally unreviewed/noindex)`);
console.log(`Featured country links in footer: ${featuredCountrySlugs.length} (${featuredCountrySlugs.join(', ')})`);

if (!fs.existsSync(outputDir)) {
  warnings.push('No out/ directory found. Run npm run build first; generated HTML and XML sitemap checks were not performed.');
} else {
  const sitemapPath = path.join(outputDir, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    errors.push('out/sitemap.xml is missing.');
  } else {
    const sitemap = fs.readFileSync(sitemapPath, 'utf8');
    for (const slug of allSlugs) {
      const url = `/${slug}/`;
      const legacyUrl = `/countries/${slug}/`;
      const isReady = readySlugs.includes(slug);
      const inSitemap = sitemap.includes(`<loc>${siteOrigin}${url}</loc>`);
      if (isReady && !inSitemap) errors.push(`Ready English country page is missing from sitemap: ${url}`);
      if (!isReady && inSitemap) errors.push(`Draft English country page must not be in sitemap: ${url}`);
      if (sitemap.includes(legacyUrl)) errors.push(`Legacy country URL unexpectedly appears in sitemap: ${legacyUrl}`);

      const htmlPath = path.join(outputDir, slug, 'index.html');
      if (!fs.existsSync(htmlPath)) {
        errors.push(`Root-level English country HTML is missing: ${htmlPath}`);
      } else {
        const html = fs.readFileSync(htmlPath, 'utf8');
        const hasNoindexTag = /name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)
          || /content=["'][^"']*noindex[^"']*["'][^>]*name=["']robots["']/i.test(html);
        if (isReady && hasNoindexTag) errors.push(`Ready English country page has a noindex robots tag: ${url}`);
        if (!isReady && !hasNoindexTag) errors.push(`Draft English country page is missing noindex: ${url}`);
        const canonical = `${siteOrigin}${url}`;
        if (!html.includes('rel="canonical"') || !html.includes(canonical)) {
          errors.push(`English country page is missing its exact self-canonical: ${url}`);
        }
        const publishedTranslations = translationFiles.filter((item) => item.slug === slug && translationIsReviewed(item));
        if (publishedTranslations.length && !html.includes('country-language-switcher')) {
          errors.push(`Published language switcher is missing from ${url}`);
        }
        for (const item of publishedTranslations) {
          const translatedUrl = `href="/${item.lang}/${slug}/"`;
          if (!html.includes(translatedUrl)) errors.push(`English page is missing its ${item.lang} language link: ${url}`);
        }
      }

      const legacyHtmlPath = path.join(outputDir, 'countries', slug, 'index.html');
      if (!fs.existsSync(legacyHtmlPath)) {
        errors.push(`Legacy English URL has no GitHub Pages redirect document: ${legacyUrl}`);
      } else {
        const legacyHtml = fs.readFileSync(legacyHtmlPath, 'utf8');
        if (!hasStaticRedirect(legacyHtml, url)) errors.push(`Legacy English URL does not redirect to ${url}: ${legacyUrl}`);
      }
      if (!redirects.includes(`${legacyUrl} /${slug}/ 301`)) errors.push(`Native host redirect rule is missing: ${legacyUrl}`);
    }

    for (const translation of translationFiles) {
      const { lang, slug } = translation;
      const url = `/${lang}/${slug}/`;
      const legacyUrl = `/${lang}/countries/${slug}/`;
      const reviewed = translationIsReviewed(translation);
      if (reviewed && !sitemap.includes(url)) errors.push(`Reviewed translation is missing from sitemap: ${url}`);
      if (!reviewed && sitemap.includes(url)) errors.push(`Unreviewed translation unexpectedly appears in sitemap: ${url}`);
      if (sitemap.includes(legacyUrl)) errors.push(`Legacy translation URL unexpectedly appears in sitemap: ${legacyUrl}`);

      const htmlPath = path.join(outputDir, lang, slug, 'index.html');
      if (!fs.existsSync(htmlPath)) {
        errors.push(`Root-level translation page HTML is missing: ${htmlPath}`);
      } else {
        const html = fs.readFileSync(htmlPath, 'utf8');
        const hasNoindex = /name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)
          || /content=["'][^"']*noindex[^"']*["'][^>]*name=["']robots["']/i.test(html);
        if (reviewed && hasNoindex) errors.push(`Reviewed translation still has noindex: ${url}`);
        if (!reviewed && !hasNoindex) errors.push(`Unreviewed translation is missing a noindex robots tag: ${url}`);
        if (!html.includes(`${siteOrigin}${url}`)) errors.push(`Translation page is missing its self-canonical: ${url}`);
        if (reviewed) {
          if (!html.includes('country-language-switcher') || !html.includes('EN')) {
            errors.push(`Published translation is missing its EN return link: ${url}`);
          }
          if (!html.includes(`href="/${slug}/"`)) {
            errors.push(`Published translation points to no English version: ${url}`);
          }
        } else if (html.includes('country-language-switcher')) {
          errors.push(`Unreviewed translation must not appear in a language switcher: ${url}`);
        }
      }

      const legacyHtmlPath = path.join(outputDir, lang, 'countries', slug, 'index.html');
      if (!fs.existsSync(legacyHtmlPath)) {
        errors.push(`Legacy translated URL has no GitHub Pages redirect document: ${legacyUrl}`);
      } else {
        const legacyHtml = fs.readFileSync(legacyHtmlPath, 'utf8');
        if (!hasStaticRedirect(legacyHtml, url)) errors.push(`Legacy translation URL does not redirect to ${url}: ${legacyUrl}`);
      }
      if (!redirects.includes(`${legacyUrl} /${lang}/${slug}/ 301`)) errors.push(`Native host translation redirect rule is missing: ${legacyUrl}`);
    }
  }

  const legacyGuidesDir = path.join(outputDir, 'guides');
  const guideIndex = path.join(legacyGuidesDir, 'index.html');
  if (!fs.existsSync(guideIndex) || !hasStaticRedirect(fs.readFileSync(guideIndex, 'utf8'), '/insights/')) {
    errors.push('Legacy /guides/ path does not have its GitHub Pages static redirect to /insights/.');
  }
  const insightsDir = path.join(outputDir, 'insights');
  if (fs.existsSync(legacyGuidesDir)) {
    for (const entry of fs.readdirSync(legacyGuidesDir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const legacyFile = path.join(legacyGuidesDir, entry.name, 'index.html');
      const target = `/insights/${entry.name}/`;
      if (!fs.existsSync(legacyFile) || !hasStaticRedirect(fs.readFileSync(legacyFile, 'utf8'), target)) {
        errors.push(`Legacy guide path does not redirect to ${target}.`);
      }
    }
  }
  const redirectsOutput = path.join(outputDir, '_redirects');
  if (!fs.existsSync(redirectsOutput)) errors.push('The static export is missing public/_redirects for hosts that support native redirects.');
  else warnings.push('GitHub Pages ignores _redirects and cannot emit HTTP 301 responses; postbuild static redirect documents are verified instead.');
}

for (const warning of warnings) console.warn(`WARN: ${warning}`);
for (const error of errors) console.error(`FAIL: ${error}`);
if (errors.length) process.exit(1);
console.log('Country indexing audit passed for all checks that could be performed.');
