import { useRouter } from "next/router";
import { servicesData } from "../../components/Main/Services";
import classes from "./AutomotiveUpholstery.module.scss";
import Image from "next/image";
import Link from "next/link";

const AutomotiveUpholstery = () => {
  const router = useRouter();
  const { automotiveId } = router.query;

  if (!automotiveId) return null;

  const automotive = servicesData.find(
    (service) => service.id === automotiveId
  );

  if (!automotive) return <p>Usługa nie została znaleziona.</p>;

  const sectionClass = `${classes.automotivePage} ${
    classes[automotiveId] || ""
  }`;
  const boxClass = `${classes.automotivePage_box} ${
    classes[`${automotiveId}_box`] || ""
  }`;

  return (
    <section id="tapicerka1" className={sectionClass}>
      <h1>{automotive.description}</h1>
      <div className={boxClass}>
        <Image
          src={automotive.image}
          alt={`Obraz usługi ${automotive.title}`}
        />
        {/* Dodatkowe informacje dla wybranych usług */}
        <p className={classes.paragraphStyle}>{automotive.additionalInfo}</p>
        {(automotiveId === "tapicerka-samochodowa" ||
          automotiveId === "tapicerka-domowa") && (
          <>
            <ul className={classes.listStyle}>
              <li>czyszczenie skóry meblowej i samochodowej</li>
              <li>konserwacja skóry meblowej i samochodowej</li>
              <li>usuwanie plam i przebarwień</li>
              <li>usuwanie śladów po długopisie, szmince, markerach</li>
              <li>naprawa uszkodzeń skóry (dziury, rozcięcia)</li>
              <li>usuwanie przetarć, spękań</li>
              <li>
                usuwanie śladów zadrapań (np. po kocich lub psich pazurach)
              </li>
              <li>farbowanie i dobarwianie tapicerki skórzanej</li>
              <li>kompleksowa renowacja foteli i innych elementów samochodu</li>
              <li>kompleksowa renowacja mebli skórzanych</li>
              <li>
                dobieranie farby pod indywidualne zamówienie i kolor tapicerki
              </li>
            </ul>
            <div className={classes.linkWrapper}>
              <Link href="tel:+48881325631" className={classes.appointmentLink}>
                Umów się na wizytę!
              </Link>
            </div>
          </>
        )}
        {automotiveId === "bezinwazyjne-przyciemnianie-szyb" && (
          <>
            <p className={classes.paragraphStyle}></p>
            <ul className={classes.listStyle}>
              <li>
                Redukcja energii słonecznej, pozwala obniżyć temperaturę w
                samochodzie
              </li>
              <li>Ochrona przed szkodliwymi promieniami UV</li>
              <li>
                Folia przyciemniająca szyby chroni pasażerów podczas wypadku
                przed odłamkami stłuczonego szkła
              </li>
              <li>Oszczędność pieniędzy, pozwa</li>
            </ul>
            <div className={classes.linkWrapper}>
              <Link href="tel:+48881325631" className={classes.appointmentLink}>
                Umów się na wizytę!
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AutomotiveUpholstery;
