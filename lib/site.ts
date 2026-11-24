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
  title: 'Wishly – Birthday Wish & Personal Website Maker',
  shortTitle: 'Personal Website Maker for Digital Gifts',
  description: 'Wishly helps you send a wish as a personal website: birthday pages, digital love letters, proposals and online invitations. Browse real Wishly templates and guides, then create on Wishly.bd.',
  ogImage: '/template-shots/the-birthday-experience.webp',
  social: ['https://www.instagram.com/wishly.bd_', 'https://www.facebook.com/wishlyhq'],
} as const;

export const abs = (path = '/') => `${SITE.url}${path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`}`;

/** Product actions leave the international discovery site and open the main Wishly service. */
export function appLink(path = '/', params: Record<string, string> = {}) {
  const url = new URL(path, `${SITE.appUrl}/`);
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value);
  url.searchParams.set('utm_source', SITE.utmSource);
  url.searchParams.set('utm_medium', 'referral');
  url.searchParams.set('utm_campaign', 'international_launch');
  return url.toString();
}

export function startTemplateLink(slug: string) {
  return appLink('/signup', { next: `/builder/new?template=${slug}` });
}

export const demoLink = (slug: string) => appLink(`/template/${slug}`, { demo: '1' });
