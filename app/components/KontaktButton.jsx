import Link from 'next/link';
import styles from './KontaktButton.module.css';

export default function KontaktButton({ children }) {
  return (
    <Link className={styles.button} href={'/kontakt'}>
      {children}
    </Link>
  );
}
