import styles from './page.module.css';
import Image from 'next/image';
import susanne from '@/public/images/susanne-rusch-psychotherapie.webp';
import praxis from '@/public/images/praxis4.jpg';

export default function Willkommen() {
  return (
    <main className={styles.containerMain}>
      <h1>Herzlich Willkommen!</h1>
      <div className={styles.containerMain2}>
        <div className={styles.containerMain3}>
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
        <div className={styles.containerMain3}>
          <div className={styles.spruchContainerLeft}>
            <p className={styles.spruch}>
              ...hier soll was anderes nettes stehen.
            </p>
          </div>
          <div>
            <Image
              src={praxis}
              priority
              alt="Magistra Susanne Rusch – Psychotherapeutin und Musiktherapeutin in Wien"
              sizes="(max-width: 1000px) 100vw, 1000px"
              width="2500"
              height="1667"
              quality={100}
              className={styles.image2}
            />
            <p className="photoDescription">Praxisraum in Wien</p>
          </div>
        </div>
      </div>
    </main>
  );
}
