import type { Metadata } from 'next';
import { Noto_Sans_JP, BioRhyme, Lora } from 'next/font/google';
import './globals.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const normalizeSiteUrl = (value: string) => {
  const trimmed = value.trim().replace(/\/$/, '');
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL
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
    default: 'Praxis für Psychotherapie und Musiktherapie in Wien | Susanne Rusch',
    template: '%s | Susanne Rusch',
  },
  description:
    'Psychotherapie (Integrative Gestalttherapie) und Musiktherapie in Wien-Brigittenau (1200) – Mag.ᵃ Susanne Rusch. Termine nach Vereinbarung.',
  openGraph: {
    title: 'Praxis für Psychotherapie und Musiktherapie in Wien | Susanne Rusch',
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
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* Google Maps Performance Optimierung */}
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.gstatic.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="" />
      </head>
      <body
        className={`${notoSansJP.variable} ${bioRhyme.variable} ${lora.variable}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
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
