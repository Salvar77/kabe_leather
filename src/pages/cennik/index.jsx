import React from "react";
import Contact from "@/components/Main/Contact";
import styles from "./cennik.module.scss";
import { services } from "../../../constants";
import SEO from "@/components/Main/SEO";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  staggerContainer,
  textVariant,
  fadeIn,
  fadeScale,
} from "../../../utils/motion";

import backgroundImage from "../../assets/image/kabelogowhite.webp";

const PricingSection = () => (
  <>
    <SEO
      title="Cennik Usług - KabeTintLeather Auto Detailing Opole"
      description="Sprawdź cennik usług KabeTintLeather Auto Detailing. Oferujemy pranie tapicerki, czyszczenie samochodów, przyciemnianie szyb i więcej. Skontaktuj się z nami, aby poznać szczegóły."
      image="https://www.kabetintleather.opole.pl/cennik.jpg"
      url="https://www.kabetintleather.opole.pl/cennik"
      isProduct={true}
    />

    <section id="cennik" className={styles.pricingSection}>
      <Image
        src={backgroundImage}
        alt="Tło strony cennik - KabeTintLeather Auto Detailing Opole"
        fill
        priority
        fetchPriority="high"
        quality={60}
        className={styles.backgroundImage}
      />
      <motion.div
        variants={staggerContainer(0.15, 0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1 className={styles.pricingHeader} variants={textVariant(0.1)}>
          Cennik
        </motion.h1>

        <motion.ul
          className={styles.servicesList}
          variants={fadeIn("up", "tween", 0.2, 0.8)}
        >
          {services.map((service, index) => (
            <motion.li
              key={index}
              className={styles.serviceItem}
              variants={fadeScale(index * 0.1, 0.6)}
            >
              <span className={styles.serviceIcon}>{service.icon}</span>
              <span className={styles.serviceName}>{service.name}</span>
              <span className={styles.servicePrice}>{service.price}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>

    <motion.div
      className={styles.pricingInfo}
      variants={fadeIn("up", "tween", 0.4, 0.9)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2>Cennik usług – KabeTintLeather Opole</h2>

      <p>
        Nazywam się Kamil, mam ponad 10&nbsp;lat doświadczenia w auto detailingu
        i prowadzę studio <strong>KabeTintLeather w Opolu</strong>. Pomagam
        kierowcom zadbać o wygląd i czystość samochodu – od{" "}
        <strong>prania tapicerki</strong>, przez
        <strong> czyszczenie tapicerki skórzanej</strong>, aż po
        <strong> korektę lakieru i aplikację powłok ceramicznych</strong>.
      </p>

      <p>
        Każda usługa wyceniana jest indywidualnie – w zależności od wielkości
        auta, stopnia zabrudzenia i oczekiwanego efektu. Powyższy{" "}
        <strong>cennik usług detailingowych</strong> ma charakter orientacyjny –
        pełną ofertę ustalam po krótkiej rozmowie lub oględzinach auta.
      </p>

      <p>
        📞{" "}
        <strong>
          Umów się na wycenę – oddzwonię maksymalnie w 15&nbsp;minut!
        </strong>
        <br />
        ✉️ <a href="mailto:kabetint@gmail.com">kabetint@gmail.com</a>
        <br />
        📍 Opole i okolice: Ozimek, Prószków, Komprachcice, Lubniany, Zaodrze,
        Wrzoski, Malina, Półwieś
      </p>

      <p>
        Szukasz <strong>profesjonalnego detailingu w Opolu</strong>? Interesuje
        Cię <strong>przyciemnianie szyb</strong>,{" "}
        <strong>czyszczenie tapicerki</strong> lub{" "}
        <strong>korekta lakieru</strong>? Dobrze trafiłeś – skontaktuj się ze
        mną już dziś i dołącz do grona zadowolonych klientów.
      </p>
    </motion.div>

    <motion.div
      className={styles.priceContact}
      variants={fadeIn("up", "tween", 0.5, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Contact />
    </motion.div>
  </>
);

export default PricingSection;
