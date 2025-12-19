'use client';

import styles from './navbar.module.css';
import logo2 from '@/public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import KontaktButton from '../KontaktButton';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.maxWidth}>
        <div className={styles.navLogo}>
          <Image
            src={logo2}
            className={styles.logo}
            priority
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
          <KontaktButton>Kontakt</KontaktButton>
        </div>

        <button
          className={`${styles.burgerButton} ${
            open ? styles.burgerButtonOpen : ''
          }`}
          aria-expanded={open}
          aria-label="Navigation öffnen"
          aria-controls="mobile-navigation"
          onClick={toggleMenu}
        >
          <span className={styles.burgerLine}></span>

          <span className={styles.burgerLine}></span>
        </button>
      </div>

      {/* Mobile-Menü jetzt IN der .navbar */}
      <div
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}
        id="mobile-navigation"
        aria-hidden={!open}
      >
        <ul className={styles.navItemsMobile}>
          <li>
            <Link className={styles.link3} href={'/'} onClick={closeMenu}>
              Willkommen
            </Link>
          </li>
          <li>
            <Link
              className={styles.link3}
              href={'/psychotherapie'}
              onClick={closeMenu}
            >
              Psychotherapie
            </Link>
          </li>
          <li>
            <Link
              className={styles.link3}
              href={'/musiktherapie'}
              onClick={closeMenu}
            >
              Musiktherapie
            </Link>
          </li>
          <li>
            <Link
              className={styles.link3}
              href={'/uebermich'}
              onClick={closeMenu}
            >
              Über mich
            </Link>
          </li>
          <li>
            <Link
              className={styles.link3}
              href={'/rahmenbedingungen'}
              onClick={closeMenu}
            >
              Rahmenbedingungen
            </Link>
          </li>
          <li className={styles.mobileKontakt}>
            <KontaktButton onClick={closeMenu}>Kontakt</KontaktButton>
          </li>
        </ul>
      </div>
    </div>
  );
}
