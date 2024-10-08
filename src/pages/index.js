import Head from "next/head";
import AboutUs from "@/components/Main/AboutUs";
import Services from "@/components/Main/Services";
import Contact from "@/components/Main/Contact";
import Hero from "@/components/Main/Hero";
import SliderSection from "@/components/Sliders/SliderSection";
import { NextSeo } from "next-seo";
import SEO from "@/components/Main/SEO";
import Reviews from "@/components/Main/Reviews";
import ElfsightWidget from "@/components/Main/ElfsightWidget";

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
