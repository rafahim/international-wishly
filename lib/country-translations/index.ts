import { countryBySlug, isPublishable } from '../countries';
import { abs } from '../site';
import { LANGUAGES, type LanguageCode } from '../languages';
import { uiStringsFor } from '../i18n/ui-strings';
import bangladeshBn from './bn/bangladesh';
import indiaBn from './bn/india';
import uaeBn from './bn/united-arab-emirates';
import malaysiaBn from './bn/malaysia';
import indiaHi from './hi/india';
import nepalNe from './ne/nepal';
import uaeAr from './ar/united-arab-emirates';
import malaysiaMs from './ms/malaysia';
import pakistanUr from './ur/pakistan';
import japanJa from './ja/japan';
import philippinesFil from './fil/philippines';
import sriLankaSi from './si/sri-lanka';
import sriLankaTa from './ta/sri-lanka';
import type { CountryTranslation } from './types';

export type { CountryTranslation } from './types';

// AI-drafted local-language content is intentionally unreviewed. A native reviewer must
// add reviewedBy/reviewedAt and set reviewed to true before a translation is indexable.
export const allTranslations: CountryTranslation[] = [
  bangladeshBn, indiaBn, uaeBn, malaysiaBn,
  indiaHi, nepalNe, uaeAr, malaysiaMs, pakistanUr,
  japanJa, philippinesFil, sriLankaSi, sriLankaTa,
];

const translationRegistry = new Map<string, CountryTranslation>(
  allTranslations.map((translation) => [`${translation.lang}:${translation.slug}`, translation]),
);

export function translationFor(lang: string, slug: string): CountryTranslation | undefined {
  if (lang === 'en' || !Object.prototype.hasOwnProperty.call(LANGUAGES, lang)) return undefined;
  return translationRegistry.get(`${lang}:${slug}`);
}

export function isTranslationPublishable(translation: CountryTranslation | undefined): boolean {
  if (!translation || translation.reviewed !== true || !uiStringsFor(translation.lang)) return false;

  const country = countryBySlug[translation.slug];
  if (!country || !isPublishable(country) || !country.content) return false;

  const english = country.content;
  return translation.occasions.length === english.occasions.length
    && translation.sampleWishes.length === english.sampleWishes.length
    && translation.faqs.length === english.faqs.length
    && translation.sensitivities.length >= english.sensitivities.length
    && translation.metaTitle.trim().length > 0
    && translation.metaDescription.trim().length > 0;
}

export function publishableLanguagesFor(slug: string): LanguageCode[] {
  // Every English country URL is now crawlable. Localized versions remain gated
  // by the English editorial check and an actual native-speaker review.
  const country = countryBySlug[slug];
  if (!country) return [];

  const publishedTranslations = allTranslations
    .filter((translation) => translation.slug === slug && isTranslationPublishable(translation))
    .map((translation) => translation.lang);

  return ['en', ...publishedTranslations];
}


// Only native-reviewed, publishable translations appear in the public language switcher.
// Unreviewed translations remain directly accessible as noindex previews, but are not
// linked from the switcher, sitemap, hreflang set, or public LLM discovery files.
const languageDisplayOrder: Partial<Record<string, LanguageCode[]>> = {
  india: ['hi', 'bn'],
  'sri-lanka': ['si', 'ta'],
};

export function switcherLanguagesFor(slug: string, currentLang: LanguageCode): LanguageCode[] {
  const availableLanguages = publishableLanguagesFor(slug);
  if (!availableLanguages.includes(currentLang)) return [];
  const preferredOrder = languageDisplayOrder[slug] || availableLanguages;
  const orderedLanguages = [
    ...preferredOrder.filter((code) => availableLanguages.includes(code)),
    ...availableLanguages.filter((code) => !preferredOrder.includes(code)),
  ];
  return orderedLanguages.filter((code) => code !== currentLang);
}

/** Absolute URL map for reciprocal hreflang metadata and sitemap alternates. */
export function countryLanguageAlternates(slug: string): Record<string, string> | undefined {
  const languageCodes = publishableLanguagesFor(slug);
  if (!languageCodes.some((code) => code !== 'en')) return undefined;

  const languages: Record<string, string> = {};
  for (const code of languageCodes) {
    const path = code === 'en'
      ? `/${slug}/`
      : `/${code}/${slug}/`;
    languages[code] = abs(path);
  }
  languages['x-default'] = abs(`/${slug}/`);
  return languages;
}

// Useful for docs/build assertions without exposing draft translations as public URLs.
export const publishableTranslations = allTranslations.filter(isTranslationPublishable);
