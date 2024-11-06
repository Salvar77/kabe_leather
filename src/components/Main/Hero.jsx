import { useEffect, useState } from "react";
import React from "react";
import classes from "./Hero.module.scss";

const Hero = ({
  heroImageMobile,
  heroImageDesktop,
  title,
  description,
  showTechnology,
  showButton,
  height = "100vh",
  mobileWhiteBlockColor = "#1D120C",
  desktopWhiteBlockColor = "#C8C8C8",
  customHeroTitle = "",
}) => {
  const [whiteBlockColor, setWhiteBlockColor] = useState(mobileWhiteBlockColor);

  return (
    <div>
      <section id="hero" className={classes.hero} style={{ height }}>
        <div className={classes.textOverlay}>
          <h1 className={classes.hero__title}>{title}</h1>
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
