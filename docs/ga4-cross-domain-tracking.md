# Wishly International → Wishly.bd analytics and navigation

## What the international site sends

All product/account links built with `appLink()` point to `https://wishly.bd`.

- **No `utm_*` parameters any more.** They made wishly.bd GA4 report `international-site / referral`.
- Inner pages get `via=intl` (not a GA4 attribution parameter). wishly.bd removes it again (see Back behavior).
- Clicks on wishly.bd links are sent with `referrerPolicy="no-referrer"` (see `components/AppOutboundTracking.tsx`), so wishly.bd does not see wishly.rafahim.com as a referrer.
- The Google tag / GTM scripts and the `linker` domains in `app/layout.tsx` are unchanged, so the `_gl` cross-domain parameter still keeps the session.

Optional extra safety in GA4 (wishly.bd property): **Admin → Data streams → Configure tag settings → List unwanted referrals → add `wishly.rafahim.com`**.

The international site also pushes a `wishly_app_outbound_click` event to the GTM data layer on product-site link clicks (this is an event, not a traffic source).

## Required GA4 setup on both domains

Source-code changes on this project cannot configure the Google Analytics property or the separate wishly.bd application by themselves. To join the visitor journey across both domains:

1. Install the same Google tag / GA4 web stream (same Measurement ID and property) on `wishly.rafahim.com` and `wishly.bd`. If using GTM, publish the corresponding Google tag in the container installed on both sites.
2. In Google Analytics, open **Admin → Data streams → Web stream → Configure tag settings → Configure your domains**.
3. Add both `wishly.rafahim.com` and `wishly.bd` as domains for cross-domain measurement, then save.
4. If you manage the Google tag in GTM, make sure the Google tag settings use the same linked domains. The international source includes a linker configuration for both domains, but the destination must also use the same measurement setup and accept the linker.
5. Verify a click from the international site. The destination URL should briefly include a `_gl` linker parameter when cross-domain measurement is active. Confirm in GA4 DebugView/Realtime that the visit continues under the same client/session identity.

If the sites use different GA4 properties or Measurement IDs, UTMs can still show `international-site / referral` as the arriving campaign source, but GA4 cannot stitch the two domains into one cross-domain user journey.

## Browser Back behavior

Wanted history: Back retraces how the same page is reached inside wishly.bd; the last Back returns to the international page.
- Template demo: `international page → / → /templates → /template/<slug>`.
- "Use template": `international page → / → /templates → /template/<slug> → /builder/new?template=<slug>`.
- Insight article: `international page → / → /insights → /insights/<slug>`.
- Signup, login, dashboard and other pages: `international page → / → that page`.
The flows live in `parents()` inside `docs/wishly-bd-side/IntlBackStep.tsx`.

A site cannot edit another origin's history, so wishly.bd must do it: add `docs/wishly-bd-side/IntlBackStep.tsx` to the wishly.bd root layout. It reacts to `?via=intl`, makes the current entry the home page (adds /templates too for template demos), pushes the real page, and removes `via` from the URL. Do not change links to `target="_blank"` or programmatic redirects.

## Occasion browsing behavior

The “Start with a feeling” cards now link to the matching local `/templates/{occasion}/` collection on `wishly.rafahim.com`. The duplicate “Browse designs here” text row below those cards has been removed.
