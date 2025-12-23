import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      style={{
        width: 'var(--page-inline-width)',
        margin: '0 auto',
        padding: '2rem 0',
      }}
    >
      <h1>Seite nicht gefunden</h1>
      <p>Diese Seite existiert nicht.</p>
      <p style={{ marginTop: '1rem' }}>
        <Link href="/">
          Zur Startseite gelangen Sie <em>hier</em>.
        </Link>
      </p>
    </main>
  );
}
