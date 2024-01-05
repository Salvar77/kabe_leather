import classes from "./Services.module.scss";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../assets/image/hero_640.jpg";
import furnitureImage from "../../assets/image/furniture_640.jpg";
import tintImage from "../../assets/image/tint_640.jpg";

export const servicesData = [
  {
    id: "automotive1",
    description: "Regeneracja Tapicerki Skórzanej samochodowej",
    image: heroImage,
    title: "Sprawdź",
    backgroundImage: "url('../../assets/image/hero_640.jpg')",
    gradient: "linear-gradient(rgba(70, 42, 42, 0.5), rgba(0, 0, 0, 0.5))",
    additionalInfo:
      "Regeneracja Tapicerki Skórzanej : Profesjonalna renowacja tapicerki skórzanej to bardzo złożony proces, dzięki któremu Twoje meble lub tapicerka samochodowa zyskają zupełnie nowy wygląd. Profesjonalne preparaty i fach w ręku sprawiają, że skórzane elementy wyglądają jak nowe! Renowacja i naprawa tapicerki skórzanej w KaBe Tint&Leather to usługa dedykowana wszystkim posiadaczom skórzanych mebli - zarówno tapicerki samochodowej, jak i kanap i narożników domowych. w KaBe Tint&Leather kompleksowo zadbamy o każdą skórzaną tapicerkę. Zakres naszych usług jest bardzo szeroki, a w jego skład wchodzi: ",
  },
  {
    id: "automotive2",
    description: "Regeneracja Tapicerki Skórzanej domowej",
    image: furnitureImage,
    title: "Sprawdź",
    backgroundImage: "url('../../assets/image/furniture_640.jpg')",
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    additionalInfo:
      " Regeneracja Tapicerki Skórzanej : Profesjonalna renowacja tapicerki skórzanej to bardzo złożony proces, dzięki któremu Twoje meble lub tapicerka samochodowa zyskają zupełnie nowy wygląd. Profesjonalne preparaty i fach w ręku sprawiają, że skórzane elementy wyglądają jak nowe! Renowacja i naprawa tapicerki skórzanej w KaBe Tint&Leather to usługa dedykowana wszystkim posiadaczom skórzanych mebli - zarówno tapicerki samochodowej, jak i kanap i narożników domowych. w KaBe Tint&Leather kompleksowo zadbamy o każdą skórzaną tapicerkę. Zakres naszych usług jest bardzo szeroki, a w jego skład wchodzi:",
  },
  {
    id: "automotive3",
    description: "Bezinwazyjne Przyciemnianie szyb samochodowych",
    image: tintImage,
    title: "Sprawdź",
    backgroundImage: " url('../../assets/image/tint_640.jpg')",
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    additionalInfo:
      "Bezinwazyjne przcyiemnianie szyb to nic innego jak usługa bez demontażu elementów tapicerki w twoim samochodzie. Przyciemnianie szyb to usługa która nie tylko poprawi wygląd twojego samochodu, ale również poprawi komfort podróżowania Tobie i pasażerom. Korzyści z przyciemniania szyb samochodowych to: ",
  },
];

const Services = () => {
  return (
    <section id="services" className={classes.services}>
      <h2>Usługi</h2>
      <div className={classes.services__wrapper}>
        {servicesData.map((service) => (
          <div key={service.id} className={classes.services__item}>
            <div
              className={classes.services__imageWrapper}
              style={{ backgroundImage: service.gradient }}
            >
              <Image src={service.image} alt="pictures of upholstery" />
              <div className={classes.services__content}>
                <p>{service.description}</p>
                <Link
                  href={`/Tapicerka/${service.id}`}
                  className={classes.services__button}
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
