import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';
import Sitzgruppe1c from '@/public/images/Sitzgruppe1c.webp';

export const metadata: Metadata = {
  title: 'Psychotherapie – Integrative Gestalttherapie in Wien (1200)',
  description:
    'Psychotherapie (Integrative Gestalttherapie) in Wien-Brigittenau (1200): Informationen zum Ansatz, therapeutischem Gespräch und kreativen Methoden. Termine nach Vereinbarung.',
  alternates: { canonical: '/psychotherapie' },
};

export default function Psychotherapie() {
  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>
        Psychotherapie
        <span className={styles.headingSub}>Integrative Gestalttherapie</span>
      </h1>

      <section className={styles.section}>
        <div className={styles.text}>
          <p>
            Die Gestalttherapie basiert auf einem humanistischen, ganzheitlichen
            Weltbild, welches den Menschen als Einheit aus Körper, Geist und
            Seele betrachtet, stets in Verbindung mit seiner Umwelt. Ausgehend
            von der aktuellen Lebenssituation, der Wahrnehmung einzelner
            Gefühle, Bedürfnisse und Erfahrungen, können ungelöste Probleme
            („offene Gestalten“) sichtbar und bearbeitet werden.
          </p>
          <p>
            Dies geschieht vor allem im therapeutischen Gespräch, welches auch
            durch Einbeziehen kreativer Ausdrucksformen, dem Wahrnehmen des
            eigenen Körpererlebens oder durch einzelne Rollenspiele angereichert
            werden kann.
          </p>
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
            src={Sitzgruppe1c}
            priority
            sizes="(max-width: 560px) 100vw, (max-width: 1023px) 35rem, 34rem"
            alt="Praxis von Magistra Susanne Rusch in 1200 Wien"
            className={styles.image}
          />
        </figure>
      </section>

    </main>
  );
}
