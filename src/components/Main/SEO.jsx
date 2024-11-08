import Head from "next/head";

const SEO = ({ title, description, image }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          url: "https://www.kabetintleather.pl",
          name: "Kabe Tint&Leather Auto Detailing",
          description:
            "Profesjonalne pranie tapicerki, czyszczenie tapicerki oraz czyszczenie samochodu w Opolu. Skontaktuj się z nami, aby zadbać o czystość swojego pojazdu.",
          logo: "https://www.kabetintleather.pl/kabelogooo.webp",
          telephone: "+48-881-325-631",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+48-881-325-631",
            contactType: "Customer Support",
            areaServed: "Poland",
            availableLanguage: ["Polish", "English"],
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "ul. Generała Emila Fieldorfa 12",
            addressLocality: "Opole",
            postalCode: "45-273",
            addressCountry: "PL",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "50.675106",
            longitude: "17.921298",
          },
          openingHours: ["Mo,Tu,We,Th,Fr 07:00-20:00", "Sa 08:00-18:00"],
          priceRange: "PLN",
          sameAs: [
            "https://www.facebook.com/profile.php?id=61554800660887",
            "https://www.instagram.com/kabe_tintleather_autodetailing?igsh=MWdwYzAzdmM2c2Rlbg==",
          ],
          serviceType: [
            "Pranie tapicerki",
            "Czyszczenie samochodu",
            "Czyszczenie tapicerki",
          ],
          areaServed: {
            "@type": "Place",
            name: "Opole, Poland",
          },
        }),
      }}
    />
  </Head>
);

export default SEO;
