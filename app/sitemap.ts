import type { MetadataRoute } from 'next';
import { SITE_URL } from './lib/site';
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
  return staticRoutes.map((path) => ({
    url: new URL(path, SITE_URL).toString(),
  }));
}
