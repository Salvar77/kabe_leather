import Head from "next/head";

const SEO = ({
  title,
  description,
  image,
  url,
  datePublished,
  isBlogPost = false,
  isProduct = false,

  isHome = false,
}) => {
  const blogSnippet = {
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
  };

  const localBusinessSnippet = {
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "3",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Dariusz Grzebień",
        },
        datePublished: "2025-02-03",
        reviewBody:
          "Auto oddane na kompleksowe czyszczenie wnętrza wraz z praniem tapicerki, dodatkowo nałożona została powłoka ceramiczną oraz zabezpieczony został front folia PPF. polecam!",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Denis Bul",
        },
        datePublished: "2025-02-17",
        reviewBody:
          "Mimo że auto jest nowe, zdecydowałem się na korektę lakieru One Step przed nałożeniem 2-letniej powłoki ceramicznej – jak się okazało, to standardowa procedura, aby usunąć mikro zarysowania i maksymalnie przygotować powierzchnię pod zabezpieczenie. Pan Kamil wykonał usługę perfekcyjnie! Lakier zyskał niesamowitą głębię i blask, a powłoka ceramiczna dodała efektu szklistości i ochrony. Samochód wygląda lepiej niż w salonie! Największym atutem, poza samą jakością pracy, było profesjonalne podejście i ogromna wiedza Pana Kamila. Poświęcił czas, aby dokładnie wytłumaczyć mi, jak działają powłoki, jak o nie dbać i na co zwracać uwagę, aby efekt utrzymał się jak najdłużej. Widać, że to pasjonat w swoim fachu. Jeśli ktoś szuka fachowej usługi detailingowej, to zdecydowanie polecam Pana Kamila",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Tomasz Proszkowiec",
        },
        datePublished: "2025-01-24",
        reviewBody:
          "Citroen C5, kompleksowe czyszczenie samochodu wykonane perfekcyjnie. Samochód w środku jak i na zewnątrz wygląda jak nowy. Panowie gratuluję takiego podejścia do swojej wykonywanej pracy i oczywiście wszystkim serdecznie bardzo polecam skorzystać z usług tej firmy.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "50.675106",
      longitude: "17.921298",
    },
    openingHours: ["Mo,Tu,We,Th,Fr 07:00-20:00", "Sa 08:00-18:00"],
    priceRange: "PLN",
    sameAs: [
      "https://www.facebook.com/profile.php?id=61554800660887",
      "https://www.instagram.com/kabe_tintleather_autodetailing/",
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
  };

  const localBusinessSnippetNoReviews = JSON.parse(
    JSON.stringify(localBusinessSnippet)
  );
  delete localBusinessSnippetNoReviews.aggregateRating;
  delete localBusinessSnippetNoReviews.review;

  const commonOfferDetails = {
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: "PL",
      },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: {
          "@type": "QuantitativeValue",
          minValue: 1,
          maxValue: 3,
          unitCode: "d",
        },
        transitTime: {
          "@type": "QuantitativeValue",
          minValue: 1,
          maxValue: 5,
          unitCode: "d",
        },
      },
    },
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      isReturnable: true,
      returnPolicyCategory: "RefundPolicy",
      merchantReturnDays: 14,
      returnMethod: "ReturnByMail",
      returnFees: "FreeReturn",
      applicableCountry: "PL",
    },
  };

  const productSnippet = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Kompleksowe usługi autodetailingu",
    image: [image],
    description: description,
    sku: "SERV-001",
    mpn: "SERV-001",
    productID: "kabetintleather-service-bundle",
    brand: {
      "@type": "Brand",
      name: "KabeTintLeather",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "3",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Dariusz Grzebień",
        },
        datePublished: "2025-02-03",
        reviewBody:
          "Auto oddane na kompleksowe czyszczenie wnętrza wraz z praniem tapicerki, dodatkowo nałożona została powłoka ceramiczną oraz zabezpieczony został front folia PPF. polecam!",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Denis Bul",
        },
        datePublished: "2025-02-17",
        reviewBody:
          "Mimo że auto jest nowe, zdecydowałem się na korektę lakieru One Step przed nałożeniem 2-letniej powłoki ceramicznej – jak się okazało, to standardowa procedura, aby usunąć mikro zarysowania i maksymalnie przygotować powierzchnię pod zabezpieczenie. Pan Kamil wykonał usługę perfekcyjnie! Lakier zyskał niesamowitą głębię i blask, a powłoka ceramiczna dodała efektu szklistości i ochrony. Samochód wygląda lepiej niż w salonie! Największym atutem, poza samą jakością pracy, było profesjonalne podejście i ogromna wiedza Pana Kamila. Poświęcił czas, aby dokładnie wytłumaczyć mi, jak działają powłoki, jak o nie dbać i na co zwracać uwagę, aby efekt utrzymał się jak najdłużej. Widać, że to pasjonat w swoim fachu. Jeśli ktoś szuka fachowej usługi detailingowej, to zdecydowanie polecam Pana Kamila",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Tomasz Proszkowiec",
        },
        datePublished: "2025-01-24",
        reviewBody:
          "Citroen C5, kompleksowe czyszczenie samochodu wykonane perfekcyjnie. Samochód w środku jak i na zewnątrz wygląda jak nowy. Panowie gratuluję takiego podejścia do swojej wykonywanej pracy i oczywiście wszystkim serdecznie bardzo polecam skorzystać z usług tej firmy.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      },
    ],

    offers: [
      {
        "@type": "Offer",
        name: "Mycie ręczne pojazdu",
        url: url,
        price: "80",
        priceCurrency: "PLN",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        ...commonOfferDetails,
      },
      {
        "@type": "Offer",
        name: "Mycie ręczne pojazdu z powłoką syntetyczną",
        url: url,
        price: "150",
        priceCurrency: "PLN",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        ...commonOfferDetails,
      },
      {
        "@type": "Offer",
        name: "Pranie tapicerki materiałowej (wnętrze auta)",
        url: url,
        price: "300",
        priceCurrency: "PLN",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        ...commonOfferDetails,
      },
      {
        "@type": "Offer",
        name: "Czyszczenie tapicerki skórzanej (5 foteli)",
        url: url,
        price: "350",
        priceCurrency: "PLN",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        ...commonOfferDetails,
      },
      {
        "@type": "Offer",
        name: "Impregnacja tapicerki skórzanej",
        url: url,
        price: "150",
        priceCurrency: "PLN",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        ...commonOfferDetails,
      },
      {
        "@type": "Offer",
        name: "Renowacja tapicerki skórzanej (od 200 zł)",
        url: url,
        price: "200",
        priceCurrency: "PLN",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        ...commonOfferDetails,
      },
      {
        "@type": "Offer",
        name: "Renowacja kierownicy skórzanej",
        url: url,
        price: "250",
        priceCurrency: "PLN",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        ...commonOfferDetails,
      },
      {
        "@type": "Offer",
        name: "Kompleksowe czyszczenie wnętrza bez prania tapicerki / czyszczenia skóry",
        url: url,
        price: "200",
        priceCurrency: "PLN",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        ...commonOfferDetails,
      },
      {
        "@type": "Offer",
        name: "Kompleksowe czyszczenie wnętrza z praniem tapicerki / czyszczenia skóry",
        url: url,
        price: "500",
        priceCurrency: "PLN",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        ...commonOfferDetails,
      },
      {
        "@type": "Offer",
        name: "Mycie ręczne z powłoką, kompleksowe czyszczenie wnętrza (bez prania tapicerki/ czyszczenia skóry)",
        url: url,
        price: "350",
        priceCurrency: "PLN",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        ...commonOfferDetails,
      },
      {
        "@type": "Offer",
        name: "Mycie ręczne, kompleksowe czyszczenie wnętrza (z praniem tapicerki/ czyszczeniem skór oraz powłoką syntetyczną)",
        url: url,
        price: "600",
        priceCurrency: "PLN",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        ...commonOfferDetails,
      },
      {
        "@type": "Offer",
        name: "Przyciemnianie szyb samochodowych (od 450 zł)",
        url: url,
        price: "450",
        priceCurrency: "PLN",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        ...commonOfferDetails,
      },
      {
        "@type": "Offer",
        name: "Naprawa podsufitki samochodowej (od 600 zł)",
        url: url,
        price: "600",
        priceCurrency: "PLN",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        ...commonOfferDetails,
      },
      {
        "@type": "Offer",
        name: "Korekta lakieru (od 800 zł)",
        url: url,
        price: "800",
        priceCurrency: "PLN",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        ...commonOfferDetails,
      },
      {
        "@type": "Offer",
        name: "Ochronna folia PPF (cena ustalana indywidualnie)",
        url: url,
        price: "0.01",
        priceCurrency: "PLN",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/PreOrder",
        priceValidUntil: "2026-12-31",
        ...commonOfferDetails,
      },
      {
        "@type": "Offer",
        name: "Powłoka ceramiczna (od 1400 zł)",
        url: url,
        price: "1400",
        priceCurrency: "PLN",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        ...commonOfferDetails,
      },
    ],
  };

  const structuredData = isBlogPost
    ? blogSnippet
    : isProduct
    ? [
        isHome ? localBusinessSnippet : localBusinessSnippetNoReviews,
        productSnippet,
      ]
    : isHome
    ? localBusinessSnippet
    : localBusinessSnippetNoReviews;

  return (
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
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>
  );
};

export default SEO;
