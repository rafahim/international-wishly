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
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } : undefined,
  openGraph: { type: 'website', siteName: SITE.name, title: SITE.title, description: SITE.description, url: SITE.url, locale: 'en_US', images: [{ url: SITE.ogImage, width: 960, height: 600, alt: 'Wishly personal website and digital gift design inspiration' }] },
  twitter: { card: 'summary_large_image', title: SITE.title, description: SITE.description, images: [SITE.ogImage] },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#07070b' };

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': 'https://wishly.bd/#organization', name: 'Wishly', url: 'https://wishly.bd/', logo: { '@type': 'ImageObject', url: `${SITE.url}/icon-512.webp` }, sameAs: [...SITE.social, 'https://wishly.bd/'], knowsLanguage: ['en', 'bn'], knowsAbout: ['personal website ideas', 'birthday website templates', 'digital love letters', 'proposal pages', 'anniversary websites', 'online invitations'], description: 'Wishly is a personal website maker for birthdays, proposals, anniversaries, digital letters and invitations. Its main product, account and publishing tools are hosted at wishly.bd.' },
    { '@type': 'WebSite', '@id': `${SITE.url}/#website`, url: SITE.url, name: 'Wishly International', alternateName: 'Wishly', description: SITE.description, inLanguage: 'en', publisher: { '@id': 'https://wishly.bd/#organization' }, audience: { '@type': 'Audience', audienceType: 'People looking for personal website ideas and digital gift inspiration worldwide' } },
  ],
};

const GA = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bnSans.variable}`} style={{ backgroundColor: '#07070b', colorScheme: 'dark' }}>
      <body>
        {/* Google Tag Manager: initialize the shared dataLayer before loading the container. */}
        <Script id="gtm-init" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
        `}</Script>
        <Script
          id="gtm-loader"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-N7X9SNJ3"
          strategy="afterInteractive"
        />
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
