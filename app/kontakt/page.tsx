import styles from './page.module.css';

const address = 'Hannovergasse 16/3, 1200 Wien';
const phone = '+43 680 1528926';
const email = 'psychotherapie.rusch@gmail.com';

export default function Kontakt() {
  return (
    <main className={styles.kontaktPage}>
      <h1 className={styles.heading}>Kontakt</h1>
      <div className={styles.wrapper}>
        <div className={styles.contactDetails}>
          <p>
            <span>Praxisadresse</span>
            <p>{address}</p>
          </p>
          <p>
            <span>Telefon</span>
            <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
          </p>
          <p>
            <span>E-Mail</span>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
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
      </div>
    </main>
  );
}
