import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { appLink } from '@/lib/site';

const explore = [
  ['Templates', '/templates/'],
  ['Ideas & guides', '/guides/'],
  ['How it works', '/how-to-make-website/'],
  ['Features', '/features/'],
  ['FAQ', '/faq/'],
  ['About', '/about/'],
] as const;

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="sf global-footer">
      <div className="premium-container sf-inner global-footer-inner">
        <div className="global-footer-top">
          <div className="sf-brand global-footer-brand">
            <Link href="/" className="sf-logo global-footer-logo" aria-label="Wishly home">
              <span className="global-brand-mark">w<span>✳</span></span>
              <span><b>Wishly</b><small>Personal pages, made easy</small></span>
            </Link>
            <p className="sf-tag">A small place online for the words, memories and occasions you want to make personal.</p>
          </div>
          <nav className="sf-col global-footer-col" aria-label="Explore">
            <h3>Explore</h3>
            {explore.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
          <nav className="sf-col global-footer-col" aria-label="Your Wishly account">
            <h3>Your Wishly</h3>
            <a href={appLink('/login')}>Log in <ArrowUpRight size={12} /></a>
            <a href={appLink('/signup')}>Create an account <ArrowUpRight size={12} /></a>
            <a href={appLink('/contact')}>Contact <ArrowUpRight size={12} /></a>
            <a href={appLink('/privacy-policy')}>Privacy policy <ArrowUpRight size={12} /></a>
          </nav>
          <div className="sf-cta global-footer-cta">
            <p className="global-overline">A MOMENT, MADE PERSONAL</p>
            <h3>Have someone in mind?</h3>
            <p>Pick the occasion and start with a design that feels right.</p>
            <a className="sf-btn" href={appLink('/signup')}>Make a page <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="sf-bottom global-footer-bottom">
          <span>© {year} Wishly. An independent international guide and template showcase.</span>
          <span>Accounts, editing and published pages live on <a href={appLink('/')}>wishly.bd</a>.</span>
        </div>
      </div>
    </footer>
  );
}
