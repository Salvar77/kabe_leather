import SliderTrue from "./SliderTrue";
import BeforeImage1 from "../../assets/image/renovation_2.jpg";
import AfterImage1 from "../../assets/image/renovation_1.jpg";
import BeforeImage2 from "../../assets/image/renovation_4.jpg";
import AfterImage2 from "../../assets/image/renovation_3.jpg";

import classes from "./SliderSection.module.scss";
import Link from "next/link";

const SliderSection = ({ showTitle = true, showButton = true }) => {
  return (
    <section id="gallery" className={classes.sliderSection}>
      {showTitle && <span className={classes.titleSlide}>Galeria</span>}
      <div className={classes.sliderGrid}>
        <SliderTrue beforeImage={BeforeImage1} afterImage={AfterImage1} />
        <SliderTrue beforeImage={BeforeImage2} afterImage={AfterImage2} />
      </div>
      {showButton && (
        <div className={classes.buttonContainer}>
          <Link
            href="/Realizations/Realizations"
            className={classes.realizationButton}
          >
            Realizacje
          </Link>
        </div>
      )}
    </section>
  );
};

export default SliderSection;
