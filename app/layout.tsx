import type { Metadata } from 'next';
import { Noto_Sans_JP, Lora } from 'next/font/google';
import './globals.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ReactNode } from 'react';
import { getSiteUrl } from './lib/site-url';

const siteUrl = getSiteUrl();
const isProduction = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === 'production'
  : process.env.NODE_ENV === 'production';

const sameAs = [
  'https://www.psyonline.at/psychotherapeutin/159786',
  'https://www.jugendberatung.at/psychotherapeutin/159786',
  'https://www.musiktherapie.at/musiktherapeutin/159786',
];

const businessAddress = {
  '@type': 'PostalAddress',
  streetAddress: 'Hannovergasse 16/3',
  addressLocality: 'Wien',
  postalCode: '1200',
  addressCountry: 'AT',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      '@id': `${siteUrl}/#business`,
      name: 'Praxis für Psychotherapie und Musiktherapie – Susanne Rusch',
      url: siteUrl,
      image: `${siteUrl}/images/susanne-rusch-psychotherapie.webp`,
      telephone: '+43 680 1528926',
      email: 'info@psychotherapie-rusch.at',
      address: businessAddress,
      sameAs,
      founder: { '@id': `${siteUrl}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Susanne Rusch',
      honorificPrefix: 'Mag.ᵃ',
      jobTitle: 'Psychotherapeutin und Musiktherapeutin',
      telephone: '+43 680 1528926',
      email: 'info@psychotherapie-rusch.at',
      address: businessAddress,
      worksFor: { '@id': `${siteUrl}/#business` },
      sameAs,
    },
  ],
};

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      'Praxis für Psychotherapie und Musiktherapie in Wien | Susanne Rusch',
    template: '%s | Susanne Rusch',
  },
  description:
    'Psychotherapie (Integrative Gestalttherapie) und Musiktherapie in Wien-Brigittenau (1200) – Mag.ᵃ Susanne Rusch. Termine nach Vereinbarung.',
  icons: {
    icon: [{ url: '/icon.png' }],
    apple: [{ url: '/apple-icon.png' }],
  },
  openGraph: {
    title:
      'Praxis für Psychotherapie und Musiktherapie in Wien | Susanne Rusch',
    description:
      'Psychotherapie (Integrative Gestalttherapie) und Musiktherapie in Wien-Brigittenau (1200) – Mag.ᵃ Susanne Rusch. Termine nach Vereinbarung.',
    url: '/',
    siteName: 'Susanne Rusch',
    locale: 'de_AT',
    type: 'website',
  },
  robots: {
    index: isProduction,
    follow: isProduction,
    googleBot: {
      index: isProduction,
      follow: isProduction,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${notoSansJP.variable} ${lora.variable}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100dvh',
        }}
      >
        <Navbar />
        <div className="containerLayout" style={{ flex: 1 }}>
          {children}
          <Analytics />
          <SpeedInsights />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Footer />
      </body>
    </html>
  );
}
