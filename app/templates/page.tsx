import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TemplateBrowser from '@/components/TemplateBrowser';
import JsonLd from '@/components/JsonLd';
import { abs } from '@/lib/site';
import { crumbs, pageMeta } from '@/lib/seo';
import { occasionList, templates } from '@/lib/templates';

export const metadata = pageMeta({
  title: 'Explore Personal Website Designs for Birthdays, Letters and Celebrations',
  description: `Explore ${templates.length} occasion-focused website designs. Compare styles for birthdays, proposals, invitations, apologies and personal letters, then preview a design before making your own page.`,
  path: '/templates/',
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
          <h2 id="templates-seo-title">Birthday, proposal, love letter, sorry and invitation templates in one place.</h2>
          <p>Think of a template as the starting point for a small online experience. Some designs begin with a letter or an invitation; others use a photo sequence, a reveal or a celebratory scene. The available editing options depend on the design you choose. Check the language label, preview the experience on a phone and decide whether its pace and visual style suit the person receiving it.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
