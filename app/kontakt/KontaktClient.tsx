'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function KontaktClient() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <main className={styles.kontaktPage}>
      <h1 className={styles.heading}>Kontakt</h1>
      <div className={styles.wrapper}>
        <div className={styles.leftColumn}>
          <div className={styles.contactDetails}>
            <div>
              <h3>Praxisadresse</h3>
              <p>Hannovergasse 16/3, 1200 Wien</p>
            </div>
            <div>
              <h3>Telefon</h3>
              <a href="tel:+436801528926">+43 680 1528926</a>
            </div>
            <div>
              <h3>E-Mail</h3>
              <a href="mailto:info@psychotherapie-rusch.at">
                info@psychotherapie-rusch.at
              </a>
            </div>
          </div>

          <section className={styles.arrival} aria-label="Anreise">
            <h2 className={styles.arrivalHeading}>Anreise</h2>
            <ul className={styles.arrivalList}>
              <li>
                <span className={styles.arrivalLabel}>
                  Station Wallensteinplatz
                </span>
                <div className={styles.arrivalValue}>
                  <div>Straßenbahn 5, 12, 33 · Bus 20A, 5A, 5B</div>
                  <div className={styles.arrivalSub}>ca. 1 Min. zu Fuß</div>
                </div>
              </li>
              <li>
                <span className={styles.arrivalLabel}>
                  U4 Station Friedensbrücke
                </span>
                <div className={styles.arrivalValue}>
                  <div className={styles.arrivalSub}>ca. 6 Min. zu Fuß</div>
                </div>
              </li>
              <li>
                <span className={styles.arrivalLabel}>
                  U6 Station Jägerstraße
                </span>
                <div className={styles.arrivalValue}>
                  <div className={styles.arrivalSub}>ca. 7 Min. zu Fuß</div>
                </div>
              </li>
            </ul>
          </section>
        </div>

        <div className={styles.mapWrapper}>
          <iframe
            className={`${styles.mapIframe} ${
              mapLoaded ? styles.mapIframeVisible : ''
            }`}
            title="Praxisstandort Hannovergasse"
            src="https://www.google.com/maps?q=Hannovergasse%2016/3,%201200%20Wien&output=embed"
            allowFullScreen
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setMapLoaded(true)}
          />
        </div>
      </div>
    </main>
  );
}
