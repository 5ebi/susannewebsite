'use client';

import styles from './navbar.module.css';
import logo2 from '@/public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import KontaktButton from '../KontaktButton';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [instantClose, setInstantClose] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const toggleMenu = () =>
    setOpen((prev) => {
      const next = !prev;
      if (next) setInstantClose(false);
      return next;
    });

  const closeMenu = (instant = false) => {
    if (instant) setInstantClose(true);
    setOpen(false);
  };

  useEffect(() => {
    if (open || !instantClose) return;
    const id = requestAnimationFrame(() => setInstantClose(false));
    return () => cancelAnimationFrame(id);
  }, [open, instantClose]);

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const body = document.body;
    const html = document.documentElement;

    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyWidth = body.style.width;

    html.dataset.scrollLocked = 'true';
    body.dataset.scrollLocked = 'true';

    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';

    return () => {
      delete html.dataset.scrollLocked;
      delete body.dataset.scrollLocked;

      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.width = previousBodyWidth;

      window.scrollTo(0, scrollY);
    };
  }, [open]);

  return (
    <>
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
                <Link
                  className={`${styles.link} ${
                    isActive('/psychotherapie') ? styles.linkActive : ''
                  }`}
                  href={'/psychotherapie'}
                >
                  Psychotherapie
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.link} ${
                    isActive('/musiktherapie') ? styles.linkActive : ''
                  }`}
                  href={'/musiktherapie'}
                >
                  Musiktherapie
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.link} ${
                    isActive('/uebermich') ? styles.linkActive : ''
                  }`}
                  href={'/uebermich'}
                >
                  Über mich
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.link} ${
                    isActive('/rahmenbedingungen') ? styles.linkActive : ''
                  }`}
                  href={'/rahmenbedingungen'}
                >
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

      </div>

      <div
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''} ${
          instantClose ? styles.mobileMenuInstant : ''
        }`}
        id="mobile-navigation"
        aria-hidden={!open}
      >
        <ul className={styles.navItemsMobile}>
          <li>
            <Link
              className={styles.link3}
              href={'/'}
              onClick={() => closeMenu(true)}
            >
              Willkommen
            </Link>
          </li>
          <li>
            <Link
              className={styles.link3}
              href={'/psychotherapie'}
              onClick={() => closeMenu(true)}
            >
              Psychotherapie
            </Link>
          </li>
          <li>
            <Link
              className={styles.link3}
              href={'/musiktherapie'}
              onClick={() => closeMenu(true)}
            >
              Musiktherapie
            </Link>
          </li>
          <li>
            <Link
              className={styles.link3}
              href={'/uebermich'}
              onClick={() => closeMenu(true)}
            >
              Über mich
            </Link>
          </li>
          <li>
            <Link
              className={styles.link3}
              href={'/rahmenbedingungen'}
              onClick={() => closeMenu(true)}
            >
              Rahmenbedingungen
            </Link>
          </li>
          <li className={styles.mobileKontakt}>
            <KontaktButton onClick={() => closeMenu(true)}>Kontakt</KontaktButton>
          </li>
        </ul>
      </div>

      <div
        className={`${styles.mobileOverlay} ${
          open ? styles.mobileOverlayOpen : ''
        } ${instantClose ? styles.mobileOverlayInstant : ''}`}
        onClick={() => closeMenu()}
        aria-hidden={!open}
      ></div>
    </>
  );
}
