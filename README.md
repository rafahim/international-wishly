# Wishly International Website

Primary marketing/SEO domain: https://wishly.rafahim.com
Product, login, signup, editor, dashboard, payments and template publishing: https://wishly.bd

## Brand alignment
- Uses the same Wishly logo assets and pink/violet brand palette as the main Wishly.bd source.
- Header follows the main Wishly navigation style, with **Try it free** and **Login** actions.
- Main product actions and menu items not hosted on this international site route to wishly.bd with UTM attribution.
- The homepage communicates **11+ ways to celebrate** and **53+ templates and more**, without treating those as a fixed catalogue limit.

## SEO content
- 29 English-language guides targeting distinct international search intents.
- Canonical URLs and Open Graph metadata use wishly.rafahim.com.
- Sitemap and robots files are included; submit the sitemap in Google Search Console after deployment.
- Search-volume values are not fabricated. Validate keyword demand with Google Search Console / Keyword Planner after launch.

## Deploy
1. Keep the GitHub Pages custom domain as `wishly.rafahim.com` (the `public/CNAME` file is already set).
2. Point the DNS for `wishly.rafahim.com` to the hosting provider serving this project and remove the old redirect to wishly.bd.
3. Set `NEXT_PUBLIC_SITE_URL=https://wishly.rafahim.com` and `NEXT_PUBLIC_APP_URL=https://wishly.bd`.
4. Configure the repository's build workflow and deploy.
5. Verify canonical tags, sitemap, robots.txt, and the login/signup links after deployment.

The uploaded Wishly.bd source archive was used as the reference for the logo, navigation component styling, and brand CSS. This package is a separate international marketing site; it does not copy the Wishly.bd account backend.
