import Link from 'next/link';
import { ArrowUpRight, Cake, CalendarHeart, Check, Church, Gift, Heart, Mail, Music2, PenLine, Smartphone, Sparkles, Users, type LucideIcon } from 'lucide-react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TemplateCard from '@/components/TemplateCard';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import { SITE, abs, appLink } from '@/lib/site';
import { pageMeta, faqLd } from '@/lib/seo';
import { faqs, features, steps } from '@/lib/content';
import { occasionList, templates } from '@/lib/templates';
import { guides } from '@/lib/guides';

export const metadata: Metadata = pageMeta({
  title: SITE.title,
  description: SITE.description,
  path: '/',
});

const occasionIcons: Record<string, LucideIcon> = {
  birthday: Cake, proposal: Heart, wedding: Church, 'miss-you': Mail,
  sorry: Sparkles, letter: Mail, anniversary: CalendarHeart,
  'best-friend': Users, friendship: Users, invitation: Gift, 'thank-you': Check,
};
const featureIcons: Record<string, LucideIcon> = { pen: PenLine, images: Gift, music: Music2, mail: Mail, phone: Smartphone, link: ArrowUpRight };

export default function Home() {
  const showcase = [
    ...templates.filter((template) => ['master', 'the-birthday-experience', 'wedding-proposal', 'love-letter', 'premium-sorry', 'our-love-map'].includes(template.slug)),
    ...templates,
  ].filter((template, index, all) => all.findIndex((item) => item.slug === template.slug) === index).slice(0, 6);

  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': `${abs('/')}#home`, url: abs('/'), name: SITE.title, description: SITE.description, inLanguage: 'en', isPartOf: { '@id': `${SITE.url}/#website` } },
      { '@type': 'ItemList', name: 'Occasion-based personal website ideas', itemListElement: occasionList.map((occasion, index) => ({ '@type': 'ListItem', position: index + 1, name: occasion.label, url: abs(`/templates/${occasion.key}/`) })) },
    ],
  };

  return (
    <main className="premium-site international-site">
      <JsonLd data={ld} />
      <JsonLd data={faqLd(faqs.slice(0, 7))} />
      <Navbar />

      <section className="global-hero global-wrap">
        <div className="global-hero-copy">
          <p className="global-overline"><span className="global-overline-mark">✳</span> A PERSONAL PAGE FOR A MOMENT THAT MATTERS</p>
          <h1>A little website can say what a <em>message can’t.</em></h1>
          <p className="global-hero-lead">Give a birthday wish, a love letter or an invitation its own place online. Choose a design, add the details only you know, and send one link to someone anywhere in the world.</p>
          <div className="global-hero-actions">
            <a href={appLink('/signup')} className="global-button global-button-primary">Make your first page <ArrowUpRight size={17} /></a>
            <Link href="/templates/" className="global-text-action">Find a design <span>↗</span></Link>
          </div>
          <div className="global-trust-line"><span><Check size={14} /> No coding</span><span><Check size={14} /> Opens in a browser</span><span><Check size={14} /> One shareable link</span></div>
        </div>

        <div className="global-hero-art" aria-label="A preview of a personalised birthday page">
          <div className="global-art-stamp">MADE FOR<br />ONE PERSON</div>
          <div className="global-paper-back"></div>
          <div className="global-browser-card">
            <div className="global-browser-top"><span></span><span></span><span></span><b>wishly / your-page</b></div>
            <div className="global-browser-content">
              <div className="global-photo-frame"><img src="/template-shots/the-birthday-experience.webp" alt="A preview from a birthday website template" width="960" height="600" /></div>
              <div className="global-art-caption"><small>A NOTE FOR SOMEONE SPECIAL</small><strong>For all the little things that make you, you.</strong><span>Photos · Words · A favourite song</span></div>
            </div>
          </div>
          <div className="global-art-note"><span>01 / THE IDEA</span><b>Make it feel like them.</b><i>Not just another notification.</i></div>
          <div className="global-art-flower" aria-hidden="true">✳</div>
        </div>
      </section>

      <section className="global-moments global-wrap" aria-label="Occasions">
        <div className="global-section-intro global-section-intro-inline">
          <p className="global-overline">START WITH THE OCCASION</p>
          <h2>What are you celebrating?</h2>
        </div>
        <div className="global-moment-list">
          {occasionList.map((occasion) => {
            const Icon = occasionIcons[occasion.key] || Sparkles;
            return <Link href={`/templates/${occasion.key}/`} key={occasion.key} className="global-moment-link"><span><Icon size={18} strokeWidth={1.7} /></span>{occasion.label}<ArrowUpRight size={14} /></Link>;
          })}
        </div>
      </section>

      <section className="global-editorial global-wrap">
        <div className="global-section-intro">
          <p className="global-overline">A DIFFERENT KIND OF GREETING</p>
          <h2>Not a card. Not a long chat. A place of your own.</h2>
          <p>A personal web page lets a message arrive with a little atmosphere. It can open like a letter, reveal a memory or gather event details in one place. The design sets the scene; your words make it matter.</p>
          <Link href="/how-to-make-website/" className="global-underlined-link">See how the process works <span>↗</span></Link>
        </div>
        <div className="global-editorial-cards">
          <article className="global-editorial-card global-editorial-card-cream"><span className="global-card-number">01</span><div className="global-card-icon">✳</div><h3>Made for one recipient</h3><p>Use a name, a shared memory and the details that would mean something to them.</p></article>
          <article className="global-editorial-card global-editorial-card-blue"><span className="global-card-number">02</span><div className="global-card-icon">↗</div><h3>Easy to pass along</h3><p>Publish once and share the page by message, email or QR code where supported.</p></article>
          <article className="global-editorial-card global-editorial-card-peach"><span className="global-card-number">03</span><div className="global-card-icon">♡</div><h3>Yours in the details</h3><p>Choose the mood, add your own photos and make the final message sound like you.</p></article>
        </div>
      </section>

      <section className="global-template-section">
        <div className="global-wrap">
          <div className="global-heading-row">
            <div className="global-section-intro">
              <p className="global-overline">THE DESIGN LIBRARY</p>
              <h2>Start with a look. Make it yours.</h2>
              <p>Explore pages for different occasions and personalities. Preview a design first, then take the one you like into the Wishly editor.</p>
            </div>
            <Link href="/templates/" className="global-underlined-link">Explore all {templates.length} designs <span>↗</span></Link>
          </div>
          <div className="tc-grid global-template-grid">{showcase.map((template, index) => <TemplateCard key={template.slug} template={template} priority={index < 3} />)}</div>
        </div>
      </section>

      <section className="global-how global-wrap" id="how-it-works">
        <div className="global-how-heading">
          <p className="global-overline">FROM IDEA TO SHARE LINK</p>
          <h2>Three steps. One thoughtful little website.</h2>
          <p>You bring the feeling. The template gives it a shape.</p>
        </div>
        <ol className="global-step-list">
          {steps.map(([number, title, description]) => <li key={number}><span className="global-step-number">{number.padStart(2, '0')}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowUpRight size={19} /></li>)}
        </ol>
      </section>

      <section className="global-features-section">
        <div className="global-wrap">
          <div className="global-heading-row">
            <div className="global-section-intro"><p className="global-overline">THE LITTLE DETAILS</p><h2>All the pieces, in one place.</h2><p>The editor and each template offer their own set of ways to personalise a page.</p></div>
            <Link href="/features/" className="global-underlined-link">Explore the features <span>↗</span></Link>
          </div>
          <div className="global-feature-grid">
            {features.map(([key, title, description]) => { const Icon = featureIcons[key] || Sparkles; return <article key={key}><div className="global-feature-icon"><Icon size={19} strokeWidth={1.7} /></div><h3>{title}</h3><p>{description}</p></article>; })}
          </div>
        </div>
      </section>

      <section className="global-wrap global-guide-promo">
        <div className="global-guide-promo-head"><p className="global-overline">NOT SURE WHERE TO BEGIN?</p><h2>A few ideas to get your words moving.</h2><Link className="global-underlined-link" href="/guides/">All ideas & guides <span>↗</span></Link></div>
        <div className="global-guide-promo-list">
          {guides.map((guide) => <article key={guide.slug}><span>{guide.category}</span><h3><Link href={`/guides/${guide.slug}/`}>{guide.title}</Link></h3><Link href={`/guides/${guide.slug}/`} className="global-guide-arrow" aria-label={`Read ${guide.title}`}><ArrowUpRight size={17} /></Link></article>)}
        </div>
      </section>

      <section className="global-story-band global-wrap">
        <div className="global-story-mark">W.</div>
        <div><p className="global-overline">MADE IN BANGLADESH. SHARED EVERYWHERE.</p><h2>Some feelings travel better as a link.</h2><p>Wishly is built for the moments people want to make personal: a birthday across time zones, a letter that deserves more room, or an invitation guests can open wherever they are. The public collection is here; accounts and page creation stay in one central place.</p></div>
        <a href={appLink('/signup')} className="global-button global-button-light">Continue to Wishly <ArrowUpRight size={17} /></a>
      </section>

      <section className="global-wrap global-faq-section"><Faq faqs={faqs.slice(0, 7)} heading="A few things you might be wondering." lead="A quick guide to the templates, the links and where your page lives." /></section>

      <section className="global-final-cta global-wrap">
        <div className="global-final-cta-inner"><p className="global-overline">WHEN YOU’RE READY</p><h2>Make a page they’ll remember opening.</h2><p>Find a design for the moment, then add the details that make it yours.</p><div className="global-hero-actions"><a href={appLink('/signup')} className="global-button global-button-primary">Start creating <ArrowUpRight size={17} /></a><Link href="/templates/" className="global-text-action">Browse designs <span>↗</span></Link></div></div>
        <div className="global-final-doodle" aria-hidden="true">✳</div>
      </section>

      <Footer />
    </main>
  );
}
