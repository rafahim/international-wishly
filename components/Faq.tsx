'use client';

import { useState } from 'react';

export default function Faq({ faqs, heading = 'Good to know before you start.', lead = 'Short answers about links, languages, pricing and editing. Tap a question to open it.' }: { faqs: [string, string][]; heading?: string; lead?: string }) {
  const [open, setOpen] = useState<string | null>(faqs[0]?.[0] ?? null);
  return (
    <div className="fq-wrap">
      <aside className="fq-intro">
        <div>
          <p className="section-kicker">QUESTIONS</p>
          <h2>{heading}</h2>
          <p className="fq-lead">{lead}</p>
        </div>
      </aside>
      <div className="fq-main">
        <div className="fq-list">
          {faqs.map(([q, a], i) => {
            const isOpen = open === q;
            return (
              <div key={q} className={'fq-item' + (isOpen ? ' open' : '')}>
                <button type="button" className="fq-q" id={`fq-${i}-q`} aria-expanded={isOpen} aria-controls={`fq-${i}-a`} onClick={() => setOpen(isOpen ? null : q)}>
                  <span className="fq-qt">{q}</span>
                  <span className="fq-tog" aria-hidden="true" />
                </button>
                <div className="fq-a" id={`fq-${i}-a`} role="region" aria-labelledby={`fq-${i}-q`}><div><p>{a}</p></div></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
