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
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const AboutUs = () => {
  return (
    <section id="o-nas" className={classes.aboutMe}>
      <div className={classes.aboutMe__image}>
        <Image
          src={image}
          alt="Logo firmy specjalizującej się w praniu tapicerki i czyszczeniu samochodów"
          className={classes.aboutMe__img}
        />
      </div>
      <div className={classes.aboutMe__content}>
        <h2 className={classes.aboutMe__header}>
          KabeTintLeather Auto Detailing
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
          <Link
            href="/cennik"
            className={classes.realizationButton}
            aria-label="Sprawdź nasz cennik usług"
          >
            Sprawdź cennik
          </Link>
          <div className={classes.aboutMe__socialLinks}>
            <a
              href="https://www.facebook.com/profile.php?id=61554800660887"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Odwiedź nas na Facebooku"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="https://www.instagram.com/kabetintleather_autodetailing/#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Odwiedź nas na Instagramie"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
