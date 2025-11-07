import styles from './page.module.css';
import Image from 'next/image';
import susanne from '@/public/images/susanne-rusch-psychotherapie.webp';

export default function Willkommen() {
  return (
    <main className={styles.containerMain}>
      <h1>Herzlich Willkommen</h1>
      <div className={styles.container1}>
        <div className={styles.imageContainer}>
          <div>
            <Image
              src={susanne}
              priority
              alt="Magistra Susanne Rusch – Psychotherapeutin und Musiktherapeutin in Wien"
              sizes="(max-width: 1000px) 100vw, 1000px"
              width="2500"
              height="1667"
              quality={100}
              className={styles.image}
            />
            <p className="photoDescription"> Magª Susanne Rusch</p>
          </div>
          <div className={styles.spruchContainer}>
            <p className={styles.spruch}>
              ...hier soll der spruch stehen, hier soll der spruch stehen, hier
              soll der spruch stehen, hier soll der spruch stehen
            </p>
          </div>
        </div>
        <div className={styles.imageContainer2}>
          <div>
            <Image
              src={susanne}
              priority
              alt="Magistra Susanne Rusch – Psychotherapeutin und Musiktherapeutin in Wien"
              sizes="(max-width: 1000px) 100vw, 1000px"
              width="2500"
              height="1667"
              quality={100}
              className={styles.image}
            />
            <p className="photoDescription"> Magª Susanne Rusch</p>
          </div>
          <div className={styles.spruchContainer}>
            <p className={styles.spruch}>
              ...hier soll der spruch stehen, hier soll der spruch stehen, hier
              soll der spruch stehen, hier soll der spruch stehen
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
