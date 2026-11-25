import Link from 'next/link';
import PageShell from '@/components/PageShell';
import JsonLd from '@/components/JsonLd';
import { pageMeta, faqLd } from '@/lib/seo';
import { abs, appLink } from '@/lib/site';
import { steps } from '@/lib/content';

const checklist = [
  'The recipient’s name, the occasion and the tone you want the page to have',
  'A short message written in your own words',
  'A small selection of photographs you have permission to use',
  'The date, venue and response details if you are making an invitation',
  'A chosen template whose language and available features fit the recipient',
];
const howFaqs: [string, string][] = [
  ['Do I need coding skills to make a personal website?', 'No. Wishly starts with a ready-made design and a visual editor. The exact fields you can change depend on the selected template.'],
  ['Can I create a birthday website from my phone?', 'The Wishly workflow is designed for mobile as well as desktop. Preview the page at a phone size before publishing.'],
  ['How do I share the finished page?', 'Publish the page through your Wishly account, then copy its live link and send it by message or email. A QR code is available where supported.'],
];

export const metadata = pageMeta({
  title: 'How to Make a Personal Website: A 5-Step Guide',
  description: 'Learn how to make a personal website for a birthday, digital gift or special occasion. Choose a template, add your words and photos, preview the page and share one link.',
  path: '/how-to-make-website/',
  keywords: ['how to make a personal website', 'make a website for someone you love', 'birthday website setup', 'digital gift website guide', 'no-code personal page'],
});

export default function Page() {
  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to make a personal website with Wishly',
    description: 'A practical five-step guide to selecting a personal page design, adding content, checking the page and sharing its link.',
    step: steps.map(([number, title, description]) => ({ '@type': 'HowToStep', position: Number(number), name: title, text: description, url: `${abs('/how-to-make-website/')}#step-${number}` })),
  };
  return (
    <PageShell kicker="A PRACTICAL WALKTHROUGH" title="How to make a personal website for someone or something that matters." lead="You do not need to start with a blank canvas. Choose a template, add the details that make it yours and check the experience before sharing it." path="/how-to-make-website/" name="How to make a website" cta={false}>
      <JsonLd data={howTo} />
      <JsonLd data={faqLd(howFaqs)} />
      <section className="global-wrap global-howto-intro">
        <div className="global-section-intro"><p className="global-overline">BEFORE YOU OPEN THE EDITOR</p><h2>Prepare the message first. The design comes next.</h2><p>A personal website can be a birthday gift, an online invitation, an anniversary memory or a letter. Decide what the recipient needs to see and what details you are comfortable sharing before you choose a template.</p></div>
        <div className="global-category-checklist"><h3>A quick preparation list</h3><ul>{checklist.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </section>
      <section className="premium-container hp-sec">
        <div className="global-section-intro"><p className="global-overline">THE FIVE STEPS</p><h2>From an idea to a link you can send.</h2></div>
        <ol className="hp-steps">{steps.map(([number, title, description]) => <li key={number} id={`step-${number}`}><span className="n">{number.padStart(2, '0')}</span><h2>{title}</h2><p>{description}</p></li>)}</ol>
      </section>
      <section className="global-wrap global-howto-aftercare">
        <div className="global-section-intro"><p className="global-overline">THE FINAL CHECK</p><h2>Test the real link before you send it.</h2><p>Open the published URL in a fresh browser tab or on another device. Confirm that the content is readable, media loads and the page does not rely on sound or an interaction to explain its purpose. For international recipients, include a time zone when the page contains an event time.</p><p>Accounts, the visual editor, dashboard and publishing tools are available on the main Wishly website at <a href={appLink('/')}>wishly.bd</a>. This international site is for discovering designs and reading practical insights.</p></div>
        <div className="global-howto-links"><Link href="/templates/">Browse personal website templates ↗</Link><Link href="/insights/">Read more insights and ideas ↗</Link><Link href="/faq/">See all common questions ↗</Link></div>
      </section>
      <section className="global-wrap global-category-faq"><div className="global-section-intro"><p className="global-overline">QUICK ANSWERS</p><h2>Making and sharing a personal website</h2></div><div className="global-guide-faq-list">{howFaqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    </PageShell>
  );
}
