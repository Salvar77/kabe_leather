import SliderTrue from "./SliderTrue";
import BeforeImage1 from "../../assets/image/renovation_2.jpg";
import AfterImage1 from "../../assets/image/renovation_1.jpg";
import BeforeImage2 from "../../assets/image/renovation_4.jpg";
import AfterImage2 from "../../assets/image/renovation_3.jpg";
import BeforeImage3 from "../../assets/image/renovation_6.jpg";
import AfterImage3 from "../../assets/image/renovation_5.jpg";
import classes from "./SliderSection.module.scss";
import Link from "next/link";

const SliderSection = (props) => {
  return (
    <section id="gallery" className={classes.sliderSection}>
      <span className={classes.titleSlide}>Galeria</span>
      <div className={classes.sliderGrid}>
        <SliderTrue beforeImage={BeforeImage1} afterImage={AfterImage1} />
        <SliderTrue beforeImage={BeforeImage2} afterImage={AfterImage2} />
        <SliderTrue beforeImage={BeforeImage3} afterImage={AfterImage3} />
      </div>
      <div className={classes.buttonContainer}>
        <Link href="/realizacje" className={classes.realizationButton}>
          Realizacje
        </Link>
      </div>
    </section>
  );
};

export default SliderSection;
