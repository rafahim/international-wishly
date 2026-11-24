import { Images, Link2, Mail, Music, PenLine, Smartphone, type LucideIcon } from 'lucide-react';
import PageShell from '@/components/PageShell';
import { pageMeta } from '@/lib/seo';
import { features } from '@/lib/content';

export const metadata = pageMeta({
  title: 'What You Can Add to a Wishly Personal Website',
  description: 'Explore the personalisation options available in Wishly templates, including editable text, photographs, galleries, music, video and shareable links.',
  path: '/features/',
});
const icons: Record<string, LucideIcon> = { pen: PenLine, images: Images, music: Music, mail: Mail, phone: Smartphone, link: Link2 };

export default function Page() {
  return (
    <PageShell kicker="THE DETAILS" title="Small tools that help a page feel personal." lead="Different templates have different personalities and options. Here are the building blocks you may find as you make yours." path="/features/" name="Features">
      <section className="feature-section"><div className="premium-container">
        <div className="hp-feat">{features.map(([key, title, description]) => { const Icon = icons[key]; return <article key={title}><div className="ic"><Icon size={20} strokeWidth={1.75} aria-hidden="true" /></div><h2>{title}</h2><p>{description}</p></article>; })}</div>
      </div></section>
    </PageShell>
  );
}
