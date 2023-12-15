import Link from "next/link";
import Image from "next/image";
import classes from "./Hero.module.scss";
import heroImageMobile from "../../assets/image/hero_640.jpg";
import heroImageDesktop from "../../assets/image/hero_1920.jpg";

const Hero = () => {
  return (
    <section id="hero" className={classes.hero}>
      <div className={classes.textOverlay}>
        <h1 className={classes.hero__title}>KaBe Tint&Leather</h1>
        <p>
          Z dumą chcielibyśmy zaprezentować państwu usługi przyciemniania szyb
          samochodowych oraz regenerację tapicerki skórzanej.
        </p>
        <Link href="#services" className={classes.button}>
          Nasze usługi
        </Link>
      </div>
    </section>
  );
};

export default Hero;
