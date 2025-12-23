import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';
import Sitzgruppe1c from '@/public/images/Sitzgruppe1c.webp';
import Pflanze from '@/public/images/Praxis-Sanni_Pflanze.webp';
import Steine from '@/public/images/Praxis-Sanni_Steine.webp';

export const metadata: Metadata = {
  title: 'Psychotherapie – Integrative Gestalttherapie in Wien (1200)',
  description:
    'Psychotherapie (Integrative Gestalttherapie) in Wien-Brigittenau (1200): Informationen zum Ansatz, therapeutischem Gespräch und kreativen Methoden. Termine nach Vereinbarung.',
  alternates: { canonical: '/psychotherapie' },
};

export default function Psychotherapie() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.heading}>
          Psychotherapie
          <span className={styles.headingSub}>Integrative Gestalttherapie</span>
        </h1>
      </header>

      <section className={styles.section}>
        <div className={styles.text}>
          <h2>Ansatz</h2>
          <p>
            Die Gestalttherapie basiert auf einem humanistischen, ganzheitlichen
            Weltbild, welches den Menschen als Einheit aus Körper, Geist und
            Seele betrachtet, stets in Verbindung mit seiner Umwelt. Ausgehend
            von der aktuellen Lebenssituation, der Wahrnehmung einzelner
            Gefühle, Bedürfnisse und Erfahrungen, können ungelöste Probleme
            („offene Gestalten“) sichtbar und bearbeitet werden.
          </p>
        </div>

        <figure className={styles.media}>
          <Image
            src={Sitzgruppe1c}
            priority
            sizes="(max-width: 900px) 100vw, 45vw"
            alt="Praxis von Magistra Susanne Rusch in 1200 Wien"
            className={styles.image}
          />
          <figcaption className={styles.caption}>
            Mein Praxisraum im 20. Bezirk, Wien
          </figcaption>
        </figure>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.text}>
          <h2>Methoden</h2>
          <p>
            Dies geschieht vor allem im therapeutischen Gespräch, welches auch
            durch Einbeziehen kreativer Ausdrucksformen, dem Wahrnehmen des
            eigenen Körpererlebens oder durch einzelne Rollenspiele angereichert
            werden kann.
          </p>
        </div>

        <figure className={styles.media}>
          <Image
            src={Pflanze}
            sizes="(max-width: 900px) 100vw, 45vw"
            alt="Pflanze im Praxisraum"
            className={styles.image}
          />
          <figcaption className={styles.caption}>
            Pflanze im Praxisraum
          </figcaption>
        </figure>
      </section>

      <section className={styles.section}>
        <div className={styles.text}>
          <h2>Therapeutische Beziehung</h2>
          <p>
            Im Zentrum des Therapieprozesses steht die therapeutische Beziehung,
            die durch das Entstehen von Vertrauen und Sicherheit eine Grundlage
            zur persönlichen Entwicklung darstellt. In diesem geschützten Raum
            können eigene Bedürfnisse klarer gespürt, Beziehungsmuster
            verstanden und neue Perspektiven ausprobiert werden.
          </p>
        </div>

        <figure className={styles.media}>
          <Image
            src={Steine}
            sizes="(max-width: 900px) 100vw, 45vw"
            alt="Steine in einem Gefäß die Ruhe und Erdung symbolisieren"
            className={styles.image}
          />
          <figcaption className={styles.caption}>
            Steine für Ruhe und Erdung
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
