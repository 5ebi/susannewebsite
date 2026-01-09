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
        <div className={styles.text}>
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
        <div className={styles.mediaColumn}>
          <figure className={styles.media}>
            <Image
              src={SpringTongueDrum}
              priority
              sizes="(max-width: 560px) 100vw, (max-width: 1023px) 35rem, 34rem"
              alt="Spring Tongue Drum im Praxisraum"
              className={styles.image}
            />
          </figure>

          <div className={styles.subGallery} aria-label="Instrumente">
            <figure className={styles.subCard}>
              <Image
                src={Kantele}
                sizes="(max-width: 544px) 50vw, (max-width: 1023px) 17rem, 16.5rem"
                alt="Kantele im Praxisraum"
                className={styles.subCardImage}
              />
            </figure>
            <figure className={styles.subCard}>
              <Image
                src={Kalimba}
                sizes="(max-width: 544px) 50vw, (max-width: 1023px) 17rem, 16.5rem"
                alt="Kalimba im Praxisraum"
                className={styles.subCardImage}
              />
            </figure>
          </div>
        </div>
      </section>

    </main>
  );
}
