import type { MetadataRoute } from 'next';
import { getSiteHost, getSiteUrl } from './lib/site-url';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  const isProduction = process.env.VERCEL_ENV
    ? process.env.VERCEL_ENV === 'production'
    : process.env.NODE_ENV === 'production';

  return {
    rules: [
      {
        userAgent: '*',
        ...(isProduction ? { allow: '/' } : { disallow: '/' }),
      },
    ],
    sitemap: new URL('/sitemap.xml', siteUrl).toString(),
    host: getSiteHost(siteUrl),
  };
}
