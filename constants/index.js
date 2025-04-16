import {
  blogBeforeAfter1,
  blogBeforeAfter9,
  blogBeforeAfter10,
  blogMain1,
  blogMain3,
  blogMain4,
  blogMain5,
  blogMain7,
  referencyPhoto1,
  referencyPhoto2,
  blogFoto1,
  blogFoto2,
  blogFoto3,
  blogFoto4,
  blogFoto5,
  blogFoto6,
  blogFoto7,
  blogFoto8,
  blogFoto9,
  blogFoto10,
  blogFoto11,
  blogFoto12,
  blogFoto13,
  blogFoto14,
  blogFoto15,
  blogFoto16,
  blogFoto17,
  blogFoto18,
  blogFoto19,
  blogFoto20,
  blogFotoMain,
  blogFotoMain2,
  blogFotoMain3,
  blogFotoMain31,
  blogFotoMain4,
  blogFotoMain41,
  blogFotoMain42,
  blogFotoMain5,
  blogFotoMain6,
  blogFotoMain7,
  headlightPolishing,
} from "../utils/index";

import {
  FaCar,
  FaTint,
  FaSprayCan,
  FaCogs,
  FaShieldAlt,
  FaPaintRoller,
} from "react-icons/fa";
import { GiCarWheel, GiAutoRepair } from "react-icons/gi";

const blogPosts = [
  {
    id: 10,
    title: "Polerowanie reflektorów Opole – Przywróć blask swoim światłom",
    subtitle: "RENOWACJA I POLERKA REFLEKTORÓW SAMOCHODOWYCH",
    date: "2025-04-08",
    description:
      "Zmatowiałe reflektory to nie tylko problem estetyczny, ale także zagrożenie dla bezpieczeństwa na drodze. Dowiedz się, na czym polega polerowanie reflektorów, jakie są jego korzyści i kiedy warto się na nie zdecydować.",
    link: "/polerowanie-reflektorow",
    image: headlightPolishing,
  },
  {
    id: 9,
    title: "Auto detailing Opole – Profesjonalna pielęgnacja lakieru i wnętrza",
    subtitle: "KOMPLEKSOWY AUTO DETAILING",
    date: "2025-04-04",
    description:
      "Czym różni się detailing od zwykłego mycia auta? To precyzyjna renowacja i ochrona pojazdu – od korekty lakieru, przez czyszczenie wnętrza, po aplikację powłok ochronnych. Zadbaj o każdy detal swojego samochodu i przywróć mu wygląd jak z salonu.",
    link: "/autokosmetyka-i-detailing",
    image: blogMain7,
  },
  {
    id: 8,
    title:
      "Powłoka ceramiczna Opole - Dlaczego warto zainwestować w zabezpieczenie lakieru.",
    subtitle: "OCHRONA I WYGLĄD LAKIERU SAMOCHODOWEGO",
    date: "2025-04-03",
    description:
      "Powłoka ceramiczna to nowoczesne rozwiązanie, które chroni lakier Twojego samochodu przed zarysowaniami, czynnikami atmosferycznymi oraz promieniowaniem UV. Poznaj wszystkie korzyści wynikające z zastosowania powłoki ceramicznej i ciesz się doskonałym wyglądem swojego pojazdu na dłużej!",
    link: "/powloka-ceramiczna",
    image: blogFotoMain7,
  },
  {
    id: 7,
    title: "Folia PPF Opole - Jak skutecznie chronić lakier?",
    subtitle: "OCHRONA LAKIERU SAMOCHODOWEGO",
    date: "2025-04-02",
    description:
      "Folia ochronna PPF to nowoczesne rozwiązanie, które skutecznie zabezpiecza lakier samochodowy przed uszkodzeniami mechanicznymi, zarysowaniami oraz negatywnym wpływem czynników atmosferycznych. Dowiedz się, dlaczego warto zainwestować w folię PPF i jak wygląda proces jej aplikacji.",
    link: "/folia-ppf-ochrona-lakieru",
    image: blogFoto13,
  },
  {
    id: 1,
    title: "Jak zapobiec powstaniu plam na tapicerce samochodowej?",
    subtitle: "CZYSZCZENIE TAPICERKI SAMOCHODOWEJ",
    date: "2025-02-07",
    description:
      "Plama na tapicerce samochodowej to problem, którego można uniknąć! Dowiedz się, jak szybko i skutecznie reagować, aby nie doprowadzić do trwałych zabrudzeń. Oto kilka kroków, które warto zastosować, aby utrzymać tapicerkę w czystości.",
    link: "/jak-zapobiec-plamom-na-tapicerce-samochodowej",
    image: blogMain3,
  },
  {
    id: 2,
    title: "Pranie tapicerki Opole - Jak wyczyścić tapicerkę samochodowa.",
    subtitle: "PRANIE TAPICERKI SAMOCHODOWEJ",
    date: "2025-02-05",
    description:
      "Dowiedz się, jak skutecznie wyczyścić tapicerkę samochodową, aby pozbyć się nawet najtrudniejszych plam i zabrudzeń. Nasze profesjonalne metody czyszczenia pozwolą Ci cieszyć się świeżością wnętrza samochodu przez długi czas.",
    link: "/jak-wyczyscic-tapicerke-samochodowa",
    image: blogMain5,
  },
  {
    id: 3,
    title:
      "Czyszczenie tapicerki skórzanej Opole - Jak dbać o tapicerkę skórzaną?",
    subtitle: "PIELĘGNACJA SKÓRZANEJ TAPICERKI SAMOCHODOWEJ",
    date: "2025-02-01",
    description:
      "Skórzana tapicerka samochodowa wymaga regularnej pielęgnacji. Dowiedz się, jakie środki i techniki stosować, aby tapicerka zachowała swój elegancki wygląd przez wiele lat.",
    link: "/jak-dbac-o-skorzana-tapicerke-samochodowa",
    image: blogFoto12,
  },
  {
    id: 4,
    title:
      "Autokosmetyka samochodowa Opole - Używamy profesjonalnych produktów.",
    subtitle: "AUTOKOSMETYKA SAMOCHODOWA",
    date: "2025-01-25",
    description:
      "Wybór odpowiednich preparatów do pielęgnacji samochodu jest kluczowy, aby zapewnić mu idealny wygląd i ochronę. Sprawdź, które środki są najlepsze do pielęgnacji karoserii, wnętrza oraz szyb.",
    link: "/uzywamy-profesjonalnych-produktow",
    image: blogMain7,
  },
  {
    id: 5,
    title:
      "Przyciemnianie szyb samochodowych Opole - Jak skutecznie przyciemnić szyby.",
    subtitle: "PRZECIEMNIANIE SZYB SAMOCHODOWYCH",
    date: "2025-01-18",
    description:
      "Przyciemnianie szyb samochodowych to nie tylko kwestia estetyki, ale także komfortu i bezpieczeństwa. Dowiedz się, jak prawidłowo przeprowadzić ten zabieg oraz jakie są korzyści z przyciemniania szyb.",
    link: "/jak-przyciemnic-szyby-samochodowe",
    image: blogMain1,
  },
  {
    id: 6,
    title:
      "Polerowanie lakieru w Opolu – na czym polega i dlaczego warto je wykonać",
    subtitle: "PIELĘGNACJA LAKIERU SAMOCHODOWEGO",
    date: "2025-01-14",
    description:
      "Dowiedz się, czym jest korekta lakieru, jakie korzyści przynosi i dlaczego warto ją wykonać. Popraw wygląd swojego samochodu i zabezpiecz lakier przed uszkodzeniami!",
    link: "/korekta-lakieru",
    image: blogFotoMain6,
  },
];

const pagesContent = {
  "jak-zapobiec-plamom-na-tapicerce-samochodowej": {
    title: "Jak zapobiec powstawaniu plam na tapicerce samochodowej?",
    dynamicImage: blogFotoMain2,
    sections: [
      {
        heading: "Kim jestem i dlaczego warto mi zaufać?",
        content:
          "Nazywam się Kamil i posiadam ponad 10-letnie doświadczenie w auto detailingu. W swoim studiu <strong>KabeTintLeather</strong> w Opolu zajmuję się profesjonalnym praniem i czyszczeniem tapicerki samochodowej – zarówno materiałowej, jak i skórzanej czy alcantary. Przez lata pomogłem setkom klientów uratować wnętrza po zalaniu kawą, plamach po błocie, tłuszczu czy dziecięcych niespodziankach. Pracuję wyłącznie na sprawdzonych i bezpiecznych środkach, takich jak <strong>Tenzi, ProElite, Gyeon, Soft99</strong>, co pozwala mi działać skutecznie, precyzyjnie i z trwałym efektem.",
      },
      {
        heading: "Jak uniknąć powstania plam na tapicerce samochodowej?",
        content:
          "Plamy na tapicerce to nie tylko problem estetyczny – mogą również obniżyć wartość auta, zwłaszcza jeśli zabrudzenia są głębokie i trudne do usunięcia. Regularne <a href='/uslugi/pranie-tapicerki'>pranie tapicerki samochodowej</a> jest kluczowe, aby zapobiegać powstawaniu trwałych plam i osadzaniu się brudu, który z czasem staje się coraz trudniejszy do usunięcia. Profesjonalne pranie i czyszczenie tapicerki pozwala na zachowanie świeżości wnętrza auta, nadając mu przyjemny zapach oraz chroniąc materiał przed zniszczeniem. Dzięki zastosowaniu specjalistycznych technik i odpowiednich środków czyszczących możliwe jest usunięcie nawet najbardziej uporczywych zabrudzeń, takich jak plamy po kawie, tłuste ślady, czy ślady po napojach. Nasze usługi <a href='/uslugi/pranie-tapicerki'>prania tapicerki</a> nie tylko przywracają jej pierwotny wygląd, ale także tworzą warstwę ochronną, która minimalizuje osadzanie się brudu w przyszłości. Dowiedz się, jakie techniki czyszczenia i zabezpieczania materiału mogą przedłużyć trwałość tapicerki, zapewniając wnętrzu auta idealny stan przez długie lata, niezależnie od intensywności jego użytkowania.",
      },
      {
        heading: "Dlaczego szybka reakcja jest ważna?",
        content:
          "Im szybciej podejmiesz działania związane z <a href='/uslugi/pranie-tapicerki'>czyszczeniem tapicerki</a>, tym zwiększysz szansę na całkowite usunięcie plamy, zanim wniknie ona głęboko w strukturę materiału. Świeże zabrudzenia są zazwyczaj łatwiejsze do usunięcia, co pozwala uniknąć ryzyka ich trwałego osadzenia się w tkaninie. Regularne <a href='/uslugi/pranie-tapicerki'>pranie tapicerki</a> to kluczowy element dbania o wnętrze pojazdu, który pozwala na bieżąco kontrolować jakość materiałów, eliminując trudne do usunięcia zabrudzenia i przywracając świeżość wnętrza. Nasza oferta profesjonalnych usług czyszczenia jest dostosowana do różnych typów tkanin i materiałów, co umożliwia dokładne czyszczenie przy zachowaniu pełnego bezpieczeństwa tapicerki. Korzystając z zaawansowanych środków i technik, gwarantujemy zachowanie czystości wnętrza samochodu na najwyższym poziomie, a także długotrwałą ochronę materiałów przed codziennym zużyciem i gromadzeniem się nowych zabrudzeń. Dzięki naszej pomocy Twoje auto zyskuje nie tylko estetyczny wygląd, ale również zwiększony komfort i wartość.",
      },
      {
        heading: "Jakie środki najlepiej stosować?",
        content:
          "Dobór odpowiednich <a href='/uslugi/autokosmetyka'>środków do czyszczenia tapicerki samochodowej</a> ma kluczowe znaczenie, jeśli chcesz zachować wnętrze auta w świetnej kondycji na lata. Różne rodzaje tapicerki – materiałowej, skórzanej czy z alcantary – wymagają indywidualnego podejścia i specjalistycznych preparatów, które są jednocześnie skuteczne i bezpieczne dla powierzchni.<br><br>" +
          "W mojej pracy używam starannie dobranych produktów, które pozwalają usuwać nawet najbardziej uporczywe zabrudzenia – plamy po napojach, tłuste ślady czy kurz – bez ryzyka uszkodzenia materiału. Dzięki temu tapicerka zachowuje miękkość, intensywny kolor i estetykę, nawet przy regularnym użytkowaniu.<br><br>" +
          "Chętnie doradzę, jak dobrać preparaty do konkretnego typu tapicerki oraz jak stosować je skutecznie, by osiągnąć długotrwały efekt.",
      },
      {
        heading: "Gdzie działam?",
        content:
          "Działam głównie na terenie <strong>Opola</strong> i okolicznych miejscowości. Dojeżdżam również do klientów w:<br>" +
          "- <strong>Ozimek</strong><br>" +
          "- <strong>Prószków</strong><br>" +
          "- <strong>Komprachcice</strong><br>" +
          "- <strong>Lubniany</strong><br>" +
          "oraz w dzielnicach Opola takich jak <strong>Zaodrze, Wrzoski, Malina</strong> i <strong>Półwieś</strong>.<br><br>" +
          "Pełną listę lokalizacji znajdziesz w sekcji <a href='/obszary-naszej-dzialalnosci'>obszary naszej działalności</a>.",
      },
      {
        heading: "Co mówią moi klienci?",
        content:
          "<blockquote>„Autko wysprzątane na błysk. Szybko i bez żadnych problemów. Krótki czas oczekiwania na wizytę. Gorąco polecam.”<br>– <strong>Marcin Rozycki</strong></blockquote><br>" +
          "<blockquote>„Auto wyczyszczone bardzo dokładnie.Pranie tapicerki, wyczyszczone wszystkie wnęki.Polecam!”<br>– <strong>Monika Zaśko</strong></blockquote>",
      },
      {
        heading: "Masz pytania? Skontaktuj się ze mną",
        content:
          "Jeśli chcesz omówić szczegóły usługi lub uzyskać indywidualną wycenę – <a href='/kontakt'>skontaktuj się ze mną</a>. Z przyjemnością doradzę i pomogę dobrać najlepsze rozwiązanie dla Twojego auta.<br><br>" +
          "Nazywam się <strong>Kamil</strong> – jestem właścicielem <strong>KabeTintLeather</strong> i specjalistą od detailingu z ponad 10-letnim doświadczeniem. Każdą usługę wykonuję osobiście – z pełnym zaangażowaniem i dbałością o detale. " +
          "Działam głównie na terenie <strong>Opola</strong> i okolicznych miejscowości.<br><br>" +
          "Zajrzyj do <a href='/kontakt'>sekcji kontakt</a>, zadzwoń lub napisz – odpowiadam osobiście.<br><br>" +
          "<strong>KabeTintLeather – Kamil Brzoskwinia</strong><br>" +
          "📍 ul. Generała Emila Fieldorfa 12, Opole<br>" +
          "📞 881 325 631<br>" +
          "✉️ kabetint@gmail.com",
      },
    ],

    links: {
      pranieTapicerkiLink: {
        href: "/uslugi/pranie-tapicerki",
        text: "pranie tapicerki samochodowej",
      },
      czyszczenieTapicerkiLink: {
        href: "/uslugi/pranie-tapicerki",
        text: "czyszczeniem tapicerki",
      },
      srodkiDoTapicerkiLink: {
        href: "/uslugi/autokosmetyka",
        text: "środków do czyszczenia tapicerki samochodowej",
      },
      obszaryDzialalnosciLink: {
        href: "/obszary-naszej-dzialalnosci",
        text: "obszary naszej działalności",
      },
    },

    images: [blogBeforeAfter1, blogFoto3, blogFoto4, blogFoto5],
  },
  "jak-wyczyscic-tapicerke-samochodowa": {
    title: "Jak skutecznie wyczyścić tapicerkę samochodową?",
    dynamicImage: blogFotoMain3,
    sections: [
      {
        heading: "Kim jestem i co mnie wyróżnia?",
        content:
          "Mam na imię Kamil i od ponad 10 lat prowadzę <strong>KabeTintLeather</strong> w Opolu. Specjalizuję się w <a href='/uslugi/pranie-tapicerki'>praniu i czyszczeniu tapicerek</a> samochodowych – materiałowych, skórzanych i alcantary. Przez lata usunąłem setki trudnych plam i doskonale wiem, jak przywrócić tapicerce świeżość oraz komfort. Pracuję wyłącznie na sprawdzonych środkach jak <strong>Tenzi, ProElite, ADBL, Gyeon</strong> i dobieram technikę czyszczenia indywidualnie do rodzaju materiału.",
      },
      {
        heading: "Czy domowe sposoby działają?",
        content:
          "Domowe metody czyszczenia, takie jak soda oczyszczona, ocet czy płyn do naczyń, mogą zadziałać na świeże i powierzchowne zabrudzenia. Jednak z mojego doświadczenia wynika, że:<br>" +
          "- ❌ nie usuwają bakterii i zapachów,<br>" +
          "- ❌ nie docierają głęboko do wnętrza włókien,<br>" +
          "- ❌ mogą uszkodzić delikatny materiał (np. alcantarę).<br><br>" +
          "Dlatego najlepiej zlecić <a href='/uslugi/pranie-tapicerki'>czyszczenie tapicerki</a> profesjonaliście. Oszczędzasz czas, unikasz ryzyka i masz gwarancję efektu WOW.",
      },
      {
        heading: "Jak wygląda profesjonalne czyszczenie?",
        content:
          "W <strong>KabeTintLeather</strong> działam według sprawdzonego, skutecznego schematu:<br>" +
          "1. Dokładne odkurzanie – usuwam pył i luźny brud<br>" +
          "2. Pre-spray – nakładam środek rozbijający zabrudzenia<br>" +
          "3. Pranie ekstrakcyjne (Kärcher) – wypłukuję plamy z głębi włókien<br>" +
          "4. <strong>Neutralizacja zapachów</strong> – stosuję ozonowanie lub środki antybakteryjne (opcjonalnie)<br>" +
          "5. Impregnacja – ochrona materiału przed kolejnymi zabrudzeniami<br><br>" +
          "Używam tylko profesjonalnych <a href='/uslugi/autokosmetyka'>środków czyszczących</a> dopasowanych do rodzaju tapicerki – bezpiecznych, skutecznych i neutralnych dla wnętrza auta.",
      },
      {
        heading: "Jak często warto prać tapicerkę?",
        content:
          "Rekomenduję <a href='/uslugi/pranie-tapicerki'>pranie tapicerki samochodowej</a> w zależności od stylu użytkowania auta:<br>" +
          "- co 6 miesięcy – jeśli masz dzieci, psa lub jasną tapicerkę<br>" +
          "- co 12 miesięcy – przy normalnym użytkowaniu auta<br><br>" +
          "Regularne czyszczenie to nie tylko wygląd i zapach, ale też:<br>" +
          "✅ usuwanie alergenów,<br>" +
          "✅ zachowanie wartości pojazdu,<br>" +
          "✅ przyjemność z każdej jazdy.",
      },
      {
        heading: "Co mówią moi klienci?",
        content:
          "<blockquote>„Serdecznie polecam! Super kontakt, szybko wykonana usługa, samochód po czyszczeniu mimo swojego wieku wygląda jak nowy :) Będę polecać i w razie potrzeby ponownie korzystać!”<br>– <strong>Katarzyna I</strong></blockquote><br>" +
          "<blockquote>„Jestem bardzo zadowolony z usług tej firmy, moje siedzenia w aucie odzyskały swoją świeżość i wygląd są jak nowe , Polecam serdecznie.”<br>– <strong>Dominik Miler</strong></blockquote>",
      },
      {
        heading: "Gdzie działam?",
        content:
          "Usługi <strong>czyszczenia tapicerki Opole</strong> świadczę głównie na terenie miasta Opole, ale dojeżdżam też do okolicznych miejscowości:<br>" +
          "- <strong>Ozimek</strong><br>" +
          "- <strong>Prószków</strong><br>" +
          "- <strong>Komprachcice</strong><br>" +
          "- <strong>Lubniany</strong><br>" +
          "- oraz dzielnic: <strong>Zaodrze, Wrzoski, Malina, Półwieś</strong><br><br>" +
          "Pełną listę lokalizacji znajdziesz w sekcji <a href='/obszary-naszej-dzialalnosci'>obszary naszej działalności</a>.",
      },
      {
        heading: "Masz pytania? Skontaktuj się ze mną",
        content:
          "Chcesz umówić się na usługę, zapytać o szczegóły lub uzyskać wycenę? <a href='/kontakt'>Skontaktuj się ze mną</a> – odpowiadam osobiście.<br><br>" +
          "Nazywam się <strong>Kamil</strong> i jestem właścicielem KabeTintLeather. Każde auto traktuję indywidualnie – z precyzją i pasją. Działam lokalnie w Opolu i okolicach.<br><br>" +
          "<strong>KabeTintLeather – Kamil Brzoskwinia</strong><br>" +
          "📍 ul. Generała Emila Fieldorfa 12, Opole<br>" +
          "📞 881 325 631<br>" +
          "✉️ kabetint@gmail.com",
      },
    ],

    links: {
      srodkiCzyszczaceLink: {
        href: "/uslugi/autokosmetyka",
        text: "środków czyszczących",
      },
      czyszczenieTapicerkiLink: {
        href: "/uslugi/pranie-tapicerki",
        text: "czyszczenie tapicerki",
      },
      pranieTapicerkiLink: {
        href: "/uslugi/pranie-tapicerki",
        text: "pranie tapicerki samochodowej",
      },
    },

    images: [blogFotoMain31, blogFoto6, blogFoto7, blogFoto8],
  },

  "jak-dbac-o-skorzana-tapicerke-samochodowa": {
    title: "Jak dbać o skórzaną tapicerkę w samochodzie?",
    dynamicImage: blogFotoMain,
    sections: [
      {
        heading: "Kim jestem i dlaczego warto mi zaufać?",
        content:
          "Mam na imię Kamil i prowadzę <strong>KabeTintLeather</strong> – studio auto detailingu w Opolu. Od ponad 10 lat zajmuję się <a href='/uslugi/renowacja-i-czyszczenie-skor'>czyszczeniem, renowacją i pielęgnacją tapicerek skórzanych</a>. Pracowałem z setkami aut – od klasyków po luksusowe. Wiem, jak dbać o każdy typ skóry: pigmentowaną, anilinową czy perforowaną. Dzięki doświadczeniu i odpowiednim środkom wiem, jak przywrócić tapicerce blask bez ryzyka uszkodzeń.",
      },
      {
        heading: "Dlaczego skórzana tapicerka wymaga specjalnej pielęgnacji?",
        content:
          "Skóra samochodowa to materiał premium - elegancki, ale jednocześnie wrażliwy. Codzienne użytkowanie auta, zmiany temperatury, wilgoć, pot i promieniowanie UV mogą powodować:<br>" +
          "- wysychanie i pękanie,<br>" +
          "- utratę koloru i elastyczności,<br>" +
          "- szorstkość i przetarcia,<br>" +
          "- nieprzyjemne zapachy.<br><br>" +
          "Brak regularnej pielęgnacji skutkuje trwałymi uszkodzeniami. Z tego powodu tak ważne jest regularne <a href='/uslugi/pranie-tapicerki'>czyszczenie i konserwacja skóry</a> za pomocą bezpiecznych, dedykowanych preparatów.",
      },
      {
        heading: "Jak wygląda prawidłowa pielęgnacja skórzanej tapicerki?",
        content:
          "<strong>1. Czyszczenie</strong><br>" +
          "Delikatne i dostosowane do rodzaju skóry – niezależnie czy to skóra pigmentowana, anilinowa czy perforowana. Używam m.in. <strong>Colourlock, Soft99, Gyeon Leather</strong>, które skutecznie usuwają zabrudzenia bez ryzyka uszkodzeń.<br><br>" +
          "<strong>2. Odżywienie i nawilżenie</strong><br>" +
          "Po czyszczeniu aplikuję mleczka i balsamy, które przywracają tapicerce elastyczność, miękkość i naturalny wygląd.<br><br>" +
          "<strong>3. Ochrona</strong><br>" +
          "Nakładam specjalną warstwę zabezpieczającą, która chroni skórę przed promieniowaniem UV, potem, wilgocią i codziennym zużyciem – bez zmiany koloru i struktury materiału.",
      },
      {
        heading: "Jakich środków używam w KabeTintLeather?",
        content:
          "Stawiam wyłącznie na produkty z najwyższej półki:<br>" +
          "- <strong>Colourlock, Soft99 Leather, Gyeon</strong> – do czyszczenia i pielęgnacji,<br>" +
          "- aplikatory z mikrofibry i szczoteczki z miękkim włosiem - do precyzyjnej pracy,<br>" +
          "- ozonatory i neutralizatory zapachów - przy problemach z wilgocią lub zapachem dymu papierosowego.<br><br>" +
          "Każdy samochód traktuję indywidualnie, dobierając środki i technikę do rodzaju skóry oraz jej stanu.",
      },
      {
        heading: "Jak często dbać o skórzaną tapicerkę?",
        content:
          "Z mojego doświadczenia wynika, że regularność to klucz do zachowania świetnego stanu skóry:<br>" +
          "- <strong>czyszczenie i konserwacja</strong>: co 6 miesięcy,<br>" +
          "- <strong>szybka pielęgnacja i przegląd</strong>: co 3 miesiące,<br>" +
          "- <strong>impregnacja ochronna</strong>: najlepiej po sezonie zimowym i letnim.<br><br>" +
          "Dzięki temu skóra zachowuje miękkość, elastyczność i świetny wygląd – a auto utrzymuje swoją wartość na dłużej.",
      },
      {
        heading: "Co mówią moi klienci?",
        content:
          "<blockquote>„Polecam, super robota! Czyszczenie skóry na najwyższym poziomie!”<br>– <strong>Przemysław Winiarski</strong></blockquote><br>" +
          "<blockquote>„Czyszczenie skóry na 5”<br>– <strong>Natalia Znajda</strong></blockquote>",
      },
      {
        heading: "Gdzie działam?",
        content:
          "Działam głównie na terenie <strong>Opola</strong> i okolicznych miejscowości:<br>" +
          "- <strong>Ozimek</strong>, <strong>Prószków</strong>, <strong>Komprachcice</strong>, <strong>Lubniany</strong><br>" +
          "- dzielnice: <strong>Zaodrze</strong>, <strong>Malina</strong>, <strong>Wrzoski</strong>, <strong>Półwieś</strong><br><br>" +
          "Sprawdź też pełną listę na stronie <a href='/obszary-naszej-dzialalnosci'>obszary naszej działalności</a>.",
      },
      {
        heading: "Masz pytania? Skontaktuj się ze mną",
        content:
          "Chcesz zadbać o swoją tapicerkę skórzaną? <a href='/kontakt'>Skontaktuj się ze mną</a> i umów termin. Gwarantuję indywidualne podejście, fachowe doradztwo i efekt, który Cię zachwyci.<br><br>" +
          "Nazywam się <strong>Kamil</strong> i osobiście wykonuję każdą usługę w KabeTintLeather. Dzięki doświadczeniu i pasji do detailingu masz pewność, że Twoje auto jest w dobrych rękach.<br><br>" +
          "<strong>KabeTintLeather – Kamil Brzoskwinia</strong><br>" +
          "📍 ul. Generała Emila Fieldorfa 12, Opole<br>" +
          "📞 881 325 631<br>" +
          "✉️ kabetint@gmail.com",
      },
    ],

    links: {
      pielęgnacjaSkóryLink: {
        href: "/uslugi/renowacja-i-czyszczenie-skor",
        text: "preparatów pielęgnacyjnych",
      },
      czyszczenieTapicerkiSkórzanejLink: {
        href: "/uslugi/pranie-tapicerki",
        text: "czyszczenie tapicerki skórzanej",
      },
      środkiDoSkóryLink: {
        href: "/uslugi/renowacja-i-czyszczenie-skor",
        text: "środki do pielęgnacji skóry",
      },
      skontaktujSięZNamiLink: {
        href: "/kontakt",
        text: "skontaktuj się ze mną",
      },
    },

    images: [blogFoto2, blogFoto1],
  },

  "uzywamy-profesjonalnych-produktow": {
    title:
      "Używamy profesjonalnych produktów – to one decydują o precyzji i trwałości wykonania.",
    dynamicImage: blogFotoMain4,
    sections: [
      {
        heading: "Dlaczego stawiam na jakość?",
        content:
          "Nazywam się <strong>Kamil</strong> i od ponad 10 lat zajmuję się auto detailingiem. Własne studio <strong>KabeTintLeather</strong> prowadzę w Opolu, gdzie osobiście realizuję każdą usługę – od czyszczenia po zabezpieczanie pojazdów. Pracuję osobiście przy każdym aucie, dlatego wiem, jak ogromne znaczenie ma dobór odpowiednich środków do pielęgnacji. Testuję każdy produkt we własnym zakresie, zanim trafi do użytku. Nie korzystam z tanich zamienników – tylko <a href='/uslugi/autokosmetyka'>sprawdzone i certyfikowane preparaty</a>, które zapewniają trwały i bezpieczny efekt. Jakość to podstawa – nie ma miejsca na kompromisy, jeśli chodzi o Twój samochód.",
      },
      {
        heading: "Jakie profesjonalne produkty stosuję?",
        content:
          "<ul>" +
          "<li><strong>Czyszczenie i pielęgnacja lakieru:</strong> Menzerna, Soft99, Koch Chemie</li>" +
          "<li><strong>Powłoki ochronne:</strong> Gyeon, Soft99</li>" +
          "<li><strong>Akcesoria i narzędzia:</strong> Rupes, Kärcher</li>" +
          "</ul>" +
          "Korzystam wyłącznie ze sprawdzonych marek, które gwarantują skuteczność, bezpieczeństwo i trwały efekt. Każdy produkt dobieram indywidualnie – w zależności od materiału, rodzaju zabrudzenia i oczekiwań klienta.",
      },
      {
        heading: "Dlaczego warto zaufać profesjonalnym kosmetykom?",
        content:
          "Z mojego doświadczenia wynika, że:<br><br>" +
          "- Standardowe środki z marketu mogą trwale uszkodzić tapicerkę lub lakier,<br>" +
          "- Tanie kosmetyki często zostawiają smugi i nie zapewniają ochrony,<br>" +
          "- Profesjonalne preparaty są skuteczniejsze, bardziej wydajne i przede wszystkim bezpieczne.<br><br>" +
          "Dzięki zastosowaniu profesjonalnych środków Twój samochód:<br>" +
          "- na dłużej zachowa świeży i zadbany wygląd,<br>" +
          "- jest prostszy w pielęgnacji i czyszczeniu,<br>" +
          "- zostaje skutecznie zabezpieczony przed działaniem pogody, soli i codziennej eksploatacji.",
      },
      {
        heading: "W jaki sposób dbam o wnętrze samochodu?",
        content:
          "W <strong>KabeTintLeather</strong> stosuję kompleksową pielęgnację:<br><br>" +
          "- <strong>Czyszczenie tapicerki materiałowej</strong> – za pomocą środków ekstrakcyjnych, antybakteryjnych i neutralizujących zapachy,<br>" +
          "- <strong>Konserwacja skóry</strong> - delikatne piany i mleczka odżywcze dobrane do rodzaju tapicerki,<br>" +
          "- <strong>Impregnacja wnętrza</strong> - zabezpieczenie tapicerki, plastików i podsufitek przed UV, wilgocią i codziennym zużyciem.<br><br>" +
          "Dzięki odpowiednio dobranym preparatom wnętrze Twojego auta zachowa swój komfort, świeżość i przyjemny zapach na dłużej.",
      },
      {
        heading: "Jak pielęgnuję lakier i szyby?",
        content:
          "<strong>Zewnętrzne czyszczenie pojazdu</strong>  to nie tylko zabieg wizualny, ale istotny etap kompleksowej pielęgnacji. Stosuję:<br><br>" +
          "- <strong>Szampony o neutralnym pH</strong> - łagodne dla powłok lakierniczych,<br>" +
          "- <strong>Piany aktywne</strong> - idealne do bezdotykowego mycia,<br>" +
          "- <strong>Płyny do szyb</strong> - bez smug, także wewnątrz kabiny,<br>" +
          "- <strong>Woski ochronne i quick detailery</strong> - które przywracają lakierowi blask i właściwości hydrofobowe.<br><br>" +
          "<strong>Każdy etap wykonuję z dbałością o detale</strong> - bez automatów, bez pośpiechu, bez kompromisów. Wszystko po to, by Twój samochód prezentował się jak należy.",
      },
      {
        heading: "Co mówią moi klienci?",
        content:
          "<blockquote>„Citroen C5, kompleksowe czyszczenie samochodu wykonane perfekcyjnie. Samochód w środku jak i na zewnątrz wygląda jak nowy. Panowie gratuluję takiego podejścia do swojej wykonywanej pracy i i oczywiście wszystkim serdecznie bardzo polecam skorzystać z usług tej firmy.”<br>- <strong>Tomasz Proszkowiec</strong></blockquote><br>" +
          "<blockquote>„Autko wysprzątane na błysk. Szybko i bez żadnych problemów. Krótki czas oczekiwania na wizytę. Gorąco polecam.”<br>- <strong>Marcin Rozycki</strong></blockquote>",
      },
      {
        heading: "Gdzie działam?",
        content:
          "Obsługuję klientów głównie w <strong>Opolu</strong>, a także w miejscowościach:<br>" +
          "- <strong>Ozimek</strong>, <strong>Prószków</strong>, <strong>Komprachcice</strong>, <strong>Lubniany</strong><br>" +
          "oraz dzielnicach: <strong>Wrzoski</strong>, <strong>Malina</strong>, <strong>Zaodrze</strong>, <strong>Półwieś</strong>.<br><br>" +
          "Więcej informacji znajdziesz w sekcji <a href='/obszary-naszej-dzialalnosci'>obszary naszej działalności</a>.",
      },
      {
        heading: "Masz pytania? Skontaktuj się",
        content:
          "Jeśli chcesz, by Twoje auto wyglądało perfekcyjnie i było chronione profesjonalnie - <a href='/kontakt'>napisz lub zadzwoń</a>.<br><br>" +
          "Nazywam się <strong>Kamil</strong> i jestem właścicielem <strong>KabeTintLeather</strong>. Wszystkie usługi wykonuję osobiście - od prania tapicerki po aplikację powłok ochronnych.<br><br>" +
          "Zaufaj doświadczeniu i sprawdzonym rozwiązaniom.<br><br>" +
          "<strong>KabeTintLeather – Kamil Brzoskwinia</strong><br>" +
          "📍 ul. Generała Emila Fieldorfa 12, Opole<br>" +
          "📞 881 325 631<br>" +
          "✉️ kabetint@gmail.com",
      },
    ],
    links: {
      środkiDoPraniaLink: {
        href: "/uslugi/pranie-tapicerki",
        text: "środki do prania i czyszczenia tapicerki",
      },
      woskiOchronneLink: {
        href: "/uslugi/autokosmetyka",
        text: "woski ochronne",
      },
      czyszczenieTapicerkiLink: {
        href: "/uslugi/pranie-tapicerki",
        text: "czyszczenie tapicerki",
      },
      środkiDoCzyszczeniaLink: {
        href: "/uslugi/pranie-tapicerki",
        text: "środki do czyszczenia tapicerki",
      },
      szamponySamochodoweLink: {
        href: "/uslugi/autokosmetyka",
        text: "szampony samochodowe",
      },
    },
    images: [blogFotoMain41, blogFotoMain42, blogFoto9, blogFoto10, blogFoto11],
  },
  "jak-przyciemnic-szyby-samochodowe": {
    title: "Jak skutecznie przyciemnić szyby w samochodzie?",
    dynamicImage: blogFotoMain5,
    sections: [
      {
        heading: "Kim jestem i dlaczego warto mi zaufać?",
        content:
          "Mam na imię Kamil i od ponad 10 lat zajmuję się profesjonalnym auto detailingiem oraz <a href='/uslugi/przyciemnianie-szyb'>przyciemnianiem szyb</a>. Prowadzę studio <strong>KabeTintLeather</strong> w Opolu, gdzie zrealizowałem setki projektów - od subtelnych przyciemnień po kompleksowe folie termoizolacyjne. Pracuję wyłącznie na certyfikowanych materiałach uznanych marek, zgodnie z przepisami i z użyciem miernika przepuszczalności światła.",
      },
      {
        heading: "Korzyści z przyciemniania szyb",
        content:
          "Z mojego doświadczenia wynika, że klienci decydują się na <a href='/uslugi/przyciemnianie-szyb'>przyciemnianie szyb</a> nie tylko ze względów estetycznych, ale przede wszystkim funkcjonalnych. Dzięki zastosowaniu profesjonalnych folii:<br><br>" +
          "- wnętrze auta nagrzewa się z dużo mniejszą siłą w upalne dni,<br>" +
          "- tapicerka jest lepiej zabezpieczona przed promieniowaniem UV,<br>" +
          "- poprawia się komfort jazdy i poziom prywatność,<br>" +
          "- samochód zyskuje nowoczesny i bardziej prestiżowy wygląd.<br><br>" +
          "<strong>Przyciemnione szyby</strong> pełnią również funkcję ochronną - zmniejszają ryzyko rozpryśnięcia szkła podczas kolizji.",
      },
      {
        heading: "Jakie metody stosuję?",
        content:
          "Oferuję dwie bezpieczne i skuteczne metody:<br><br>" +
          "<strong>1. Metoda foliowa</strong> - szybka aplikacja na sucho lub mokro, możliwość późniejszego demontażu, skuteczna ochrona wnętrza pojazdu.<br><br>" +
          "<strong>2. Metoda piecowa</strong> - termicznie dopasowana folia o zwiększonej trwałości, z efektem fabrycznego przyciemnienia.<br><br>" +
          "W obu przypadkach używam tylko folii z atestami (3M, SunTek, Global Window Films), które spełniają obowiązujące normy prawne. Zawsze doradzam indywidualnie - z myślą o bezpieczeństwie, estetyce i trwałości efektu.",
      },
      {
        heading: "Co mówi prawo o przyciemnianiu szyb?",
        content:
          "Zgodnie z obowiązującymi przepisami w Polsce:<br>" +
          "- <strong>szyba przednia</strong>: musi przepuszczać minimum 75% światła,<br>" +
          "- <strong>przednie boczne</strong>: minimum 70%,<br>" +
          "- <strong>tylne szyby</strong>: bez ograniczeń.<br><br>" +
          "W <strong>KabeTintLeather</strong> zawsze działam zgodnie z prawem. Podczas pracy używam miernika i nigdy nie przyciemniam szyb w sposób nielegalny - masz więc pewność, że wszystko będzie zgodne z przepisami, również podczas przeglądu technicznego.",
      },
      {
        heading: "Cennik usług przyciemniania szyb",
        content:
          "<ul>" +
          "<li>Tylna szyba + boczne tylne: <strong>od 600 zł</strong></li>" +
          "<li>Kompletny tył (3 lub 5 szyb): <strong>od 800 zł</strong></li>" +
          "<li>Przednie boczne szyby (2 szt.): <strong>od 400 zł</strong></li>" +
          "<li>Auta luksusowe / SUV-y: <strong>indywidualna wycena</strong></li>" +
          "</ul><br>" +
          "W cenie zawarte są: folia z atestem, profesjonalny montaż, precyzyjne przycięcie oraz pomiar przepuszczalności światła. Finalna kwota zależy od modelu samochodu i wybranego rodzaju folii.",
      },
      {
        heading: "Co mówią moi klienci?",
        content:
          "<blockquote>„Gorąco polecam pana Kamila. Korzystam z usług od dłuższego czasu, pan Kamil robił mi 3 samochody. Każdy zrobiony perfekcyjnie. Czy to sprzątanie i pranie czy mycie z woskowaniem, czy przyciemnianie szyb, czy odnowienie kierownicy, czy dziś folia ppf na lampy. Zawsze zrobione perfekcyjnie z dbaniem o najmniejsze szczegóły.”<br>– <strong>Łukasz Halkiewicz</strong></blockquote><br>" +
          "<blockquote>„Witam. Miałem okazji Korzystać z ich usług i jestem mega zadowolony, praca bardzo rzetelnie wykonana w najdrobniejszych szczegółach, usługa wykonana w atrakcyjnej cenie, kontakt miły i rzeczowy. Wszystkim którzy się jeszcze wąchają gorąco polecam 👍👍👍 pozdrawiam.”<br>– <strong>Marek Polanski</strong></blockquote>",
      },
      {
        heading: "Gdzie działam?",
        content:
          "Działam w <strong>Opolu</strong> i okolicznych miejscowościach, m.in.:<br>" +
          "- <strong>Ozimek</strong>, <strong>Prószków</strong>, <strong>Komprachcice</strong>, <strong>Lubniany</strong><br>" +
          "- dzielnice Opola: <strong>Wrzoski, Malina, Zaodrze, Półwieś</strong><br><br>" +
          "Sprawdź pełny zakres na stronie <a href='/obszary-naszej-dzialalnosci'>obszary naszej działalności</a>.",
      },
      {
        heading: "Masz pytania? Skontaktuj się",
        content:
          "Jeśli chcesz zabezpieczyć wnętrze auta i poprawić jego wygląd - <a href='/kontakt'>skontaktuj się ze mną</a>. Doradzę, który rodzaj folii będzie najbardziej optymalny do Twojego samochodu.<br><br>" +
          "<strong>Nazywam się Kamil</strong>, jestem właścicielem KabeTintLeather i wykonuję wszystkie usługi osobiście - precyzyjnie, legalnie i z pasją.<br><br>" +
          "<strong>KabeTintLeather – Kamil Brzoskwinia</strong><br>" +
          "📍 ul. Generała Emila Fieldorfa 12, Opole<br>" +
          "📞 881 325 631<br>" +
          "✉️ kabetint@gmail.com",
      },
    ],

    links: {
      przyciemnianieSzybLink: {
        href: "/uslugi/przyciemnianie-szyb",
        text: "przyciemnianiu szyb",
      },
      metodaPiecowaLink: {
        href: "/uslugi/przyciemnianie-szyb",
        text: "metodą piecową",
      },
      metodaFoliowaLink: {
        href: "/uslugi/przyciemnianie-szyb",
        text: "metodą foliową",
      },
      uslugiPrzyciemnianiaLink: {
        href: "/uslugi/przyciemnianie-szyb",
        text: "usługi przyciemniania szyb",
      },
      barieraOchronnaLink: {
        href: "/uslugi/przyciemnianie-szyb",
        text: "bariera ochronna",
      },
    },

    images: [blogBeforeAfter9, blogBeforeAfter10],
  },

  "korekta-lakieru": {
    title: "Korekta lakieru - co to jest i dlaczego warto ją wykonać?",
    dynamicImage: blogFoto17,
    sections: [
      {
        heading: "Kim jestem i co oferuję?",
        content:
          "Nazywam się Kamil i mam ponad 10 lat doświadczenia w auto detailingu. Prowadzę studio <strong>KabeTintLeather</strong> w Opolu, gdzie specjalizuję się w profesjonalnej korekcie lakieru oraz kompleksowym detailingu samochodowym. Wykonałem setki korekt - od lekkiego <a href='/uslugi/korekta-lakieru'>One Step</a> po pełne, wieloetapowe renowacje lakieru z zabezpieczeniem powłoką ceramiczną. Pracuję na różnych typach lakieru - od miękkiego japońskiego po twardy niemiecki, zawsze dostosowując metodę indywidualnie do konkretnego pojazdu.",
      },
      {
        heading: "Czym jest korekta lakieru?",
        content:
          "Korekta lakieru to precyzyjny proces polerowania mający na celu usunięcie defektów takich jak:<br>" +
          "- zarysowania i mikrorysy,<br>" +
          "- matowość i utlenienia powierzchni,<br>" +
          "- hologramy i ślady po automatycznych myjniach,<br>" +
          "- plamy po ptasich odchodach, żywicy lub wodzie.<br><br>" +
          "Dzięki odpowiedniemu dobranym <a href='/uslugi/korekta-lakieru'>narzędziom i pastom polerskim</a>, lakier odzyskuje głębię, połysk oraz idealną gładkość. Efekt to nie tylko poprawa wyglądu, ale też lepsza ochrona powierzchni przed dalszymi uszkodzeniami.",
      },
      {
        heading: "Jak wygląda proces korekty lakieru?",
        content:
          "1. <strong>Mycie detailingowe i dekontaminacja</strong> – usuwam smołę, opiłki żelaza, osady drogowe i inne zanieczyszczenia, które mogłyby zakłócić polerowanie.<br>" +
          "2. <strong>Pomiar grubości lakieru</strong> – sprawdzam grubość powłoki lakierniczej, aby dobrać bezpieczną metodę korekty – bez ryzyka przetarcia.<br>" +
          "3. <strong>Polerowanie jedno- lub dwuetapowe</strong> – proces dobieram indywidualnie do stanu lakieru – od lekkiego odświeżenia po głęboką korektę.<br>" +
          "4. <strong>Odtłuszczenie i inspekcja</strong> – po każdym etapie odtłuszczam lakier i dokładnie oceniam efekt, by mieć pewność, że usunięte zostały wszystkie defekty.<br>" +
          "5. <strong>Zabezpieczenie lakieru</strong> – na koniec aplikuję wybraną formę ochrony – powłokę ceramiczną, wosk lub sealant – w zależności od preferencji klienta.",
      },
      {
        heading: "Korekta One Step – szybki efekt bez pełnej renowacji",
        content:
          "Korekta lakieru <strong>One Step</strong> to szybki, jednoetapowy proces, który pozwala na:<br>" +
          "- usunięcie drobnych zarysowań i swirlów,<br>" +
          "- przywrócenie głębi i połysku lakieru,<br>" +
          "- odświeżenie wyglądu auta – idealnie przed sprzedażą lub sezonem.<br><br>" +
          "<strong>Czas wykonania:</strong> około 1 dzień<br>" +
          "<strong>Koszt:</strong> bardziej przystępny niż przy pełnej korekcie<br>" +
          "<strong>Efekt:</strong> widoczna poprawa estetyki bez konieczności wieloetapowej renowacji.",
      },
      {
        heading: "Dlaczego warto wykonać korektę lakieru?",
        content:
          "- Twoje auto wygląda na zadbane, nowsze i bardziej prestiżowe<br>" +
          "- Usuwasz ślady codziennego użytkowania i błędów pielęgnacyjnych<br>" +
          "- Zwiększasz wartość pojazdu - szczególnie przed sprzedażą<br>" +
          "- Przygotowujesz lakier pod <a href='/uslugi/folia-ppf-ochrona-lakieru'>folię PPF</a> lub <a href='/uslugi/powloka-ceramiczna'>powłokę ceramiczną</a><br><br>" +
          "Zadbany lakier to nie tylko estetyka – to również realna ochrona przed dalszą degradacją.",
      },
      {
        heading: "Na czym pracuję?",
        content:
          "Do każdego auta dobieram indywidualny zestaw narzędzi i past polerskich. Korzystam wyłącznie ze sprawdzonego sprzętu i renomowanych marek:<br>" +
          "- maszyny polerskie: <strong>Rupes, Flex</strong><br>" +
          "- pasty: <strong>Menzerna, Koch Chemie</strong><br>" +
          "- pady: cutting, polishing, finishing – w zależności od etapu pracy<br>" +
          "- mierniki grubości lakieru, lampy inspekcyjne LED<br><br>" +
          "Nie stosuję gotowych rozwiązań – każdy samochód to inny przypadek, który wymaga spersonalizowanego podejścia.",
      },
      {
        heading: "Co mówią moi klienci?",
        content:
          "<blockquote>„Mimo że auto jest nowe, zdecydowałem się na korektę lakieru One Step przed nałożeniem 2-letniej powłoki ceramicznej – jak się okazało, to standardowa procedura, aby usunąć mikro zarysowania i maksymalnie przygotować powierzchnię pod zabezpieczenie. Pan Kamil wykonał usługę perfekcyjnie! Lakier zyskał niesamowitą głębię i blask, a powłoka ceramiczna dodała efektu szklistości i ochrony. Samochód wygląda lepiej niż w salonie! Największym atutem, poza samą jakością pracy, było profesjonalne podejście i ogromna wiedza Pana Kamila. Poświęcił czas, aby dokładnie wytłumaczyć mi, jak działają powłoki, jak o nie dbać i na co zwracać uwagę, aby efekt utrzymał się jak najdłużej. Widać, że to pasjonat w swoim fachu. Jeśli ktoś szuka fachowej usługi detailingowej, to zdecydowanie polecam Pana Kamila”<br>– <strong>Denis Bul</strong></blockquote><br>" +
          "<blockquote>„Skorzystalem z uslug u Pana Kamila i naprawde polecam! Oddalem samochód na pranie tapicerki oraz na kompletne czyszczenie wnetrza dodatkowo Pan kamil przeprowadzil korekte lakieru 'One step' i nalozył powloke ceramiczna. Jestem bardzo zadowolony z efektu prac!”<br>– <strong>Szymon</strong></blockquote>",
      },
      {
        heading: "Gdzie działam?",
        content:
          "Działam w <strong>Opolu</strong> i pobliskich miejscowościach:<br>" +
          "- <strong>Ozimek</strong><br>" +
          "- <strong>Prószków</strong><br>" +
          "- <strong>Komprachcice</strong><br>" +
          "- <strong>Lubniany</strong><br>" +
          "oraz dzielnice: <strong>Wrzoski, Malina, Zaodrze, Półwieś</strong>.<br><br>" +
          "Sprawdź <a href='/obszary-naszej-dzialalnosci'>obszary naszej działalności</a>.",
      },
      {
        heading: "Umów się na bezpłatną wycenę",
        content:
          "Chcesz ocenić stan lakieru i poznać koszt korekty?<br>" +
          "Zadzwoń lub napisz - <a href='/kontakt'>skontaktuj się ze mną</a>. Oferuję bezpłatną konsultację i indywidualną wycenę.<br><br>" +
          "<strong>KabeTintLeather – Kamil Brzoskwinia</strong><br>" +
          "📍 ul. Generała Emila Fieldorfa 12, Opole<br>" +
          "📞 881 325 631<br>" +
          "✉️ kabetint@gmail.com",
      },
    ],
    links: {
      narzedziaLink: {
        href: "/uslugi/korekta-lakieru",
        text: "narzędzi i past polerskich",
      },
      usuwanieRysLink: {
        href: "/uslugi/korekta-lakieru",
        text: "Usunięcie zarysowań",
      },
      korektaOneStepLink: {
        href: "/uslugi/korekta-lakieru",
        text: "Korekta lakieru One Step",
      },
      korektaBudzetLink: {
        href: "/uslugi/korekta-lakieru",
        text: "Korekta lakieru w przystępnej cenie",
      },
    },
    images: [blogFotoMain6, blogFoto17, blogFoto19],
  },

  "folia-ppf-ochrona-lakieru": {
    title: "Folia PPF – jak skutecznie chronić lakier samochodu?",
    dynamicImage: blogFoto14,
    sections: [
      {
        heading: "Kim jestem?",
        content:
          "Nazywam się Kamil i prowadzę <strong>KabeTintLeather</strong> w Opolu. Od wielu lat specjalizuję się w <strong>auto detailingu i aplikacji folii PPF</strong>. Zabezpieczyłem dziesiątki samochodów – od miejskich hatchbacków po auta klasy premium. Stawiam na indywidualne podejście i dokładność – dzięki temu uzyskuję efekt, który łączy jakość z trwałością.",
      },
      {
        heading: "Czym jest folia PPF?",
        content:
          "Folia ochronna PPF (Paint Protection Film) to nowoczesna forma zabezpieczenia, która zapewnia długotrwałą ochronę lakieru przed uszkodzeniami. Dzięki swojej przeźroczystej strukturze, <a href='/uslugi/folia-ppf-ochrona-lakieru'>folia PPF</a>, jest praktycznie niewidoczna, co oznacza, że zachowuje naturalny wygląd pojazdu, jednocześnie chroniąc jego powierzchnię przed szkodliwymi czynnikami zewnętrznymi. Folia PPF zapewnia skuteczną ochronę przed zarysowaniami, promieniowaniem UV oraz działaniem substancji chemicznych, takich jak sól drogowa czy kwaśne deszcze. Jej elastyczność sprawia, że doskonale przylega do skomplikowanych kształtów karoserii, gwarantując kompleksową ochronę zarówno dla całego pojazdu, jak i jego poszczególnych elementów.",
      },
      {
        heading: "Dlaczego warto zainwestować w folię PPF?",
        content:
          "Zabezpieczenie lakieru to kluczowy krok w utrzymaniu estetyki i wartości samochodu. <strong>Folia PPF</strong> to jedno z najskuteczniejszych rozwiązań dostępnych na rynku – nie tylko chroni, ale też podkreśla wygląd pojazdu.<br><br>" +
          "<strong>Najważniejsze zalety folii PPF:</strong><br>" +
          "- <strong>Doskonała ochrona:</strong> Skutecznie zabezpiecza lakier przed zarysowaniami, odpryskami i korozją.<br>" +
          "- <strong>Technologia samoregeneracji:</strong> Drobne rysy znikają pod wpływem ciepła.<br>" +
          "- <strong>Hydrofobowa powierzchnia:</strong> Odpycha wodę, brud i inne zanieczyszczenia, ułatwiając pielęgnację.<br>" +
          "- <strong>Efekt wizualny:</strong> Folia wzmacnia głębię koloru i połysk lakieru.<br>" +
          "- <strong>Trwałość:</strong> Najwyższej jakości folie mogą chronić lakier nawet do 10 lat.<br><br>" +
          "Dla maksymalnego efektu, przed aplikacją folii warto wykonać <a href='/uslugi/korekta-lakieru'>korektę lakieru</a>, która usuwa zarysowania i wygładza powierzchnię.",
      },
      {
        heading: "Jakie są rodzaje folii PPF?",
        content:
          "Na rynku dostępnych jest kilka typów folii PPF, które można dopasować do indywidualnych potrzeb i oczekiwań właściciela pojazdu:<br><br>" +
          "- <strong>Folie matowe:</strong> Nadają lakierowi nowoczesny, satynowy wygląd i elegancję.<br>" +
          "- <strong>Folie błyszczące:</strong> Wzmacniają połysk i głębię koloru, podkreślając estetykę auta.<br>" +
          "- <strong>Folie samoregenerujące:</strong> Dzięki innowacyjnej technologii drobne zarysowania znikają pod wpływem ciepła.<br>" +
          "- <strong>Folie hydrofobowe:</strong> Odpychają wodę, zabrudzenia i oleje, co znacząco ułatwia pielęgnację samochodu.",
      },
      {
        heading: "Przykładowy cennik folii PPF",
        content:
          "Cena aplikacji folii PPF zależy od zakresu ochrony, powierzchni pojazdu oraz rodzaju folii. Oto przykładowe koszty:<br>- Reflektory: od 300 zł za komplet.<br>- Słupki black piano: od 400 zł za stronę.<br>- Wnęki klamek: od 200 zł za komplet.<br>- Progi: od 500 zł.<br>- Kompletna ochrona przodu samochodu: od <strong>3000</strong> zł.<br>- Kompletna ochrona całego samochodu: od <strong>8000</strong> zł.",
      },
      {
        heading: "Na jak długo wystarcza folia PPF?",
        content:
          "Trwałość folii PPF wynosi od 5 do 10 lat, w zależności od jakości folii, warunków eksploatacji oraz odpowiedniej pielęgnacji. Regularne jej czyszczenie i unikanie agresywnych środków chemicznych pozwolą na maksymalne wykorzystanie potencjału folii.",
      },
      {
        heading: "Po co stosuje się folię PPF i kiedy warto ją założyć?",
        content:
          "Folia PPF to rozwiązanie dla osób, które chcą <b>zabezpieczyć nowy lakier</b> przed szybkim zużyciem lub przywrócić ochronę w przypadku świeżo odnowionych powierzchni. To świetna alternatywa dla właścicieli <b>nowych samochodów</b>, <b>aut luksusowych</b> lub <b>pojazdów firmowych</b>, gdzie ważna jest nienaganna prezencja.<br><br>" +
          "Najczęstsze powody montażu folii PPF:<br>" +
          "- Auto świeżo odebrane z salonu<br>" +
          "- Lakier po korekcie lub lakierowaniu<br>" +
          "- Częste podróże autostradą (ryzyko odprysków)<br>" +
          '- Chęć uzyskania efektu "show car" na długie lata<br><br>' +
          "Folia skutecznie chroni przed: <b>odpryskami, zarysowaniami, osadami drogowymi, ptasimi odchodami, owadami, solą i chemią</b>. Dzięki temu auto wygląda jak nowe i łatwiej utrzymać je w czystości.<br><br>" +
          "Jeśli chcesz sprawdzić, jakie elementy warto zabezpieczyć w Twoim aucie, zajrzyj do naszej <a href='/uslugi/folia-ppf-ochrona-lakieru'>oferty folii PPF</a> i skontaktuj się po darmową konsultację.",
      },
      {
        heading: "Folia PPF Opole – gdzie świadczymy usługę?",
        content:
          "Nasze usługi <strong>Folia PPF Opole</strong> dostępne są nie tylko w samym Opolu, ale również w pobliskich miejscowościach. Sprawdź wszystkie lokalizacje na stronie <a href='/obszary-naszej-dzialalnosci'>obszary naszej działalności</a> i przekonaj się, czy jesteśmy również w Twojej okolicy!",
      },
      {
        heading: "Co mówią moi klienci?",
        content:
          "<blockquote>„Usługa wykonana bardzo rzetelnie. Szybki czas realizacji. Polecam”<br>– <strong>Łukasz “Proppo”</strong></blockquote><br>" +
          "<blockquote>„Auto oddane na kompleksowe czyszczenie wnętrza wraz z praniem tapicerki , dodatkowo nałożona została powłoka ceramiczną oraz zabezpieczony został front folia PPF. polecam!”<br>– <strong>Dariusz Grzebień</strong></blockquote>",
      },
      {
        heading: "Masz pytania? Skontaktuj się ze mną",
        content:
          "Jeśli chcesz omówić szczegóły usługi lub uzyskać indywidualną wycenę – <a href='/kontakt'>skontaktuj się ze mną</a>. Z przyjemnością doradzę i pomogę dobrać najlepsze rozwiązanie dla Twojego auta.<br><br>" +
          "Nazywam się <strong>Kamil</strong> – jestem właścicielem <strong>KabeTintLeather</strong> i specjalistą od detailingu z ponad 10-letnim doświadczeniem. Każdą usługę wykonuję osobiście – z pełnym zaangażowaniem i dbałością o detale. " +
          "Działam głównie na terenie <strong>Opola</strong> i okolicznych miejscowości.<br><br>" +
          "Zajrzyj do <a href='/kontakt'>sekcji kontakt</a>, zadzwoń lub napisz – odpowiadam osobiście.<br><br>" +
          "<strong>KabeTintLeather – Kamil Brzoskwinia</strong><br>" +
          "📍 ul. Generała Emila Fieldorfa 12, Opole<br>" +
          "📞 881 325 631<br>" +
          "✉️ kabetint@gmail.com",
      },
    ],
    links: {
      foliaPPFLink: {
        href: "/uslugi/folia-ppf-ochrona-lakieru",
        text: "folia PPF",
      },
      korektaLakieruLink: {
        href: "/uslugi/korekta-lakieru",
        text: "korekta lakieru",
      },
      foliaPPFOfertaLink: {
        href: "/uslugi/folia-ppf-ochrona-lakieru",
        text: "oferty folii PPF",
      },
      obszaryDzialalnosciLink: {
        href: "/obszary-naszej-dzialalnosci",
        text: "obszary naszej działalności",
      },
    },
    images: [blogFoto13, blogFoto14, blogFoto15, blogFoto16],
  },
  "powloka-ceramiczna": {
    title: "Powłoka ceramiczna – ochrona i połysk Twojego auta",
    dynamicImage: blogFotoMain7,
    sections: [
      {
        heading: "Kim jestem?",
        content:
          "Nazywam się Kamil, prowadzę <strong>KabeTintLeather</strong> w Opolu i od lat specjalizuję się w aplikacji <strong>powłok ceramicznych</strong> oraz kompleksowym detailingu. Zabezpieczyłem lakier w setkach samochodów - od miejskich hatchbacków po SUV-y i auta sportowe. Wiem, jak dobrać właściwą powłokę do auta, stylu jazdy i oczekiwań właściciela.",
      },

      {
        heading: "Czym jest powłoka ceramiczna?",
        content:
          "Powłoka ceramiczna to <b>trwała, niewidoczna warstwa ochronna</b>, która wiąże się z lakierem samochodu i chroni go przed zarysowaniami, promieniowaniem UV, brudem i chemią drogową. <br><br>" +
          "W mojej pracy stosuję powłoki <strong>Gyeon, Ultracoat i Soft99</strong>, które sprawdziły się w praktyce – zarówno w miejskich autach, jak i w samochodach premium. Efekt? Głębia koloru, połysk i lakier jak nowy nawet po 3 zimach. <br><br>" +
          "Więcej informacji o powłoce znajdziesz w sekcji usługi: <a href='/uslugi/powloka-ceramiczna'>powłoka ceramiczna</a>.",
      },
      {
        heading: "Dlaczego warto wybrać powłokę ceramiczną?",
        content:
          "Powłoka ceramiczna oferuje szereg korzyści, które znacząco wpływają na <b>estetykę</b> i <b>ochronę</b> Twojego pojazdu.<br><br><b>Najważniejsze zalety:</b><br>- <b>Ochrona przed zarysowaniami:</b> Powłoka tworzy twardą i trwałą barierę, która minimalizuje ryzyko uszkodzeń mechanicznych.<br>- <b>Hydrofobowe właściwości:</b> Woda i zabrudzenia spływają z powierzchni lakieru, co ułatwia czyszczenie pojazdu.<br>- <b>Odporność na chemikalia:</b> Powłoka ceramiczna zabezpiecza lakier przed działaniem agresywnych środków czyszczących.<br>- <b>Trwała ochrona:</b> Powłoka zachowuje swoje właściwości przez wiele miesięcy, a nawet lat.<br>- <b>Estetyka:</b> Głębia koloru i połysk lakieru sprawiają, że samochód wygląda wyjątkowo elegancko.<br>- <b>Ochrona przed promieniowaniem UV:</b> Powłoka chroni lakier przed blaknięciem, co przedłuża jego żywotność.",
      },
      {
        heading: "Jak aplikujemy powłokę ceramiczną?",
        content:
          "Proces aplikacji powłoki ceramicznej wymaga <b>precyzji</b> i <b>doświadczenia</b>, aby osiągnąć maksymalne efekty. Obejmuje on następujące kroki:<br><br>1. <b>Dokładne mycie i przygotowanie powierzchni:</b> Usunięcie wszelkich zabrudzeń, takich jak kurz, tłuszcz czy pozostałości wosku.<br>2. <b>Korekta lakieru:</b> W przypadku pojazdów używanych usuwane są drobne rysy i zmatowienia.<br>3. <b>Aplikacja powłoki:</b> Powłoka nakładana jest równomiernie na powierzchnię lakieru.<br>4. <b>Utwardzanie:</b> Powłoka ceramiczna wymaga odpowiedniego czasu na utwardzenie, aby zapewnić maksymalną trwałość.",
      },
      {
        heading: "Cennik powłoki ceramicznej",
        content:
          "Cena aplikacji powłoki ceramicznej zależy od <b>rodzaju pojazdu</b>, <b>zakresu usługi</b> oraz <b>wybranych produktów</b>. Oto przykładowe koszty:<br>- <b>Małe auta (np. hatchback):</b> od 1200 zł.<br>- <b>Samochody średniej wielkości (np. sedan):</b> od 1500 zł.<br>- <b>SUV-y i większe pojazdy:</b> od 2000 zł.<br>- <b>Ochrona elementów (np. maska, zderzaki):</b> od 500 zł za element.<br><br>Skontaktuj się z nami, aby otrzymać <b>indywidualną wycenę</b> i dowiedzieć się więcej o dostępnych opcjach. Szczegóły znajdziesz także na stronie <a href='/uslugi/powloka-ceramiczna'>powłoki ceramicznej</a>.",
      },
      {
        heading: "Jak długo utrzymuje się powłoka ceramiczna?",
        content:
          "Powłoka ceramiczna to inwestycja na długie lata. Jej trwałość zależy od jakości produktu i pielęgnacji, ale zwykle zachowuje swoje właściwości przez 2 do 5 lat. Regularne mycie i stosowanie środków pielęgnacyjnych zalecanych przez specjalistów pozwala jeszcze bardziej wydłużyć jej żywotność.",
      },
      {
        heading: "Czym jest powłoka elastomerowa?",
        content:
          "Powłoka elastomerowa to <b>elastyczna warstwa ochronna</b>, która tworzy szczelną powłokę na powierzchni lakieru. W przeciwieństwie do <a href='/uslugi/powloka-ceramiczna'>powłoki ceramicznej</a>, charakteryzuje się <b>wysoką rozciągliwością</b> i zdolnością do 'samoregeneracji' drobnych uszkodzeń. Dzięki temu doskonale sprawdza się w warunkach, gdzie lakier narażony jest na <b>zmiany temperatury, kamienie czy sól drogową</b>. Powłoka elastomerowa nadaje pojazdowi matowe lub satynowe wykończenie, a jej elastyczność sprawia, że jest mniej podatna na pękanie w przypadku uderzeń.",
      },

      {
        heading: "Powłoka ceramiczna czy elastomerowa – co wybrać?",
        content:
          "Wybór odpowiedniej powłoki zależy od <b>Twoich oczekiwań</b> oraz sposobu eksploatacji pojazdu.<br><br><b>Porównanie:</b><br><br>" +
          "<b>Powłoka ceramiczna:</b><br>- Twarda i błyszcząca powierzchnia<br>- Głębia koloru i wysoki połysk<br>- Doskonała ochrona przed UV, chemią i zabrudzeniami<br>- Idealna do samochodów pokazowych, zadbanych, nowych<br><br>" +
          "<b>Powłoka elastomerowa:</b><br>- Matowe lub satynowe wykończenie<br>- Elastyczność i odporność na mikrouszkodzenia<br>- Lepsza ochrona mechaniczna (np. przed kamykami)<br>- Świetna opcja dla aut terenowych, użytkowych, zimowych",
      },
      {
        heading: "Jakie są rodzaje powłok ceramicznych?",
        content:
          "Na rynku dostępne są różne rodzaje <a href='/uslugi/powloka-ceramiczna'>powłok ceramicznych</a>, które różnią się trwałością, składem i efektem wizualnym.<br><br>" +
          "<b>Najpopularniejsze typy:</b><br>" +
          "- <b>1-letnie powłoki:</b> Podstawowa ochrona, idealna na sezon lub dla osób, które lubią częste odświeżanie lakieru.<br>" +
          "- <b>3-letnie powłoki:</b> Świetny kompromis między ceną a trwałością – dobre zabezpieczenie przy umiarkowanym użytkowaniu.<br>" +
          "- <b>5-letnie i dłuższe:</b> Profesjonalne produkty o wysokiej odporności, polecane dla aut premium lub nowych pojazdów.<br>" +
          "- <b>Powłoki z dodatkiem tytanu, grafenu lub SiO2:</b> Zapewniają jeszcze większą twardość i głębię koloru.<br><br>" +
          "Dobór odpowiedniego typu zależy od <b>potrzeb właściciela</b> i warunków użytkowania auta.",
      },
      {
        heading: "Dlaczego warto zabezpieczyć lakier samochodu?",
        content:
          "<b>Zabezpieczenie lakieru</b> to nie tylko kwestia estetyki – to przede wszystkim <b>inwestycja w trwałość i wartość pojazdu</b>.<br><br>" +
          "Z czasem lakier narażony jest na:<br>" +
          "- Działanie promieniowania UV i blaknięcie<br>" +
          "- Zabrudzenia drogowe, pyły, sól zimowa<br>" +
          "- Mikro zarysowania z myjni automatycznych<br>" +
          "- Opady atmosferyczne i kwaśne deszcze<br><br>" +
          "Dobrze zaaplikowana powłoka ceramiczna tworzy barierę ochronną, która <b>znacznie wydłuża żywotność lakieru</b>, ułatwia jego czyszczenie i poprawia wygląd auta na długie lata.",
      },
      {
        heading: "Co dokładnie chroni powłoka ceramiczna?",
        content:
          "<b>Powłoka ceramiczna</b> działa jak <b>niewidzialna tarcza</b> – tworzy twardą strukturę, która wiąże się z lakierem i zabezpiecza:<br><br>" +
          "- <b>Przed UV:</b> lakier nie blaknie i nie matowieje<br>" +
          "- <b>Przed wodą i brudem:</b> dzięki efektowi hydrofobowemu<br>" +
          "- <b>Przed chemią drogową:</b> sól, asfalt, owady – nie wżerają się<br>" +
          "- <b>Przed ptasimi odchodami:</b> które mogą wypalić lakier<br>" +
          "- <b>Przed drobnymi rysami:</b> twardość powłoki ogranicza mikrouszkodzenia<br><br>" +
          "Jeśli chcesz, by Twój samochód <b>wyglądał jak nowy przez wiele lat</b>, wybór <a href='/uslugi/powloka-ceramiczna'>powłoki ceramicznej</a> to najlepsze rozwiązanie.",
      },
      {
        heading: "Łatwość mycia i efekt szklistości lakieru",
        content:
          "Jedną z największych zalet powłoki ceramicznej jest <b>znaczne ułatwienie codziennej pielęgnacji auta</b>. Dzięki właściwościom hydrofobowym, woda i brud nie przywierają do powierzchni, lecz spływają, zabierając ze sobą zanieczyszczenia.<br><br>" +
          "Dodatkowo powłoka nadaje lakierowi niesamowitą <b>szklistość</b> – samochód wygląda, jakby właśnie wyjechał z salonu. Efekt lustra sprawia, że nawet starsze auto zyskuje nową głębię koloru i elegancki, <b>błyszczący wygląd</b>.<br><br>" +
          "<b>Najważniejsze korzyści:</b><br>" +
          "- Samochód pozostaje czysty przez dłuższy czas<br>" +
          "- Brud łatwiej się usuwa, bez szorowania<br>" +
          "- Połysk i odbicie światła jak na lakierze „showcar”<br>" +
          "- Mniej ryzyka zarysowań podczas mycia",
      },

      {
        heading: "Powłoka ceramiczna Opole - gdzie działamy?",
        content:
          "Usługę <strong>powłoka ceramiczna Opole</strong> oferujemy nie tylko w samym Opolu, ale również w pobliskich miejscowościach i dzielnicach. Sprawdź pełną listę lokalizacji w sekcji <a href='/obszary-naszej-dzialalnosci'>obszary naszej działalności</a> i przekonaj się, czy działamy także w Twojej okolicy!",
      },
      {
        heading: "Co mówią moi klienci?",
        content:
          "<blockquote>„Robota na najwyższym poziomie! Wszystko wykonane kompleksowo i perfekcyjnie 🙂 Na samochód została nałożona powłoka ceramiczna najwyższej klasy także jest efekt WOW🤩🤩 Na żywo - szczena opada😃😎”<br>– <strong>Mateusz Korzeniowski</strong></blockquote><br>" +
          "<blockquote>„Usługa wykonana bardzo profesjonalnie.Auto jak nowe.Polecam serdecznie.”<br>– <strong>Justyna Pałęcka</strong></blockquote>",
      },
      {
        heading: "Masz pytania? Skontaktuj się ze mną",
        content:
          "Jeśli chcesz omówić szczegóły usługi lub uzyskać indywidualną wycenę - <a href='/kontakt'>skontaktuj się ze mną</a>. Z przyjemnością doradzę i pomogę dobrać najlepsze rozwiązanie dla Twojego auta.<br><br>" +
          "Nazywam się <strong>Kamil</strong> - jestem właścicielem <strong>KabeTintLeather</strong> i specjalistą od detailingu z ponad 10-letnim doświadczeniem. Każdą usługę wykonuję osobiście – z pełnym zaangażowaniem i dbałością o detale. " +
          "Działam głównie na terenie <strong>Opola</strong> i okolicznych miejscowości.<br><br>" +
          "Zajrzyj do <a href='/kontakt'>sekcji kontakt</a>, zadzwoń lub napisz - odpowiadam osobiście.<br><br>" +
          "<strong>KabeTintLeather – Kamil Brzoskwinia</strong><br>" +
          "📍 ul. Generała Emila Fieldorfa 12, Opole<br>" +
          "📞 881 325 631<br>" +
          "✉️ kabetint@gmail.com",
      },
    ],
    links: {
      powlokaCeramicznaLink: {
        href: "/uslugi/powloka-ceramiczna",
        text: "powłoka ceramiczna",
      },
      obszaryDzialalnosciLink: {
        href: "/obszary-naszej-dzialalnosci",
        text: "obszary naszej działalności",
      },
    },
    images: [blogFotoMain7],
  },
  "autokosmetyka-i-detailing": {
    title: "Autokosmetyka i detailing – profesjonalna pielęgnacja Twojego auta",
    dynamicImage: blogFotoMain41,
    sections: [
      {
        heading: "Kim jestem?",
        content:
          "Nazywam się Kamil i od ponad 10 lat zajmuję się kompleksową pielęgnacją samochodów - zarówno wnętrza, jak i karoserii. Prowadzę <strong>KabeTintLeather</strong> w Opolu, gdzie z pasją dbam o detale każdego auta, niezależnie od marki czy wieku. W mojej pracy łączę praktyczne doświadczenie z zaawansowaną wiedzą z zakresu <b>auto detailingu</b>.",
      },
      {
        heading: "Czym jest autokosmetyka i detailing?",
        content:
          "Autokosmetyka i <b>detailing</b> to znacznie więcej niż mycie auta. To proces dokładnego czyszczenia, odnawiania i zabezpieczania pojazdu z wykorzystaniem profesjonalnych technik i produktów.<br><br>" +
          "W KabeTintLeather oferuję m.in.:<br>" +
          "- <b>Detailing zewnętrzny</b> (dekontaminacja, polerowanie, powłoki ochronne)<br>" +
          "- <b>Detailing wnętrza</b> (czyszczenie tapicerki, ozonowanie, impregnacja)<br>" +
          "- <b>Usługi ochronne</b>: <a href='/uslugi/powloka-ceramiczna'>powłoki ceramiczne</a>, <a href='/uslugi/folia-ppf-ochrona-lakieru'>folie PPF</a> i woski klasy premium<br><br>" +
          "Korzystam wyłącznie ze sprawdzonych marek, takich jak <strong>Gyeon, Menzerna, Koch Chemie, Soft99</strong> oraz <strong>Rupes</strong>.<br><br>" +
          "Więcej szczegółów znajdziesz w sekcji <a href='/uslugi/autokosmetyka'>autokosmetyka</a>.",
      },
      {
        heading: "Dlaczego warto zainwestować w detailing?",
        content:
          "Z mojego doświadczenia wynika, że profesjonalnie wykonany <b>detailing</b>:<br><br>" +
          "- Chroni lakier i wnętrze auta przed procesem starzenia<br>" +
          "- Zdecydowanie poprawia wygląd auta – samochód prezentuje się jak nowy<br>" +
          "- Podnosi wartość pojazdu przy odsprzedaży<br>" +
          "- Przynosi realną satysfakcję z codziennego użytkowania auta<br><br>" +
          "To <b>świadoma forma dbania</b> o inwestycję, którą często zaniedbujemy na co dzień.",
      },
      {
        heading: "Jakie usługi wchodzą w zakres detailingu?",
        content:
          "W zależności od potrzeb Twojego auta wykonuję m.in.:<br><br>" +
          "- <b>Mycie detailingowe</b> z dekontaminacją lakieru (glinkowanie, iron remover)<br>" +
          "- <b>Korektę lakieru</b>: One Step lub Full Correction<br>" +
          "- <b>Aplikację powłok</b>: ceramicznych, elastomerowych lub twardych wosków<br>" +
          "- <b>Detailing wnętrza</b>: pranie, impregnacja, odgrzybianie, ozonowanie<br>" +
          "- <b>Renowację</b> elementów takich jak plastiki, listwy, reflektory czy felgi<br><br>" +
          "Szczegóły każdej z usług i ich wyceny znajdziesz na stronie <a href='/cennik'>cennika</a>.",
      },
      {
        heading: "Gdzie działam?",
        content:
          "Działam głównie na terenie <strong>Opola</strong> oraz pobliskich miejscowości, takich jak <strong>Ozimek, Prószków, Lubniany, Komprachcice</strong>, a także w opolskich dzielnicach: <strong>Zaodrze, Malina</strong> i <strong>Wrzoski</strong>.<br><br>" +
          "Zobacz pełną listę lokalizacji w sekcji <a href='/obszary-naszej-dzialalnosci'>obszary naszej działalności</a>.",
      },
      {
        heading: "Opinie klientów",
        content:
          "<blockquote>„Po oddaniu samochodu do mycia pan Kamil zaproponował wyczyszczenie wnętrza i podsufitki. Efekt był niesamowity – cudownie pachnące auto w środku i super błyszczący wosk na zewnątrz. Z czystym sumieniem polecam usługi tej firmy, na pewno jeszcze skorzystam.”<footer>Karolina Idziorek</footer></blockquote>" +
          "<blockquote>„Polecam tę usługę z całego serca! Mój samochód, w którym często przewożę psa, wymagał naprawdę porządnego czyszczenia. Efekt przerósł moje oczekiwania – tapicerka została świetnie odświeżona, a wnętrze auta odzyskało świeżość. Jestem bardzo zadowolona z rezultatu i z pewnością skorzystam z tej usługi ponownie. Naprawdę warto! ;)”<footer>Michalina Rodziewicz</footer></blockquote>",
      },
      {
        heading: "Masz pytania? Skontaktuj się ze mną",
        content:
          "Jeśli chcesz omówić szczegóły usługi lub uzyskać indywidualną wycenę – <a href='/kontakt'>skontaktuj się ze mną</a>. Z przyjemnością doradzę i pomogę dobrać najlepsze rozwiązanie dla Twojego auta.<br><br>" +
          "Nazywam się <strong>Kamil</strong> – jestem właścicielem <strong>KabeTintLeather</strong> i specjalistą od detailingu z ponad 10-letnim doświadczeniem. Każdą usługę wykonuję osobiście – z pełnym zaangażowaniem i dbałością o detale. " +
          "Działam głównie na terenie <strong>Opola</strong> i okolicznych miejscowości.<br><br>" +
          "Zajrzyj do <a href='/kontakt'>sekcji kontakt</a>, zadzwoń lub napisz – odpowiadam osobiście.<br><br>" +
          "<strong>KabeTintLeather – Kamil Brzoskwinia</strong><br>" +
          "📍 ul. Generała Emila Fieldorfa 12, Opole<br>" +
          "📞 881 325 631<br>" +
          "✉️ kabetint@gmail.com",
      },
    ],
    links: {
      powlokaCeramicznaLink: {
        href: "/uslugi/powloka-ceramiczna",
        text: "powłoka ceramiczna",
      },
      detailingLink: {
        href: "/uslugi/autokosmetyka",
        text: "autokosmetyka",
      },
      foliaPPFLink: {
        href: "/uslugi/folia-ppf-ochrona-lakieru",
        text: "folie PPF",
      },
      cennikLink: {
        href: "/cennik",
        text: "cennika",
      },
      obszaryDzialalnosciLink: {
        href: "/obszary-naszej-dzialalnosci",
        text: "obszary naszej działalności",
      },
    },
    images: [blogFotoMain41, blogFotoMain42, blogFoto9, blogFoto10, blogFoto11],
  },
  "polerowanie-reflektorow": {
    title: "Polerowanie reflektorów – bezpieczeństwo i estetyka Twojego auta",
    dynamicImage: headlightPolishing,
    sections: [
      {
        heading: "Kim jestem i dlaczego warto mi zaufać?",
        content:
          "Nazywam się Kamil i mam ponad 10 lat doświadczenia w auto detailingu. W prowadzonym przeze mnie studiu <strong>KabeTintLeather</strong> w Opolu zajmuję się renowacją lakieru, <a href='/uslugi/polerowanie-reflektorow'>polerowaniem reflektorów</a> oraz kompleksową pielęgnacją pojazdów. Pracuję wyłącznie na sprawdzonych pastach, maszynach i powłokach ochronnych, które testuję osobiście na dziesiątkach aut każdego miesiąca. Zadbane reflektory nie tylko zwiększają widoczność na drodze, ale także realnie zwiększają poprzez to bezpieczeństwo – dlatego zawsze stawiam na jakość i precyzję wykonania.",
      },
      {
        heading: "Na czym polega polerowanie reflektorów?",
        content:
          "Polerowanie reflektorów to proces przywracania przejrzystości zmatowiałym, pożółkłym lub porysowanym kloszom lamp. Z biegiem czasu tworzywo traci swoją klarowność, co obniża skuteczność oświetlenia i negatywnie wpływa na estetykę pojazdu.<br><br>" +
          "Podczas pracy wykorzystuję techniki matowania i mechanicznego polerowania, a na życzenie – również aplikację powłoki ochronnej UV. Dzięki temu reflektory odzyskują swoją przejrzystość, a jazda nocą staje się bezpieczniejsza i bardziej komfortowa.<br><br>" +
          "Więcej informacji znajdziesz w ofercie <a href='/uslugi/polerowanie-reflektorow'>polerowania reflektorów</a>.",
      },
      {
        heading: "Dlaczego warto wypolerować reflektory?",
        content:
          "Zadbane reflektory to nie tylko kwestia estetyki, ale przede wszystkim <strong>bezpieczeństwa</strong>:<br><br>" +
          "- poprawiona skuteczność oświetlenia po zmroku,<br>" +
          "- większy zasięg i lepszy kontrast świateł,<br>" +
          "- odświeżony, bardziej atrakcyjny wygląd pojazdu,<br>" +
          "- realna oszczędność – bez potrzeby wymiany lamp,<br>" +
          "- wyższa szansa na <strong>pozytywny wynik przeglądu technicznego</strong>.<br><br>" +
          "Nie czekaj, aż pożółkłe reflektory zaczną zagrażać Twojemu bezpieczeństwu – zadbaj o nie zawczasu.",
      },
      {
        heading: "Jak wygląda cały proces polerowania?",
        content:
          "Cały zabieg trwa około 1–2 godzin i składa się z kilku precyzyjnych etapów:<br><br>" +
          "- <strong>Dokładne oczyszczenie</strong> reflektorów z brudu, tłuszczu i osadów,<br>" +
          "- <strong>Matowanie</strong> papierami ściernymi o stopniowo malejącej gradacji,<br>" +
          "- <strong>Polerowanie mechaniczne</strong> z użyciem profesjonalnych past polerskich,<br>" +
          "- <strong>Odtłuszczenie i końcowa inspekcja</strong> uzyskanego efektu,<br>" +
          "- <strong>Powłoka ochronna</strong> (opcjonalnie) – zabezpieczenie przed promieniowaniem UV i ponownym matowieniem.<br><br>" +
          "Sprawdź również nasz <a href='/cennik'>cennik</a>, aby poznać szczegóły oferty KabeTintLeather.",
      },
      {
        heading: "Gdzie wykonuję usługę polerowania reflektorów?",
        content:
          "Usługę polerowania reflektorów wykonuję na terenie Opola oraz w okolicznych miejscowościach, takich jak:<br>" +
          "- <strong>Ozimek</strong><br>" +
          "- <strong>Prószków</strong><br>" +
          "- <strong>Komprachcice</strong><br>" +
          "- <strong>Lubniany</strong><br>" +
          "a także w wybranych dzielnicach Opola: <strong>Zaodrze, Malina, Wrzoski, Półwieś</strong>.<br><br>" +
          "Pełną listę lokalizacji znajdziesz w sekcji <a href='/obszary-naszej-dzialalnosci'>obszary naszej działalności</a>.",
      },
      {
        heading: "Opinie moich klientów",
        content:
          "<blockquote>„Super wykonana praca”<br>– <strong>Krzysztof Mierzejewski</strong></blockquote><br>" +
          "<blockquote>„Fachowa obsługa, idealnie wyczyszczony samochód. Bardzo dobre podejście do klienta :)”<br>– <strong>Monika Łebek</strong></blockquote>",
      },
      {
        heading: "Masz pytania? Skontaktuj się ze mną",
        content:
          "Jeśli chcesz przywrócić reflektorom przejrzystość i zadbać o bezpieczeństwo – <a href='/kontakt'>skontaktuj się ze mną</a>. Chętnie doradzę, wycenię usługę i dobiorę najlepsze rozwiązanie dla Ciebie.<br><br>" +
          "<strong>KabeTintLeather – Kamil Brzoskwinia</strong><br>" +
          "📍 ul. Generała Emila Fieldorfa 12, Opole<br>" +
          "📞 881 325 631<br>" +
          "✉️ kabetint@gmail.com",
      },
    ],
    links: {
      polerowanieLink: {
        href: "/uslugi/polerowanie-reflektorow",
        text: "polerowanie reflektorów",
      },
      cennikLink: {
        href: "/cennik",
        text: "cennik",
      },
      obszaryDzialalnosciLink: {
        href: "/obszary-naszej-dzialalnosci",
        text: "obszary naszej działalności",
      },
    },
    images: [headlightPolishing],
  },
};

const referencyImages = [
  {
    src: referencyPhoto1,
    alt: "zdjęcie referencji właściciela Kabe",
  },
  {
    src: referencyPhoto2,
    alt: "zdjęcie referencji właściciela Kabe",
  },
];

const services = [
  { name: "Mycie ręczne pojazdu", price: "100 zł", icon: <FaCar /> },
  {
    name: "Mycie ręczne pojazdu z powłoką syntetyczną",
    price: "200 zł",
    icon: <FaSprayCan />,
  },
  {
    name: "Pranie tapicerki materiałowej (wnętrze auta)",
    price: "250 zł",
    icon: <GiAutoRepair />,
  },
  {
    name: "Czyszczenie tapicerki skórzanej (5 foteli w samochodzie osobowym)",
    price: "350 zł",
    icon: <FaCogs />,
  },
  {
    name: "Impregnacja tapicerki skórzanej",
    price: "150 zł",
    icon: <FaShieldAlt />,
  },
  {
    name: "Renowacja tapicerki skórzanej",
    price: "od 200 zł",
    icon: <FaCogs />,
  },
  {
    name: "Renowacja kierownicy skórzanej",
    price: "250 zł",
    icon: <GiCarWheel />,
  },
  {
    name: "Kompleksowe czyszczenie wnętrza bez prania tapicerki / czyszczenia skóry",
    price: "200 zł",
    icon: <FaCar />,
  },
  {
    name: "Kompleksowe czyszczenie wnętrza z praniem tapicerki / czyszczeniem skóry",
    price: "500 zł",
    icon: <FaCar />,
  },
  {
    name: "Mycie ręczne z powłoką, kompleksowe czyszczenie wnętrza bez prania tapicerki / czyszczenia skóry",
    price: "350 zł",
    icon: <FaSprayCan />,
  },
  {
    name: "Mycie ręczne, kompleksowe czyszczenie wnętrza wraz z praniem tapicerki / czyszczeniem skór oraz powłoką syntetyczną",
    price: "600 zł",
    icon: <FaCar />,
  },
  {
    name: "Przyciemnianie szyb samochodowych",
    price: "od 450 zł",
    icon: <FaTint />,
  },
  {
    name: "Naprawa podsufitki samochodowej",
    price: "od 600 zł",
    icon: <GiAutoRepair />,
  },
  { name: "Korekta lakieru", price: "od 800 zł", icon: <FaPaintRoller /> },
  {
    name: "Ochronna folia PPF",
    price: "Cena ustalana indywidualnie",
    icon: <FaShieldAlt />,
  },
  {
    name: "Powłoka ceramiczna",
    price: "od 1400 zł",
    icon: <FaSprayCan />,
  },
];

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const obszaryAutodetailing = [
  {
    id: "autodetailing-autokosmetyka-opole",
    title: "Autodetailing i Autokosmetyka Opole",
    city: "Opole",
    mapSrc: `https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}&origin=Opole&destination=KabeTintLeather+-+Pranie+tapicerki+samochodowej+Opole&mode=driving`,
    description:
      "Szukasz profesjonalnych usług w zakresie detailingu i autokosmetyki w Opolu? Sprawdź nasze kompleksowe rozwiązania i przeczytaj więcej na blogu o tym, czym jest <a href='/blog/autokosmetyka-i-detailing'>autokosmetyka i detailing</a>, jak działa <a href='/blog/powloka-ceramiczna'>powłoka ceramiczna</a> oraz dlaczego warto wybrać <a href='/blog/folia-ppf-ochrona-lakieru'>folię PPF</a> dla ochrony lakieru.",
  },
  // WSIE
  {
    id: "autodetailing-autokosmetyka-ozimek",
    title: "Autodetailing i Autokosmetyka Ozimek",
    city: "Ozimek",
    mapSrc: `https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}&origin=Ozimek&destination=KabeTintLeather+-+Pranie+tapicerki+samochodowej+Opole&mode=driving`,
  },
  {
    id: "autodetailing-autokosmetyka-proszkow",
    title: "Autodetailing i Autokosmetyka Prószków",
    city: "Prószków",
    mapSrc: `https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}&origin=Prószków&destination=KabeTintLeather+-+Pranie+tapicerki+samochodowej+Opole&mode=driving`,
  },
  {
    id: "autodetailing-autokosmetyka-lubniany",
    title: "Autodetailing i Autokosmetyka Łubniany",
    city: "Łubniany",
    mapSrc: `https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}&origin=Łubniany&destination=KabeTintLeather+-+Pranie+tapicerki+samochodowej+Opole&mode=driving`,
  },
  {
    id: "autodetailing-autokosmetyka-komprachcice",
    title: "Autodetailing i Autokosmetyka Komprachcice",
    city: "Komprachcice",
    mapSrc: `https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}&origin=Komprachcice&destination=KabeTintLeather+-+Pranie+tapicerki+samochodowej+Opole&mode=driving`,
  },

  // DZIELNICE
  {
    id: "autodetailing-autokosmetyka-dzielnica-malina-opole",
    title: "Autodetailing i Autokosmetyka dzielnica Malina, Opole",
    city: "Malina, Opole",
    mapSrc: `https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}&origin=Malina,Opole&destination=KabeTintLeather+-+Pranie+tapicerki+samochodowej+Opole&mode=driving`,
    description:
      "Szukasz profesjonalnych usług w zakresie detailingu i autokosmetyki w Opolu? Sprawdź nasze kompleksowe rozwiązania i przeczytaj więcej na blogu o tym, czym jest <a href='/blog/autokosmetyka-i-detailing'>autokosmetyka i detailing</a>, jak działa <a href='/blog/powloka-ceramiczna'>powłoka ceramiczna</a> oraz dlaczego warto wybrać <a href='/blog/folia-ppf-ochrona-lakieru'>folię PPF</a> dla ochrony lakieru.",
  },
  {
    id: "autodetailing-autokosmetyka-dzielnica-zaodrze-opole",
    title: "Autodetailing i Autokosmetyka dzielnica Zaodrze, Opole",
    city: "Zaodrze, Opole",
    mapSrc: `https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}&origin=Zaodrze,Opole&destination=KabeTintLeather+-+Pranie+tapicerki+samochodowej+Opole&mode=driving`,
    description:
      "Szukasz profesjonalnych usług w zakresie detailingu i autokosmetyki w Opolu? Sprawdź nasze kompleksowe rozwiązania i przeczytaj więcej na blogu o tym, czym jest <a href='/blog/autokosmetyka-i-detailing'>autokosmetyka i detailing</a>, jak działa <a href='/blog/powloka-ceramiczna'>powłoka ceramiczna</a> oraz dlaczego warto wybrać <a href='/blog/folia-ppf-ochrona-lakieru'>folię PPF</a> dla ochrony lakieru.",
  },
  {
    id: "autodetailing-autokosmetyka-dzielnica-wrzoski-opole",
    title: "Autodetailing i Autokosmetyka dzielnica Wrzoski, Opole",
    city: "Wrzoski, Opole",
    mapSrc: `https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}&origin=Wrzoski,Opole&destination=KabeTintLeather+-+Pranie+tapicerki+samochodowej+Opole&mode=driving`,
    description:
      "Szukasz profesjonalnych usług w zakresie detailingu i autokosmetyki w Opolu? Sprawdź nasze kompleksowe rozwiązania i przeczytaj więcej na blogu o tym, czym jest <a href='/blog/autokosmetyka-i-detailing'>autokosmetyka i detailing</a>, jak działa <a href='/blog/powloka-ceramiczna'>powłoka ceramiczna</a> oraz dlaczego warto wybrać <a href='/blog/folia-ppf-ochrona-lakieru'>folię PPF</a> dla ochrony lakieru.",
  },
  {
    id: "autodetailing-autokosmetyka-dzielnica-polwies-opole",
    title: "Autodetailing i Autokosmetyka dzielnica Półwieś, Opole",
    city: "Półwieś, Opole",
    mapSrc: `https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}&origin=Półwieś,Opole&destination=KabeTintLeather+-+Pranie+tapicerki+samochodowej+Opole&mode=driving`,
    description:
      "Szukasz profesjonalnych usług w zakresie detailingu i autokosmetyki w Opolu? Sprawdź nasze kompleksowe rozwiązania i przeczytaj więcej na blogu o tym, czym jest <a href='/blog/autokosmetyka-i-detailing'>autokosmetyka i detailing</a>, jak działa <a href='/blog/powloka-ceramiczna'>powłoka ceramiczna</a> oraz dlaczego warto wybrać <a href='/blog/folia-ppf-ochrona-lakieru'>folię PPF</a> dla ochrony lakieru.",
  },
];
export {
  blogPosts,
  pagesContent,
  referencyImages,
  services,
  obszaryAutodetailing,
};
