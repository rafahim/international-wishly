# Country SEO and footer audit — 25 November 2026

## Country-guide publication update

The country content data now contains a complete guide object for every one of the 195 country rows. A runtime source-level check using the repository's `isPublishable()` function returned 195/195 ready. The 185 generated guides currently contain 871–1,235 body words each; the ten hand-written guides retain their authored lengths. There is no upper word-count cap.

Each page has a country-specific primary keyword, title and meta description, introduction, at least three occasions with customary timing and local context, greeting customs, sharing guidance, original sample wishes, sensitivities, exactly three FAQs, related links and at least two source entries. The current metadata and FAQ-length rules pass for all 195 records.

## Source-level SEO findings

| Check | Source finding |
|---|---|
| Country inventory | 195 unique country slugs |
| Editorial readiness | 195/195 country records have content and pass `isPublishable()` |
| English URLs | All 195 are generated from the root-level country route |
| Canonicals | Country metadata uses the self-referencing root-level URL |
| Robots | General crawling is allowed; `robots.ts` publishes the sitemap URL |
| Sitemap | `app/sitemap.ts` includes all publishable English country pages and only approved translations |
| Internal discovery | The `/countries/` directory links to all 195 root-level country pages; each country guide includes nearby-country links, three occasion-template links and five related Insights links |
| Legacy URLs | GitHub Pages postbuild writes zero-second meta-refresh + `location.replace()` redirect documents with canonical targets. This is not an HTTP 301; `_redirects` provides native 301s only on Cloudflare Pages/Netlify. |
| Translations | Unreviewed translations remain noindex and are excluded from the sitemap, hreflang and public switcher |
| Structured data | Country guides render Article, BreadcrumbList and FAQPage JSON-LD where applicable |
| Content overlap | On the 185 generated pages, six-word phrases present on 20+ pages account for 3.17% of the body-text six-grams (41.04% before the rewrite; same script and method); the Tajikistan–Uzbekistan pairwise overlap coefficient fell from 41.9% to 29.0% |
| Metadata | All 195 guides have country-specific metadata and self-canonical URLs |

## Build verification limitation

The uploaded checkout contains incomplete placeholder directories in `node_modules`. Full-project `npm run typecheck` and `npm run build` remain unverified until `npm ci` successfully installs the dependencies. The changed generated-country module was separately type-checked with TypeScript 5.8.3; the lockfile pins 5.9.3. The postbuild redirect generator and source-level content audits were checked independently, but a complete rendered `out/` directory still needs production build verification.

Before deployment, install the lockfile dependencies and run:

```bash
npm ci
npm run typecheck
npm run build
npm run audit:countries
```

Then spot-read five files in `out/<slug>/index.html` and verify that all 195 English country pages have no `noindex`, exact self-canonicals and are present in `out/sitemap.xml`. Google indexing is never guaranteed by a sitemap entry alone; submit the sitemap in Search Console after deployment and monitor the Page indexing report.
