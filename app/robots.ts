import type { MetadataRoute } from 'next';

const siteUrl = 'https://psychotherapie-rusch.at';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
