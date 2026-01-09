import styles from './page.module.css';
import { createPageMetadata } from '../lib/seo';

export const metadata = createPageMetadata({
  title: 'Datenschutz',
  description:
    'Datenschutz zur Website der Praxis von Mag.ᵃ Susanne Rusch in Wien (1200): keine Tracking-Cookies, Server-Log-Files und Rechte nach DSGVO.',
  canonical: '/datenschutz',
});

export default function Datenschutz() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.intro}>
        <h1 className={styles.heading}>Datenschutz</h1>
        <p>
          Auf dieser Website gibt es kein Kontaktformular und keinen Newsletter.
          Es werden keine Cookies zu Tracking- oder Marketingzwecken eingesetzt.
        </p>
      </div>

      <div className={styles.sections}>
        <section>
          <h2>Verantwortliche und Kontaktdaten</h2>
          <p>
            Verantwortliche für die Datenverarbeitung gemäß
            Datenschutzgrundverordnung (DSGVO) ist:
          </p>
          <p>
            Mag.ᵃ Susanne Rusch
            <br />
            Hannovergasse 16/3, 1200 Wien
          </p>
          <p>
            Der Schutz Ihrer Daten ist mir besonders wichtig. Ich bin für Sie
            unter den unten angeführten Kontaktdaten jederzeit für Ihre Fragen
            oder Ihren Widerruf erreichbar.
          </p>
          <p>
            E-Mail: info@psychotherapie-rusch.at
            <br />
            Telefon: +43 680 1528926
          </p>
        </section>

        <section>
          <h2>Personenbezogene Daten und deren Verwendung</h2>
          <p>
            Sofern Sie mir personenbezogene Daten zur Verfügung gestellt haben,
            nutze ich diese nur zu den mit Ihnen vereinbarten Zwecken oder wenn
            eine sonstige rechtliche Grundlage im Einklang mit der DSGVO
            vorliegt; dies unter Einhaltung der datenschutz- und
            zivilrechtlichen Bestimmungen.
          </p>
          <p>
            Es werden nur solche personenbezogenen Daten erhoben, die für die
            Durchführung und Abwicklung meiner Leistungen erforderlich sind oder
            die Sie mir freiwillig zur Verfügung gestellt haben.
          </p>
          <p>
            Ich werde die mir zur Verfügung gestellten Daten nicht für andere
            Zwecke als die durch Vertrag oder durch Ihre Einwilligung oder sonst
            durch eine Bestimmung im Einklang mit der DSGVO gedeckten Zwecken
            verarbeiten.
          </p>
        </section>

        <section>
          <h2>Auskunft und Löschung</h2>
          <p>
            Als Betroffene haben Sie jederzeit das Recht auf Auskunft über Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
            und den Zweck der Datenverarbeitung sowie ein Recht auf
            Berichtigung, Datenübertragung, Widerspruch, Einschränkung der
            Bearbeitung sowie Sperrung oder Löschung unrichtiger bzw. unzulässig
            verarbeiteter Daten.
          </p>
          <p>
            Insoweit sich Änderungen Ihrer persönlichen Daten ergeben, ersuche
            ich um entsprechende Mitteilung.
          </p>
          <p>
            Sie haben jederzeit das Recht, eine erteilte Einwilligung zur
            Nutzung Ihrer personenbezogenen Daten zu widerrufen. Ihre Eingabe
            auf Auskunft, Löschung, Berichtigung, Widerspruch und/oder
            Datenübertragung, im letztgenannten Fall, sofern damit nicht ein
            unverhältnismäßiger Aufwand verursacht wird, kann an meine Adresse
            gerichtet werden.
          </p>
          <p>
            Wenn Sie der Auffassung sind, dass die Verarbeitung Ihrer
            personenbezogenen Daten durch mich gegen das geltende
            Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche
            in einer anderen Weise verletzt worden sind, besteht die
            Möglichkeit, sich bei der zuständigen Aufsichtsbehörde zu
            beschweren. In Österreich zuständig ist hierfür die
            Datenschutzbehörde.
          </p>
        </section>

        <section>
          <h2>Datensicherheit</h2>
          <p>
            Der Schutz Ihrer personenbezogenen Daten erfolgt durch entsprechende
            organisatorische und technische Vorkehrungen. Diese Vorkehrungen
            betreffen insbesondere den Schutz vor unerlaubtem, rechtswidrigem
            oder auch zufälligem Zugriff, Verarbeitung, Verlust, Verwendung und
            Manipulation.
          </p>
          <p>
            Ungeachtet der Bemühungen der Einhaltung eines stets angemessen
            hohen Standes der Sorgfaltsanforderungen kann nicht ausgeschlossen
            werden, dass Informationen, die Sie mir über das Internet bekannt
            geben, von anderen Personen eingesehen und genutzt werden.
          </p>
          <p>
            Bitte beachten Sie, dass ich daher keine wie immer geartete Haftung
            für die Offenlegung von Informationen aufgrund nicht von mir
            verursachter Fehler bei der Datenübertragung und/oder
            unautorisiertem Zugriff durch Dritte übernehme (zB Hackangriff auf
            E-Mail-Account bzw. Telefon).
          </p>
        </section>

        <section>
          <h2>Server-Log-Files</h2>
          <p>
            Zur Optimierung der Website in Bezug auf die Systemperformance,
            Benutzerfreundlichkeit und Bereitstellung von nützlichen
            Informationen erhebt und speichert der Provider der Website
            automatisch Informationen in sogenannten Server-Log-Files, die Ihr
            Browser automatisch an uns übermittelt. Davon umfasst sind Ihre
            IP-Adresse, Browser- und Spracheinstellung, Betriebssystem,
            Referrer-URL, Internet-Service-Provider und Datum sowie Uhrzeit.
            Eine Zusammenführung dieser Daten mit personenbezogenen Datenquellen
            wird von mir nicht vorgenommen. Ich behalte mir vor, die Daten
            nachträglich zu prüfen, wenn konkrete Anhaltspunkte für eine
            rechtswidrige Nutzung bekannt werden.
          </p>
        </section>

        <section>
          <h2>Übermittlung von Daten an Dritte</h2>
          <p>
            Eine Weiterleitung Ihrer Daten erfolgt ausschließlich auf Grundlage
            der DSGVO, insbesondere zur Erfüllung Ihres Auftrags oder aufgrund
            Ihrer vorherigen Einwilligung.
          </p>
          <p>
            Grundsätzlich gebe ich keine Daten an Dritte weiter, außer es
            ergeben sich Verpflichtungen und Notwendigkeiten, die sich aus
            unserer Geschäftsbeziehung ergeben können (z.B.: Rechnungslegung,
            Buchhaltung).
          </p>
        </section>

        <section>
          <h2>Bekanntgabe von Datenpannen</h2>
          <p>
            Ich bin bemüht sicherzustellen, dass Datenpannen frühzeitig erkannt
            und gegebenenfalls unverzüglich Ihnen bzw. der zuständigen
            Aufsichtsbehörde unter Einbezug der jeweiligen Datenkategorien, die
            betroffen sind, gemeldet werden.
          </p>
        </section>

        <section>
          <h2>Aufbewahrung der Daten</h2>
          <p>
            Ich bewahre Daten nicht länger auf als dies zur Erfüllung unserer
            vertraglichen bzw. gesetzlichen Verpflichtungen und zur Abwehr
            allfälliger Haftungsansprüche erforderlich ist.
          </p>
        </section>
      </div>
    </main>
  );
}
