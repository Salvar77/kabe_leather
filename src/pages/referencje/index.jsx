import React from "react";
import Image from "next/image";
import ElfsightWidget from "@/components/Main/ElfsightWidget";
import SEO from "@/components/Main/SEO";
import classes from "./referencje.module.scss";

import { motion } from "framer-motion";
import { textVariant, fadeIn, fadeScale } from "../../../utils/motion";
import useMediaQuery from "../../hooks/useMediaQuery";

import { referencyImages } from "../../../constants";

const Referency = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Użycie warunkowego przypisania do komponentów Framer Motion
  const WrapperDiv = isDesktop ? motion.div : "div";
  const WrapperH1 = isDesktop ? motion.h1 : "h1";
  const WrapperH2 = isDesktop ? motion.h2 : "h2";
  const WrapperP = isDesktop ? motion.p : "p";
  const WrapperBlockquote = isDesktop ? motion.blockquote : "blockquote";

  return (
    <div>
      <SEO
        title="Referencje - KabeTintLeather Pranie tapicerki, Czyszczenie samochodu, Czyszczenie tapicerki"
        description="Sprawdź opinie naszych zadowolonych klientów! Referencje i zdjęcia z realizacji KabeTintLeather Auto Detailing - Pranie tapicerki, Czyszczenie samochodu, Czyszczenie tapicerki."
        image="https://www.kabetintleather.opole.pl/logo-kabetintleather-auto-detailing-opole.jpg"
        url="https://www.kabetintleather.opole.pl/referencje"
      />

      <section id="referencje" className={classes.referencySection}>
        {/* H1 z animacją tylko na desktopie */}
        <WrapperH1
          variants={isDesktop ? textVariant(0.1) : null}
          initial={isDesktop ? "hidden" : null}
          whileInView={isDesktop ? "show" : null}
          viewport={isDesktop ? { once: true, amount: 0.2 } : null}
        >
          Referencje
        </WrapperH1>

        {/* Galeria zdjęć (pozostawiamy twoje obecne rozwiązanie z dwoma obrazami) */}
        <div className={classes.photosContainer}>
          {referencyImages.map((photo, i) => (
            <div key={i} className={classes.photoWrapper}>
              <Image
                src={photo.src}
                alt={`Referencje - ${photo.alt} - pranie tapicerki, czyszczenie samochodu`}
                className={classes.mobileImage}
                priority={i === 0}
              />
              <Image
                src={photo.largeSrc}
                alt={`Referencje - ${photo.alt} - pranie tapicerki, czyszczenie samochodu`}
                className={classes.desktopImage}
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        <div className={classes.reviewsWrapper}>
          {/* LEWA KOLUMNA */}
          <WrapperDiv
            className={classes.reviewsLeftContainer}
            variants={isDesktop ? fadeIn("up", "tween", 0.2, 0.8) : null}
            initial={isDesktop ? "hidden" : null}
            whileInView={isDesktop ? "show" : null}
            viewport={isDesktop ? { once: true, amount: 0.2 } : null}
          >
            <WrapperH2 variants={isDesktop ? textVariant(0.1) : null}>
              Opinie klientów o KabeTintLeather – Opole
            </WrapperH2>

            <WrapperP
              variants={isDesktop ? fadeIn("up", "tween", 0.3, 0.8) : null}
            >
              Od wielu lat pomagam kierowcom z Opola i okolic dbać o wnętrza ich
              samochodów. Moje usługi detailingowe,&nbsp;
              <strong>pranie tapicerki</strong>,&nbsp;
              <strong>czyszczenie tapicerki</strong> oraz&nbsp;
              <strong>korekta lakieru</strong> zyskały zaufanie zarówno wśród
              właścicieli nowych aut, jak i klasyków. Opinie klientów są dla
              mnie najważniejszą rekomendacją – to dzięki nim rozwijam się i
              zdobywam kolejne realizacje. Poniżej znajdziesz wybrane&nbsp;
              <strong>referencje auto detailing Opole</strong>. Pełną listę
              recenzji możesz sprawdzić w&nbsp;
              <a
                href="https://www.google.com/search?q=kabetintleather"
                target="_blank"
                rel="noopener"
              >
                wizytówce Google
              </a>
              .
            </WrapperP>

            <WrapperP
              variants={isDesktop ? fadeIn("up", "tween", 0.4, 0.8) : null}
            >
              Jeśli interesują Cię&nbsp;
              <strong>opinie klientów o praniu tapicerki</strong> lub&nbsp;
              <strong>czyszczenie tapicerki opinie Opole</strong>, jesteś we
              właściwym miejscu. Moje podejście i efekty pracy mówią same za
              siebie – najlepiej potwierdzają to realne&nbsp;
              <strong>opinie klientów z Opola</strong>, dostępne poniżej oraz w
              sieci.
              <br />
              <br />
              📍 <strong>Działam w Opolu i okolicach:</strong> Ozimek, Prószków,
              Komprachcice, Lubniany, Zaodrze, Malina, Wrzoski, Półwieś.
              <br />
              📞 Zadzwoń: <a href="tel:881325631">881&nbsp;325&nbsp;631</a>
              <br />
              ✉️ Napisz:&nbsp;
              <a href="mailto:kabetint@gmail.com">kabetint@gmail.com</a>
            </WrapperP>
          </WrapperDiv>

          {/* PRAWA KOLUMNA */}
          <div className={classes.reviewsRightContainer}>
            <ul>
              <li>
                <WrapperBlockquote
                  variants={isDesktop ? fadeScale(0.5, 0.8) : null}
                  initial={isDesktop ? "hidden" : null}
                  whileInView={isDesktop ? "show" : null}
                  viewport={isDesktop ? { once: true, amount: 0.1 } : null}
                >
                  „Serdecznie polecam! Super kontakt, szybko wykonana usługa,
                  samochód po czyszczeniu mimo swojego wieku wygląda jak nowy :)
                  Będę polecać i w razie potrzeby ponownie korzystać!”
                  <br />
                  <strong>— Katarzyna I</strong>
                </WrapperBlockquote>
              </li>
              <li>
                <WrapperBlockquote
                  variants={isDesktop ? fadeScale(0.6, 0.8) : null}
                  initial={isDesktop ? "hidden" : null}
                  whileInView={isDesktop ? "show" : null}
                  viewport={isDesktop ? { once: true, amount: 0.1 } : null}
                >
                  „Bardzo polecam‼️ Fachowo i kompleksowo wysprzątane auto. Pan
                  się bardzo przyłożył, pomimo że samochód był naprawdę w
                  tragicznym stanie. Środek samochodu jak również karoseria z
                  zewnątrz wyczyszczone na medal🥇&nbsp;– do tego miła obsługa.
                  Na pewno tam wrócę 😊”
                  <br />
                  <strong>— Bożena Tymoszko</strong>
                </WrapperBlockquote>
              </li>
              <li>
                <WrapperBlockquote
                  variants={isDesktop ? fadeScale(0.7, 0.8) : null}
                  initial={isDesktop ? "hidden" : null}
                  whileInView={isDesktop ? "show" : null}
                  viewport={isDesktop ? { once: true, amount: 0.1 } : null}
                >
                  „Mimo że auto jest nowe, zdecydowałem się na korektę lakieru
                  One Step przed nałożeniem 2-letniej powłoki ceramicznej – jak
                  się okazało, to standardowa procedura, aby usunąć mikro
                  zarysowania i maksymalnie przygotować powierzchnię pod
                  zabezpieczenie. Pan Kamil wykonał usługę perfekcyjnie! Lakier
                  zyskał niesamowitą głębię i blask, a powłoka ceramiczna dodała
                  efektu szklistości i ochrony. Samochód wygląda lepiej niż w
                  salonie! Największym atutem, poza samą jakością pracy, było
                  profesjonalne podejście i ogromna wiedza Pana Kamila.
                  Poświęcił czas, aby dokładnie wytłumaczyć mi, jak działają
                  powłoki, jak o nie dbać i na co zwracać uwagę, aby efekt
                  utrzymał się jak najdłużej. Widać, że to pasjonat w swoim
                  fachu. Jeśli ktoś szuka fachowej usługi detailingowej, to
                  zdecydowanie polecam Pana Kamila.”
                  <br />
                  <strong>— Denis Bul</strong>
                </WrapperBlockquote>
              </li>
            </ul>
          </div>
        </div>

        {/* widget */}
        <WrapperDiv
          className={classes.widgetWrapper}
          variants={isDesktop ? fadeIn("up", "tween", 0.2, 0.8) : null}
          initial={isDesktop ? "hidden" : null}
          whileInView={isDesktop ? "show" : null}
          viewport={isDesktop ? { once: true, amount: 0.2 } : null}
        >
          <ElfsightWidget />
        </WrapperDiv>
      </section>
    </div>
  );
};

export default Referency;
