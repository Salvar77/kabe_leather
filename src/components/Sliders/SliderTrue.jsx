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
    objectFit: "cover",
  };

  const lineStyles = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: `${sliderValue}%`,
    width: ".2rem",
    height: "100%",
    backgroundColor: "#fff",
    transform: "translateX(-50%)",
  };

  return (
    <div className={classes.slideBox}>
      <div className={classes.sliderContainer}>
        <Image
          src={props.beforeImage}
          alt="zdjęcie przed"
          style={imageStyles}
          className={classes.imageBefore}
          width={260}
          height={400}
          loading="lazy"
          placeholder="blur"
        />
        <Image
          src={props.afterImage}
          alt="zdjęcie po"
          className="imageAfter"
          style={{
            clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
          }}
          width={260}
          height={400}
          loading="lazy"
          placeholder="blur"
        />
        <div style={lineStyles} className={classes.line} />

        <input
          type="range"
          min="5"
          max="95"
          value={sliderValue}
          onChange={handleSliderChange}
          className={classes.sliderInput}
          aria-label="Przesuń, aby zobaczyć zmiany przed i po regeneracji"
        />
      </div>
    </div>
  );
};

export default SliderTrue;
