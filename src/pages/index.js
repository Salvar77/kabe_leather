import Head from "next/head";
import AboutUs from "@/components/Main/AboutUs";
import Services from "@/components/Main/Services";
import Contact from "@/components/Main/Contact";
import Hero from "@/components/Main/Hero";
import SliderSection from "@/components/Sliders/SliderSection";
import Logo from "@/components/Nav/Logo";
import { useState, useEffect } from "react";

export default function Home() {
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
  return (
    <>
      <Head>
        <title>
          Kabe Tint&Leather - Pranie Tapicerki, Renowacja Skór, Przyciemnianie
          szyb.
        </title>
        <meta
          property="og:image"
          content="https://www.kabetintleather.pl/logooooo.jpg"
        />

        <meta
          name="description"
          content="Kabe Tint&Leather - Pranie Tapicerki, Renowacja Skór, Przyciemnianie szyb."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Logo showLogo={showLogo} />
      <Hero />
      <div className="container">
        <AboutUs />
        <Services />
        <SliderSection />

        <Contact />
      </div>
    </>
  );
}
