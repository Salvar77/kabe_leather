import React from "react";
import classes from "./Footer.module.scss";
import ContactMain from "../More/ContactMain";
import GoogleMap from "../More/GoogleMap";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <GoogleMap />
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
