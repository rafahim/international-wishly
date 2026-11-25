import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageShell from '@/components/PageShell';
import { countryBySlug } from '@/lib/countries';
import { allTranslations, translationFor } from '@/lib/country-translations';
import { LANGUAGES, isNonEnglishLanguage } from '@/lib/languages';
import { pageMeta } from '@/lib/seo';
import '../../../countries/countries.css';

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
  const metadata = pageMeta({
    title: translation.metaTitle,
    description: `This translated country page has moved to its shorter canonical URL.`,
    path: `/${lang}/${slug}/`,
    locale: language.ogLocale,
  });
  return { ...metadata, robots: { index: false, follow: true, googleBot: { index: false, follow: true } } };
}

export default async function LegacyTranslatedCountryPage({ params }: { params: Promise<{ lang: string; country: string }> }) {
  const { lang, country: slug } = await params;
  if (!isNonEnglishLanguage(lang)) {
    notFound();
    throw new Error('Unsupported country-page language.');
  }
  const translation = translationFor(lang, slug);
  const country = countryBySlug[slug];
  if (!translation || !country) {
    notFound();
    throw new Error('Country translation is not available.');
  }
  const nativeName = LANGUAGES[lang].nativeName;
  return (
    <PageShell
      kicker="COUNTRY GUIDE"
      title={`${country.name} · ${nativeName}`}
      lead={`This language version now uses the shorter address /${lang}/${slug}/.`}
      path={`/${lang}/countries/${slug}/`}
      name={country.name}
      cta={false}
      contentLang={lang}
      contentDir={LANGUAGES[lang].dir}
      showCrumbs={false}
    >
      <section className="global-wrap country-content-section">
        <p><Link href={`/${lang}/${slug}/`}>Open the {nativeName} version of the {country.name} guide</Link></p>
        <p><Link href={`/${slug}/`}>Open the English version</Link></p>
      </section>
    </PageShell>
  );
}
