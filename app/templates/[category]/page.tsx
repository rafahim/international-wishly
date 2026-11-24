import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TemplateBrowser from '@/components/TemplateBrowser';
import JsonLd from '@/components/JsonLd';
import { abs, appLink } from '@/lib/site';
import { crumbs, faqLd, pageMeta } from '@/lib/seo';
import { OCCASION_COPY } from '@/lib/content';
import { CATEGORY_SEO } from '@/lib/category-seo';
import { coverSrc, occasionLabel, occasionList, templates, templatesFor } from '@/lib/templates';

export const dynamicParams = false;
export function generateStaticParams() { return occasionList.map((o) => ({ category: o.key })); }

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const copy = OCCASION_COPY[category];
  const seo = CATEGORY_SEO[category];
  const list = templatesFor(category);
  if (!copy || !seo || !list.length) return {};
  return pageMeta({ title: seo.title, description: seo.description, path: `/templates/${category}/`, image: coverSrc(list[0].slug), keywords: [seo.keyword, ...seo.supporting] });
}

export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const copy = OCCASION_COPY[category];
  const seo = CATEGORY_SEO[category];
  const list = templatesFor(category);
  if (!copy || !seo || !list.length) notFound();
  const label = occasionLabel(category);
  const pagePath = `/templates/${category}/`;
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    url: abs(pagePath),
    name: seo.title,
    description: seo.description,
    inLanguage: 'en',
    mainEntity: { '@type': 'ItemList', numberOfItems: list.length, itemListElement: list.map((t, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(`/template/${t.slug}/`), name: t.name })) },
  };
  return (
    <main className="premium-site international-site">
      <JsonLd data={ld} />
      <JsonLd data={crumbs([['Home', '/'], ['Templates', '/templates/'], [label, pagePath]])} />
      <JsonLd data={faqLd(seo.faqs)} />
      <Navbar />
      <TemplateBrowser templates={list} occasions={occasionList} total={templates.length} activeCategory={category} eyebrow={`${label.toUpperCase()} TEMPLATES`} heading={copy.h1} subheading={copy.intro} />

      <section className="global-wrap global-category-seo">
        <div className="global-section-intro">
          <p className="global-overline">{label.toUpperCase()} WEBSITE IDEAS</p>
          <h2>{seo.introHeading}</h2>
          {seo.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="global-category-checklist">
          <h3>{seo.checklistHeading}</h3>
          <ul>{seo.checklist.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="global-wrap global-category-tips">
        <div className="global-section-intro"><p className="global-overline">BEFORE YOU START</p><h2>Three practical ways to make the page feel right</h2></div>
        <div className="td-step-grid">
          {copy.tips.map(([title, detail], index) => <article key={title} className="td-step"><b>{String(index + 1).padStart(2, '0')}</b><h3>{title}</h3><p>{detail}</p></article>)}
        </div>
        <p className="global-occasion-closing">{copy.closing}</p>
      </section>

      <section className="global-wrap global-category-faq">
        <div className="global-section-intro"><p className="global-overline">COMMON QUESTIONS</p><h2>{label} website questions</h2></div>
        <div className="global-guide-faq-list">{seo.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="global-wrap global-category-cta">
        <div><p className="global-overline">READY TO PERSONALIZE?</p><h2>Choose a {label.toLowerCase()} design and make it yours.</h2><p>Preview the template first, then continue to the main Wishly website to create and publish your page.</p></div>
        <a className="global-button global-button-primary" href={appLink('/signup')}>Try it free <span>→</span></a>
      </section>
      <Footer />
    </main>
  );
}
