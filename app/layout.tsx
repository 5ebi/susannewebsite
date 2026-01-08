import type { Metadata } from 'next';
import { Noto_Sans_JP, BioRhyme, Lora } from 'next/font/google';
import './globals.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ReactNode } from 'react';

const normalizeSiteUrl = (value: string) => {
  const trimmed = value.trim().replace(/\/$/, '');
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://psychotherapie-rusch.at';

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
});

const bioRhyme = BioRhyme({
  variable: '--font-biorhyme',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${notoSansJP.variable} ${bioRhyme.variable} ${lora.variable}`}
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
        <Footer />
      </body>
    </html>
  );
}
