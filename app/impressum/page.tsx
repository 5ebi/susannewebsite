import styles from './page.module.css';
import { createPageMetadata } from '../lib/seo';

export const metadata = createPageMetadata({
  title: 'Impressum',
  description:
    'Impressum der Praxis für Psychotherapie und Musiktherapie von Mag.ᵃ Susanne Rusch in Wien (1200).',
  canonical: '/impressum',
});

export default function Impressum() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.intro}>
        <h1 className={styles.heading}>Impressum</h1>
      </div>
      <div className={styles.sections}>
        <section>
          <h2>Mag.ᵃ Susanne Rusch</h2>
          <p>
            Psychotherapeutin und Musiktherapeutin (Verleihungsstaat:
            Österreich)
            <br />
            Hannovergasse 16/3, 1200 Wien
          </p>
        </section>
        <section>
          <h2>Kontakt</h2>
          <p>
            Telefon:{' '}
            <a className={styles.phoneLink} href="tel:+436801528926">
              +43 680 1528926
            </a>
            <br />
            E-Mail:{' '}
            <a href="mailto:info@psychotherapie-rusch.at">
              info@psychotherapie-rusch.at
            </a>
          </p>
        </section>
        <section>
          <h2>Bildnachweise & Webdesign</h2>
          <p>Fotos und Logo: Mirella Rusch und Privat</p>
          <p>Webdesign und Programmierung: Sebastian Speiser</p>
        </section>
        <section>
          <h2>Unternehmensgegenstand</h2>
          <p>Psychotherapie und Musiktherapie.</p>
          <p>
            Diese Website dient ausschließlich der Information über die
            psychotherapeutische und musiktherapeutische Tätigkeit.
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
      </div>
    </main>
  );
}
