import React from "react";
import Logo from "../../assets/image/kabelogo_transparent2.png";
import classes from "./ContactMain.module.scss";
import Link from "next/link";
import Image from "next/image";

const ContactMain = () => {
  return (
    <section id="kontakt-główny" className={classes.contactMain}>
      <div className={classes.column}>
        <h4 className={classes.heading}>Dane kontaktowe:</h4>
        <p className={classes.address}>ul. Generała Emila Fieldorfa 12</p>
        <p className={classes.addressTwo}>45-273 Opole</p>
        <p className={classes.phone}>Tel: 881 325 631</p>
        <p className={classes.email}>kabetint@gmail.com</p>
        <p className={classes.hours}>Godziny otwarcia:</p>
        <p className={classes.hoursDetails}>pon. - pt. 07:00 - 20:00</p>
        <p className={classes.hoursDetails}>sob. 08:00 - 18:00</p>
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
        <h4 className={classes.heading}>Menu:</h4>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/o-mnie">O nas</Link>
            </li>
            <li>
              <Link href="/realizacje">Realizacje</Link>
            </li>
            <li>
              <Link href="/referencje">Referencje</Link>
            </li>
            <li>
              <Link href="/cennik">Cennik</Link>
            </li>
            <li>
              <Link href="/kontakt-strona">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={classes.column}>
        <h4 className={classes.heading}>Linki:</h4>
        <ul className={classes.socialList}>
          <li>
            <Link href="/polityka-prywatnosci">Polityka Prywatności</Link>
          </li>
          <li>
            <Link href="/blog-strona">Blog</Link>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61554800660887"
              target="_blank"
              rel="noopener noreferrer"
              className="fab fa-facebook-f"
            ></a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/kabe_tintleather_autodetailing?igsh=MWdwYzAzdmM2c2Rlbg=="
              target="_blank"
              rel="noopener noreferrer"
              className="fab fa-instagram"
            ></a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@kabe_tintleather"
              target="_blank"
              rel="noopener noreferrer"
              className="fab fa-tiktok"
            ></a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactMain;
