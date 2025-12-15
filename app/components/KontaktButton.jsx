import Link from 'next/link';
import styles from './KontaktButton.module.css';

export default function KontaktButton({ children, onClick }) {
  return (
    <Link className={styles.button} href={'/kontakt'} onClick={onClick}>
      {children}
    </Link>
  );
}
