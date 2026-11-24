import Link from 'next/link';
import { Info } from 'lucide-react';
import { COVER_SIZES, coverSet, coverSrc, occasionLabel, type Template } from '@/lib/templates';
import { demoLink, startTemplateLink } from '@/lib/site';

export default function TemplateCard({ template: t, priority = false }: { template: Template; priority?: boolean }) {
  const info = `/template/${t.slug}/`;
  return (
    <article className="tc-card" style={{ ['--tc-accent' as string]: t.accent }}>
      <Link href={info} className="tc-card-media" aria-label={`${t.name} template details`}>
        <div className="tc-thumb">
          <div className="tc-thumb-fallback">
            <img
              className="tc-thumb-shot"
              src={coverSrc(t.slug)}
              srcSet={coverSet(t.slug)}
              sizes={COVER_SIZES}
              alt={`${t.name} template preview`}
              width={960}
              height={600}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
        </div>
        <span className="tc-tag"><i aria-hidden>{t.emoji}</i>{occasionLabel(t.category)}</span>
        {t.premium && <span className="tc-badge tc-badge-premium">👑 Premium</span>}
        {t.language === 'Bengali' && <span className="tc-badge tc-badge-new">বাংলা</span>}
      </Link>
      <div className="tc-card-body">
        <h2>{t.name}</h2>
        <p>{t.description}</p>
        <div className="tc-card-actions">
          <a className="premium-button premium-button-sm" href={startTemplateLink(t.slug)} rel="noopener">Use template <span>→</span></a>
          {!t.demoHidden && <a className="premium-button premium-button-ghost premium-button-sm" href={demoLink(t.slug)} rel="noopener">Live demo <span>↗</span></a>}
          <Link className="premium-button premium-button-ghost premium-button-sm tc-info-button" href={info} aria-label={`View details for ${t.name}`} title="View details"><Info size={16} aria-hidden="true" /></Link>
        </div>
      </div>
    </article>
  );
}
