import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import PageShell from '@/components/PageShell';
import JsonLd from '@/components/JsonLd';
import { guideBySlug, guides } from '@/lib/guides';
import { abs, appLink } from '@/lib/site';
import { pageMeta, crumbs } from '@/lib/seo';

export const dynamicParams = false;
export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

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

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    mainEntityOfPage: abs(`/guides/${slug}/`),
    author: { '@type': 'Organization', name: 'Wishly' },
    publisher: { '@type': 'Organization', name: 'Wishly', url: abs('/') },
    inLanguage: 'en',
  };

  return (
    <PageShell kicker={`${guide.category} · ${guide.readTime}`} title={guide.title} lead={guide.intro} path={`/guides/${slug}/`} name={guide.title} cta={false} showCrumbs={false}>
      <JsonLd data={articleLd} />
      <JsonLd data={crumbs([['Home', '/'], ['Ideas & guides', '/guides/'], [guide.title, `/guides/${slug}/`]])} />
      <article className="global-wrap global-guide-article">
        {guide.sections.map((section, index) => <section className="global-guide-section" key={section.heading}>
          <span className="global-guide-section-number">{String(index + 1).padStart(2, '0')}</span>
          <div><h2>{section.heading}</h2>{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</div>
        </section>)}
        <div className="global-guide-conclusion"><p className="global-overline">ONE LAST THOUGHT</p><p>{guide.conclusion}</p><Link className="global-underlined-link" href={guide.relatedPath}>{guide.relatedLabel} <ArrowUpRight size={15} /></Link></div>
      </article>
      <section className="global-wrap global-guide-bottom-cta"><div><p className="global-overline">TURN THE IDEA INTO A PAGE</p><h2>Ready to make yours?</h2><p>Choose a design in the collection and continue to the Wishly editor.</p></div><a href={appLink('/signup')} className="global-button global-button-primary">Start a page <ArrowUpRight size={17} /></a></section>
    </PageShell>
  );
}
