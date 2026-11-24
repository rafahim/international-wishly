import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, ListTree } from 'lucide-react';
import PageShell from '@/components/PageShell';
import JsonLd from '@/components/JsonLd';
import { guideBySlug, guides } from '@/lib/guides';
import { abs, appLink } from '@/lib/site';
import { pageMeta, crumbs, faqLd } from '@/lib/seo';

export const dynamicParams = false;
export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

const anchorFor = (heading: string) => heading
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-');

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) return {};
  return pageMeta({ title: guide.seoTitle, description: guide.description, path: `/guides/${slug}/` });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) notFound();

  const articleText = [guide.intro, guide.conclusion, ...guide.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets || [])])];
  const wordCount = articleText.join(' ').trim().split(/\s+/).filter(Boolean).length;
  const publishedAt = guide.publishedAt || '2026-11-24';
  const updatedAt = guide.updatedAt || publishedAt;
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: guide.title,
    description: guide.description,
    articleSection: guide.category,
    keywords: [guide.primaryKeyword, ...(guide.supportingKeywords || [])].filter(Boolean).join(', '),
    wordCount,
    datePublished: publishedAt,
    dateModified: updatedAt,
    mainEntityOfPage: { '@type': 'WebPage', '@id': abs(`/guides/${slug}/`) },
    author: { '@type': 'Organization', name: 'Wishly', url: abs('/about/') },
    publisher: { '@type': 'Organization', name: 'Wishly', url: abs('/') },
    inLanguage: 'en',
  };
  const relatedGuides = (guide.relatedGuides || [])
    .map((relatedSlug) => guideBySlug(relatedSlug))
    .filter((related): related is NonNullable<typeof related> => Boolean(related));

  return (
    <PageShell kicker={`${guide.category} · ${guide.readTime}`} title={guide.title} lead={guide.intro} path={`/guides/${slug}/`} name={guide.title} cta={false} showCrumbs={false}>
      <JsonLd data={articleLd} />
      <JsonLd data={crumbs([['Home', '/'], ['Ideas & guides', '/guides/'], [guide.title, `/guides/${slug}/`]])} />
      {guide.faqs && guide.faqs.length > 0 && <JsonLd data={faqLd(guide.faqs)} />}
      <div className="global-wrap global-guide-byline">
        <span>By Wishly</span><span aria-hidden="true">·</span><time dateTime={publishedAt}>Published {new Date(`${publishedAt}T00:00:00`).toLocaleDateString('en', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}</time>
        {updatedAt !== publishedAt && <><span aria-hidden="true">·</span><time dateTime={updatedAt}>Updated {updatedAt}</time></>}
      </div>
      <article className="global-wrap global-guide-article">
        <nav className="global-guide-toc" aria-label="On this page">
          <div><ListTree size={16} /><strong>On this page</strong></div>
          <ol>{guide.sections.map((section) => <li key={section.heading}><a href={`#${anchorFor(section.heading)}`}>{section.heading}</a></li>)}</ol>
          {guide.faqs && <a className="global-guide-toc-faq" href="#frequently-asked-questions">Frequently asked questions</a>}
        </nav>
        {guide.sections.map((section, index) => <section className="global-guide-section" id={anchorFor(section.heading)} key={section.heading}>
          <span className="global-guide-section-number">{String(index + 1).padStart(2, '0')}</span>
          <div><h2>{section.heading}</h2>{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</div>
        </section>)}
        <div className="global-guide-conclusion"><p className="global-overline">ONE LAST THOUGHT</p><p>{guide.conclusion}</p><Link className="global-underlined-link" href={guide.relatedPath}>{guide.relatedLabel} <ArrowUpRight size={15} /></Link></div>
      </article>
      {guide.faqs && guide.faqs.length > 0 && <section className="global-wrap global-guide-faq" id="frequently-asked-questions">
        <p className="global-overline">QUICK ANSWERS</p><h2>Frequently asked questions</h2>
        <div className="global-guide-faq-list">{guide.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>}
      {relatedGuides.length > 0 && <section className="global-wrap global-guide-related">
        <div className="global-guide-related-heading"><p className="global-overline">KEEP EXPLORING</p><h2>Related ideas & guides</h2></div>
        <div className="global-guide-related-grid">{relatedGuides.map((related) => <article key={related.slug}><span>{related.category}</span><h3><Link href={`/guides/${related.slug}/`}>{related.title}</Link></h3><Link href={`/guides/${related.slug}/`} className="global-underlined-link">Read the guide <ArrowUpRight size={14} /></Link></article>)}</div>
      </section>}
      <section className="global-wrap global-guide-bottom-cta"><div><p className="global-overline">TURN THE IDEA INTO A PAGE</p><h2>Ready to make yours?</h2><p>Choose a design in the collection and continue to the Wishly editor.</p></div><a href={appLink('/signup')} className="global-button global-button-primary">Start a page <ArrowUpRight size={17} /></a></section>
    </PageShell>
  );
}
