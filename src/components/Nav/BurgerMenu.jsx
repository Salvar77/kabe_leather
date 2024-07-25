import { useState, useEffect } from "react";
import classes from "./BurgerMenu.module.scss";
import { useRouter } from "next/router";

const BurgerMenu = ({ isOpen, handleOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOnSpecialPage, setIsOnSpecialPage] = useState(false);
  const router = useRouter();

  const toggleActive = () => {
    handleOpen();
  };

  const handleScroll = () => {
    const nav = document.querySelector("nav");
    const hero = document.getElementById("hero");
    const aboutUs = document.getElementById("O-nas");

    if (nav && hero && aboutUs) {
      const navHeight = nav.offsetHeight;
      const heroHeight = hero.offsetHeight;
      const aboutUsHeight = aboutUs.offsetHeight;

      const scrollY = window.scrollY;

      const offset = 100;

      if (scrollY > navHeight + heroHeight + aboutUsHeight + offset) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  };

  useEffect(() => {
    const path = router.pathname;
    setIsOnSpecialPage(path === "/Cennik");

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]);

  return (
    <>
      <div className={classes.hamburgerContainer}>
        <button
          className={`${classes.hamburger} ${classes.hamburger__arrow} ${
            isOpen ? classes.isActive : ""
          } ${scrolled || isOnSpecialPage ? classes.scrolled : ""}`}
          type="button"
          onClick={toggleActive}
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
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
