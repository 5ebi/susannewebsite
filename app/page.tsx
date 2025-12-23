import type { Metadata } from 'next';
import styles from './page.module.css';
import Image from 'next/image';
import susanne from '@/public/images/susanne-rusch-psychotherapie.webp';
import KontaktButton from './components/KontaktButton';

export const metadata: Metadata = {
  title: 'Psychotherapie & Musiktherapie in Wien (1200)',
  description:
    'Praxis für Psychotherapie (Integrative Gestalttherapie) und Musiktherapie in Wien-Brigittenau (1200). Termine nach Vereinbarung – Kontakt online oder telefonisch.',
  alternates: { canonical: '/' },
};

export default function Willkommen() {
  return (
    <main className={styles.containerMain}>
      <div className={styles.containerMain2}>
        <div className={styles.containerMain3}>
          <div className={styles.imageCol}>
            <Image
              src={susanne}
              priority
              alt="Magistra Susanne Rusch – Psychotherapeutin und Musiktherapeutin in Wien"
              className={styles.image}
            />
            <p className="photoDescription"> Mag.ª Susanne Rusch</p>
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
          {/* <hr className={styles.divider} /> */}
          <div className={styles.spruchContainer2}>
            <div>
              <p className={styles.spruch2}>
                „Du nimmst das, was da ist, und du nimmst es so, wie es ist,
                <br></br>was immer auch daraus werden mag.“
              </p>
              <p className={styles.spruch2_1}>- Lore Perls</p>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.spruchContainer3}>
        <h2 className={styles.ctaHeading}>
          Psychotherapie & Musiktherapie in Wien-Brigittenau
        </h2>
        <p className={styles.ctaText}>
          In meiner Praxis in der Hannovergasse begleite ich Jugendliche und
          Erwachsene im Einzelsetting. Wenn Sie Fragen haben oder einen Termin
          vereinbaren möchten, melden Sie sich gerne telefonisch oder per
          E-Mail.
        </p>
        <div className={styles.ctaButton}>
          <KontaktButton>Termin anfragen</KontaktButton>
        </div>
      </section>
    </main>
  );
}
