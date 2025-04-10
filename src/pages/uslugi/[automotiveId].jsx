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
          currentImage ||
          "https://www.kabetintleather.opole.pl/logo-kabetintleather-auto-detailing-opole.jpg"
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
    <h2
      className={classes.paragraphStyle}
      dangerouslySetInnerHTML={{ __html: automotive.additionalInfo }}
    />
    <ul className={classes.listStyle}>
      <li>
        <h3>Wieloletnie doświadczenie z tapicerką skórzaną</h3>
        <p>
          Od ponad 10 lat specjalizuję się w pielęgnacji i renowacji skórzanych
          wnętrz samochodów – zarówno nowoczesnych SUV-ów, jak i klasycznych
          modeli BMW czy Mercedes. Zaufały mi dziesiątki właścicieli aut klasy
          premium.
        </p>
      </li>
      <li>
        <h3>Profesjonalne produkty i techniki</h3>
        <p>
          Korzystam z profesjonalnych preparatów marki{" "}
          <strong>Colourlock</strong>, dobieranych do rodzaju skóry – licowej,
          pigmentowanej czy anilinowej. Do aplikacji wykorzystuję narzędzia
          specjalistyczne, m.in. pady do pigmentacji, szczotki detailingowe i
          aplikatory piankowe.
        </p>
      </li>
      <li>
        <h3>Regeneracja koloru i faktury</h3>
        <p>
          Przywracam skórze jej oryginalny kolor, miękkość i naturalną fakturę,
          eliminując zarysowania, przetarcia i odbarwienia. Zabezpieczam
          powierzchnię przed promieniowaniem UV, wilgocią i zabrudzeniami.
          Więcej o dbaniu o skórzaną tapicerkę przeczytasz na blogu:{" "}
          <Link
            href="/blog/jak-dbac-o-skorzana-tapicerke-samochodowa"
            className={classes.linkStyle}
          >
            jak dbać o skórzaną tapicerkę
          </Link>
          .
        </p>
      </li>
      <li>
        <h3>Naprawa i ochrona</h3>
        <p>
          Uzupełniam pęknięcia, wygładzam drobne uszkodzenia i nakładam
          specjalne środki impregnujące, które przedłużają żywotność skóry. W
          razie potrzeby stosuję barwienie i zabezpieczenie top-coatem.
        </p>
      </li>
      <li>
        <h3>Co mówią klienci?</h3>
        <blockquote className={classes.clientQuote}>
          „Jestem bardzo zadowolony z usługi prania tapicerki i czyszczenia
          samochodu. Samochód po wykonanej usłudze wygląda jak nowy, tapicerka
          jest dokładnie wyczyszczona. Profesjonalne podejście, dbałość o każdy
          detal sprawiają, że mogę polecić tę firmę każdemu, kto chce zadbać o
          swoje auto.” –{" "}
          <strong>
            <span>Piotr Fatek, Opole</span>
          </strong>
        </blockquote>
      </li>

      <li>
        <h3>Usługę wykonuje osobiście</h3>
        <p>
          Każde zlecenie wykonuję osobiście –{" "}
          <strong>Kamil, właściciel KabeTintLeather</strong>. Masz pewność, że
          Twoje auto trafia w ręce pasjonata z doświadczeniem i podejściem
          premium.
        </p>
      </li>
    </ul>
  </div>
);

const ContentTinting = ({ automotive }) => (
  <div className={classes.listContainer}>
    <h2
      className={classes.paragraphStyle}
      dangerouslySetInnerHTML={{ __html: automotive.additionalInfo }}
    />
    <ul className={classes.listStyle}>
      <li>
        <h3>Doświadczenie i precyzja</h3>
        <p>
          Od lat zajmuję się{" "}
          <strong>profesjonalnym przyciemnianiem szyb</strong> w samochodach
          osobowych, dostawczych i premium. W ciągu ostatnich 12 miesięcy
          przyciemniłem ponad 200 pojazdów, zapewniając im nie tylko lepszy
          wygląd, ale i komfort jazdy.
        </p>
      </li>
      <li>
        <h3>Folie klasy premium</h3>
        <p>
          Korzystam z folii <strong>3M i Llumar</strong> – posiadają one atesty,
          spełniają normy prawne i oferują doskonałą trwałość. Folie nie
          odbarwiają się, nie pęcherzykują i zapewniają estetyczny wygląd przez
          wiele lat.
        </p>
      </li>
      <li>
        <h3>Bezpieczeństwo i zgodność z przepisami</h3>
        <p>
          Przyciemnianie wykonuję zgodnie z obowiązującymi przepisami –{" "}
          <strong>
            szyby przednie i boczne przednie pozostają zgodne z normą
            przepuszczalności światła
          </strong>
          . Każdy klient otrzymuje dokumentację potwierdzającą legalność użytej
          folii.
        </p>
      </li>
      <li>
        <h3>Estetyka i komfort</h3>
        <p>
          Redukcja nagrzewania wnętrza, większa prywatność oraz ochrona przed
          promieniowaniem UV to tylko niektóre korzyści. Dowiedz się więcej o{" "}
          <Link
            href="/blog/jak-przyciemnic-szyby-samochodowe"
            className={classes.linkStyle}
          >
            przyciemnianiu szyb
          </Link>{" "}
          na naszym blogu.
        </p>
      </li>
      <li>
        <h3>Opinia klienta</h3>
        <blockquote className={classes.clientQuote}>
          „Gorąco polecam pana Kamila. Korzystam z usług od dłuższego czasu, pan
          Kamil robił mi 3 samochody. Każdy zrobiony perfekcyjnie. Czy to
          sprzątanie i pranie czy mycie z woskowaniem, czy przyciemnianie szyb,
          czy odnowienie kierownicy, czy dziś folia ppf na lampy. Zawsze
          zrobione perfekcyjnie z dbaniem o najmniejsze szczegóły.” –{" "}
          <strong>Łukasz, Opole</strong>
        </blockquote>
      </li>
      <li>
        <h3>Usługę wykonuję osobiście</h3>
        <p>
          Cały proces wykonuję osobiście –{" "}
          <strong>
            Kamil, właściciel i specjalista ds. przyciemniania szyb
          </strong>{" "}
          w KabeTintLeather. Dzięki temu masz pewność, że Twoje auto trafia w
          ręce fachowca z pasją i doświadczeniem.
        </p>
      </li>
    </ul>
  </div>
);

const ContentCleaning = ({ automotive }) => (
  <div className={classes.listContainer}>
    <h2
      className={classes.paragraphStyle}
      dangerouslySetInnerHTML={{ __html: automotive.additionalInfo }}
    />

    <ul className={classes.listStyle}>
      <li>
        <h3>Doświadczenie, które ma znaczenie</h3>
        <p>
          Od ponad 10 lat zajmuję się{" "}
          <strong>profesjonalnym czyszczeniem tapicerek</strong>. Przez ten czas
          usunąłem setki trudnych plam – od błota po kawę – z różnych rodzajów
          tkanin, takich jak welur, mikrofibra czy skóra.
        </p>
      </li>
      <li>
        <h3>Profesjonalny sprzęt i środki</h3>
        <p>
          Do czyszczenia używam{" "}
          <strong>odkurzaczy ekstrakcyjnych Kärcher</strong> oraz{" "}
          <strong>środków marki Tenzi i ADBL</strong>, które są bezpieczne dla
          materiałów i skuteczne nawet przy głęboko osadzonym brudzie. Dzięki
          temu tapicerka odzyskuje świeżość, kolor i zapach.
        </p>
      </li>
      <li>
        <h3>Indywidualne podejście do tkanin</h3>
        <p>
          Każda tapicerka wymaga innego podejścia – inaczej traktuję welur,
          inaczej skórę, a jeszcze inaczej mikrofibrę. Wybieram odpowiednie
          środki i techniki w zależności od materiału i stopnia zabrudzenia.
        </p>
      </li>
      <li>
        <h3>Długotrwały efekt i impregnacja</h3>
        <p>
          Po praniu stosuję <strong>impregnat zabezpieczający</strong>, który
          tworzy niewidzialną warstwę ochronną i wydłuża efekt czystości,
          chroniąc tapicerkę przed ponownym zabrudzeniem.
        </p>
      </li>
      <li>
        <h3>Więcej informacji i porady</h3>
        <p>
          Więcej o skutecznym czyszczeniu i pielęgnacji tapicerki przeczytasz na
          naszym blogu:{" "}
          <Link
            href="/blog/jak-wyczyscic-tapicerke-samochodowa"
            className={classes.linkStyle}
          >
            Jak wyczyścić tapicerkę samochodową
          </Link>
          .
        </p>
      </li>
      <li>
        <h3>Opinia klienta</h3>
        <blockquote className={classes.clientQuote}>
          „Auto wyczyszczone bardzo dokładnie.Pranie tapicerki, wyczyszczone
          wszystkie wnęki.Polecam!” - <strong>Monika Zaśko, Opole</strong>
        </blockquote>
      </li>

      <li>
        <h3>Usługę wykonuje właściciel</h3>
        <p>
          Wszystkie usługi wykonuję osobiście –{" "}
          <strong>Kamil, właściciel KabeTintLeather</strong>. Masz pewność, że
          Twoje auto jest w rękach fachowca z pasją i doświadczeniem.
        </p>
      </li>
    </ul>
  </div>
);

const ContentCosmetic = ({ automotive }) => (
  <div className={classes.listContainer}>
    <h2
      className={classes.paragraphStyle}
      dangerouslySetInnerHTML={{ __html: automotive.additionalInfo }}
    />
    <ul className={classes.listStyle}>
      <li>
        <h3>Doświadczenie i pasja</h3>
        <p>
          Jako specjalista z ponad 10-letnim doświadczeniem, przeprowadziłem
          setki pełnych zabiegów autokosmetyki – zarówno dla klientów
          indywidualnych, jak i salonów samochodowych. Autokosmetyka to dla mnie
          coś więcej niż praca – to pasja, która przekłada się na jakość
          wykonania.
        </p>
      </li>
      <li>
        <h3>Profesjonalne kosmetyki i narzędzia</h3>
        <p>
          Korzystam wyłącznie z renomowanych kosmetyków marki{" "}
          <strong>Gyeon</strong>, które gwarantują bezpieczeństwo lakieru i
          tapicerki. Do aplikacji i czyszczenia wykorzystuję sprzęt{" "}
          <strong>Rupes</strong> oraz sprężone powietrze z{" "}
          <strong>Tornadora</strong>. Więcej o używanych produktach przeczytasz
          tutaj:{" "}
          <Link
            href="/blog/uzywamy-profesjonalnych-produktow"
            className={classes.linkStyle}
          >
            profesjonalne produkty w autokosmetyce
          </Link>
          .
        </p>
      </li>
      <li>
        <h3>Kompleksowe odświeżenie wnętrza i nadwozia</h3>
        <p>
          Detailing wnętrza obejmuje odkurzanie, czyszczenie plastików,
          pielęgnację skóry i pranie tapicerki materiałowej. Nadwozie przechodzi
          dokładne mycie, dekontaminację, a także polerowanie powierzchni dla
          uzyskania głębi koloru.
        </p>
      </li>
      <li>
        <h3>Opinie klientów</h3>
        <blockquote className={classes.clientQuote}>
          „Skorzystałem z usług firmy Kabe Tint Leather i jestem bardzo
          zadowolony z efektów prania tapicerki samochodowej. Tapicerka została
          dokładnie wyczyszczona, usunięto wszystkie plamy i nieprzyjemne
          zapachy. Pracownicy byli profesjonalni, a usługa wykonana szybko i
          solidnie. Zdecydowanie polecam!” – <strong>Daniel, Opole</strong>
        </blockquote>
      </li>
      <li>
        <h3>Usługę wykonuje właściciel</h3>
        <p>
          Każde zlecenie realizuję osobiście –{" "}
          <strong>Kamil, właściciel KabeTintLeather</strong>. Dzięki temu masz
          pewność indywidualnego podejścia i dbałości o każdy detal.
        </p>
      </li>
    </ul>
  </div>
);

const ContentCorrection = ({ automotive }) => (
  <div className={classes.listContainer}>
    <h2
      className={classes.paragraphStyle}
      dangerouslySetInnerHTML={{ __html: automotive.additionalInfo }}
    />
    <ul className={classes.listStyle}>
      <li>
        <h3>Usunięcie rys i zmatowień</h3>
        <p>
          Od ponad dekady specjalizuję się w korekcie lakieru – od delikatnych
          polerek One Step po wieloetapowe renowacje. Dokładnie eliminuję drobne
          rysy, zmatowienia i defekty lakieru, przywracając powierzchni gładkość
          i estetyczny wygląd. Dowiedz się więcej o{" "}
          <Link href="/blog/korekta-lakieru" className={classes.linkStyle}>
            procesie korekty lakieru
          </Link>
          .
        </p>
      </li>
      <li>
        <h3>Poprawa głębi koloru</h3>
        <p>
          Dobieram technikę polerowania do twardości lakieru – inna dla BMW,
          inna dla Mazdy. Używam maszyn <strong>Rupes</strong> oraz past{" "}
          <strong>Menzerna</strong> i <strong>Koch Chemie</strong>, które
          pozwalają uzyskać głębię, nasycenie i intensywność koloru. Sprawdź
          wpis o{" "}
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
          Po korekcie aplikuję powłokę ochronną, która zabezpiecza lakier przed
          promieniowaniem UV, zabrudzeniami i zarysowaniami, wydłużając efekt
          wizualny i zabezpieczający.
        </p>
      </li>
      <li>
        <h3>Szybka korekta One Step</h3>
        <p>
          Dla osób szukających przystępnego cenowo rozwiązania oferuję korektę
          lakieru typu{" "}
          <Link href="/blog/korekta-lakieru" className={classes.linkStyle}>
            One Step
          </Link>
          . To jednoetapowy proces idealny dla lekkich zarysowań i drobnych
          defektów, który w krótkim czasie znacznie poprawia wygląd lakieru.
        </p>
      </li>
      <li>
        <h3>Opinie klientów i realizacje</h3>
        <blockquote className={classes.clientQuote}>
          „Polecam usługę prania tapicerki oraz polerowanie lakieru w tej
          firmie. Auto błyszczy się jak nowe!” –{" "}
          <strong>160298nk, Dzielnica Zaodrze</strong>
        </blockquote>
        <p>
          Zobacz więcej efektów w sekcji{" "}
          <Link
            href="/realizacje/korekta-lakieru"
            className={classes.linkStyle}
          >
            Realizacje – korekta lakieru
          </Link>
          .
        </p>
      </li>
      <li>
        <h3>Usługę wykonuję osobiście</h3>
        <p>
          Każde zlecenie realizuję osobiście –{" "}
          <strong>Kamil, właściciel KabeTintLeather</strong>. Dzięki temu masz
          gwarancję indywidualnego podejścia i dbałości o każdy detal.
        </p>
      </li>
    </ul>
  </div>
);

const ContentPPF = ({ automotive }) => (
  <div className={classes.listContainer}>
    <h2
      className={classes.paragraphStyle}
      dangerouslySetInnerHTML={{ __html: automotive.additionalInfo }}
    />
    <ul className={classes.listStyle}>
      <li>
        <h3>Doświadczenie i precyzja</h3>
        <p>
          Od ponad 5 lat zajmuję się{" "}
          <strong>profesjonalną aplikacją folii PPF</strong>. W tym czasie
          zabezpieczyłem lakier w ponad 100 pojazdach – od miejskich hatchbacków
          po auta premium. Każdy projekt traktuję indywidualnie i wykonuję
          osobiście, z dbałością o każdy detal.
        </p>
      </li>
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
        <h3>Technologia i jakość</h3>
        <p>
          Pracuję na foliach <strong>3M i SunTek</strong> o grubości 200
          mikronów, nakładanych metodą „wet application”. Folia samoregeneruje
          drobne rysy pod wpływem ciepła i dopasowuje się perfekcyjnie do
          każdego kształtu karoserii.
        </p>
      </li>
      <li>
        <h3>Hydrofobowość i łatwa pielęgnacja</h3>
        <p>
          Powierzchnia folii odpycha wodę i zanieczyszczenia, co znacząco
          ułatwia codzienną pielęgnację auta i pozwala dłużej cieszyć się jego
          perfekcyjnym wyglądem.
        </p>
      </li>
      <li>
        <h3>Połączenie z korektą lakieru</h3>
        <p>
          Przed aplikacją folii zalecam wykonanie{" "}
          <Link href="/uslugi/korekta-lakieru" className={classes.linkStyle}>
            korekty lakieru
          </Link>
          , która przywraca mu blask i gładkość. Tylko wtedy folia ma idealne
          warunki do trwałego połączenia z lakierem.
        </p>
      </li>
      <li>
        <h3>Opinia klienta</h3>
        <blockquote className={classes.clientQuote}>
          „Usługa wykonana bardzo profesjonalnie.Auto jak nowe.Polecam
          serdecznie.” – <strong>Justyna Pałęcka, Lubniany</strong>
        </blockquote>
      </li>
      <li>
        <h3>Usługę wykonuję osobiście</h3>
        <p>
          Każdą aplikację realizuję sam –{" "}
          <strong>
            Kamil, aplikator folii ochronnych i właściciel KabeTintLeather
          </strong>
          . Nie ma u nas przypadkowości – jest tylko jakość, dokładność i
          trwałość.
        </p>
      </li>
    </ul>
  </div>
);

const ContentCeramic = ({ automotive }) => (
  <div className={classes.listContainer}>
    <h2
      className={classes.paragraphStyle}
      dangerouslySetInnerHTML={{ __html: automotive.additionalInfo }}
    />
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
          doskonale w każdych warunkach. Aplikuję powłoki ceramiczne od ponad 5
          lat – na lakierach różnych marek i o różnej twardości – od Skody po
          BMW. Używam sprawdzonych produktów <strong>Gyeon</strong> i{" "}
          <strong>Ultracoat</strong>.
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
          Przed aplikacją wykonuję pełne przygotowanie auta: dekontaminację,
          glinkowanie i korektę lakieru. Usługę wykonuję osobiście –{" "}
          <strong>Kamil, właściciel KabeTintLeather</strong>.
        </p>
      </li>
      <li>
        <h3>Doświadczenie i realizacje</h3>
        <p>
          Powłoki ceramiczne aplikuję od ponad 5 lat – wykonałem ich już ponad{" "}
          <strong>150</strong>, zarówno na autach prywatnych, jak i flotowych.
          Każde auto traktuję indywidualnie, dopasowując technikę i produkt do
          lakieru.
        </p>
      </li>
      <li>
        <h3>Opinia klienta</h3>
        <blockquote className={classes.clientQuote}>
          „Robota na najwyższym poziomie! Wszystko wykonane kompleksowo i
          perfekcyjnie 🙂 Na samochód została nałożona powłoka ceramiczna
          najwyższej klasy także jest efekt WOW🤩🤩 Na żywo - szczena opada😃😎”
          – <strong>Mateusz Korzeniowski, Opole</strong>
        </blockquote>
      </li>
      <li>
        <h3>Usługę wykonuję osobiście</h3>
        <p>
          Powłokę ceramiczną wykonuję osobiście –{" "}
          <strong>Kamil, właściciel KabeTintLeather</strong>. Dzięki temu masz
          pewność jakości, dokładności i doświadczenia.
        </p>
      </li>
    </ul>
  </div>
);

const ContentHeadlightPolishing = ({ automotive }) => (
  <div className={classes.listContainer}>
    <h2
      className={classes.paragraphStyle}
      dangerouslySetInnerHTML={{ __html: automotive.additionalInfo }}
    />

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
        <h3>Profesjonalny proces i zabezpieczenie UV</h3>
        <p>
          Używam past polerskich <strong>Menzerna</strong> i <strong>3M</strong>{" "}
          oraz aplikuję powłokę UV, która zabezpiecza klosze przed ponownym
          matowieniem. Proces wykonuję osobiście i zawsze dostosowuję go do
          stanu plastiku i marki auta.
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
          oraz innych uczestników ruchu. Reflektory poleruję ręcznie i maszynowo
          – w zależności od ich stanu technicznego.
        </p>
      </li>
      <li>
        <h3>Niższe koszty niż wymiana</h3>
        <p>
          Zamiast inwestować w nowe lampy, możesz w atrakcyjnej cenie przywrócić
          reflektorom pełną funkcjonalność i wygląd.
        </p>
      </li>
      <li>
        <h3>Doświadczenie i efekty</h3>
        <p>
          W ciągu ostatniego roku wypolerowałem ponad{" "}
          <strong>100 reflektorów</strong> – zarówno w samochodach osobowych,
          jak i flotach firmowych. Każde zlecenie traktuję indywidualnie, z
          pełnym zaangażowaniem.
        </p>
      </li>
      <li>
        <h3>Opinia klienta</h3>
        <blockquote className={classes.clientQuote}>
          „Po renowacji reflektorów światła są dwa razy mocniejsze, a auto
          wygląda o 10 lat młodziej! Polecam każdemu.” –{" "}
          <strong>Darek, Opole Zaodrze</strong>
        </blockquote>
      </li>
      <li>
        <h3>Usługę wykonuję osobiście</h3>
        <p>
          Polerowanie reflektorów wykonuję osobiście –{" "}
          <strong>Kamil, właściciel KabeTintLeather</strong>. Dzięki temu masz
          pewność jakości, dokładności i doświadczenia.
        </p>
      </li>
    </ul>
  </div>
);

export default AutomotiveUpholstery;
