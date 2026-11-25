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
    // Call the browser's ORIGINAL History methods. Next.js patches
    // window.history.pushState/replaceState and copies its own internal state
    // (__NA, router tree) into whatever we pass, which would make the home
    // entry restore as a client-side navigation with the wrong tree.
    const proto = Object.getPrototypeOf(window.history) as History;
    // 1) Current entry becomes the home page. Its state has no Next.js flag,
    //    so Next.js does a normal full load of "/" when the user comes back.
    proto.replaceState.call(window.history, { intlBackStep: true }, '', '/');
    // 2) A new entry is added for the page the visitor really opened.
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
