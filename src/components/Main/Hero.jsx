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

  useEffect(() => {
    const handleResize = () => {
      const heroSection = document.getElementById("hero");
      const viewportHeight = window.innerHeight;
      heroSection.style.height = `${viewportHeight}px`;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="hero" className={classes.hero}>
      <div className={classes.imageContainer}>
        <Image
          src={currentImage}
          alt="Hero grafika"
          fill={true}
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className={classes.textOverlay}>
        <h1 className={classes.hero__title}>KaBe Tint&Leather</h1>
        <p>
          Usługi przyciemniania szyb samochodowych oraz regeneracja tapicerki
          skórzanej.
        </p>
        <Link href="#usługi" className={classes.button}>
          Nasze usługi
        </Link>
      </div>
    </section>
  );
};

export default Hero;
