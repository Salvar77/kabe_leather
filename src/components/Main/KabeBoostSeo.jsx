import Head from "next/head";

const KabeBoostSeo = () => {
  const domain = "https://www.kabetintleather.opole.pl";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Jakich produktów używacie do renowacji skór w KabeTintLeather?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "W naszym studiu w Opolu korzystamy z profesjonalnego systemu Colourlock. Pozwala on na trwałe przywrócenie koloru i struktury tapicerki skórzanej, zapewniając efekt świeżości na lata.",
        },
      },
      {
        "@type": "Question",
        name: "Czym wykonujecie korektę lakieru?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Korektę lakieru wykonujemy z użyciem maszyn polerskich Rupes oraz past Menzerna. Dzięki połączeniu precyzyjnych technik i ponad 10-letniego doświadczenia, usuwamy zarysowania i wydobywamy głębię koloru.",
        },
      },
      {
        "@type": "Question",
        name: "Gdzie dokładnie znajduje się Wasze studio detailingu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "KabeTintLeather Auto Detailing znajduje się w Opolu przy ul. Generała Emila Fieldorfa 12. Zapraszamy do kontaktu pod numerem +48 881 325 631.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: domain },
      {
        "@type": "ListItem",
        position: 2,
        name: "Usługi",
        item: `${domain}/#usługi`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Realizacje",
        item: `${domain}/realizacje`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Kontakt",
        item: `${domain}/kontakt`,
      },
    ],
  };

  const sharedReturnPolicy = {
    "@type": "MerchantReturnPolicy",
    "applicableCountry": "PL",
    "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
  };

  const sharedShipping = {
    "@type": "OfferShippingDetails",
    "shippingRate": {
      "@type": "MonetaryAmount",
      "value": "0",
      "currency": "PLN",
    },
    "shippingDestination": {
      "@type": "DefinedRegion",
      "addressCountry": "PL",
    },
    "deliveryTime": {
      "@type": "ShippingDeliveryTime",
      "handlingTime": {
        "@type": "QuantitativeValue",
        "minValue": 0,
        "maxValue": 1,
        "unitCode": "DAY",
      },
      "transitTime": {
        "@type": "QuantitativeValue",
        "minValue": 0,
        "maxValue": 1,
        "unitCode": "DAY",
      },
    },
  };

  const extraProducts = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Renowacja i Czyszczenie Skór Colourlock Opole",
      image: `${domain}/logo-kabetintleather-auto-detailing-opole.jpg`,
      description:
        "Profesjonalna renowacja tapicerki skórzanej systemem Colourlock. Przywracanie koloru i impregnacja skór premium.",
      brand: { "@type": "Brand", name: "KabeTintLeather" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "54",
        bestRating: "5",
        worstRating: "1",
      },
      review: {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Dariusz Grzebień",
        },
        reviewBody:
          "Auto oddane na kompleksowe czyszczenie wnętrza. Skóry po renowacji wyglądają jak nowe, są miękkie i świetnie zabezpieczone. Szczerze polecam!",
      },
      offers: {
        "@type": "Offer",
        price: "200.00",
        priceCurrency: "PLN",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        url: domain,
        hasMerchantReturnPolicy: sharedReturnPolicy,
        shippingDetails: sharedShipping,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Korekta Lakieru Menzerna & Rupes",
      image: `${domain}/logo-kabetintleather-auto-detailing-opole.jpg`,
      description:
        "Wieloetapowa korekta lakieru maszynowo (Rupes) z użyciem past Menzerna. Usuwanie rys i nadawanie lustrzanego blasku.",
      brand: { "@type": "Brand", name: "KabeTintLeather" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "48",
        bestRating: "5",
        worstRating: "1",
      },
      review: {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Denis Bul",
        },
        reviewBody:
          "Pan Kamil wykonał korektę lakieru perfekcyjnie! Lakier zyskał niesamowitą głębię i blask. Samochód wygląda lepiej niż w salonie!",
      },
      offers: {
        "@type": "Offer",
        price: "800.00",
        priceCurrency: "PLN",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        url: domain,
        hasMerchantReturnPolicy: sharedReturnPolicy,
        shippingDetails: sharedShipping,
      },
    },
  ];

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {extraProducts.map((p, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(p) }}
        />
      ))}
    </Head>
  );
};

export default KabeBoostSeo;
