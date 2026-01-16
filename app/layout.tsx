import type { Metadata } from 'next';
import { Noto_Sans_JP, Lora } from 'next/font/google';
import './globals.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ReactNode } from 'react';
import { SITE_URL } from './lib/site';

const isProd = process.env.VERCEL_ENV === 'production';

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
      '@id': `${SITE_URL}/#business`,
      name: 'Praxis für Psychotherapie und Musiktherapie – Susanne Rusch',
      url: SITE_URL,
      image: `${SITE_URL}/images/susanne-rusch-psychotherapie.webp`,
      telephone: '+43 680 1528926',
      email: 'info@psychotherapie-rusch.at',
      address: businessAddress,
      sameAs,
      founder: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Susanne Rusch',
      honorificPrefix: 'Mag.ᵃ',
      jobTitle: 'Psychotherapeutin und Musiktherapeutin',
      telephone: '+43 680 1528926',
      email: 'info@psychotherapie-rusch.at',
      address: businessAddress,
      worksFor: { '@id': `${SITE_URL}/#business` },
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Psychotherapie Wien 1200 | Susanne Rusch',
    template: '%s | Susanne Rusch',
  },
  description:
    'Praxis für Psychotherapie (Integrative Gestalttherapie) und Musiktherapie in Wien-Brigittenau (1200) – Mag.ᵃ Susanne Rusch. Termine nach Vereinbarung.',
  icons: {
    icon: [{ url: '/icon.png' }],
    apple: [{ url: '/apple-icon.png' }],
  },
  openGraph: {
    description:
      'Psychotherapie (Integrative Gestalttherapie) und Musiktherapie in Wien-Brigittenau (1200) – Mag.ᵃ Susanne Rusch. Termine nach Vereinbarung.',
    url: SITE_URL,
    siteName: 'Susanne Rusch',
    locale: 'de_AT',
    type: 'website',
  },
  robots: {
    index: isProd,
    follow: isProd,
    googleBot: {
      index: isProd,
      follow: isProd,
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
