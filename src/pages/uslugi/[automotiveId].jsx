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
        title={`${automotive.title} - KabeTintLeather Auto Detailing w Opolu`}
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
            {automotive.id === "uslugi/folia-ppf-ochrona-lakieru" && (
              <ContentPPF automotive={automotive} />
            )}
            {automotive.id === "uslugi/powloka-ceramiczna" && (
              <ContentCeramic automotive={automotive} />
            )}
            {automotive.id === "uslugi/polerowanie-reflektorow" && (
              <ContentHeadlightPolishing automotive={automotive} />
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
    <h2 className={classes.paragraphStyle}>{automotive.additionalInfo}</h2>
    <ul className={classes.listStyle}>
      <li>
        <h3>Odnowienie koloru i tekstury:</h3>
        <p>
          Przywracamy skórze jej naturalny kolor i gładkość, eliminując
          zarysowania, plamy i odbarwienia. Więcej o tym, jak dbać o skórzaną
          tapicerkę, znajdziesz w naszym wpisie:
          <Link href="/blog/jak-dbac-o-skorzana-tapicerke-samochodowa">
            Dbaj o skórzaną tapicerkę
          </Link>
          .
        </p>
      </li>
      <li>
        <h3>Zwiększenie trwałości:</h3>
        <p>
          Nasze zabiegi zabezpieczają skórę przed przyszłymi uszkodzeniami i
          zużyciem, co pozwala cieszyć się jej doskonałym stanem przez długie
          lata.
        </p>
      </li>
      <li>
        <h3>Wzmocnienie i naprawa:</h3>
        <p>
          Naprawiamy drobne pęknięcia i rozdarcia, które mogą wpłynąć na
          estetykę i komfort użytkowania.
        </p>
      </li>
      <li>
        <h3>Ochrona przed czynnikami zewnętrznymi:</h3>
        <p>
          Stosujemy specjalistyczne preparaty, które chronią skórę przed
          działaniem promieni UV, wilgocią i innymi szkodliwymi czynnikami.
        </p>
      </li>
    </ul>
  </div>
);

const ContentTinting = ({ automotive }) => (
  <div className={classes.listContainer}>
    <h2 className={classes.paragraphStyle}>{automotive.additionalInfo}</h2>
    <ul className={classes.listStyle}>
      <li>
        <h3>Redukcja energii słonecznej</h3>
        <p>
          Obniż temperaturę w samochodzie, co zwiększa komfort jazdy,
          szczególnie w gorące dni. Dowiedz się więcej o{" "}
          <Link
            href="/blog/jak-przyciemnic-szyby-samochodowe"
            className={classes.linkStyle}
          >
            korzyściach przyciemniania szyb
          </Link>{" "}
          na naszym blogu.
        </p>
      </li>

      <li>
        <h3>Zwiększenie prywatności</h3>
        <p>
          Popraw swoją prywatność i bezpieczeństwo dzięki foliom, które
          utrudniają widoczność z zewnątrz, co podnosi komfort jazdy i zapobiega
          niepożądanym spojrzeniom.
        </p>
      </li>

      <li>
        <h3>Estetyka pojazdu</h3>
        <p>
          Nowoczesne folie nadają samochodowi elegancki i stylowy wygląd, który
          wyróżnia się na drodze. Sprawdź szczegóły na{" "}
          <Link
            href="/blog/jak-przyciemnic-szyby-samochodowe"
            className={classes.linkStyle}
          >
            naszym blogu
          </Link>{" "}
          i dowiedz się, jak wybrać najlepszą metodę przyciemniania szyb.
        </p>
      </li>
      <li>
        <h3>Metody przyciemniania szyb</h3>
        <p>
          Oferujemy metody takie jak{" "}
          <Link
            href="/blog/jak-przyciemnic-szyby-samochodowe"
            className={classes.linkStyle}
          >
            przyciemnianie folią
          </Link>{" "}
          oraz metodę piecową, które zapewniają trwałość i estetykę, spełniając
          Twoje indywidualne potrzeby.
        </p>
      </li>
    </ul>
  </div>
);

const ContentCleaning = ({ automotive }) => (
  <div className={classes.listContainer}>
    <h2 className={classes.paragraphStyle}>{automotive.additionalInfo}</h2>
    <ul className={classes.listStyle}>
      <li>
        <h3>Głęboki i skuteczny efekt czyszczenia</h3>
        <p>
          Usuwamy zanieczyszczenia, kurz, brud i plamy, przywracając tapicerce
          jej pierwotny wygląd i zapach. Więcej o{" "}
          <Link
            href="/blog/jak-wyczyscic-tapicerke-samochodowa"
            className={classes.linkStyle}
          >
            skutecznym czyszczeniu tapicerki
          </Link>{" "}
          dowiesz się z naszego bloga.
        </p>
      </li>
      <li>
        <h3>Poprawa higieny</h3>
        <p>
          Nasze metody czyszczenia eliminują bakterie, roztocza i alergeny,
          poprawiając jakość powietrza i komfort użytkowania.
        </p>
      </li>
      <li>
        <h3>Odświeżenie kolorów</h3>
        <p>
          Przywracamy naturalne kolory tapicerki, eliminując matowienie i
          przebarwienia spowodowane użytkowaniem.
        </p>
      </li>
      <li>
        <h3>Ochrona tkanin</h3>
        <p>
          Stosujemy specjalne preparaty, które nie tylko czyszczą, ale również
          zabezpieczają tapicerkę przed przyszłymi zanieczyszczeniami i
          zużyciem.
        </p>
      </li>
    </ul>
  </div>
);

const ContentCosmetic = ({ automotive }) => (
  <div className={classes.listContainer}>
    <h2 className={classes.paragraphStyle}>{automotive.additionalInfo}</h2>
    <ul className={classes.listStyle}>
      <li>
        <h3>Idealny wygląd i blask</h3>
        <p>
          Nasze zabiegi zapewniają gruntowne czyszczenie i polerowanie, które
          przywracają karoserii i wnętrzu samochodu świeżość i blask. Sprawdź
          nasze wpisy o{" "}
          <Link
            href="/blog/uzywamy-profesjonalnych-produktow"
            className={classes.linkStyle}
          >
            profesjonalnych produktach
          </Link>{" "}
          stosowanych w autokosmetyce.
        </p>
      </li>
      <li>
        <h3>Ochrona lakieru</h3>
        <p>
          Stosujemy preparaty zabezpieczające lakier przed działaniem
          szkodliwych czynników atmosferycznych, takich jak UV, sól czy
          zanieczyszczenia drogowe.
        </p>
      </li>
      <li>
        <h3>Wnętrze jak nowe</h3>
        <p>
          Skutecznie usuwamy zabrudzenia, plamy i nieprzyjemne zapachy z
          tapicerki, dywaników i powierzchni wewnętrznych.
        </p>
      </li>
      <li>
        <h3>Wzmocnienie odświeżenia</h3>
        <p>
          Wykonujemy detailing, który poprawia wygląd, stan techniczny i komfort
          użytkowania Twojego pojazdu.
        </p>
      </li>
    </ul>
  </div>
);

const ContentCorrection = ({ automotive }) => (
  <div className={classes.listContainer}>
    <h2 className={classes.paragraphStyle}>{automotive.additionalInfo}</h2>
    <ul className={classes.listStyle}>
      <li>
        <h3>Usunięcie rys i zmatowień</h3>
        <p>
          Dokładnie eliminujemy drobne rysy, zmatowienia i drobne defekty
          lakieru, przywracając powierzchni gładkość i estetyczny wygląd.
          Dowiedz się więcej o{" "}
          <Link href="/blog/korekta-lakieru" className={classes.linkStyle}>
            procesie korekty lakieru
          </Link>
          .
        </p>
      </li>
      <li>
        <h3>Poprawa głębi koloru</h3>
        <p>
          Dzięki zaawansowanym technikom polerowania lakier odzyskuje głębię,
          nasycenie i intensywność koloru. Sprawdź wpis o{" "}
          <Link
            href="/blog/uzywamy-profesjonalnych-produktow"
            className={classes.linkStyle}
          >
            profesjonalnych produktach do pielęgnacji lakieru
          </Link>
          .
        </p>
      </li>
      <li>
        <h3>Ochrona lakieru na dłużej</h3>
        <p>
          Po korekcie aplikujemy powłokę ochronną, która zabezpiecza lakier
          przed promieniowaniem UV, zabrudzeniami i zarysowaniami.
        </p>
      </li>

      <li>
        <h3>Szybka korekta One Step</h3>
        <p>
          Dla osób szukających szybkiego i przystępnego cenowo rozwiązania
          oferujemy korektę lakieru typu{" "}
          <Link href="/blog/korekta-lakieru" className={classes.linkStyle}>
            One Step
          </Link>
          . Jest to jednoetapowy proces, który pozwala na znaczną poprawę
          wyglądu lakieru w krótkim czasie, idealny dla lekkich zarysowań i
          drobnych defektów.
        </p>
      </li>
    </ul>
  </div>
);

const ContentPPF = ({ automotive }) => (
  <div className={classes.listContainer}>
    <h2 className={classes.paragraphStyle}>{automotive.additionalInfo}</h2>
    <ul className={classes.listStyle}>
      <li>
        <h3>Ochrona lakieru</h3>
        <p>
          Folia PPF skutecznie zabezpiecza lakier przed zarysowaniami,
          odpryskami i wpływem czynników atmosferycznych. Więcej o{" "}
          <Link
            href="/blog/folia-ppf-ochrona-lakieru"
            className={classes.linkStyle}
          >
            zaletach folii PPF
          </Link>{" "}
          znajdziesz na naszym blogu.
        </p>
      </li>
      <li>
        <h3>Samoregeneracja</h3>
        <p>
          Dzięki innowacyjnej technologii folia PPF potrafi samodzielnie usuwać
          drobne zarysowania pod wpływem ciepła.
        </p>
      </li>
      <li>
        <h3>Hydrofobowa powierzchnia</h3>
        <p>
          Folia PPF odpycha wodę i zanieczyszczenia, co ułatwia codzienną
          pielęgnację samochodu i zachowanie jego doskonałego wyglądu.
        </p>
      </li>
      <li>
        <h3>Trwałość i estetyka</h3>
        <p>
          Dzięki wysokiej jakości folii Twój samochód zyskuje nowoczesny wygląd
          i ochronę lakieru na wiele lat. Sprawdź także{" "}
          <Link href="/uslugi/korekta-lakieru" className={classes.linkStyle}>
            usługę korekty lakieru
          </Link>
          , która doskonale uzupełnia ochronę PPF.
        </p>
      </li>
    </ul>
  </div>
);

const ContentCeramic = ({ automotive }) => (
  <div className={classes.listContainer}>
    <h2 className={classes.paragraphStyle}>{automotive.additionalInfo}</h2>
    <ul className={classes.listStyle}>
      <li>
        <h3>Trwała bariera ochronna</h3>
        <p>
          Powłoka ceramiczna chroni lakier przed promieniowaniem UV, drobnymi
          zarysowaniami oraz czynnikami atmosferycznymi. Przeczytaj więcej na
          naszym blogu:{" "}
          <Link href="/blog/powloka-ceramiczna" className={classes.linkStyle}>
            zalety powłoki ceramicznej
          </Link>
          .
        </p>
      </li>
      <li>
        <h3>Wyjątkowy połysk</h3>
        <p>
          Nadaje lakierowi głębię koloru i sprawia, że samochód prezentuje się
          doskonale w każdych warunkach.
        </p>
      </li>
      <li>
        <h3>Łatwiejsze czyszczenie</h3>
        <p>
          Dzięki hydrofobowej powierzchni powłoki brud i zanieczyszczenia mniej
          przylegają do karoserii, co znacząco ułatwia mycie. Dowiedz się więcej
          na naszym blogu:{" "}
          <Link href="/blog/powloka-ceramiczna" className={classes.linkStyle}>
            powłoka ceramiczna
          </Link>
          .
        </p>
      </li>
      <li>
        <h3>Długotrwały efekt</h3>
        <p>
          Odpowiednio nałożona powłoka ceramiczna potrafi utrzymać swoje
          właściwości ochronne i wizualne przez wiele miesięcy, a nawet lat.
        </p>
      </li>
    </ul>
  </div>
);

const ContentHeadlightPolishing = ({ automotive }) => (
  <div className={classes.listContainer}>
    <h2 className={classes.paragraphStyle}>{automotive.additionalInfo}</h2>
    <ul className={classes.listStyle}>
      <li>
        <h3>Poprawiona widoczność na drodze</h3>
        <p>
          Wypolerowane reflektory znacząco zwiększają skuteczność oświetlenia
          podczas jazdy nocą oraz w trudnych warunkach pogodowych. Przeczytaj
          więcej na naszym blogu:{" "}
          <Link
            href="/blog/polerowanie-reflektorow"
            className={classes.linkStyle}
          >
            polerowanie reflektorów
          </Link>
          .
        </p>
      </li>
      <li>
        <h3>Estetyka i nowoczesny wygląd</h3>
        <p>
          Usługa przywraca przejrzystość reflektorów, dzięki czemu samochód
          wygląda świeżo i zadbanie, jak po wizycie w salonie.
        </p>
      </li>
      <li>
        <h3>Większe bezpieczeństwo</h3>
        <p>
          Lepsze światło to krótszy czas reakcji i większe bezpieczeństwo Twoje
          oraz innych uczestników ruchu.
        </p>
      </li>
      <li>
        <h3>Niższe koszty niż wymiana</h3>
        <p>
          Zamiast inwestować w nowe lampy, możesz w atrakcyjnej cenie przywrócić
          reflektorom pełną funkcjonalność i wygląd.
        </p>
      </li>
    </ul>
  </div>
);

export default AutomotiveUpholstery;
