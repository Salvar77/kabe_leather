import React, { useState, useRef, useEffect } from "react";
import styles from "./PricingSection.module.scss";
import Contact from "@/components/Main/Contact";
import cn from "classnames";
import Image from "next/image";
import foto1 from "../../assets/image/detalShot1.jpg";
import foto2 from "../../assets/image/detalShot6.jpg";
import foto3 from "../../assets/image/detalShot3.jpg";
import foto4 from "../../assets/image/detalShot4.jpg";
import foto5 from "../../assets/image/detalShot5.jpg";
import foto6 from "../../assets/image/detalShot2.jpg";

const PricingSection = () => {
  const [activeService, setActiveService] = useState(null);

  const contentRefs = useRef(new Map());

  const services = [
    {
      id: 1,
      name: "DETAILING WNĘTRZA - Tapicerka skórzana 🖌️",
      details: [
        "Kompleksowe odkurzanie wnętrza 🧹",
        "Czyszczenie specjalistycznymi pędzelkami kanałów wentylacyjnych, wszelkich otworów, zamków i przycisków ✨",
        "Czyszczenie tapicerki skórzanej oraz impregnacja 🫧",
        "Czyszczenie boczków drzwi, podłogi bagażnika, wykładziny podłogowej oraz dywaników 🧤",
        "Czyszczenie deski rozdzielczej i plastików wewnątrz 🌟",
        "Czyszczanie i pielęgnacja komory bagażnika łącznie z kołem zapasowym 🧽",
        "Mycie szyb zarówno wewnątrz, jak i na zewnątrz 🧼",
        "Impregnacja oczyszczonej powierzchni 🚿",
      ],
      imagePath: foto1,
      prices: {
        small: "Od 400 zł",
        medium: "Od 500 zł",
        large: "Od 600 zł",
      },
      description: "Opis usługi myjnia ręczna...",
    },
    {
      id: 2,
      name: "DETAILING WNĘTRZA - Tapicerka materiałowa 🖌️",
      details: [
        "Kompleksowe odkurzanie wnętrza 🧹",
        "Czyszczenie specjalistycznymi pędzelkami kanałów wentylacyjnych, wszelkich otworów, zamków i przycisków ✨",
        "Pranie ekstrakcyjne foteli, tylniej kanapy, boczków drzwi, bagażnika, dywaników oraz wykładzin podłogowych 🫧",
        "Czyszczenie deski rozdzielczej i plastików wewnętrz 🧤",
        "Czyszczenie i pielęgnacja komory bagażnika łącznie z kołem zapasowym 🧽",
        "Oczyszczanie elementów plastikowych 🌟",
        "Mycie szyb zarówno wewnątrz, jak i na zewnątrz 🧼",
        "Impregnacja oczyszczonej powierzchni 🚿",
      ],
      imagePath: foto2,
      prices: {
        small: "Od 400 zł",
        medium: "Od 500 zł",
        large: "Od 600 zł",
      },
      description: "Opis usługi myjnia ręczna...",
    },
    {
      id: 3,
      name: "MYCIE DETAILINGOWE - Zewnątrz 🪣",
      details: [
        "Mycie wstępne aktywną pianą o neutralnym ph ✨",
        "Usuwanie zabrudzeń organicznych (owady) 🍃",
        "Bezpieczne mycie felg 🪄",
        "Bezpieczne mycie zasadnicze neutralnym szamponem przy użyciu delikatnej rękawicy z owczej wełny (bez zarysowań) 🫧",
        "Bezpieczne osuszenie karoserii ręcznikiem z mikrofibry i sprężonym powietrzem 🧤",
        "Odświeżanie lakieru Quick Detailerem 🌟",
        "Naczernianie opon ✅",
      ],
      imagePath: foto5,
      prices: {
        small: "Od 150 zł",
        medium: "Od 200 zł",
        large: "Od 250 zł",
      },
      description: "Opis usługi myjnia ręczna...",
    },
    {
      id: 4,
      name: "MYCIE DETAILINGOWE - Pakiet Standard 🚿",
      details: [
        "Mycie samochodu profesjonalnym szamponem 🫧",
        "Czyszczenie i odtłuszczanie karoserii i felg 🧽",
        "Detailing wnętrza - kompleksowe odkurzanie wnętrza / czyszczenie specjalistycznymi pędzelkami kanałów wentylacyjnych, wszelkich otworów, zakamarków i przycisków / czyszczenie deski rozdzielczej i plastików wenątrz / czyszczenie i pielęgnacja komory bagażnika łącznie z kołem zapasowym 🍃",
        "Mycie szyb od wewnątrz i zewnątrz 🚿",
        "Dressing na opony ✨",
        "Zabezpieczenie szyby czołowej powłoką hydrofobową 💧",
      ],
      imagePath: foto6,
      prices: {
        small: "Od 300 zł",
        medium: "Od 350 zł",
        large: "Od 400 zł",
      },
      description: "Opis usługi myjnia ręczna...",
    },
    {
      id: 5,
      name: "MYCIE DETAILINGOWE - Pakiet Comfort 🪄",
      details: [
        "Mycie samochodu profesjonalnym szamponem 🫧",
        "Czyszczenie i odłuszczanie karoserii i felg 🧽",
        "Dekontaminacja lakieru (usuwanie smoły, żywicy, opiłków żelza - również z felg) 🧤",
        "Pełny detailing wnętrza - kompleksowe odkurzanie wnętrza / czyszczenie specjalistyczne pędzelkami kanałów wentylacyjnych, wszelkich otworów, zakamarków i przycisków, pranie foteli, tylnej kanapy, boczków drzwi, bagażnika, dywaników oraz wykładzin podłogowych/  czyszczenie i pielęgnacja komory bagażnika łącznie z kołem zapasowym 🍃",
        "Mycie szyb zarówno wewnątrz, jak i na zewnątrz 🚿",
        "Dressing na opony ✨",
        "Zabezpieczenie szyby czołowej powłoką hydrofobową 💧",
        "Ręczna aplikacja twardego wosku 🛠️",
      ],
      imagePath: foto6,
      prices: {
        small: "Od 600 zł",
        medium: "Od 700 zł",
        large: "Od 800 zł",
      },
      description: "Opis usługi myjnia ręczna...",
    },

    // ... inne usługi
  ];

  useEffect(() => {
    // Dla każdego serwisu ustawiamy maxHeight na 0 lub scrollHeight w zależności od stanu
    services.forEach((service) => {
      const currentRef = contentRefs.current.get(service.id);
      currentRef.style.maxHeight =
        activeService === service.id ? `${currentRef.scrollHeight}px` : "0";
    });
  }, [activeService, services]);

  const toggleService = (id) => {
    console.log("Current activeService before toggle:", activeService);
    setActiveService(activeService === id ? null : id);
    console.log(
      "New activeService after toggle:",
      activeService === id ? null : id
    );
  };

  return (
    <section id="cennik" className={styles.pricingSection}>
      <h2 className={styles.pricingHeader}>Cennik</h2>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            <div
              className={cn(styles.serviceHeader, {
                [styles.active]: activeService === service.id,
              })}
              onClick={() => toggleService(service.id)}
            >
              {service.name}
            </div>
            <div
              className={cn(styles.serviceDetails, {
                [styles.active]: activeService === service.id,
              })}
              ref={(el) => {
                contentRefs.current.set(service.id, el);
              }}
            >
              {activeService === service.id && (
                <div className={styles.img}>
                  {/* Here you use the Image component to load the imagePath associated with the active service */}
                  <Image
                    src={services.find((s) => s.id === activeService).imagePath}
                    alt={service.name}
                  />
                </div>
              )}
              <h3 className={styles.h3}>{service.name}</h3>
              <ul className={styles.pricingList}>
                {/* Bezpośrednie mapowanie tablicy details */}
                {service.details.map((detail, index) => (
                  <li key={index} className={styles.pricingListItem}>
                    {detail}
                  </li>
                ))}
              </ul>
              <div className={styles.pricingInfo}>
                <div className={styles.pricingType}>
                  Małe auta: od{" "}
                  <span className={styles.priceValue}>
                    {service.prices.small.split(" ")[1]}
                  </span>{" "}
                  zł
                </div>
                <div className={styles.pricingType}>
                  Średnie auta: od{" "}
                  <span className={styles.priceValue}>
                    {service.prices.medium.split(" ")[1]}
                  </span>{" "}
                  zł
                </div>
                <div className={styles.pricingType}>
                  Duże auta: od{" "}
                  <span className={styles.priceValue}>
                    {service.prices.large.split(" ")[1]}
                  </span>{" "}
                  zł
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Contact />
    </section>
  );
};

export default PricingSection;
