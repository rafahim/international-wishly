import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageShell from '@/components/PageShell';
import JsonLd from '@/components/JsonLd';
import CountryArticle from '@/components/CountryArticle';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { pageMeta, crumbs } from '@/lib/seo';
import { SITE, abs } from '@/lib/site';
import { countries, countryBySlug, isPublishable, neighbouringCountries } from '@/lib/countries';
import { countryLanguageAlternates } from '@/lib/country-translations';
import { UI_STRINGS } from '@/lib/i18n/ui-strings';
import '../countries/countries.css';

// The existing [lang] segment is deliberately reused for root-level English
// country slugs (for example /india/). Static site sections such as /about/
// and /insights/ keep their more-specific routes and cannot collide with a
// country slug because none of the 195 slugs use those reserved names.
export const dynamicParams = false;

export function generateStaticParams() {
  return countries.map((country) => ({ lang: country.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: slug } = await params;
  const country = countryBySlug[slug];
  if (!country) return {};

  const path = `/${country.slug}/`;
  if (isPublishable(country) && country.content) {
    const languageAlternates = countryLanguageAlternates(country.slug);
    return pageMeta({
      title: country.content.metaTitle,
      description: country.content.metaDescription,
      path,
      ogType: 'website',
      keywords: [country.content.primaryKeyword],
      alternates: languageAlternates ? { languages: languageAlternates } : undefined,
    });
  }

  // Draft overview pages share most of their text, so keep them out of the index (and the sitemap)
  // until a researched, country-specific guide is published. They stay crawlable and linked.
  const draftMetadata = pageMeta({
    title: `Wish ideas for ${country.name}`,
    description: `Find wish ideas for ${country.name}, explore nearby countries and use practical guidance for a thoughtful message while the full local guide is researched.`,
    path,
    ogType: 'website',
    keywords: [`wish ideas for ${country.name}`, `${country.name} country guide`],
  });
  return { ...draftMetadata, robots: { index: false, follow: true, googleBot: { index: false, follow: true } } };
}

export default async function EnglishCountryPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: slug } = await params;
  const country = countryBySlug[slug];
  if (!country) {
    notFound();
    throw new Error('Country not found.');
  }

  if (isPublishable(country) && country.content) {
    return <CountryArticle country={country} content={country.content} lang="en" ui={UI_STRINGS.en} />;
  }

  const pagePath = `/${country.slug}/`;
  const neighbouring = neighbouringCountries(country.slug);
  const pageDescription = `A country resource for sending a thoughtful personal message to someone in ${country.name}.`;
  const pageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Wish ideas for ${country.name}`,
    description: pageDescription,
    inLanguage: 'en',
    url: abs(pagePath),
    isPartOf: { '@id': `${SITE.url}/#website` },
    publisher: { '@id': `${SITE.url}/#organization` },
  };

  return (
    <>
      <JsonLd data={pageLd} />
      <PageShell
        kicker={`${country.region.toUpperCase()} · COUNTRY RESOURCE`}
        title={`Wish ideas for ${country.name}`}
        lead={`A starting point for sending a personal wish to someone in ${country.name}, whether they live there or are part of the diaspora. The full guide to local occasions, greeting customs and sharing practices is still being researched.`}
        path={pagePath}
        name={country.name}
        showCrumbs={false}
        cta={false}
        className="country-article-page country-draft-page"
        contentLang="en"
        contentDir="ltr"
        aside={<LanguageSwitcher countrySlug={country.slug} currentLang="en" label={UI_STRINGS.en.languageSwitcherLabel} />}
      >
        <JsonLd data={crumbs([['Home', '/'], ['Countries', '/countries/'], [country.name, pagePath]])} />
        <section className="global-wrap country-content-section country-overview-section">
          <div className="country-overview-panel">
            <span className="country-overview-eyebrow">COUNTRY OVERVIEW</span>
            <h2>{country.name} at a glance</h2>
            <p>{pageDescription} This page is kept useful as a starting point without assuming that everyone in a country shares the same customs, language or celebrations.</p>
            <dl className="country-overview-facts">
              <div><dt>Region</dt><dd>{country.region}</dd></div>
              <div><dt>Country code</dt><dd>{country.isoCode}</dd></div>
              <div><dt>Guide status</dt><dd>Further local research in progress</dd></div>
            </dl>
          </div>
        </section>
        <section className="global-wrap country-content-section">
          <h2>Before sending a wish</h2>
          <ul>
            <li>Start with what you know about the recipient rather than assuming their preferences from their country or background.</li>
            <li>For a religious or cultural occasion, check that the person celebrates it before choosing a greeting.</li>
            <li>Use the level of formality and language that already feels natural in your relationship.</li>
            <li>For someone living abroad or in another time zone, choose a sending time that is considerate of their local day.</li>
          </ul>
          <p>The detailed {country.name} guide is being prepared with country-specific sources. Until that research is complete, these general suggestions are deliberately not presented as local customs.</p>
          <p className="country-support-note">Wishly templates are available in English and Bengali.</p>
        </section>
        <section className="global-wrap country-content-section">
          <h2>Explore related Wishly resources</h2>
          <ul className="country-draft-links">
            <li><Link href="/templates/">Browse wish website templates</Link></li>
            <li><Link href="/insights/">Read practical wish-writing insights</Link></li>
            <li><Link href="/countries/">Explore all 195 country pages</Link></li>
          </ul>
          <div className="country-related-block">
            <h2>Nearby country pages</h2>
            <ul className="country-draft-links">
              {neighbouring.map((item) => <li key={item.slug}><Link href={`/${item.slug}/`}>{item.name}</Link></li>)}
            </ul>
          </div>
        </section>
      </PageShell>
    </>
  );
}
