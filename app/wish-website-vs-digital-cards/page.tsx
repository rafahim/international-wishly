import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageShell from '@/components/PageShell';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import { faqLd, pageMeta } from '@/lib/seo';
import { SITE, abs, appLink } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Wish Website vs Digital Card vs Group Card: Which to Choose',
  absoluteTitle: true,
  description: 'Compare a personal wish website, a digital greeting card, a group card and a freelancer-coded page. See which suits a birthday, proposal or love letter.',
  path: '/wish-website-vs-digital-cards/',
  keywords: ['digital birthday card vs website', 'group birthday card online', 'online greeting card alternatives', 'digital love letter website', 'personalised website gift'],
});

const types: [string, string, string, string][] = [
  ['Personal wish website (Wishly)', 'One person builds one page for one occasion from a template: reveals, letters, countdowns, games, photos and music where the template supports them.', 'Birthdays, proposals, anniversaries, love letters, apologies, invitations', 'You write it alone; it is not primarily a message-collection board'],
  ['Digital greeting card or e-card', 'A card with a message, often with photos or a short animation, sent as a link or email.', 'A quick, simple greeting', 'Usually less interactive and less of a “place” to explore'],
  ['Group card or message board', 'Many people add messages, photos or videos to one shared card or board. Examples include Kudoboard, GroupTogether and Thankbox; several also offer group gift collection.', 'Office birthdays, retirements, farewells, team recognition', 'It is built around many contributors, not a single personal story'],
  ['Personal gift-page services', 'Services that build a personalised page with photos, songs, videos, text or countdowns. Examples include QLovy and Just Meant For You.', 'Romantic gifts, anniversaries, digital love letters', 'Compare templates, pricing and features on each service'],
  ['Freelancer-coded or marketplace template', 'A developer codes a custom romantic or birthday page, or you buy an editable template on a marketplace such as Etsy or Fiverr.', 'A fully bespoke idea with a budget and time', 'Cost, delivery time and editing depend on the seller'],
  ['AI website builder', 'Describe the site in plain English and an AI tool generates it. Many general builders now offer birthday website prompts.', 'People who want to experiment or need a custom structure', 'Output quality varies and you still check design, text and mobile layout'],
];

const faqs: [string, string][] = [
  ['What is the difference between a digital birthday card and a birthday website?', 'A digital card is usually a single greeting. A birthday website is a small page with its own link that can reveal memories, a countdown, a letter or a game, depending on the template.'],
  ['Which is better for an office birthday: a group card or a wish website?', 'A group card is usually better when many colleagues need to add messages. A wish website suits one person making something personal for a partner, friend or family member.'],
  ['Is a personal wish website better than a Canva or e-card greeting?', 'It depends on the goal. For a fast, simple greeting, an e-card is enough. For a surprise with a reveal, photos, music and a message in one link, a wish website gives you more room.'],
  ['Can I make a digital love letter website without coding?', 'Yes. Template-based makers such as Wishly let you edit text and photos visually, with no code. Freelancers and marketplaces are an alternative if you want something fully custom.'],
  ['Are these descriptions up to date?', 'They summarise each type of service from public pages as of November 2026. Features, prices and availability change, so check each provider before you choose.'],
];

export default function Page() {
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': `${abs('/wish-website-vs-digital-cards/')}#page`, url: abs('/wish-website-vs-digital-cards/'), name: 'Wish website vs digital card vs group card', inLanguage: 'en', isPartOf: { '@id': `${SITE.url}/#website` }, about: { '@id': 'https://wishly.bd/#app' }, dateModified: '2026-11-25' },
    ],
  };
  return (
    <PageShell kicker="COMPARE YOUR OPTIONS" title={<>Wish website, digital card or <em>group card?</em></>} lead="A plain comparison of the ways people send a birthday wish, a proposal or a love letter online, and which one fits which moment." path="/wish-website-vs-digital-cards/" name="Wish website vs digital cards">
      <JsonLd data={ld} />
      <JsonLd data={faqLd(faqs)} />
      <article className="global-wrap" style={{ maxWidth: 900, paddingBottom: 40 }}>
        <h2>The short answer</h2>
        <p>Use a <strong>group card</strong> when many people need to sign. Use an <strong>e-card</strong> for a quick greeting. Use a <strong>personal wish website</strong> such as Wishly when one person wants to make something for one occasion, with a reveal, a letter, photos or a countdown, and share it as one link. Use a <strong>freelancer or AI builder</strong> when you want something fully custom.</p>

        <h2>Six ways to send a wish online</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead><tr><th style={{ textAlign: 'left', padding: 10 }}>Option</th><th style={{ textAlign: 'left', padding: 10 }}>What it is</th><th style={{ textAlign: 'left', padding: 10 }}>Best for</th><th style={{ textAlign: 'left', padding: 10 }}>Watch out for</th></tr></thead>
            <tbody>{types.map(([a, b, c, d]) => <tr key={a}><th scope="row" style={{ textAlign: 'left', padding: 10, verticalAlign: 'top' }}>{a}</th><td style={{ padding: 10, verticalAlign: 'top' }}>{b}</td><td style={{ padding: 10, verticalAlign: 'top' }}>{c}</td><td style={{ padding: 10, verticalAlign: 'top' }}>{d}</td></tr>)}</tbody>
          </table>
        </div>
        <p style={{ fontSize: 13, opacity: 0.8 }}>Named services are examples taken from their public pages as of November 2026, not an endorsement or a complete list. Check current features and pricing before choosing.</p>

        <h2>Which should you choose?</h2>
        <ul>
          <li><strong>A coworker’s farewell:</strong> group card.</li>
          <li><strong>A partner’s birthday or anniversary:</strong> personal wish website or gift page.</li>
          <li><strong>A proposal:</strong> <Link href="/templates/proposal/">proposal page</Link>, planned around the moment.</li>
          <li><strong>A last-minute hello:</strong> e-card.</li>
          <li><strong>A very specific idea:</strong> freelancer-coded page or AI builder, with time to test it.</li>
        </ul>
        <p>See also: <Link href="/wish-website-maker/">no-code wish website maker</Link>, <Link href="/what-is-wishly/">what is Wishly?</Link> and <Link href="/insights/birthday-website-vs-digital-birthday-card/">birthday website vs digital birthday card</Link>.</p>
        <p><a className="global-underlined-link" href={appLink('/signup')} rel="noopener">Start free on Wishly.bd <ArrowUpRight size={15} aria-hidden="true" /></a></p>
      </article>
      <section className="global-wrap">
        <Faq faqs={faqs} heading="Cards, pages and websites." lead="Quick answers to compare the options." />
      </section>
    </PageShell>
  );
}
