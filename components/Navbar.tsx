'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, Sparkles, UserRound, X } from 'lucide-react';
import { appLink } from '@/lib/site';

const links = [
  ['/templates/', 'Templates'],
  ['/guides/', 'Ideas & guides'],
  ['/how-to-make-website/', 'How it works'],
  ['/about/', 'About'],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';
  const wrap = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOnOutside = (event: PointerEvent) => {
      if (!wrap.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('pointerdown', closeOnOutside);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutside);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="premium-nav global-nav" ref={wrap}>
      <div className="premium-container premium-nav-inner">
        <Link href="/" className="brand-lockup global-brand" aria-label="Wishly home">
          <span className="global-brand-mark">w<span>✳</span></span>
          <span className="global-brand-copy"><b>Wishly</b><small>Personal pages, made easy</small></span>
        </Link>

        <nav className="premium-nav-links global-nav-links" aria-label="Main navigation">
          {links.map(([href, label]) => {
            const active = href === '/templates/' ? pathname.startsWith('/templates') || pathname.startsWith('/template/') : pathname.startsWith(href);
            return <Link href={href} key={href} className={active ? 'active' : undefined} aria-current={active ? 'page' : undefined}>{label}</Link>;
          })}
        </nav>

        <div className="premium-nav-actions global-nav-actions">
          <a href={appLink('/login')} className="global-login-link">Log in</a>
          <a href={appLink('/signup')} className="global-nav-cta">Create a page <ArrowUpRight size={15} /></a>
          <button type="button" className="global-mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && <div className="global-mobile-panel">
          <div className="global-mobile-panel-top"><span><Sparkles size={16} /> Explore Wishly</span><button type="button" onClick={() => setOpen(false)} aria-label="Close menu"><X size={18} /></button></div>
          {links.map(([href, label]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={15} /></Link>)}
          <div className="global-mobile-account"><a href={appLink('/login')}><UserRound size={16} /> Log in</a><a href={appLink('/signup')}>Create a page <ArrowUpRight size={15} /></a></div>
          <p>Your account and editor are securely hosted on wishly.bd.</p>
        </div>}
      </div>
    </header>
  );
}
