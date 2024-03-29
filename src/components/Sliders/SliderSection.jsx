import SliderTrue from "./SliderTrue";
import BeforeImage1 from "../../assets/image/renovation_7.jpg";
import AfterImage1 from "../../assets/image/renovation_8.jpg";
import BeforeImage2 from "../../assets/image/renovation_4.jpg";
import AfterImage2 from "../../assets/image/renovation_3.jpg";
import BeforeImage3 from "../../assets/image/renovatio2.JPG";
import AfterImage3 from "../../assets/image/renovatio.JPG";
import BeforeImage4 from "../../assets/image/renovation_8-1.jpg";
import AfterImage4 from "../../assets/image/renovation_7-1.jpg";
import BeforeImage5 from "../../assets/image/renovation_9.jpg";
import AfterImage5 from "../../assets/image/renovation_9-1.jpg";

import classes from "./SliderSection.module.scss";
import Link from "next/link";

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
            <SliderTrue
              key={index}
              beforeImage={beforeImage}
              afterImage={afterImage}
            />
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
