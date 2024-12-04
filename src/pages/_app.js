import "@/styles/globals.scss";
import "hamburgers/dist/hamburgers.min.css";
import Nav from "@/components/Nav/Nav";
import BurgerMenu from "@/components/Nav/BurgerMenu";
import { useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import SEO from "@/components/Main/SEO";
import Logo from "@/components/Nav/Logo";
import Footer from "@/components/Footer/Footer";
import ContactBubble from "@/components/More/ContactBubble";
import ContactBar from "@/components/Main/ContactBar";

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
        title="Kabe Tint&Leather - Pranie Tapicerki i Czyszczenie Samochodów w Opolu"
        description="Kabe Tint&Leather specjalizuje się w profesjonalnym praniu tapicerki oraz czyszczeniu samochodów. Zadbaj o swoje auto z naszą pomocą."
        image="https://www.kabetintleather.opole.pl/kabelogooo.webp"
      />
      <NextSeo
        title="Pranie Tapicerki, Czyszczenie Samochodu | Kabe Tint&Leather Auto Detailing"
        description="Profesjonalne pranie tapicerki i czyszczenie samochodu w Opolu. Oferujemy skuteczne czyszczenie tapicerki samochodowej, dbając o detale. Skontaktuj się z nami!"
        canonical="https://www.kabetintleather.opole.pl/"
        openGraph={{
          url: "https://www.kabetintleather.opole.pl/",
          title: "Pranie Tapicerki, Czyszczenie Samochodu | Kabe Tint&Leather",
          description:
            "Oferujemy najwyższej jakości usługi prania tapicerki i czyszczenia samochodów w Opolu. Specjalizujemy się w czyszczeniu tapicerki, dbając o każdy szczegół.",
          images: [
            {
              url: "https://www.kabetintleather.opole.pl/kabelogooo.webp",
              width: 800,
              height: 600,
              alt: "Czyszczenie tapicerki - Kabe Tint&Leather",
              type: "image/webp",
            },
          ],
          site_name: "Kabe Tint&Leather Auto Detailing",
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
          site: "https://www.instagram.com/kabe_tintleather_autodetailing?igsh=MWdwYzAzdmM2c2Rlbg==",
          cardType: "summary_large_image",
        }}
        facebook={{
          handle: "KabeTintLeather",
          site: "https://www.facebook.com/profile.php?id=61554800660887",
          cardType: "summary_large_image",
        }}
      />

      <header>
        <ContactBar />
        <Nav isOpen={isOpen} toggleNav={toggleNav} />
        <BurgerMenu handleOpen={toggleNav} isOpen={isOpen} />
        <Logo showLogo={showLogo} />
      </header>

      <Component {...pageProps} />
      <Footer />
      <ContactBubble />
    </>
  );
}
