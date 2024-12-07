import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import classes from "./realizacjeStrona.module.scss";
import { realizationsData } from "../realizacje";
import Link from "next/link";
import SEO from "@/components/Main/SEO";

const RealizationDetail = ({ realization }) => {
  if (!realization) return <p>Nie został znaleziony</p>;

  const renderContent = () => {
    return (
      <div className={classes.realizationDetail__images}>
        {realization.images.map((image, index) => (
          <div key={index} className={classes.realizationDetail__imageWrapper}>
            <Image
              src={image}
              alt={`${realization.description} - ${
                index + 1
              } - pranie tapicerki, czyszczenie samochodu, przyciemnianie szyb`}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <SEO
        title={`${realization.description} - Realizacja Kabe Tint&Leather`}
        description={`Zobacz szczegóły realizacji: ${realization.description}. Profesjonalne usługi w Kabe Tint&Leather Auto Detailing.`}
        image={
          realization.largeImage ||
          "https://www.kabetintleather.opole.pl/autocosmetic.png"
        }
        url={`https://www.kabetintleather.opole.pl/realizacje/${realization.id}`}
      />
      <section id="realizacje" className={classes.realizationDetail}>
        <h1 className={classes.realizationDetail__header}>
          {realization.description}
        </h1>
        <div className={classes.realizationDetail__box}>{renderContent()}</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Link href="/realizacje">
            <button className={classes.resetButton}>
              Powrót do wyboru kategorii
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { realizationId } = context.params;
  const realization = realizationsData.find(
    (item) => item.id === realizationId
  );

  return {
    props: { realization: realization || null },
  };
}

export default RealizationDetail;

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
