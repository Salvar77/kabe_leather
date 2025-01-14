import Head from "next/head";

const SEO = ({
  title,
  description,
  image,
  url,
  datePublished,
  isBlogPost = false,
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:url" content={url} />
    <link rel="canonical" href={url} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          isBlogPost
            ? {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: title,
                description: description,
                image: [image],
                datePublished: datePublished,
                author: {
                  "@type": "Person",
                  name: "KabeTintLeather Auto Detailing",
                },
                publisher: {
                  "@type": "Organization",
                  name: "KabeTintLeather Auto Detailing",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.kabetintleather.opole.pl/kabelogooo.webp",
                  },
                },
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": url,
                },
              }
            : {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                url: "https://www.kabetintleather.opole.pl",
                name: "KabeTintLeather Auto Detailing",
                description:
                  "Profesjonalne pranie tapicerki, czyszczenie tapicerki oraz czyszczenie samochodu w Opolu. Skontaktuj się z nami, aby zadbać o czystość swojego pojazdu.",
                logo: "https://www.kabetintleather.opole.pl/kabelogooo.webp",
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
                  "https://www.instagram.com/kabe_tintleather_autodetailing/#",
                  "https://www.tiktok.com/@kabetintleather",
                  "https://www.youtube.com/@Nesill3262",
                  "https://aleo.com/pl/firma/kabe-tint-leather-kamil-brzoskwinia",
                  "https://www.oferteo.pl/kabe-tintleather-pranie-tapicerki-samochodowej-opole/firma/6596416",
                  "https://opole.naszemiasto.pl/kabetintleather-pranie-tapicerki-samochodowej-opole/kf/654209",
                  "https://www.baza-firm.com.pl/myjnie-samochodowe-auto-detailing/opole/kabetintleather-pranie-tapicerki-samochodowej-opole/pl/388643.html",
                  "https://www.cylex-polska.pl/firmy/kabetintleather---pranie-tapicerki-samochodowej-opole-14154902.html",
                  "https://nto.pl/kabetintleather-pranie-tapicerki-samochodowej-opole/kf/654209",
                  "https://motofakty.pl/kabetintleather-pranie-tapicerki-samochodowej-opole/kf/654209",
                  "https://pruszkow.naszemiasto.pl/kabetintleather-pranie-tapicerki-samochodowej-opole/kf/654209",
                  "https://gra.pl/kabetintleather-pranie-tapicerki-samochodowej-opole/kf/654209",
                  "https://strefabiznesu.pl/kabetintleather-pranie-tapicerki-samochodowej-opole/kf/654209",
                  "https://strefaedukacji.pl/kabetintleather-pranie-tapicerki-samochodowej-opole/kf/654209",
                  "https://www.cylex-polska.pl/opole/mycie+samochod%C3%B3w.html",
                ],
                makesOffer: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pranie tapicerki",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Czyszczenie samochodu",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Czyszczenie tapicerki",
                    },
                  },
                ],
                areaServed: {
                  "@type": "Place",
                  name: "Opole, Poland",
                },
              }
        ),
      }}
    />
  </Head>
);

export default SEO;
