import styles from './navbar.module.css';
import logo2 from '@/public/images/logo-und-schrift.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>
        <Image
          src={logo2}
          priority
          width="300"
          quality={100}
          alt="Logo von Magistra Susanne Rusch"
        />
      </div>
      <div className={styles.navItemsDiv}>
        <ul className={styles.navItems}>
          <li>
            <Link className={styles.link} href={'/'}>
              Willkommen
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={'/psychotherapie'}>
              Psychotherapie
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={'/musiktherapie'}>
              Musiktherapie
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={'/uebermich'}>
              Über mich
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={'/rahmenbedingungen'}>
              Rahmenbedingungen
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.navButton}>
        <Link className={styles.link2} href={'/kontakt'}>
          Kontakt
        </Link>
      </div>
    </nav>
  );
}
