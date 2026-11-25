import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import JsonLd from '@/components/JsonLd';
import CountryDirectory from '@/components/CountryDirectory';
import { abs } from '@/lib/site';
import { pageMeta } from '@/lib/seo';
import { countries, readyCountries } from '@/lib/countries';
import './countries.css';

export const metadata: Metadata = pageMeta({
  title: 'Country Guides & Wish Ideas',
  description: 'Browse all 195 countries by region, open a country page and explore thoughtful wish ideas, local context and practical message-writing guidance.',
  path: '/countries/',
});

const hubIntro = 'Explore the countries below to find context for sending a thoughtful wish to someone who lives there, or to family and friends in the diaspora. Each full guide covers locally observed occasions, greeting customs and the ways people commonly share personal messages, while recognising that traditions differ between communities and households. Every country is listed, even when its detailed guide is still being researched. Use each guide as a starting point, then adapt the message to the person you know. Wishly templates are created on wishly.bd and are available in English and Bengali.';

export default function CountriesPage() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Wish website ideas by country',
    description: 'Country guides to occasions, greeting customs and sharing wishes.',
    url: abs('/countries/'),
    inLanguage: 'en',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: countries.length,
      itemListElement: countries.map((country, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: country.name,
        url: abs(`/${country.slug}/`),
      })),
    },
  };

  return (
    <>
      <JsonLd data={itemList} />
      <PageShell kicker="COUNTRY GUIDES" title="Wish website ideas by country" lead={hubIntro} path="/countries/" name="Countries" cta={false}>
        <section className="global-wrap country-directory-section" aria-label="Browse all countries">
          <CountryDirectory countries={countries.map(({ slug, name, isoCode, region }) => ({ slug, name, isoCode, region }))} readySlugs={readyCountries.map((country) => country.slug)} />
        </section>
      </PageShell>
    </>
  );
}
