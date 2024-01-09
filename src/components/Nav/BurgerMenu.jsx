import { useState, useEffect } from "react";
import classes from "./BurgerMenu.module.scss";

const BurgerMenu = ({ isOpen, handleOpen }) => {
  const toggleActive = () => {
    handleOpen(); // Bezpośrednie wywołanie funkcji zmieniającej stan
  };

  // const [windowWidth, setWindowWidth] = useState("");
  // useEffect(() => {
  //   setWindowWidth(window.innerWidth);
  //   const handleResizeWindow = () => setWindowWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResizeWindow);
  //   return () => {
  //     window.removeEventListener("resize", handleResizeWindow);
  //   };
  // }, []);

  return (
    <>
      <div className={classes.hamburgerContainer}>
        <button
          className={`${classes.hamburger} ${classes.hamburger__arrow} ${
            isOpen ? classes.isActive : ""
          }`}
          type="button"
          onClick={toggleActive}
        >
          <span className={classes.hamburgerBox}>
            <span className={classes.hamburgerInner}></span>
          </span>
        </button>
      </div>
    </>
  );
};
export default BurgerMenu;
