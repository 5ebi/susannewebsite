import styles from './page.module.css';
import Image from 'next/image';
import susanne from '@/public/images/susanne-rusch-psychotherapie.webp';

export default function Willkommen() {
  return (
    <main className={styles.containerMain}>
      <h1>Herzlich Willkommen</h1>
      <div className={styles.imageContainer}>
        <Image
          src={susanne}
          priority
          alt="Magistra Susanne Rusch – Psychotherapeutin und Musiktherapeutin in Wien"
          sizes="(max-width: 1440px) 100vw, 1440px"
          className={styles.image}
        />
        <p className="photoDescription"> Magª Susanne Rusch</p>
        <Image
          src={susanne}
          priority
          alt="Magistra Susanne Rusch – Psychotherapeutin und Musiktherapeutin in Wien"
          sizes="(max-width: 1440px) 100vw, 1440px"
          className={styles.image}
        />
      </div>

      <h2>...hier soll der spruch unter dem Foto stehen</h2>
    </main>
  );
}
