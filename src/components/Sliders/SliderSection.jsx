import { motion } from "framer-motion";
import SliderTrue from "./SliderTrue";
import BeforeImage1 from "../../assets/image/renovation_7.webp";
import AfterImage1 from "../../assets/image/renovation_8.webp";
import BeforeImage2 from "../../assets/image/renovation_4.jpg";
import AfterImage2 from "../../assets/image/renovation_3.jpg";
import BeforeImage3 from "../../assets/image/renovatio2.webp";
import AfterImage3 from "../../assets/image/renovatio.webp";
import BeforeImage4 from "../../assets/image/renovation_8-1.webp";
import AfterImage4 from "../../assets/image/renovation_7-1.webp";
import classes from "./SliderSection.module.scss";
import Link from "next/link";
import { blurUp } from "../../../utils/motion";

const SliderSection = ({
  showTitle = true,
  showButton = true,
  customBgColor,
  maxImagesToShow = 3,
  additionalClass = "",
  style,
}) => {
  const images = [
    {
      beforeImage: BeforeImage1,
      afterImage: AfterImage1,
      altBefore: "Tapicerka przed praniem z widocznymi zabrudzeniami",
      altAfter: "Tapicerka po praniu z czystym i świeżym wyglądem",
    },
    {
      beforeImage: BeforeImage4,
      afterImage: AfterImage4,
      altBefore: "Stan tapicerki przed czyszczeniem - liczne plamy",
      altAfter: "Efekt czyszczenia - tapicerka jak nowa",
    },
    {
      beforeImage: BeforeImage3,
      afterImage: AfterImage3,
      altBefore: "Skórzana tapicerka przed renowacją - widoczne uszkodzenia",
      altAfter: "Skórzana tapicerka po renowacji - pełne odświeżenie",
    },
    {
      beforeImage: BeforeImage2,
      afterImage: AfterImage2,
      altBefore: "Wnętrze auta przed praniem - widoczne zabrudzenia",
      altAfter: "Wnętrze auta po praniu - świeżość i czystość",
    },
  ];

  const gridClass =
    maxImagesToShow === 4 ? classes.fiveColumnsGrid : classes.defaultGrid;

  return (
    <section
      id="galeria"
      className={`${
        customBgColor ? classes.customBgColor : classes.sliderSection
      } ${additionalClass}`}
    >
      {showTitle && <span className={classes.titleSlide}>Galeria</span>}
      <div className={`${classes.sliderGrid} ${gridClass}`}>
        {images
          .slice(0, maxImagesToShow)
          .map(({ beforeImage, afterImage, altBefore, altAfter }, index) => (
            <motion.div
              key={index}
              variants={blurUp(index * 0.1, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
            >
              <SliderTrue
                beforeImage={beforeImage}
                afterImage={afterImage}
                alt={`Zdjęcie: ${altBefore} oraz ${altAfter}`}
              />
            </motion.div>
          ))}
      </div>
      {showButton && (
        <div className={classes.buttonContainer}>
          <Link
            href="/realizacje"
            className={classes.realizationButton}
            aria-label="Zobacz wszystkie realizacje"
          >
            Realizacje
          </Link>
        </div>
      )}
    </section>
  );
};

export default SliderSection;
