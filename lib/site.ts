/**
 * Public-facing international site configuration.
 * Keep the marketing site on its own domain; account and product flows remain on wishly.bd.
 * Set NEXT_PUBLIC_SITE_URL to the independent domain selected for the international launch.
 */
const cleanUrl = (value: string) => value.replace(/\/$/, '');
const publicUrl = cleanUrl(process.env.NEXT_PUBLIC_SITE_URL || 'https://wishly.rafahim.com');

export const SITE = {
  key: 'wishly-global',
  name: 'Wishly',
  url: publicUrl,
  host: new URL(publicUrl).host,
  appUrl: cleanUrl(process.env.NEXT_PUBLIC_APP_URL || 'https://wishly.bd'),
  utmSource: 'international-site',
  title: 'Personal Websites for Birthdays, Love Letters & Life Moments',
  description:
    'Create a personal website for a birthday, proposal, anniversary, invitation or heartfelt note. Choose a design, add your memories and share one thoughtful link with anyone, anywhere.',
  ogImage: '/template-shots/the-birthday-experience.webp',
  social: ['https://www.instagram.com/wishly.bd_', 'https://www.facebook.com/wishlyhq'],
} as const;

export const abs = (path = '/') => `${SITE.url}${path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`}`;

/** All product actions go to the real Wishly app, with attribution for international-site traffic. */
export function appLink(path = '/', params: Record<string, string> = {}) {
  const url = new URL(path, `${SITE.appUrl}/`);
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value);
  url.searchParams.set('utm_source', SITE.utmSource);
  url.searchParams.set('utm_medium', 'referral');
  url.searchParams.set('utm_campaign', 'international_launch');
  return url.toString();
}

/** Continue to the central Wishly editor with the chosen template preselected. */
export function startTemplateLink(slug: string) {
  return appLink('/signup', { next: `/builder/new?template=${slug}` });
}

export const demoLink = (slug: string) => appLink(`/template/${slug}`, { demo: '1' });
