import Image from 'next/image';
import styles from './page.module.css';
import praxis3 from '@/public/images/praxis3.jpg';

export default function Psychotherapie() {
  return (
    <main className={styles.containerMain}>
      <h1 className={styles.heading}>
        Psychotherapie – Integrative Gestalttherapie
      </h1>
      <div className={styles.containerMain2}>
        <div className={styles.containerText}>
          <p>
            In der Integrativen Gestalttherapie stehen Bewusstheit, Offenheit
            und der Kontakt im Hier und Jetzt im Zentrum. Veränderung entsteht
            nicht durch äußeren Druck, sondern durch achtsames Wahrnehmen des
            eigenen Erlebens. Dies geschieht vor allem im therapeutischen
            Gespräch, aber auch durch kreative Ausdrucksformen, dem Wahrnehmen
            des eigenen Körpererlebens oder Rollenspielen. Diese können helfen,
            Gedanken, Gefühle und Verhaltensmuster bewusst zu machen.<br></br>
            <br></br>
            Den therapeutischen Prozess begleite ich stets mit Respekt,
            Wertschätzung und echtem Interesse an Ihrem individuellen Erleben.
            So entsteht ein Raum, in dem vielleicht eingefahrene Muster sichtbar
            werden, eigene Bedürfnisse klarer gespürt und neue Perspektiven
            ausprobiert werden können – immer im Kontakt mit dem, was gerade
            ist.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={praxis3}
            priority
            alt="Praxis von Magistra Susanne Rusch in 1200 Wien"
            className={styles.image}
          />
          <p className="photoDescription">Foto Beschreibung</p>
        </div>
      </div>
    </main>
  );
}
