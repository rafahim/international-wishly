'use client';

/**
 * Put this component ONCE in the wishly.bd root layout (inside <body>).
 *
 * A visitor comes from wishly.rafahim.com to a wishly.bd page carrying
 * ?via=intl. Pressing Back must retrace the way the same page is reached
 * when browsing wishly.bd itself, and only the last Back leaves for the
 * international site. Examples:
 *
 *   template demo      [intl] -> / -> /templates -> /template/<slug>
 *   builder (template) [intl] -> / -> /templates -> /template/<slug> -> /builder/new?template=<slug>
 *   insight article    [intl] -> / -> /insights -> /insights/<slug>
 *   signup, login, dashboard, anything else: [intl] -> / -> that page
 *
 * To change a flow, edit parents() below: it returns the pages that sit
 * BEFORE the current one, in order (always starting with "/").
 *
 * It only touches history; the Google Analytics script is not changed.
 * The `via` parameter is removed from the URL straight away.
 */
import { useEffect } from 'react';

function templateChain(slug: string | null): string[] {
  const base = ['/', '/templates'];
  return slug ? [...base, `/template/${encodeURIComponent(slug)}`] : base;
}

/** wishly.bd pages the visitor passes through (in order) before reaching `url`. */
function parents(url: URL): string[] {
  const path = url.pathname;

  // Template demo / full-screen demo: home -> templates list -> this template.
  let m = path.match(/^\/template\/([^/]+)\/full/);
  if (m) return templateChain(decodeURIComponent(m[1]));
  if (/^\/template\/[^/]+/.test(path)) return templateChain(null);

  // Templates list pages (category, how-to guides): home -> templates list.
  if (/^\/templates\/.+/.test(path)) return ['/', '/templates'];

  // "Use template": the visitor was on that template's page just before.
  if (path === '/builder/new') {
    const slug = url.searchParams.get('template');
    return slug ? templateChain(slug) : ['/', '/create'];
  }

  // Signup / login are reachable straight from home: home -> this page.
  // (handled by the default below)

  // Insights articles: home -> insights list.
  if (/^\/insights\/.+/.test(path)) return ['/', '/insights'];

  // Dashboard area and editing an existing page: home -> dashboard.
  if (/^\/dashboard\/.+/.test(path) || /^\/builder\/[^/]+/.test(path)) return ['/', '/dashboard'];

  if (/^\/donate\/.+/.test(path)) return ['/', '/donate'];

  return ['/'];
}

export default function IntlBackStep() {
  useEffect(() => {
    const url = new URL(window.location.href);
    // Marker: ?via=intl in the URL, or the short-lived cookie set by proxy.ts
    // (it survives server redirects such as logged-in /signup -> /dashboard).
    const hasCookie = /(?:^|;\s*)intl_via=1(?:;|$)/.test(document.cookie);
    if (url.searchParams.get('via') !== 'intl' && !hasCookie) return;
    document.cookie = 'intl_via=; path=/; max-age=0';

    url.searchParams.delete('via');
    const clean = url.pathname + url.search + url.hash;

    // Already on the home page: just clean the URL.
    if (url.pathname === '/') {
      window.history.replaceState(window.history.state, '', clean);
      return;
    }

    const chain = parents(url).filter((p, i, a) => p !== clean && a.indexOf(p) === i);
    if (!chain.length) chain.push('/');
    const targetState = window.history.state;
    // Call the browser's ORIGINAL History methods. Next.js patches
    // window.history.pushState/replaceState and copies its own internal state
    // (__NA, router tree) into whatever we pass, which would make the parent
    // entries restore as client-side navigations with the wrong tree.
    const proto = Object.getPrototypeOf(window.history) as History;
    // 1) Current entry becomes the first parent (home). Its state has no
    //    Next.js flag, so Back does a normal full load of that page.
    proto.replaceState.call(window.history, { intlBackStep: true }, '', chain[0]);
    // 2) Remaining parents (e.g. /templates, /template/<slug>), then the real page.
    for (const path of chain.slice(1)) {
      proto.pushState.call(window.history, { intlBackStep: true }, '', path);
    }
    proto.pushState.call(window.history, targetState, '', clean);

    // Fallback for routers that ignore unknown history states.
    const onPop = (e: PopStateEvent) => {
      if (e.state && e.state.intlBackStep) window.location.reload();
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return null;
}
