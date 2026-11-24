'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import TemplateCard from './TemplateCard';
import type { Template } from '@/lib/templates';

type Occ = { key: string; label: string; emoji: string; count: number };

/**
 * Search + occasion filter. Every card is rendered into the static HTML, so search engines see all
 * templates; the filter only hides cards in the browser.
 * On an occasion page (activeCategory set) the occasion chips are links to the other occasion pages.
 */
export default function TemplateBrowser({
  templates,
  occasions,
  total,
  activeCategory,
  eyebrow,
  heading,
  subheading,
}: {
  templates: Template[];
  occasions: Occ[];
  total: number;
  activeCategory?: string;
  eyebrow: string;
  heading: string;
  subheading: string;
}) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<string>('all');
  const [picker, setPicker] = useState(false);
  const q = query.trim().toLowerCase();

  useEffect(() => {
    if (!picker) return;
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') setPicker(false); };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', key);
    return () => { document.body.style.overflow = prev; document.removeEventListener('keydown', key); };
  }, [picker]);

  const shown = useMemo(() => templates.filter((t) => {
    const cats = [t.category, ...t.alsoCategories];
    if (filter === 'bengali' && t.language !== 'Bengali') return false;
    if (filter === 'english' && t.language !== 'English') return false;
    if (filter !== 'all' && filter !== 'bengali' && filter !== 'english' && !cats.includes(filter)) return false;
    if (!q) return true;
    return [t.name, t.description, t.slug, ...cats].some((v) => v.toLowerCase().includes(q));
  }), [templates, filter, q]);
  const visible = new Set(shown.map((t) => t.slug));

  const key = activeCategory ?? filter;
  const active = occasions.find((o) => o.key === key);
  const bengali = templates.filter((t) => t.language === 'Bengali').length;

  const occ = (o: Occ, cls: string) => {
    const on = key === o.key;
    const inner = (<><span className="tc-opt-ic" aria-hidden>{o.emoji}</span><span className="tc-opt-name">{o.label}</span><b>{o.count}</b></>);
    const full = `${cls}${on ? ' is-active' : ''}`;
    if (activeCategory) return <Link key={o.key} href={`/templates/${o.key}/`} className={full} aria-current={on ? 'true' : undefined}>{inner}</Link>;
    return <button key={o.key} type="button" className={full} aria-pressed={on} onClick={() => { setFilter(on ? 'all' : o.key); setPicker(false); }}>{inner}</button>;
  };
  const chip = (k: string, icon: string, label: string, count: number) => {
    const on = key === k;
    const cls = `tc-chip${on ? ' is-active' : ''}`;
    const inner = (<><span aria-hidden>{icon}</span> {label} <b>{count}</b></>);
    if (activeCategory) return k === 'all' ? <Link key={k} href="/templates/" className={cls}>{inner}</Link> : null;
    return <button key={k} type="button" className={cls} aria-pressed={on} onClick={() => setFilter(k)}>{inner}</button>;
  };

  return (
    <section className="template-catalog-page tc-page">
      <div className="premium-container tc-hero">
        <p className="section-kicker">{eyebrow}</p>
        <h1>{heading}</h1>
        <p>{subheading}</p>
      </div>

      <div className="premium-container tc-toolbar">
        <div className="template-search-wrap tc-search">
          <span className="template-search-icon">⌕</span>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search templates…" aria-label="Search templates" />
          {query && <button type="button" onClick={() => setQuery('')} aria-label="Clear search">×</button>}
        </div>
        <div className="tc-fbar">
          <div className="tc-filters-shell tc-fslide">
            <div className="tc-filters" role="group" aria-label="Collections">
              {chip('all', '✦', 'All', total)}
              {chip('english', 'EN', 'English', templates.filter((t) => t.language === 'English').length)}
              {chip('bengali', 'বাংলা', 'Bengali', bengali)}
            </div>
          </div>
        </div>
        <div className="tc-pills" role="group" aria-label="Occasions">{occasions.map((o) => occ(o, 'tc-pill'))}</div>
        <button type="button" className={`tc-mbar${active ? ' is-active' : ''}`} aria-haspopup="dialog" aria-expanded={picker} onClick={() => setPicker(true)}>
          <span className="tc-mbar-ic" aria-hidden>{active ? active.emoji : '✦'}</span>
          <span className="tc-mbar-label">{active ? active.label : 'All occasions'}</span>
          <span className="tc-mbar-count">{occasions.length} occasions</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6" /></svg>
        </button>
      </div>

      <div className="premium-container">
        <div className="tc-main">
          <p className="tc-count" aria-live="polite">{shown.length} template{shown.length === 1 ? '' : 's'}</p>
          <div className="tc-grid">
            {templates.map((t, i) => (
              <div key={t.slug} style={visible.has(t.slug) ? { display: 'contents' } : { display: 'none' }}>
                <TemplateCard template={t} priority={i < 6} />
              </div>
            ))}
          </div>
          {!shown.length && <div className="template-empty-state"><span>⌕</span><h2>No templates found</h2><p>Try a different name or pick another occasion.</p></div>}
        </div>
      </div>

      {picker && (
        <div className="tc-picker" role="dialog" aria-modal="true" aria-label="Choose an occasion">
          <div className="tc-picker-head"><h2>Occasions</h2><button type="button" onClick={() => setPicker(false)} aria-label="Close">×</button></div>
          <div className="tc-picker-body"><div className="tc-picker-grid">{occasions.map((o) => occ(o, 'tc-ptile'))}</div></div>
        </div>
      )}
    </section>
  );
}
