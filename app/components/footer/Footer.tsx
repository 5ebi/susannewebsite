import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.footerItems}>
        <Link className={styles.link} href={'/impressum'}>
          <li>Impressum</li>
        </Link>
        <Link className={styles.link} href={'/datenschutz'}>
          <li>Datenschutz</li>
        </Link>
      </ul>
    </div>
  );
}
