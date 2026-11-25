import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageShell from '@/components/PageShell';
import MainSiteGuideNotice from '@/components/MainSiteGuideNotice';
import JsonLd from '@/components/JsonLd';
import { pageMeta, crumbs } from '@/lib/seo';
import { abs } from '@/lib/site';
import { guides } from '@/lib/guides';
import { guideVisualFor } from '@/lib/guide-visuals';

const baseMetadata = pageMeta({
  title: 'Wishly Insights: Ideas & International Wishes',
  description: 'Explore Wishly Insights for practical ideas, digital-gift advice, birthday and proposal inspiration, writing tips and international wishes across countries.',
  path: '/insights/',
  keywords: ['personal website ideas', 'digital gift ideas', 'birthday website ideas', 'online proposal ideas', 'digital love letter ideas', 'wedding invitation website guide'],
});

export const metadata = { ...baseMetadata, robots: { index: false, follow: true, googleBot: { index: false, follow: true } } };

export default function LegacyGuidesPage() {
  const guideCollection = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${abs('/insights/')}#collection`,
    url: abs('/insights/'),
    name: 'Wishly Insights: Ideas, Advice and International Wishes',
    description: 'Practical editorial articles about personal websites, digital greetings, celebrations and international wishes.',
    inLanguage: 'en',
    mainEntity: { '@type': 'ItemList', numberOfItems: guides.length, itemListElement: guides.map((guide, index) => ({ '@type': 'ListItem', position: index + 1, url: abs(`/insights/${guide.slug}/`), name: guide.title })) },
  };
  return (
    <PageShell kicker="WISHLY INSIGHTS" title="Ideas, advice and inspiration for meaningful moments." lead="Explore practical articles about personal wish websites, digital greetings, celebrations, message writing and thoughtful surprises. Insights bring together step-by-step advice and creative ideas to help you make a page that feels personal." path="/insights/" name="Insights" cta={false} showCrumbs={false}>
      <JsonLd data={guideCollection} />
      <JsonLd data={crumbs([['Home', '/'], ['Insights', '/insights/']])} />
      <section className="global-wrap global-guides-intro">
        <div className="global-section-intro"><p className="global-overline">THE INSIGHTS LIBRARY</p><h2>Find the idea before you choose the template.</h2><p>Some visitors arrive with a clear plan; others know who they want to surprise but are not sure what to make. Browse by occasion, recipient or practical question. Each article offers a different angle, from message planning and photo selection to invitation details and sharing across time zones.</p></div>
        <div className="global-guides-topic-links"><Link href="/templates/birthday/">Birthday pages</Link><Link href="/templates/anniversary/">Anniversary ideas</Link><Link href="/templates/letter/">Digital letters</Link><Link href="/templates/proposal/">Proposal pages</Link><Link href="/templates/wedding/">Wedding stories</Link><Link href="/templates/invitation/">Online invitations</Link></div>
      </section>
      <MainSiteGuideNotice />
      <section className="global-wrap global-guides-grid">
        {guides.map((guide, index) => { const visual = guideVisualFor(guide); return <article className="global-guide-card" key={guide.slug}>
          <Link className="global-guide-card-media" href={`/insights/${guide.slug}/`} aria-label={`Read ${guide.title}`}><img src={visual.src} alt={visual.alt} loading="lazy" decoding="async" /></Link>
          <span className="global-guide-index">{String(index + 1).padStart(2, '0')}</span>
          <p className="global-overline">{guide.category} · {guide.readTime}</p>
          <h2><Link href={`/insights/${guide.slug}/`}>{guide.title}</Link></h2>
          <p>{guide.intro}</p>
          <Link className="global-underlined-link" href={`/insights/${guide.slug}/`}>Read the article <ArrowUpRight size={15} /></Link>
        </article>; })}
      </section>
    </PageShell>
  );
}
