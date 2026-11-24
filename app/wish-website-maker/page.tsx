import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageShell from '@/components/PageShell';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import { faqLd, pageMeta } from '@/lib/seo';
import { SITE, abs, appLink } from '@/lib/site';

export const metadata = pageMeta({
  title: 'No-Code Wish Website Maker for Birthdays, Proposals & Letters',
  absoluteTitle: true,
  description: 'Make a birthday, proposal, anniversary or love-letter website without coding. Wishly is a no-code wish website maker: pick a template, edit visually, share one link.',
  path: '/wish-website-maker/',
  keywords: ['wish website maker', 'no code website builder for birthday', 'birthday website without coding', 'proposal website maker', 'digital love letter maker', 'personal wish page'],
});

const faqs: [string, string][] = [
  ['What is the easiest way to make a birthday website without coding?', 'Use a template-based wish website maker such as Wishly. Choose a birthday design, replace the sample text and photos in the visual editor, preview it on a phone-size screen and publish a single shareable link. No code or design skills are needed.'],
  ['How can I make a proposal website without coding?', 'Pick a proposal template, add your own story, photos and the question you want to ask, preview it as the recipient would see it, then publish and send the link. Wishly offers proposal templates in different tones, from romantic to playful.'],
  ['Is there a free website builder for birthday wishes?', 'Wishly is free to start. Some templates are marked Premium, so check the price and terms shown in the main app on wishly.bd before you buy anything.'],
  ['Does the person receiving the page need an app or account?', 'No. A published Wishly page is a normal web link that opens in any modern browser on a phone or computer.'],
  ['What can I make with a wish website maker?', 'Birthday wishes, proposal pages, anniversary pages, digital love letters, miss-you and sorry pages, thank-you notes, best-friend surprises, wedding and event invitations.'],
  ['How is a wish website different from a card or a chat message?', 'It can open like a letter, reveal memories in sequence, include a countdown or small game and keep everything in one link. A card is static and a chat message is easy to scroll past.'],
  ['Is Wishly a general website builder?', 'No. Wishly is built for personal moments, not for business sites or online shops. If you need a company website or store, a general-purpose builder is the better fit.'],
];

const compare: [string, string, string, string][] = [
  ['Starting point', 'Ready-made design for one occasion', 'Blank canvas or generic page template', 'A fixed card layout'],
  ['Skills needed', 'None: edit text and photos visually', 'Layout and design decisions are yours', 'None'],
  ['Interactive moments', 'Reveals, countdowns, games, chapters (varies by template)', 'Depends on the builder and your setup', 'Rarely'],
  ['Best for', 'Birthdays, proposals, letters, apologies, invitations', 'Portfolios, businesses, long-term sites', 'A quick, simple greeting'],
  ['Sharing', 'One link, no app for the recipient', 'Link after you configure and publish', 'Usually a link or image'],
];

export default function Page() {
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': `${abs('/wish-website-maker/')}#page`, url: abs('/wish-website-maker/'), name: 'No-code wish website maker', inLanguage: 'en', isPartOf: { '@id': `${SITE.url}/#website` }, about: { '@id': 'https://wishly.bd/#app' }, dateModified: '2026-11-25' },
      { '@type': 'HowTo', name: 'How to make a birthday or proposal website without coding', totalTime: 'PT15M', step: [
        { '@type': 'HowToStep', position: 1, name: 'Choose an occasion template', text: 'Browse birthday, proposal, anniversary, letter or invitation designs and check the language label.', url: abs('/templates/') },
        { '@type': 'HowToStep', position: 2, name: 'Open the visual editor', text: 'Sign up free on wishly.bd and open the template in the visual editor.' },
        { '@type': 'HowToStep', position: 3, name: 'Add your words and photos', text: 'Replace the sample text and photos; add music or video where the template supports it.' },
        { '@type': 'HowToStep', position: 4, name: 'Preview on a phone-size screen', text: 'Check names, dates, spelling and every reveal or button.' },
        { '@type': 'HowToStep', position: 5, name: 'Publish and share one link', text: 'Publish the page and send the link by message, email or QR code.' },
      ] },
    ],
  };
  return (
    <PageShell kicker="NO-CODE WISH WEBSITE MAKER" title={<>Make a wish website <em>without coding.</em></>} lead="Wishly is a no-code website maker for birthday wishes, proposals, anniversaries and love letters. Pick a template, edit it visually and share one link." path="/wish-website-maker/" name="Wish website maker">
      <JsonLd data={ld} />
      <JsonLd data={faqLd(faqs)} />
      <article className="global-wrap" style={{ maxWidth: 860, paddingBottom: 40 }}>
        <h2>The short answer</h2>
        <p>To make a birthday, proposal or love-letter website without coding, choose an occasion template, personalise the text and photos in a visual editor, preview it, then publish and share the link. <strong>Wishly</strong> is built for exactly this: ready-made designs for personal moments, an editor that needs no technical skill, and a single link the recipient opens in any browser. It is free to start; some templates are Premium.</p>

        <h2>Make it in five steps</h2>
        <ol>
          <li><strong>Choose the occasion.</strong> Browse <Link href="/templates/birthday/">birthday</Link>, <Link href="/templates/proposal/">proposal</Link>, <Link href="/templates/anniversary/">anniversary</Link>, <Link href="/templates/letter/">letter</Link> or <Link href="/templates/invitation/">invitation</Link> designs.</li>
          <li><strong>Open the editor</strong> on <a href={appLink('/signup')} rel="noopener">wishly.bd</a> (free to start).</li>
          <li><strong>Add your words and photos.</strong> Music or video only where the template supports it.</li>
          <li><strong>Preview on a phone-size screen.</strong> Check names, dates and every reveal.</li>
          <li><strong>Publish and share one link</strong> by message, email or QR code.</li>
        </ol>

        <h2>What people make</h2>
        <ul>
          <li>Birthday wish websites with a countdown, memories and a surprise reveal</li>
          <li>Proposal pages that build up to the question</li>
          <li>Digital love letters, miss-you pages and sincere apologies</li>
          <li>Anniversary timelines, thank-you notes and best-friend surprises</li>
          <li>Wedding and event invitations gathered in one link</li>
        </ul>

        <h2>Wishly compared with other approaches</h2>
        <p>This is a general comparison of approaches, not of specific brands.</p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead><tr><th style={{ textAlign: 'left', padding: 10 }}></th><th style={{ textAlign: 'left', padding: 10 }}>Wishly (wish website maker)</th><th style={{ textAlign: 'left', padding: 10 }}>General website builder</th><th style={{ textAlign: 'left', padding: 10 }}>Greeting card app</th></tr></thead>
            <tbody>{compare.map(([a, b, c, d]) => <tr key={a}><th scope="row" style={{ textAlign: 'left', padding: 10 }}>{a}</th><td style={{ padding: 10 }}>{b}</td><td style={{ padding: 10 }}>{c}</td><td style={{ padding: 10 }}>{d}</td></tr>)}</tbody>
          </table>
        </div>

        <h2>Good to know</h2>
        <p>Features differ by template, so check each preview. Wishly makes digital pages only; it does not print or deliver physical cards. Template language (English or Bengali) is shown on every card. Read more in <Link href="/what-is-wishly/">What is Wishly?</Link> and the <Link href="/how-to-make-website/">step-by-step guide</Link>.</p>
        <p><a className="global-underlined-link" href={appLink('/signup')} rel="noopener">Start free on Wishly.bd <ArrowUpRight size={15} aria-hidden="true" /></a></p>
      </article>
      <section className="global-wrap">
        <Faq faqs={faqs} heading="Wish website questions." lead="Quick answers about making a personal wish page without coding." />
      </section>
    </PageShell>
  );
}
