import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import classes from "./Hero.module.scss";
import heroImageMobile from "../../assets/image/hero2_640.jpg";
import heroImageDesktop from "../../assets/image/hero2_1920.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(heroImageMobile);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");

    const handleMediaQueryChange = (e) => {
      setCurrentImage(e.matches ? heroImageDesktop : heroImageMobile);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section id="hero" className={classes.hero}>
      <div className={classes.imageContainer}>
        <Image
          src={currentImage}
          alt="Hero"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
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
