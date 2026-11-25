import Link from 'next/link';
import PageShell from '@/components/PageShell';
import FaqExplorer from '@/components/FaqExplorer';
import './faq-page.css';
import JsonLd from '@/components/JsonLd';
import { faqLd, pageMeta } from '@/lib/seo';
import { faqs } from '@/lib/content';
import { appLink } from '@/lib/site';
import { ArrowUpRight, BookOpen, LayoutTemplate, Sparkles } from 'lucide-react';

export const metadata = pageMeta({
  title: 'Wishly FAQ: Website Templates, Editing and Sharing',
  description: 'Find clear answers about Wishly website templates, personalisation, publishing, mobile access, invitations and sharing. Learn what happens on this international site and what you do on the main Wishly.bd website.',
  path: '/faq/',
  keywords: ['Wishly FAQ', 'personal website maker help', 'birthday website questions', 'digital invitation website help', 'share a personal website'],
});

export default function Page() {
  return (
    <PageShell kicker="HELP & ANSWERS" title={<>Good to know, <em>before you create.</em></>} lead="Straightforward answers about exploring designs, choosing a template, personalising a page and sharing it. And a clear explanation of when to visit the main Wishly website." path="/faq/" name="Frequently asked questions" cta={false} className="faq-page">
      <JsonLd data={faqLd(faqs)} />

      <section className="faq-page-route global-wrap" aria-label="Where to explore and where to create">
        <div className="faq-page-route-intro">
          <p className="global-overline">TWO PLACES, TWO CLEAR ROLES</p>
          <h2>Explore the idea here. Make it on Wishly.bd.</h2>
          <p>Use this international site to browse examples and learn. Your account, editor, publishing tools and website dashboard are all on the main Wishly.bd platform.</p>
        </div>
        <div className="faq-page-route-cards">
          <article className="faq-route-card">
            <span className="faq-route-icon"><BookOpen size={20}/></span>
            <div><small>YOU ARE HERE</small><h3>Explore and learn</h3><p>Browse insights, occasion collections and template previews.</p></div>
            <Link href="/insights/" aria-label="Explore Wishly Insights"><ArrowUpRight size={18}/></Link>
          </article>
          <article className="faq-route-card faq-route-card-main">
            <span className="faq-route-icon"><Sparkles size={20}/></span>
            <div><small>MAIN PRODUCT WEBSITE</small><h3>Create on Wishly.bd</h3><p>Sign up, open the editor, personalise your page and publish it.</p></div>
            <a href={appLink('/signup')} aria-label="Create a website on Wishly.bd"><ArrowUpRight size={18}/></a>
          </article>
        </div>
      </section>

      <section className="faq-page-content global-wrap" aria-labelledby="faq-list-title">
        <FaqExplorer faqs={faqs} />
      </section>

      <section className="faq-page-resources global-wrap" aria-label="More Wishly resources">
        <Link href="/templates/" className="faq-resource-card"><span><LayoutTemplate size={19}/></span><div><small>FIND A DESIGN</small><b>Browse templates</b><p>Compare designs by occasion, language and style.</p></div><ArrowUpRight size={18}/></Link>
        <Link href="/insights/" className="faq-resource-card"><span><BookOpen size={19}/></span><div><small>GET INSPIRED</small><b>Explore insights</b><p>Read practical ideas for birthdays, letters and more.</p></div><ArrowUpRight size={18}/></Link>
      </section>
    </PageShell>
  );
}
