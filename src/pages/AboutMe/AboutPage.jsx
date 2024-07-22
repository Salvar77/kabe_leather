import Image from "next/image";
import Link from "next/link";
import classes from "./AboutPage.module.scss";
import picture from "../../assets/image/LOGO.jpg";

const AboutPage = () => {
  return (
    <section id="about" className={classes.aboutMe}>
      <div className={classes.aboutMe__content}>
        <h2 className={classes.aboutMe__header}>O mnie</h2>
        <p className={classes.aboutMe__text}>
          KaBe Tint&Leather Pranie Tapicerki , Renowacja/Czyszczenie skór ,
          Przyciemnianie szyb samochodowych. Specjalizujemy się w profesjonalnym
          praniu tapicerki samochodowej, czyszczeniu oraz naprawie wyrobów
          skórzanych, oraz przyciemnianiu szyb. Renowacja Tapicerki skórzanej to
          usługa dla osób które chcą by ich tapicerka odzyskała blask. Nasze
          usługi to gwarancja wysokiej jakości i precyzji. Zadzwoń lub odwiedź
          nas już dziś, a my zadbamy o Twój samochód.
        </p>
      </div>
      <div className={classes.aboutMe__box}>
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
