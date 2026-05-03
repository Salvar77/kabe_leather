import AboutUs from "@/components/Main/AboutUs";
import Services from "@/components/Main/Services";
import Contact from "@/components/Main/Contact";
import Hero from "@/components/Main/Hero";
import SliderSection from "@/components/Sliders/SliderSection";
import { NextSeo } from "next-seo";
import SEO from "@/components/Main/SEO";
import ElfsightLazyWrapper from "@/components/Main/ElfsightLazyWrapper";
import AboutCompany from "@/components/More/AboutCompany";
import WhyUs from "@/components/More/WhyUs";
import Blog from "@/components/Main/Blog";

export default function Home() {
  return (
    <>
      <SEO
        title="Pranie tapicerki samochodowej Opole | KabeTintLeather Auto Detailing"
        description="Profesjonalne pranie tapicerki i kompleksowe czyszczenie samochodu w Opolu. Zadbam o perfekcyjną czystość każdego detalu. Umów wizytę!"
        image="https://www.kabetintleather.opole.pl/logo-kabetintleather-auto-detailing-opole.jpg"
        url="https://www.kabetintleather.opole.pl/"
        isHome={true}
      />
      <NextSeo
        title="Pranie tapicerki samochodowej Opole | KabeTintLeather Auto Detailing"
        description="Profesjonalne pranie tapicerki i kompleksowe czyszczenie samochodu w Opolu. Zadbam o perfekcyjną czystość każdego detalu. Umów wizytę!"
        canonical="https://www.kabetintleather.opole.pl/"
        openGraph={{
          url: "https://www.kabetintleather.opole.pl/",
          title: "Pranie tapicerki samochodowej Opole | KabeTintLeather",
          description:
            "Profesjonalne pranie tapicerki i kompleksowe czyszczenie samochodu w Opolu. Zadbam o perfekcyjną czystość każdego detalu. Umów wizytę!",
          images: [
            {
              url: "https://www.kabetintleather.opole.pl/logo-kabetintleather-auto-detailing-opole.jpg",
              width: 800,
              height: 600,
              alt: "Czyszczenie tapicerki - KabeTintLeather",
              type: "image/webp",
            },
          ],
          site_name: "KabeTintLeather Auto Detailing",
          locale: "pl_PL",
          type: "business.business",
          business: {
            contactData: {
              streetAddress: "ul. Generała Emila Fieldorfa 12",
              addressLocality: "Opole",
              postalCode: "45-273",
              addressCountry: "PL",
              telephone: "+48-881-325-631",
            },
          },
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "pranie tapicerki, czyszczenie samochodu, czyszczenie tapicerki, detailing Opole, auto detailing Opole",
          },
          {
            property: "business:contact_data:country_name",
            content: "Poland",
          },
          {
            property: "business:contact_data:locality",
            content: "Opole",
          },
          {
            property: "business:contact_data:region",
            content: "Opolskie",
          },
          {
            property: "business:contact_data:postal_code",
            content: "45-273",
          },
          {
            property: "business:contact_data:street_address",
            content: "ul. Generała Emila Fieldorfa 12",
          },
          {
            name: "robots",
            content: "index, follow",
          },
        ]}
        instagram={{
          handle: "@KabeTintLeather",
          site: "https://www.instagram.com/kabetintleather_autodetailing/#",
          cardType: "summary_large_image",
        }}
        facebook={{
          handle: "KabeTintLeather",
          site: "https://www.facebook.com/profile.php?id=61554800660887",
          cardType: "summary_large_image",
        }}
      />

      <Hero />
      <div className="bg">
        <div className="container">
          <WhyUs />
        </div>
        <Services />
        <div className="container">
          <AboutUs />
        </div>
        <AboutCompany />
        <div className="container">
          <Blog />
        </div>
        <SliderSection />
        <div className="container">
          <ElfsightLazyWrapper />
          <Contact />
        </div>
      </div>
    </>
  );
}
