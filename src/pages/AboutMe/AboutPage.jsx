import Image from "next/image";
import Link from "next/link";
import classes from "./AboutPage.module.scss";
import picture from "../../assets/image/logo_true9.jpg";

const AboutPage = () => {
  return (
    <section id="about" className={classes.aboutMe}>
      <div className={classes.aboutMe__content}>
        <h2 className={classes.aboutMe__header}>O mnie</h2>
        <p className={classes.aboutMe__text}>
          W ostatnim czasie przeszliśmy szkolenia pod okiem fachowców w
          renomowanej firmie Colourlock oraz Wrapster, dzieki którym nabyliśmy
          niezbędne doświadczenie kierunku regeneracji tapicerki skórzanej,
          praniu tapicerki samochodowej oraz przyciemnianiu szyb samochodowych.
        </p>
      </div>
      <div>
        <Image
          src={picture}
          alt="Logo firmy KaBe Tint&Leather"
          className={classes.aboutMe__img}
          priority
        ></Image>
      </div>
      <div className={classes.buttonContainer}>
        <Link
          href="/Realizacje"
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
