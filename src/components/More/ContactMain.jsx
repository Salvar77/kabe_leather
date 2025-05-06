import React, { useState } from "react";
import Logo from "../../assets/image/150x150white2.png";
import classes from "./ContactMain.module.scss";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const ContactMain = () => {
  const [showServices, setShowServices] = useState(false);

  const toggleServices = () => {
    setShowServices((prev) => !prev);
  };

  return (
    <section id="kontakt-główny" className={classes.contactMain}>
      <div className={classes.column}>
        <h2 className={classes.heading}>Dane kontaktowe:</h2>
        <p>
          KabeTintLeather - Pranie tapicerki <br />
          samochodowej Opole
        </p>
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
            alt="Logo firmy KabeTintLeather - pranie tapicerki, czyszczenie samochodów"
            className={classes.logo}
          />
        </div>
      </div>

      <div className={classes.column}>
        <h2 className={classes.heading}>Menu:</h2>
        <nav className={classes.nav} role="navigation" aria-label="Główne menu">
          <ul>
            <li>
              <Link href="/o-mnie" aria-label="Przejdź do sekcji O nas">
                O mnie
              </Link>
            </li>

            <li>
              <span onClick={toggleServices} aria-label="Pokaż usługi">
                Usługi
              </span>
            </li>

            <li>
              <Link
                href="/realizacje"
                aria-label="Przejdź do sekcji Realizacje"
              >
                Realizacje
              </Link>
            </li>
            <li>
              <Link
                href="/referencje"
                aria-label="Przejdź do sekcji Referencje"
              >
                Referencje
              </Link>
            </li>
            <li>
              <Link href="/cennik" aria-label="Przejdź do sekcji Cennik">
                Cennik
              </Link>
            </li>
            <li>
              <Link href="/kontakt" aria-label="Przejdź do sekcji Kontakt">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={classes.column}>
        <h2 className={classes.heading}>Linki:</h2>
        <ul className={classes.socialList}>
          <li>
            <Link
              href="/polityka-prywatnosci"
              aria-label="Przejdź do Polityki Prywatności"
            >
              Polityka Prywatności
            </Link>
          </li>
          <li>
            <Link href="/blog" aria-label="Przejdź do bloga">
              Blog
            </Link>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61554800660887"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Odwiedź mnie na Facebooku"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
              <span className="sr-only">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/kabetintleather_autodetailing/#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Odwiedź mnie na Instagramie"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
              <span className="sr-only">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@kabetintleather"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Odwiedź mnie na TikToku"
            >
              <FontAwesomeIcon icon={faTiktok} size="lg" />
              <span className="sr-only">TikTok</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@KabeTintLeather"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Odwiedź mnie na YouTube"
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
              <span className="sr-only">YouTube</span>
            </a>
          </li>
        </ul>
      </div>

      {showServices && (
        <div className={classes.fullScreenModal}>
          <button
            className={classes.closeButton}
            onClick={toggleServices}
            aria-label="Zamknij usługi"
          >
            ×
          </button>
          <h3 className={classes.modalTitle}>Usługi:</h3>
          <ul className={classes.servicesList}>
            <li>
              <Link href="/uslugi/pranie-tapicerki" onClick={toggleServices}>
                Pranie tapicerki
              </Link>
            </li>
            <li>
              <Link
                href="/uslugi/renowacja-i-czyszczenie-skor"
                onClick={toggleServices}
              >
                Renowacja skór
              </Link>
            </li>
            <li>
              <Link href="/uslugi/autokosmetyka" onClick={toggleServices}>
                Autokosmetyka
              </Link>
            </li>
            <li>
              <Link href="/uslugi/przyciemnianie-szyb" onClick={toggleServices}>
                Przyciemnianie szyb
              </Link>
            </li>
            <li>
              <Link href="/uslugi/korekta-lakieru" onClick={toggleServices}>
                Korekta lakieru
              </Link>
            </li>
            <li>
              <Link
                href="/uslugi/folia-ppf-ochrona-lakieru"
                onClick={toggleServices}
              >
                Folia PPF
              </Link>
            </li>
            <li>
              <Link href="/uslugi/powloka-ceramiczna" onClick={toggleServices}>
                Powłoka ceramiczna
              </Link>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default ContactMain;
