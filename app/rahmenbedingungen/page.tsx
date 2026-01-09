import styles from './page.module.css';
import { createPageMetadata } from '../lib/seo';

export const metadata = createPageMetadata({
  title: 'Rahmenbedingungen, Kosten & Erstgespräch',
  description:
    'Informationen zu Erstgespräch, Dauer, Kosten, möglichem Kostenzuschuss, Absageregelung und Verschwiegenheit. Praxis in Wien (1200).',
  canonical: '/rahmenbedingungen',
});

export default function Rahmenbedingungen() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.introBlock}>
        <h1 className={styles.heading}>Rahmenbedingungen</h1>
        <p>
          Ich arbeite mit Schulkindern, Jugendlichen und Erwachsenen im
          Einzelsetting.
        </p>
      </div>
      <div className={styles.sections}>
        <section>
          <h2>Erstgespräch</h2>
          <p>
            Ein unverbindliches Erstgespräch dient dem gegenseitigen
            Kennenlernen. Ihre Anliegen, bestehende Schwierigkeiten und Wünsche
            an eine Therapie werden besprochen, offene Fragen können geklärt
            werden. Gemeinsam finden wir heraus, ob eine Zusammenarbeit sinnvoll
            erscheint. Die Kosten für ein Erstgespräch decken sich mit denen
            einer regulären Therapieeinheit.
          </p>
        </section>
        <section>
          <h2>Kosten</h2>
          <p>Eine Therapieeinheit dauert 50 Minuten.</p>
          <p>
            Eine Psychotherapie-Einheit kostet 110 Euro. Bei Vorliegen eines
            Leidenszustands oder einer krankheitswertigen Störung besteht die
            Möglichkeit, einen Kostenzuschuss bei der Krankenkasse zu
            beantragen. Je nach Krankenkasse werden zwischen 33,70 Euro und
            48,80 Euro pro Einheit rückerstattet.
          </p>
          <p>
            Eine Musiktherapie-Einheit kostet 90 Euro. Leider ist es derzeit
            (noch) nicht möglich, mit der Krankenkasse zu verrechnen.
          </p>
        </section>
        <section>
          <h2>Absageregelung</h2>
          <p>
            Die Absage einer Therapieeinheit ist bis 24 Stunden vor dem Termin
            für Sie kostenlos. Danach muss ich die Einheit verrechnen, da ich
            mir die Zeit für Sie freihalte.
          </p>
        </section>
        <section>
          <h2>Verschwiegenheit</h2>
          <p>
            Als Psychotherapeutin und Musiktherapeutin unterliege ich gesetzlich
            der Verschwiegenheitspflicht. Ausnahmen bestehen nur im Falle akuter
            Selbst- und Fremdgefährdung. Die zur Qualitätssicherung dienende
            Supervision findet nur anonymisiert bei Therapeut*innen statt, die
            ebenfalls der Schweigepflicht unterliegen.
          </p>
        </section>
      </div>
    </main>
  );
}
