import React from "react";
import Image from "next/image";
import SliderTrue from "../../components/Sliders/SliderTrue"; // Upewnij się, że ścieżka jest poprawna
import SliderSection from "../../components/Sliders/SliderSection"; // Upewnij się, że ścieżka jest poprawna
import classes from "./Realizations.module.scss";
import sliderClasses from "../../components/Sliders/SliderSection.module.scss"; // Upewnij się, że ścieżka jest poprawna
import BeforeImage1 from "../../assets/image/renovation_7.jpg";
import AfterImage1 from "../../assets/image/renovation_8.jpg";
import BeforeImage2 from "../../assets/image/renovation_4.jpg";
import AfterImage2 from "../../assets/image/renovation_3.jpg";
import BeforeImage3 from "../../assets/image/renovation_6.png";
import AfterImage3 from "../../assets/image/renovation_5.png";
import BeforeImage4 from "../../assets/image/renovation_8-1.jpg";
import AfterImage4 from "../../assets/image/renovation_7-1.jpg";
import BeforeImage5 from "../../assets/image/renovation_9.jpg";
import AfterImage5 from "../../assets/image/renovation_9-1.jpg";
// Załóżmy, że te importy obrazów są poprawne
import realizationsPhoto from "../../assets/image/realizations.jpg";
import realizationsPhoto2 from "../../assets/image/realizations2.jpg";
import realizationsPhoto3 from "../../assets/image/realizations3.jpg";
import realizationsPhoto4 from "../../assets/image/realizations4.jpg";

const Realizations = () => {
  return (
    <section className={`${classes.realizations} realizationsPage`}>
      <h1 className={classes.realizations__header}>Realizacje</h1>

      <div className={classes.slidersContainer}>
        <SliderTrue beforeImage={BeforeImage1} afterImage={AfterImage1} />
        <SliderTrue beforeImage={BeforeImage2} afterImage={AfterImage2} />
        <SliderTrue beforeImage={BeforeImage3} afterImage={AfterImage3} />
        <SliderTrue beforeImage={BeforeImage4} afterImage={AfterImage4} />
        <SliderTrue beforeImage={BeforeImage5} afterImage={AfterImage5} />
      </div>

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
          alt="Opis obrazu 3"
          className={classes.image}
        />
        <Image
          src={realizationsPhoto4}
          alt="Opis obrazu 4"
          className={classes.image}
        />
      </div>
    </section>
  );
};

export default Realizations;
