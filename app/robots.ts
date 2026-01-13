import type { MetadataRoute } from 'next';
import { SITE_URL } from './lib/site';

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.VERCEL_ENV === 'production';

  return {
    rules: [
      {
        userAgent: '*',
        ...(isProd ? { allow: '/' } : { disallow: '/' }),
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
