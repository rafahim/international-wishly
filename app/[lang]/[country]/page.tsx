import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CountryArticle from '@/components/CountryArticle';
import { countryBySlug } from '@/lib/countries';
import { countryLanguageAlternates, isTranslationPublishable, translationFor, allTranslations } from '@/lib/country-translations';
import { LANGUAGES, isNonEnglishLanguage } from '@/lib/languages';
import { uiStringsFor } from '@/lib/i18n/ui-strings';
import { pageMeta } from '@/lib/seo';
import '../../countries/countries.css';

export const dynamicParams = false;

export function generateStaticParams() {
  return allTranslations.map(({ lang, slug }) => ({ lang, country: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; country: string }> }): Promise<Metadata> {
  const { lang, country: slug } = await params;
  if (!isNonEnglishLanguage(lang)) return {};

  const translation = translationFor(lang, slug);
  if (!translation) return {};

  const language = LANGUAGES[lang];
  const publishable = isTranslationPublishable(translation);
  const path = `/${lang}/${slug}/`;
  const languageAlternates = publishable ? countryLanguageAlternates(slug) : undefined;
  const metadata = pageMeta({
    title: translation.metaTitle,
    description: translation.metaDescription,
    path,
    ogType: 'website',
    locale: language.ogLocale,
    keywords: [translation.primaryKeyword],
    alternates: languageAlternates ? { languages: languageAlternates } : undefined,
  });

  if (publishable) return metadata;
  return {
    ...metadata,
    robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  };
}

export default async function TranslatedCountryPage({ params }: { params: Promise<{ lang: string; country: string }> }) {
  const { lang, country: slug } = await params;
  if (!isNonEnglishLanguage(lang)) {
    notFound();
    throw new Error('Unsupported country-page language.');
  }

  const translation = translationFor(lang, slug);
  const country = countryBySlug[slug];
  const ui = uiStringsFor(lang);
  if (!translation || !country || !ui || !country.content) {
    notFound();
    throw new Error('Country translation is not available.');
  }

  return <CountryArticle country={country} content={translation} lang={lang} ui={ui} />;
}
