import Link from 'next/link';
import { ArrowUpRight, Eye, Image, Mail, Music2, Smartphone, Video } from 'lucide-react';
import PageShell from '@/components/PageShell';
import JsonLd from '@/components/JsonLd';
import TemplateCard from '@/components/TemplateCard';
import { pageMeta, crumbs } from '@/lib/seo';
import { SITE, appLink, abs } from '@/lib/site';
import { occasionList, templates } from '@/lib/templates';

export const metadata = pageMeta({
  title: 'About Wishly: Personal Website Maker',
  description: 'Meet Wishly, a website maker for birthdays, proposals, wedding invitations and personal messages. Learn how the international site connects to the main Wishly website at wishly.bd.',
  path: '/about/',
  keywords: ['about Wishly', 'personal website maker', 'digital gift website', 'birthday website creator', 'Wishly main website'],
});

const inside = [
  { icon: Image, title: 'Photos and galleries', text: 'Bring in photographs that give the page context and make a shared memory easier to recognise.' },
  { icon: Video, title: 'Video moments', text: 'Add a video in designs that provide a video field, so a greeting can include your own voice or a moving memory.' },
  { icon: Music2, title: 'Background music', text: 'Where a template supports audio, choose a soundtrack that belongs to the occasion. The page should still make sense with sound turned off.' },
  { icon: Mail, title: 'Letters and messages', text: 'Give a personal note room to unfold, whether the template uses a letter, message panel or another text-led section.' },
  { icon: Smartphone, title: 'A phone-friendly experience', text: 'Create and preview from a phone or computer, then check the published page on a small screen before sending it.' },
  { icon: Eye, title: 'Available activity information', text: 'The main Wishly account area includes website status and view information where available, so you can return to the pages you manage.' },
];

const values = [
  ['Simple by default', 'A ready-made design removes the need to start with a blank canvas or learn HTML and CSS.'],
  ['Personal before complicated', 'The recipient, the message and the memory should matter more than adding every available effect.'],
  ['A different design for a different moment', 'Birthday wishes, wedding details, apologies and letters need different tones. Templates give each experience its own structure.'],
  ['Made to travel by link', 'A published page can be shared in a message or email and opened in a browser, including by someone in another country.'],
];

export default function AboutPage() {
  const featured = ['the-birthday-experience', 'master', 'wedding-proposal', 'love-letter'].map((slug) => templates.find((template) => template.slug === slug)).filter((item): item is (typeof templates)[number] => Boolean(item));
  const aboutLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Wishly',
    url: abs('/about/'),
    description: 'The story and purpose behind Wishly’s international website and personal page templates.',
    mainEntity: { '@type': 'Organization', name: 'Wishly', url: 'https://wishly.bd/', sameAs: [...SITE.social, 'https://wishly.bd/'] },
    inLanguage: 'en',
  };

  return (
    <PageShell kicker="ABOUT WISHLY" title={<>A personal website maker<br /><em>for moments worth sharing.</em></>} lead="Wishly turns a birthday, proposal, wedding invitation, apology or memory into a personal web experience you can share with one link. Choose a starting design, make the details your own and give the message a place to unfold." path="/about/" name="About Wishly">
      <JsonLd data={aboutLd} />
      <JsonLd data={crumbs([['Home', '/'], ['About Wishly', '/about/']])} />

      <section className="global-wrap global-about-stats" aria-label="Wishly at a glance">
        <div><strong>{templates.length}</strong><span>ready-made designs</span></div>
        <div><strong>{occasionList.length}</strong><span>occasion collections</span></div>
        <div><strong>1 link</strong><span>to share a page</span></div>
        <div><strong>No code</strong><span>needed to get started</span></div>
      </section>

      <section className="global-wrap global-about-story">
        <div className="global-about-story-art">
          <div className="global-about-story-card"><span className="global-overline">A NOTE FOR SOMEONE</span><strong>Make the moment feel like theirs.</strong><span>Words · Photographs · Memories</span></div>
          <div className="global-about-story-mark" aria-hidden="true">✳</div>
        </div>
        <div className="global-about-story-copy">
          <p className="global-overline">WHY WISHLY EXISTS</p>
          <h2>We make the technical part feel smaller, <em>so the message can mean more.</em></h2>
          <p>Some things are difficult to fit into a single chat bubble: a birthday memory, a proposal, a note of gratitude or the details of a celebration. A personal page gives those words a beginning and an ending. It can hold photographs, introduce a letter or guide someone through a small reveal.</p>
          <p>Wishly is built for people who want a considered result without having to design and code a website from scratch. The templates provide the structure; the personal details come from the person making the page.</p>
        </div>
      </section>

      <section className="global-wrap global-about-how">
        <div className="global-section-intro"><p className="global-overline">HOW THE EXPERIENCE WORKS</p><h2>Pick a design. Personalise it. Share one link.</h2><p>The main Wishly Builder handles account access, editing and publishing. This international site helps you discover the right starting point and prepare your ideas.</p></div>
        <ol>
          <li><span>01</span><div><h3>Choose a template</h3><p>Start with a birthday, proposal, wedding, apology, letter or another occasion. Preview the design and check its language and available options before choosing.</p></div></li>
          <li><span>02</span><div><h3>Make it yours</h3><p>Use the visual editor to change supported text and media. Add photographs, music or video only where the selected template provides those controls.</p></div></li>
          <li><span>03</span><div><h3>Preview and publish</h3><p>Check the page as a visitor, confirm every detail and publish when it is ready. Share the link through the channel your recipient uses.</p></div></li>
        </ol>
      </section>

      <section className="global-about-inside">
        <div className="global-wrap">
          <div className="global-section-intro"><p className="global-overline">WHAT A PAGE CAN HOLD</p><h2>Built around the details that make it personal.</h2><p>Not every template includes every feature. The preview and template details show what you can edit in that specific design.</p></div>
          <div className="global-about-inside-grid">{inside.map(({ icon: Icon, title, text }) => <article key={title}><span><Icon size={20} /></span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="global-wrap global-about-values">
        <div className="global-section-intro"><p className="global-overline">WHAT GUIDES THE WORK</p><h2>A better page starts with a clear reason.</h2></div>
        <div>{values.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="global-wrap global-about-main-site">
        <div><p className="global-overline">THE MAIN WISHLY WEBSITE</p><h2>Wishly’s main product website is <a href={appLink('/')}>wishly.bd</a>.</h2><p>Wishly is built in Bangladesh, while its shareable personal pages can be opened by recipients in different countries through a web link. This international site is an English-first discovery and guide experience for people exploring templates and ideas worldwide. English spelling and search wording can differ by region, so the guides use natural international phrasing rather than separate country pages with repeated copy. Template previews identify whether a design is English or Bengali. The account, visual editor, dashboard, checkout, publishing tools and live website management are handled on the main Wishly website at wishly.bd; availability of specific product and payment features is determined there.</p><p>When you choose “Try it free”, “Login” or a template action, you continue to the main Wishly app. Your account and creation workflow stay in one place.</p><a className="global-button global-button-primary" href={appLink('/')}>Visit the main Wishly website <ArrowUpRight size={17} /></a></div>
      </section>

      <section className="global-wrap global-about-showcase">
        <div className="global-heading-row"><div className="global-section-intro"><p className="global-overline">A FEW STARTING POINTS</p><h2>See what a personal page can look like.</h2><p>Open a design preview to understand its mood before you choose a template.</p></div><Link className="global-underlined-link" href="/templates/">Explore all templates <ArrowUpRight size={15} /></Link></div>
        <div className="tc-grid global-template-grid">{featured.map((template) => <TemplateCard key={template.slug} template={template} priority={false} />)}</div>
      </section>

      <section className="global-wrap global-about-cta">
        <div><p className="global-overline">MAKE THE NEXT MOMENT PERSONAL</p><h2>Start with a design. Finish with a page that sounds like you.</h2><p>Explore the occasion collections here, then continue to wishly.bd to create or manage your website.</p></div>
        <div className="global-about-cta-actions"><Link href="/templates/" className="global-button global-button-light">Browse designs <ArrowUpRight size={16} /></Link><a href={appLink('/signup')} className="global-button global-button-primary">Try it free <ArrowUpRight size={16} /></a></div>
      </section>
    </PageShell>
  );
}
