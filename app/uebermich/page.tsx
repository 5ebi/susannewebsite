import styles from './page.module.css';

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
      <section className={styles.intro}>
        <p className={styles.kicker}>Über mich</p>
        <h1>Begleitung mit Erfahrung und Ruhe</h1>
        <p>
          Ich verbinde psychotherapeutische und musiktherapeutische Arbeit, um
          Menschen in unterschiedlichen Lebensphasen nachhaltig zu unterstützen.
          Die Arbeit mit Kindern, Jugendlichen und Erwachsenen profitiert von
          meinem klinischen Hintergrund sowie der langjährigen Tätigkeit in
          Lehre und Supervision.
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
    </main>
  );
}
