import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Musik- und Psychotherapie in Wien | Mag. Susanne Rusch',
  description:
    'Psychotherapie & Musiktherapie in Wien (1200) mit Mag. Susanne Rusch. Individuelle Begleitung für Erwachsene und Jugendliche – Termin online anfragen',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansJP.variable}`}
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
