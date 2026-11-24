import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageShell from '@/components/PageShell';
import { pageMeta } from '@/lib/seo';
import { guides } from '@/lib/guides';

export const metadata = pageMeta({
  title: 'Ideas & Guides for Personal Websites, Birthday Pages and Digital Letters',
  description: 'Thoughtful ideas and practical guides for birthday websites, digital love letters and online proposal pages. Plan the message before choosing the design.',
  path: '/guides/',
});

export default function GuidesPage() {
  return (
    <PageShell kicker="IDEAS & GUIDES" title="A few good ideas before you start." lead="Practical notes for making an occasion page feel personal. Start with the message, find the right mood and let the design do its part." path="/guides/" name="Ideas & guides" cta={false}>
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
