import type { Metadata } from 'next';
import { SITE, abs } from './site';

export function pageMeta({ title, description, path, image }: { title: string; description: string; path: string; image?: string }): Metadata {
  const url = abs(path);
  const img = `${SITE.url}${image || SITE.ogImage}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: 'website', siteName: SITE.name, title, description, url, locale: 'en_US', images: [{ url: img, width: 960, height: 600, alt: title }] },
    twitter: { card: 'summary_large_image', title, description, images: [img] },
  };
}

export const crumbs = (items: [string, string][]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(path) })),
});

export const faqLd = (faqs: [string, string][]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
});
