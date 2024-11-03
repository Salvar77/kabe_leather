import React from "react";
import Contact from "@/components/Main/Contact";
import styles from "./PricingSection.module.scss";
import { services } from "../../../constants/index";

const PricingSection = () => {
  return (
    <>
      <section id="cennik" className={styles.pricingSection}>
        <h2 className={styles.pricingHeader}>Cennik</h2>
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
