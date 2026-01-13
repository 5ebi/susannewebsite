import type { MetadataRoute } from 'next';

const baseUrl = 'https://psychotherapie-rusch.at';
const staticRoutes = [
  '/',
  '/psychotherapie',
  '/musiktherapie',
  '/uebermich',
  '/rahmenbedingungen',
  '/kontakt',
  '/impressum',
  '/datenschutz',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return staticRoutes.map((path) => ({
    url: new URL(path, baseUrl).toString(),
    lastModified,
  }));
}
