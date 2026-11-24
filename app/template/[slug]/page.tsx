import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Info, Play } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TemplateCard from '@/components/TemplateCard';
import JsonLd from '@/components/JsonLd';
import { abs, demoLink, startTemplateLink } from '@/lib/site';
import { crumbs, pageMeta } from '@/lib/seo';
import { OCCASION_COPY } from '@/lib/content';
import { COVER_SIZES, bySlug, coverSet, coverSrc, occasionLabel, templates, templatesFor } from '@/lib/templates';

export const dynamicParams = false;
export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = bySlug(slug);
  if (!t) return {};
  const label = occasionLabel(t.category);
  return pageMeta({
    title: `${t.name}: A Personal ${label} Page Design`,
    description: `${t.name} is a ${label.toLowerCase()} design in Wishly's personal website collection. See who it suits, what to personalise and how to preview it before sharing your own page.`.slice(0, 300),
    path: `/template/${slug}/`,
    image: coverSrc(slug),
  });
}

const custom: [string, string][] = [
  ['Words and names', 'Change every heading, message and button label right on the page.'],
  ['Photos and video', 'Replace the pictures with your own memories, and add a clip if the template supports it.'],
  ['Music', 'Add a song where the selected design supports music.'],
  ['Your own link', 'Pick a link name, publish, and share it on WhatsApp, Messenger or as a QR code.'],
];

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = bySlug(slug);
  if (!t) notFound();
  const label = occasionLabel(t.category);
  const copy = OCCASION_COPY[t.category];
  const related = templatesFor(t.category).filter((x) => x.slug !== t.slug).slice(0, 3);
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: abs(`/template/${t.slug}/`),
    name: `${t.name}: ${label} website template`,
    description: t.description,
    image: `${abs('/')}`.replace(/\/$/, '') + coverSrc(t.slug),
    inLanguage: 'en',
    isPartOf: { '@id': `${abs('/')}#website` },
  };
  return (
    <main className="premium-site international-site">
      <JsonLd data={ld} />
      <JsonLd data={crumbs([['Home', '/'], ['Templates', '/templates/'], [label, `/templates/${t.category}/`], [t.name, `/template/${t.slug}/`]])} />
      <Navbar />
      <section className="premium-container td-hero" style={{ ['--tc-accent' as string]: t.accent }}>
        <div className="td-copy">
          <p className="section-kicker"><Info size={13} aria-hidden="true" /> TEMPLATE DETAILS</p>
          <h1>{t.emoji} {t.name}</h1>
          <div className="td-badges">
            <span>{label}</span>
            {t.premium && <span className="td-premium-badge">👑 Premium</span>}
            <span>{t.language}</span>
            <span>Photos • Music • Share link</span>
          </div>
          <p className="td-desc">{t.description}</p>
          {copy && <p className="td-intro">A {label.toLowerCase()} page for {copy.audience}. {copy.tips[0][1]}</p>}
          <div className="td-actions">
            {!t.demoHidden && <a className="premium-button" href={demoLink(t.slug)} rel="noopener"><Play size={15} aria-hidden="true" /> Start live demo</a>}
            <a className="premium-button premium-button-ghost" href={startTemplateLink(t.slug)} rel="noopener">Use template <span>→</span></a>
          </div>
          <Link className="td-howto" href={`/templates/${t.category}/`}>More {label.toLowerCase()} templates →</Link>
        </div>
        <a className="td-cover" href={t.demoHidden ? startTemplateLink(t.slug) : demoLink(t.slug)} rel="noopener" aria-label={`Open the ${t.name} demo`}>
          <img src={coverSrc(t.slug)} srcSet={coverSet(t.slug)} sizes={COVER_SIZES.replace('400px', '560px')} alt={`${t.name} template preview`} width={960} height={600} decoding="async" />
          {!t.demoHidden && <span className="td-play"><Play size={22} aria-hidden="true" /></span>}
        </a>
      </section>

      <section className="premium-container td-steps" aria-label={`What you can customize in ${t.name}`}>
        <div className="section-heading"><p className="section-kicker">WHAT YOU CAN CUSTOMIZE</p><h2>Make {t.name} yours</h2></div>
        <div className="td-step-grid">{custom.map(([h, d], i) => <article key={h} className="td-step"><b>{String(i + 1).padStart(2, '0')}</b><h3>{h}</h3><p>{d}</p></article>)}</div>
        {copy && <div className="global-template-note"><p className="global-overline">A NOTE FOR THIS OCCASION</p><h2>{copy.tips[1][0]}</h2><p>{copy.tips[1][1]}</p><p>{copy.closing}</p></div>}
      </section>

      {related.length > 0 && (
        <section className="premium-container showcase-section">
          <div className="section-heading-row"><div><p className="section-kicker">MORE LIKE THIS</p><h2>Other {label.toLowerCase()} templates</h2></div><Link className="text-link" href={`/templates/${t.category}/`}>See all →</Link></div>
          <div className="tc-grid">{related.map((r) => <TemplateCard key={r.slug} template={r} />)}</div>
        </section>
      )}
      <Footer />
    </main>
  );
}
