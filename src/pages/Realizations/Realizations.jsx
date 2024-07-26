import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./Realizations.module.scss";
import photoRealizations from "../../assets/image/hero2_640.jpg";
import photoRealizations2 from "../../assets/image/detailing.jpg";
import photoRealizations3 from "../../assets/image/tint_640.jpg";
// import photoDetailing from "../../assets/image/detailing.jpg";
// import photoDetailing1 from "../../assets/image/detailing1.jpg";
// import photoDetailing2 from "../../assets/image/detailing2.jpg";
// import photoDetailing3 from "../../assets/image/detailing3.jpg";
import photoLeathers1 from "../../assets/image/leathers1.jpg";
import photoLeathers2 from "../../assets/image/leathers2.jpg";
import photoLeathers3 from "../../assets/image/leathers3.jpg";
import photoLeathers4 from "../../assets/image/leathers4.jpg";
import photoTint1 from "../../assets/image/tint1.jpg";
import photoTint2 from "../../assets/image/tint2.jpg";
import photoTint3 from "../../assets/image/tint3.jpg";
import photoAutoscmetic1 from "../../assets/image/autocosmetic1.jpg";
import photoAutoscmetic2 from "../../assets/image/autocosmetic2.jpg";
import photoAutoscmetic3 from "../../assets/image/autocosmetic.png";
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

export const realizationsData = [
  {
    id: "renowacje-skor",
    description: "Renowacje Skór",
    images: [photoLeathers1, photoLeathers2, photoLeathers3, photoLeathers4],
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
    images: [photoAutoscmetic1, photoAutoscmetic2, photoAutoscmetic3],
    image: photoRealizations2,
    largeImage: photoRealizations3,
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

// import { useRouter } from "next/router";
// import { useState } from "react";
// import Link from "next/link";
// import React from "react";
// import Image from "next/image";
// import classes from "./RealizationsPage.module.scss";
// import styles from "../../../components/Sliders/SliderSection.module.scss";
// import SliderTrue from "@/components/Sliders/SliderTrue";
// import { realizationsData } from "../Realizations";
// import SliderSection from "@/components/Sliders/SliderSection";
// import beforeImage from "../../../assets/image/detailing5.jpg";
// import afterImage from "../../../assets/image/detailing4.jpg";
// import beforeImage1 from "../../../assets/image/renovation_4.jpg";
// import afterImage1 from "../../../assets/image/renovation_3.jpg";
// import real from "../../../assets/image/realizations.jpg";
// import real1 from "../../../assets/image/realizations2.jpg";
// import real2 from "../../../assets/image/realizations3.jpg";
// import real3 from "../../../assets/image/realizations4.jpg";

// const SingleImage = ({ src, alt }) => {
//   return <Image src={src} alt={alt} />;
// };

// const RealizationDetail = () => {
//   const router = useRouter();
//   const { realizationId } = router.query;
//   const [selectedBrand, setSelectedBrand] = useState(null);

//   if (!realizationId) return null;

//   const realization = realizationsData.find(
//     (item) => item.id === realizationId
//   );

//   if (!realization) return <p>Nie został znaleziony</p>;

//   const handleBrandSelect = (brand) => {
//     setSelectedBrand(brand);
//   };

//   const handleResetBrandSelection = () => {
//     setSelectedBrand(null);
//   };

//   const renderBrands = () => (
//     <div>
//       <div className={classes.realizationDetail__brandsList}>
//         <h3>Wybierz markę samochodu:</h3>
//         <div className={classes.realizationDetail__brandsListBox}>
//           {realization.brands?.map((brand, index) => (
//             <div
//               key={index}
//               onClick={() => handleBrandSelect(brand)}
//               className={classes.brandImageContainer}
//               style={{ cursor: "pointer", margin: "10px" }}
//             >
//               <div className={classes.backgroundImageWrapper}>
//                 <Image
//                   src={brand.backgroundImage}
//                   alt={`${brand.alt} background`}
//                   quality={100}
//                   className={classes.backgroundImage}
//                   priority
//                 />
//                 <div className={classes.gradientOverlay}></div>
//               </div>
//               <Image
//                 src={brand.src}
//                 alt={brand.alt}
//                 width={190}
//                 height={190}
//                 className={classes.brandLogo}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Przycisk "Powrót do wyboru kategorii" umieszczony poza głównym kontenerem flex */}
//       <div
//         style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
//       >
//         <Link href="/realizacje">
//           <button className={classes.resetButton}>
//             Powrót do wyboru kategorii
//           </button>
//         </Link>
//       </div>
//     </div>
//   );

//   // Zaktualizowana logika renderowania zawartości
//   const renderContent = () => {
//     // Jeśli marka nie została wybrana, renderuj funkcję renderBrands
//     if (!selectedBrand) {
//       return renderBrands();
//     }

//     const resetSelectionButtonForSliderSection = (
//       <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
//         <button
//           onClick={handleResetBrandSelection}
//           className={`${classes.resetButton} ${classes.resetButtonCentered}`}
//         >
//           Powrót do wyboru marek
//         </button>
//       </div>
//     );

//     const resetSelectionButton = (
//       <button
//         onClick={handleResetBrandSelection}
//         className={classes.resetButton}
//       >
//         Powrót do wyboru marek
//       </button>
//     );

//     switch (realization.id) {
//       case "renowacje-skor":
//         // Tu zachowaj oryginalną logikę dla SliderSection
//         return (
//           <>
//             <SliderSection
//               showTitle={false}
//               showButton={false}
//               maxImagesToShow={4}
//               additionalClass={styles.noBackground}
//             />

//             <div className={classes.realizationDetail__real}>
//               <div className={classes.imageHover}>
//                 <Image src={real} />
//               </div>
//               <div className={classes.imageHover}>
//                 <Image src={real1} />
//               </div>
//               <div className={classes.imageHover}>
//                 <Image src={real2} />
//               </div>
//               <div className={classes.imageHover}>
//                 <Image src={real3} />
//               </div>
//             </div>
//             {resetSelectionButton}
//           </>
//         );

//       case "autokosmetyka":
//         // Dla tych sekcji, wyświetl obrazy związane z wybraną marką
//         return (
//           <>
//             <div className={classes.realizationDetail__imageWrapper}>
//               <SingleImage src={selectedBrand.images} alt={selectedBrand.alt} />
//             </div>
//             <div>
//               <SliderTrue
//                 beforeImage={beforeImage}
//                 afterImage={afterImage}
//               ></SliderTrue>
//             </div>
//             {resetSelectionButton}
//           </>
//         );
//       case "przyciemnianie-szyb":
//         // Dla tych sekcji, wyświetl obrazy związane z wybraną marką
//         return (
//           <>
//             <div className={classes.realizationDetail__imageWrapper}>
//               {/* Tutaj przykład dynamicznego wyświetlania jednego obrazu dla wybranej marki.
//                       Możesz dostosować, aby pokazywać więcej obrazów lub inaczej je wybierać. */}
//               <SingleImage src={selectedBrand.images} alt={selectedBrand.alt} />
//             </div>
//             {resetSelectionButton}
//           </>
//         );
//       default:
//         return (
//           <>
//             <p>Nieobsługiwane ID</p>
//             {resetSelectionButton}
//           </>
//         );
//     }
//   };

//   return (
//     <section id="realizacje" className={classes.realizationDetail}>
//       <h1 className={classes.realizationDetail__header}>
//         {realization.description}
//       </h1>
//       <div className={classes.realizationDetail__box}>{renderContent()}</div>
//     </section>
//   );
// };

// export default RealizationDetail;
