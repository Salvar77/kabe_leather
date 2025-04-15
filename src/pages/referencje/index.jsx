import ElfsightWidget from "@/components/Main/ElfsightWidget";
import classes from "./referencje.module.scss";
import Image from "next/image";
import React from "react";
import { referencyImages } from "../../../constants";
import SEO from "@/components/Main/SEO";

const Referency = () => {
  return (
    <div>
      <SEO
        title="Referencje - KabeTintLeather Pranie tapicerki, Czyszczenie samochodu, Czyszczenie tapicerki"
        description="Sprawdź opinie naszych zadowolonych klientów! Referencje i zdjęcia z realizacji KabeTintLeather Auto Detailing - Pranie tapicerki, Czyszczenie samochodu, Czyszczenie tapicerki."
        image="https://www.kabetintleather.opole.pl/logo-kabetintleather-auto-detailing-opole.jpg"
        url="https://www.kabetintleather.opole.pl/referencje"
      />
      <section id="referencje" className={classes.referencySection}>
        <h1>Referencje</h1>
        <div className={classes.photosContainer}>
          {referencyImages.map((photo, index) => {
            return (
              <Image
                key={index}
                src={photo.src}
                alt={`Referencje - ${photo.alt} - pranie tapicerki, czyszczenie samochodu`}
              />
            );
          })}
        </div>
        <div className={classes.reviewsText}>
          <h2>Opinie klientów o KabeTintLeather – Opole</h2>
          <p>
            Od wielu lat pomagam kierowcom z Opola i okolic dbać o wnętrza ich
            samochodów. Moje usługi detailingowe,{" "}
            <strong>pranie tapicerki</strong>,{" "}
            <strong>czyszczenie tapicerki</strong> oraz{" "}
            <strong>korekta lakieru</strong> zyskały zaufanie zarówno wśród
            właścicieli nowych aut, jak i klasyków. Opinie klientów są dla mnie
            najważniejszą rekomendacją – to dzięki nim rozwijam się i zdobywam
            kolejne realizacje. Poniżej znajdziesz wybrane{" "}
            <strong>referencje auto detailing Opole</strong>. Pełną listę
            recenzji możesz sprawdzić w mojej{" "}
            <a
              href="https://www.google.com/search?q=kabetintleather"
              target="_blank"
              rel="noopener"
            >
              wizytówce Google
            </a>
            .
          </p>

          <ul>
            <li>
              <blockquote>
                „Serdecznie polecam! Super kontakt, szybko wykonana usługa,
                samochód po czyszczeniu mimo swojego wieku wygląda jak nowy :)
                Będę polecać i w razie potrzeby ponownie korzystać!”
                <br />
                <strong>— Katarzyna I</strong>
              </blockquote>
            </li>
            <li>
              <blockquote>
                „Bardzo polecam‼️ Fachowo i kompleksowo wysprzątane auto. Pan
                się bardzo przyłożył, pomimo że samochód był na prawdę w
                tragicznym stanie. Środek samochodu jak również karoseria z
                zewnątrz wyczyszczone na medal🥇- do tego miła obsługa. Na pewno
                tam wrócę 😊”
                <br />
                <strong>— Bożena Tymoszko</strong>
              </blockquote>
            </li>
            <li>
              <blockquote>
                „Mimo że auto jest nowe, zdecydowałem się na korektę lakieru One
                Step przed nałożeniem 2-letniej powłoki ceramicznej – jak się
                okazało, to standardowa procedura, aby usunąć mikro zarysowania
                i maksymalnie przygotować powierzchnię pod zabezpieczenie. Pan
                Kamil wykonał usługę perfekcyjnie! Lakier zyskał niesamowitą
                głębię i blask, a powłoka ceramiczna dodała efektu szklistości i
                ochrony. Samochód wygląda lepiej niż w salonie! Największym
                atutem, poza samą jakością pracy, było profesjonalne podejście i
                ogromna wiedza Pana Kamila. Poświęcił czas, aby dokładnie
                wytłumaczyć mi, jak działają powłoki, jak o nie dbać i na co
                zwracać uwagę, aby efekt utrzymał się jak najdłużej. Widać, że
                to pasjonat w swoim fachu. Jeśli ktoś szuka fachowej usługi
                detailingowej, to zdecydowanie polecam Pana Kamila”
                <br />
                <strong>— Denis Bul</strong>
              </blockquote>
            </li>
          </ul>

          <p>
            Jeśli interesują Cię{" "}
            <strong>opinie klientów o praniu tapicerki</strong> lub{" "}
            <strong>czyszczenie tapicerki opinie Opole</strong>, jesteś we
            właściwym miejscu. Moje podejście i efekty pracy mówią same za
            siebie – najlepiej potwierdzają to realne{" "}
            <strong>opinie klientów z Opola</strong>, dostępne poniżej oraz w
            sieci.
            <br />
            <br />
            📍 <strong>Działam w Opolu i okolicach:</strong> Ozimek, Prószków,
            Komprachcice, Lubniany, Zaodrze, Malina, Wrzoski, Półwieś.
            <br />
            📞 Zadzwoń: <a href="tel:881325631">881 325 631</a>
            <br />
            ✉️ Napisz:{" "}
            <a href="mailto:kabetint@gmail.com">kabetint@gmail.com</a>
          </p>
        </div>

        <ElfsightWidget />
      </section>
    </div>
  );
};

export default Referency;
