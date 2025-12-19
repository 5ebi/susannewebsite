import type { Metadata } from 'next';
import { Noto_Sans_JP, BioRhyme, Lora } from 'next/font/google';
import './globals.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
  title: 'Praxis für Psychotherapie und Musiktherapie | Susanne Rusch',
  description:
    'Psychotherapie & Musiktherapie in Wien (1200) mit Mag.a Susanne Rusch. Individuelle Begleitung für Erwachsene und Jugendliche – Termin online anfragen',
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
