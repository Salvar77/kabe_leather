import "@/styles/globals.scss";
import "hamburgers/dist/hamburgers.min.css";
import Nav from "@/components/Nav/Nav";
import BurgerMenu from "@/components/Nav/BurgerMenu";
import { useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import SEO from "@/components/Main/SEO";
import Logo from "@/components/Nav/Logo";
import Footer from "@/components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactMain from "@/components/More/ContactMain";

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
      <SEO
        title="Kabe Tint&Leather Auto Detailing"
        description="Kabe Tint&Leather Auto Detailing"
        image="https://www.kabetintleather.pl/kabelogooo.webp"
      />
      <NextSeo
        title="Kabe Tint&Leather Auto Detailing"
        description="Kabe Tint&Leather Auto Detailing"
        canonical="https://www.kabetintleather.pl/"
        openGraph={{
          url: "https://www.kabetintleather.pl/",
          title: "Kabe Tint&Leather Auto Detailing",
          description: "Kabe Tint&Leather Auto Detailing",
          images: [
            {
              url: "https://www.kabetintleather.pl/kabelogooo.webp",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
          site_name: "Kabe Tint&Leather Auto Detailing",
        }}
        facebook={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
        instagram={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <header>
        <Nav isOpen={isOpen} toggleNav={toggleNav} />
        <BurgerMenu handleOpen={toggleNav} isOpen={isOpen} />
        <Logo showLogo={showLogo} />
      </header>

      <Component {...pageProps} />
      <ContactMain />
      <Footer />
    </>
  );
}
