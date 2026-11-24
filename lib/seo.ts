import type { Metadata } from 'next';
import { SITE, abs } from './site';

type PageMetaInput = {
  title: string;
  /** Use for pages that should show this exact title without the ' | Wishly' suffix (brand-led titles). */
  absoluteTitle?: boolean;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
};

function fitMetaDescription(value: string, max = 160): string {
  const clean = value.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const shortened = clean.slice(0, max - 1);
  const boundary = shortened.lastIndexOf(' ');
  return `${shortened.slice(0, boundary > 110 ? boundary : max - 1).replace(/[.,;:!?\s]+$/, '')}…`;
}

export function pageMeta({ title, absoluteTitle, description, path, image, keywords, ogType = 'website', publishedTime, modifiedTime }: PageMetaInput): Metadata {
  const url = abs(path);
  const metaDescription = fitMetaDescription(description);
  // Keyword lists are maintained in source/docs for editorial planning; Google does not use meta-keywords as a ranking signal.
  void keywords;
  const selectedImage = image || SITE.ogImage;
  const img = /^https?:\/\//i.test(selectedImage) ? selectedImage : `${SITE.url}${selectedImage}`;
  const openGraph = ogType === 'article'
    ? { type: 'article' as const, siteName: SITE.name, title, description: metaDescription, url, locale: 'en_US', publishedTime, modifiedTime, images: [{ url: img, width: 960, height: 600, alt: title }] }
    : { type: 'website' as const, siteName: SITE.name, title, description: metaDescription, url, locale: 'en_US', images: [{ url: img, width: 960, height: 600, alt: title }] };
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description: metaDescription,
    alternates: { canonical: url, languages: { en: url, 'x-default': url } },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
    openGraph,
    twitter: { card: 'summary_large_image', title, description: metaDescription, images: [img] },
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

export function templateTitle(name: string, categoryLabel: string): string {
  const matchers: Record<string, RegExp> = {
    'birthday': /\bbirthday\b/i,
    'proposal': /\bproposal\b|\bpropose\b/i,
    'wedding': /\bwedding\b/i,
    'miss you': /\bmiss[\s-]?you\b/i,
    'sorry': /\bsorry\b|\bapology\b/i,
    'letter': /\bletter\b/i,
    'anniversary': /\banniversary\b/i,
    'best friend': /\bbest\s*friend\b|\bbestie\b/i,
    'friendship': /\bfriend\b|\bfriendship\b/i,
    'invitation': /\binvitation\b|\binvite\b/i,
    'thank you': /\bthank[\s-]?you\b|\bthanks\b/i,
  };
  const category = categoryLabel.trim().replace(/-/g, ' ');
  const pattern = matchers[category.toLowerCase()];
  const categoryIncluded = pattern?.test(name) ?? name.toLowerCase().includes(category.toLowerCase());
  const suffix = /\b(template|website)\b/i.test(name)
    ? ''
    : categoryIncluded ? ' Template' : ` — ${category} Page`;
  const maxNameLength = 50 - suffix.length;
  let shortName = name.trim();
  if (shortName.length > maxNameLength) {
    shortName = shortName.slice(0, maxNameLength - 1).replace(/\s+\S*$/, '').replace(/[\s:—–-]+$/, '');
    if (!shortName) shortName = name.slice(0, maxNameLength - 1).trim();
    shortName += '…';
  }
  return `${shortName}${suffix}`;
}

export function keywordTitle(keyword: string): string {
  const small = new Set(['a', 'an', 'and', 'for', 'in', 'of', 'on', 'or', 'the', 'to', 'vs', 'with']);
  const titleCase = keyword.split(' ').map((word, index) => {
    const lower = word.toLowerCase();
    return index > 0 && small.has(lower) ? lower : lower.charAt(0).toUpperCase() + lower.slice(1);
  }).join(' ');
  const hasUsefulSuffix = /\b(ideas|guide|checklist|examples|wording|maker|template|templates|how to|vs|tips|message|timeline|without|long distance|best friend)\b/i.test(keyword);
  const candidate = hasUsefulSuffix ? titleCase : `${titleCase}: Ideas & Tips`;
  // Layout title template appends ' | Wishly'; keep the authored title compact.
  if (candidate.length <= 50) return candidate;
  let shortened = candidate.slice(0, 47).replace(/\s+\S*$/, '');
  while (/\b(a|an|and|for|in|of|on|or|the|to|vs|with)$/i.test(shortened)) shortened = shortened.replace(/\s+\S+$/, '');
  return shortened;
}
