import Link from 'next/link';
import { ArrowUpRight, Check, Images, Mail, Music2, PenLine, Smartphone, Sparkles, type LucideIcon } from 'lucide-react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TemplateCard from '@/components/TemplateCard';
import JsonLd from '@/components/JsonLd';
import { SITE, abs, appLink } from '@/lib/site';
import { pageMeta } from '@/lib/seo';
import { features, steps } from '@/lib/content';
import { occasionList, templates, templatesFor, coverSrc } from '@/lib/templates';
import { guides } from '@/lib/guides';

export const metadata: Metadata = pageMeta({
  title: SITE.title,
  description: SITE.description,
  path: '/',
  keywords: ['personal website maker', 'digital gift website', 'make a website for someone you love', 'birthday website designs', 'online invitation page'],
});

const featureIcons: Record<string, LucideIcon> = { pen: PenLine, images: Images, music: Music2, mail: Mail, phone: Smartphone, link: ArrowUpRight };

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
      <Navbar />

      <section className="global-hero global-wrap">
        <div className="global-hero-copy">
          <p className="global-overline"><span className="global-overline-mark">✳</span> A PERSONAL PAGE FOR A MOMENT THAT MATTERS</p>
          <h1>Find the perfect idea. <em>Create something unforgettable.</em></h1>
          <p className="global-hero-lead">Explore birthday website ideas, romantic page inspiration, anniversary surprises, digital love letters and online invitations. Find a starting point for someone special, compare real Wishly designs and continue to Wishly.bd when you are ready to create.</p>
          <div className="global-hero-actions">
            <Link href="/guides/" className="global-button global-button-primary">Explore ideas <ArrowUpRight size={17} /></Link>
            <a href={appLink('/signup')} className="global-text-action">Create on Wishly.bd <span>↗</span></a>
          </div>
          <div className="global-trust-line"><span><Check size={14} /> No coding</span><span><Check size={14} /> Opens in a browser</span><span><Check size={14} /> One shareable link</span></div>
          <div className="global-trust-line global-stats-line"><span><b>11+</b> ways to celebrate</span><span><b>53+</b> templates and more</span></div>
        </div>

        <div className="global-hero-art global-hero-art-featured" aria-label="A real preview of a Wishly website template">
          <div className="global-browser-card global-browser-card-featured">
            <div className="global-browser-top"><span></span><span></span><span></span><b>WISHLY TEMPLATE PREVIEW</b></div>
            <div className="global-browser-content global-browser-content-featured">
              <div className="global-photo-frame global-photo-frame-featured">
                <img
                  src="/template-shots/a-little-birthday-letter.webp"
                  alt="The Lavender Birthday Letter, an actual Wishly template preview"
                  width="960"
                  height="600"
                  fetchPriority="high"
                />
              </div>
            </div>
            <div className="global-hero-template-meta">
              <div>
                <span>FROM THE WISHLY DESIGN LIBRARY</span>
                <strong>The Lavender Birthday Letter</strong>
                <small>A real template preview · Birthday</small>
              </div>
              <Link href="/template/a-little-birthday-letter/" className="global-hero-template-link">View design <ArrowUpRight size={15} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="global-moments global-wrap" aria-labelledby="global-occasions-title">
        <div className="global-occasion-heading">
          <p className="global-overline">EXPLORE BY OCCASION</p>
          <h2 id="global-occasions-title">Find an idea for every special moment.</h2>
          <p>Start with the occasion. Explore designs and inspiration made for the people who matter.</p>
        </div>
        <div className="global-occasion-grid">
          {['birthday', 'proposal', 'anniversary', 'wedding', 'friendship', 'letter'].map((key) => {
            const occasion = occasionList.find((item) => item.key === key);
            const template = templatesFor(key)[0];
            if (!occasion || !template) return null;
            const label = key === 'letter' ? 'Letters & Thank You' : key === 'proposal' ? 'Love & Proposal' : occasion.label;
            return (
              <Link href={`/templates/${key}/`} key={key} className="global-occasion-card">
                <img src={coverSrc(template.slug)} alt={`${label} website inspiration`} width="960" height="600" loading="lazy" />
                <span className="global-occasion-shade" />
                <span className="global-occasion-card-copy"><b>{label}</b><small>{occasion.count} {occasion.count === 1 ? 'design' : 'designs'} to explore</small></span>
                <span className="global-occasion-arrow"><ArrowUpRight size={17} /></span>
              </Link>
            );
          })}
        </div>
        <div className="global-occasion-more"><Link href="/templates/" className="global-underlined-link">Explore all occasions <span>↗</span></Link></div>
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
          <div className="tc-grid global-template-grid">{showcase.map((template, index) => <TemplateCard key={template.slug} template={template} priority={index < 3} />)}</div>
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
          <p className="global-main-product-footnote">Your account and creation workflow always stay on the main Wishly website.</p>
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
        <div className="global-editorial-cards">
          <article className="global-editorial-card global-editorial-card-cream">
            <span className="global-card-number">01</span>
            <img className="global-editorial-card-image" src="/template-shots/love-letter.webp" alt="A real Wishly love letter template preview for one special recipient" width="960" height="600" loading="lazy" />
            <div className="global-card-copy"><div className="global-card-icon">✳</div><h3>Made for one recipient</h3><p>Use a name, a shared memory and the details that would mean something to them.</p></div>
          </article>
          <article className="global-editorial-card global-editorial-card-blue">
            <span className="global-card-number">02</span>
            <img className="global-editorial-card-image" src="/template-shots/blue-sky-wedding-invitation.webp" alt="A digital wedding invitation template preview" width="960" height="600" loading="lazy" />
            <div className="global-card-copy"><div className="global-card-icon">↗</div><h3>Easy to pass along</h3><p>Publish once and share the page by message, email or QR code where supported.</p></div>
          </article>
          <article className="global-editorial-card global-editorial-card-peach">
            <span className="global-card-number">03</span>
            <img className="global-editorial-card-image" src="/template-shots/a-note-of-gratitude.webp" alt="A personalised gratitude page template with a message envelope" width="960" height="600" loading="lazy" />
            <div className="global-card-copy"><div className="global-card-icon">♡</div><h3>Yours in the details</h3><p>Choose the mood, add your own photos and make the final message sound like you.</p></div>
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

      <section className="global-final-cta global-wrap">
        <div className="global-final-cta-inner"><p className="global-overline">WHEN YOU’RE READY</p><h2>Make a page they’ll remember opening.</h2><p>Find a design for the moment, then add the details that make it yours.</p><div className="global-hero-actions"><a href={appLink('/signup')} className="global-button global-button-primary">Create on Wishly.bd <ArrowUpRight size={17} /></a><Link href="/templates/" className="global-text-action">Browse designs <span>↗</span></Link></div></div>
        <div className="global-final-doodle" aria-hidden="true">✳</div>
      </section>

      <Footer />
    </main>
  );
}
