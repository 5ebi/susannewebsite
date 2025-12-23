import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Impressum',
  description:
    'Impressum der Praxis für Psychotherapie und Musiktherapie von Mag.ᵃ Susanne Rusch in Wien (1200).',
  alternates: { canonical: '/impressum' },
};

export default function Impressum() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.intro}>
        <h1 className={styles.heading}>Impressum</h1>
      </div>
      <div className={styles.sections}>
        <section>
          <h2>Medieninhaberin & Unternehmerin</h2>
          <p>
            Mag. Susanne Rusch · Psychotherapeutin und Musiktherapeutin
            (Verleihungsstaat: Österreich)
            <br />
            Hannovergasse 16/3, 1200 Wien
          </p>
          <p>
            Telefon: <a href="tel:+436801528926">+43 680 1528926</a>
            <br />
            E-Mail:{' '}
            <a href="mailto:info@psychotherapie-rusch.at">
              info@psychotherapie-rusch.at
            </a>
          </p>
          <p>UID ?!?!?!</p>
        </section>
        <section>
          <h2>Unternehmensgegenstand</h2>
          <p>Psychotherapie und Musiktherapie.</p>
          <p>
            Blattlinie: Diese Website dient ausschließlich der Information über
            die psychotherapeutische und musiktherapeutische Tätigkeit.
          </p>
        </section>
        <section>
          <h2>Gesetzliche Grundlage</h2>
          <p>Psychotherapiegesetz BGBl. I Nr. 49/2024.</p>
        </section>
        <section>
          <h2>Zuständige Aufsichtsbehörde</h2>
          <p>
            Bundesministerium für Arbeit, Soziales, Gesundheit, Pflege und
            Konsumentenschutz.
          </p>
        </section>
        <section>
          <h2>Haftungshinweis</h2>
          <p>Für Inhalte externer Links wird keine Haftung übernommen.</p>
        </section>
        <section>
          <h2>Urheberrecht</h2>
          <p>Die Inhalte dieser Website sind urheberrechtlich geschützt.</p>
        </section>
      </div>
    </main>
  );
}
