# Country translation workflow

Country translations are static, per-URL versions of an English country guide. English country pages use `/{slug}/`; translated versions use `/{lang}/{slug}/`. A language is never selected automatically. Do not add IP detection, browser-language detection, language-changing redirects, cookies, or client-side translation. Legacy country paths resolve to the same language's shorter URL; they must never change a visitor's language. The GitHub Pages postbuild step creates static redirect documents because GitHub Pages does not execute `_redirects` rules.

## Add a language

1. Add the language to `lib/languages.ts` with its code, English name, native name, text direction and Open Graph locale. The `[lang]` segment is reused for two static URL shapes: a root-level English country slug (`/{country-slug}/`) and a registered non-English language prefix on the translated route (`/{lang}/{country-slug}/`). Only registered non-English language codes are emitted for translated pages.
2. Add complete, natural country-page UI strings to `lib/i18n/ui-strings.ts`. The page cannot be publishable until the language has a UI dictionary entry.
3. Add one translation module per country at `lib/country-translations/{lang}/{slug}.ts`. Register each module in `lib/country-translations/index.ts`. A missing pair is not a route.
4. Match the English guide's facts, number of occasions, sample wishes and FAQs. Include at least as many sensitivity notes as the English version. Translate naturally rather than word-for-word; do not introduce facts, exact festival dates or customs absent from the English source.
5. Use the installed local Bengali font for `bn`. Other scripts use system font stacks. Do not hotlink external fonts. For RTL languages, set `dir: 'rtl'` in the registry and review the page's logical spacing and alignment on mobile.

## Review before publishing

Every AI-drafted translation must start with `reviewed: false`. It is generated as a static preview page with `noindex,follow`, and is not listed in the sitemap, hreflang alternates, or either public `llms` file. Unreviewed translations do not appear in any country-page language switcher, including on their own preview page. Reviewers can open the known preview URL directly. Only after native review and all publication checks pass does the English page show the target language by its native name and the translated page show an EN return link. Do not promote machine-translated content directly.

A native speaker must review the complete page and then set:

```ts
reviewed: true,
reviewedBy: 'Full name of native reviewer',
reviewedAt: 'YYYY-MM-DD',
```

The reviewer should:

- Check that every factual claim, date-calendar relationship, custom, app reference and sensitivity is unchanged from the reviewed English country guide.
- Check that the tone sounds natural in the target language and is suitable for the country and intended recipient.
- Check spelling, punctuation, names of festivals, transliteration and consistency across the intro, headings, wishes and FAQs.
- Check sensitive religious, cultural and historical wording; remove language that stereotypes a group or implies everyone celebrates the same occasion.
- Check the rendered page on mobile. For Urdu, Arabic and Persian, confirm RTL text alignment, lists, inline links, switcher and CTA order.
- Confirm the Bengali/other-language SEO title and description are unique and fit the agreed editorial limits.

`isTranslationPublishable()` enforces that `reviewed === true`, the matching English guide passes `isPublishable()`, the UI strings exist, the translated occasion/sample-wish/FAQ counts match the English guide, the sensitivity count is at least as large, and the translated title and description are non-empty. A failed check means the translated URL remains a noindex preview.

## URLs, canonical and hreflang

- English URLs (`/{slug}/`) remain canonical to themselves. The `/countries/` path is only the directory hub. On GitHub Pages, the postbuild step writes a zero-second meta-refresh + `location.replace()` document with a canonical target for legacy `/countries/{slug}/` and `/{lang}/countries/{slug}/` paths. This is a static browser redirect, not an HTTP 301; `public/_redirects` provides native 301s only on hosts such as Cloudflare Pages or Netlify. Translated URLs also canonicalise to themselves; never canonicalise a translation to English.
- When a country has no publishable translation, it has no hreflang tags.
- Once at least one translation is publishable, every publishable language version emits reciprocal `rel="alternate"` links for every publishable version, including itself, plus `hreflang="x-default"` pointing to the English URL.
- Use plain language codes (`bn`, `ur`, `hi`) unless genuinely separate regional variants of the same language exist.
- A version that is not publishable is excluded from every hreflang set, sitemap and both `llms` files. Unreviewed drafts do not appear in any country-page switcher. The switcher appears only after a translation passes the native-review and content checks; every version then shows its current language by native name and links to the other publishable versions, including EN.
- After approval, add each newly publishable translated URL and its language to `public/llms.txt` and `public/llms-full.txt`; never list a preview URL.
- Sitemap entries list each publishable URL separately and include the same alternate-language set. `reviewedAt` may be used as `lastModified` only when present and valid.

## Rollout

Publish translations in small batches after review. Check Search Console for **“Crawled - currently not indexed”**, canonical inconsistencies and hreflang errors after each batch. Correct the underlying content or technical issue before promoting additional translations. Wishly templates remain available in English and Bengali only; country-page translation does not change template-language support.
