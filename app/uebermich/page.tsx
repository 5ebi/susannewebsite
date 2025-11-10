import Image from 'next/image';
import styles from './page.module.css';
import portraitImage from '@/public/images/susanne-rusch-face.jpg';

const experiences = [
  'Lehrmusiktherapeutin am Institut für Musiktherapie, mdw',
  'Psychotherapeutin und Musiktherapeutin in freier Praxis mit Kindern, Jugendlichen und Erwachsenen',
  'Praktikumsleitung und Supervision am Institut für Musiktherapie, mdw',
  'Musiktherapie Universitätsklinikum Tulln, Abteilung für Kinder- und Jugendpsychiatrie und Psychotherapie',
  'Musiktherapie KH Hietzing/Rosenhügel, Neuropsychiatrische Abteilung für Kinder und Jugendliche mit Behindertenzentrum',
  'Musiktherapie Verein LOK – Leben ohne Krankenhaus',
  'Musiktherapie Verein BALANCE – Leben ohne Barrieren',
];

const educations = [
  'Fachspezifikum Integrative Gestalttherapie (igwien)',
  'Universitätslehrgang Psychotherapeutisches Propädeutikum',
  'Diplomstudium Musiktherapie an der Universität für Musik und darstellende Kunst Wien (mdw)',
  'Konzertfach Klavier am Konservatorium der Stadt Wien',
];

export default function UeberMich() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.profileLayout}>
        <div className={styles.content}>
          <section className={styles.intro}>
            <h1 className={styles.heading}>Über mich</h1>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>

          <div className={styles.columns}>
            <section>
              <h2>Berufserfahrung</h2>
              <ul>
                {experiences.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2>Ausbildung</h2>
              <ul>
                {educations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
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
