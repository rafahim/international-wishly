/** Fully static site: `next build` writes plain HTML to ./out, ready for GitHub Pages / Cloudflare Pages. */
export default {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  experimental: { optimizePackageImports: ['lucide-react'] },
};
