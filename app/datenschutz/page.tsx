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
          Ich verarbeite nur die Daten, die für den Betrieb der Website und Ihre
          Kontaktaufnahme erforderlich sind. Auf dieser Website gibt es kein
          Kontaktformular und keinen Newsletter. Ich setze keine Cookies zu
          Tracking- oder Marketingzwecken ein.
        </p>
      </div>

      <div className={styles.sections}>
        <section>
          <h2>Verantwortlich</h2>
          <p>
            Mag.a Susanne Rusch · Psychotherapeutin und Musiktherapeutin
            <br />
            Hannovergasse 16/3, 1200 Wien
            <br />
            Telefon: <a href="tel:+436801528926">+43 680 1528926</a>
            <br />
            E-Mail:{' '}
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
              E-Mail-Kontakt (Sie entscheiden, welche Angaben Sie übermitteln)
            </li>
            <li>
              Im Rahmen einer Therapie: gesundheitsbezogene Daten unter
              psychotherapeutischer Verschwiegenheit
            </li>
          </ul>
        </section>

        <section>
          <h2>Hosting & Server-Logfiles</h2>
          <p>
            Diese Website wird über den Hosting-Provider Vercel bereitgestellt
            (Serverstandort EU, z. B. Frankfurt am Main). Beim Aufruf der
            Website werden aus technischen Gründen Server-Logfiles verarbeitet,
            um die Website auszuliefern und die Sicherheit zu gewährleisten.
          </p>
        </section>

        <section>
          <h2>Kontaktaufnahme</h2>
          <p>
            Wenn Sie mich per E-Mail oder Telefon kontaktieren, verarbeite ich
            Ihre Angaben zur Bearbeitung der Anfrage und zur Terminvereinbarung.
            Bitte senden Sie per E-Mail keine sensiblen Gesundheitsdaten, wenn
            Sie das vermeiden möchten.
          </p>
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
            Für Hosting und Auslieferung wird ein Dienstleister (Vercel)
            eingesetzt. Auf der Kontakt-Seite ist außerdem Google Maps als
            eingebetteter Inhalt eingebunden; dabei werden insbesondere Ihre
            IP-Adresse sowie technische Daten an Google übermittelt. Eine
            darüberhinausgehende Weitergabe Ihrer Daten erfolgt nicht, außer
            wenn dies zur Vertragserfüllung notwendig ist, eine gesetzliche
            Verpflichtung besteht oder Sie eingewilligt haben.
          </p>
        </section>

        <section>
          <h2>Ihre Rechte</h2>
          <p>
            Sie haben Rechte auf Auskunft, Berichtigung, Löschung,
            Einschränkung, Datenübertragbarkeit und Widerspruch im gesetzlichen
            Rahmen. Wenden Sie sich dazu an die oben genannten Kontaktdaten.
            Zusätzlich können Sie sich bei der Österreichischen
            Datenschutzbehörde (DSB) beschweren: Barichgasse 40-42, 1030 Wien,
            https://www.dsb.gv.at/
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
