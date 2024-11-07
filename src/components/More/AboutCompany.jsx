import React from "react";
import Image from "next/image";
import firmPhoto from "../../assets/image/blogFotoMain4-2.jpg";
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
              <Image
                src={firmPhoto}
                alt="Właściciel firmy zajmującej się praniem tapicerki i czyszczeniem samochodów"
              />
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
              Firma „KabeTint&Leather” to firma specjalizująca się w
              profesjonalnej kosmetyce samochodowej. Oferujemy kompleksowe
              usługi, takie jak pranie i czyszczenie tapicerki samochodowej,
              czyszczenie, impregnację i renowację skór, ręczne mycie pojazdów,
              a także zabezpieczanie karoserii woskiem lub powłoką ceramiczną.
              Dodatkowo zajmujemy się korektą lakieru i aplikacją bezbarwnej
              folii ochronnej PPF, która zapewnia długotrwałą ochronę
              powierzchni lakierniczej. Nasza oferta to najwyższa jakość usług
              dla osób, które cenią sobie perfekcyjny wygląd i trwałość swojego
              pojazdu.
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
              bezpieczne dla ludzi i zwierząt. Korzystam z zaawansowanego
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
