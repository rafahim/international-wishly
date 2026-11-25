'use client';

/**
 * Put this component ONCE in the wishly.bd root layout (inside <body>).
 *
 * Goal: visitor comes from wishly.rafahim.com to a wishly.bd inner page
 * (e.g. /signup?next=...&via=intl). Pressing Back must show the wishly.bd
 * HOME page first; pressing Back again goes to wishly.rafahim.com.
 *
 * History after this runs:
 *   [wishly.rafahim.com page] -> [wishly.bd /] -> [wishly.bd /signup ...]
 *
 * It only touches history; the Google Analytics script is not changed.
 * The `via` parameter is removed from the URL straight away.
 */
import { useEffect } from 'react';

export default function IntlBackStep() {
  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get('via') !== 'intl') return;

    url.searchParams.delete('via');
    const clean = url.pathname + url.search + url.hash;

    // Already on the home page: just clean the URL.
    if (url.pathname === '/') {
      window.history.replaceState(window.history.state, '', clean);
      return;
    }

    const targetState = window.history.state;
    // 1) Current entry becomes the home page (state without Next's __NA flag,
    //    so Next.js does a normal full load of "/" when the user comes back).
    window.history.replaceState({ intlBackStep: true }, '', '/');
    // 2) A new entry is added for the page the visitor really opened.
    window.history.pushState(targetState, '', clean);

    // Fallback for routers that ignore unknown history states.
    const onPop = (e: PopStateEvent) => {
      if (e.state && e.state.intlBackStep) window.location.reload();
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return null;
}
