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
      "Polerowanie lakieru Opole - Co to jest i dlaczego warto ja wykonać.",
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
    title: "Jak zapobiec powstaniu plam na tapicerce samochodowej?",
    dynamicImage: blogFotoMain2,
    sections: [
      {
        heading: "Kim jestem i dlaczego warto mi zaufać?",
        content:
          "Nazywam się Kamil i od ponad 10 lat prowadzę <strong>KabeTintLeather</strong> w Opolu. Zajmuję się w profesjonalnym <a href='/uslugi/pranie-tapicerki'>praniu i czyszczeniu tapicerki</a> samochodowej – zarówno materiałowej, jak i skórzanej czy alcantary. Przez lata pomogłem setkom klientów uratować wnętrza po zalaniu kawą, plamach po błocie, tłuszczu czy dziecięcych niespodziankach. Pracuję wyłącznie na sprawdzonych i bezpiecznych środkach takich jak <strong>Tenzi, ProElite, Gyeon, Soft99</strong>, co pozwala mi działać skutecznie i bezpiecznie – z gwarancją efektu WOW.",
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
          "Zajrzyj do <a href='/kontakt'>sekcji kontakt</a>, zadzwoń lub napisz – odpowiadam osobiście.",
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
        heading: "Plamy na tapicerce – jak sobie z nimi poradzić?",
        content:
          "Pranie i czyszczenie tapicerki samochodowej to kluczowe elementy dbania o czystość i higienę wnętrza pojazdu. Z biegiem czasu tapicerka ulega zabrudzeniom, plamy po rozlanych napojach, ślady po jedzeniu, kurz, czy tłuste ślady to codzienne wyzwania, które obniżają komfort użytkowania auta oraz jego estetykę. Usuwanie tych trudnych zabrudzeń może być wymagające, ale dzięki odpowiednio dobranym {srodkiCzyszczaceLink} i sprawdzonym technikom czyszczenia można przywrócić tapicerce jej pierwotną świeżość i wygląd. W naszej ofercie znajdziesz skuteczne rozwiązania do prania i czyszczenia tapicerki, które poradzą sobie nawet z najtrudniejszymi plamami, jednocześnie chroniąc materiał i zapobiegając jego przedwczesnemu zużyciu. Nasze preparaty nie tylko dogłębnie oczyszczają tapicerkę, ale także zabezpieczają ją przed dalszymi zabrudzeniami, co pozwala na dłużej utrzymać wnętrze auta w idealnym stanie. Dzięki profesjonalnym środkom do pielęgnacji tapicerki Twój samochód odzyskuje świeżość i staje się przyjemnym miejscem na każdą podróż, niezależnie od jej długości.",
      },
      {
        heading: "Domowe metody czyszczenia",
        content:
          "Niektóre plamy można usunąć za pomocą domowych metod, takich jak łagodne detergenty, soda oczyszczona czy ocet, które często są delikatniejsze dla materiału i mogą pomóc w usunięciu drobnych zabrudzeń. Jednak takie metody mają swoje ograniczenia i mogą nie być skuteczne przy bardziej uporczywych plamach, głębokim zabrudzeniu czy zanieczyszczeniach organicznych, które wnikają w strukturę tapicerki. Profesjonalne {czyszczenieTapicerkiLink} oferuje znacznie głębsze czyszczenie dzięki specjalistycznym środkom i technologiom, które skutecznie usuwają trudne plamy, bakterie i nieprzyjemne zapachy, jednocześnie chroniąc materiał. Moje usługi są idealnym rozwiązaniem dla osób, które cenią sobie czas i wygodę – nie musisz martwić się o wybór odpowiednich środków ani poświęcać czasu na pracochłonne czyszczenie. Oddając tapicerkę w ręce profesjonalisty, masz pewność, że jej czystość i świeżość zostaną przywrócone na najwyższym poziomie, co sprawia, że wnętrze Twojego auta będzie wyglądać i pachnieć jak nowe.",
      },
      {
        heading: "Profesjonalne usługi czyszczenia tapicerki",
        content:
          "Profesjonalne czyszczenie tapicerki to sposób na uzyskanie maksymalnych efektów bez ryzyka uszkodzenia materiału, co jest szczególnie ważne dla zachowania elegancji i trwałości wnętrza pojazdu. Nasze usługi {pranieTapicerkiLink} zostały zaprojektowane z myślą o kompleksowym podejściu do czyszczenia – od usuwania codziennych zabrudzeń i plam, po eliminację głęboko osadzonych zanieczyszczeń i nieprzyjemnych zapachów, które gromadzą się w tkaninach. Korzystamy z profesjonalnych środków czyszczących oraz technologii, które skutecznie radzą sobie nawet z najbardziej uporczywymi plamami, a jednocześnie są delikatne dla materiału. Dzięki temu wnętrze Twojego auta zachowuje doskonały stan przez długi czas, a tapicerka zyskuje świeżość i miękkość, jak po zakupie. Nasze kompleksowe rozwiązania w zakresie prania tapicerki gwarantują nie tylko estetykę, ale także higienę – usuwają alergeny, bakterie i roztocza, co przekłada się na zdrowsze i przyjemniejsze środowisko wewnątrz pojazdu. Decydując się na nasze usługi, masz pewność, że dbamy o bezpieczeństwo materiału oraz długotrwały efekt czystości, który podnosi komfort każdej podróży.",
      },
    ],

    links: {
      srodkiCzyszczaceLink: {
        href: "/uslugi/autokosmetyka",
        text: "środki czyszczące",
      },
      czyszczenieTapicerkiLink: {
        href: "/uslugi/pranie-tapicerki",
        text: "czyszczenie tapicerki",
      },
      pranieTapicerkiLink: {
        href: "/uslugi/pranie-tapicerki",
        text: "prania tapicerki samochodowej",
      },
    },

    images: [blogFotoMain31, blogFoto6, blogFoto7, blogFoto8],
  },
  "jak-dbac-o-skorzana-tapicerke-samochodowa": {
    title: "Jak dbać o tapicerkę skórzaną w samochodzie?",
    dynamicImage: blogFotoMain,
    sections: [
      {
        heading: "Pielęgnacja skórzanej tapicerki samochodowej",
        content:
          "Skórzana tapicerka samochodowa to nie tylko element luksusu, ale także inwestycja, która dodaje wnętrzu elegancji i prestiżu. Jednak, aby cieszyć się jej pięknym wyglądem przez długi czas, konieczne jest regularne i odpowiednie dbanie o skórę, która jest materiałem wyjątkowo wymagającym. Codzienne użytkowanie, zmiany temperatury, promieniowanie UV oraz wilgoć mogą powodować jej wysuszenie, pękanie i blaknięcie. Dlatego, oprócz regularnego czyszczenia, skórzana tapicerka wymaga stosowania specjalnych {pielęgnacjaSkóryLink}, które nawilżają i zabezpieczają skórę, chroniąc ją przed utratą elastyczności i naturalnego koloru. Profesjonalne {czyszczenieTapicerkiSkórzanejLink} pozwala na dogłębne oczyszczenie porów skóry z kurzu i zabrudzeń, a także zabezpieczenie jej powierzchni odpowiednimi środkami, które nadają jej miękkość i trwałość. Dzięki temu skórzana tapicerka zachowuje swój szlachetny wygląd, a jej struktura pozostaje elastyczna, co wpływa na komfort i estetykę wnętrza pojazdu. Regularna pielęgnacja skóry to klucz do zachowania jej w doskonałej kondycji przez wiele lat, minimalizując ryzyko jej uszkodzenia i zwiększając przyjemność z korzystania z luksusowego wnętrza samochodu.",
      },
      {
        heading: "Jakie środki są najlepsze do skóry?",
        content:
          "Środki do czyszczenia tapicerki skórzanej powinny być wyjątkowo delikatne, a jednocześnie skuteczne, aby nie naruszać naturalnej struktury i wyglądu skóry. Nasze specjalistyczne {środkiDoSkóryLink} zostały starannie wybrane, aby dokładnie usuwać wszelkie zabrudzenia, nie powodując uszkodzeń ani wysuszania materiału. Skóra wymaga nie tylko regularnego czyszczenia, ale także odpowiedniego nawilżenia, które chroni ją przed pękaniem i szorstkością. Właściwie dobrane środki czyszczące i pielęgnacyjne pomagają utrzymać tapicerkę w idealnym stanie, przywracając jej miękkość i elastyczność, a jednocześnie chronią przed wpływem czynników zewnętrznych, takich jak promieniowanie UV i zmiany temperatury. Regularna pielęgnacja odpowiednimi preparatami pozwala zachować skórzaną tapicerkę w doskonałym stanie, dzięki czemu wnętrze auta przez długi czas wygląda elegancko i luksusowo. Wybór wysokiej jakości preparatów to klucz do długotrwałej ochrony i naturalnego piękna skórzanej tapicerki.",
      },
      {
        heading: "Skontaktuj się z nami",
        content:
          "Jeśli zależy Ci na profesjonalnym czyszczeniu i konserwacji tapicerki skórzanej, {skontaktujSięZNamiLink}. Nasze usługi {czyszczenieTapicerkiSkórzanejLink} to kompleksowy proces, który zapewnia długotrwałą ochronę materiału oraz przywraca jego pierwotny, luksusowy wygląd. Stosujemy wyłącznie sprawdzone preparaty i techniki dostosowane do delikatnych potrzeb skóry, co pozwala zachować jej elastyczność, miękkość i naturalny kolor przez wiele lat. Dzięki naszej profesjonalnej pielęgnacji skóra jest chroniona przed pękaniem, blaknięciem oraz negatywnymi skutkami codziennego użytkowania. Wybierając nasze usługi, masz pewność, że tapicerka skórzana w Twoim samochodzie zostanie poddana odpowiedniej i bezpiecznej pielęgnacji, która nie tylko zwiększy komfort jazdy, ale również doda wnętrzu elegancji. Powierz nam swoją skórzaną tapicerkę, a my zadbamy o to, by cieszyła oko i służyła przez długie lata.",
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
        text: "skontaktuj się z nami",
      },
    },

    images: [blogFoto2, blogFoto1],
  },
  "uzywamy-profesjonalnych-produktow": {
    title: "Używamy profesjonalnych produktów",
    dynamicImage: blogFotoMain4,
    sections: [
      {
        heading: "Wybór odpowiednich preparatów do auta",
        content:
          "Autokosmetyka to kluczowy element dbania o estetykę i długowieczność pojazdu. Wybór odpowiednich preparatów do pielęgnacji auta, takich jak {środkiDoPraniaLink}, mycia samochodu, specjalistyczne szampony oraz {woskiOchronneLink}, pomaga nie tylko zachować wnętrze i karoserię w doskonałym stanie, ale również chroni pojazd przed wpływem czynników zewnętrznych. Dzięki regularnej pielęgnacji przy użyciu wysokiej jakości produktów, Twój samochód zyskuje dodatkową ochronę przed promieniowaniem UV, zanieczyszczeniami oraz uszkodzeniami mechanicznymi, które mogą wpływać na wygląd i wartość auta. Nasze rekomendacje obejmują preparaty sprawdzone w działaniu, które skutecznie czyszczą i zabezpieczają każdy element pojazdu – od wnętrza po lakier. Niezależnie od tego, czy potrzebujesz delikatnych środków do tapicerki, czy zaawansowanej ochrony, nasze produkty pozwolą Ci zadbać o każdy detal i cieszyć się nienagannym wyglądem auta przez długi czas. Dzięki naszej autokosmetyce Twoje auto zawsze prezentuje się jak nowe, a jego pielęgnacja staje się prostsza i bardziej efektywna.",
      },
      {
        heading: "Jak dbać o wnętrze auta?",
        content:
          "Regularne czyszczenie wnętrza auta, w tym profesjonalne {czyszczenieTapicerkiLink}, to kluczowy element dbania o komfort użytkowania oraz estetykę pojazdu. Codzienne użytkowanie samochodu naraża jego wnętrze na osadzanie się kurzu, plam oraz nieprzyjemnych zapachów, które obniżają komfort podróżowania. Odpowiednie {środkiDoCzyszczeniaLink} nie tylko skutecznie usuwają zabrudzenia i odświeżają wnętrze, ale także chronią materiały przed uszkodzeniami, co przedłuża ich trwałość i zachowuje estetykę. Nasza oferta obejmuje specjalistyczne preparaty, które nie tylko czyszczą, ale również pielęgnują powierzchnie, od tapicerki materiałowej po skórzaną, zapewniając kompleksowe rozwiązania dla wymagających klientów. Każdy z naszych produktów został opracowany z myślą o zachowaniu idealnego wyglądu wnętrza, a także o ochronie materiałów przed wpływem czynników zewnętrznych, takich jak promieniowanie UV i wilgoć. Dzięki regularnej pielęgnacji za pomocą naszych preparatów wnętrze Twojego auta pozostanie w doskonałym stanie przez długie lata, a podróżowanie stanie się przyjemnością na najwyższym poziomie.",
      },
      {
        heading: "Czyszczenie karoserii i szyb",
        content:
          "Czystość karoserii i szyb to wizytówka każdego pojazdu, odzwierciedlająca dbałość o szczegóły i estetykę właściciela. Nasze środki przeznaczone do mycia karoserii oraz czyszczenia szyb skutecznie usuwają wszelkie zabrudzenia, takie jak kurz, błoto, plamy po deszczu czy ślady owadów, zapewniając nieskazitelny wygląd. Oferowane przez nas preparaty, takie jak specjalistyczne {szamponySamochodoweLink}, nie tylko przywracają lakierowi blask, ale również tworzą warstwę ochronną, która zabezpiecza przed szkodliwymi czynnikami zewnętrznymi – promieniowaniem UV, solą drogową, zanieczyszczeniami i wilgocią. Regularne stosowanie tych produktów pozwala utrzymać karoserię w idealnym stanie, minimalizując ryzyko powstawania mikrouszkodzeń, korozji i blaknięcia lakieru. Dzięki temu Twoje auto będzie prezentować się doskonale każdego dnia, a jednocześnie będzie bardziej odporne na negatywny wpływ środowiska. Niezależnie od warunków, nasze produkty gwarantują, że Twój pojazd zawsze wygląda świeżo i elegancko, stanowiąc dumną wizytówkę na drodze.",
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
        heading: "Korzyści z przyciemniania szyb",
        content:
          "Przyciemnianie szyb samochodowych to wszechstronne rozwiązanie, które nie tylko nadaje pojazdowi elegancki i nowoczesny wygląd, ale również znacząco podnosi komfort jazdy. Dzięki zastosowaniu {przyciemnianieSzybLink}, wnętrze auta nagrzewa się wolniej, co jest niezwykle przydatne podczas upalnych dni, pozwalając na zwiększenie wydajności klimatyzacji oraz zmniejszenie zużycia paliwa. Obniżona temperatura wewnątrz pojazdu przekłada się na lepsze samopoczucie kierowcy i pasażerów, eliminując dyskomfort związany z gorącym wnętrzem po dłuższym postojeniu na słońcu. Dodatkowo {barieraOchronnaLink}, skutecznie blokując szkodliwe promieniowanie UV, które przyczynia się do blaknięcia i degradacji materiałów wewnętrznych. Dzięki temu wnętrze auta pozostaje w doskonałym stanie przez dłuższy czas, a fotele, tapicerka i deska rozdzielcza są lepiej zabezpieczone przed działaniem słońca. Jest to inwestycja w estetykę, komfort i długowieczność pojazdu, która ma zarówno walory wizualne, jak i funkcjonalne.",
      },
      {
        heading: "Jakie są metody przyciemniania szyb?",
        content:
          "Oferuję dwie główne metody przyciemniania szyb. Pierwsza to {metodaPiecowaLink}, która zapewnia trwałość i jednolity efekt. Jest to metoda, która w procesie pieczenia sprawia, że folia dokładnie przylega do szkła, co zwiększa odporność na zarysowania i uszkodzenia, a efekt utrzymuje się przez długi czas – idealna opcja dla osób, które poszukują trwałych rezultatów i głębokiego przyciemnienia. Druga metoda to {metodaFoliowaLink}, gdzie specjalistyczna folia aplikowana jest bezpośrednio na szyby. Ta forma jest szybsza, elastyczna i pozwala na późniejsze usunięcie folii bez uszkodzenia szkła. Dzięki tej metodzie można osiągnąć świetny efekt wizualny i ochronny, zachowując estetykę wnętrza i dodatkowo zabezpieczając je przed promieniowaniem UV oraz nadmiernym nagrzewaniem. Obie metody są bezpieczne i zgodne z przepisami, a wybór zależy od indywidualnych preferencji oraz oczekiwanej trwałości efektu.",
      },
      {
        heading: "Zalecenia i przepisy",
        content:
          "Przyciemnianie szyb samochodowych musi być zgodne z obowiązującymi przepisami, które określają dopuszczalny stopień przyciemnienia szyb przednich i bocznych. Nasze {uslugiPrzyciemnianiaLink} w pełni spełniają wymagania polskiego prawa, dzięki czemu możesz bezpiecznie korzystać z pojazdu po wykonaniu usługi przyciemniania. Skontaktuj się z nami, aby uzyskać szczegółowe informacje o zaleceniach oraz dostępnych opcjach przyciemniania szyb.",
      },
    ],

    links: {
      przyciemnianieSzybLink: {
        href: "/uslugi/przyciemnianie-szyb",
        text: "przyciemniania szyb",
      },
      barieraOchronnaLink: {
        href: "/uslugi/przyciemnianie-szyb",
        text: "bariera ochronna",
      },
      metodaPiecowaLink: {
        href: "/uslugi/przyciemnianie-szyb",
        text: "bezinwazyjne przyciemnianie szyb metodą piecową",
      },
      metodaFoliowaLink: {
        href: "/uslugi/przyciemnianie-szyb",
        text: "bezinwazyjne przyciemnianie szyb za pomocą folii",
      },
      uslugiPrzyciemnianiaLink: {
        href: "/uslugi/przyciemnianie-szyb",
        text: "usługi przyciemniania szyb",
      },
    },

    images: [blogBeforeAfter9, blogBeforeAfter10],
  },
  "korekta-lakieru": {
    title: "Korekta lakieru – co to jest i dlaczego warto ją wykonać?",
    dynamicImage: blogFoto17,
    sections: [
      {
        heading: "Czym jest korekta lakieru?",
        content:
          "Korekta lakieru to proces, który ma na celu poprawienie wyglądu karoserii samochodu poprzez usunięcie niedoskonałości takich jak zarysowania, swirle, oksydacja, a także różne inne wady lakieru. W trakcie tego procesu, {narzedziaLink} i preparaty pomagają w przywróceniu głębi koloru oraz uzyskaniu gładkiej i lśniącej powierzchni.",
      },
      {
        heading: "Dlaczego warto wykonać korektę lakieru?",
        content:
          "Estetyka – Korekta lakieru znacząco poprawia wygląd pojazdu. {usuwanieRysLink} sprawia, że lakier nabiera głębi i intensywności koloru, a samochód wygląda jak nowy.\n\nOchrona – Proces ten poprawia odporność lakieru na czynniki atmosferyczne, takie jak deszcz czy promieniowanie UV.\n\nWartość rynkowa – Dbanie o lakier zwiększa wartość pojazdu, co sprawia, że inwestycja w korektę lakieru opłaca się w dłuższej perspektywie.",
      },
      {
        heading: "Korekta lakieru One Step – co to jest?",
        content:
          "Korekta lakieru typu „one step” (jednoetapowa) to szybsza i bardziej przystępna cenowo wersja tradycyjnej korekty. {korektaOneStepLink} pozwala uzyskać dobre efekty w krótszym czasie, przy jednoczesnym zachowaniu estetyki pojazdu.",
      },
      {
        heading: "Kiedy warto wybrać korektę One Step?",
        content:
          "Lekkie zarysowania i swirle – Korekta One Step jest idealna do usuwania drobnych śladów użytkowania.\n\nBudżet – Ze względu na mniejszą liczbę etapów, {korektaBudzetLink} stanowi tańszą alternatywę, oferującą satysfakcjonujące efekty.",
      },
    ],

    links: {
      narzedziaLink: {
        href: "/uslugi/korekta-lakieru",
        text: "Specjalistyczne narzędzia",
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
          "Zajrzyj do <a href='/kontakt'>sekcji kontakt</a>, zadzwoń lub napisz – odpowiadam osobiście.",
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
          "Jeśli chcesz omówić szczegóły usługi lub uzyskać indywidualną wycenę – <a href='/kontakt'>skontaktuj się ze mną</a>. Z przyjemnością doradzę i pomogę dobrać najlepsze rozwiązanie dla Twojego auta.<br><br>" +
          "Nazywam się <strong>Kamil</strong> – jestem właścicielem <strong>KabeTintLeather</strong> i specjalistą od detailingu z ponad 10-letnim doświadczeniem. Każdą usługę wykonuję osobiście – z pełnym zaangażowaniem i dbałością o detale. " +
          "Działam głównie na terenie <strong>Opola</strong> i okolicznych miejscowości.<br><br>" +
          "Zajrzyj do <a href='/kontakt'>sekcji kontakt</a>, zadzwoń lub napisz – odpowiadam osobiście.",
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
          "Zajrzyj do <a href='/kontakt'>sekcji kontakt</a>, zadzwoń lub napisz – odpowiadam osobiście.",
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
        heading: "Na czym polega polerowanie reflektorów?",
        content:
          "Polerowanie reflektorów to proces renowacji zmatowiałych, pożółkłych lub porysowanych kloszy lamp. Dzięki odpowiednim technikom ściernym i polerującym, przywracamy im <b>pierwotną przejrzystość</b> i estetykę.<br><br>" +
          "Z czasem reflektory tracą swoją przezroczystość, co wpływa negatywnie na widoczność podczas jazdy nocą. Profesjonalne polerowanie pozwala przywrócić pełną sprawność oświetlenia oraz <b>poprawia wygląd całego pojazdu</b>.<br><br>" +
          "Więcej szczegółów znajdziesz na stronie <a href='/uslugi/polerowanie-reflektorow'>polerowanie reflektorów</a>.",
      },
      {
        heading: "Dlaczego warto wypolerować reflektory?",
        content:
          "Polerowanie reflektorów to nie tylko poprawa estetyki, ale przede wszystkim <b>zwiększenie bezpieczeństwa</b> na drodze.<br><br>" +
          "- Lepsza widoczność w nocy i podczas złych warunków pogodowych<br>" +
          "- Zwiększenie zasięgu światła i poprawa kontrastu<br>" +
          "- Przywrócenie estetycznego wyglądu lamp<br>" +
          "- Uniknięcie konieczności kosztownej wymiany reflektorów<br>" +
          "- Możliwość <b>przejścia przeglądu technicznego</b> bez problemów<br><br>" +
          "Zadbane reflektory to <b>lepszy wygląd auta</b> i większe bezpieczeństwo na drodze.",
      },
      {
        heading: "Jak przebiega proces polerowania reflektorów?",
        content:
          "Cały proces odbywa się w kilku precyzyjnych krokach i trwa zazwyczaj około 1–2 godzin:<br><br>" +
          "- <b>Dokładne oczyszczenie</b> powierzchni reflektorów<br>" +
          "- <b>Matowanie</b> zniszczonej warstwy wierzchniej papierami ściernymi o różnej gradacji<br>" +
          "- <b>Polerowanie mechaniczne</b> pastami ściernymi i wykańczającymi<br>" +
          "- <b>Opcjonalne zabezpieczenie</b> kloszy specjalną powłoką ochronną<br><br>" +
          "Sprawdź również nasz <a href='/cennik'>cennik</a> usług.",
      },
      {
        heading: "Gdzie wykonujemy usługę polerowania reflektorów?",
        content:
          "Usługę <strong>polerowania reflektorów</strong> wykonujemy w wielu lokalizacjach, m.in. <strong>Opole</strong> i okolice. Pełna lista dostępna jest na stronie <a href='/obszary-naszej-dzialalnosci'>obszary naszej działalności</a>.",
      },
    ],
    links: {
      polerowanieLink: {
        href: "/uslugi/polerowanie-reflektorow",
        text: "polerowanie reflektorów",
      },
      cennikLink: {
        href: "/cennik",
        text: "cenniku",
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
  { name: "Mycie ręczne pojazdu", price: "80zł", icon: <FaCar /> },
  {
    name: "Mycie ręczne pojazdu z powłoką syntetyczną",
    price: "150zł",
    icon: <FaSprayCan />,
  },
  {
    name: "Pranie tapicerki materiałowej (wnętrze auta)",
    price: "300zł",
    icon: <GiAutoRepair />,
  },
  {
    name: "Czyszczenie tapicerki skórzanej (5 foteli w samochodzie osobowym)",
    price: "350zł",
    icon: <FaCogs />,
  },
  {
    name: "Impregnacja tapicerki skórzanej",
    price: "150zł",
    icon: <FaShieldAlt />,
  },
  {
    name: "Renowacja tapicerki skórzanej",
    price: "OD 200zł",
    icon: <FaCogs />,
  },
  {
    name: "Renowacja kierownicy skórzanej",
    price: "250zł",
    icon: <GiCarWheel />,
  },
  {
    name: "Kompleksowe czyszczenie wnętrza bez prania tapicerki / czyszczenia skóry",
    price: "200zł",
    icon: <FaCar />,
  },
  {
    name: "Kompleksowe czyszczenie wnętrza z praniem tapicerki / czyszczeniem skóry",
    price: "500zł",
    icon: <FaCar />,
  },
  {
    name: "Mycie ręczne z powłoką, kompleksowe czyszczenie wnętrza bez prania tapicerki / czyszczenia skóry",
    price: "350zł",
    icon: <FaSprayCan />,
  },
  {
    name: "Mycie ręczne, kompleksowe czyszczenie wnętrza wraz z praniem tapicerki / czyszczeniem skór oraz powłoką syntetyczną",
    price: "600zł",
    icon: <FaCar />,
  },
  {
    name: "Przyciemnianie szyb samochodowych",
    price: "OD 450zł",
    icon: <FaTint />,
  },
  {
    name: "Naprawa podsufitki samochodowej",
    price: "OD 600zł",
    icon: <GiAutoRepair />,
  },
  { name: "Korekta lakieru", price: "OD 800zł", icon: <FaPaintRoller /> },
  {
    name: "Ochronna folia PPF",
    price: "Cena ustalana indywidualnie",
    icon: <FaShieldAlt />,
  },
  {
    name: "Powłoka ceramiczna",
    price: "OD 1400zł",
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
