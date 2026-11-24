import localFont from 'next/font/local';

export const inter = localFont({
  src: [{ path: './inter-latin-wght-normal.woff2', weight: '100 900', style: 'normal' }],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
});

// Only used for the few Bengali words (template names, the Bengali filter chip), so it is not preloaded.
export const bnSans = localFont({
  src: [
    { path: './hind-siliguri-bengali-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './hind-siliguri-bengali-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  preload: false,
  variable: '--font-bn-sans',
});
