import type { MetadataRoute } from 'next';

const normalizeSiteUrl = (value: string) => {
  const trimmed = value.trim().replace(/\/$/, '');
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
};

const getSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'https://psychotherapie-rusch.at';
};

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
