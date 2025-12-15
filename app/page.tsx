import styles from './page.module.css';
import Image from 'next/image';
import susanne from '@/public/images/susanne-rusch-psychotherapie.webp';
import praxis from '@/public/images/Praxis4.jpg';
import KontaktButton from './components/KontaktButton';

export default function Willkommen() {
  return (
    <main className={styles.containerMain}>
      <h1 className={styles.heading}>Herzlich Willkommen</h1>
      <div className={styles.containerMain2}>
        <div className={styles.containerMain3}>
          <div>
            <Image
              src={susanne}
              priority
              alt="Magistra Susanne Rusch – Psychotherapeutin und Musiktherapeutin in Wien"
              className={styles.image}
            />
            <p className="photoDescription"> Mag.ª Susanne Rusch</p>
          </div>
          <section className={styles.spruchContainer}>
            <p className={styles.spruch}>
              in meiner Praxis für Psychotherapie und Musiktherapie in 1200
              Wien! <br />
            </p>
            <p className={styles.spruch}>
              Meine Name ist Susanne Rusch und ich freue mich, Sie auf meiner
              Webseite begrüßen zu dürfen.
            </p>
          </section>
        </div>
        <div className={styles.containerMain4}>
          <hr className={styles.divider} />
          <div className={styles.spruchContainer2}>
            <div>
              <p className={styles.spruch2}>
                „Du nimmst das, was da ist, und du nimmst es so, wie es ist,
                <br></br>was immer auch daraus werden mag.“
              </p>
              <p className={styles.spruch2_1}>Lore Perls</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.containerMain5}></div>
      <KontaktButton>Kontaktieren Sie mich</KontaktButton>
    </main>
  );
}
