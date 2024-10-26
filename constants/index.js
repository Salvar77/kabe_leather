import {
  blogBeforeAfter1,
  blogBeforeAfter2,
  blogBeforeAfter3,
  blogBeforeAfter4,
  blogBeforeAfter5,
} from "../utils/index";

const blogPosts = [
  {
    id: 1,
    title: "Jak zapobiec powstaniu plamy?",
    subtitle: "PRANIE WYKŁADZIN BIUROWYCH",
    date: "2024-10-02",
    description:
      "Plama – co za pech! Jak nie dopuścić do powstania plamy – czyli co możemy zrobić zanim wezwamy specjalistę od plam? Działaj szybko! Usuń nadmiar substancji! Użyj zimnej wody. WAŻNE OSTRZEŻENIE: Nie używaj gorącej wody ani suszarki...",
    link: "/blog/jak-zapobiec-powstaniu-plamy",
  },
  {
    id: 2,
    title: "Jak usunąć plamy z tapicerki?",
    subtitle: "USUWANIE PLAM Z TAPICERKI",
    date: "2024-09-15",
    description:
      "Usuwanie plam z tapicerki może być trudne, ale istnieją sposoby, które mogą pomóc w skutecznym czyszczeniu...",
    link: "/jak-usunac-plamy-z-tapicerki",
  },
  {
    id: 3,
    title: "Jak dbać o skórzaną tapicerkę?",
    subtitle: "PIELĘGNACJA SKÓRZANEJ TAPICERKI",
    date: "2024-08-30",
    description:
      "Skórzana tapicerka wymaga specjalnej pielęgnacji. Oto kilka wskazówek, jak dbać o nią na co dzień...",
    link: "/jak-dbac-o-skorzana-tapicerke",
  },
  {
    id: 4,
    title: "Najlepsze środki do czyszczenia auta",
    subtitle: "ŚRODKI CZYSZCZĄCE DO AUTA",
    date: "2024-07-12",
    description:
      "Wybór odpowiednich środków do czyszczenia auta może mieć ogromny wpływ na jego wygląd i trwałość...",
    link: "/najlepsze-srodki-do-czyszczenia-auta",
  },
  {
    id: 5,
    title: "Jak wyczyścić plamy po jedzeniu?",
    subtitle: "PLAMY PO JEDZENIU",
    date: "2024-06-25",
    description:
      "Plamy po jedzeniu to częsty problem. Dowiedz się, jak skutecznie je usuwać, aby nie uszkodzić powierzchni...",
    link: "/jak-wyczyscic-plamy-po-jedzeniu",
  },
];

const pagesContent = {
  "jak-zapobiec-powstaniu-plamy": {
    title: "Jak zapobiec powstaniu plamy?",
    sections: [
      {
        heading: "Jak uniknąć powstania plamy?",
        content:
          "Plama – co za pech! Jak nie dopuścić do powstania plamy – czyli co możemy zrobić zanim wezwamy specjalistę od plam? Działaj szybko! Usuń nadmiar substancji! Użyj zimnej wody. WAŻNE OSTRZEŻENIE: Nie używaj gorącej wody ani suszarki!",
      },
      {
        heading: "Dlaczego szybka reakcja jest ważna?",
        content:
          "Im szybciej zareagujesz na plamę, tym łatwiej będzie ją usunąć. Użycie odpowiednich środków czyszczących może znacznie zmniejszyć ryzyko trwałego uszkodzenia powierzchni.",
      },
      {
        heading: "Jakie środki najlepiej używać?",
        content:
          "Warto mieć pod ręką delikatne środki czyszczące, które są bezpieczne dla różnych materiałów. Skontaktuj się z nami, aby dowiedzieć się, jak możemy pomóc.",
      },
    ],
    images: [blogBeforeAfter4, blogBeforeAfter3],
  },
  "jak-usunac-plamy-z-tapicerki": {
    title: "Jak usunąć plamy z tapicerki?",
    sections: [
      {
        heading: "Plamy z tapicerki – jak sobie z nimi poradzić?",
        content:
          "Usuwanie plam z tapicerki może być trudne, ale istnieją sposoby, które mogą pomóc w skutecznym czyszczeniu. Ważne jest, aby działać szybko, zanim plama się utrwali.",
      },
      {
        heading: "Domowe metody usuwania plam",
        content:
          "Istnieje wiele domowych sposobów, które mogą pomóc w usuwaniu plam z tapicerki. Należy jednak uważać, aby nie uszkodzić materiału.",
      },
      {
        heading: "Profesjonalne usługi czyszczenia tapicerki",
        content:
          "Nasza firma oferuje profesjonalne usługi czyszczenia tapicerki, które gwarantują doskonałe rezultaty i bezpieczne usuwanie nawet najbardziej uporczywych plam.",
      },
    ],
    images: [blogBeforeAfter4, blogBeforeAfter5],
  },
  "jak-dbac-o-skorzana-tapicerke": {
    title: "Jak dbać o skórzaną tapicerkę?",
    sections: [
      {
        heading: "Pielęgnacja skórzanej tapicerki",
        content:
          "Skórzana tapicerka wymaga specjalnej pielęgnacji. Regularne czyszczenie i konserwacja mogą znacznie przedłużyć życie skórzanych mebli i zapewnić im długotrwały, estetyczny wygląd.",
      },
      {
        heading: "Jakie środki są najlepsze do skóry?",
        content:
          "Zaleca się stosowanie środków specjalnie przeznaczonych do pielęgnacji skóry. Unikaj ostrych detergentów, które mogą uszkodzić delikatną strukturę skóry.",
      },
      {
        heading: "Skontaktuj się z nami",
        content:
          "Jeśli potrzebujesz pomocy w pielęgnacji swoich skórzanych mebli, skontaktuj się z nami. Oferujemy profesjonalne usługi pielęgnacji i konserwacji skóry.",
      },
    ],
    images: [blogBeforeAfter1, blogBeforeAfter2],
  },
  "najlepsze-srodki-do-czyszczenia-auta": {
    title: "Najlepsze środki do czyszczenia auta",
    sections: [
      {
        heading: "Wybór odpowiednich środków czyszczących",
        content:
          "Wybór odpowiednich środków do czyszczenia auta może mieć ogromny wpływ na jego wygląd i trwałość. Nie wszystkie środki dostępne na rynku są bezpieczne dla lakieru lub wnętrza pojazdu.",
      },
      {
        heading: "Jak dbać o wnętrze auta?",
        content:
          "Regularne czyszczenie wnętrza auta pomaga utrzymać jego estetykę i zwiększa komfort jazdy. Ważne jest, aby używać środków, które nie uszkodzą tapicerki ani plastikowych elementów.",
      },
      {
        heading: "Czyszczenie zewnętrzne auta",
        content:
          "Czyszczenie zewnętrzne auta, w tym mycie i woskowanie, jest niezbędne, aby zabezpieczyć lakier przed działaniem czynników zewnętrznych.",
      },
    ],
    images: [blogBeforeAfter1, blogBeforeAfter2],
  },
  "jak-wyczyscic-plamy-po-jedzeniu": {
    title: "Jak wyczyścić plamy po jedzeniu?",
    sections: [
      {
        heading: "Plamy po jedzeniu – jak sobie z nimi radzić?",
        content:
          "Plamy po jedzeniu to częsty problem, zwłaszcza na tapicerce i meblach. Ważne jest, aby działać szybko, zanim plama się utrwali.",
      },
      {
        heading: "Domowe sposoby na plamy",
        content:
          "Do usuwania plam po jedzeniu można używać delikatnych środków czyszczących, jednak nie zawsze są one skuteczne. Jeśli plama jest trudna do usunięcia, warto skorzystać z profesjonalnych usług.",
      },
      {
        heading: "Profesjonalne czyszczenie plam",
        content:
          "Nasza firma oferuje kompleksowe usługi usuwania plam, które są skuteczne i bezpieczne dla różnych materiałów.",
      },
    ],
    images: [blogBeforeAfter3, blogBeforeAfter4],
  },
};

export { blogPosts, pagesContent };
