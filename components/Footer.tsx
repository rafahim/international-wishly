import Link from 'next/link';
import './site-footer.css';
import { appLink } from '@/lib/site';

// The column layout, brand lockup, CTA panel and footer meta mirror Wishly.bd.
// Only URLs that exist on this international site stay local; missing product
// and company destinations continue to the main Wishly application.
const explore = [
  ['Templates', '/templates', 'local'],
  ['Features', '/features', 'local'],
  ['Custom template', '/custom-template', 'app'],
  ['FAQ', '/faq', 'local'],
  ['Insights', '/insights', 'app'],
] as const;
const company = [
  ['About', '/about', 'local'],
  ['Contact', '/contact', 'app'],
  ['Privacy Policy', '/privacy-policy', 'app'],
  ['Terms & Conditions', '/terms-and-conditions', 'app'],
] as const;

function FooterLink({ label, href, kind }: { label: string; href: string; kind: 'local' | 'app' }) {
  return kind === 'app'
    ? <a href={appLink(href)}>{label}</a>
    : <Link href={`${href}/`}>{label}</Link>;
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="sf">
      <div className="sf-glow" aria-hidden="true" />
      <div className="premium-container sf-inner">
        <div className="sf-top">
          <div className="sf-brand">
            <Link href="/" className="sf-logo" aria-label="Wishly home">
              <img className="sf-mark" src="/icon-192.webp" alt="" width={38} height={38} />
              <span><b>Wishly</b><small>Create moments</small></span>
            </Link>
            <p className="sf-tag">Turn birthdays, proposals and surprises into a website they’ll open twice.</p>
            <div className="sf-badges">
              <a className="sf-ig" href={appLink('/social')} aria-label="Follow Wishly on social media">
                <span className="sf-ig-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="2.6" /><circle cx="6" cy="12" r="2.6" /><circle cx="18" cy="19" r="2.6" />
                    <path d="M8.3 10.8l7.4-4.4M8.3 13.2l7.4 4.4" />
                  </svg>
                </span>
                <span className="sf-ig-text"><b>Follow us</b></span>
              </a>
            </div>
          </div>

          <nav className="sf-col" aria-label="Explore">
            <h3>Explore</h3>
            {explore.map(([label, href, kind]) => <FooterLink key={href} label={label} href={href} kind={kind} />)}
          </nav>

          <nav className="sf-col" aria-label="Company">
            <h3>Company</h3>
            {company.map(([label, href, kind]) => <FooterLink key={href} label={label} href={href} kind={kind} />)}
            <a href={appLink('/donate')} className="sf-donate-link">Donate ♥</a>
          </nav>

          <div className="sf-cta">
            <h3>Ready to surprise someone?</h3>
            <p>Pick a template and finish in minutes.</p>
            <a className="sf-btn" href={appLink('/signup')}>Start creating <span>→</span></a>
          </div>
        </div>

        <div className="sf-bottom">
          <span className="sf-copy">© {year} <a href={appLink('/')} aria-label="Visit the main Wishly website" title="Visit wishly.bd">Wishly</a>. All rights reserved.</span>
          <span className="sf-made">Made with <i aria-hidden="true">♥</i> for the moments that matter</span>
        </div>

      </div>
    </footer>
  );
}
