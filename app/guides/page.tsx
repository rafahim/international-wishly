import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageShell from '@/components/PageShell';
import MainSiteGuideNotice from '@/components/MainSiteGuideNotice';
import JsonLd from '@/components/JsonLd';
import { pageMeta, crumbs } from '@/lib/seo';
import { abs } from '@/lib/site';
import { guides } from '@/lib/guides';
import { guideVisualFor } from '@/lib/guide-visuals';

export const metadata = pageMeta({
  title: 'Personal Website Ideas and Digital Gift Guides',
  description: 'Read practical guides for birthday website ideas, personal digital gifts, online proposals, digital love letters, anniversary pages and event invitations. Choose a useful idea before you build.',
  path: '/guides/',
  keywords: ['personal website ideas', 'digital gift ideas', 'birthday website ideas', 'online proposal ideas', 'digital love letter ideas', 'wedding invitation website guide'],
});

export default function GuidesPage() {
  const guideCollection = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${abs('/guides/')}#collection`,
    url: abs('/guides/'),
    name: 'Personal Website Ideas and Digital Gift Guides',
    description: 'Practical English-language guides for birthday websites, digital letters, proposals, anniversaries and invitations.',
    inLanguage: 'en',
    mainEntity: { '@type': 'ItemList', numberOfItems: guides.length, itemListElement: guides.map((guide, index) => ({ '@type': 'ListItem', position: index + 1, url: abs(`/guides/${guide.slug}/`), name: guide.title })) },
  };
  return (
    <PageShell kicker="IDEAS & GUIDES" title="Practical ideas for personal websites and digital gifts." lead="Find recipient-specific inspiration, planning checklists and writing advice for birthday pages, digital letters, proposals, anniversaries and invitations. These guides focus on the decisions that make a page useful and personal—not on adding effects for their own sake." path="/guides/" name="Ideas & guides" cta={false}>
      <JsonLd data={guideCollection} />
      <JsonLd data={crumbs([['Home', '/'], ['Ideas & guides', '/guides/']])} />
      <section className="global-wrap global-guides-intro">
        <div className="global-section-intro"><p className="global-overline">THE GUIDE LIBRARY</p><h2>Find the idea before you choose the template.</h2><p>Some visitors arrive with a clear plan; others know who they want to surprise but are not sure what to make. Browse by occasion, recipient or practical question. Each guide offers a different angle, from message planning and photo selection to invitation details and sharing across time zones.</p></div>
        <div className="global-guides-topic-links"><Link href="/templates/birthday/">Birthday pages</Link><Link href="/templates/anniversary/">Anniversary ideas</Link><Link href="/templates/letter/">Digital letters</Link><Link href="/templates/proposal/">Proposal pages</Link><Link href="/templates/wedding/">Wedding stories</Link><Link href="/templates/invitation/">Online invitations</Link></div>
      </section>
      <MainSiteGuideNotice />
      <section className="global-wrap global-guides-grid">
        {guides.map((guide, index) => { const visual = guideVisualFor(guide); return <article className="global-guide-card" key={guide.slug}>
          <Link className="global-guide-card-media" href={`/guides/${guide.slug}/`} aria-label={`Read ${guide.title}`}><img src={visual.src} alt="" loading="lazy" decoding="async" /></Link>
          <span className="global-guide-index">{String(index + 1).padStart(2, '0')}</span>
          <p className="global-overline">{guide.category} · {guide.readTime}</p>
          <h2><Link href={`/guides/${guide.slug}/`}>{guide.title}</Link></h2>
          <p>{guide.intro}</p>
          <Link className="global-underlined-link" href={`/guides/${guide.slug}/`}>Read the guide <ArrowUpRight size={15} /></Link>
        </article>; })}
      </section>
    </PageShell>
  );
}
