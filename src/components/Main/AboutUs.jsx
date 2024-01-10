import classes from "./AboutUs.module.scss";
import Link from "next/link";
import Image from "next/image";
import image from "../../assets/image/logo_true.png";

const AboutUs = () => {
  return (
    <section id="O-nas" className={classes.aboutMe}>
      <div>
        <Image src={image} alt="Opis obrazu" className={classes.aboutMe__img} />
      </div>
      <div className={classes.aboutMe__content}>
        <h2 className={classes.aboutMe__header}>O nas</h2>
        <ul className={classes.aboutMe__list}>
          <li>Wysoka jakość</li>
          <li>Dostępność</li>
          <li>Indywidualne podejście</li>
        </ul>
        <p className={classes.aboutMe__text}>
          W ostatnim czasie przeszliśmy szkolenia pod okiem fachowców w
          renomowanej firmie Colourlock oraz Wrapster, dzięki którym nabyliśmy
          niezbędne doświadczenie kierunku regeneracji tapicerki skórzanej oraz
          przyciemnianiu szyb samochodowych.
        </p>
        <div className={classes.buttonContainer}>
          <Link href="/O-Mnie" className={classes.realizationButton}>
            &#10132;
          </Link>
          <div className={classes.aboutMe__socialLinks}>
            <a
              href="https://www.facebook.com/profile.php?id=61554800660887"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/TwojProfilInsta"
              target="_blank"
              rel="noopener noreferrer"
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
