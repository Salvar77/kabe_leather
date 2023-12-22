import Image from "next/image";
import BeforeImage from "../../assets/image/renovation_4.jpg";
import AfterImage from "../../assets/image/renovation_3.jpg";
import { useState } from "react";
import classes from "./Slider.module.scss"; // Importowanie stylów SCSS

const Slider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = (event) => {
    if (!isDragging) return;
    let clientX = event.clientX;

    // Obsługa zdarzeń dotykowych
    if (event.type === "touchmove") {
      clientX = event.touches[0].clientX;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleInteractionStart = (event) => {
    setIsDragging(true);
    // Rozpoczęcie przeciągania/dotyku
    if (event.type === "touchstart") {
      event.preventDefault();
    }
  };

  const handleInteractionEnd = () => {
    setIsDragging(false);
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
      >
        <Image alt="beforeImage" src={BeforeImage} />
        <div
          className={classes.sliderImageAfter}
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image alt="afterImage" src={AfterImage} />
        </div>
        <div
          className={classes.sliderHandle}
          style={{ right: `calc(${sliderPosition}% -5px)` }}
        />
      </div>
    </div>
  );
};

export default Slider;
