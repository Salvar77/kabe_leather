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
import { motion } from "framer-motion";
import { fadeScale } from "../../../utils/motion";

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
      "Nasza usługa prania tapicerki to doskonały sposób na przywrócenie świeżości i czystości Twoim kanapom, fotelom czy siedzeniom samochodowym. Dzięki naszym nowoczesnym technikom oraz skutecznym środkom czyszczącym, skutecznie usuniemy zanieczyszczenia, plamy i nieprzyjemne zapachy.",
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
      "Nasza usługa renowacji skór to idealne rozwiązanie dla tych, którzy pragną odświeżyć wygląd i przedłużyć żywotność swoich mebli lub wnętrza samochodowego. Dzięki naszym zaawansowanym technikom oraz wysokiej jakości materiałom, Twoja tapicerka odzyska pierwotny wygląd i funkcjonalność.",
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
      "Nasza usługa autokosmetyki to pełne zadbanie o wygląd i stan Twojego auta, zarówno wewnątrz, jak i na zewnątrz. Dzięki naszym profesjonalnym usługom, Twój samochód odzyska świeżość, elegancję i doskonały wygląd, jak nowy.",
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
      "Nasza usługa przyciemniania szyb to idealne rozwiązanie, jeśli chcesz poprawić estetykę swojego pojazdu oraz zwiększyć komfort i bezpieczeństwo podróży. Korzystamy z najwyższej jakości folii przyciemniającej, aby zapewnić trwałe i skuteczne efekty.",
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
      "Nasza usługa korekty lakieru to proces przywracający karoserii doskonały wygląd, eliminując zarysowania, matowe miejsca i drobne defekty. Dzięki zaawansowanym technikom polerowania, lakier odzyskuje głębię i intensywność koloru, a dodatkowa powłoka ochronna zabezpiecza go przed czynnikami zewnętrznymi, przedłużając efekt renowacji.",
  },
  {
    id: "uslugi/folia-ppf-ochrona-lakieru",
    description: "Folia PPF",
    image: paintCorrection,
    largeImage: paintCorrectionLarge,
    largeImageWidth: 1920,
    title: "Sprawdź",
    backgroundImage: " url('../../assets/image/tint_640.jpg')",
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    additionalInfo:
      "Folia PPF to doskonałe rozwiązanie, które chroni lakier przed uszkodzeniami mechanicznymi, zarysowaniami oraz wpływem czynników atmosferycznych. Aby uzyskać najlepsze efekty, przed aplikacją folii zalecamy wykonanie polerki lakieru, która przywraca mu blask i gładkość. Następnie lakier jest zabezpieczany folią PPF, co gwarantuje trwałość i ochronę na długie lata.",
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
