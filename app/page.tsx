import styles from './page.module.css';
import Image from 'next/image';
import susanne from '@/public/images/susanne-rusch-psychotherapie.webp';
import KontaktButton from './components/KontaktButton';
import { createPageMetadata } from './lib/seo';

export const metadata = createPageMetadata({
  title: 'Psychotherapie & Musiktherapie in Wien-Brigittenau',
  description:
    'Praxis für Psychotherapie (Integrative Gestalttherapie) und Musiktherapie in Wien-Brigittenau (1200). Termine nach Vereinbarung – Kontakt online oder telefonisch.',
  canonical: '/',
});

export default function Willkommen() {
  return (
    <main className={styles.containerMain}>
      <div className={styles.containerMain2}>
        <div className={styles.containerMain3}>
          <div className={styles.imageCol}>
            <Image
              src={susanne}
              sizes="(max-width: 450px) 100vw, (max-width: 700px) 80vw, (max-width: 1023px) 35rem, (max-width: 1120px) 28rem, (max-width: 1280px) 40vw, 32rem"
              priority
              alt="Magistra Susanne Rusch – Psychotherapeutin und Musiktherapeutin in Wien"
              className={styles.image}
            />
          </div>
          <section className={styles.spruchContainer}>
            <h1 className={styles.heading}>Herzlich Willkommen</h1>
            <p className={styles.spruch}>
              in meiner Praxis für <span className="blue">Psychotherapie </span>
              und
              <span className="blue"> Musiktherapie</span> in 1200 Wien!
            </p>
            <p className={styles.spruch}>
              Mein Name ist Susanne Rusch und ich freue mich, Sie auf meiner
              Webseite begrüßen zu dürfen.
            </p>
          </section>
        </div>
        <div className={styles.containerMain4}>
          <div className={styles.spruchContainer2}>
            <div>
              <p className={styles.spruch2}>
                „Du nimmst das, was da ist, und du nimmst es so, wie es ist,
                <br />
                was immer auch daraus werden mag.“
              </p>
              <p className={styles.spruch2_1}>- Lore Perls</p>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.spruchContainer3}>
        <div className={styles.ctaButton}>
          <KontaktButton>Termin anfragen</KontaktButton>
        </div>
      </section>
    </main>
  );
}
