import classes from "./AboutUs.module.scss";
import Link from "next/link";
import Image from "next/image";
import image from "../../assets/image/LOGO.jpg";

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
        <h2 className={classes.aboutMe__header}>O nas</h2>
        <ul className={classes.aboutMe__list}>
          <ul>
            <li>⭐️ Myjnia ręczna</li>
            <li>⭐️ Czyszczenie wnętrza</li>
            <li>⭐️ Pranie tapicerki</li>
            <li>⭐️ Pozbywanie się zapachów np. po zwierzętach</li>
            <li>⭐️ Renowacja tapicerki skórzanej</li>
            <li>⭐️ Czyszczenie i impregnacja tapicerki skórzanej</li>
            <li>⭐️ Woskowanie</li>
            <li>⭐️ Przyciemnianie szyb samochodowych</li>
            <li>⭐️ Naprawa podsufitek samochodowych</li>
            <li>⭐️ Ozonowanie</li>
          </ul>
        </ul>

        <div className={classes.buttonContainer}>
          <Link href="/O-Mnie" className={classes.realizationButton}>
            &#10132;
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
              href="https://www.instagram.com/kabe_autokosmetyka"
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
