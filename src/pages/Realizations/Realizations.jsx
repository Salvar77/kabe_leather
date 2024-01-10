import React from "react";
import SliderSection from "../../components/Sliders/SliderSection";
import classes from "./Realizations.module.scss";

const Realizations = () => {
  return (
    <section id="#realizations" className={classes.realizations}>
      <h1 className={classes.realizations__header}>Realizacje</h1>

      <SliderSection
        showTitle={false}
        showButton={false}
        customBgColor={true}
      />
    </section>
  );
};

export default Realizations;
