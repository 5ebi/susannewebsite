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
            <p className={styles.spruch2}>
              Meine Name ist Susanne Rusch und ich freue mich sehr, Sie auf
              meiner Webseite begrüßen zu dürfen.
            </p>
          </section>
        </div>
        <div className={styles.containerMain4}>
          {/* <div className={styles.spruchContainerLeft}>
            <p className={styles.spruch}></p>
          </div> */}
          <Image
            src={praxis}
            priority
            alt="Praxisraum von Magistra Susanne Rusch – Psychotherapeutin und Musiktherapeutin in Wien"
            className={styles.image2}
          />
          <p className="photoDescriptionRight">
            Mein Praxisraum im 20. Bezirk in Wien
          </p>
        </div>
      </div>
      <div className={styles.containerMain5}>
        <p>
          Hier könnte auch noch etwas stehen. Zb eine Art: Kontakieren sie mich
          noch heute, um einen baldigen Ersttermin auszumachen od ähnliches.
        </p>
      </div>
      <KontaktButton>Kontakt</KontaktButton>
    </main>
  );
}
