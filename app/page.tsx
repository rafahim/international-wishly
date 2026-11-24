import Link from 'next/link';
import { ArrowUpRight, Cake, CalendarHeart, Check, Church, Gem, HandHeart, Handshake, Heart, HeartHandshake, Images, Mail, MailOpen, Music2, PenLine, Send, Smartphone, Sparkles, Users, type LucideIcon } from 'lucide-react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TemplateCard from '@/components/TemplateCard';
import HeroShowcase from '@/components/HeroShowcase';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import { SITE, abs, appLink } from '@/lib/site';
import { pageMeta, faqLd } from '@/lib/seo';
import { features, steps, faqs } from '@/lib/content';
import { occasionList, templates } from '@/lib/templates';
import { guides } from '@/lib/guides';
import './occasion-strip.css';
import './editorial-art.css';

export const metadata: Metadata = pageMeta({
  title: SITE.title,
  absoluteTitle: true,
  description: SITE.description,
  path: '/',
  keywords: ['website builder for wishes', 'personal website maker', 'digital gift website', 'make a website for someone you love', 'birthday website designs', 'online invitation page'],
});

const featureIcons: Record<string, LucideIcon> = { pen: PenLine, images: Images, music: Music2, mail: Mail, phone: Smartphone, link: ArrowUpRight };

// Occasion chips open the matching occasion page on the main Wishly website (wishly.bd).
const feelings: [string, string, LucideIcon][] = [
  ['birthday', 'Birthday', Cake],
  ['proposal', 'Proposal', Gem],
  ['wedding', 'Wedding', Church],
  ['miss-you', 'Miss You', Heart],
  ['sorry', 'Sorry', HeartHandshake],
  ['letter', 'Letter', Mail],
  ['best-friend', 'Best Friend', Handshake],
  ['friendship', 'Friendship', Users],
  ['anniversary', 'Anniversary', CalendarHeart],
  ['thank-you', 'Thank You', HandHeart],
  ['invitation', 'Invitation Cards', MailOpen],
];

export default function Home() {
  const stats: [string, string][] = [
    [`${templates.length}+`, 'ready-made templates and growing'],
    [`${occasionList.length}+`, 'occasions, from birthdays to apologies'],
    ['1 link', 'to share anywhere, no app needed'],
    ['Mobile first', 'build and edit from your phone'],
  ];

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
      <JsonLd data={faqLd(faqs.slice(0, 6))} />
      <Navbar />

      <section className="global-hero global-wrap">
        <div className="global-hero-copy">
          <p className="global-overline"><span className="global-overline-mark">✳</span> A PERSONAL PAGE FOR A MOMENT THAT MATTERS</p>
          <h1>Find the perfect idea. <em>Create something unforgettable.</em></h1>
          <p className="global-hero-lead">Make a birthday, proposal or love-letter website without coding. Explore anniversary surprises, digital letters and online invitations, find a starting point for someone special, compare real Wishly designs and continue to Wishly.bd when you are ready to create.</p>
          <div className="global-hero-actions">
            <Link href="/guides/" className="global-button global-button-primary">Explore ideas <ArrowUpRight size={17} /></Link>
            <a href={appLink('/signup')} className="global-text-action">Create on Wishly.bd <span>↗</span></a>
          </div>
          <div className="global-trust-line"><span><Check size={14} /> No coding</span><span><Check size={14} /> Opens in a browser</span><span><Check size={14} /> One shareable link</span></div>
          <div className="global-trust-line global-stats-line"><span><b>11+</b> ways to celebrate</span><span><b>53+</b> templates and more</span></div>
        </div>

        <div className="global-hero-art global-hero-art-featured" aria-label="An animated tour of how a Wishly page is made">
          <div className="global-browser-card global-browser-card-featured">
            <div className="global-browser-top"><span></span><span></span><span></span><b>WISHLY TEMPLATE PREVIEW</b></div>
            <div className="global-browser-content global-browser-content-featured">
              <div className="global-photo-frame global-photo-frame-featured">
                <HeroShowcase />
              </div>
            </div>
            <div className="global-hero-template-meta">
              <div>
                <span>FROM IDEA TO SHAREABLE LINK</span>
                <strong>Everything Wishly does, in one tour</strong>
                <small>Design · Words · Photos · Music · Surprises · Publish</small>
              </div>
              <Link href="/templates/" className="global-hero-template-link">Explore designs <ArrowUpRight size={15} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="os-strip" aria-labelledby="global-occasions-title">
        <h2 id="global-occasions-title" className="os-sr">Find an idea for every special moment</h2>
        <div className="os-stats global-wrap">
          {stats.map(([big, small]) => <div key={small}><strong>{big}</strong><span>{small}</span></div>)}
        </div>
        <div className="os-feel global-wrap">
          <h3 className="os-feel-title">START WITH A FEELING</h3>
          <ul className="os-chips">
            {feelings.map(([key, label, Icon]) => (
              <li key={key}>
                <a href={appLink(`/templates/${key}`)}>
                  <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
                  <span>{label}</span>
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <nav className="os-browse" aria-label="Browse designs by occasion on this site">
            <span>Browse designs here:</span>
            {feelings.map(([key, label]) => <Link key={key} href={`/templates/${key}/`}>{label}</Link>)}
            <Link href="/templates/" className="os-browse-all">All occasions ↗</Link>
          </nav>
        </div>
      </section>

      <section className="global-wrap" aria-labelledby="quick-answer-title" style={{ maxWidth: 860, padding: '40px 0' }}>
        <h2 id="quick-answer-title">What is Wishly?</h2>
        <p><strong>Wishly is a no-code website builder for personal wishes.</strong> Choose a template for a birthday, proposal, anniversary, love letter, apology or invitation, personalise it in a visual editor and share the published page as one link that opens in any browser. No coding or design skills are needed, and it is free to start. <Link href="/wish-website-maker/">How a wish website maker works</Link> · <Link href="/what-is-wishly/">What is Wishly?</Link></p>
      </section>

      <section className="global-template-section">
        <div className="global-wrap">
          <div className="global-heading-row">
            <div className="global-section-intro">
              <p className="global-overline">THE DESIGN LIBRARY</p>
              <h2>Start with a look. Make it yours.</h2>
              <p>Browse real designs from the Wishly library. Open a preview to see how each page is put together, then choose one to personalise on Wishly.bd.</p>
            </div>
            <Link href="/templates/" className="global-underlined-link">Explore 53+ templates and more <span>↗</span></Link>
          </div>
          <div className="tc-grid global-template-grid">{showcase.map((template) => <TemplateCard key={template.slug} template={template} priority={false} />)}</div>
        </div>
      </section>

      <section className="global-main-product global-wrap" aria-labelledby="global-main-product-title">
        <div className="global-main-product-copy">
          <p className="global-overline"><span aria-hidden="true">✦</span> THE MAIN WISHLY WEBSITE</p>
          <h2 id="global-main-product-title">Discover the idea here. <em>Create it on Wishly.bd.</em></h2>
          <p>This international website is your place to explore templates, examples and step-by-step guides. The actual Wishly product is <strong>Wishly.bd</strong>—that is where you create an account, open the visual editor, personalise a design, publish your page and manage it later.</p>
          <div className="global-main-product-points">
            <span><Check size={15} /> Account and dashboard</span>
            <span><Check size={15} /> Template editor and customisation</span>
            <span><Check size={15} /> Publishing and page management</span>
          </div>
          <div className="global-hero-actions">
            <a href={appLink('/')} className="global-button global-button-primary">Visit Wishly.bd <ArrowUpRight size={17} /></a>
            <a href={appLink('/signup')} className="global-text-action">Try it free <span>↗</span></a>
          </div>
          <p className="global-main-product-footnote">Your account and creation workflow always stay on the main Wishly website. New to the name? <Link href="/what-is-wishly/">Read what Wishly is</Link>.</p>
        </div>
        <div className="global-main-product-visual">
          <div className="global-main-product-browser"><div className="global-main-product-browser-bar"><i></i><i></i><i></i><span>wishly.bd / your page</span></div><img src="/template-shots/the-birthday-experience.webp" alt="A preview of a personal birthday website design available through Wishly" width="960" height="600" loading="lazy" /></div>
          <span className="global-main-product-sticker">MAIN PRODUCT <b>WISHLY.BD</b></span>
        </div>
      </section>

      <section className="global-editorial global-wrap">
        <div className="global-section-intro">
          <p className="global-overline">A DIFFERENT KIND OF GREETING</p>
          <h2>A digital gift can be a place, not just a message.</h2>
          <p>A personal web page lets a message arrive with a little atmosphere. It can open like a letter, reveal a memory or gather event details in one place. The design sets the scene; your words make it matter.</p>
          <Link href="/how-to-make-website/" className="global-underlined-link">See how the process works <span>↗</span></Link>
        </div>
        <div className="ea-cards">
          <article className="ea-card ea-card-lead">
            <div className="ea-art"><img src="/card-art/card-recipient.svg" alt="A sealed envelope with a heart wax seal and a note addressed to Maya" width="520" height="420" loading="lazy" decoding="async" /></div>
            <div className="ea-copy"><span className="ea-ic"><Sparkles size={20} strokeWidth={1.75} aria-hidden="true" /></span><h3>Made for one recipient</h3><p>Use a name, a shared memory and the details that would mean something to them.</p></div>
          </article>
          <article className="ea-card">
            <div className="ea-art"><img src="/card-art/card-share.svg" alt="A phone showing a shareable link and QR code" width="320" height="300" loading="lazy" decoding="async" /></div>
            <div className="ea-copy"><span className="ea-ic"><Send size={19} strokeWidth={1.75} aria-hidden="true" /></span><h3>Easy to pass along</h3><p>Publish once and share the page by message, email or QR code where supported.</p></div>
          </article>
          <article className="ea-card">
            <div className="ea-art"><img src="/card-art/card-details.svg" alt="A birthday page being customised with a photo, colours and a message" width="320" height="300" loading="lazy" decoding="async" /></div>
            <div className="ea-copy"><span className="ea-ic"><Heart size={19} strokeWidth={1.75} aria-hidden="true" /></span><h3>Yours in the details</h3><p>Choose the mood, add your own photos and make the final message sound like you.</p></div>
          </article>
        </div>
      </section>

      <section className="global-how global-wrap" id="how-it-works">
        <div className="global-how-heading">
          <p className="global-overline">FROM IDEA TO SHARE LINK</p>
          <h2>Five steps. One thoughtful little website.</h2>
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
          {guides.slice(0, 4).map((guide) => <article key={guide.slug}><span>{guide.category}</span><h3><Link href={`/guides/${guide.slug}/`}>{guide.title}</Link></h3><Link href={`/guides/${guide.slug}/`} className="global-guide-arrow" aria-label={`Read ${guide.title}`}><ArrowUpRight size={17} /></Link></article>)}
        </div>
      </section>

      <section className="global-wrap" aria-label="Frequently asked questions">
        <Faq faqs={faqs.slice(0, 6)} heading="Wishly, answered." lead="Quick answers about making a wish website without coding." />
      </section>

      <section className="global-final-cta global-wrap">
        <div className="global-final-cta-inner"><p className="global-overline">WHEN YOU’RE READY</p><h2>Make a page they’ll remember opening.</h2><p>Find a design for the moment, then add the details that make it yours.</p><div className="global-hero-actions"><a href={appLink('/signup')} className="global-button global-button-primary">Create on Wishly.bd <ArrowUpRight size={17} /></a><Link href="/templates/" className="global-text-action">Browse designs <span>↗</span></Link></div></div>
        <div className="global-final-doodle" aria-hidden="true">✳</div>
      </section>

      <Footer />
    </main>
  );
}
