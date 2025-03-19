import classes from "./AreaTemplate.module.scss";

export default function AreaTemplate({ title, city, mapSrc }) {
  return (
    <div className={classes.areaContainer}>
      <h1 className={classes.areaTitle}>{title}</h1>

      <h2 className={classes.areaSubtitle}>
        Profesjonalny autodetailing – {city}
      </h2>
      <p className={classes.areaText}>
        Oferujemy szeroki zakres usług autodetailingu, które spełniają najwyższe
        standardy jakości. Dzięki naszemu doświadczeniu oraz indywidualnemu
        podejściu do każdego klienta możesz być pewien, że Twoje auto będzie
        prezentować się perfekcyjnie.
      </p>

      <h2 className={classes.areaSubtitle}>Co oferujemy?</h2>
      <ul className={classes.areaList}>
        <li>Pranie i czyszczenie tapicerki samochodowej</li>
        <li>Renowacja tapicerki skórzanej</li>
        <li>Przyciemnianie szyb samochodowych</li>
        <li>Korekta lakieru</li>
        <li>Powłoki ceramiczne i folie ochronne PPF</li>
        <li>Kompleksowa pielęgnacja wnętrza</li>
      </ul>

      <h2 className={classes.areaSubtitle}>
        Dlaczego warto skorzystać z naszych usług?
      </h2>
      <p className={classes.areaText}>
        Jesteśmy zespołem pasjonatów z dużym doświadczeniem. Korzystamy
        wyłącznie z profesjonalnych preparatów, gwarantując najwyższą jakość
        wykonanych usług. Dbamy o każdy szczegół, dzięki czemu samochody naszych
        klientów zawsze wyglądają perfekcyjnie. Gwarantujemy terminowość oraz
        indywidualne podejście do każdego klienta.
      </p>

      <h2 className={classes.areaSubtitle}>
        Autodetailing – inspiracje i realizacje
      </h2>
      <p className={classes.areaText}>
        Zachęcamy do zapoznania się z naszymi realizacjami, które znajdziesz na
        naszej stronie internetowej. Możesz się nimi zainspirować lub skorzystać
        z naszej pomocy w stworzeniu całkowicie indywidualnego projektu.
        Jesteśmy z Tobą na każdym etapie współpracy – od pierwszych konsultacji,
        przez projektowanie, aż po finalny montaż.
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
  );
}
