import SliderTrue from "./SliderTrue";

import BeforeImage1 from "../../assets/image/renovation_2.jpg";
import AfterImage1 from "../../assets/image/renovation_1.jpg";
import BeforeImage2 from "../../assets/image/renovation_4.jpg";
import AfterImage2 from "../../assets/image/renovation_3.jpg";
import BeforeImage3 from "../../assets/image/renovation_6.jpg";
import AfterImage3 from "../../assets/image/renovation_5.jpg";
import classes from "./SliderSection.module.scss";

const SliderSection = (props) => {
  return (
    <div>
      <span className={classes.titleSlide}>Galeria</span>
      <SliderTrue beforeImage={BeforeImage1} afterImage={AfterImage1} />
      <SliderTrue beforeImage={BeforeImage2} afterImage={AfterImage2} />
      <SliderTrue beforeImage={BeforeImage3} afterImage={AfterImage3} />
    </div>
  );
};

export default SliderSection;
