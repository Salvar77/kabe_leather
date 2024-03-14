import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./Realizations.module.scss";
import photoRealizations from "../../assets/image/hero2_640.jpg";
import photoRealizations2 from "../../assets/image/detailing.jpg";
import photoRealizations3 from "../../assets/image/tint_640.jpg";
import photoDetailing from "../../assets/image/detailing.jpg";
import photoDetailing1 from "../../assets/image/detailing1.jpg";
import photoDetailing2 from "../../assets/image/detailing2.jpg";
import photoDetailing3 from "../../assets/image/detailing3.jpg";
import fotoo from "../../assets/image/detailing1.jpg";
import fotoo1 from "../../assets/image/detailing2.jpg";
import fotoo2 from "../../assets/image/detailing3.jpg";
import mercedes from "../../assets/image/merc.png";
import bmw from "../../assets/image/bmw.png";
import audi from "../../assets/image/audi.png";
import mercedes1 from "../../assets/image/merc1.JPG";
import bmw1 from "../../assets/image/bmw1.JPG";
import audi1 from "../../assets/image/audi1.JPG";

export const realizationsData = [
  {
    id: "renowacje-skor",
    description: "Renowacje Skór",
    image: photoRealizations,
    largeImage: photoRealizations, // Zakładam, że masz to samo zdjęcie w dużej wersji
    largeImageWidth: 1920,

    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    brands: [
      { src: audi.src, alt: "Audi", backgroundImage: audi1 },
      { src: mercedes.src, alt: "Mercedes", backgroundImage: mercedes1 },
      { src: bmw.src, alt: "BMW", backgroundImage: bmw1 },
    ],
  },
  {
    id: "autokosmetyka",
    description: "Autokosmetyka",
    images: [photoDetailing1, photoDetailing2, photoDetailing3],
    image: photoRealizations2,
    largeImage: photoRealizations3, // Podobnie, zakładam użycie tego samego zdjęcia
    largeImageWidth: 1920,

    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    brands: [
      {
        src: audi.src,
        alt: "Audi",
        backgroundImage: audi1,
        images: fotoo2, // Dodane zdjęcia dla Audi
      },
      {
        src: mercedes.src,
        alt: "Mercedes",
        backgroundImage: mercedes1,
        images: fotoo1, // Dodane zdjęcia dla Mercedes
      },
      {
        src: bmw.src,
        alt: "BMW",
        backgroundImage: bmw1,
        images: fotoo, // Dodane zdjęcia dla BMW
      },
    ],
  },
  {
    id: "przyciemnianie-szyb",
    description: "Bezinwazyjne Przyciemnianie Szyb",
    images: [photoRealizations3, photoRealizations3, photoRealizations3],
    image: photoRealizations3,
    largeImage: photoRealizations3, // I tutaj to samo
    largeImageWidth: 1920,

    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    brands: [
      {
        src: audi.src,
        alt: "Audi",
        backgroundImage: audi1,
        images: photoRealizations3,
      },
      {
        src: mercedes.src,
        alt: "Mercedes",
        backgroundImage: mercedes1,
        images: photoRealizations3,
      },
      {
        src: bmw.src,
        alt: "BMW",
        backgroundImage: bmw1,
        images: photoRealizations3,
      },
    ],
  },
];

const Realizations = () => {
  return (
    <section id="realizacje" className={classes.realizations}>
      <h2>Realizacje</h2>
      <div className={classes.realizations__wrapper}>
        {realizationsData.map((realization) => (
          <div key={realization.id} className={classes.realizations__item}>
            <div
              className={classes.realizations__imageWrapper}
              style={{ backgroundImage: realization.gradient }}
            >
              <Image src={realization.image} alt={realization.description} />
              <div className={classes.realizations__content}>
                <p>{realization.description}</p>
                <Link
                  href={`/Realizacje/${realization.id}`}
                  className={classes.realizations__button}
                >
                  &#10132;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Realizations;
