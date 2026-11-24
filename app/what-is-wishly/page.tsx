import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageShell from '@/components/PageShell';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import { faqLd, pageMeta } from '@/lib/seo';
import { SITE, abs, appLink } from '@/lib/site';

export const metadata = pageMeta({
  title: 'What Is Wishly? Send a Wish as a Personal Website',
  absoluteTitle: true,
  description: 'Wishly is a personal website maker for sending a wish online: birthday pages, love letters, proposals and invitations. Learn what Wishly is, how Wishly wish pages work and where to start.',
  path: '/what-is-wishly/',
  keywords: ['Wishly', 'what is Wishly', 'Wishly wish', 'Wishly website', 'Wishly.bd', 'Wishly app', 'wish website maker'],
});

const faqs: [string, string][] = [
  ['What is Wishly?', 'Wishly is a personal website maker. You pick a ready-made design for a moment such as a birthday, proposal, anniversary, apology, thank-you or invitation, personalise the parts the template supports and share the published page through a single link.'],
  ['What is a Wishly wish page?', 'A wish page is a small personal website made on Wishly for one person or one occasion, for example a birthday wish with photos, a letter, music and a surprise reveal. The recipient opens it from a link in any browser; no app is needed.'],
  ['Is Wishly the same as wishly.bd?', 'Yes. Wishly.bd is the main Wishly website, where you create an account, use the visual editor, publish pages and manage them. This site, wishly.rafahim.com, is the English-first guide and template discovery site for international visitors.'],
  ['Where do I make a Wishly page?', 'Pick a design here, then continue on wishly.bd to sign up, personalise and publish. Account, editor, checkout and publishing tools live on wishly.bd.'],
  ['Can I send a Wishly wish to someone in another country?', 'Yes. A published page is a normal web link, so it opens in a regular browser anywhere. Check the template language label, since the catalogue includes English designs and some Bengali-language experiences.'],
  ['How many templates does Wishly have?', 'This site lists 53+ templates across 11+ occasions, and the library keeps growing. Media and interactive features vary by template, so check each preview.'],
];

export default function Page() {
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'AboutPage', '@id': `${abs('/what-is-wishly/')}#page`, url: abs('/what-is-wishly/'), name: 'What is Wishly?', inLanguage: 'en', isPartOf: { '@id': `${SITE.url}/#website` }, about: { '@id': 'https://wishly.bd/#organization' } },
      { '@type': 'WebApplication', '@id': 'https://wishly.bd/#app', name: 'Wishly', alternateName: ['Wishly.bd', 'Wishly Wish'], url: 'https://wishly.bd/', applicationCategory: 'LifestyleApplication', operatingSystem: 'Any (web browser)', description: 'Wishly lets you create and share personal wish pages: birthday websites, digital love letters, proposal pages, anniversary pages and online invitations.', publisher: { '@id': 'https://wishly.bd/#organization' }, inLanguage: ['en', 'bn'] },
    ],
  };
  return (
    <PageShell kicker="ABOUT THE NAME" title={<>What is <em>Wishly?</em></>} lead="Wishly is a website maker for sending a wish, a letter or an invitation as a page of its own. Here is what it is, how a Wishly wish page works and where to start." path="/what-is-wishly/" name="What is Wishly?">
      <JsonLd data={ld} />
      <JsonLd data={faqLd(faqs)} />
      <article className="global-wrap" style={{ maxWidth: 820, paddingBottom: 40 }}>
        <h2>Wishly in one paragraph</h2>
        <p>Wishly lets you turn a message into a personal website. Choose a design made for an occasion, add your words, photos and, where the design supports it, music or video, then publish and share one link. People use it for birthday wishes, wedding invitations, proposals, anniversaries, apologies, thank-you notes and letters to friends.</p>

        <h2>What is a “Wishly wish”?</h2>
        <p>A Wishly wish is the page you make and send: a birthday wish that opens with a countdown, a love letter in a sealed envelope, a proposal that ends with a question. It is more personal than a card or a chat message, and it opens in any browser on a phone or computer.</p>

        <h2>Wishly and wishly.bd</h2>
        <p>The main Wishly product is at <a href={appLink('/')} rel="noopener">wishly.bd</a>: that is where you sign up, edit, publish and manage pages. This website is the English-first companion for international visitors. It holds <Link href="/templates/">template previews</Link>, <Link href="/guides/">practical guides</Link> and <Link href="/how-to-make-website/">a step-by-step walkthrough</Link>.</p>

        <h2>Start with the occasion</h2>
        <ul>
          <li><Link href="/templates/birthday/">Birthday wish websites</Link></li>
          <li><Link href="/templates/proposal/">Proposal pages</Link></li>
          <li><Link href="/templates/wedding/">Wedding invitations</Link></li>
          <li><Link href="/templates/letter/">Digital love letters</Link></li>
          <li><Link href="/templates/sorry/">Sorry pages</Link></li>
          <li><Link href="/templates/anniversary/">Anniversary pages</Link></li>
        </ul>
        <p><a className="global-underlined-link" href={appLink('/signup')} rel="noopener">Create your Wishly page on Wishly.bd <ArrowUpRight size={15} aria-hidden="true" /></a></p>
      </article>
      <section className="global-wrap">
        <Faq faqs={faqs} heading="Questions about Wishly." lead="Short answers about what Wishly is and how it works." />
      </section>
    </PageShell>
  );
}
