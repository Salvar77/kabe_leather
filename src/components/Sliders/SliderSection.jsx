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
      altBefore: "Stan przed renowacją tapicerki - zabrudzenia przed praniem",
      altAfter: "Stan po renowacji tapicerki - efekt czyszczenia samochodu",
    },
    {
      beforeImage: BeforeImage4,
      afterImage: AfterImage4,
      altBefore: "Przed czyszczeniem tapicerki - widoczne plamy",
      altAfter:
        "Po czyszczeniu tapicerki - tapicerka samochodowa po regeneracji",
    },
    {
      beforeImage: BeforeImage3,
      afterImage: AfterImage3,
      altBefore: "Stan przed renowacją skóry - zarysowania i zużycie",
      altAfter: "Stan po renowacji skóry - odświeżenie wyglądu tapicerki",
    },
    {
      beforeImage: BeforeImage2,
      afterImage: AfterImage2,
      altBefore: "Stan przed praniem tapicerki - widoczne zabrudzenia",
      altAfter: "Stan po praniu tapicerki - efekt czyszczenia wnętrza auta",
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
          .map(({ beforeImage, afterImage }, index) => (
            <motion.div
              key={index}
              variants={blurUp(index * 0.1, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
            >
              <SliderTrue beforeImage={beforeImage} afterImage={afterImage} />
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
