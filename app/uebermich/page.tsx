import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';
import portraitImage from '@/public/images/susanne-rusch-face.jpg';

export const metadata: Metadata = {
  title: 'Über mich',
  description:
    'Mag.ᵃ Susanne Rusch – Psychotherapeutin (Integrative Gestalttherapie) und Musiktherapeutin in Wien (1200). Ausbildung und Berufserfahrung.',
  alternates: { canonical: '/uebermich' },
};

const arbeitserfahrung = [
  'Psychotherapeutin und Musiktherapeutin in freier Praxis mit Kindern, Jugendlichen und Erwachsenen',
  'Lehrmusiktherapeutin am Institut für Musiktherapie, mdw',
  'Praktikumsleitung und Supervision am Institut für Musiktherapie, mdw',
  'Musiktherapie Universitätsklinikum Tulln, Abteilung für Kinder- und Jugendpsychiatrie und Psychotherapie',
  'Musiktherapie KH Hietzing/Rosenhügel, Neuropsychiatrische Abteilung für Kinder und Jugendliche mit Behindertenzentrum',
  'Musiktherapie Verein LOK – Leben ohne Krankenhaus',
  'Musiktherapie Verein BALANCE – Leben ohne Barrieren',
];

const ausbildung = [
  'Fachspezifikum Integrative Gestalttherapie (igwien)',
  'Universitätslehrgang Psychotherapeutisches Propädeutikum',
  'Diplomstudium Musiktherapie an der Universität für Musik und darstellende Kunst Wien (mdw)',
  'Konzertfach Klavier am Konservatorium der Stadt Wien',
];

export default function UeberMich() {
  return (
    <main className={styles.containerMain}>
      <h1 className={styles.heading}>Über mich</h1>
      <div className={styles.containerMain2}>
        <div className={styles.columns}>
          <section>
            <h2>Berufserfahrung</h2>
            <ul>
              {arbeitserfahrung.map((item) => (
                <li className={styles.listItems} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Ausbildung</h2>
            <ul>
              {ausbildung.map((item) => (
                <li className={styles.listItems} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className={styles.portraitWrapper}>
          <Image
            src={portraitImage}
            alt="Portrait von Mag. Susanne Rusch"
            className={styles.portrait}
            priority
          />
        </div>
      </div>
    </main>
  );
}
