import styles from './page.module.css';

const address = 'Hannovergasse 16/3, 1200 Wien';

export default function Kontakt() {
  return (
    <main className={styles.kontaktPage}>
      {/* <div className={styles.headerBlock}> */}
      <h1>Kontakt</h1>
      <p className={styles.kicker}>Praxisadresse</p>
      <p className={styles.address}>{address}</p>
      {/* </div> */}

      <div className={styles.mapWrapper}>
        <iframe
          title="Praxisstandort Hannovergasse"
          src="https://www.google.com/maps?q=Hannovergasse%2016/3,%201200%20Wien&output=embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </main>
  );
}
