import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageShell from '@/components/PageShell';
import { pageMeta } from '@/lib/seo';
import { guides } from '@/lib/guides';

export const metadata = pageMeta({
  title: 'Ideas & Guides for Personal Websites, Birthday Pages and Digital Letters',
  description: 'International ideas and practical guides for birthday websites, romantic pages, digital love letters, anniversaries, proposals and online invitations. Learn how to plan a thoughtful page before choosing a design.',
  path: '/guides/',
});

export default function GuidesPage() {
  return (
    <PageShell kicker="IDEAS & GUIDES" title="Ideas for birthday websites, love letters and personal pages." lead="Explore practical guides for birthday websites, romantic pages, digital love letters, anniversaries, proposals and invitations. Find the right words and plan the page before choosing a design." path="/guides/" name="Ideas & guides" cta={false}>
      <section className="global-wrap global-guides-grid">
        {guides.map((guide, index) => <article className="global-guide-card" key={guide.slug}>
          <span className="global-guide-index">0{index + 1}</span>
          <p className="global-overline">{guide.category} · {guide.readTime}</p>
          <h2><Link href={`/guides/${guide.slug}/`}>{guide.title}</Link></h2>
          <p>{guide.intro}</p>
          <Link className="global-underlined-link" href={`/guides/${guide.slug}/`}>Read the guide <ArrowUpRight size={15} /></Link>
        </article>)}
      </section>
    </PageShell>
  );
}
