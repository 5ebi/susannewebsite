const DEFAULT_SITE_URL = 'https://psychotherapie-rusch.at';

export const normalizeSiteUrl = (value: string) => {
  const trimmed = value.trim().replace(/\/$/, '');
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
};

export const getSiteUrl = () => {
  const vercelEnv = process.env.VERCEL_ENV;

  if (vercelEnv && vercelEnv !== 'production' && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return DEFAULT_SITE_URL;
};

export const getSiteHost = (siteUrl: string) => new URL(siteUrl).host;

