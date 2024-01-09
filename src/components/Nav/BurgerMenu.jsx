import { useState, useEffect } from "react";
import classes from "./BurgerMenu.module.scss";

const BurgerMenu = ({ handleOpen }) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const toggleActive = () => {
    setIsActiveMenu(!isActiveMenu);
    handleOpen();
  };

  const [windowWidth, setWindowWidth] = useState("");
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResizeWindow = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <>
      <div className={classes.hamburgerContainer}>
        <button
          className={`${classes.hamburger} ${classes.hamburger__arrow} ${
            isActiveMenu ? classes.isActive : ""
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
