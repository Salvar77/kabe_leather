import ElfsightWidget from "@/components/Main/ElfsightWidget";
import classes from "./referencje.module.scss";
import Image from "next/image";
import React from "react";
import { referencyImages } from "../../../constants";
import SEO from "@/components/Main/SEO";

const Referency = () => {
  return (
    <div>
      <SEO
        title="Referencje - Kabe Tint&Leather Pranie tapicerki, Czyszczenie samochodu, Czyszczenie tapicerki"
        description="Sprawdź opinie naszych zadowolonych klientów! Referencje i zdjęcia z realizacji Kabe Tint&Leather Auto Detailing - Pranie tapicerki, Czyszczenie samochodu, Czyszczenie tapicerki."
        image="https://www.kabetintleather.opole.pl/kabelogooo.webp"
        url="https://www.kabetintleather.opole.pl/referencje"
      />
      <section id="referencje" className={classes.referencySection}>
        <h1>Referencje</h1>
        <div className={classes.photosContainer}>
          {referencyImages.map((photo, index) => {
            return (
              <Image
                key={index}
                src={photo.src}
                alt={`Referencje - ${photo.alt} - pranie tapicerki, czyszczenie samochodu`}
              />
            );
          })}
        </div>
        <ElfsightWidget />
      </section>
    </div>
  );
};

export default Referency;
