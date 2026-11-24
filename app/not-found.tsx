import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = { title: 'Page not found', robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <main className="premium-site international-site">
      <Navbar />
      <section className="global-page-hero global-wrap">
        <p className="global-overline">404 · NOT FOUND</p>
        <h1>Looks like this page took a different turn.</h1>
        <p>The address may have changed, or the page may no longer be part of this collection. You can head back to the designs and find another starting point.</p>
        <p style={{ marginTop: 24 }}><Link className="global-button global-button-primary" href="/templates/">Browse the designs ↗</Link></p>
      </section>
      <Footer />
    </main>
  );
}
