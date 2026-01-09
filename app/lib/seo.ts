import type { Metadata } from 'next';

type PageMetadataInput = {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogImageAlt?: string;
};

const SITE_NAME = 'Susanne Rusch';
const LOCALE = 'de_AT';
const DEFAULT_OG_IMAGE = '/images/susanne-rusch-psychotherapie.webp';
const DEFAULT_OG_IMAGE_ALT =
  'Praxis für Psychotherapie und Musiktherapie in Wien';

export function createPageMetadata({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = DEFAULT_OG_IMAGE_ALT,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: LOCALE,
      type: 'website',
      images: [{ url: ogImage, alt: ogImageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
