import classes from "./AreaTemplate.module.scss";
import SEO from "../Main/SEO";

export default function AreaTemplate({ title, city, mapSrc, url }) {
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
          KabeTintLeather Profesjonalny autodetailing – {city}
        </h2>
        <p className={classes.areaText}>
          Oferujemy szeroki zakres usług autodetailingu, które spełniają
          najwyższe standardy jakości. Dzięki naszemu doświadczeniu oraz
          indywidualnemu podejściu do każdego klienta możesz być pewien, że
          Twoje auto będzie prezentować się perfekcyjnie.
        </p>

        <h2 className={classes.areaSubtitle}>
          Co oferujemy w ramach usług autodetailingu?
        </h2>
        <ul className={classes.areaList}>
          <li>Pranie tapicerki samochodowej</li>
          <li>Czyszczenie tapicerki samochodowej</li>
          <li>Renowacja tapicerki skórzanej</li>
          <li>Przyciemnianie szyb samochodowych</li>
          <li>Korekta lakieru</li>
          <li>Powłoki ceramiczne i folie ochronne PPF</li>
          <li>Kompleksowa pielęgnacja wnętrza</li>
        </ul>

        <h2 className={classes.areaSubtitle}>
          KabeTintLeather {city} - dlaczego my?
        </h2>
        <p className={classes.areaText}>
          Jesteśmy zespołem pasjonatów z dużym doświadczeniem. Korzystamy
          wyłącznie z profesjonalnych preparatów, gwarantując najwyższą jakość
          wykonanych usług. Dbamy o każdy szczegół, dzięki czemu samochody
          naszych klientów zawsze wyglądają perfekcyjnie. Gwarantujemy
          terminowość oraz indywidualne podejście do każdego klienta.
        </p>

        <h2 className={classes.areaSubtitle}>
          Autodetailing – inspiracje i realizacje
        </h2>
        <p className={classes.areaText}>
          Zachęcamy do zapoznania się z naszymi realizacjami, które znajdziesz
          na naszej stronie internetowej. Możesz się nimi zainspirować lub
          skorzystać z naszej pomocy w doborze odpowiednich usług detailingowych
          dla Twojego pojazdu. Jesteśmy z Tobą na każdym etapie współpracy – od
          pierwszej konsultacji, przez profesjonalną pielęgnację i
          zabezpieczenie lakieru, aż po finalne dopracowanie detali, które
          podkreślą wyjątkowy wygląd Twojego auta.
        </p>

        <h2 className={classes.areaSubtitle}>Masz pytania?</h2>
        <p className={`${classes.areaText} ${classes.contactText}`}>
          Skontaktuj się z nami i sprawdź, jak możemy odmienić Twój samochód!
          <br />
          Autodetailing – Twoje auto jak nowe w lokalizacji {city}.
          <br />
          <br />
          <a href="/kontakt" className={classes.contactLink}>
            Przejdź do formularza kontaktowego
          </a>
        </p>

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
