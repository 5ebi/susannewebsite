import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.footerItems}>
        <li>
          <Link className={styles.link} href={'/impressum'}>
            Impressum{' '}
          </Link>
        </li>

        <li>
          <Link className={styles.link} href={'/datenschutz'}>
            Datenschutz
          </Link>
        </li>
      </ul>
    </div>
  );
}
