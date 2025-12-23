import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';
import Kalimba from '@/public/images/Praxis-Sanni_Kalimba.webp';
import Kantele from '@/public/images/Praxis-Sanni_Kantele.webp';
import SpringTongueDrum from '@/public/images/Praxis-Sanni_Spring Tongue Drum.webp';

export const metadata: Metadata = {
  title: 'Musiktherapie in Wien (1200)',
  description:
    'Musiktherapie in Wien-Brigittenau (1200): Improvisation auf leicht spielbaren Instrumenten – ohne musikalische Vorerfahrung. Termine nach Vereinbarung.',
  alternates: { canonical: '/musiktherapie' },
};

export default function Musiktherapie() {
  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>Musiktherapie</h1>
      <section className={styles.section}>
        <div className={styles.textTop}>
          <p>
            In der Musiktherapie stehen uns unterschiedliche, leicht spielbare
            Instrumente zur Verfügung. Beim gemeinsamen Improvisieren können
            Gefühle und Stimmungen hörbar werden, für die es vielleicht (noch)
            keine Sprache gibt. Musikalische Vorerfahrung ist hierbei nicht von
            Nöten.
          </p>
          <p>
            Das musikalisch Erlebte wird je nach Möglichkeit verbal reflektiert,
            um unterschiedliche Gefühlslagen und innere Prozesse bewusst zu
            machen.
          </p>
        </div>
        <figure className={styles.media}>
          <Image
            src={Kalimba}
            priority
            sizes="(max-width: 900px) 100vw, 45vw"
            alt="Kalimba im Praxisraum"
            className={styles.image}
          />
          <figcaption className={styles.caption}>Kalimba</figcaption>
        </figure>
        <div className={styles.textBottom}>
          <p>
            Die musikalische Erfahrung im geschützten Rahmen schafft einen Raum,
            in dem eigene Gefühle und Erfahrungen gespürt, verstanden und
            bearbeitet werden können. Hierbei steht stets das eigene Erleben im
            Hier und Jetzt im Vordergrund. Musiktherapie kann so helfen, die
            eigene Selbstwahrnehmung und Ausdrucksfähigkeit zu stärken,
            emotionale Balance herzustellen sowie neue Lebensperspektiven zu
            entdecken.
          </p>
        </div>
      </section>

      <section className={styles.gallerySection} aria-label="Instrumente">
        <h2 className={styles.galleryHeading}>Weitere Instrumente</h2>
        <div className={styles.gallery}>
          <figure className={styles.card}>
            <Image
              src={Kantele}
              sizes="(max-width: 900px) 50vw, 30vw"
              alt="Kantele im Praxisraum"
              className={styles.cardImage}
            />
            <figcaption className={styles.caption}>Kantele</figcaption>
          </figure>
          <figure className={styles.card}>
            <Image
              src={SpringTongueDrum}
              sizes="(max-width: 900px) 50vw, 30vw"
              alt="Spring Tongue Drum im Praxisraum"
              className={styles.cardImage}
            />
            <figcaption className={styles.caption}>
              Spring Tongue Drum
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
