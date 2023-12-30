import SliderTrue from "./SliderTrue";
import BeforeImage1 from "../../assets/image/renovation_2.jpg";
import AfterImage1 from "../../assets/image/renovation_1.jpg";
import BeforeImage2 from "../../assets/image/renovation_4.jpg";
import AfterImage2 from "../../assets/image/renovation_3.jpg";

import classes from "./SliderSection.module.scss";

const SliderSection = (props) => {
  return (
    <section id="gallery" className={classes.sliderSection}>
      <span className={classes.titleSlide}>Galeria</span>
      <div className={classes.sliderGrid}>
        <SliderTrue beforeImage={BeforeImage1} afterImage={AfterImage1} />
        <SliderTrue beforeImage={BeforeImage2} afterImage={AfterImage2} />
      </div>
    </section>
  );
};

export default SliderSection;
