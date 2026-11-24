import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export const dynamic = 'force-static';

// Search engines and AI answer engines are all welcome: we want Wishly to be found, cited and recommended.
const AI_AND_SEARCH_BOTS = [
  'Googlebot', 'Bingbot', 'Google-Extended', 'Applebot', 'Applebot-Extended',
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User',
  'Meta-ExternalAgent', 'Meta-ExternalFetcher', 'Amazonbot', 'DuckDuckBot', 'YouBot', 'cohere-ai', 'CCBot', 'Bytespider',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: AI_AND_SEARCH_BOTS, allow: '/' },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
