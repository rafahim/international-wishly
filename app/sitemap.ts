import type { MetadataRoute } from 'next';
import { abs } from '@/lib/site';
import { occasionList, templates, templatesFor, coverSrc } from '@/lib/templates';
import { guides } from '@/lib/guides';
import { guideVisualFor } from '@/lib/guide-visuals';

export const dynamic = 'force-static';

// Update this date whenever page content genuinely changes, so Google gets an honest lastmod.
const LAST_UPDATED = new Date('2026-11-25T00:00:00Z');

// Pexels image URLs carry query strings with raw "&" characters. Unescaped "&" is invalid XML and made
// Google Search Console report a parsing error, so drop the query string (the bare image URL works).
const sitemapImage = (src: string) => (src.startsWith('http') ? src.split('?')[0] : abs(src));

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed: [string, number, 'weekly' | 'monthly'][] = [
    ['/', 1, 'weekly'],
    ['/templates/', 0.9, 'weekly'],
    ['/features/', 0.75, 'monthly'],
    ['/how-to-make-website/', 0.8, 'monthly'],
    ['/guides/', 0.9, 'weekly'],
    ['/what-is-wishly/', 0.8, 'monthly'],
    ['/about/', 0.55, 'monthly'],
    ['/faq/', 0.65, 'monthly'],
  ];

  const staticPages = fixed.map(([path, priority, changeFrequency]) => ({
    url: abs(path),
    lastModified: LAST_UPDATED,
    changeFrequency,
    priority,
    ...(path === '/' ? { images: [abs('/template-shots/a-little-birthday-letter.webp'), abs('/template-shots/the-birthday-experience.webp')] } : {}),
  }));

  const guidePages = guides.map((guide) => ({
    url: abs(`/guides/${guide.slug}/`),
    ...(guide.updatedAt || guide.publishedAt ? { lastModified: new Date(`${guide.updatedAt || guide.publishedAt}T00:00:00Z`) } : {}),
    images: [sitemapImage(guideVisualFor(guide).src)],
    changeFrequency: 'monthly' as const,
    priority: 0.72,
  }));

  const categoryPages = occasionList.map((occasion) => ({
    url: abs(`/templates/${occasion.key}/`),
    lastModified: LAST_UPDATED,
    images: templatesFor(occasion.key).slice(0, 3).map((template) => abs(coverSrc(template.slug))),
    changeFrequency: 'weekly' as const,
    priority: 0.82,
  }));

  const templatePages = templates.map((template) => ({
    url: abs(`/template/${template.slug}/`),
    lastModified: LAST_UPDATED,
    images: [abs(coverSrc(template.slug))],
    changeFrequency: 'monthly' as const,
    priority: 0.62,
  }));

  return [...staticPages, ...categoryPages, ...templatePages, ...guidePages];
}
