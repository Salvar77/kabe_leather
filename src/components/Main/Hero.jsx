import { useEffect, useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import classes from "./Hero.module.scss";
import { slideRotate, blurUp, staggerContainer } from "../../../utils/motion";

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
        <motion.div
          className={classes.textOverlay}
          variants={staggerContainer(0.2, 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <motion.h1
            className={classes.hero__title}
            variants={slideRotate(0.2, 1)}
          >
            {title}
          </motion.h1>
          <motion.p
            className={classes.hero__description}
            variants={blurUp(0.3, 1)}
          >
            {description}
          </motion.p>
          {showButton && (
            <motion.a
              href="#galeria"
              className={classes.button}
              variants={blurUp(0.4, 1)}
            >
              Realizacje
            </motion.a>
          )}
        </motion.div>
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
