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
        url: "https://www.kabetintleather.opole.pl/logo-kabetintleather-auto-detailing-opole.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  const localBusinessSnippet = {
    "@context": "https://schema.org",
    "@id": "http://www.kabetintleather.opole.pl/",
    "@type": "LocalBusiness",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PL",
      addressLocality: "Opole",
      addressRegion: "PL",
      postalCode: "45-273",
      streetAddress: "Generała Emila Fieldorfa 12",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      bestRating: "5",
      ratingCount: "43",
      ratingValue: "5.0",
    },
    description:
      "KabeTintLeather to firma specjalizująca się w kompleksowym autodetailingu. Oferujemy szeroki zakres usług, w tym pranie tapicerki samochodowej, czyszczenie, renowację i impregnację skór, przywracając im pierwotny wygląd i trwałość. Zajmujemy się także polerowaniem lakieru oraz reflektorów, usuwając zarysowania i przywracając blask pojazdu. Dodatkowo, nakładamy folie PPF (Paint Protection Film), chroniąc lakier przed uszkodzeniami. Oferujemy również naprawę podsufitek samochodowych, dbając o detale, które sprawiają, że Twoje auto wygląda jak nowe. Zapraszam do korzystania z naszych usług KabeTintLeather Opole.",
    hasMap: "https://maps.google.com/maps?cid=2514215909979545298",
    image:
      "https://lh3.googleusercontent.com/fYcRPzM9pXxHoFVGVa1fcXQiNtKtpItNFh4UxjvDiw9gsNU6-9Ayb90kqSqr6D0jVqSMWHit6d7OD2VeuA=s0",
    makesOffer: [
      { "@type": "Offer", name: "Czyszczenie samochodów" },
      { "@type": "Offer", name: "Czyszczenie tapicerki" },
      { "@type": "Offer", name: "Myjnia samochodowa" },
      { "@type": "Offer", name: "Naprawa wyrobów skórzanych" },
      { "@type": "Offer", name: "Mycie ciśnieniowe" },
      { "@type": "Offer", name: "Usługi oklejania pojazdów" },
      { "@type": "Offer", name: "Usługa przyciemniania szyb samochodowych" },
    ],
    name: "KabeTintLeather - Pranie tapicerki samochodowej Opole",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        closes: "20:00:00",
        dayOfWeek: "MONDAY",
        opens: "07:00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        closes: "20:00:00",
        dayOfWeek: "TUESDAY",
        opens: "07:00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        closes: "20:00:00",
        dayOfWeek: "WEDNESDAY",
        opens: "07:00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        closes: "20:00:00",
        dayOfWeek: "THURSDAY",
        opens: "07:00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        closes: "20:00:00",
        dayOfWeek: "FRIDAY",
        opens: "07:00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        closes: "18:00:00",
        dayOfWeek: "SATURDAY",
        opens: "08:00:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/people/Kabe-TintLeather-Auto-Detailing/61554800660887/",
      "https://www.instagram.com/kabetintleather_autodetailing/",
      "https://www.youtube.com/@KabeTintLeather",
      "https://www.tiktok.com/@kabetintleather",
      "https://www.oferteo.pl/kabe-tintleather-pranie-tapicerki-samochodowej-opole/firma/6596416",
      "https://www.baza-firm.com.pl/myjnie-samochodowe-auto-detailing/opole/kabe-tintleather/pl/388643.html",
      "https://aleo.com/pl/firma/kabe-tint-leather-kamil-brzoskwinia",
      "https://www.cylex-polska.pl/firmy/kabetintleather---pranie-tapicerki-samochodowej-opole-14325875.html#address",
      "https://mapa.targeo.pl/kabetintleather-gen-fieldorfa-nila-augusta-emila-12-45-273-opole~24104337/myjnia-samochodowa/adres",
      "https://teraz-otwarte.pl/opole/kabetintleather-pranie-tapicerki-samochodowej-opole-4246979",
      "https://firmania.pl/opole/kabetintleather-pranie-tapicerki-samochodowej-opole-1355084",
      "https://powiatopolski.pl/494/firma.html?id=246",
      "https://www.24opole.pl/38983,KaBe_TintLeather_Pranie_Tapicerki_samochodowej,firma.html",
      "https://www.orlyczystosci.pl/profile-526226-kabe-tint-leather-auto-detailing",
      "https://www.firmy.net/uslugi-motoryzacyjne/kabetintleather.html",
      "https://katalog-firm.cybo.com/PL-biz/kabe-tintleather-pranie-tapicerki",
      "https://znane-firmy.pl/firma/54457+kabe-tintleather.html",
      "https://twojeopinie.com/kabetint-leather",
    ],
    areaServed: {
      "@type": "Place",
      name: "Opole, Polska",
    },
    telephone: "+48 881 325 631",
    url: "http://www.kabetintleather.opole.pl/",
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
