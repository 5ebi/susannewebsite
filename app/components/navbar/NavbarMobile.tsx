'use client';

import styles from './navbar.module.css';
import logo2 from '@/public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import KontaktButton from '../KontaktButton';
import { useState } from 'react';
import Kontakt from '@/app/kontakt/page';

export default function NavbarMobile() {
  const [open, useOpen] = useState(false);

  return (
    <div className={styles.navbarMobile}>
      <div className={styles.maxWidth}>
        <div className={styles.navLogo}>
          <Link href={'/'}>
            <Image
              src={logo2}
              priority
              width="50"
              alt="Logo von Magistra Susanne Rusch"
            />
          </Link>
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
          <div className={styles.navButton}>
            <KontaktButton>TEST</KontaktButton>
          </div>
        </div>
        <div className={styles.burger} onClick={() => useOpen(true)}>
          burgerButton
        </div>
      </div>
    </div>
  );
}
