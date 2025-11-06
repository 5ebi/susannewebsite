import styles from './navbar.module.css';
import logo from '@/public/images/logo.png';
import logo2 from '@/public/images/logo-und-schrift.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Image
        className={styles.navLogo}
        src={logo2}
        priority
        width={300}
        alt="Logo von Magistra Susanne Rusch"
      />

      <ul className={styles.navItems}>
        <Link className={styles.link} href={'/'}>
          Willkommen
        </Link>
        <Link className={styles.link} href={'/psychotherapie'}>
          Psychotherapie
        </Link>
        <Link className={styles.link} href={'/musiktherapie'}>
          Musiktherapie
        </Link>
        <Link className={styles.link} href={'/übermich'}>
          Über mich
        </Link>
        <Link className={styles.link2} href={'/kontakt'}>
          Kontakt
        </Link>
      </ul>
    </div>
  );
}
