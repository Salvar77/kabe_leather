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

  if (!automotiveId) return null;

  const automotive = servicesData.find(
    (service) => service.id === automotiveId
  );

  if (!automotive) return <p>Usługa nie została znaleziona.</p>;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");
    const handleMediaQueryChange = (e) => {
      setCurrentImage(e.matches ? automotive.largeImage : automotive.image);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [automotive.largeImage, automotive.image]);

  // Przypisz wspólne klasy do sekcji i box
  const sectionClass = `${classes.automotivePage}`;
  const boxClass = `${classes.automotivePage_box}`;

  // Używaj wspólnej struktury dla obu wariantów
  return (
    <section id="tapicerka1" className={sectionClass}>
      <h1>{automotive.description}</h1>
      <div className={boxClass}>
        <div className={classes.imageWrapper}>
          {currentImage && (
            <Image src={currentImage} alt="pictures of upholstery" />
          )}
        </div>
        <div className={classes.textWrapper}>
          {/* Kontent dla tapicerka-samochodowa i tapicerka-domowa */}
          {(automotiveId === "tapicerka-samochodowa" ||
            automotiveId === "tapicerka-domowa") && (
            <ContentUpholstery automotive={automotive} />
          )}
          {/* Kontent dla bezinwazyjne-przyciemnianie-szyb */}
          {automotiveId === "bezinwazyjne-przyciemnianie-szyb" && (
            <ContentTinting automotive={automotive} />
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
      <li>Oszczędność pieniędzy, pozwa</li>
    </ul>
    <div className={classes.linkWrapper}>
      <AppointmentLink />
    </div>
  </div>
);
const AppointmentLink = () => (
  <Link href="tel:+48881325631" className={classes.appointmentLink}>
    Umów się na wizytę!
  </Link>
);
export default AutomotiveUpholstery;
