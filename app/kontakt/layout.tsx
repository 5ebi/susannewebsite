import { ReactNode } from 'react';

export default function KontaktLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://www.google.com" />
      <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="" />
      {children}
    </>
  );
}
