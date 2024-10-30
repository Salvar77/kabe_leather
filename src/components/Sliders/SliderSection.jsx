import { motion } from "framer-motion";
import SliderTrue from "./SliderTrue";
import BeforeImage1 from "../../assets/image/renovation_7.jpg";
import AfterImage1 from "../../assets/image/renovation_8.jpg";
import BeforeImage2 from "../../assets/image/renovation_4.jpg";
import AfterImage2 from "../../assets/image/renovation_3.jpg";
import BeforeImage3 from "../../assets/image/renovatio2.JPG";
import AfterImage3 from "../../assets/image/renovatio.JPG";
import BeforeImage4 from "../../assets/image/renovation_8-1.jpg";
import AfterImage4 from "../../assets/image/renovation_7-1.jpg";
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
    { beforeImage: BeforeImage1, afterImage: AfterImage1 },
    { beforeImage: BeforeImage4, afterImage: AfterImage4 },
    { beforeImage: BeforeImage3, afterImage: AfterImage3 },
    { beforeImage: BeforeImage2, afterImage: AfterImage2 },
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
              variants={blurUp(index * 0.1, 0.8)} // blurUp dla efektu przesunięcia i rozmycia
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
            href="/Realizacje"
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
