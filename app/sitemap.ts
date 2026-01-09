import type { MetadataRoute } from 'next';
import { getSiteUrl } from './lib/site-url';

const routes = [
  { path: '/', changeFrequency: 'monthly', priority: 1 },
  { path: '/psychotherapie', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/musiktherapie', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/rahmenbedingungen', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/uebermich', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/kontakt', changeFrequency: 'yearly', priority: 0.8 },
  { path: '/impressum', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/datenschutz', changeFrequency: 'yearly', priority: 0.2 },
] as const satisfies ReadonlyArray<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
