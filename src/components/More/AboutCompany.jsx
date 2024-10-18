import React from "react";
import Image from "next/image";
import firmPhoto from "../../assets/image/clean4.png";
import classes from "./AboutCompany.module.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

const AboutCompany = () => {
  return (
    <div className={classes.companyBackground}>
      <section id="firma" className={classes.company}>
        <h2 className={classes.company__title}>
          <motion.span
            initial="hidden"
            whileInView="show"
            variants={fadeIn("up", "spring", 0.3, 1)}
            viewport={{ once: true }}
            className={classes.highlight}
          >
            O Firmie
          </motion.span>
        </h2>
        <div className={classes.company__box}>
          <div className={classes.company__boxImage}>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn("right", "tween", 0.5, 1)}
            >
              <Image src={firmPhoto} alt="zdjęcie właściciela firmy Kabe" />
            </motion.div>
          </div>

          <div className={classes.company__boxText}>
            <motion.p
              initial="hidden"
              whileInView="show"
              variants={fadeIn("left", "tween", 0.5, 1)}
              viewport={{ once: true }}
              className={classes.company__boxTextOne}
            >
              Firma „KabeTint&Leather” specjalizuje się w praniu tapicerek
              samochodowych, renowacji i impregnacji skór, autokosmetyce oraz
              przyciemnianiu szyb. Dzięki nowoczesnym technologiom i
              wykwalifikowanemu zespołowi, zapewniamy skuteczne usuwanie
              zabrudzeń i plam, odświeżenie wyglądu tapicerki oraz przywrócenie
              pierwotnego blasku skór. Oferujemy również profesjonalne usługi
              konserwacji, co pozwala na długotrwałe zachowanie ich jakości i
              trwałości.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn("left", "tween", 0.7, 1)}
              className={classes.company__boxTextTwo}
            >
              „KabeTint&Leather” obsługuje zarówno klientów indywidualnych, jak
              i firmy, oferując wysokiej klasy detergenty oraz preparaty
              bezpieczne dla ludzi i zwierząt. Korzystamy z zaawansowanego
              technicznie sprzętu, a każdemu Zleceniodawcy zapewniamy pełną
              satysfakcję z naszych usług oraz konkurencyjne ceny.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCompany;
