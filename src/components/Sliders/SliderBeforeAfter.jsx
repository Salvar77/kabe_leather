import { useState } from "react";
import Image from "next/image";

const SliderBeforeAfter = (props) => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const lineStyles = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: `${sliderValue}%`,
    width: 0,
  };

  return (
    <div className={classes.slideBox}>
      <span className={classes.titleSlide}></span>
      <div className={classes.sliderContainer}>
        <Image
          src={props.beforeImage}
          alt="Before"
          layout="fill"
          objectFit="cover"
          style="imageBefore"
          className={classes.imageBefore}
        />
        <Image
          src={props.afterImage}
          alt="After"
          layout="fill"
          objectFit="cover"
          className={classes.imageAfter}
          style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
        />
        <div style={lineStyles} />
        <input
          type="range"
          min="5"
          max="95"
          value={sliderValue}
          onChange={handleSliderChange}
          className={classes.sliderInput}
        />
      </div>
    </div>
  );
};

export default SliderBeforeAfter;
