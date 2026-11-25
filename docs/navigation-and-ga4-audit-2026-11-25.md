# Navigation and GA4 source audit — 25 November 2026

## Applied changes

- Removed the Insights item from the desktop header navigation and the shared mobile/login Explore menu. Insights remains available from the footer and internal site links.
- Changed all eleven “Start with a feeling” homepage cards to local `/templates/{occasion}/` pages on `wishly.rafahim.com`.
- Removed the duplicate “Browse designs here” row beneath the occasion cards.
- Kept product/account links as ordinary same-tab anchors to Wishly.bd.
- Standardised product links through `appLink()` (UTMs removed later; see ga4-cross-domain-tracking.md).
- Added a GTM data-layer event named `wishly_app_outbound_click` with source-page and destination-link details.
- Added the Google linker configuration for `wishly.rafahim.com` and `wishly.bd` before the GTM/GA configuration.
- Replaced the one plain hard-coded Wishly.bd link found in the how-to guide with `appLink('/')` so it also carries attribution parameters.
- Added `docs/ga4-cross-domain-tracking.md` with the required setup on the Wishly.bd side.

## Browser history behavior

This project does not prevent the browser Back action, call `history.pushState`/`replaceState`, use `window.location.replace`, or open Wishly.bd product links in a new tab.

Normal same-tab history is therefore preserved. For example, if a visitor goes from an international page to Wishly.bd home, then navigates inside Wishly.bd to a custom-template page, Back returns to Wishly.bd home and the next Back returns to the international page. If an international link opens a deep Wishly.bd page directly, Back correctly returns to the international page because no intermediate Wishly.bd home visit occurred. Creating an extra Wishly.bd home history entry for a direct deep link would require a deliberate change to the Wishly.bd application's navigation flow; this international static-export project cannot safely manufacture a cross-origin history entry.

## Analytics dependency on Wishly.bd

The international website can attach campaign parameters and linker values to outbound URLs, but attribution is only collected when Wishly.bd runs a working Google Analytics/Google tag. For cross-domain session stitching, both domains must use the same GA4 property / Google tag and both domains must be configured in GA4 Admin. The destination site must accept the `_gl` linker parameter. If the properties differ, UTM campaign attribution still works on the destination property, but cross-domain user/session stitching does not.

For click-level events, configure a GTM Custom Event trigger named `wishly_app_outbound_click` and a GA4 Event tag in the GTM container that serves the destination measurement ID.

## Source checks

- Header and mobile Explore nav source no longer contains an Insights entry.
- All 11 occasion cards point to local `/templates/{occasion}/` routes.
- The duplicate occasion text row is absent.
- `appLink()` no longer adds UTMs (removed to avoid a referral source in wishly.bd GA4); inner pages get `via=intl`.
- App outbound event includes `link_url`, `link_domain`, `link_path`, `link_text`, `source_page`, and `source_domain`.
- App links are normal same-tab anchors; the tracker does not cancel clicks or manipulate history.
- The hard-coded Wishly.bd link found in the how-to guide was converted to the tracked link helper.

## Build status

Syntax transpilation passed for the six changed TypeScript/TSX files. Full `npm run typecheck` could not pass because this source archive has no `node_modules` (Next.js, React, and their type declarations are unavailable). `npm run build` stops with `next: not found`. Install the project dependencies and run both commands before deployment.
