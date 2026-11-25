# Wishly Insights editorial workflow

The public editorial section is named **Insights**. Its index is `/insights/` and each article uses `/insights/{slug}/`. Article records remain in `lib/guides.ts` and the supporting editorial data modules; the internal `Guide` type is retained to avoid unnecessary data-model churn.

## Publishing an article

1. Add a complete article record with a unique kebab-case `slug`, a clear primary keyword, a concise title and description, an introduction, structured sections, a conclusion and useful FAQs.
2. Add related article slugs only when they exist in the `guides` collection. Keep `relatedPath` and related article links on the international site.
3. Check the article cover in `lib/guide-visuals.ts`, its canonical path, Article/BlogPosting JSON-LD, FAQ data and publication dates. Do not invent publication or update dates.
4. The Insights index, sitemap, footer links and `llms.txt` discovery files should all use the `/insights/` URL pattern.
5. The former `/guides/` routes are compatibility paths. On GitHub Pages, the `postbuild` script replaces them with zero-second meta-refresh and `location.replace()` documents with canonical targets; this is not an HTTP 301. Hosts that support native `_redirects` rules (Cloudflare Pages/Netlify) can issue the configured 301s instead.

## SEO checks

- Every Insights page has a unique title and description and a self-canonical at `/insights/` or `/insights/{slug}/`.
- The index includes each article once in server-rendered HTML and its CollectionPage/ItemList structured data.
- Each article uses BlogPosting structured data with a matching canonical URL, visible publication date and organization publisher reference.
- Related article links, homepage cards, country-related content, footer links, sitemap entries and AI discovery files point to `/insights/`, never to the legacy `/guides/` URLs.
- After export, inspect `out/insights/index.html`, a sample `out/insights/{slug}/index.html`, `out/sitemap.xml`, and the deployed redirect behaviour.
