import PageShell from '@/components/PageShell';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import { faqLd, pageMeta } from '@/lib/seo';
import { faqs } from '@/lib/content';

export const metadata = pageMeta({
  title: 'Help: Templates, Sharing, Languages and Accounts',
  description: 'Find answers about personal Wishly pages, template options, editing, international sharing, supported languages and where your account is managed.',
  path: '/faq/',
});

export default function Page() {
  return (
    <PageShell kicker="HELP & ANSWERS" title="Useful details, before you begin." lead="A few practical answers about choosing a design, sharing your page and using the main Wishly app." path="/faq/" name="FAQ" cta={false}>
      <JsonLd data={faqLd(faqs)} />
      <section className="premium-container hp-sec hp-sec-faq"><Faq faqs={faqs} heading="Questions about making and sharing a page." lead="We have kept the answers practical: what you can make, where it lives and what the recipient needs." /></section>
    </PageShell>
  );
}
