import classes from "./Services.module.scss";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../assets/image/hero2_640.jpg";
import furnitureImage from "../../assets/image/furniture5_640.png";
import tintImage from "../../assets/image/tint_640.jpg";
import heroImageLarge from "../../assets/image/hero2_1920.jpg";
import furnitureImageLarge from "../../assets/image/furniture2_640.png";
import tintImageLarge from "../../assets/image/tint_1920.jpg";

export const servicesData = [
  {
    id: "tapicerka-samochodowa",
    description: "Regeneracja Tapicerki Skórzanej samochodowej",
    image: heroImage,
    largeImage: heroImageLarge,
    largeImageWidth: 1920,
    title: "Sprawdź",
    backgroundImage: "url('../../assets/image/hero4_640.jpg')",
    gradient: "linear-gradient(rgba(90, 42, 42, 0.5), rgba(0, 0, 0, 0.5))",
    additionalInfo:
      "Regeneracja Tapicerki Skórzanej : Profesjonalna renowacja tapicerki skórzanej to bardzo złożony proces, dzięki któremu Twoje meble lub tapicerka samochodowa zyskają zupełnie nowy wygląd. Profesjonalne preparaty i fach w ręku sprawiają, że skórzane elementy wyglądają jak nowe! Renowacja i naprawa tapicerki skórzanej w KaBe Tint&Leather to usługa dedykowana wszystkim posiadaczom skórzanych mebli - zarówno tapicerki samochodowej, jak i kanap i narożników domowych. w KaBe Tint&Leather kompleksowo zadbamy o każdą skórzaną tapicerkę. Zakres naszych usług jest bardzo szeroki, a w jego skład wchodzi: ",
  },
  {
    id: "tapicerka-domowa",
    description: "Regeneracja Tapicerki Skórzanej domowej",
    image: furnitureImage,
    largeImage: furnitureImageLarge,
    largeImageWidth: 1600,
    title: "Sprawdź",
    backgroundImage: "url('../../assets/image/furniture_640.jpg')",
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    additionalInfo:
      " Regeneracja Tapicerki Skórzanej : Profesjonalna renowacja tapicerki skórzanej to bardzo złożony proces, dzięki któremu Twoje meble lub tapicerka samochodowa zyskają zupełnie nowy wygląd. Profesjonalne preparaty i fach w ręku sprawiają, że skórzane elementy wyglądają jak nowe! Renowacja i naprawa tapicerki skórzanej w KaBe Tint&Leather to usługa dedykowana wszystkim posiadaczom skórzanych mebli - zarówno tapicerki samochodowej, jak i kanap i narożników domowych. w KaBe Tint&Leather kompleksowo zadbamy o każdą skórzaną tapicerkę. Zakres naszych usług jest bardzo szeroki, a w jego skład wchodzi:",
  },
  {
    id: "bezinwazyjne-przyciemnianie-szyb",
    description: "Bezinwazyjne Przyciemnianie szyb samochodowych",
    image: tintImage,
    largeImage: tintImageLarge,
    largeImageWidth: 1920,
    title: "Sprawdź",
    backgroundImage: " url('../../assets/image/tint_640.jpg')",
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    additionalInfo:
      "Bezinwazyjne przyciemnianie szyb to nic innego jak usługa bez demontażu elementów tapicerki w twoim samochodzie. Przyciemnianie szyb to usługa która nie tylko poprawi wygląd twojego samochodu, ale również poprawi komfort podróżowania Tobie i pasażerom. Korzyści z przyciemniania szyb samochodowych to: ",
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
                alt="obrazy tapicerki skórzanej i domowej i przyciemniania szyb"
              />
              <div className={classes.services__content}>
                <p>{service.description}</p>
                <Link
                  href={`/Tapicerka/${service.id}`}
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
