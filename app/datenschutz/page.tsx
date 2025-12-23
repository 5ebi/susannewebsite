import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description:
    'Datenschutzerklärung zur Website der Praxis von Magistra Susanne Rusch für Psychotherapie und Musiktherapie in Wien (1200): Server-Logfiles, Kontaktaufnahme und Rechte nach DSGVO.',
  alternates: { canonical: '/datenschutz' },
};

export default function Datenschutz() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.intro}>
        <h1 className={styles.heading}>Datenschutzerklärung</h1>
        <p>
          Ich verarbeite nur die Daten, die für den Betrieb der Website, Ihre
          Kontaktaufnahme und die Durchführung der Therapie notwendig sind. Ich
          setze keine eigenen Cookies zu Tracking-Zwecken ein.
        </p>
      </div>

      <div className={styles.sections}>
        <section>
          <h2>Verantwortlich</h2>
          <p>
            Mag. Susanne Rusch · Psychotherapeutin und Musiktherapeutin
            <br />
            Hannovergasse 16/3, 1200 Wien
            <br />
            Telefon: <a href="tel:+436801528926">+43 680 1528926</a>
            <br />
            E-Mail:
            <a href="mailto:info@psychotherapie-rusch.at">
              info@psychotherapie-rusch.at
            </a>
          </p>
        </section>

        <section>
          <h2>Daten</h2>
          <ul>
            <li>
              Technische Server-Logfiles (IP-Adresse, Datum/Uhrzeit,
              angeforderte Seite)
            </li>
            <li>
              Kontaktdaten und Inhalt Ihrer Anfrage bei Telefon- oder
              E-Mail-Kontakt
            </li>
            <li>
              Im Rahmen einer Therapie: gesundheitsbezogene Daten unter
              psychotherapeutischer Verschwiegenheit
            </li>
          </ul>
        </section>

        <section>
          <h2>Zweck & Rechtsgrundlagen</h2>
          <ul>
            <li>
              Bereitstellung und Sicherheit der Website (Art. 6 Abs. 1 lit. f
              DSGVO)
            </li>
            <li>
              Beantwortung von Anfragen und Terminvereinbarung (Art. 6 Abs. 1
              lit. b DSGVO)
            </li>
            <li>
              Durchführung der Therapie (Art. 9 Abs. 2 lit. h DSGVO,
              psychotherapeutische Verschwiegenheit)
            </li>
          </ul>
        </section>

        <section>
          <h2>Speicherdauer</h2>
          <ul>
            <li>
              Server-Logfiles: werden vom Hosting-Provider nach kurzer Frist
              gelöscht.
            </li>
            <li>
              Kontaktanfragen: nur solange nötig, um Ihre Anfrage zu
              beantworten.
            </li>
            <li>
              Behandlungsunterlagen: gemäß gesetzlichen Aufbewahrungspflichten
              (mindestens 10 Jahre).
            </li>
          </ul>
        </section>

        <section>
          <h2>Weitergabe</h2>
          <p>
            Für Hosting, Auslieferung und eingebundene Inhalte werden
            Dienstleister eingesetzt, an die dabei Daten übermittelt werden
            können.
          </p>
        </section>

        <section>
          <h2>Ihre Rechte</h2>
          <p>
            Sie haben Rechte auf Auskunft, Berichtigung, Löschung,
            Einschränkung, Datenübertragbarkeit und Widerspruch im gesetzlichen
            Rahmen. Wenden Sie sich dazu an die oben genannten Kontaktdaten.
            Zusätzlich können Sie sich bei der Österreichischen
            Datenschutzbehörde beschweren.
          </p>
          <p>
            Es findet keine automatisierte Entscheidungsfindung einschließlich
            Profiling gemäß Art. 22 DSGVO statt.
          </p>
        </section>
      </div>
    </main>
  );
}
