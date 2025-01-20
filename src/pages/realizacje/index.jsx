import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./realizacje.module.scss";
import photoRealizations from "../../assets/image/blogFotoMain3-1.jpg";
import photoRealizations2 from "../../assets/image/blogFoto11.jpg";
import photoRealizations3 from "../../assets/image/tint_640.jpg";
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
import photoAutoscmetic5 from "../../assets/image/blogPhoto3.jpg";
import photoAutoscmetic6 from "../../assets/image/autocosmetic7-1.jpg";
import photoClean from "../../assets/image/hero_main.jpg";
import photoCleaning from "../../assets/image/cleaning.jpg";
import photoCleaning2 from "../../assets/image/cleaning2.jpg";
import photoCleaning3 from "../../assets/image/cleaning3.jpg";
import photoCleaning4 from "../../assets/image/cleaning4.jpg";
import photoCorrection from "../../assets/image/paintCorrection.jpg";
import photoCorrection1 from "../../assets/image/paintCorrection1.jpg";
import photoCorrection2 from "../../assets/image/paintCorrection2.jpg";
import photoCorrection3 from "../../assets/image/paintCorrection3.jpg";
import photoFoilPpf from "../../assets/image/ppf.webp";
import photoFoilPpf2 from "../../assets/image/ppf2.jpg";
import photoFoilPpf3 from "../../assets/image/ppf3.jpg";
import ceramicCoatingImage from "../../assets/image/ceramicCoating.jpeg";
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
    images: [photoCleaning, photoCleaning2, photoCleaning3, photoCleaning4],
    image: photoClean,
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
    image: photoRealizations,
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
    image: photoRealizations2,
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
    image: photoRealizations3,
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
      photoCorrection1,
      photoCorrection2,
      photoCorrection3,
    ],
    image: photoCorrection,
    largeImage: photoCorrection,
    largeImageWidth: 1920,

    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
  },
  {
    id: "folia-ppf-ochrona-lakieru",
    description: "Folia PPF",
    images: [photoFoilPpf2, photoFoilPpf3],
    image: photoFoilPpf,
    largeImage: photoFoilPpf,
    largeImageWidth: 1920,

    gradient: "linear-gradient(rgba(38, 32, 32, 0.5), rgba(40, 31, 31, 0.5))",
  },
  {
    id: "powloka-ceramiczna",
    description: "Powłoka Ceramiczna",
    images: [ceramicCoatingImage],
    image: ceramicCoatingImage,
    largeImage: ceramicCoatingImage,
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
        image="https://www.kabetintleather.opole.pl/autocosmetic.png"
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
                  alt={`Realizacja - ${realization.description} - profesjonalne pranie tapicerki, czyszczenie samochodu, przyciemnianie szyb`}
                />
                <div className={classes.realizations__content}>
                  <p>{realization.description}</p>
                  <Link
                    href={`/realizacje/${realization.id}`}
                    className={classes.realizations__button}
                    aria-label={`Zobacz więcej o realizacji: ${realization.description}`}
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
