# Wishly International — SEO Launch Checklist

This is a practical pre-launch and post-launch checklist. Source changes alone do not register the site with Google or guarantee search rankings.

## Before deployment

- [ ] Set `NEXT_PUBLIC_SITE_URL=https://wishly.rafahim.com`.
- [ ] Set `NEXT_PUBLIC_APP_URL=https://wishly.bd`.
- [ ] Configure `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` with the exact Search Console verification token.
- [ ] Configure `NEXT_PUBLIC_GA_ID` only if a valid Google Analytics 4 measurement ID is available and consent/privacy requirements are met.
- [ ] Make sure `wishly.rafahim.com` resolves to this international site and no longer redirects all requests to `wishly.bd`.
- [ ] Run `npm ci` and `npm run build`; confirm the static export creates the expected `out/` directory and no broken routes.
- [ ] Test canonical tags, page titles, descriptions, Open Graph previews, image URLs, `robots.txt` and `sitemap.xml` on the deployed domain.
- [ ] Test all product CTAs: they must lead to the intended Wishly.bd page in the same tab.
- [ ] Add `docs/wishly-bd-side/IntlBackStep.tsx` to the wishly.bd root layout, then test Back from a wishly.bd inner page: it must show wishly.bd home first, then this site.
- [ ] Check that all template demo and preview destinations work on desktop and mobile.

## Google Search Console

1. Add and verify the `wishly.rafahim.com` Domain property (or a URL-prefix property if DNS verification is not available).
2. Submit `https://wishly.rafahim.com/sitemap.xml`.
3. Inspect the homepage, `/templates/`, `/insights/`, a category page, a template detail page and several insight articles.
4. Use URL Inspection to confirm Google sees the intended canonical, indexability and rendered main content.
5. Review Page indexing reports for `noindex`, redirect, duplicate canonical, soft-404 and blocked-resource issues.
6. Request indexing for a small set of important updated pages; do not repeatedly submit every URL.

## Bing and other discovery

- [ ] Add the domain to Bing Webmaster Tools and submit the sitemap.
- [ ] Verify that all image URLs used in page HTML are crawlable and return a successful response.
- [ ] Ensure important internal links are standard crawlable anchors and not hidden behind click-only JavaScript actions.

## First 30–90 days

- [ ] Review Search Console impressions, clicks, CTR, average position, query and country dimensions weekly.
- [ ] Compare country-level query language before creating a translated or localized page.
- [ ] Improve pages that receive impressions but few clicks by checking whether title and snippet match the actual query.
- [ ] Expand Insights articles only when Search Console reveals a distinct unanswered question; do not create thin country-name swaps.
- [ ] Track the path from international site to Wishly.bd with the `wishly_app_outbound_click` GTM event (UTMs were removed on purpose so wishly.bd GA4 does not show a referral source) and measure signup completion separately on the main product site.
- [ ] Check Core Web Vitals and mobile usability, then compress or resize assets where the data shows a problem.
- [ ] Refresh article dates only when the content has been materially reviewed or updated.

## What SEO cannot promise

No source-code change guarantees first-page placement or a specific amount of traffic. Ranking depends on crawling and indexing, usefulness, competition, links and references, site performance, product fit, and measured search demand. Treat keyword ideas as hypotheses and validate them with Search Console and a keyword research tool.


## Analytics verification
- Confirm Google Tag Manager container `GTM-N7X9SNJ3` loads on all routes.
- Test the container with GTM Preview / Google Tag Assistant after deployment.
- If GA4 is configured in GTM, do not also enable the same GA4 property through `NEXT_PUBLIC_GA_ID`, or page views may be counted twice.

## AI search (GEO / AEO) checklist
- [ ] After deploy, open /robots.txt, /llms.txt and /llms-full.txt and confirm they load (HTTP 200).
- [ ] Submit the sitemap to Google Search Console and Bing Webmaster Tools (ChatGPT, Copilot and others rely on Bing's index).
- [ ] Validate JSON-LD on /, /wish-website-maker/, /what-is-wishly/ and /faq/ with Google's Rich Results Test.
- [ ] Keep the answer-first definition ("Wishly is a no-code website builder for personal wishes") consistent everywhere.
- [ ] Get mentions: Instagram/Facebook bios, wishly.bd footer link, Product Hunt, Reddit/Quora answers, Medium/LinkedIn posts, YouTube tutorials. AI assistants cite what many trusted pages say.
- [ ] Re-test monthly by asking ChatGPT, Gemini, Claude and Perplexity: "best way to make a birthday website without coding".


## Hosting headers (important)
`public/_headers` (cache + security headers) is **ignored by GitHub Pages**. For long image/JS caching and
security headers to actually apply, host the `out/` folder on Cloudflare Pages (or Netlify) instead, or add
the same rules in Cloudflare's dashboard in front of GitHub Pages. GitHub Pages serves a fixed 10-minute cache.

## Pending manual steps
- [ ] Run `npm run localize-images` once (needs internet) to stop hotlinking Pexels, then commit `public/guide-images/` and `lib/guide-visuals.ts`.
- [ ] Set `NEXT_PUBLIC_AUTHOR_NAME` / `NEXT_PUBLIC_AUTHOR_URL` (GitHub repo variables) to show a real named author on Insights articles.
- [ ] For a translated country guide, follow `docs/translation-workflow.md`; the site generates reciprocal `alternates.languages` only for reviewed, publishable versions.
- [ ] CSS: `app/layout.tsx` imports both the purged `globals.css` and the unpurged `design-system/nav-*/tablet/responsive-fixes` files that the purge script already merged into it. Test removing those imports to cut CSS size, checking pages visually.

## Country guide publishing workflow

- [ ] Keep every country in `lib/countries.ts` as `status: 'draft'` until its full content object has been researched, written and checked.
- [ ] Before promotion, follow `docs/countries-content-prompt.md` and verify local occasions and their calendar timing, greeting customs, messaging-channel evidence and relevant sensitivities using reliable, country-specific sources.
- [ ] Add the complete content object for the country (including at least 3 occasions, 3 sample wishes, 1 sensitivity, sharing context, 3 FAQs and SEO metadata), then add its slug to `countryStatuses` in `lib/countries.ts` with the value `'ready'`.
- [ ] Confirm `isPublishable(country)` returns true, all related occasion keys exist in `OCCASIONS`, and all related guide slugs exist in `lib/guides.ts`.
- [ ] Check the generated page for 800–1,200 words of original country-specific text, correct canonical metadata, Article/WebPage and FAQ structured data, and working internal links.
- [ ] Confirm every country URL appears in the sitemap and the all-country JSON-LD ItemList. The hub's “Guide ready” badge is reserved for full researched guides; short draft overviews remain clearly labelled as in progress. Add full-guide summaries to the AI text files when content is genuinely ready.
- [ ] Publish new ready country guides in batches of 15–30 per week rather than releasing a large set of lightly reviewed pages at once.
- [ ] After each batch, monitor Google Search Console's Page indexing report and URL Inspection, paying particular attention to **“Crawled - currently not indexed”**. Improve pages where that status persists; do not promote additional thin pages simply to meet a batch target.

## Languages

- [ ] Add a language in `lib/languages.ts`, then add its country-page UI strings in `lib/i18n/ui-strings.ts` and translation modules under `lib/country-translations/{lang}/`.
- [ ] Keep every generated translation at `reviewed: false` until a native speaker checks the facts against the English guide, natural phrasing, spelling, sensitive wording and (for RTL languages) the mobile layout.
- [ ] Only set `reviewed: true` after recording `reviewedBy` and `reviewedAt`. `isTranslationPublishable()` also checks that the English country guide is publishable, the translated arrays meet the matching content counts, and UI strings exist for the language.
- [ ] Confirm the language switcher points to a real root-level country-language route (`/{lang}/{country-slug}/`); unreviewed routes remain noindex and are hidden from the public switcher. Reciprocal hreflang links (including `x-default`), self-canonical translation metadata, sitemap alternates and public `llms` entries must include only reviewed translations.
- [ ] Publish translated country pages in small batches and monitor Search Console for **“Crawled - currently not indexed”** and hreflang errors. Do not publish machine translations simply to increase language coverage.

## Country-page indexing release check

All 195 English country pages use root-level URLs (`/{country-slug}/`), are crawlable, self-canonical and included in `sitemap.xml`; `/countries/` is the directory hub. `status: draft` is now an editorial label for a concise overview whose full local guide is still in progress; it does not add `noindex`. Keep the “Guide ready” badge and full-guide editorial status behind `isPublishable(country)`. AI-drafted translations remain unpublished until a native speaker has reviewed them and set `reviewed: true` with reviewer details. After deployment, submit `https://wishly.rafahim.com/sitemap.xml` in Search Console, inspect country URLs, run the live URL test, and request indexing for priority pages where eligible. Google controls the final indexing decision. Run `node scripts/audit-country-indexing.mjs` after `npm run build` to verify the exported HTML and sitemap. See `docs/country-indexing-status.md` for the current URL counts and the full procedure.
