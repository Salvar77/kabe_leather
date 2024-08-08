import Head from "next/head";
import AboutUs from "@/components/Main/AboutUs";
import Services from "@/components/Main/Services";
import Contact from "@/components/Main/Contact";
import Hero from "@/components/Main/Hero";
import SliderSection from "@/components/Sliders/SliderSection";
import Logo from "@/components/Nav/Logo";
import { useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import SEO from "@/components/Main/SEO";

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
      <SEO
        title="Kabe Tint&Leather - Pranie Tapicerki, Renowacja Skór, Przyciemnianie szyb"
        description="Kabe Tint&Leather - Pranie Tapicerki, Renowacja Skór, Przyciemnianie szyb"
        image="https://www.kabetintleather.pl/logooooo.jpg"
      />
      <NextSeo
        title="Kabe Tint&Leather - Pranie Tapicerki, Renowacja Skór, Przyciemnianie szyb"
        description="Kabe Tint&Leather - Pranie Tapicerki, Renowacja Skór, Przyciemnianie szyb"
        canonical="https://www.kabetintleather.pl/"
        openGraph={{
          url: "https://www.kabetintleather.pl/",
          title:
            "Kabe Tint&Leather - Pranie Tapicerki, Renowacja Skór, Przyciemnianie szyb",
          description:
            "Kabe Tint&Leather - Pranie Tapicerki, Renowacja Skór, Przyciemnianie szyb",
          images: [
            {
              url: "https://www.kabetintleather.pl/logooooo.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
          site_name: "Kabe Tint&Leather",
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
