import classes from "./Services.module.scss";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../assets/image/hero2_640.jpg";
import furnitureImage from "../../assets/image/detailing.jpg";
import tintImage from "../../assets/image/tint_640.jpg";
import heroImageLarge from "../../assets/image/hero2_1920.jpg";
import furnitureImageLarge from "../../assets/image/detailing.jpg";
import tintImageLarge from "../../assets/image/tint_1920.jpg";
import cleanImg from "../../assets/image/clean4.png";

export const servicesData = [
  {
    id: "pranie-tapicerki",
    description: "Pranie Tapicerki",
    image: cleanImg,
    largeImage: cleanImg,
    largeImageWidth: 1920,
    title: "Sprawdź",
    backgroundImage: " url('../../assets/image/clean4.png')",
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    additionalInfo:
      "Nasza usługa prania tapicerki to doskonały sposób na przywrócenie świeżości i czystości Twoim kanapom, fotelom czy siedzeniom samochodowym. Dzięki naszym nowoczesnym technikom oraz skutecznym środkom czyszczącym, skutecznie usuniemy zanieczyszczenia, plamy i nieprzyjemne zapachy.",
  },
  {
    id: "tapicerka-samochodowa",
    description: "Renowacja Tapicerki Skórzanej",
    image: heroImage,
    largeImage: heroImageLarge,
    largeImageWidth: 1920,
    title: "Sprawdź",
    backgroundImage: "url('../../assets/image/hero4_640.jpg')",
    gradient: "linear-gradient(rgba(90, 42, 42, 0.5), rgba(0, 0, 0, 0.5))",
    additionalInfo:
      "Nasza usługa renowacji tapicerki skórzanej to idealne rozwiązanie dla tych, którzy pragną odświeżyć wygląd i przedłużyć żywotność swoich mebli lub wnętrza samochodowego. Dzięki naszym zaawansowanym technikom oraz wysokiej jakości materiałom, Twoja tapicerka odzyska pierwotny wygląd i funkcjonalność.",
  },
  {
    id: "autokosmetyka",
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
    id: "przyciemnianie-szyb",
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
];

const Services = () => {
  return (
    <section id="usługi" className={classes.services}>
      <h2>Usługi</h2>
      <div className={classes.services__wrapper}>
        {servicesData.map((service) => (
          <div key={service.id} className={classes.services__item}>
            <div
              className={classes.services__imageWrapper}
              style={{ backgroundImage: service.gradient }}
            >
              <Image
                src={service.image}
                srcSet={`${service.largeImage} ${service.largeImageWidth}w`}
                sizes="(min-width: 992px) 100vw, (min-width: 1600px) 1600px, 1920px"
                alt="obrazy tapicerki skórzanej i domowej i przyciemniania szyb, oraz prania tapicerki samochodowej"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
