'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookOpen, ChevronDown, ChevronRight, CircleHelp, Heart, Info,
  LayoutTemplate, Lightbulb, Mail, Palette, Sparkles, User, X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { appLink } from '@/lib/site';

// Keep the same public navigation order and visual structure as Wishly.bd.
// Product/account destinations are intentionally routed to the main Wishly app.
const links = [
  ['/templates', 'Templates', 'local'],
  ['/features', 'Features', 'local'],
  ['/custom-template', 'Custom template', 'app'],
  ['/about', 'About', 'local'],
  ['/how-to-make-website', 'How to make a website', 'local'],
] as const;

const exploreLinks = [
  ...links,
  ['/faq', 'FAQ', 'local'],
] as const;

const icons: Record<string, typeof Sparkles> = {
  '/templates': LayoutTemplate,
  '/features': Sparkles,
  '/custom-template': Palette,
  '/about': Info,
  '/how-to-make-website': Lightbulb,
  '/faq': CircleHelp,
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || '/';
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open || !window.matchMedia('(max-width: 900px)').matches) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className={`premium-nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="premium-container premium-nav-inner" ref={wrapRef}>
        <Link href="/" className="brand-lockup" onClick={close} aria-label="Wishly home">
          <img className="brand-mark" src="/icon-192.webp" alt="" width={38} height={38} />
          <span><b>Wishly</b><small>Create moments</small></span>
        </Link>

        <div className="premium-nav-links" aria-label="Main navigation">
          {links.map(([href, label, kind]) => {
            const active = kind === 'local' && (pathname === href || pathname.startsWith(`${href}/`));
            return kind === 'app'
              ? <a key={href} href={appLink(href)}>{label}</a>
              : <Link key={href} href={`${href}/`} className={active ? 'active' : undefined} aria-current={active ? 'page' : undefined}>{label}</Link>;
          })}
        </div>

        <div className="premium-nav-actions">
          <div className="nav-cta-wrap">
            <a href={appLink('/signup')} className="nav-cta">Try it free <span aria-hidden>→</span></a>
          </div>
          <div className="nav-pill">
            <div className="wp-wrap">
              <button
                type="button"
                className={`wp-trigger${open ? ' is-open' : ''} is-guest`}
                aria-expanded={open}
                aria-controls="wp-menu"
                aria-label="Log in or open menu"
                onClick={() => setOpen(value => !value)}
              >
                <span className="wp-av"><User size={16} strokeWidth={2.2} aria-hidden="true" /></span>
                <span className="wp-label">Login</span>
                <ChevronDown className="wp-chev" size={15} strokeWidth={2.4} aria-hidden="true" />
              </button>

              {open && <>
                <button type="button" className="wp-scrim" aria-label="Close menu" tabIndex={-1} onClick={close} />
                <div id="wp-menu" className="wp-menu">
                  <div className="wp-grab" aria-hidden="true" />
                  <div className="wp-head">
                    <div className="wp-av"><Sparkles size={20} strokeWidth={2.2} aria-hidden="true" /></div>
                    <div><strong>Welcome to Wishly</strong><small>Create a free account to start</small></div>
                    <button type="button" className="wp-close" aria-label="Close menu" onClick={close}><X size={18} strokeWidth={2.4} aria-hidden="true" /></button>
                  </div>
                  <div className="wp-quick">
                    <a href={appLink('/login')} className="wp-login" onClick={close}>Log in</a>
                    <a href={appLink('/signup')} className="nav-cta" onClick={close}>Sign up free <span aria-hidden>→</span></a>
                  </div>
                  <div className="wp-explore">
                    <div className="wp-group">Explore</div>
                    {exploreLinks.map(([href, label, kind]) => {
                      const Icon = icons[href] || Sparkles;
                      return kind === 'app'
                        ? <a key={href} href={appLink(href)} className="wp-row" onClick={close}><Icon size={18} aria-hidden="true" /><b>{label}</b><ChevronRight className="wp-go" size={16} aria-hidden="true" /></a>
                        : <Link key={href} href={`${href}/`} className="wp-row" onClick={close}><Icon size={18} aria-hidden="true" /><b>{label}</b><ChevronRight className="wp-go" size={16} aria-hidden="true" /></Link>;
                    })}
                    <div className="wp-sep" />
                  </div>
                  <div className="wp-rows">
                    <a href={appLink('/contact')} className="wp-row" onClick={close}><Mail size={18} aria-hidden="true" /><b>Contact</b><ChevronRight className="wp-go" size={16} aria-hidden="true" /></a>
                    <a href={appLink('/insights')} className="wp-row" onClick={close}><BookOpen size={18} aria-hidden="true" /><b>Insights</b><ChevronRight className="wp-go" size={16} aria-hidden="true" /></a>
                    <a href={appLink('/donate')} className="wp-row" onClick={close}><Heart size={18} aria-hidden="true" /><b>Donate</b><ChevronRight className="wp-go" size={16} aria-hidden="true" /></a>
                  </div>
                </div>
              </>}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
