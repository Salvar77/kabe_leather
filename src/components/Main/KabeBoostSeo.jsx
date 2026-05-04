import Head from "next/head";

const KabeBoostSeo = () => {
  const domain = "https://www.kabetintleather.opole.pl";

  // 1. FAQPage - Nowe ulepszenie w GSC
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ile trwa przyciemnianie szyb w KabeTintLeather?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Profesjonalne przyciemnianie szyb trwa zazwyczaj od 2 do 4 godzin. Stosujemy najwyższej jakości folie z 10-letnią gwarancją."
        }
      },
      {
        "@type": "Question",
        "name": "Czy oferujecie dojazd do klienta na pranie tapicerki?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usługi detailingu i prania tapicerki wykonujemy stacjonarnie w naszym studiu w Opolu przy ul. Fieldorfa 12, aby zapewnić idealne warunki schnięcia i oświetlenia."
        }
      },
      {
        "@type": "Question",
        "name": "Jakie są korzyści z nałożenia folii ochronnej PPF?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Folia PPF to najmocniejsza ochrona lakieru przed odpryskami, zarysowaniami i chemią drogową. Jest samoregenerująca i całkowicie przezroczysta."
        }
      }
    ]
  };

  // 2. BreadcrumbList - Kolejne nowe ulepszenie w GSC
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Start", "item": domain },
      { "@type": "ListItem", "position": 2, "name": "Usługi", "item": `${domain}/#services` },
      { "@type": "ListItem", "position": 3, "name": "Kontakt", "item": `${domain}/#contact` }
    ]
  };

  // 3. Dodatkowe Produkty (zwiększą licznik w "Zakupy" bez usuwania starego)
  const extraProducts = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Przyciemnianie szyb samochodowych Opole",
      "image": `${domain}/logo-kabetintleather-auto-detailing-opole.jpg`,
      "description": "Profesjonalne przyciemnianie szyb atestowanymi foliami. Redukcja nagrzewania i ochrona UV.",
      "brand": { "@type": "Brand", "name": "KabeTintLeather" },
      "offers": {
        "@type": "Offer",
        "price": "450.00",
        "priceCurrency": "PLN",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
        "url": domain
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Renowacja tapicerki skórzanej",
      "image": `${domain}/logo-kabetintleather-auto-detailing-opole.jpg`,
      "description": "Przywracanie koloru i struktury skórze samochodowej. Usuwanie przetarć i pęknięć.",
      "brand": { "@type": "Brand", "name": "KabeTintLeather" },
      "offers": {
        "@type": "Offer",
        "price": "200.00",
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
