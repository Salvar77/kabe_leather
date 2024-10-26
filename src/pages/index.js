import Head from "next/head";
import AboutUs from "@/components/Main/AboutUs";
import Services from "@/components/Main/Services";
import Contact from "@/components/Main/Contact";
import Hero from "@/components/Main/Hero";
import heroImageMobile from "../assets/image/hero2_640.jpg";
import heroImageDesktop from "../assets/image/hero2_1920.jpg";
import SliderSection from "@/components/Sliders/SliderSection";
import { NextSeo } from "next-seo";
import SEO from "@/components/Main/SEO";
import Reviews from "@/components/Main/Reviews";
import ElfsightWidget from "@/components/Main/ElfsightWidget";
import AboutCompany from "@/components/More/AboutCompany";
import WhyUs from "@/components/More/WhyUs";
import Blog from "@/components/Main/Blog";

export default function Home() {
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

      <Hero
        heroImageMobile={heroImageMobile}
        heroImageDesktop={heroImageDesktop}
        title="Kabe Tint&Leather Auto Detailing"
        description="Kabe Tint&Leather Auto Detailing"
        showTechnology={true}
        showButton={true}
        height="100vh"
        mobileWhiteBlockColor="#fcfcfc"
        desktopWhiteBlockColor="#e0e0e0"
      />
      <div className="bg">
        <div className="container">
          <WhyUs />
          <AboutUs />
          <Services />
        </div>
        <AboutCompany />
        <div className="container">
          <Blog />
          <SliderSection />
          <Contact />
        </div>
      </div>
    </>
  );
}
