/** Public-facing international discovery site. Product and account actions stay on wishly.bd. */
const cleanUrl = (value: string) => value.replace(/\/$/, '');
const publicUrl = cleanUrl(process.env.NEXT_PUBLIC_SITE_URL || 'https://wishly.rafahim.com');

export const SITE = {
  key: 'wishly-global',
  name: 'Wishly',
  url: publicUrl,
  host: new URL(publicUrl).host,
  appUrl: cleanUrl(process.env.NEXT_PUBLIC_APP_URL || 'https://wishly.bd'),
  utmSource: 'international-site',
  title: 'Wishly: No-Code Website Builder for Birthday & Proposal Wishes',
  shortTitle: 'Personal Website Maker for Digital Gifts',
  description: 'Make a birthday, proposal or love-letter website without coding. Wishly is a no-code wish website builder: pick a template, edit visually, share one link.',
  ogImage: '/og-wishly-international.jpg',
  ogImageSize: { width: 1200, height: 630 },
  social: ['https://www.instagram.com/wishly.bd_', 'https://www.facebook.com/wishlyhq'],
} as const;

/** Optional named author/reviewer. Set NEXT_PUBLIC_AUTHOR_NAME (and optionally NEXT_PUBLIC_AUTHOR_URL) to show a real person on guides. */
export const AUTHOR = {
  name: process.env.NEXT_PUBLIC_AUTHOR_NAME || '',
  url: process.env.NEXT_PUBLIC_AUTHOR_URL || '',
};

export const abs = (path = '/') => `${SITE.url}${path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`}`;

/** Product actions leave the international discovery site and open the main Wishly service. */
export function appLink(path = '/', params: Record<string, string> = {}) {
  const url = new URL(path, `${SITE.appUrl}/`);
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value);
  // No utm_* parameters on purpose: they would make GA4 on wishly.bd record an
  // "international-site / referral" source. `via` is NOT a GA4 attribution
  // parameter; wishly.bd uses it (and then removes it) to add a home-page Back step.
  if (path.replace(/^\/+|\/+$/g, '')) url.searchParams.set('via', 'intl');
  return url.toString();
}

export function startTemplateLink(slug: string) {
  return appLink('/signup', { next: `/builder/new?template=${slug}` });
}

export const demoLink = (slug: string) => appLink(`/template/${slug}`, { demo: '1' });
