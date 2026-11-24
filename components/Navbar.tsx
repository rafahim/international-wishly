'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { appLink } from '@/lib/site';

const links = [
  ['/templates/', 'Templates', false],
  ['/guides/', 'Ideas & guides', false],
  ['/how-to-make-website/', 'How it works', false],
  ['/features', 'Features', true],
  ['/custom-template', 'Custom template', true],
  ['/about', 'About', true],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';
  const wrap = useRef<HTMLElement>(null);
  useEffect(() => {
    const close = (event: PointerEvent) => { if (!wrap.current?.contains(event.target as Node)) setOpen(false); };
    const esc = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('pointerdown', close);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('pointerdown', close); document.removeEventListener('keydown', esc); };
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className="premium-nav" ref={wrap}>
      <div className="premium-container premium-nav-inner">
        <Link href="/" className="brand-lockup" aria-label="Wishly home">
          <img className="brand-mark" src="/icon-192.webp" alt="" width="38" height="38" />
          <span><b>Wishly</b><small>Create moments</small></span>
        </Link>
        <nav className="premium-nav-links" aria-label="Main navigation">
          {links.map(([href, label, external]) => {
            const active = !external && pathname.startsWith(href);
            return external
              ? <a key={href} href={appLink(href)}>{label}</a>
              : <Link href={href} key={href} className={active ? 'active' : undefined}>{label}</Link>;
          })}
        </nav>
        <div className="premium-nav-actions">
          <div className="nav-cta-wrap">
            <a href={appLink('/signup')} className="nav-cta">Try it free <ArrowUpRight size={15} /></a>
          </div>
          <a href={appLink('/login')} className="wp-trigger is-guest global-login-pill">
            <span className="wp-av"> <span style={{fontSize: '13px'}}>W</span> </span><span className="wp-label">Login</span>
          </a>
          <button type="button" className="global-mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(v => !v)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && <div className="global-mobile-panel">
          {links.map(([href, label, external]) => external
            ? <a href={appLink(href)} key={href}>{label}<ArrowUpRight size={15}/></a>
            : <Link href={href} key={href}>{label}<ArrowUpRight size={15}/></Link>)}
          <div className="global-mobile-account"><a href={appLink('/login')}>Login</a><a href={appLink('/signup')}>Try it free <ArrowUpRight size={15}/></a></div>
        </div>}
      </div>
    </header>
  );
}
