import Image from 'next/image';
import styles from './page.module.css';
import praxis3 from '@/public/images/praxis3.jpg';

export default function Musiktherapie() {
  return (
    <main className={styles.containerMain}>
      <h1 className={styles.heading}>Musiktherapie</h1>
      <div className={styles.containerMain2}>
        <div>
          <Image
            src={praxis3}
            priority
            alt="Praxis von Magistra Susanne Rusch in 1200 Wien"
            className={styles.image}
          />
          <p className="photoDescription">Foto Beschreibung</p>
        </div>
        <div className={styles.containerText}>
          <p>
            So wie in der Gestalttherapie steht auch in der Musiktherapie das
            eigene Erleben im Hier und Jetzt im Vordergrund. Auf leicht
            spielbaren Instrumenten, mit der eigenen Stimme oder dem bewusst
            eingesetzten Hören von Musik können Gefühle und Stimmungen hörbar
            gemacht werden, für die es vielleicht (noch) keine Sprache gibt.
            Dabei sind keinerlei musikalische Vorkenntnisse von Nöten. Das
            musikalisch Erlebte wird je nach Möglichkeit verbal reflektiert, um
            unterschiedliche Gefühlslagen und innere Prozesse bewusst zu machen.{' '}
            <br></br>
            <br></br>
            Die musikalische Erfahrung schafft einen sicheren, kreativen Raum,
            in dem eigene Gefühle und Erfahrungen gespürt, verstanden und
            verarbeitet werden können. Musiktherapie kann so helfen,
            Selbstwahrnehmung, Ausdrucksfähigkeit und emotionale Balance zu
            stärken und neue Perspektiven zu entdecken.
          </p>
        </div>
      </div>
    </main>
  );
}
