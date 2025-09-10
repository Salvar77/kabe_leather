import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./realizacje.module.scss";
import photoRealizations from "../../assets/image/blogFotoMain3-1.jpg";
import photoRealizationsMobile from "../../assets/image/blogFotoMain3-1-mobile.webp";
import photoRealizations2 from "../../assets/image/blogFoto11.jpg";
import photoRealizations2Mobile from "../../assets/image/blogFoto11-mobile.webp";
import photoRealizations3 from "../../assets/image/tint_640.jpg";
import photoRealizations3Mobile from "../../assets/image/tint_640-mobile.webp";
// import photoDetailing from "../../assets/image/detailing.jpg";
// import photoDetailing1 from "../../assets/image/detailing1.jpg";
// import photoDetailing2 from "../../assets/image/detailing2.jpg";
// import photoDetailing3 from "../../assets/image/detailing3.jpg";
import photoLeathers1 from "../../assets/image/leathers1.jpg";
import photoLeathers2 from "../../assets/image/leathers2.jpg";
import photoLeathers3 from "../../assets/image/leathers3.jpg";
import photoLeathers4 from "../../assets/image/leathers4.jpg";
import photoLeathers5 from "../../assets/image/leathers5.jpg";
import photoLeathers6 from "../../assets/image/leathers6.jpg";
import photoTint1 from "../../assets/image/tint1.jpg";
import photoTint2 from "../../assets/image/tint2.jpg";
import photoTint3 from "../../assets/image/tint3.jpg";
import photoAutoscmetic1 from "../../assets/image/autocosmetic1.jpg";
import photoAutoscmetic2 from "../../assets/image/autocosmetic2.jpg";
import photoAutoscmetic3 from "../../assets/image/autocosmetic.png";
import photoAutoscmetic4 from "../../assets/image/autocosmetic5.jpg";
import photoAutoscmetic5 from "../../assets/image/autocosmetic6.jpg";
import photoAutoscmetic6 from "../../assets/image/autocosmetic7.jpg";

import photoClean from "../../assets/image/hero_main.jpg";
import photoCleanMobile from "../../assets/image/hero_main-mobile.webp";
import photoCleaning from "../../assets/image/cleaning.jpg";
import photoCleaning2 from "../../assets/image/cleaning2.jpg";
import photoCleaning3 from "../../assets/image/cleaning3.jpg";
import photoCorrection from "../../assets/image/paintCorrection.jpg";
import photoCorrectionMobile from "../../assets/image/paintCorrection-mobile2.webp";
// import photoCorrection2 from "../../assets/image/paintCorrection2.jpg";
import photoCorrection3 from "../../assets/image/paintCorrection3.jpg";
// import photoCorrection4 from "../../assets/image/paintCorrection4.jpeg";
import photoCorrection5 from "../../assets/image/paintCorrection5.jpeg";
import photoCorrection6 from "../../assets/image/paintCorrection6.JPG";
import photoCorrection7 from "../../assets/image/paintCorrection7.JPG";
import photoCorrection8 from "../../assets/image/paintCorrection8.JPG";
import photoCorrection9 from "../../assets/image/paintCorrection9.JPG";
import photoFoilPpf from "../../assets/image/ppf.webp";
import photoFoilPpfMobile from "../../assets/image/ppf-mobile.webp";
import photoFoilPpf2 from "../../assets/image/ppf2.jpg";
import photoFoilPpf3 from "../../assets/image/ppf3.jpg";
import photoFoilPpf4 from "../../assets/image/ppf4.jpeg";
import ceramicCoatingImage from "../../assets/image/ceramicCoating.jpeg";
import ceramicCoatingImageMobile from "../../assets/image/ceramicCoating-mobile.webp";
import ceramicCoatingImage2 from "../../assets/image/ceramicCoating2.jpeg";
import { headlightPolishing } from "../../../utils";
import { headlightPolishingMobile } from "../../../utils";
import { headlightPolishing2 } from "../../../utils";
import { headlightPolishing3 } from "../../../utils";
import { headlightPolishing4 } from "../../../utils";
// import photoAutoscmetic4 from "../../assets/image/autocosmetic4.jpg";
// import fotoo from "../../assets/image/detailing1.jpg";
// import fotoo1 from "../../assets/image/detailing2.jpg";
// import fotoo2 from "../../assets/image/detailing3.jpg";
// import mercedes from "../../assets/image/merc.png";
// import bmw from "../../assets/image/bmw.png";
// import audi from "../../assets/image/audi.png";
// import mercedes1 from "../../assets/image/merc1.jpg";
// import bmw1 from "../../assets/image/bmw1.jpg";
// import audi1 from "../../assets/image/audi1.jpg";
import SEO from "@/components/Main/SEO";

export const realizationsData = [
  {
    id: "pranie-tapicerki",
    description: "Pranie Tapicerki",
    images: [photoCleaning, photoCleaning2, photoCleaning3],
    image: photoCleanMobile,
    largeImage: photoClean,
    largeImageWidth: 1920,

    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    // brands: [
    //   { src: audi.src, alt: "Audi", backgroundImage: audi1 },
    //   { src: mercedes.src, alt: "Mercedes", backgroundImage: mercedes1 },
    //   { src: bmw.src, alt: "BMW", backgroundImage: bmw1 },
    // ],
  },
  {
    id: "renowacja-i-czyszczenie-skor",
    description: "Renowacja i Czyszczenie Skór",
    images: [
      photoLeathers1,
      photoLeathers2,
      photoLeathers3,
      photoLeathers4,
      photoLeathers5,
      photoLeathers6,
    ],
    image: photoRealizationsMobile,
    largeImage: photoRealizations,
    largeImageWidth: 1920,

    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    // brands: [
    //   { src: audi.src, alt: "Audi", backgroundImage: audi1 },
    //   { src: mercedes.src, alt: "Mercedes", backgroundImage: mercedes1 },
    //   { src: bmw.src, alt: "BMW", backgroundImage: bmw1 },
    // ],
  },
  {
    id: "autokosmetyka",
    description: "Autokosmetyka",
    images: [
      photoAutoscmetic3,
      photoAutoscmetic2,
      photoAutoscmetic1,
      photoAutoscmetic4,
      photoAutoscmetic5,
      photoAutoscmetic6,
    ],
    image: photoRealizations2Mobile,
    largeImage: photoRealizations2,
    largeImageWidth: 1920,

    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    // brands: [
    //   {
    //     src: audi.src,
    //     alt: "Audi",
    //     backgroundImage: audi1,
    //     images: fotoo2, // Dodane zdjęcia dla Audi
    //   },
    //   {
    //     src: mercedes.src,
    //     alt: "Mercedes",
    //     backgroundImage: mercedes1,
    //     images: fotoo1, // Dodane zdjęcia dla Mercedes
    //   },
    //   {
    //     src: bmw.src,
    //     alt: "BMW",
    //     backgroundImage: bmw1,
    //     images: fotoo, // Dodane zdjęcia dla BMW
    //   },
    // ],
  },
  {
    id: "przyciemnianie-szyb",
    description: "Przyciemnianie Szyb",
    images: [photoTint3, photoTint2, photoTint1],
    image: photoRealizations3Mobile,
    largeImage: photoRealizations3,
    largeImageWidth: 1920,

    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    // brands: [
    //   {
    //     src: audi.src,
    //     alt: "Audi",
    //     backgroundImage: audi1,
    //     images: photoRealizations3,
    //   },
    //   {
    //     src: mercedes.src,
    //     alt: "Mercedes",
    //     backgroundImage: mercedes1,
    //     images: photoRealizations3,
    //   },
    //   {
    //     src: bmw.src,
    //     alt: "BMW",
    //     backgroundImage: bmw1,
    //     images: photoRealizations3,
    //   },
    // ],
  },
  {
    id: "korekta-lakieru",
    description: "Korekta Lakieru",
    images: [
      photoCorrection,
      photoCorrection6,
      // photoCorrection7,
      // photoCorrection8,
      photoCorrection9,
      photoCorrection3,
      photoCorrection5,
    ],
    image: photoCorrectionMobile,
    largeImage: photoCorrection,
    largeImageWidth: 1920,

    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
  },
  {
    id: "folia-ppf-ochrona-lakieru",
    description: "Folia PPF",
    images: [photoFoilPpf2, photoFoilPpf3, photoFoilPpf4],
    image: photoFoilPpfMobile,
    largeImage: photoFoilPpf,
    largeImageWidth: 1920,

    gradient: "linear-gradient(rgba(38, 32, 32, 0.5), rgba(40, 31, 31, 0.5))",
  },
  {
    id: "powloka-ceramiczna",
    description: "Powłoka Ceramiczna",
    images: [ceramicCoatingImage, ceramicCoatingImage2],
    image: ceramicCoatingImageMobile,
    largeImage: ceramicCoatingImage,
    largeImageWidth: 1920,

    gradient: "linear-gradient(rgba(38, 32, 32, 0.5), rgba(40, 31, 31, 0.5))",
  },
  {
    id: "polerowanie-reflektorow",
    description: "Polerowanie Reflektorów",
    images: [
      headlightPolishing,
      headlightPolishing4,
      headlightPolishing2,
      headlightPolishing3,
    ],
    image: headlightPolishingMobile,
    largeImage: headlightPolishing,
    largeImageWidth: 1920,

    gradient: "linear-gradient(rgba(38, 32, 32, 0.5), rgba(40, 31, 31, 0.5))",
  },
];

const Realizations = () => {
  return (
    <div className={classes.background}>
      <SEO
        title="KabeTintLeather - Pranie tapicerki samochodowej Opole"
        description="Zobacz nasze przykładowe realizacje w KabeTintLeather Auto Detailing. Profesjonalne pranie tapicerki, renowacja skóry, autokosmetyka i przyciemnianie szyb."
        image="https://www.kabetintleather.opole.pl/autocosmetic.jpg"
        url="https://www.kabetintleather.opole.pl/realizacje"
      />
      <section id="realizacje" className={classes.realizations}>
        <h1>Realizacje</h1>
        <div className={classes.realizations__wrapper}>
          {realizationsData.map((realization) => (
            <div key={realization.id} className={classes.realizations__item}>
              <div
                className={classes.realizations__imageWrapper}
                style={{ backgroundImage: realization.gradient }}
              >
                <Image
                  src={realization.image}
                  alt={`Realizacja - ${realization.description}`}
                  sizes="(max-width: 991px) 100vw, 0"
                  className={`${classes.realizations__image} ${classes.mobileImage}`}
                  priority={index === 0}
                />
                <Image
                  src={realization.largeImage}
                  alt={`Realizacja - ${realization.description} - wersja desktop`}
                  sizes="(min-width: 992px) 100vw, 0"
                  className={`${classes.realizations__image} ${classes.desktopImage}`}
                />
                <div className={classes.realizations__content}>
                  <p>{realization.description}</p>
                  <Link
                    href={`/realizacje/${realization.id}`}
                    className={classes.realizations__button}
                    aria-label={`Zobacz więcej o realizacji: ${realization.description}`}
                    priority={index === 0}
                  >
                    &#10132;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Realizations;
