import Link from 'next/link';
import './site-footer.css';
import { appLink } from '@/lib/site';

const explore = [
  ['Templates', '/templates/'], ['Ideas & guides', '/guides/'], ['How it works', '/how-to-make-website/'],
  ['Features', '/features'], ['Custom template', '/custom-template'],
] as const;
const company = [['About', '/about'], ['Contact', '/contact'], ['Privacy Policy', '/privacy-policy'], ['Terms & Conditions', '/terms-and-conditions']] as const;
export default function Footer() {
  const year = new Date().getFullYear();
  return <footer className="sf"><div className="sf-glow" aria-hidden="true"/><div className="premium-container sf-inner">
    <div className="sf-top"><div className="sf-brand"><Link href="/" className="sf-logo"><img className="sf-mark" src="/icon-192.webp" alt="" width="38" height="38"/><span><b>Wishly</b><small>Create moments</small></span></Link><p className="sf-tag">Turn meaningful moments into personal pages worth remembering.</p></div>
    <div className="sf-columns"><div><h3>Explore</h3>{explore.map(([label,path]) => path.startsWith('/features') || path.startsWith('/custom') ? <a key={path} href={appLink(path)}>{label}</a> : <Link key={path} href={path}>{label}</Link>)}</div>
    <div><h3>Company</h3>{company.map(([label,path]) => <a key={path} href={appLink(path)}>{label}</a>)}</div></div></div>
    <div className="sf-bottom"><span>© {year} Wishly. All rights reserved.</span><span>International discovery · Product and account hosted at wishly.bd</span></div>
  </div></footer>;
}
