import ElfsightWidget from "@/components/Main/ElfsightWidget";
import classes from "./Referency.module.scss";
import Image from "next/image";
import React from "react";
import { referencyImages } from "../../../constants";

const Referency = () => {
  return (
    <section id="referencje" className={classes.referencySection}>
      <h2>Referencje</h2>
      <div className={classes.photosContainer}>
        {referencyImages.map((photo, index) => {
          return <Image key={index} src={photo.src} alt={photo.alt} />;
        })}
      </div>
      <ElfsightWidget />
    </section>
  );
};

export default Referency;
