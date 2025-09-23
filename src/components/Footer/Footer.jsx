import React, { useState, useEffect } from "react";
import classes from "./Footer.module.scss";
import ContactMain from "../More/ContactMain";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicGoogleMap = dynamic(() => import("../More/GoogleMap"), {
  ssr: false,
  loading: () => <p>Ładowanie mapy...</p>,
});

const Footer = () => {
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoadMap(true);
    }, 3000);

    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setShouldLoadMap(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <footer className={classes.footer}>
      {shouldLoadMap ? <DynamicGoogleMap /> : <p>Ładowanie mapy...</p>}
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
