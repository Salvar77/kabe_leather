import SliderBeforeAfter from "./SliderBeforeAfter";
import classes from "./Gallery.module.scss";
import beforeImage1 from "../../assets/image/renovation_1.jpg";
import afterImage1 from "../../assets/image/renovation_1.jpg";
import beforeImage2 from "../../assets/image/renovation_2.jpg";
import afterImage2 from "../../assets/image/renovation_2.jpg";

const Gallery = () => {
  return (
    <section id="gallery" className={classes.gallery}>
      <div className={classes.gallery__boxes}>
        <div>
          <SliderBeforeAfter
            beforeImage={beforeImage1}
            afterImage={afterImage1}
          />
          <SliderBeforeAfter
            beforeImage={beforeImage2}
            afterImage={afterImage2}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
