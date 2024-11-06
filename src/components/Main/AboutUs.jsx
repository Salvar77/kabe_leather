import classes from "./AboutUs.module.scss";
import Link from "next/link";
import Image from "next/image";
import image from "../../assets/image/kabelogowhite2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandSparkles,
  faBroom,
  faCouch,
  faDog,
  faTools,
  faTint,
  faGem,
  faSun,
  faHammer,
  faWind,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <section id="O-nas" className={classes.aboutMe}>
      <div className={classes.aboutMe__image}>
        <Image
          src={image}
          alt="logo firmy do sekcji o nas"
          className={classes.aboutMe__img}
        />
      </div>
      <div className={classes.aboutMe__content}>
        <h2 className={classes.aboutMe__header}>
          Kabe Tint&Leather Auto Detailing
        </h2>
        <ul className={classes.aboutMe__list}>
          <li>
            <FontAwesomeIcon icon={faHandSparkles} className={classes.icon} />{" "}
            Myjnia ręczna
          </li>
          <li>
            <FontAwesomeIcon icon={faBroom} className={classes.icon} />{" "}
            Czyszczenie wnętrza
          </li>
          <li>
            <FontAwesomeIcon icon={faCouch} className={classes.icon} /> Pranie
            tapicerki
          </li>
          <li>
            <FontAwesomeIcon icon={faDog} className={classes.icon} /> Usuwanie
            zapachów
          </li>
          <li>
            <FontAwesomeIcon icon={faTools} className={classes.icon} />{" "}
            Renowacja tapicerki skórzanej
          </li>
          <li>
            <FontAwesomeIcon icon={faTint} className={classes.icon} />{" "}
            Czyszczenie i impregnacja tapicerki skórzanej
          </li>
          <li>
            <FontAwesomeIcon icon={faGem} className={classes.icon} /> Woskowanie
          </li>
          <li>
            <FontAwesomeIcon icon={faSun} className={classes.icon} />{" "}
            Przyciemnianie szyb samochodowych
          </li>
          <li>
            <FontAwesomeIcon icon={faHammer} className={classes.icon} /> Naprawa
            podsufitek samochodowych
          </li>
          <li>
            <FontAwesomeIcon icon={faWind} className={classes.icon} />{" "}
            Ozonowanie
          </li>
          <li>
            <FontAwesomeIcon icon={faGem} className={classes.icon} /> Korekty
            lakieru
          </li>
          <li>
            <FontAwesomeIcon icon={faShieldAlt} className={classes.icon} />{" "}
            Folia PPF
          </li>
        </ul>

        <div className={classes.buttonContainer}>
          <Link href="/cennik" className={classes.realizationButton}>
            Sprawdź cennik
          </Link>
          <div className={classes.aboutMe__socialLinks}>
            <a
              href="https://www.facebook.com/profile.php?id=61554800660887"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Odwiedź nas na Facebooku"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/kabe_tintleather_autodetailing?igsh=MWdwYzAzdmM2c2Rlbg=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Odwiedź nas na Instagramie"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
