import styles from "./AboutUs.module.scss";
import Link from "next/link";
import Image from "next/image";
import image from "../../assets/image/hero3_640.jpg";

const AboutUs = () => {
  return (
    <section id="aboutUs" className={styles.aboutUs}>
      <div>
        <Image
          className={styles.aboutUs__img}
          src={image}
          alt="Opis obrazu"
          width={500}
          height={300}
        />
      </div>
      <div className={styles.aboutUs__boxText}>
        <h2 className={styles.sectionHeading}>O nas</h2>
        <ul>
          <li>Wysoka jakość</li>
          <li>Dostępność</li>
          <li>Indywidualne podejście</li>
        </ul>
        <p className={styles.aboutUs__info}>
          W ostatnim czasie przeszlismy szkolenia pod okiem fachowców w
          renomowanej firmie Colourlock oraz Wrapster, dzieki którym nabyliśmy
          niezbędne doświadczenie kierunku regeneracji tapicerki skórzanej oraz
          przciemnianiu szyb samochodowych.
        </p>
        <Link href="/AboutMe/about" className={styles.aboutUs__btn}>
          &#10132;
        </Link>
        <div className={styles.links}>
          <a
            href="https://www.youtube.com/user/TwojaNazwaUzytkownika"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.facebook.com/TwojaNazwaUzytkownika"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/moon.julu88/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
