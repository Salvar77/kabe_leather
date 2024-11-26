import { useState } from "react";
import React from "react";
import Image from "next/image";
import useMediaQuery from "../../hooks/useMediaQuery";
import classes from "./Hero.module.scss";
import HeroImageMobile from "../../assets/image/heroMain.jpg";

const Hero = ({
  title,
  description,
  showButton,
  height = "100vh",
  mobileWhiteBlockColor = "#1D120C",
}) => {
  const [whiteBlockColor, setWhiteBlockColor] = useState(mobileWhiteBlockColor);

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <section id="hero" className={classes.hero} style={{ height }}>
        {isMobile ? (
          <div className={classes.imageWrapper}>
            <Image
              src={HeroImageMobile}
              alt="Hero Background Mobile"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        ) : null}

        <div className={classes.textOverlay}>
          <p className={classes.hero__description}>{description}</p>
          {showButton && (
            <a href="#galeria" className={classes.button}>
              Realizacje
            </a>
          )}
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
