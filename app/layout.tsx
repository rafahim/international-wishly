import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import './international.css';
import { bnSans, inter } from './fonts';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: '%s | Wishly' },
  description: SITE.description,
  applicationName: 'Wishly International',
  authors: [{ name: 'Wishly' }],
  publisher: 'Wishly',
  category: 'lifestyle',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  formatDetection: { telephone: false, email: false, address: false },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } : undefined,
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#f7f5ef' };

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': `${SITE.url}/#org`, name: 'Wishly', url: SITE.url, logo: `${SITE.url}/icon-512.webp`, sameAs: SITE.social, areaServed: 'Worldwide', knowsLanguage: ['en', 'bn'] },
    { '@type': 'WebSite', '@id': `${SITE.url}/#website`, url: SITE.url, name: 'Wishly International', description: SITE.description, inLanguage: 'en', publisher: { '@id': `${SITE.url}/#org` } },
  ],
};

const GA = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bnSans.variable}`} style={{ backgroundColor: '#f7f5ef', colorScheme: 'light' }}>
      <body>
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
