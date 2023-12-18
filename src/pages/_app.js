import "@/styles/globals.scss";
import "hamburgers/dist/hamburgers.min.css";
import Nav from "@/components/Nav/Nav";
import BurgerMenu from "@/components/Nav/BurgerMenu";
import { useState } from "react";
import Logo from "@/components/Nav/Logo";
import Hero from "@/components/Main/Hero";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <Logo />
        <Nav isOpen={menuOpen} />
        <BurgerMenu handleOpen={handleOpen} />
      </header>
      <Hero />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
