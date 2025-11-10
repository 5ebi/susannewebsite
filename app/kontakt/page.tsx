import styles from './page.module.css';

const address = 'Hannovergasse 16/3, 1200 Wien';
const phone = '+43 123 456 789';
const email = 'psychotherapie.rusch@gmail.com';

export default function Kontakt() {
  return (
    <main className={styles.kontaktPage}>
      <div className={styles.headerBlock}>
        <h1 className={styles.heading}>Kontakt</h1>
        <p className={styles.kicker}>Praxisadresse</p>
        <p className={styles.address}>{address}</p>

        <div className={styles.contactDetails}>
          <p>
            <span>Telefon</span>
            <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
          </p>
          <p>
            <span>E-Mail</span>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
      </div>

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
