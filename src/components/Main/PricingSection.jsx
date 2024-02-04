import React from "react";
import styles from "./PricingSection.module.scss"; // załóżmy, że tutaj będą Twoje style

const PricingSection = () => {
  const services = [
    {
      name: "Mycie detailingowe + suszenie + naczernienie opon",
      small: "80zł",
      medium: "100zł",
      large: "130zł",
    },
    {
      name: "Mycie detailingowe + suszenie + quick detailer + naczernienie opon",
      small: "od 140zł",
      medium: "od 160zł",
      large: "od 180zł",
    },
    // ... inne usługi
  ];

  return (
    <section id="cennik" className={styles.pricingTable}>
      <h2>Cennik</h2>
      <div className={styles.header}>
        <div className={styles.headerCell}>RODZAJ USŁUGI</div>
        <div className={styles.headerCell}>MAŁE AUTA</div>
        <div className={styles.headerCell}>DUŻE AUTA</div>
        <div className={styles.headerCell}>VANY, BUSY</div>
      </div>
      {services.map((service, index) => (
        <div key={index} className={styles.row}>
          <div className={styles.cell}>{service.name}</div>
          <div className={styles.cell}>{service.small}</div>
          <div className={styles.cell}>{service.medium}</div>
          <div className={styles.cell}>{service.large}</div>
        </div>
      ))}
    </section>
  );
};

export default PricingSection;
