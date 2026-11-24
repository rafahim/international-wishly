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
- [ ] Test the browser Back button from Wishly.bd to ensure its own navigation uses normal push history rather than replacing the entry point.
- [ ] Check that all template demo and preview destinations work on desktop and mobile.

## Google Search Console

1. Add and verify the `wishly.rafahim.com` Domain property (or a URL-prefix property if DNS verification is not available).
2. Submit `https://wishly.rafahim.com/sitemap.xml`.
3. Inspect the homepage, `/templates/`, `/guides/`, a category page, a template detail page and several guide articles.
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
- [ ] Expand guides only when Search Console reveals a distinct unanswered question; do not create thin country-name swaps.
- [ ] Track the path from international site to Wishly.bd with the existing UTM parameters and measure signup completion separately on the main product site.
- [ ] Check Core Web Vitals and mobile usability, then compress or resize assets where the data shows a problem.
- [ ] Refresh article dates only when the content has been materially reviewed or updated.

## What SEO cannot promise

No source-code change guarantees first-page placement or a specific amount of traffic. Ranking depends on crawling and indexing, usefulness, competition, links and references, site performance, product fit, and measured search demand. Treat keyword ideas as hypotheses and validate them with Search Console and a keyword research tool.


## Analytics verification
- Confirm Google Tag Manager container `GTM-N7X9SNJ3` loads on all routes.
- Test the container with GTM Preview / Google Tag Assistant after deployment.
- If GA4 is configured in GTM, do not also enable the same GA4 property through `NEXT_PUBLIC_GA_ID`, or page views may be counted twice.
