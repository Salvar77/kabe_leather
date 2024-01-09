import "@/styles/globals.scss";
import "hamburgers/dist/hamburgers.min.css";
import Nav from "@/components/Nav/Nav";
import BurgerMenu from "@/components/Nav/BurgerMenu";
import { useState } from "react";
import Logo from "@/components/Nav/Logo";

import Footer from "@/components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <Logo />
        <Nav isOpen={isOpen} toggleNav={toggleNav} />
        <BurgerMenu handleOpen={toggleNav} />
      </header>

      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
