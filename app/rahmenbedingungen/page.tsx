import styles from './page.module.css';

const sections = [
  {
    title: 'Erstgespräch',
    paragraphs: [
      'Ein unverbindliches Erstgespräch dient dem gegenseitigen Kennenlernen. Ihre Anliegen, bestehende Schwierigkeiten und auch Wünsche an eine Therapie werden besprochen. Gemeinsam finden wir heraus, ob eine Zusammenarbeit sinnvoll erscheint. Weitere Rahmenbedingungen können geklärt werden. Die Kosten dafür decken sich mit denen einer regulären Therapieeinheit.',
    ],
  },
  {
    title: 'Frequenz',
    paragraphs: [
      'Die Therapieeinheiten finden normalerweise wöchentlich statt. Vor allem zu Beginn einer Therapie ist dies für den Aufbau einer vertrauensvollen therapeutischen Beziehung sehr sinnvoll. Ein Anpassen ist im Laufe des Prozesses möglich.',
    ],
  },
  {
    title: 'Kosten',
    paragraphs: [
      'Eine Therapieeinheit dauert 50 Minuten.',
      'Eine Psychotherapie-Einheit kostet 110 Euro. Bei Leidenszuständen oder Vorliegen einer krankheitswertigen Störung besteht die Möglichkeit, einen Kostenzuschuss bei der Krankenkasse zu beantragen (ÖGK zahlt 33,70 €, BVAEB 48,80 €, SVS 45,00 € pro Einheit).',
      'Eine Musiktherapie-Einheit kostet 90 Euro. Leider ist es derzeit (noch) nicht möglich, mit der Krankenkasse zu verrechnen.',
    ],
  },
  {
    title: 'Absageregelung',
    paragraphs: [
      'Die Absage einer Therapieeinheit ist bis 24 Stunden vor dem Termin für Sie kostenlos. Danach muss ich die Einheit verrechnen, da ich mir die Zeit für Sie freihalte.',
    ],
  },
  {
    title: 'Verschwiegenheit',
    paragraphs: [
      'Als Psychotherapeutin und Musiktherapeutin unterliege ich gesetzlich der Verschwiegenheitspflicht. Ausnahmen bestehen nur im Falle akuter Selbst- und Fremdgefährdung. Die zur Qualitätssicherung dienende Supervision findet nur anonymisiert bei Therapeut*innen statt, die ebenfalls der Schweigepflicht unterliegen.',
    ],
  },
];

export default function Rahmenbedingungen() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.introBlock}>
        <p className={styles.kicker}>Rahmenbedingungen</p>
        <h1>Verlässlich, ruhig, achtsam</h1>
        <p>
          Ich arbeite mit Schulkindern, Jugendlichen und Erwachsenen im Einzelsetting.
        </p>
      </div>
      <div className={styles.sections}>
        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}
