import React from "react";
import Contact from "@/components/Main/Contact";
import styles from "./cennik.module.scss";
import { services } from "../../../constants/index";
import SEO from "@/components/Main/SEO";

const PricingSection = () => {
  return (
    <>
      <SEO
        title="Cennik Usług - KabeTintLeather Auto Detailing Opole"
        description="Sprawdź cennik usług KabeTintLeather Auto Detailing. Oferujemy pranie tapicerki, czyszczenie samochodów, przyciemnianie szyb i więcej. Skontaktuj się z nami, aby poznać szczegóły."
        image="https://www.kabetintleather.opole.pl/cennik.jpg"
        url="https://www.kabetintleather.opole.pl/cennik"
        isProduct={true}
      />
      <section id="cennik" className={styles.pricingSection}>
        <h1 className={styles.pricingHeader}>Cennik</h1>
        <ul className={styles.servicesList}>
          {services.map((service, index) => (
            <li key={index} className={styles.serviceItem}>
              <span className={styles.serviceIcon}>{service.icon}</span>
              <span className={styles.serviceName}>{service.name}</span>
              <span className={styles.servicePrice}>{service.price}</span>
            </li>
          ))}
        </ul>
      </section>
      <div className={styles.pricingInfo}>
        <h2>Cennik usług – KabeTintLeather Opole</h2>
        <p>
          Nazywam się Kamil, mam ponad 10 lat doświadczenia w auto detailingu i
          prowadzę studio <strong>KabeTintLeather w Opolu</strong>. Pomagam
          kierowcom zadbać o wygląd i czystość samochodu – od{" "}
          <strong>prania tapicerki</strong>, przez
          <strong> czyszczenie tapicerki skórzanej</strong>, aż po
          <strong> korektę lakieru i aplikację powłok ceramicznych</strong>.
        </p>
        <p>
          Każda usługa wyceniana jest indywidualnie – w zależności od wielkości
          auta, stopnia zabrudzenia i oczekiwanego efektu. Powyższy{" "}
          <strong>cennik usług detailingowych</strong> ma charakter orientacyjny
          – pełną ofertę ustalam po krótkiej rozmowie lub oględzinach auta.
        </p>
        <p>
          📞{" "}
          <strong>
            Umów się na wycenę – oddzwonię maksymalnie w 15 minut!
          </strong>
          <br />
          ✉️ <a href="mailto:kabetint@gmail.com">kabetint@gmail.com</a>
          <br />
          📍 Opole i okolice: Ozimek, Prószków, Komprachcice, Lubniany, Zaodrze,
          Wrzoski, Malina, Półwieś
        </p>
        <p>
          Szukasz <strong>profesjonalnego detailingu w Opolu</strong>?
          Interesuje Cię
          <strong> przyciemnianie szyb</strong>,{" "}
          <strong>czyszczenie tapicerki</strong> lub
          <strong> korekta lakieru</strong>? Dobrze trafiłeś – skontaktuj się ze
          mną już dziś i dołącz do grona zadowolonych klientów.
        </p>
      </div>

      <div className={styles.priceContact}>
        <Contact />
      </div>
    </>
  );
};

export default PricingSection;
