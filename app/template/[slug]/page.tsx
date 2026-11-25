import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Info, Play } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TemplateCard from '@/components/TemplateCard';
import JsonLd from '@/components/JsonLd';
import { abs, demoLink, startTemplateLink } from '@/lib/site';
import { crumbs, pageMeta, templateTitle, faqLd } from '@/lib/seo';
import { OCCASION_COPY } from '@/lib/content';
import { TEMPLATE_DETAILS } from '@/lib/template-details';
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
  const phrase = `${t.name} ${label.toLowerCase()} website template`;
  const languageNote = t.language === 'Bengali' ? 'This design uses Bengali.' : 'This design uses English.';
  const detail = TEMPLATE_DETAILS[slug];
  const rawDescription = detail ? `${t.description} Best for: ${detail.bestFor}` : `${t.description} ${languageNote} Preview the ${label.toLowerCase()} design and check its editing options before creating your page.`;
  const description = rawDescription.length <= 158 ? rawDescription : `${rawDescription.slice(0, 155).replace(/\s+\S*$/, '')}…`;
  return pageMeta({
    title: templateTitle(t.name, label),
    description,
    path: `/template/${slug}/`,
    image: coverSrc(slug),
    keywords: [phrase, `${label.toLowerCase()} website design`, t.name, t.language === 'Bengali' ? 'Bengali website template' : 'English website template'],
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
  const detail = TEMPLATE_DETAILS[t.slug];
  const related = templatesFor(t.category).filter((x) => x.slug !== t.slug).slice(0, 3);
  const detailFaqs: [string, string][] = [
    [`Who is the ${t.name} template designed for?`, `${detail?.bestFor || `This design is listed in the ${label.toLowerCase()} collection and may suit ${copy?.audience || 'someone you want to celebrate or contact'}.`} ${t.description}`],
    [`What language is the ${t.name} template in?`, `The template is labelled ${t.language}. Check the live preview before choosing it, especially when the recipient prefers a particular language.`],
    [`What should I prepare before editing ${t.name}?`, detail?.prepare || 'Gather the names, photos and message you want to use, then check the live preview to see which fields this design supports.'],
  ];
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: abs(`/template/${t.slug}/`),
    name: `${t.name}: ${label} website template`,
    description: detail ? `${t.description} ${detail.bestFor}` : t.description,
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
            <span>Template preview</span>
          </div>
          <p className="td-desc">{t.description}</p>
          {detail ? <><p className="td-intro"><strong>Best for:</strong> {detail.bestFor}</p><p className="td-intro"><strong>The feel:</strong> {detail.feel}</p></> : <p className="td-intro">Check the preview, language label and supported sections to see whether this {label.toLowerCase()} design suits the person or event you have in mind.</p>}
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
        <div className="section-heading"><p className="section-kicker">ABOUT THIS DESIGN</p><h2>{t.name}: {label} website template</h2><p>{t.description} Its language is labelled {t.language}; use the live preview to check the exact visitor experience.</p></div>
        <div className="td-step-grid">{custom.map(([h, d], i) => <article key={h} className="td-step"><b>{String(i + 1).padStart(2, '0')}</b><h3>{h}</h3><p>{d}</p></article>)}</div>
        {copy && <div className="global-template-note"><p className="global-overline">A NOTE FOR THIS OCCASION</p><h2>{copy.tips[1][0]}</h2><p>{copy.tips[1][1]}</p><p>{copy.closing}</p></div>}
        <div className="global-template-note"><p className="global-overline">BEFORE YOU USE THIS DESIGN</p><h2>{detail ? `What to prepare for ${t.name}` : 'Preview the exact experience'}</h2>{detail && <p>{detail.prepare}</p>}<p>Template controls are not identical. Check whether this design supports the text fields, photographs, music, video or interactions you want to use. Then test the mobile preview and confirm every name, date and link before publishing.</p><p>The account and editor are on the main Wishly website. The “Use template” action takes you there to create or manage your page.</p></div>
      </section>

      <section className="premium-container global-template-faq"><div className="section-heading"><p className="section-kicker">TEMPLATE QUESTIONS</p><h2>Using the {t.name} design</h2></div><div className="global-guide-faq-list">{detailFaqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div><JsonLd data={faqLd(detailFaqs)} /></section>

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
