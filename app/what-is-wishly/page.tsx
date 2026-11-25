import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageShell from '@/components/PageShell';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import { faqLd, pageMeta } from '@/lib/seo';
import { SITE, abs, appLink } from '@/lib/site';

export const metadata = pageMeta({
  title: 'What Is Wishly? A Wish Website Builder Explained',
  absoluteTitle: true,
  description: 'Wishly is a website builder for sending a wish online: birthday pages, love letters, proposals and invitations. Learn what Wishly is, how Wishly wish pages work and where to start.',
  path: '/what-is-wishly/',
  keywords: ['Wishly', 'what is Wishly', 'Wishly wish', 'Wishly website', 'Wishly.bd', 'Wishly app', 'wish website maker'],
});

const faqs: [string, string][] = [
  ['What is Wishly?', 'Wishly is a personal website maker. You pick a ready-made design for a moment such as a birthday, proposal, anniversary, apology, thank-you or invitation, personalise the parts the template supports and share the published page through a single link.'],
  ['What is a Wishly wish page?', 'A wish page is a small personal website made on Wishly for one person or one occasion, for example a birthday wish with photos, a letter, music and a surprise reveal. The recipient opens it from a link in any browser; no app is needed.'],
  ['Is Wishly the same as wishly.bd?', 'Yes. Wishly.bd is the main Wishly website, where you create an account, use the visual editor, publish pages and manage them. This site, wishly.rafahim.com, is the English-first insights and template discovery site for international visitors.'],
  ['Where do I make a Wishly page?', 'Pick a design here, then continue on wishly.bd to sign up, personalise and publish. Account, editor, checkout and publishing tools live on wishly.bd.'],
  ['Can I send a Wishly wish to someone in another country?', 'Yes. A published page is a normal web link, so it opens in a regular browser anywhere. Check the template language label, since the catalogue includes English designs and some Bengali-language experiences.'],
  ['How many templates does Wishly have?', 'This site lists 53+ templates across 11+ occasions, and the library keeps growing. Media and interactive features vary by template, so check each preview.'],
  ['Is Wishly legit? How do I know I am on the real Wishly?', 'The official Wishly website is wishly.bd, where you sign up, edit and publish. This site, wishly.rafahim.com, is its English-language insights and template discovery site, and it links to wishly.bd. Wishly also has official pages on Instagram (@wishly.bd_) and Facebook (wishlyhq). Wishly is not affiliated with unrelated products or companies that happen to use a similar name.'],
  ['Is Wishly free?', 'Wishly is free to start. Some templates are marked Premium, so check the price and terms shown on wishly.bd before purchasing.'],
  ['Is there a Wishly app to download?', 'No download is needed. Wishly works in a web browser on a phone or computer, and the people you send a page to open it from a link without an app or account.'],
  ['How do I log in or sign up for Wishly?', 'Go to wishly.bd to create an account or log in. This international site does not host accounts, the editor or checkout.'],
  ['What can I use instead of Wishly?', 'If you need a business site, online store or portfolio, a general-purpose website builder suits that better. If you want a personal birthday, proposal, love-letter or invitation page without coding, Wishly is made for that. See the comparison on the wish website maker page.'],
  ['উইশলি (Wishly) কী?', 'উইশলি (Wishly) হলো একটি নো-কোড ওয়েবসাইট বিল্ডার, যেখানে জন্মদিন, প্রপোজাল, অ্যানিভার্সারি, প্রেমপত্র বা আমন্ত্রণের জন্য রেডি টেমপ্লেট বেছে নিয়ে নিজের লেখা ও ছবি যোগ করা যায় এবং একটি লিংকে শেয়ার করা যায়। মূল ওয়েবসাইট: wishly.bd'],
];

export default function Page() {
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'AboutPage', '@id': `${abs('/what-is-wishly/')}#page`, url: abs('/what-is-wishly/'), name: 'What is Wishly?', inLanguage: 'en', isPartOf: { '@id': `${SITE.url}/#website` }, about: { '@id': 'https://wishly.bd/#organization' } },
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
        <p>The main Wishly product is at <a href={appLink('/')} rel="noopener">wishly.bd</a>: that is where you sign up, edit, publish and manage pages. This website is the English-first companion for international visitors. It holds <Link href="/templates/">template previews</Link>, <Link href="/insights/">practical insights</Link> and <Link href="/how-to-make-website/">a step-by-step walkthrough</Link>.</p>

        <h2>Not to be confused with</h2>
        <p>Wishly (wishly.bd) is a no-code builder for personal wish pages. It is not affiliated with unrelated products or companies that use a similar name. When in doubt, use the official site, <a href={appLink('/')} rel="noopener">wishly.bd</a>.</p>

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
