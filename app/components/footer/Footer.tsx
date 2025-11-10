import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.footerItems}>
        <li>Impressum</li>
        <li>Datenschutz</li>
      </ul>
    </div>
  );
}
