import "@/styles/globals.scss";
import "hamburgers/dist/hamburgers.min.css";
import Nav from "@/components/Nav/Nav";
import BurgerMenu from "@/components/Nav/BurgerMenu";
import { useEffect, useState } from "react";
import Logo from "@/components/Nav/Logo";
import Footer from "@/components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = document.documentElement.scrollTop;
      const windowWidth = window.innerWidth;

      setShowLogo(!(windowWidth < 992 && currentScrollPos > 200));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <Logo showLogo={showLogo} />
        <Nav isOpen={isOpen} toggleNav={toggleNav} />
        <BurgerMenu handleOpen={toggleNav} isOpen={isOpen} />
      </header>

      <Component {...pageProps} />

      <Footer />
    </>
  );
}
