'use client';

import { useMemo, useState } from 'react';
import { Search, X, Plus } from 'lucide-react';

/** Searchable, numbered accordion used on the FAQ page. */
export default function FaqExplorer({ faqs }: { faqs: [string, string][] }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState<number | null>(0);

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs
      .map(([question, answer], index) => ({ question, answer, index }))
      .filter((f) => !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q));
  }, [faqs, query]);

  return (
    <div className="fx-wrap">
      <aside className="fx-side">
        <p className="global-overline">THE ANSWERS</p>
        <h2 id="faq-list-title">Frequently asked questions</h2>
        <p className="fx-side-lead">Search by keyword, or open any question to read the answer.</p>
        <label className="fx-search">
          <Search size={17} aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setOpen(null); }}
            placeholder="Search questions"
            aria-label="Search frequently asked questions"
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} aria-label="Clear search"><X size={15} aria-hidden="true" /></button>
          )}
        </label>
        <p className="fx-meta" aria-live="polite">
          <b>{String(items.length).padStart(2, '0')}</b> of {faqs.length} answers
        </p>
      </aside>

      <div className="fx-list">
        {items.length === 0 && (
          <div className="fx-empty">
            <b>No matching question</b>
            <p>Try a shorter keyword such as “template”, “share” or “edit”.</p>
          </div>
        )}
        {items.map(({ question, answer, index }) => {
          const isOpen = open === index;
          return (
            <div key={index} className={'fx-item' + (isOpen ? ' open' : '')}>
              <button
                type="button"
                className="fx-q"
                id={`fx-${index}-q`}
                aria-expanded={isOpen}
                aria-controls={`fx-${index}-a`}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span className="fx-num">{String(index + 1).padStart(2, '0')}</span>
                <span className="fx-qt">{question}</span>
                <span className="fx-tog" aria-hidden="true"><Plus size={16} /></span>
              </button>
              <div className="fx-a" id={`fx-${index}-a`} role="region" aria-labelledby={`fx-${index}-q`}>
                <div><p>{answer}</p></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
