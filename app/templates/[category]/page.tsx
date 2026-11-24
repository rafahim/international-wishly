import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TemplateBrowser from '@/components/TemplateBrowser';
import JsonLd from '@/components/JsonLd';
import { abs, appLink } from '@/lib/site';
import { crumbs, pageMeta } from '@/lib/seo';
import { OCCASION_COPY } from '@/lib/content';
import { coverSrc, occasionLabel, occasionList, templates, templatesFor } from '@/lib/templates';

export const dynamicParams = false;
export function generateStaticParams() {
  return occasionList.map((o) => ({ category: o.key }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const copy = OCCASION_COPY[category];
  const list = templatesFor(category);
  if (!copy || !list.length) return {};
  return pageMeta({ title: copy.title, description: copy.intro.slice(0, 158).replace(/\s+\S*$/, '') + '…', path: `/templates/${category}/`, image: coverSrc(list[0].slug) });
}

export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const copy = OCCASION_COPY[category];
  const list = templatesFor(category);
  if (!copy || !list.length) notFound();
  const label = occasionLabel(category);
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    url: abs(`/templates/${category}/`),
    name: copy.title,
    inLanguage: 'en',
    mainEntity: { '@type': 'ItemList', itemListElement: list.map((t, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(`/template/${t.slug}/`), name: t.name })) },
  };
  return (
    <main className="premium-site international-site">
      <JsonLd data={ld} />
      <JsonLd data={crumbs([['Home', '/'], ['Templates', '/templates/'], [label, `/templates/${category}/`]])} />
      <Navbar />
      <TemplateBrowser templates={list} occasions={occasionList} total={templates.length} activeCategory={category} eyebrow={`${label.toUpperCase()} TEMPLATES`} heading={copy.h1} subheading={copy.intro} />
      <section className="premium-container td-steps" aria-label={`Tips for a ${label.toLowerCase()} page`}>
        <div className="section-heading"><p className="section-kicker">BEFORE YOU START</p><h2>Three tips for a {label.toLowerCase()} page for {copy.audience}</h2></div>
        <div className="td-step-grid">
          {copy.tips.map(([t, d], i) => <article key={t} className="td-step"><b>{String(i + 1).padStart(2, '0')}</b><h3>{t}</h3><p>{d}</p></article>)}
        </div>
        <p className="global-occasion-closing">{copy.closing}</p>
        <p style={{ marginTop: 24 }}><a className="premium-button" href={appLink('/signup')}>Start a {label.toLowerCase()} page <span>→</span></a></p>
      </section>
      <Footer />
    </main>
  );
}
