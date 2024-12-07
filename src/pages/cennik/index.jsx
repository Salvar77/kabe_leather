import React from "react";
import Contact from "@/components/Main/Contact";
import styles from "./cennik.module.scss";
import { services } from "../../../constants/index";
import SEO from "@/components/Main/SEO";

const PricingSection = () => {
  return (
    <>
      <SEO
        title="Cennik Usług - Kabe Tint&Leather Auto Detailing Opole"
        description="Sprawdź cennik usług Kabe Tint&Leather Auto Detailing. Oferujemy pranie tapicerki, czyszczenie samochodów, przyciemnianie szyb i więcej. Skontaktuj się z nami, aby poznać szczegóły."
        image="https://www.kabetintleather.opole.pl/cennik2.jpg"
        url="https://www.kabetintleather.opole.pl/cennik"
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
      <div className={styles.priceContact}>
        <Contact />
      </div>
    </>
  );
};

export default PricingSection;
