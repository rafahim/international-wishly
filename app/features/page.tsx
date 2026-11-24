import { Clock3, Images, LayoutDashboard, LayoutTemplate, Link2, Mail, MousePointerClick, Palette, PlayCircle, Smartphone, Undo2, type LucideIcon } from 'lucide-react';
import PageShell from '@/components/PageShell';
import JsonLd from '@/components/JsonLd';
import { pageMeta, faqLd } from '@/lib/seo';
import { features, faqs } from '@/lib/content';

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

const workflow = [
  {
    number: '01 / CHOOSE',
    title: 'Start with a design that fits the moment',
    body: 'The template provides the page structure and visual direction. Browse by occasion, check the language label and open the preview before deciding. A playful birthday design, a quiet digital letter and an event invitation each have different needs.',
    points: ['Compare the opening screen and overall tone.', 'Check the template’s supported editing options.', 'Choose a design the person receiving it will enjoy.'],
  },
  {
    number: '02 / PERSONALIZE',
    title: 'Replace sample details with your own',
    body: 'Use the visual editor on the main Wishly website to select supported text and media in the preview. Add real memories and write in your own voice. Where available, design settings let you adjust the selected template’s palette and font.',
    points: ['Check names, spelling, dates and button destinations.', 'Use photographs and media you have permission to share.', 'Keep the main message clear on a phone screen.'],
  },
  {
    number: '03 / PREVIEW & SHARE',
    title: 'Test the visitor experience before sending',
    body: 'Preview mode helps you experience the page without the editing controls. Save your draft while you work, publish when it is ready and open the live URL separately to check what the recipient will see.',
    points: ['Test buttons, reveals and other template-specific interactions.', 'Check image crops, audio behaviour and responsive layout.', 'Share the published page as a link or a QR code where available.'],
  },
];

export default function Page() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Personal Website Features: Editing, Media and Sharing',
    description: 'An overview of the editing and publishing tools available in Wishly templates.',
    inLanguage: 'en',
  };
  return (
    <PageShell kicker="THE WISHLY TOOLKIT" title="The details that turn a template into your page." lead="A personal website is made from more than a theme. Explore the editing, media and publishing options that may be available in a Wishly design—and learn why the exact controls can differ from one template to another." path="/features/" name="Features">
      <JsonLd data={ld} />
      <section className="global-wrap global-features-intro">
        <div className="global-section-intro">
          <p className="global-overline">BUILT AROUND THE PERSON, NOT THE SOFTWARE</p>
          <h2>Choose a starting point. Keep the personal details yours.</h2>
          <p>Wishly is a no-code website maker for individual occasions and messages. The design gives you a structure to work with; your words, photos and choices make the result specific to its recipient.</p>
        </div>
      </section>
      <section className="feature-section">
        <div className="premium-container">
          <div className="hp-feat">
            {features.map(([key, title, description], index) => {
              const Icon = icons[key] || MousePointerClick;
              return <article key={key}>
                <div className="ic"><Icon size={20} strokeWidth={1.75} aria-hidden="true" /></div>
                <p className="global-overline">{String(index + 1).padStart(2, '0')}</p>
                <h2>{title}</h2>
                <p>{description}</p>
              </article>;
            })}
          </div>
        </div>
      </section>
      <section className="global-wrap global-feature-workflow">
        <div className="global-section-intro">
          <p className="global-overline">FROM A FIRST IDEA TO A LIVE LINK</p>
          <h2>How the creation workflow fits together</h2>
          <p>The account, editor, dashboard and publishing flow live on the main Wishly website. This international site helps you compare designs and plan what you want to make before you continue there.</p>
        </div>
        <div className="global-feature-workflow-grid">
          {workflow.map((item) => <article key={item.number}>
            <p className="global-overline">{item.number}</p>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
          </article>)}
        </div>
      </section>
      <section className="global-wrap global-feature-faq">
        <div className="global-section-intro"><p className="global-overline">BEFORE YOU CHOOSE</p><h2>Questions about the tools</h2><p>These answers explain what is shared across the platform and what depends on the individual template.</p></div>
        <div className="global-guide-faq-list">{faqs.slice(3, 9).map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </section>
      <JsonLd data={faqLd(faqs.slice(3, 9))} />
    </PageShell>
  );
}
