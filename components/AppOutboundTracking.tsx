'use client';

import { useEffect } from 'react';
import { SITE } from '@/lib/site';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const appHost = new URL(SITE.appUrl).hostname;

/**
 * Records product-site clicks in the shared data layer without changing native
 * link navigation. All appLink() destinations also carry UTMs, so Wishly.bd
 * can attribute visits even when a tag manager event is unavailable.
 */
export default function AppOutboundTracking() {
  useEffect(() => {
    const findAppAnchor = (event: Event) => {
      if (!(event.target instanceof Element)) return null;
      const anchor = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!anchor) return null;
      try {
        const destination = new URL(anchor.href, window.location.href);
        return destination.hostname === appHost ? { anchor, destination } : null;
      } catch {
        return null;
      }
    };

    // Do not send this site as the Referer to wishly.bd, so GA4 there cannot
    // count wishly.rafahim.com as a referral source. The GA tag and the _gl
    // cross-domain linker are untouched, so the session still continues.
    const stripReferrer = (event: Event) => {
      const hit = findAppAnchor(event);
      if (hit) hit.anchor.referrerPolicy = 'no-referrer';
    };

    const handleClick = (event: MouseEvent) => {
      const hit = findAppAnchor(event);
      if (!hit) return;
      const { anchor, destination } = hit;
      anchor.referrerPolicy = 'no-referrer';

      const linkText = (anchor.getAttribute('aria-label') || anchor.textContent || '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 100);

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'wishly_app_outbound_click',
        link_url: destination.href,
        link_domain: destination.hostname,
        link_path: destination.pathname,
        link_text: linkText,
        source_page: window.location.pathname,
        source_domain: window.location.hostname,
      });
    };

    // Capture before browser navigation, but never prevent or replace it.
    document.addEventListener('click', handleClick, true);
    // Also cover middle-click / long-press / context-menu "open in new tab".
    document.addEventListener('pointerdown', stripReferrer, true);
    document.addEventListener('auxclick', stripReferrer, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('pointerdown', stripReferrer, true);
      document.removeEventListener('auxclick', stripReferrer, true);
    };
  }, []);

  return null;
}
