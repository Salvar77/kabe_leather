import classes from "./Services.module.scss";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../assets/image/services1.webp";
import heroImageLarge from "../../assets/image/services1.jpg";
import furnitureImage from "../../assets/image/services3.webp";
import furnitureImageLarge from "../../assets/image/services3.jpg";
import tintImage from "../../assets/image/tint_640.jpg";
import tintImageLarge from "../../assets/image/tint_1920.jpg";
import cleanImg from "../../assets/image/heroMainWebp640.webp";
import cleanImgLarge from "../../assets/image/heroMainWebpBig.webp";
import paintCorrection from "../../assets/image/paintCorrection.webp";
import paintCorrectionLarge from "../../assets/image/paintCorrection.jpg";
import ppfFoilImage from "../../assets/image/ppf.webp";
import ceramicCoatingImage from "../../assets/image/ceramicCoating.jpeg";
import { motion } from "framer-motion";
import { fadeScale } from "../../../utils/motion";
import { headlightPolishing } from "../../../utils";

export const servicesData = [
  {
    id: "uslugi/pranie-tapicerki",
    description: "Pranie Tapicerki",
    image: cleanImg,
    largeImage: cleanImgLarge,
    largeImageWidth: 1920,
    title: "Sprawdź",
    backgroundImage: " url('../../assets/image/clean4.png')",
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    additionalInfo:
      "Nasza usługa <strong>prania tapicerki</strong> to doskonały sposób na przywrócenie świeżości i czystości Twoim kanapom, fotelom czy siedzeniom samochodowym. Dzięki naszym nowoczesnym technikom oraz skutecznym środkom czyszczącym, skutecznie usuniemy zanieczyszczenia, plamy i nieprzyjemne zapachy.",
    relatedBlogPost: "/jak-wyczyscic-tapicerke-samochodowa",
  },
  {
    id: "uslugi/renowacja-i-czyszczenie-skor",
    description: "Renowacja i Czyszczenie Skór",
    image: heroImage,
    largeImage: heroImageLarge,
    largeImageWidth: 1920,
    title: "Sprawdź",
    backgroundImage: "url('../../assets/image/hero4_640.jpg')",
    gradient: "linear-gradient(rgba(90, 42, 42, 0.5), rgba(0, 0, 0, 0.5))",
    additionalInfo:
      "Profesjonalna <strong>renowacja i czyszczenie skór</strong> z użyciem systemu Colourlock. Usługa dedykowana właścicielom aut premium i klasycznych pojazdów, którzy oczekują trwałego efektu oraz pełnego odświeżenia wnętrza.",
    relatedBlogPost: "/jak-dbac-o-skorzana-tapicerke-samochodowa",
  },
  {
    id: "uslugi/autokosmetyka",
    description: "Autokosmetyka ",
    image: furnitureImage,
    largeImage: furnitureImageLarge,
    largeImageWidth: 1600,
    title: "Sprawdź",
    backgroundImage: "url('../../assets/image/furniture_640.jpg')",
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    additionalInfo:
      "<strong>Autokosmetyka</strong> w naszym wykonaniu to połączenie wieloletniego doświadczenia, profesjonalnych środków i precyzyjnych technik. <strong>Twoje auto</strong> odzyska wygląd, zapach i estetykę jak po wyjeździe z salonu.",
  },
  {
    id: "uslugi/przyciemnianie-szyb",
    description: "Przyciemnianie Szyb",
    image: tintImage,
    largeImage: tintImageLarge,
    largeImageWidth: 1920,
    title: "Sprawdź",
    backgroundImage: " url('../../assets/image/tint_640.jpg')",
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    additionalInfo:
      "<strong>Profesjonalne przyciemnianie szyb</strong> w KabeTintLeather to połączenie precyzji, certyfikowanych materiałów i wieloletniego doświadczenia. Gwarantujemy estetyczny wygląd, komfort jazdy i zgodność z przepisami.",
  },
  {
    id: "uslugi/korekta-lakieru",
    description: "Korekta Lakieru",
    image: paintCorrection,
    largeImage: paintCorrectionLarge,
    largeImageWidth: 1920,
    title: "Sprawdź",
    backgroundImage: " url('../../assets/image/tint_640.jpg')",
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    additionalInfo:
      "<strong>Korekta lakieru</strong> w KabeTintLeather to precyzyjna renowacja wykonywana przez specjalistę z ponad 10-letnim doświadczeniem. Używamy past <strong>Menzerna</strong>, maszyn <strong>Rupes</strong> i technik dobranych do konkretnego lakieru - efekt to głębia, połysk i trwała ochrona.",
  },
  {
    id: "uslugi/folia-ppf-ochrona-lakieru",
    description: "Folia PPF",
    image: ppfFoilImage,
    largeImage: ppfFoilImage,
    largeImageWidth: 1920,
    title: "Sprawdź",
    backgroundImage: " url('../../assets/image/tint_640.jpg')",
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    additionalInfo:
      "Profesjonalna aplikacja <strong>folii PPF</strong> w KabeTintLeather to gwarancja trwałej ochrony i perfekcyjnego wyglądu. Stosujemy <strong>folie</strong> klasy <strong>premium</strong>, które dopasowujemy do auta z pełną precyzją – by zabezpieczenie było nie tylko skuteczne, ale i estetyczne.",
  },
  {
    id: "uslugi/powloka-ceramiczna",
    description: "Powłoka Ceramiczna Opole",
    image: ceramicCoatingImage,
    largeImage: ceramicCoatingImage,
    largeImageWidth: 1920,
    title: "Sprawdź",
    backgroundImage: " url('../../assets/image/tint_640.jpg')",
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    additionalInfo:
      "<strong>Powłoka ceramiczna</strong> to skuteczna ochrona i estetyka w jednym. W KabeTintLeather aplikujemy sprawdzone systemy ochronne, które nadają lakierowi głębię, połysk i zabezpieczenie na lata – z gwarancją fachowego wykonania.",
  },
  {
    id: "uslugi/polerowanie-reflektorow",
    description: "Polerowanie Reflektorów",
    image: headlightPolishing,
    largeImage: headlightPolishing,
    largeImageWidth: 1920,
    title: "Sprawdź",
    backgroundImage: "url('../../assets/image/headlight_640.jpg')",
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    additionalInfo:
      "Zmatowiałe, pożółkłe reflektory nie tylko psują estetykę auta, ale przede wszystkim pogarszają widoczność na drodze. Jako specjalista od detailingu z Opola, przywracam reflektorom fabryczny blask – bez konieczności wymiany. Korzystam z profesjonalnych past <strong>3M</strong> i <strong>Menzerna</strong> oraz zabezpieczam powierzchnię warstwą UV. Renowacja reflektorów to szybki, skuteczny i niedrogi sposób na poprawę bezpieczeństwa i wyglądu Twojego samochodu.",
  },
];

const Services = () => {
  return (
    <div className={classes.servicesBackground}>
      <section id="usługi" className={classes.services}>
        <h2>Usługi</h2>
        <div className={classes.services__wrapper}>
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className={classes.services__item}
              variants={fadeScale(index * 0.15, 0.9)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
            >
              <div
                className={classes.services__imageWrapper}
                style={{ backgroundImage: service.gradient }}
              >
                <Image
                  src={service.image}
                  srcSet={`${service.largeImage} ${service.largeImageWidth}w`}
                  sizes="(min-width: 992px) 100vw, (min-width: 1600px) 1600px, 1920px"
                  alt={`${service.description} - profesjonalne pranie tapicerki, czyszczenie samochodu, oraz renowacja wnętrz samochodowych`}
                />
                <div className={classes.services__content}>
                  <p>{service.description}</p>
                  <Link
                    href={`/${service.id}`}
                    className={classes.services__button}
                    aria-label={`Sprawdź usługę: ${service.description}`}
                  >
                    Sprawdź
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
