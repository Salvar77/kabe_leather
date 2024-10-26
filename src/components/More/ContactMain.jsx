import React from "react";
import Logo from "../../assets/image/kabelogo_transparent2.png";
import classes from "./ContactMain.module.scss";
import Link from "next/link";
import Image from "next/image";

const ContactMain = () => {
  return (
    <footer id="kontakt-główny" className={classes.contactMain}>
      <div className={classes.column}>
        <h4 className={classes.heading}>Dane kontaktowe:</h4>
        <p className={classes.address}>ul. Generała Emila Fieldorfa 12</p>
        <p className={classes.addressTwo}>45-273 Opole</p>
        <p className={classes.phone}>Tel: 881 325 631</p>
        <p className={classes.email}>kabetint@gmail.com</p>
      </div>
      <div className={classes.column}>
        <div className={classes.logoBlock}>
          <Image
            src={Logo}
            alt="Kabe Tint&Leather Auto Detailing"
            className={classes.logo}
          />
        </div>
      </div>
      <div className={classes.column}>
        <h4 className={classes.heading}>Linki:</h4>
        <Link href="/polityka-prywatnosci" className={classes.policy__link}>
          Polityka Prywatności
        </Link>
      </div>
    </footer>
  );
};

export default ContactMain;
