import type { Metadata } from 'next';

type PageMetadataInput = {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogImageAlt?: string;
};

const SITE_URL = 'https://psychotherapie-rusch.at';
const SITE_NAME = 'Susanne Rusch';
const LOCALE = 'de_AT';
const DEFAULT_OG_IMAGE = '/images/susanne-rusch-psychotherapie.webp';
const DEFAULT_OG_IMAGE_ALT =
  'Praxis für Psychotherapie und Musiktherapie in Wien';

const toAbsoluteUrl = (value: string) => {
  const trimmed = value.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (trimmed === '/' || trimmed === '') return SITE_URL;
  return new URL(trimmed, SITE_URL).toString();
};

export function createPageMetadata({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = DEFAULT_OG_IMAGE_ALT,
}: PageMetadataInput): Metadata {
  const canonicalUrl = toAbsoluteUrl(canonical);
  const ogImageUrl = toAbsoluteUrl(ogImage);

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: LOCALE,
      type: 'website',
      images: [{ url: ogImageUrl, alt: ogImageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
  };
}
