import { useState, useEffect } from "react";
import classes from "./BurgerMenu.module.scss";
import { useRouter } from "next/router";

const BurgerMenu = ({ isOpen, handleOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOnSpecialPage, setIsOnSpecialPage] = useState(false);
  const router = useRouter();

  const toggleActive = () => {
    handleOpen(); // Bezpośrednie wywołanie funkcji zmieniającej stan
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

      // Ustalamy margines przewijania
      const offset = 100; // Możesz dostosować margines przewijania

      // Zmieniamy kolor, jeśli przewijamy poza nav, hero i aboutUs
      if (scrollY > navHeight + heroHeight + aboutUsHeight + offset) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  };

  useEffect(() => {
    // Sprawdzenie, czy jesteśmy na stronie specjalnej
    const path = router.pathname;
    setIsOnSpecialPage(path === "/Cennik"); // Sprawdzenie dla strony Cennik (lub innych stron)

    // Dodanie nasłuchiwania przewijania
    window.addEventListener("scroll", handleScroll);

    // Usunięcie nasłuchiwania przy demontażu komponentu
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]); // Używamy router.pathname jako zależności

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
