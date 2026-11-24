import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TemplateBrowser from '@/components/TemplateBrowser';
import JsonLd from '@/components/JsonLd';
import { abs } from '@/lib/site';
import { crumbs, pageMeta } from '@/lib/seo';
import { occasionList, templates } from '@/lib/templates';

export const metadata = pageMeta({
  title: 'Personal Website Templates for Every Occasion',
  description: `Browse ${templates.length} personal website templates for birthdays, proposals, digital letters, weddings and invitations. Compare occasion collections, check each design’s language and preview it before you create.`,
  path: '/templates/',
  keywords: ['personal website templates', 'birthday website templates', 'digital love letter templates', 'proposal website templates', 'online invitation templates'],
});

export default function Page() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${abs('/templates/')}#page`,
    url: abs('/templates/'),
    name: 'Wish website templates',
    inLanguage: 'en',
    mainEntity: { '@type': 'ItemList', itemListElement: templates.map((t, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(`/template/${t.slug}/`), name: t.name })) },
  };
  return (
    <main className="premium-site international-site">
      <JsonLd data={ld} />
      <JsonLd data={crumbs([['Home', '/'], ['Templates', '/templates/']])} />
      <Navbar />
      <TemplateBrowser templates={templates} occasions={occasionList} total={templates.length} eyebrow="THE DESIGN LIBRARY" heading="Find the right mood for the moment." subheading="Browse designs by occasion, language or style. Open a preview to see how the experience unfolds, then continue to Wishly to personalise your own page." />
      <section className="premium-container templates-seo-copy" aria-labelledby="templates-seo-title">
        <div className="section-heading">
          <p className="section-kicker">FOR ANY OCCASION</p>
          <h2 id="templates-seo-title">Find a personal website template for the moment you want to mark.</h2>
          <p>Wishly’s design library brings together birthday website templates, romantic proposal pages, digital love letter designs, anniversary experiences and online invitation layouts. Each design has its own visual direction and set of supported controls. The catalogue includes English designs and selected Bengali-language experiences, so check the language label before you choose.</p><p>A template is a starting point, not a finished message. Preview the opening, look at the sections the recipient will move through and think about what you can personalise. Some designs focus on photos and notes; others include a reveal, countdown or event details. The exact options vary by design, so use the preview as your guide rather than assuming every template has the same features.</p><p>For a birthday page, choose a tone that fits the person. For a wedding invitation, make the event information easy to find. For a digital letter, give the writing room to breathe. Some visitors arrive looking for a birthday website maker or birthday webpage; others are browsing for a personal love letter or online invitation. Start with the occasion and the recipient, then compare each design’s language, preview and available options. Browse by occasion to narrow the collection, then open an individual template page for its description, language and demo link.</p>
        </div>
      </section>
      <section className="global-wrap global-template-selection-guide">
        <div className="global-section-intro"><p className="global-overline">HOW TO CHOOSE</p><h2>Choose the design by the job it needs to do.</h2><p>Start with the recipient and the purpose. If someone needs event details, prioritise clarity. If the page is a personal gift, choose a visual style that reflects your relationship. If you are writing a letter, make the words the centre of the page.</p></div>
        <div className="global-template-selection-grid">
          <article><h3>For a birthday or milestone</h3><p>Look for a design that gives the greeting, photos and memories a natural order.</p><Link href="/templates/birthday/">Explore birthday templates ↗</Link></article>
          <article><h3>For a romantic message</h3><p>Choose a proposal, anniversary or letter design that matches the recipient’s comfort and personality.</p><Link href="/templates/proposal/">Explore proposal templates ↗</Link></article>
          <article><h3>For guests and celebrations</h3><p>Use an invitation layout that makes names, time, date, venue and response details easy to check.</p><Link href="/templates/invitation/">Explore invitation templates ↗</Link></article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
