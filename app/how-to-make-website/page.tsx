import PageShell from '@/components/PageShell';
import JsonLd from '@/components/JsonLd';
import { pageMeta } from '@/lib/seo';
import { abs } from '@/lib/site';
import { steps } from '@/lib/content';

export const metadata = pageMeta({
  title: 'How to Make a Personal Website for a Birthday or Special Occasion',
  description: 'A practical guide to making an occasion website: choose a design, add meaningful details, preview the page on mobile and share the finished link.',
  path: '/how-to-make-website/',
});

export default function Page() {
  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to make a personal occasion website',
    description: 'Choose a suitable design, personalise the page and share one link with the recipient.',
    step: steps.map(([number, title, description]) => ({ '@type': 'HowToStep', position: Number(number), name: title, text: description, url: `${abs('/how-to-make-website/')}#step-${number}` })),
  };
  return (
    <PageShell kicker="A PRACTICAL WALKTHROUGH" title="How to make a website for a moment that matters." lead="You do not need to start from a blank screen. Choose a design with the right mood, add what is personal and check how it feels before sharing." path="/how-to-make-website/" name="How it works">
      <JsonLd data={howTo} />
      <section className="premium-container hp-sec">
        <ol className="hp-steps">{steps.map(([number, title, description]) => <li key={number} id={`step-${number}`}><span className="n">{number.padStart(2, '0')}</span><h2>{title}</h2><p>{description}</p></li>)}</ol>
      </section>
    </PageShell>
  );
}
