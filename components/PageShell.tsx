import Navbar from './Navbar';
import Footer from './Footer';
import JsonLd from './JsonLd';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { appLink } from '@/lib/site';
import { crumbs } from '@/lib/seo';

/** Shared frame for editorial and informational pages on the international site. */
export default function PageShell({ kicker, title, lead, path, name, children, cta = true, showCrumbs = true }: { kicker: string; title: React.ReactNode; lead: string; path: string; name: string; children: React.ReactNode; cta?: boolean; showCrumbs?: boolean }) {
  return (
    <main className="premium-site international-site">
      {showCrumbs && <JsonLd data={crumbs([['Home', '/'], [name, path]])} />}
      <Navbar />
      <section className="global-page-hero global-wrap">
        <p className="global-overline">{kicker}</p>
        <h1>{title}</h1>
        <p>{lead}</p>
      </section>
      {children}
      {cta && <section className="global-wrap global-page-cta">
        <div><p className="global-overline">WHEN YOU’RE READY</p><h2>Give the moment its own page.</h2><p>Choose a design and take it into the Wishly editor.</p></div>
        <a href={appLink('/signup')} className="global-button global-button-primary">Start creating <ArrowUpRight size={17} /></a>
        <p><Link className="global-underlined-link" href="/templates/">Browse the designs first <span>↗</span></Link></p>
      </section>}
      <Footer />
    </main>
  );
}
