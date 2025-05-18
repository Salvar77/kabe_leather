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

  if (!automotive) {
    return { notFound: true };
  }

  const isMobile = context.req.headers["user-agent"]
    .toLowerCase()
    .includes("mobi");

  const currentImage = isMobile ? automotive.image : automotive.largeImage;

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
        <h3>Bogate doświadczenie w pielęgnacji skórzanych wnętrz</h3>
        <p>
          Od ponad 10 lat specjalizuję się w renowacji i czyszczeniu skórzanych
          wnętrz samochodów – zarówno nowoczesnych SUV-ów, jak i klasycznych
          modeli BMW, Forda czy Mazdy. Zaufały mi dziesiątki właścicieli aut
          klasy premium.
        </p>
      </li>
      <li>
        <h3>Profesjonalne środki i metody</h3>
        <p>
          Uzywam profesjonalnych preparatów marki <strong>Colourlock</strong>,
          dobieranych do rodzaju skóry – licowej, pigmentowanej czy anilinowej.
          Podczas aplikacji korzystam ze specjalistycznych narzędzi, takich jak
          pady pigmentacyjne, szczotki do detailingu czy piankowe aplikatory.
        </p>
      </li>
      <li>
        <h3>Regeneracja koloru i struktury</h3>
        <p>
          Przywracam skórze jej pierwotny wygląd - naturalny kolor, miękkość i
          fakturę, eliminując jednocześnie zarysowania, przetarcia i
          odbarwienia. Dodatkowo zabezpieczam powierzchnię przed promieniowaniem
          UV, wilgocią i zabrudzeniami. <br />
          Więcej o pielęgnacji tapicerki skórzanej przeczytasz na blogu:{" "}
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
        <h3>Odbudowa i ochrona tapicerki</h3>
        <p>
          Uzupełniam pęknięcia, wygładzam drobne uszkodzenia i aplikuję
          specjalistyczne środki impregnujące, które wydłużają trwałość skóry. W
          razie potrzeby wykonuję również barwienie i zabezpieczenie powierzchni
          przy użyciu top-coatu.
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
          osobowych, dostawczych i premium. Tylko w ciągu ostatnich 12 miesięcy
          przyciemniłem ponad 200 pojazdów, zapewniając im nie tylko lepszy
          wygląd, ale także większy komfort jazdy.
        </p>
      </li>
      <li>
        <h3>Folie najwyższej jakości</h3>
        <p>
          Korzystam z folii <strong>3M</strong> i <strong>Llumar</strong> – to
          produkty posiadające atesty, spełniające wszelkie normy prawne i
          charakteryzujące się wyjątkową trwałością. Nie odbarwiają się, nie
          pęcherzykują i zachowują estetyczny wygląd przez lata.
        </p>
      </li>
      <li>
        <h3>Zgodność z normami i przepisami</h3>
        <p>
          Przyciemnianie wykonuję zgodnie z obowiązującymi przepisami.
          <strong>
            Przednie i boczne szyby przednie zawsze spełniają normy
            przepuszczalności światła
          </strong>
          , a każdy klient otrzymuje pełną dokumentację potwierdzającą legalność
          zastosowanej folii.
        </p>
      </li>
      <li>
        <h3>Komfort jazdy i ochrona przed słońcem</h3>
        <p>
          Przyciemnione szyby skutecznie redukują nagrzewanie wnętrza,
          zwiększają prywatność oraz chronią przed szkodliwym promieniowaniem
          UV. Dowiedz się więcej o{" "}
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
          ręce fachowca z doświadczeniem i pasją.
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
        <h3>Doświadczenie poparte praktyką</h3>
        <p>
          Od ponad 10 lat zajmuję się{" "}
          <strong>profesjonalnym czyszczeniem tapicerek</strong>. Przez ten czas
          usunąłem setki trudnych i ciężkich do usunięcia plam - od błota po
          kawę - z różnych rodzajów tkanin, takich jak skóra, mikrofibra czy
          welur.
        </p>
      </li>
      <li>
        <h3>Profesjonalne narzędzia pracy</h3>
        <p>
          Do czyszczenia tapicerki używam{" "}
          <strong>odkurzaczy ekstrakcyjnych Kärcher</strong> oraz{" "}
          <strong>środków marki Pure Chemie, Maxifi i Chemspec</strong>, które
          są bezpieczne dla materiałów i skuteczne nawet przy głęboko osadzonym
          brudzie. Dzięki temu tapicerka odzyskuje świeżość, kolor i zapach.
        </p>
      </li>
      <li>
        <h3>Indywidualne podejście do tkanin</h3>
        <p>
          Każda tapicerka wymaga innego podejścia – inaczej zamierzam traktować
          welur, inaczej skórę, a jeszcze inaczej mikrofibrę. Podczas pracy
          używam odpowiednich środków i technik w zależności od materiału i
          stopnia zabrudzenia.
        </p>
      </li>
      <li>
        <h3>Długotrwała ochrona</h3>
        <p>
          Po praniu tapicerki stosuję <strong>impregnat zabezpieczający</strong>
          , który tworzy niewidzialną warstwę ochronną i wydłuża efekt
          czystości, chroniąc tapicerkę przed ponownym zabrudzeniem.
        </p>
      </li>
      <li>
        <h3>Więcej informacji i porady</h3>
        <p>
          Więcej o skutecznym czyszczeniu i pielęgnacji tapicerki przeczytasz na
          moim blogu:{" "}
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
          Twoje auto trafia w ręce fachowca z pasją i doświadczeniem.
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
        <h3>Doświadczenie poparte pasją</h3>
        <p>
          Jako specjalista z ponad 10-letnim doświadczeniem, przeprowadziłem
          setki pełnych zabiegów autokosmetyki - zarówno dla klientów
          indywidualnych, jak i salonów samochodowych. Autokosmetyka to dla mnie
          coś więcej niż praca - to pasja, która przekłada się na jakość
          wykonania moich usług.
        </p>
      </li>
      <li>
        <h3>Kosmetyki klasy premium i narzędzia</h3>
        <p>
          Korzystam wyłącznie z renomowanych kosmetyków marki{" "}
          <strong>Gyeon, Koch Chemie, ADBL, Purchemie, Carlab cleantle</strong>,
          które zapewniają pełne bezpieczeństwo dla lakieru i tapicerki. Do
          aplikacji i czyszczenia używam profesjonalnego sprzętu marki{" "}
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
        <h3>Pełne odświeżenie wnętrza i karoserii</h3>
        <p>
          Detailing wnętrza obejmuje odkurzanie, czyszczenie elementów
          plastikowych, pielęgnację tapicerki skórzanej oraz pranie
          materiałowych siedzisk. Nadwozie przechodzi dokładne mycie,
          dekontaminację i polerowanie, co pozwala wydobyć głębię koloru
          lakieru.
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
          pewność spersonalizowanego podejścia i dbałości o każdy detal.
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
        <h3>Usunięcie zmatowień i rys</h3>
        <p>
          Od ponad dekady specjalizuję się w korekcie lakieru – od delikatnych
          polerek One Step po wieloetapowe renowacje. Skutecznie eliminuję
          drobne rysy, zmatowienia i defekty lakieru, przywracając mu gładkość i
          atrakcyjny wygląd. Dowiedz się więcej o{" "}
          <Link href="/blog/korekta-lakieru" className={classes.linkStyle}>
            procesie korekty lakieru
          </Link>
          .
        </p>
      </li>
      <li>
        <h3>Poprawa głębi i intensywności koloru</h3>
        <p>
          Dobieram technikę polerowania indywidualnie do twardości lakieru –
          inną dla BMW, inną dla Mazdy. Używam maszyn <strong>Rupes</strong>{" "}
          oraz past <strong>Menzerna</strong> i <strong>Koch Chemie</strong>,
          które pozwalają uzyskać głębię, nasycenie i intensywność koloru.
          Sprawdź wpis o{" "}
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
        <h3>Trwała ochrona lakieru</h3>
        <p>
          Po zakończonej korekcie nakładam powłokę ochronną, która skutecznie
          zabezpiecza lakier przed promieniowaniem UV, zabrudzeniami i
          zarysowaniami, wydłużając efekt wizualny i zabezpieczający.
        </p>
      </li>
      <li>
        <h3>Efektywna korekta One Step</h3>
        <p>
          Dla osób szukających przystępnego cenowo rozwiązania oferuję korektę
          lakieru typu{" "}
          <Link href="/blog/korekta-lakieru" className={classes.linkStyle}>
            One Step
          </Link>
          . To jednoetapowy proces, który skutecznie usuwa lekkie zarysowania i
          drobne defekty, znacząco poprawiając wygląd lakieru w krótkim czasie.
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
          Od ponad 5 lat specjalizuję się w{" "}
          <strong>profesjonalnej aplikacji folii PPF</strong>. W tym czasie
          zabezpieczyłem lakier w ponad 100 pojazdach – od kompaktowych aut
          miejskich po samochody premium. Każdy projekt traktuję indywidualnie i
          wykonuję osobiście, z dbałością o każdy detal.
        </p>
      </li>
      <li>
        <h3>Skuteczna bariera ochronna</h3>
        <p>
          Folia PPF tworzy trwałą warstwę zabezpieczającą lakier przed
          zarysowaniami, odpryskami i szkodliwym działaniem czynników
          atmosferycznych. Więcej o{" "}
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
        <h3>Zaawansowana technologia i trwałość</h3>
        <p>
          Pracuję na foliach <strong>Teckwrap</strong> i{" "}
          <strong>Perfectshield</strong> o grubości 200 mikronów, nakładanych
          metodą „wet application”. Materiał samoregeneruje drobne rysy pod
          wpływem ciepła i doskonale dopasowuje się do każdego kształtu
          karoserii.
        </p>
      </li>
      <li>
        <h3>Efekt hydrofobowy i łatwość w czyszczeniu</h3>
        <p>
          Powierzchnia folii skutecznie odpycha wodę i zabrudzenia, co znacząco
          ułatwia codzienną pielęgnację auta i pozwala dłużej cieszyć się jego
          nienagannym wyglądem.
        </p>
      </li>
      <li>
        <h3>Doskonałe przygotowanie pod aplikację</h3>
        <p>
          Przed aplikacją folii zalecam wykonanie{" "}
          <Link href="/uslugi/korekta-lakieru" className={classes.linkStyle}>
            korekty lakieru
          </Link>
          , która przywraca mu blask i gładkość. Tylko odpowiednio przygotowana
          powierzchnia gwarantuje trwałe i estetyczne przyleganie folii PPF.
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
        <h3>Ochrona lakieru na lata</h3>
        <p>
          Powłoka ceramiczna skutecznie zabezpiecza lakier przed promieniowaniem
          UV, mikrozarysowaniami i niekorzystnymi warunkami atmosferycznymi.
          Przeczytaj więcej na naszym blogu:{" "}
          <Link href="/blog/powloka-ceramiczna" className={classes.linkStyle}>
            zalety powłoki ceramicznej
          </Link>
          .
        </p>
      </li>
      <li>
        <h3>Głęboki kolor, lustrzany połysk</h3>
        <p>
          Powłoka ceramiczna nadaje lakierowi intensywną głębię koloru i
          efektowny połysk, dzięki czemu auto świetnie prezentuje się w każdych
          warunkach. Aplikuję powłoki ceramiczne od ponad 5 lat – na lakierach
          różnych marek i o różnej twardości – od Skody po BMW. Używam
          sprawdzonych produktów <strong>Gyeon</strong> i{" "}
          <strong>Ultracoat</strong>.
        </p>
      </li>
      <li>
        <h3>Prostsze czyszczenie</h3>
        <p>
          Hydrofobowa powierzchnia powłoki ceramicznej sprawia, że brud i
          zanieczyszczenia znacznie trudniej przywierają do karoserii, co
          ułatwia mycie i codzienną pielęgnację auta. Dowiedz się więcej na
          naszym blogu:{" "}
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
          Przed aplikacją przeprowadzam kompleksowe przygotowanie powierzchni:
          dekontaminację, glinkowanie oraz korektę lakieru. Usługę wykonuję
          osobiście – <strong>Kamil, właściciel KabeTintLeather</strong>.
        </p>
      </li>
      <li>
        <h3>Doświadczenie i realizacje</h3>
        <p>
          Od ponad 5 lat zajmuję się aplikacją powłok ceramicznych – wykonałem
          ich już ponad <strong>150</strong>, zarówno na autach prywatnych, jak
          i flotowych. Każde auto traktuję indywidualnie, dopasowując technikę i
          produkt do lakieru.
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
        <h3>Lepsza widoczność i bezpieczeństwo</h3>
        <p>
          Odnowione reflektory znacząco poprawiają skuteczność oświetlenia
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
        <h3>Profesjonalna renowacja z ochroną UV</h3>
        <p>
          Pracuję na pastach polerskich <strong>Menzerna</strong> i{" "}
          <strong>3M</strong>, a po renowacji aplikuję powłokę UV, która chroni
          reflektory przed ponownym matowieniem. Proces wykonuję osobiście i
          zawsze dostosowuję go do stanu plastiku i marki auta.
        </p>
      </li>
      <li>
        <h3>Estetyka i świeży, zadbany wygląd</h3>
        <p>
          Renowacja reflektorów przywraca im pełną przejrzystość, co sprawia, że
          samochód zyskuje nowoczesny, elegacnki i estetyczny wygląd – jak po
          wizycie w salonie.
        </p>
      </li>
      <li>
        <h3>Większe bezpieczeństwo</h3>
        <p>
          Mocniejsze światło to krótszy czas reakcji i większe bezpieczeństwo
          Twoje oraz innych uczestników ruchu. Reflektory poleruję ręcznie oraz
          maszynowo – w zależności od ich stanu technicznego.
        </p>
      </li>
      <li>
        <h3>Oszczędność bez kompromisów</h3>
        <p>
          Zamiast inwestować w nowe lampy, możesz w korzystnej cenie przywrócić
          reflektorom pełną sprawność i estetyczny wygląd – bez utraty jakości.
        </p>
      </li>
      <li>
        <h3>Doświadczenie i efekty</h3>
        <p>
          W ciągu ostatniego roku wypolerowałem ponad{" "}
          <strong>100 reflektorów</strong> - zarówno w autach prywatnych, jak i
          flotowych. Każde zlecenie traktuję indywidualnie, z pełnym
          zaangażowaniem.
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
          pewność jakości, dokładności oraz doświadczenia.
        </p>
      </li>
    </ul>
  </div>
);

export default AutomotiveUpholstery;
