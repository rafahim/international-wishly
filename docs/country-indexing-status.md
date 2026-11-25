# Country-page indexing status

## Current source status

- The directory contains 195 statically generated English country routes at root-level URLs such as `/bangladesh/`; `/countries/` is the directory hub only.
- All 195 country records currently have complete country-specific content objects and pass the source-level `isPublishable()` gate. Every English country page is therefore `index,follow`, uses a self-referencing canonical, and is included in `sitemap.xml` through the existing sitemap generator.
- Each guide includes a country-specific introduction, at least three locally relevant occasions and usual timing, greeting customs, sharing guidance, original sample wishes, cultural sensitivities, three FAQs, related links and at least two source entries. The generated 185 guides currently count 871–1,235 body words each; the ten hand-written guides remain at their authored length. There is no maximum word-count rule. Generated guides now link to five related Insights articles, alongside nearby-country and occasion-template links.
- The 195 root-level English URLs are designed to be indexable. This is a technical publication state, not a guarantee that Google will index every URL. Google may still decide that an individual page is insufficiently useful or distinctive.
- The 185 generated guides now use country-specific occasion details in their greeting guidance, sample wishes and FAQ answers, with deterministic variation in explanatory copy. A six-word n-gram audit finds that phrases shared by 20 or more generated pages account for 3.17% of generated body text (the prior generator measured 41.04% with the same method). Pairwise six-word overlap is also measured: Tajikistan–Uzbekistan fell from 41.9% to 29.0%, while the highest remaining pair is Benin–Lesotho at 36.9%. This is a practical duplication check, not a substitute for editorial review.
- Thirteen language preview files exist: Bengali for Bangladesh, India, Malaysia and United Arab Emirates; Hindi for India; Nepali for Nepal; Arabic for United Arab Emirates; Malay for Malaysia; Urdu for Pakistan; Japanese for Japan; Filipino for the Philippines; and Sinhala plus Tamil for Sri Lanka. These translations remain `reviewed: false`, noindex and excluded from sitemap, hreflang and public LLM discovery. Do not publish them until a native speaker has reviewed the facts, wording, spelling and page layout and the module records `reviewedBy` and `reviewedAt`.

## Source-level checks completed

The following were checked against the current source data:

- 195 unique country rows.
- 195 countries with `status: 'ready'` and a content object.
- All 195 pass the runtime `isPublishable()` gate.
- The 185 generated country guides contain 871–1,235 body words each; the ten hand-written guides retain their own authored lengths.
- All 195 have at least three occasions, three sample wishes, three FAQs, at least four greeting-custom strings and at least two source entries.
- Meta titles are within 50 characters; meta descriptions are 140–158 characters; each FAQ answer is within the configured 35–90-word range.

## Production verification still required

The provided checkout has incomplete placeholder directories under `node_modules`, so `npm run typecheck` currently fails because the `@types/node`, `@types/react` and `@types/react-dom` definitions are absent. A production build and rendered-output audit have therefore not been verified in this environment.

On a machine with dependencies installed, run:

```bash
npm ci
npm run typecheck
npm run build
npm run audit:countries
```

Then spot-check five rendered pages under `out/<slug>/index.html`. Confirm each has no `noindex`, an exact self-canonical and visible country-specific article content. The sitemap should contain all 195 English country URLs and exclude unreviewed translations.

## Requesting Google indexing

After a successful build and deployment:

1. Open Google Search Console for the verified `https://wishly.rafahim.com/` property.
2. Submit or resubmit `https://wishly.rafahim.com/sitemap.xml` in **Indexing → Sitemaps**.
3. Inspect representative country URLs with **URL Inspection**. Run **Test Live URL**, confirm crawling and indexing are allowed, the canonical is the same URL and the page fetch succeeds. Request indexing for priority pages.
4. Review **Pages → Why pages aren't indexed**, particularly “Crawled - currently not indexed”, “Discovered - currently not indexed”, duplicate canonical and server errors. Improve pages based on evidence rather than adding unsupported claims or changing labels.

Google makes the final indexing decision based on crawlability, canonical signals, usefulness, uniqueness, links and other signals. See [Google's URL Inspection documentation](https://support.google.com/webmasters/answer/9012289) and [Ask Google to recrawl your URLs](https://developers.google.com/search/docs/crawling-indexing/ask-google).

## Translation publication rule

Do not change a translation's `reviewed` flag to `true` unless a native speaker has actually reviewed facts, tone, spelling, sensitive wording and mobile layout and supplied `reviewedBy` and `reviewedAt`. Unreviewed translations must remain noindex and outside hreflang, sitemap, public LLM files and country-page language switchers.

## Country URL structure and legacy paths

English country pages use the root-level canonical format `/{country-slug}/` (for example `/bangladesh/`). A translated country page uses `/{lang}/{country-slug}/` (for example `/bn/bangladesh/`). The `/countries/` path is the directory hub. On GitHub Pages, which does not process `public/_redirects` or issue server-side 301 responses, `npm run build` runs `postbuild` and replaces the old `/countries/{slug}/`, `/{lang}/countries/{slug}/` and `/guides/` compatibility pages with static zero-second meta-refresh redirects, `location.replace()` and canonical targets. This is a browser-level static redirect, not an HTTP 301. The `_redirects` file remains in place for Cloudflare Pages and Netlify, where it can provide native 301 responses. For true HTTP redirects while staying on GitHub Pages, a separate edge redirect service or a host that supports redirect rules is required.
