import classes from "./AreaTemplate.module.scss";
import SEO from "../Main/SEO";

export default function AreaTemplate({
  title,
  city,
  mapSrc,
  url,
  description,
}) {
  return (
    <>
      <SEO
        title={title}
        description={`Najlepszy autodetailing w ${city}. Sprawdź nasze usługi i zadbaj o swój samochód!`}
        image="https://www.kabetintleather.opole.pl/kabelogooo.webp"
        url={url}
      />

      <div className={classes.areaContainer}>
        <h1 className={classes.areaTitle}>{title}</h1>

        <h2 className={classes.areaSubtitle}>
          KabeTintLeather – Profesjonalny autodetailing w {city}
        </h2>
        <p className={classes.areaText}>
          Cześć! Nazywam się Kamil i mam ponad 10 lat doświadczenia w
          autodetailingu. Prowadzę studio{" "}
          <span className={classes.strong}>KabeTintLeather</span>, gdzie łączę
          pasję do motoryzacji z perfekcyjnym wykończeniem detali. Obsługuję
          klientów indywidualnych, firmy i floty – zawsze z indywidualnym
          podejściem i gwarancją jakości.
        </p>

        <h2 className={classes.areaSubtitle}>
          Co oferujemy w ramach usług autodetailingu?
        </h2>
        <ul className={classes.areaList}>
          <li>Pranie tapicerki materiałowej, skórzanej i alcantary</li>
          <li>Dogłębne czyszczenie i odświeżanie wnętrza pojazdu</li>
          <li>Renowacja tapicerki skórzanej (fotele, kierownice, boczki)</li>
          <li>Przyciemnianie szyb samochodowych (z atestem)</li>
          <li>Korekta lakieru (One Step, Full Correction)</li>
          <li>Aplikacja powłok ceramicznych i folii ochronnych PPF</li>
          <li>Detailing zewnętrzny i kompleksowe zabezpieczenie lakieru</li>
        </ul>

        <h2 className={classes.areaSubtitle}>
          Dlaczego kierowcy z {city} wybierają KabeTintLeather?
        </h2>
        <ul className={classes.areaList}>
          <li>
            ✅ Ponad{" "}
            <span className={classes.strong}>1000 wykonanych realizacji</span> w
            całym woj. opolskim
          </li>
          <li>
            ✅ Pracuję wyłącznie na renomowanych i sprawdzonych produktach:{" "}
            <span className={classes.strong}>Gyeon, Colourlock, Menzerna</span>
          </li>
          <li>
            ✅ Realizuję również zlecenia indywidualne – bez gotowych pakietów i
            szablonowych rozwiązań
          </li>
          <li>
            ✅ Oferuję bezpłatną wycenę i szybki kontakt – zazwyczaj odpowiadam
            w ciągu godziny
          </li>
          <li>
            ✅ Znajdziesz u mnie połączenie jakości, doświadczenia i lokalnego
            zaufania
          </li>
        </ul>

        <h2 className={classes.areaSubtitle}>
          Opinie klientów z {city} i okolic
        </h2>
        <p className={classes.areaText}>
          „Oddałam auto na pranie wnętrza , Pan Kamil zaproponował mi woskowanie
          samochodu. Jestem zadowolona z usługi. Pranie tapicerki odświeżyło mój
          samochód a po woskowaniu auto błyszczy się jak z salonu. Dziękuję
          Panie Kamilu.”
          <br />
          <span className={classes.strong}>— Czeslawa Cz.</span>
        </p>
        <p className={classes.areaText}>
          „Autko wysprzątane na błysk. Szybko i bez żadnych problemów. Krótki
          czas oczekiwania na wizytę. Gorąco polecam.”
          <br />
          <span className={classes.strong}>— Marcin Rozycki</span>
        </p>

        <h2 className={classes.areaSubtitle}>Umów się na usługę</h2>
        <p className={classes.areaText}>
          📞 <span className={classes.strong}>Zadzwoń teraz</span>:{" "}
          <a href="tel:881325631" className={classes.contactLink}>
            881 325 631
          </a>
          <br />
          ✉️ <span className={classes.strong}>Napisz maila</span>:{" "}
          <a href="mailto:kabetint@gmail.com" className={classes.contactLink}>
            kabetint@gmail.com
          </a>
          <br />
          📍 Studio: ul. Generała Emila Fieldorfa 12, Opole
          <br />
          🕒 Godziny otwarcia: Pon–Pt 07:00–20:00 | Sob. 08:00–18:00
          <br />
          <br />
          <a href="/kontakt" className={classes.contactLink}>
            Umów wizytę online – oddzwonię w 15 minut
          </a>
        </p>

        <h2 className={classes.areaSubtitle}>
          Opinie i efekty – autodetailing, który mówi sam za siebie
        </h2>
        <p className={classes.areaText}>
          Od lat zdobywam zaufanie kierowców z {city} i okolic. Sprawdź{" "}
          <a href="/referencje">opinie klientów</a>, którzy skorzystali z{" "}
          <a href="/uslugi/pranie-tapicerki">czyszczenia tapicerki</a> i innych
          usług detailingowych – ich recenzje najlepiej pokazują efekty mojej
          pracy. Dodatkowe oceny znajdziesz także w{" "}
          <a
            href="https://www.google.com/search?q=kabetintleather"
            target="_blank"
            rel="noopener"
          >
            wizytówce Google
          </a>
          .
        </p>

        <h2 className={classes.areaSubtitle}>
          Autodetailing – inspiracje i realizacje
        </h2>
        <p className={classes.areaText}>
          Zobacz moje <a href="/realizacje">realizacje</a> i przekonaj się, jak
          detale potrafią całkowicie odmienić wygląd auta. Od tapicerki po
          lakier – zadbam o Twój samochód jak o własny. Jeśli nie wiesz, od
          czego zacząć, chętnie doradzę i pomogę dobrać najlepsze rozwiązanie
          dla Ciebie.
        </p>

        <h2 className={classes.areaSubtitle}>Masz pytania?</h2>
        <p className={`${classes.areaText} ${classes.contactText}`}>
          Skontaktuj się ze mną, a podpowiem, co najlepiej sprawdzi się w Twoim
          przypadku.
          <br />
          Autodetailing – Twoje auto jak nowe w lokalizacji{" "}
          <span className={classes.strong}>{city}</span>.
          <br />
          <br />
          <a href="/kontakt" className={classes.contactLink}>
            Przejdź do formularza kontaktowego
          </a>
        </p>

        {description && (
          <div
            className={classes.areaDescription}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}

        <div className={classes.mapContainer}>
          <iframe
            className={classes.googleMap}
            src={mapSrc}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
