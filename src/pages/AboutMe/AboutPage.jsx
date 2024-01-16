import Image from "next/image";
import Link from "next/link";
import classes from "./AboutPage.module.scss";
import picture from "../../assets/image/logo_true6.png";

const AboutPage = () => {
  return (
    <section id="about" className={classes.aboutMe}>
      <div className={classes.aboutMe__content}>
        <h2 className={classes.aboutMe__header}>O mnie</h2>
        <p className={classes.aboutMe__text}>
          W ostatnim czasie przeszlismy szkolenia pod okiem fachowców w
          renomowanej firmie Colourlock oraz Wrapster, dzieki którym nabyliśmy
          niezbędne doświadczenie kierunku regeneracji tapicerki skórzanej oraz
          przciemnianiu szyb samochodowych.
        </p>
      </div>
      <div>
        <Image
          src={picture}
          alt="Logo firmy KaBe Tint&Leather"
          className={classes.aboutMe__img}
        ></Image>
      </div>
      <div className={classes.buttonContainer}>
        <Link
          href="/Realizations/Realizations"
          className={classes.realizationButton}
          aria-label="Zobacz nasze realizacje"
        >
          Realizacje
        </Link>
      </div>
    </section>
  );
};

export default AboutPage;
