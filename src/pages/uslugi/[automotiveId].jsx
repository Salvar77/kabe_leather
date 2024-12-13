import React from "react";
import { servicesData } from "../../components/Main/Services";
import classes from "./uslugi.module.scss";
import Image from "next/image";
import Link from "next/link";
import SEO from "@/components/Main/SEO";
import CTA from "@/components/More/CTA";

export async function getServerSideProps(context) {
  const automotiveId = context.params.automotiveId;
  const automotive =
    servicesData.find((service) => service.id === `uslugi/${automotiveId}`) ||
    null;

  const isMobile = context.req.headers["user-agent"]
    .toLowerCase()
    .includes("mobi");

  const currentImage = automotive
    ? isMobile
      ? automotive.image
      : automotive.largeImage
    : null;

  return {
    props: { automotive, currentImage },
  };
}

const AutomotiveUpholstery = ({ automotive, currentImage }) => {
  if (!automotive) return <p>Usługa nie została znaleziona.</p>;

  return (
    <div>
      <SEO
        title={`${automotive.title} - Kabe Tint&Leather Auto Detailing w Opolu`}
        description={`Profesjonalne usługi ${automotive.title.toLowerCase()} w Opolu. Oferujemy ${automotive.title.toLowerCase()} z najwyższą dbałością o każdy detal.`}
        image={
          currentImage || "https://www.kabetintleather.opole.pl/kabelogooo.webp"
        }
        url={`https://www.kabetintleather.opole.pl/uslugi/${automotive.id.replace(
          "uslugi/",
          ""
        )}`}
      />
      <section id="tapicerka1" className={classes.automotivePage}>
        <h1>{automotive.description}</h1>
        <div className={classes.automotivePage__grid}>
          <div className={classes.imageWrapper}>
            {currentImage && (
              <Image
                src={currentImage}
                alt={`Zdjęcie przedstawiające ${automotive.title.toLowerCase()} - profesjonalne ${automotive.title.toLowerCase()} w Opolu`}
                className={classes.automotivePage__img}
              />
            )}
          </div>
          <div className={classes.textWrapper}>
            {automotive.id === "uslugi/renowacja-i-czyszczenie-skor" && (
              <ContentUpholstery automotive={automotive} />
            )}
            {automotive.id === "uslugi/przyciemnianie-szyb" && (
              <ContentTinting automotive={automotive} />
            )}
            {automotive.id === "uslugi/pranie-tapicerki" && (
              <ContentCleaning automotive={automotive} />
            )}
            {automotive.id === "uslugi/autokosmetyka" && (
              <ContentCosmetic automotive={automotive} />
            )}
            {automotive.id === "uslugi/korekta-lakieru" && (
              <ContentCorrection automotive={automotive} />
            )}
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <Link
            href={`/realizacje/${automotive.id.replace("uslugi/", "")}`}
            className={classes.appointmentLink}
            aria-label="Zobacz nasze realizacje"
          >
            Zobacz realizacje
          </Link>
        </div>
        <CTA />
      </section>
    </div>
  );
};

const ContentUpholstery = ({ automotive }) => (
  <div className={classes.listContainer}>
    <p className={classes.paragraphStyle}>{automotive.additionalInfo}</p>
    <ul className={classes.listStyle}>
      <li>
        <b>Odnowienie koloru i tekstury:</b> Przywracamy skórze jej naturalny
        kolor i gładkość, eliminując zarysowania, plamy i odbarwienia. Więcej o
        tym, jak dbać o skórzaną tapicerkę, znajdziesz w naszym wpisie:{" "}
        <Link href="/blog/jak-dbac-o-skorzana-tapicerke-samochodowa">
          Dbaj o skórzaną tapicerkę
        </Link>
        .
      </li>
      <li>
        <b>Zwiększenie trwałości:</b> Nasze zabiegi zabezpieczają skórę przed
        przyszłymi uszkodzeniami i zużyciem, co pozwala cieszyć się jej
        doskonałym stanem przez długie lata.
      </li>
      <li>
        <b>Wzmocnienie i naprawa:</b> Naprawiamy drobne pęknięcia i rozdarcia,
        które mogą wpłynąć na estetykę i komfort użytkowania.
      </li>
      <li>
        <b>Ochrona przed czynnikami zewnętrznymi:</b> Stosujemy specjalistyczne
        preparaty, które chronią skórę przed działaniem promieni UV, wilgocią i
        innymi szkodliwymi czynnikami.
      </li>
    </ul>
  </div>
);

const ContentTinting = ({ automotive }) => (
  <div className={classes.listContainer}>
    <p className={classes.paragraphStyle}>{automotive.additionalInfo}</p>
    <ul className={classes.listStyle}>
      <li>
        <b>Redukcja energii słonecznej:</b> Obniż temperaturę w samochodzie, co
        zwiększa komfort jazdy, szczególnie w gorące dni. Dowiedz się więcej o{" "}
        <Link href="/blog/jak-przyciemnic-szyby-samochodowe">
          korzyściach przyciemniania szyb
        </Link>{" "}
        na naszym blogu.
      </li>

      <li>
        <b>Zwiększenie prywatności:</b> Popraw swoją prywatność i bezpieczeństwo
        dzięki foliom, które utrudniają widoczność z zewnątrz, co podnosi
        komfort jazdy i zapobiega niepożądanym spojrzeniom.
      </li>

      <li>
        <b>Estetyka pojazdu:</b> Nowoczesne folie nadają samochodowi elegancki i
        stylowy wygląd, który wyróżnia się na drodze. Sprawdź szczegóły na{" "}
        <Link href="/blog/jak-przyciemnic-szyby-samochodowe">naszym blogu</Link>{" "}
        i dowiedz się, jak wybrać najlepszą metodę przyciemniania szyb.
      </li>
      <li>
        <b>Metody przyciemniania szyb:</b> Oferujemy metody takie jak{" "}
        <Link href="/blog/jak-przyciemnic-szyby-samochodowe">
          przyciemnianie folią
        </Link>{" "}
        oraz metodę piecową, które zapewniają trwałość i estetykę, spełniając
        Twoje indywidualne potrzeby.
      </li>
    </ul>
  </div>
);

const ContentCleaning = ({ automotive }) => (
  <div className={classes.listContainer}>
    <p className={classes.paragraphStyle}>{automotive.additionalInfo}</p>
    <ul className={classes.listStyle}>
      <li>
        <b>Głęboki i skuteczny efekt czyszczenia:</b> Usuwamy zanieczyszczenia,
        kurz, brud i plamy, przywracając tapicerce jej pierwotny wygląd i
        zapach. Więcej o{" "}
        <Link href="/blog/jak-wyczyscic-tapicerke-samochodowa">
          skutecznym czyszczeniu tapicerki
        </Link>{" "}
        dowiesz się z naszego bloga.
      </li>
      <li>
        <b>Poprawa higieny:</b> Nasze metody czyszczenia eliminują bakterie,
        roztocza i alergeny, poprawiając jakość powietrza i komfort użytkowania.
      </li>
      <li>
        <b>Odświeżenie kolorów:</b> Przywracamy naturalne kolory tapicerki,
        eliminując matowienie i przebarwienia spowodowane użytkowaniem.
      </li>
      <li>
        <b>Ochrona tkanin:</b> Stosujemy specjalne preparaty, które nie tylko
        czyszczą, ale również zabezpieczają tapicerkę przed przyszłymi
        zanieczyszczeniami i zużyciem.
      </li>
    </ul>
  </div>
);

const ContentCosmetic = ({ automotive }) => (
  <div className={classes.listContainer}>
    <p className={classes.paragraphStyle}>{automotive.additionalInfo}</p>
    <ul className={classes.listStyle}>
      <li>
        <b>Idealny wygląd i blask:</b> Nasze zabiegi zapewniają gruntowne
        czyszczenie i polerowanie, które przywracają karoserii i wnętrzu
        samochodu świeżość i blask. Sprawdź nasze wpisy o{" "}
        <Link href="/blog/uzywamy-profesjonalnych-produktow">
          profesjonalnych produktach
        </Link>{" "}
        stosowanych w autokosmetyce.
      </li>
      <li>
        <b>Ochrona lakieru:</b> Stosujemy preparaty zabezpieczające lakier przed
        działaniem szkodliwych czynników atmosferycznych, takich jak UV, sól czy
        zanieczyszczenia drogowe.
      </li>
      <li>
        <b>Wnętrze jak nowe:</b> Skutecznie usuwamy zabrudzenia, plamy i
        nieprzyjemne zapachy z tapicerki, dywaników i powierzchni wewnętrznych.
      </li>
      <li>
        <b>Wzmocnienie odświeżenia:</b> Wykonujemy detailing, który poprawia
        wygląd, stan techniczny i komfort użytkowania Twojego pojazdu.
      </li>
    </ul>
  </div>
);

const ContentCorrection = ({ automotive }) => (
  <div className={classes.listContainer}>
    <p className={classes.paragraphStyle}>{automotive.additionalInfo}</p>
    <ul className={classes.listStyle}>
      <li>
        <b>Usunięcie rys i zmatowień:</b> Dokładnie eliminujemy drobne rysy,
        zmatowienia i drobne defekty lakieru, przywracając powierzchni gładkość
        i estetyczny wygląd. Dowiedz się więcej o{" "}
        <Link href="/blog/korekta-lakieru">procesie korekty lakieru</Link>.
      </li>
      <li>
        <b>Poprawa głębi koloru:</b> Dzięki zaawansowanym technikom polerowania
        lakier odzyskuje głębię, nasycenie i intensywność koloru. Sprawdź wpis o{" "}
        <Link href="/blog/uzywamy-profesjonalnych-produktow">
          profesjonalnych produktach do pielęgnacji lakieru
        </Link>
        .
      </li>
      <li>
        <b>Ochrona lakieru na dłużej:</b> Po korekcie aplikujemy powłokę
        ochronną, która zabezpiecza lakier przed promieniowaniem UV,
        zabrudzeniami i zarysowaniami.
      </li>

      <li>
        <b>Szybka korekta One Step:</b> Dla osób szukających szybkiego i
        przystępnego cenowo rozwiązania oferujemy korektę lakieru typu{" "}
        <Link href="/blog/korekta-lakieru">One Step</Link>. Jest to jednoetapowy
        proces, który pozwala na znaczną poprawę wyglądu lakieru w krótkim
        czasie, idealny dla lekkich zarysowań i drobnych defektów.
      </li>
    </ul>
  </div>
);

export default AutomotiveUpholstery;
