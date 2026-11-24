import type { MetadataRoute } from 'next';
import { abs } from '@/lib/site';
import { occasionList, templates } from '@/lib/templates';
import { guides } from '@/lib/guides';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const fixed = ['/', '/templates/', '/features/', '/how-to-make-website/', '/guides/', '/about/', '/faq/'];
  return [
    ...fixed.map((path) => ({ url: abs(path), lastModified: now, changeFrequency: 'weekly' as const, priority: path === '/' ? 1 : 0.8 })),
    ...guides.map((guide) => ({ url: abs(`/guides/${guide.slug}/`), lastModified: now, changeFrequency: 'monthly' as const, priority: 0.75 })),
    ...occasionList.map((occasion) => ({ url: abs(`/templates/${occasion.key}/`), lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 })),
    ...templates.map((template) => ({ url: abs(`/template/${template.slug}/`), lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 })),
  ];
}
