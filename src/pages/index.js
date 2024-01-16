import Head from "next/head";
import AboutUs from "@/components/Main/AboutUs";
import Services from "@/components/Main/Services";
import Contact from "@/components/Main/Contact";
import Reviews from "@/components/Main/Reviews";
import Hero from "@/components/Main/Hero";
import SliderSection from "@/components/Sliders/SliderSection";
import image from "../assets/image/hero2_1920.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kabe Tint&Leather</title>
        <meta
          property="og:image"
          content="https://www.kabetintleather.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffurniture2_640.44b52eb5.png&w=1920&q=75"
        />
        <meta
          name="description"
          content="Kabe Tint&Leather - Usługi przyciemniania szyb samochodowych oraz regeneracja tapicerki skórzanej"
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
