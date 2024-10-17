import React from "react";
import Image from "next/image";
import firmPhoto from "../../assets/image/clean4.png";
import classes from "./AboutCompany.module.scss";

const AboutCompany = () => {
  return (
    <section id="firma" className={classes.company}>
      <h2 className={classes.company__title}>Witam</h2>
      <div className={classes.company__box}>
        <div className={classes.company__boxImage}>
          <Image src={firmPhoto} />
        </div>

        <div className={classes.company__boxText}>
          <p className={classes.company__boxTextOne}>
            Firma „KabeTint&Leather” specjalizuje się w praniu tapicerek
            samochodowych, renowacji i impregnacji skór, autokosmetyce oraz
            przyciemnianiu szyb. Dzięki nowoczesnym technologiom i
            wykwalifikowanemu zespołowi, zapewniamy skuteczne usuwanie zabrudzeń
            i plam, odświeżenie wyglądu tapicerki oraz przywrócenie pierwotnego
            blasku skór. Oferujemy również profesjonalne usługi konserwacji, co
            pozwala na długotrwałe zachowanie ich jakości i trwałości..
          </p>
          <p className={classes.company__boxTextTwo}>
            „KabeTint&Leather” obsługuje zarówno klientów indywidualnych, jak i
            firmy, oferując wysokiej klasy detergenty oraz preparaty bezpieczne
            dla ludzi i zwierząt. Korzystamy z zaawansowanego technicznie
            sprzętu, a każdemu Zleceniodawcy zapewniamy pełną satysfakcję z
            naszych usług oraz konkurencyjne ceny.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
