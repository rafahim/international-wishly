import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageShell from '@/components/PageShell';
import { pageMeta } from '@/lib/seo';
import { countries, countryBySlug } from '@/lib/countries';

export const dynamicParams = false;

export function generateStaticParams() {
  return countries.map((country) => ({ country: country.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country: slug } = await params;
  const country = countryBySlug[slug];
  if (!country) return {};
  const metadata = pageMeta({
    title: `Wish ideas for ${country.name}`,
    description: `This country page has moved to its shorter canonical URL.`,
    path: `/${country.slug}/`,
  });
  return { ...metadata, robots: { index: false, follow: true, googleBot: { index: false, follow: true } } };
}

export default async function LegacyCountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country: slug } = await params;
  const country = countryBySlug[slug];
  if (!country) {
    notFound();
    throw new Error('Country not found.');
  }
  return (
    <PageShell
      kicker="COUNTRY GUIDE"
      title={`${country.name} country page has moved`}
      lead={`The official country page now uses the shorter address /${country.slug}/.`}
      path={`/countries/${country.slug}/`}
      name={country.name}
      cta={false}
      showCrumbs={false}
    >
      <section className="global-wrap country-content-section">
        <p><Link href={`/${country.slug}/`}>Open the {country.name} country page</Link></p>
        <p><Link href="/countries/">Browse all countries</Link></p>
      </section>
    </PageShell>
  );
}
