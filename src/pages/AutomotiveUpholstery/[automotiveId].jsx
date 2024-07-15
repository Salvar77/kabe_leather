import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { servicesData } from "../../components/Main/Services";
import classes from "./AutomotiveUpholstery.module.scss";
import Image from "next/image";
import Link from "next/link";

const AutomotiveUpholstery = () => {
  const router = useRouter();
  const { automotiveId } = router.query;

  const [currentImage, setCurrentImage] = useState(null);

  const automotive = servicesData.find(
    (service) => service.id === automotiveId
  );

  useEffect(() => {
    if (automotive) {
      const mediaQuery = window.matchMedia("(min-width: 992px)");
      const handleMediaQueryChange = (e) => {
        setCurrentImage(e.matches ? automotive.largeImage : automotive.image);
      };

      mediaQuery.addEventListener("change", handleMediaQueryChange);
      handleMediaQueryChange(mediaQuery);

      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }
  }, [automotive]);

  if (!automotiveId) return null;

  if (!automotive) return <p>Usługa nie została znaleziona.</p>;

  const sectionClass = `${classes.automotivePage}`;
  const boxClass = `${classes.automotivePage_box}`;

  return (
    <section id="tapicerka1" className={sectionClass}>
      <h1>{automotive.description}</h1>
      <div className={boxClass}>
        <div className={classes.imageWrapper}>
          {currentImage && (
            <Image src={currentImage} alt="Obraz przedstawiający tapicerkę" />
          )}
        </div>
        <div className={classes.textWrapper}>
          {(automotiveId === "tapicerka-samochodowa" ||
            automotiveId === "tapicerka-domowa") && (
            <ContentUpholstery automotive={automotive} />
          )}
          {automotiveId === "bezinwazyjne-przyciemnianie-szyb" && (
            <ContentTinting automotive={automotive} />
          )}
          {automotiveId === "pranie-tapicerki-samochodowej" && (
            <ContentCleaning automotive={automotive} />
          )}
        </div>
      </div>
    </section>
  );
};

const ContentUpholstery = ({ automotive }) => (
  <div className={classes.listContainer}>
    <p className={classes.paragraphStyle}>{automotive.additionalInfo}</p>
    <ul className={classes.listStyle}>
      <li>czyszczenie skóry meblowej i samochodowej</li>
      <li>konserwacja skóry meblowej i samochodowej</li>
      <li>usuwanie plam i przebarwień</li>
      <li>usuwanie śladów po długopisie, szmince, markerach</li>
      <li>naprawa uszkodzeń skóry (dziury, rozcięcia)</li>
      <li>usuwanie przetarć, spękań</li>
      <li>usuwanie śladów zadrapań (np. po kocich lub psich pazurach)</li>
      <li>farbowanie i dobarwianie tapicerki skórzanej</li>
      <li>kompleksowa renowacja foteli i innych elementów samochodu</li>
      <li>kompleksowa renowacja mebli skórzanych</li>
      <li>dobieranie farby pod indywidualne zamówienie i kolor tapicerki</li>
      {/* ... */}
    </ul>
    <div className={classes.linkWrapper}>
      <AppointmentLink />
    </div>
  </div>
);

const ContentTinting = ({ automotive }) => (
  <div className={`${classes.columnLayout}`}>
    <p className={classes.paragraphStyle}>{automotive.additionalInfo}</p>
    <ul className={classes.listStyle}>
      <li>
        Redukcja energii słonecznej, pozwala obniżyć temperaturę w samochodzie
      </li>
      <li>Ochrona przed szkodliwymi promieniami UV</li>
      <li>
        Folia przyciemniająca szyby chroni pasażerów podczas wypadku przed
        odłamkami stłuczonego szkła
      </li>
      <li>Bezinwazyjny montaż bez naruszania struktury szyb</li>
      <li>Zwiększenie prywatności i estetyki pojazdu</li>
      <li>Redukcja nagrzewania wnętrza pojazdu</li>
      <li>Gwarancja na trwałość i brak pęcherzyków powietrza </li>
    </ul>
    <div className={classes.linkWrapper}>
      <AppointmentLink />
    </div>
  </div>
);

const ContentCleaning = ({ automotive }) => (
  <div className={classes.columnLayout}>
    <p className={classes.paragraphStyle}>{automotive.additionalInfo}</p>
    <ul className={classes.listStyle}>
      <li>Usuwanie plam i zabrudzeń</li>
      <li>Pranie tapicerki samochodowej</li>
      <li>Ochrona przed przetarciami i uszkodzeniami</li>
    </ul>
    <div className={classes.linkWrapper}>
      <AppointmentLink />
    </div>
  </div>
);

const AppointmentLink = () => (
  <Link
    href="tel:+48881325631"
    className={classes.appointmentLink}
    aria-label="Umów się na wizytę"
  >
    Umów się na wizytę!
  </Link>
);

export default AutomotiveUpholstery;
