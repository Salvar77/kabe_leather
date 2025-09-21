import React from "react";
import classes from "./Footer.module.scss";
import ContactMain from "../More/ContactMain";
import Link from "next/link";
import dynamic from "next/dynamic"; // 1. Importowanie 'dynamic'

// 2. Dynamiczne ładowanie komponentu GoogleMap
// Wskazówka: ssr: false jest kluczowe, ponieważ komponent używa 'window', które jest dostępne tylko w przeglądarce.
// loading: () => ... to opcjonalny stan ładowania.
const DynamicGoogleMap = dynamic(() => import("../More/GoogleMap"), {
  ssr: false,
  loading: () => <p>Ładowanie mapy...</p>,
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      {/* 3. Użycie dynamicznie zaimportowanego komponentu */}
      <DynamicGoogleMap />
      <ContactMain />
      <div className={classes.footer__container}>
        <div className={classes.footer__text}>
          <p className={classes.footer__textInfo}>
            &copy;{currentYear} KabeTintLeather Auto Detailing
          </p>
        </div>
      </div>
      <div className={classes.policy}>
        <Link
          href="/obszary-naszej-dzialalnosci"
          className={classes.policy__link}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span>Obszary Naszej Działalności</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
