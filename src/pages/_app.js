import "@/styles/globals.scss";
import "hamburgers/dist/hamburgers.min.css";
import Nav from "@/components/Nav/Nav";
import BurgerMenu from "@/components/Nav/BurgerMenu";
import { useState, useEffect } from "react";
import Logo from "@/components/Nav/Logo";
import Footer from "@/components/Footer/Footer";
import ContactBubble from "@/components/More/ContactBubble";
import ContactBar from "@/components/Main/ContactBar";

export default function App({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <ContactBar />
        <Nav isOpen={isOpen} toggleNav={toggleNav} />
        <BurgerMenu handleOpen={toggleNav} isOpen={isOpen} />
        <Logo showLogo={showLogo} />
      </header>

      <Component {...pageProps} />
      <Footer />
      <ContactBubble />
    </>
  );
}
