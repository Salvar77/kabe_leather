import Head from "next/head";

const KabeBoostSeo = () => {
  const domain = "https://www.kabetintleather.opole.pl";

  // 1. FAQPage - Dostosowane pod realną ofertę i sprzęt (Menzerna, Colourlock)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jakich produktów używacie do renowacji skór w KabeTintLeather?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "W naszym studiu w Opolu korzystamy z profesjonalnego systemu Colourlock. Pozwala on na trwałe przywrócenie koloru i struktury tapicerki skórzanej, zapewniając efekt świeżości na lata."
        }
      },
      {
        "@type": "Question",
        "name": "Czym wykonujecie korektę lakieru?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Korektę lakieru wykonujemy z użyciem maszyn polerskich Rupes oraz past Menzerna. Dzięki połączeniu precyzyjnych technik i ponad 10-letniego doświadczenia, usuwamy zarysowania i wydobywamy głębię koloru."
        }
      },
      {
        "@type": "Question",
        "name": "Gdzie dokładnie znajduje się Wasze studio detailingu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "KabeTintLeather Auto Detailing znajduje się w Opolu przy ul. Generała Emila Fieldorfa 12. Zapraszamy do kontaktu pod numerem +48 881 325 631."
        }
      }
    ]
  };

  // 2. BreadcrumbList - Spójna nawigacja
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Start", "item": domain },
      { "@type": "ListItem", "position": 2, "name": "Usługi Detailingowe", "item": `${domain}/#uslugi` },
      { "@type": "ListItem", "position": 3, "name": "Kontakt", "item": `${domain}/#contact` }
    ]
  };

  // 3. Dodatkowe Produkty - Precyzyjne nazewnictwo
  const extraProducts = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Renowacja i Czyszczenie Skór Colourlock Opole",
      "image": `${domain}/logo-kabetintleather-auto-detailing-opole.jpg`,
      "description": "Profesjonalna renowacja tapicerki skórzanej systemem Colourlock. Przywracanie koloru i impregnacja skór premium.",
      "brand": { "@type": "Brand", "name": "KabeTintLeather" },
      "offers": {
        "@type": "Offer",
        "price": "200.00",
        "priceCurrency": "PLN",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
        "url": domain
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Korekta Lakieru Menzerna & Rupes",
      "image": `${domain}/logo-kabetintleather-auto-detailing-opole.jpg`,
      "description": "Wieloetapowa korekta lakieru maszynowo (Rupes) z użyciem past Menzerna. Usuwanie rys i nadawanie lustrzanego blasku.",
      "brand": { "@type": "Brand", "name": "KabeTintLeather" },
      "offers": {
        "@type": "Offer",
        "price": "800.00",
        "priceCurrency": "PLN",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
        "url": domain
      }
    }
  ];

  return (
    <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {extraProducts.map((p, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(p) }} />
      ))}
    </Head>
  );
};

export default KabeBoostSeo;
