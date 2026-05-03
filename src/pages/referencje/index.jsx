import React from "react";
import Image from "next/image";
import SEO from "@/components/Main/SEO";
import classes from "./referencje.module.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn, fadeScale } from "../../../utils/motion";

import { referencyImages } from "../../../constants/index";

import ElfsightWidget from "@/components/Main/ElfsightWidget";
import ElfsightLazyWrapper from "@/components/Main/ElfsightLazyWrapper";

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 769);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  return isDesktop;
};

const Referency = () => {
  const isDesktop = useIsDesktop();

  return (
    <div>
      <SEO
        title="Opinie i Referencje KabeTintLeather | Auto Detailing Opole"
        description="Sprawdź opinie o moich usługach! Referencje KabeTintLeather Opole: profesjonalne pranie tapicerki i czyszczenie aut. Zobacz efekty mojej pracy!"
        image="https://www.kabetintleather.opole.pl/logo-kabetintleather-auto-detailing-opole.jpg"
        url="https://www.kabetintleather.opole.pl/referencje"
      />

      <section id="referencje" className={classes.referencySection}>
        {isDesktop ? (
          <motion.h1
            variants={textVariant(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            Referencje
          </motion.h1>
        ) : (
          <h1>Referencje</h1>
        )}

        <div className={classes.photosContainer}>
          {referencyImages.map((photo, i) => (
            <div key={i} className={classes.photoWrapper}>
              <Image
                src={photo.src}
                alt={`Referencje - ${photo.alt} - pranie tapicerki, czyszczenie samochodu`}
                className={classes.mobileImage}
                priority={i === 0 && !isDesktop}
                fetchPriority="high"
                loading="eager"
                unoptimized={true}
              />
              {isDesktop && (
                <Image
                  src={photo.largeSrc}
                  alt={`Referencje - ${photo.alt}...`}
                  className={classes.desktopImage}
                  priority={i === 0}
                  fetchPriority={i === 0 ? "high" : "auto"}
                />
              )}
            </div>
          ))}
        </div>

        <div className={classes.reviewsWrapper}>
          {isDesktop ? (
            <>
              <motion.div
                className={classes.reviewsLeftContainer}
                variants={fadeIn("up", "tween", 0.2, 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.h2 variants={textVariant(0.1)}>
                  Opinie klientów o KabeTintLeather – Opole
                </motion.h2>

                <motion.p variants={fadeIn("up", "tween", 0.3, 0.8)}>
                  Od wielu lat pomagam kierowcom z Opola i okolic dbać o wnętrza
                  ich samochodów. Moje usługi detailingowe,&nbsp;
                  <strong>pranie tapicerki</strong>,&nbsp;
                  <strong>czyszczenie tapicerki</strong> oraz&nbsp;
                  <strong>korekta lakieru</strong> zyskały zaufanie zarówno
                  wśród właścicieli nowych aut, jak i klasyków. Opinie klientów
                  są dla mnie najważniejszą rekomendacją – to dzięki nim
                  rozwijam się i zdobywam kolejne realizacje. Poniżej znajdziesz
                  wybrane&nbsp;
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
                </motion.p>

                <motion.p variants={fadeIn("up", "tween", 0.4, 0.8)}>
                  Jeśli interesują Cię&nbsp;
                  <strong>opinie klientów o praniu tapicerki</strong> lub&nbsp;
                  <strong>czyszczenie tapicerki opinie Opole</strong>, jesteś we
                  właściwym miejscu. Moje podejście i efekty pracy mówią same za
                  siebie – najlepiej potwierdzają to realne&nbsp;
                  <strong>opinie klientów z Opola</strong>, dostępne poniżej
                  oraz w sieci.
                  <br />
                  <br />
                  📍 <strong>Działam w Opolu i okolicach:</strong> Ozimek,
                  Prószków, Komprachcice, Lubniany, Zaodrze, Malina, Wrzoski,
                  Półwieś.
                  <br />
                  📞 Zadzwoń: <a href="tel:881325631">881&nbsp;325&nbsp;631</a>
                  <br />
                  ✉️ Napisz:&nbsp;
                  <a href="mailto:kabetint@gmail.com">kabetint@gmail.com</a>
                </motion.p>
              </motion.div>

              <div className={classes.reviewsRightContainer}>
                <ul>
                  <li>
                    <motion.blockquote
                      variants={fadeScale(0.5, 0.8)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      „Serdecznie polecam! Super kontakt, szybko wykonana
                      usługa, samochód po czyszczeniu mimo swojego wieku wygląda
                      jak nowy :) Będę polecać i w razie potrzeby ponownie
                      korzystać!”
                      <br />
                      <strong>— Katarzyna I</strong>
                    </motion.blockquote>
                  </li>
                  <li>
                    <motion.blockquote
                      variants={fadeScale(0.6, 0.8)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      „Bardzo polecam‼️ Fachowo i kompleksowo wysprzątane auto.
                      Pan się bardzo przyłożył, pomimo że samochód był naprawdę
                      w tragicznym stanie. Środek samochodu jak również
                      karoseria z zewnątrz wyczyszczone na medal🥇&nbsp;– do
                      tego miła obsługa. Na pewno tam wrócę 😊”
                      <br />
                      <strong>— Bożena Tymoszko</strong>
                    </motion.blockquote>
                  </li>
                  <li>
                    <motion.blockquote
                      variants={fadeScale(0.7, 0.8)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      „Mimo że auto jest nowe, zdecydowałem się na korektę
                      lakieru One Step przed nałożeniem 2-letniej powłoki
                      ceramicznej – jak się okazało, to standardowa procedura,
                      aby usunąć mikro zarysowania i maksymalnie przygotować
                      powierzchnię pod zabezpieczenie. Pan Kamil wykonał usługę
                      perfekcyjnie! Lakier zyskał niesamowitą głębię i blask, a
                      powłoka ceramiczna dodała efektu szklistości i ochrony.
                      Samochód wygląda lepiej niż w salonie! Największym atutem,
                      poza samą jakością pracy, było profesjonalne podejście i
                      ogromna wiedza Pana Kamila. Poświęcił czas, aby dokładnie
                      wytłumaczyć mi, jak działają powłoki, jak o nie dbać i na
                      co zwracać uwagę, aby efekt utrzymał się jak najdłużej.
                      Widać, że to pasjonat w swoim fachu. Jeśli ktoś szuka
                      fachowej usługi detailingowej, to zdecydowanie polecam
                      Pana Kamila.”
                      <br />
                      <strong>— Denis Bul</strong>
                    </motion.blockquote>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            /* WERSJA MOBILE BEZ ANIMACJI */
            <>
              <div className={classes.reviewsLeftContainer}>
                <h2>Opinie klientów o KabeTintLeather – Opole</h2>
                <p>
                  Od wielu lat pomagam kierowcom z Opola i okolic dbać o wnętrza
                  ich samochodów. Moje usługi detailingowe,&nbsp;
                  <strong>pranie tapicerki</strong>,&nbsp;
                  <strong>czyszczenie tapicerki</strong> oraz&nbsp;
                  <strong>korekta lakieru</strong> zyskały zaufanie zarówno
                  wśród właścicieli nowych aut, jak i klasyków. Opinie klientów
                  są dla mnie najważniejszą rekomendacją – to dzięki nim
                  rozwijam się i zdobywam kolejne realizacje. Poniżej znajdziesz
                  wybrane&nbsp;
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
                </p>
                <p>
                  Jeśli interesują Cię&nbsp;
                  <strong>opinie klientów o praniu tapicerki</strong> lub&nbsp;
                  <strong>czyszczenie tapicerki opinie Opole</strong>, jesteś we
                  właściwym miejscu. Moje podejście i efekty pracy mówią same za
                  siebie – najlepiej potwierdzają to realne&nbsp;
                  <strong>opinie klientów z Opola</strong>, dostępne poniżej
                  oraz w sieci.
                  <br />
                  <br />
                  📍 <strong>Działam w Opolu i okolicach:</strong> Ozimek,
                  Prószków, Komprachcice, Lubniany, Zaodrze, Malina, Wrzoski,
                  Półwieś.
                  <br />
                  📞 Zadzwoń: <a href="tel:881325631">881&nbsp;325&nbsp;631</a>
                  <br />
                  ✉️ Napisz:&nbsp;
                  <a href="mailto:kabetint@gmail.com">kabetint@gmail.com</a>
                </p>
              </div>

              <div className={classes.reviewsRightContainer}>
                <ul>
                  <li>
                    <blockquote>
                      „Serdecznie polecam! Super kontakt, szybko wykonana
                      usługa, samochód po czyszczeniu mimo swojego wieku wygląda
                      jak nowy :) Będę polecać i w razie potrzeby ponownie
                      korzystać!”
                      <br />
                      <strong>— Katarzyna I</strong>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      „Bardzo polecam‼️ Fachowo i kompleksowo wysprzątane auto.
                      Pan się bardzo przyłożył, pomimo że samochód był naprawdę
                      w tragicznym stanie. Środek samochodu jak również
                      karoseria z zewnątrz wyczyszczone na medal🥇&nbsp;– do
                      tego miła obsługa. Na pewno tam wrócę 😊”
                      <br />
                      <strong>— Bożena Tymoszko</strong>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      „Mimo że auto jest nowe, zdecydowałem się na korektę
                      lakieru One Step przed nałożeniem 2-letniej powłoki
                      ceramicznej – jak się okazało, to standardowa procedura,
                      aby usunąć mikro zarysowania i maksymalnie przygotować
                      powierzchnię pod zabezpieczenie. Pan Kamil wykonał usługę
                      perfekcyjnie! Lakier zyskał niesamowitą głębię i blask, a
                      powłoka ceramiczna dodała efektu szklistości i ochrony.
                      Samochód wygląda lepiej niż w salonie! Największym atutem,
                      poza samą jakością pracy, było profesjonalne podejście i
                      ogromna wiedza Pana Kamila. Poświęcił czas, aby dokładnie
                      wytłumaczyć mi, jak działają powłoki, jak o nie dbać i na
                      co zwracać uwagę, aby efekt utrzymał się jak najdłużej.
                      Widać, że to pasjonat w swoim fachu. Jeśli ktoś szuka
                      fachowej usługi detailingowej, to zdecydowanie polecam
                      Pana Kamila.”
                      <br />
                      <strong>— Denis Bul</strong>
                    </blockquote>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>

        <div className={classes.widgetWrapper}>
          {isDesktop ? (
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <ElfsightWidget />
            </motion.div>
          ) : (
            <ElfsightLazyWrapper />
          )}
        </div>
      </section>
    </div>
  );
};

export default Referency;
