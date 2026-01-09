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

  const navItems = [
    { href: '/', label: 'Willkommen' },
    { href: '/psychotherapie', label: 'Psychotherapie' },
    { href: '/musiktherapie', label: 'Musiktherapie' },
    { href: '/uebermich', label: 'Über mich' },
    { href: '/rahmenbedingungen', label: 'Rahmenbedingungen' },
  ] as const;

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
              sizes="45px"
              priority
              alt="Logo von Magistra Susanne Rusch"
            />
          </div>
          <div className={styles.navItemsDiv}>
            <ul className={styles.navItems}>
              {navItems.map((item) => {
                const active = isActive(item.href);
                const showActiveStyle = active && item.href !== '/';
                return (
                  <li key={item.href}>
                    <Link
                      className={`${styles.link} ${
                        showActiveStyle ? styles.linkActive : ''
                      }`}
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
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
            aria-label={open ? 'Navigation schließen' : 'Navigation öffnen'}
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
          {navItems.map((item) => {
            const active = isActive(item.href);
            const showActiveStyle = active && item.href !== '/';
            return (
              <li key={item.href}>
                <Link
                  className={`${styles.link3} ${
                    showActiveStyle ? styles.linkActive : ''
                  }`}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => closeMenu(true)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
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
