import { useState } from "react";
import Image from "next/image";
import classes from "./SliderTrue.module.scss";

const SliderTrue = (props) => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const imageStyles = {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const lineStyles = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: `${sliderValue}%`,
    width: "0.2rem",
    height: "100%",
    backgroundColor: "#fff",
    transform: "translateX(-50%)",
  };

  return (
    <div className={classes.slideBox}>
      {" "}
      Galeria
      <span className={classes.titleSlide}></span>
      <div className={classes.sliderContainer}>
        <Image
          src={props.beforeImage}
          alt="before"
          style={imageStyles}
          className={classes.imageBefore}
          layout="responsive"
          width={400}
          height={300}
          objectFit="cover"
        />
        <Image
          src={props.afterImage}
          alt="after"
          className="imageAfter"
          style={{
            clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
          }}
          layout="responsive"
          width={400}
          height={300}
          objectFit="cover"
        />
        <div style={lineStyles} />

        <input
          type="range"
          min="1"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          className={classes.sliderInput}
        />
      </div>
    </div>
  );
};

export default SliderTrue;
