import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.footerItems}>
        <li>Psychotherapie</li>
        <li>Musiktherapie</li>
        <li>Über mich</li>
        <li>Kontakt</li>
      </ul>
    </div>
  );
}
