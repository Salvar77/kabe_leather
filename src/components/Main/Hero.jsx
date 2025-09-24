import { useState } from "react";
import React from "react";
import Image from "next/image";
import useMediaQuery from "../../hooks/useMediaQuery";
import classes from "./Hero.module.scss";
import HeroImageMobile from "../../assets/image/heroMain-mobile.webp";
import HeroImageDesktop from "../../assets/image/heroMainWebpBig.webp";

const Hero = ({ height = "100vh", mobileWhiteBlockColor = "#1D120C" }) => {
  const [whiteBlockColor, setWhiteBlockColor] = useState(mobileWhiteBlockColor);
  const isMobile = useMediaQuery("(max-width: 992px)");

  const title = "KabeTintLeather Auto Detailing";
  const description = "Kompleksowe czyszczenie samochodu";

  return (
    <div>
      <section id="hero" className={classes.hero} style={{ height }}>
        <div className={classes.imageWrapper}>
          <Image
            src={isMobile ? HeroImageMobile : HeroImageDesktop}
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            objectPosition={isMobile ? "center" : "80% 20%"}
            priority
            quality={65}
            sizes="(max-width: 768px) 100vw, 100vh"
          />
        </div>

        <div className={classes.textOverlay}>
          <h1 className={classes.hero__title}>{title}</h1>
          <p className={classes.hero__description}>{description}</p>
          <a href="#galeria" className={classes.button}>
            Realizacje
          </a>
        </div>

        <div
          className={classes.whiteBlockWrapper}
          style={{ backgroundColor: whiteBlockColor }}
        >
          <div className={`${classes.whiteBlock} ${classes.whiteBlockLeft}`}>
            <div className={classes.whiteBlockTextContainer}>
              <span className={classes.whiteBlockText}>Dbałość O Detale</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
