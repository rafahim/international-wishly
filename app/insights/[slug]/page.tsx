import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, ListTree } from 'lucide-react';
import PageShell from '@/components/PageShell';
import MainSiteGuideNotice from '@/components/MainSiteGuideNotice';
import JsonLd from '@/components/JsonLd';
import { guideBySlug, guides } from '@/lib/guides';
import { abs, AUTHOR } from '@/lib/site';
import { pageMeta, crumbs, faqLd, keywordTitle } from '@/lib/seo';
import { guideVisualFor } from '@/lib/guide-visuals';
import { readyCountries } from '@/lib/countries';

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
  const visual = guideVisualFor(guide);
  return pageMeta({ title: keywordTitle(guide.primaryKeyword || guide.title), description: guide.description, path: `/insights/${slug}/`, image: visual.src, keywords: [guide.primaryKeyword || '', ...(guide.supportingKeywords || [])].filter(Boolean), ogType: 'article', publishedTime: guide.publishedAt, modifiedTime: guide.updatedAt || guide.publishedAt });
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) notFound();

  const articleText = [guide.intro, guide.conclusion, ...guide.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets || [])])];
  const wordCount = articleText.join(' ').trim().split(/\s+/).filter(Boolean).length;
  const publishedAt = guide.publishedAt || '2026-11-24';
  const updatedAt = guide.updatedAt || publishedAt;
  const visual = guideVisualFor(guide);
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: guide.title,
    alternativeHeadline: keywordTitle(guide.primaryKeyword || guide.title),
    description: guide.description,
    image: [visual.src.startsWith('http') ? visual.src : abs(visual.src)],
    articleSection: guide.category,
    keywords: [guide.primaryKeyword, ...(guide.supportingKeywords || [])].filter(Boolean).join(', '),
    wordCount,
    datePublished: publishedAt,
    dateModified: updatedAt,
    mainEntityOfPage: { '@type': 'WebPage', '@id': abs(`/insights/${slug}/`) },
    author: AUTHOR.name ? { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url || abs('/about/'), worksFor: { '@id': `${abs('/')}#organization` } } : { '@type': 'Organization', '@id': `${abs('/')}#organization`, name: 'Wishly', url: abs('/about/') },
    publisher: { '@id': `${abs('/')}#organization` },
    inLanguage: 'en',
  };
  const relatedGuides = (guide.relatedGuides || [])
    .map((relatedSlug) => guideBySlug(relatedSlug))
    .filter((related): related is NonNullable<typeof related> => Boolean(related));

  return (
    <PageShell kicker={`${guide.category} · ${guide.readTime}`} title={guide.title} lead={guide.intro} path={`/insights/${slug}/`} name={guide.title} cta={false} showCrumbs={false}>
      <JsonLd data={articleLd} />
      <JsonLd data={crumbs([['Home', '/'], ['Insights', '/insights/'], [guide.title, `/insights/${slug}/`]])} />
      {guide.faqs && guide.faqs.length > 0 && <JsonLd data={faqLd(guide.faqs)} />}
      <div className="global-wrap global-guide-byline">
        <span>By {AUTHOR.name ? <Link href="/about/">{AUTHOR.name}</Link> : <Link href="/about/">the Wishly editorial team</Link>}</span><span aria-hidden="true">·</span><time dateTime={publishedAt}>Published {new Date(`${publishedAt}T00:00:00`).toLocaleDateString('en', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}</time>
        {updatedAt !== publishedAt && <><span aria-hidden="true">·</span><time dateTime={updatedAt}>Updated {updatedAt}</time></>}
      </div>
      <article className="global-wrap global-guide-article">
        <figure className="global-guide-cover">
          <img src={visual.src} alt={visual.alt} fetchPriority="high" decoding="async" />
          {visual.credit && visual.creditUrl && <figcaption><a href={visual.creditUrl} target="_blank" rel="noreferrer noopener">{visual.credit}</a></figcaption>}
        </figure>
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
      {slug === 'international-wishes-around-the-world' && <section className="global-wrap global-guide-related" aria-labelledby="country-insights-heading">
        <div className="global-guide-related-heading"><p className="global-overline">LOCAL CONTEXT</p><h2 id="country-insights-heading">Explore researched country insights</h2><p>Open a country article for more specific occasion notes, greeting customs and sharing context. The full directory lists all 195 countries.</p></div>
        <div className="global-guide-related-grid">{readyCountries.map((country) => <article key={country.slug}><span>{country.region}</span><h3><Link href={`/${country.slug}/`}>{country.name}</Link></h3><Link href={`/${country.slug}/`} className="global-underlined-link">Read country insights <ArrowUpRight size={14} /></Link></article>)}</div>
        <p><Link className="global-underlined-link" href="/countries/">Browse all 195 countries <ArrowUpRight size={14} /></Link></p>
      </section>}
      <MainSiteGuideNotice />
      {guide.faqs && guide.faqs.length > 0 && <section className="global-wrap global-guide-faq" id="frequently-asked-questions">
        <p className="global-overline">QUICK ANSWERS</p><h2>Frequently asked questions</h2>
        <div className="global-guide-faq-list">{guide.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>}
      {relatedGuides.length > 0 && <section className="global-wrap global-guide-related">
        <div className="global-guide-related-heading"><p className="global-overline">KEEP EXPLORING</p><h2>Related insights</h2></div>
        <div className="global-guide-related-grid">{relatedGuides.map((related) => <article key={related.slug}><span>{related.category}</span><h3><Link href={`/insights/${related.slug}/`}>{related.title}</Link></h3><Link href={`/insights/${related.slug}/`} className="global-underlined-link">Read the article <ArrowUpRight size={14} /></Link></article>)}</div>
      </section>}
    </PageShell>
  );
}
