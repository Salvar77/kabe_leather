import React from "react";
import classes from "./Footer.module.scss";
import ContactMain from "../More/ContactMain";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <ContactMain />
      <div className={classes.footer__container}>
        <div className={classes.footer__text}>
          <p className={classes.footer__textInfo}>
            &copy;{currentYear} Kabe Tint&Leather Auto Detailing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
