import Head from "next/head";
import AboutUs from "@/components/Main/AboutUs";
import Services from "@/components/Main/Services";
import Contact from "@/components/Main/Contact";
import Hero from "@/components/Main/Hero";
import SliderSection from "@/components/Sliders/SliderSection";

export default function Home() {
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
