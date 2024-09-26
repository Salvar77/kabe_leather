import React from "react";
import Image from "next/image";
import Contact from "@/components/Main/Contact";
import styles from "./PricingSection.module.scss";
import cennikImage from "../../assets/image/cennik2.jpg"; // Ścieżka do obrazka cennika

const PricingSection = () => {
  return (
    <>
      <section id="cennik" className={styles.pricingSection}>
        <h2 className={styles.pricingHeader}>Cennik</h2>
        <div className={styles.imageContainer}>
          <Image
            src={cennikImage}
            alt="Cennik usług"
            layout="responsive"
            width={930}
            height={768}
          />
        </div>
      </section>
      <div className={styles.priceContact}>
        <Contact />
      </div>
    </>
  );
};

export default PricingSection;
