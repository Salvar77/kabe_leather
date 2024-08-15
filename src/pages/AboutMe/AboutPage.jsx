import Image from "next/image";
import Link from "next/link";
import classes from "./AboutPage.module.scss";
import picture from "../../assets/image/newLogoWhite.JPG";

const AboutPage = () => {
  return (
    <section id="about" className={classes.aboutMe}>
      <h2 className={classes.aboutMe__header}>O mnie</h2>
      <div className={classes.aboutMe__grid}>
        <div className={classes.aboutMe__content}>
          <p className={classes.aboutMe__text}>
            Kabe Autokosmetyka Pranie Tapicerki Opole, Przyciemnianie szyb.
            Specjalizujemy się w profesjonalnym praniu tapicerki samochodowej,
            czyszczeniu oraz naprawie wyrobów skórzanych, oraz przyciemnianiu
            szyb. Renowacja Tapicerki skórzanej to usługa dla osób które chcą by
            ich tapicerka odzyskała blask. Nasze usługi to gwarancja wysokiej
            jakości i precyzji. Zadzwoń lub odwiedź nas już dziś, a my zadbamy o
            Twój samochód.
          </p>
        </div>
        <div className={classes.aboutMe__box}>
          <Image
            src={picture}
            alt="Logo firmy KaBe"
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
      </div>
    </section>
  );
};

export default AboutPage;
