# Wishly International — public site and SEO guide

This project is the international-facing discovery site for Wishly. It has its own visual identity, English editorial pages, occasion collections and practical guides. It is intentionally separate from the Wishly product application.

## What lives where

**This international site** contains the homepage, template catalogue, occasion pages, individual template information pages and editorial guides.

**https://wishly.bd** remains the only product destination. Login, signup, account profiles, editor, dashboard, payments, live demos, custom requests and published websites all open on wishly.bd. Outbound links include UTM parameters so traffic from this site can be attributed in analytics.

## Run locally

```bash
npm ci
npm run dev
```

For a local build:

```bash
NEXT_PUBLIC_SITE_URL=https://your-international-domain.com npm run build
```

The Next.js static export is written to `./out` and can be deployed with GitHub Pages or another static host.

## Important: choose an independent international domain before launch

The supplied archive originally used `wishly.rafahim.com`. The currently published Wishly site says that the old `wishly.rafahim.com` address redirects to `wishly.bd`. A redirecting domain cannot serve this international site as a separate searchable destination.

Before deploying, you can keep `wishly.rafahim.com` as the international hostname, but you must remove its current redirect to `wishly.bd` and point it to this static site instead. Alternatively, choose another independent domain. Do not host this public SEO site on the same exact hostname as the Wishly app.

1. In `public/CNAME`, set the exact international hostname, without `https://` or a path. It currently contains `wishly.rafahim.com`.
2. In GitHub repository **Settings → Secrets and variables → Actions → Variables**, create `NEXT_PUBLIC_SITE_URL` with the full canonical URL, for example `https://wishly.rafahim.com`.
3. Point that hostname's DNS to GitHub Pages and add the same host in **Settings → Pages → Custom domain**. Remove any Cloudflare redirect/worker/page rule that sends it to `wishly.bd`. Enable HTTPS after GitHub provisions the certificate.
4. The deployment workflow checks that `NEXT_PUBLIC_SITE_URL` and `public/CNAME` match. It intentionally stops if the domain has not been configured.

The app destination can be changed with `NEXT_PUBLIC_APP_URL`, but it defaults to `https://wishly.bd` and should stay there unless the real Wishly app moves.

## SEO and content notes

- Canonical URLs and the sitemap use `NEXT_PUBLIC_SITE_URL`.
- `robots.txt`, structured data, Open Graph metadata and page-level titles/descriptions are generated from the international site's URL.
- `/guides/` contains original informational content about birthday website ideas, digital love letters and online proposal pages. These pages are designed to answer useful searches, not repeat the Wishly app homepage.
- Occasion and template pages keep the existing template catalogue and preview images, but use rewritten international copy and link creation/demo actions to wishly.bd.
- The site is English-first and identifies selected Bengali-language templates. It does not currently publish paired translated URLs, so no `hreflang` pairs are declared.

After the domain is live, verify it in Google Search Console, submit `/sitemap.xml`, and connect a GA4 measurement ID through the `NEXT_PUBLIC_GA_ID` repository variable. Ranking and traffic depend on domain history, competition, backlinks, page quality and indexing; the redesign itself cannot guarantee a traffic volume or ranking position.

## Optional GitHub Actions variables

- `NEXT_PUBLIC_SITE_URL` — required; full public URL of the independent international domain.
- `NEXT_PUBLIC_GA_ID` — optional GA4 measurement ID.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — optional Google Search Console verification token.
