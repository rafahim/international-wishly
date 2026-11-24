import { ArrowUpRight, Check, Clock3, Images, LayoutDashboard, LayoutTemplate, Link2, Mail, MousePointerClick, Palette, PlayCircle, Redo2, Smartphone, Undo2, Eye, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import JsonLd from '@/components/JsonLd';
import { pageMeta, faqLd } from '@/lib/seo';
import { features, faqs } from '@/lib/content';
import { appLink } from '@/lib/site';
import './features.css';

export const metadata = pageMeta({
  title: 'Personal Website Features: Editing and Sharing',
  description: 'See what you can do with a Wishly personal website: visual editing, occasion templates, photos, media, design settings, preview, publishing and shareable links. Options vary by template.',
  path: '/features/',
  keywords: ['personal website features', 'visual birthday website editor', 'digital gift website tools', 'personal page templates', 'shareable invitation website'],
});

const icons: Record<string, LucideIcon> = {
  pen: MousePointerClick, template: LayoutTemplate, images: Images, theme: Palette,
  phone: Smartphone, interactive: PlayCircle, history: Undo2, publish: Link2,
  dashboard: LayoutDashboard, clock: Clock3, mail: Mail,
};

const shot = (slug: string) => `/template-shots/sm/${slug}-480.webp`;

const workflow = [
  {
    title: 'Choose a design that fits the moment',
    body: 'The template sets the structure and mood. Browse by occasion, check the language label and open the preview before you decide. A playful birthday, a quiet letter and an event invitation each need different things.',
    points: ['Compare the opening screen and overall tone.', 'Check which editing options the template supports.', 'Pick something the person receiving it will enjoy.'],
  },
  {
    title: 'Replace the sample details with your own',
    body: 'Use the visual editor on the main Wishly website to select text and media right in the preview. Add real memories in your own voice. Where available, design settings change the template’s palette and font.',
    points: ['Check names, spelling, dates and button destinations.', 'Use photos and media you have permission to share.', 'Keep the main message readable on a phone screen.'],
  },
  {
    title: 'Test it as a visitor, then send it',
    body: 'Preview shows the page without the editing controls. Save your draft as you go, publish when it is ready, then open the live link separately to see what the recipient will see.',
    points: ['Test buttons, reveals and other template interactions.', 'Check image crops, audio and the mobile layout.', 'Share the published page as a link or QR code where available.'],
  },
];

/* Small purpose-built visuals that sit inside specific feature tiles. */
function Visual({ id }: { id: string }) {
  if (id === 'pen') return (
    <div className="ft-vis ft-vis-edit" aria-hidden="true">
      <div className="ft-edit-card">
        <span className="ft-edit-label">Heading</span>
        <div className="ft-edit-box"><i className="ft-h h-tl" /><i className="ft-h h-tr" /><i className="ft-h h-bl" /><i className="ft-h h-br" />Happy birthday, Maya</div>
        <div className="ft-edit-line" /><div className="ft-edit-line short" />
      </div>
    </div>
  );
  if (id === 'images') return (
    <div className="ft-vis ft-vis-shots" aria-hidden="true">
      {['the-birthday-experience', 'midnight-love', 'a-note-of-gratitude'].map((s, i) => <img key={s} src={shot(s)} alt="" width={480} height={300} loading="lazy" decoding="async" style={{ ['--i' as string]: i }} />)}
    </div>
  );
  if (id === 'theme') return (
    <div className="ft-vis ft-vis-swatches" aria-hidden="true">
      {['#f04b9a', '#8b6cff', '#4cc9f0', '#ffb703', '#34d399'].map((c, i) => <span key={c} className={i === 0 ? 'on' : ''} style={{ background: c }} />)}
      <b>Aa</b>
    </div>
  );
  if (id === 'history') return (
    <div className="ft-vis ft-vis-history" aria-hidden="true">
      <span><Undo2 size={15} /></span><span><Redo2 size={15} /></span><span className="pv"><Eye size={15} /> Preview</span>
    </div>
  );
  if (id === 'publish') return (
    <div className="ft-vis ft-vis-link" aria-hidden="true">
      <span className="dot" /><code>yourname.wishly.bd</code><em>Live</em>
    </div>
  );
  return null;
}

const sizes: Record<string, string> = { pen: 'wide', template: '', images: 'wide', theme: '', phone: '', interactive: 'wide', history: '', publish: 'wide', dashboard: '', clock: '' };

export default function Page() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Personal Website Features: Editing, Media and Sharing',
    description: 'An overview of the editing and publishing tools available in Wishly templates.',
    inLanguage: 'en',
  };
  return (
    <PageShell
      className="ft-page"
      kicker="THE WISHLY TOOLKIT"
      title="The details that turn a template into your page."
      lead="A personal website is made from more than a theme. Explore the editing, media and publishing options that may be available in a Wishly design—and learn why the exact controls can differ from one template to another."
      path="/features/"
      name="Features"
      aside={
        <div className="ft-hero-art" aria-hidden="true">
          <div className="ft-window">
            <div className="ft-window-bar">
              <i /><i /><i />
              <span className="ft-tool"><Undo2 size={13} /></span><span className="ft-tool"><Redo2 size={13} /></span>
              <span className="ft-pill"><Eye size={13} /> Preview</span>
              <span className="ft-pill ft-pill-go">Publish</span>
            </div>
            <div className="ft-window-body">
              <img src="/template-shots/sm/the-birthday-experience-720.webp" alt="" width={720} height={450} decoding="async" fetchPriority="high" />
              <div className="ft-selection"><i className="ft-h h-tl" /><i className="ft-h h-tr" /><i className="ft-h h-bl" /><i className="ft-h h-br" /><span>Heading</span></div>
            </div>
          </div>
          <div className="ft-float ft-float-a"><Palette size={15} /> Colour &amp; font</div>
          <div className="ft-float ft-float-b"><Link2 size={15} /> One shareable link</div>
        </div>
      }
    >
      <JsonLd data={ld} />

      <section className="global-wrap ft-intro">
        <h2>Choose a starting point. Keep the personal details yours.</h2>
        <p>Wishly is a no-code website maker for individual occasions and messages. The design gives you a structure to work with; your words, photos and choices make the result specific to its recipient.</p>
      </section>

      <section className="global-wrap ft-bento-wrap">
        <div className="ft-bento">
          {features.map(([key, title, description]) => {
            const Icon = icons[key] || MousePointerClick;
            return (
              <article key={key} className={`ft-tile ${sizes[key] || ''}`}>
                <div className="ft-tile-copy">
                  <span className="ft-ic"><Icon size={20} strokeWidth={1.75} aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <Visual id={key} />
              </article>
            );
          })}
        </div>
      </section>

      <section className="global-wrap ft-flow">
        <div className="ft-flow-head">
          <h2>From a first idea to a live link</h2>
          <p>The account, editor, dashboard and publishing flow live on the main Wishly website. This international site helps you compare designs and plan what you want to make before you continue there.</p>
          <a href={appLink('/signup')} className="global-button global-button-primary">Start creating <ArrowUpRight size={17} /></a>
        </div>
        <ol className="ft-steps">
          {workflow.map((item, i) => (
            <li key={item.title}>
              <span className="ft-step-n" aria-hidden="true">{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <ul>{item.points.map((point) => <li key={point}><Check size={15} aria-hidden="true" />{point}</li>)}</ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="global-wrap ft-faq">
        <div className="ft-faq-head">
          <h2>Questions about the tools</h2>
          <p>These answers explain what is shared across the platform and what depends on the individual template.</p>
          <Link className="global-underlined-link" href="/faq/">All questions ↗</Link>
        </div>
        <div className="ft-faq-list">{faqs.slice(3, 9).map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </section>
      <JsonLd data={faqLd(faqs.slice(3, 9))} />
    </PageShell>
  );
}
