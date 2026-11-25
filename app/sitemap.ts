import type { MetadataRoute } from 'next';
import { abs } from '@/lib/site';
import { occasionList, templates, templatesFor, coverSrc } from '@/lib/templates';
import { guides } from '@/lib/guides';
import { guideVisualFor } from '@/lib/guide-visuals';
import { countries, isPublishable } from '@/lib/countries';
import { countryLanguageAlternates, publishableLanguagesFor, translationFor, isTranslationPublishable } from '@/lib/country-translations';

export const dynamic = 'force-static';

// lastmod is only emitted where we have a real, per-page date (Insights articles: publishedAt/updatedAt).
// Pages without a tracked date omit it: Google ignores lastmod when it is always "today", and
// changefreq/priority are ignored by Google entirely, so they are not emitted either.
// To add a real date for a static page later, put it in PAGE_DATES below.
const PAGE_DATES: Record<string, string> = {
  // '/about/': '2026-11-25',
};
const dateFor = (path: string) => (PAGE_DATES[path] ? { lastModified: new Date(`${PAGE_DATES[path]}T00:00:00Z`) } : {});

// Pexels image URLs carry query strings with raw "&" characters. Unescaped "&" is invalid XML and made
// Google Search Console report a parsing error, so drop the query string (the bare image URL works).
const sitemapImage = (src: string) => (src.startsWith('http') ? src.split('?')[0] : abs(src));

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed: string[] = [
    '/',
    '/templates/',
    '/countries/',
    '/features/',
    '/how-to-make-website/',
    '/insights/',
    '/wish-website-maker/',
    '/wish-website-vs-digital-cards/',
    '/what-is-wishly/',
    '/about/',
    '/faq/',
  ];

  const staticPages = fixed.map((path) => ({
    url: abs(path),
    ...dateFor(path),
    ...(path === '/' ? { images: [abs('/template-shots/a-little-birthday-letter.webp'), abs('/template-shots/the-birthday-experience.webp')] } : {}),
  }));

  const insightPages = guides.map((guide) => ({
    url: abs(`/insights/${guide.slug}/`),
    ...(guide.updatedAt || guide.publishedAt ? { lastModified: new Date(`${guide.updatedAt || guide.publishedAt}T00:00:00Z`) } : {}),
    images: [sitemapImage(guideVisualFor(guide).src)],
  }));

  const categoryPages = occasionList.map((occasion) => ({
    url: abs(`/templates/${occasion.key}/`),
    images: templatesFor(occasion.key).slice(0, 3).map((template) => abs(coverSrc(template.slug))),
  }));

  const templatePages = templates.map((template) => ({
    url: abs(`/template/${template.slug}/`),
    images: [abs(coverSrc(template.slug))],
  }));

  const countryPages: MetadataRoute.Sitemap = countries.flatMap((country) => {
    const languages = publishableLanguagesFor(country.slug);
    const alternates = countryLanguageAlternates(country.slug);
    // Draft English overviews are noindex, so only ready guides (and their reviewed translations) are listed.
    return languages.filter((lang) => lang !== 'en' || isPublishable(country)).map((lang) => {
      const path = lang === 'en'
        ? `/${country.slug}/`
        : `/${lang}/${country.slug}/`;
      const translation = lang === 'en' ? undefined : translationFor(lang, country.slug);
      const reviewedAt = translation && isTranslationPublishable(translation) ? translation.reviewedAt : undefined;
      const reviewedDate = reviewedAt ? new Date(`${reviewedAt}T00:00:00Z`) : undefined;
      return {
        url: abs(path),
        ...(reviewedDate && !Number.isNaN(reviewedDate.getTime()) ? { lastModified: reviewedDate } : {}),
        ...(alternates ? { alternates: { languages: alternates } } : {}),
      };
    });
  });

  return [...staticPages, ...categoryPages, ...templatePages, ...insightPages, ...countryPages];
}
