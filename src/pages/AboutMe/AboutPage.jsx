import Image from "next/image";
import Link from "next/link";
import classes from "./AboutPage.module.scss";
import picture from "../../assets/image/kabelogowhite2.jpg";

const AboutPage = () => {
  return (
    <section id="about" className={classes.aboutMe}>
      <h2 className={classes.aboutMe__header}>O mnie</h2>
      <div className={classes.aboutMe__grid}>
        <div className={classes.aboutMe__content}>
          <p className={classes.aboutMe__text}>
            <span className={classes.aboutMe__highlightText}>
              Kabe Tint&Leather Auto Detailing.
            </span>{" "}
            Specjalizujemy się w profesjonalnym praniu tapicerki samochodowej,
            czyszczeniu oraz naprawie wyrobów skórzanych, oraz przyciemnianiu
            szyb. Renowacja Tapicerki skórzanej to usługa dla osób które chcą by
            ich tapicerka odzyskała blask. Nasze usługi to gwarancja wysokiej
            jakości i precyzji. Zadzwoń lub odwiedź nas już dziś, a my zadbamy o
            Twój samochód!
          </p>
        </div>
        <div className={classes.aboutMe__box}>
          <Image
            src={picture}
            alt="Logo firmy KaBe"
            className={classes.aboutMe__img}
            priority
          />
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
