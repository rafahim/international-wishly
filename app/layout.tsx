import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';

// Keep the shared Wishly.bd design system and navigation styles in their original order.
import './design-system.css';
import './nav-premium.css';
import './nav-profile.css';
import './nav-luxe.css';
import './tablet.css';
import './responsive-fixes.css';

// International content styling is layered after the shared Wishly components.
import './international.css';
import './brand-theme.css';
import './homepage-polish.css';
import './hero-showcase.css';
import './main-site-responsive.css';
import { bnSans, inter } from './fonts';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: '%s | Wishly' },
  description: SITE.description,
  applicationName: 'Wishly International',
  authors: [{ name: 'Wishly' }],
  creator: 'Wishly',
  publisher: 'Wishly',
  category: 'lifestyle',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  formatDetection: { telephone: false, email: false, address: false },
  verification: (process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION) ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION, other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } : undefined } : undefined,
  keywords: ['Wishly', 'Wishly wish', 'Wishly website', 'Wishly.bd', 'birthday wish website', 'personal website maker', 'digital gift website'],
  openGraph: { type: 'website', siteName: SITE.name, title: SITE.title, description: SITE.description, url: SITE.url, locale: 'en_US', alternateLocale: ['en_GB', 'en_CA', 'en_AU', 'en_IN'], images: [{ url: SITE.ogImage, width: 960, height: 600, alt: 'Wishly personal website and digital gift design inspiration' }] },
  twitter: { card: 'summary_large_image', title: SITE.title, description: SITE.description, images: [SITE.ogImage] },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#07070b' };

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': 'https://wishly.bd/#organization', name: 'Wishly', alternateName: ['Wishly BD', 'Wishly.bd', 'Wishly Wish'], url: 'https://wishly.bd/', logo: { '@type': 'ImageObject', url: `${SITE.url}/icon-512.webp` }, sameAs: [...SITE.social, 'https://wishly.bd/'], knowsLanguage: ['en', 'bn'], knowsAbout: ['personal website ideas', 'birthday website templates', 'digital love letters', 'proposal pages', 'anniversary websites', 'online invitations'], description: 'Wishly is a personal website maker for birthdays, proposals, anniversaries, digital letters and invitations. Its main product, account and publishing tools are hosted at wishly.bd.' },
    { '@type': 'WebSite', '@id': `${SITE.url}/#website`, url: SITE.url, name: 'Wishly International', alternateName: ['Wishly', 'Wishly Wish', 'Wishly.bd'], description: SITE.description, inLanguage: 'en', publisher: { '@id': 'https://wishly.bd/#organization' }, audience: { '@type': 'Audience', audienceType: 'People looking for personal website ideas and digital gift inspiration worldwide' } },
  ],
};

const GA = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bnSans.variable}`} style={{ backgroundColor: '#07070b', colorScheme: 'dark' }}>
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>
        {/* Google Tag Manager: loaded after first user interaction (or idle fallback) so it never competes with LCP / main-thread work. */}
        <Script id="gtm-lazy" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          (function(){
            var loaded=false;
            function load(){
              if(loaded) return; loaded=true;
              ['pointerdown','keydown','scroll','touchstart'].forEach(function(e){window.removeEventListener(e,load);});
              window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
              var s=document.createElement('script'); s.async=true;
              s.src='https://www.googletagmanager.com/gtm.js?id=GTM-N7X9SNJ3';
              document.head.appendChild(s);
            }
            ['pointerdown','keydown','scroll','touchstart'].forEach(function(e){window.addEventListener(e,load,{once:true,passive:true});});
            if('requestIdleCallback' in window) requestIdleCallback(function(){setTimeout(load,3500);}); else setTimeout(load,5000);
          })();
        `}</Script>
        <JsonLd data={structuredData} />
        {children}
        {GA && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA}');`}</Script>
          </>
        )}
      </body>
    </html>
  );
}
