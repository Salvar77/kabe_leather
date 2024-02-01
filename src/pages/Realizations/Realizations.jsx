import React from "react";
import Image from "next/image";
import classes from "./Realizations.module.scss";
import SliderSection from "../../components/Sliders/SliderSection";
import realizationsPhoto from "../../assets/image/realizations.jpg";
import realizationsPhoto2 from "../../assets/image/realizations2.jpg";
import realizationsPhoto3 from "../../assets/image/realizations3.jpg";
import realizationsPhoto4 from "../../assets/image/realizations4.jpg";

const Realizations = () => {
  return (
    <section id="#realizations" className={classes.realizations}>
      <h1 className={classes.realizations__header}>Realizacje</h1>

      <SliderSection
        showTitle={false}
        showButton={false}
        customBgColor={true}
      />

      <div className={classes.extraImages}>
        <Image
          src={realizationsPhoto}
          alt="Opis obrazu 1"
          className={classes.image}
        />
        <Image
          src={realizationsPhoto2}
          alt="Opis obrazu 2"
          className={classes.image}
        />
        <Image
          src={realizationsPhoto3}
          alt="Opis obrazu 2"
          className={classes.image}
        />
        <Image
          src={realizationsPhoto4}
          alt="Opis obrazu 2"
          className={classes.image}
        />
      </div>
    </section>
  );
};

export default Realizations;
