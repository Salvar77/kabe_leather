import Image from "next/image";

import { useState, useRef } from "react";
import classes from "./Slider.module.scss";

const Slider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  const handleDrag = (event) => {
    if (!isDragging) return;
    let clientX = event.type.includes("mouse")
      ? event.clientX
      : event.touches[0].clientX;

    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleInteractionStart = () => {
    setIsDragging(true);
  };

  const handleInteractionEnd = () => {
    setIsDragging(false);
  };

  const lineStyles = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: `${sliderPosition}%`,
    width: 0,
    borderRight: "2px solid black",
  };

  return (
    <div
      className={classes.sliderContainer}
      onMouseUp={handleInteractionEnd}
      onTouchEnd={handleInteractionEnd}
    >
      <div
        className={classes.slider}
        onMouseMove={handleDrag}
        onMouseDown={handleInteractionStart}
        onTouchMove={handleDrag}
        onTouchStart={handleInteractionStart}
        ref={sliderRef}
      >
        <Image
          alt="beforeImage"
          src={beforeImage}
          layout="fill"
          objectFit="cover"
        />
        <div
          className={classes.sliderImageAfter}
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            alt="afterImage"
            src={afterImage}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div style={lineStyles} />
        <div
          className={classes.sliderHandle}
          style={{ left: `calc(${sliderPosition}% - 1px)` }}
        />
      </div>
    </div>
  );
};

export default Slider;
