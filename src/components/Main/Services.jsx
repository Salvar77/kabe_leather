import classes from "./Services.module.scss";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../assets/image/hero_640.jpg";
import furnitureImage from "../../assets/image/furniture_640.jpg";
import tintImage from "../../assets/image/tint_640.jpg";

const servicesData = [
  {
    id: "service1",
    description: "Regeneracja Tapicerki Skórzanej samochodowej",
    image: heroImage,
    title: "Sprawdź",
    backgroundImage: "url('../../assets/image/hero_640.jpg')",
    gradient: "linear-gradient(rgba(70, 42, 42, 0.5), rgba(0, 0, 0, 0.5))",
  },
  {
    id: "service2",
    description: "Regeneracja Tapicerki Skórzanej domowej",
    image: furnitureImage,
    title: "Sprawdź",
    backgroundImage: "url('../../assets/image/furniture_640.jpg')",
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
  },
  {
    id: "service3",
    description: "Bezinwazyjne Przyciemnianie szyb samochodowych",
    image: tintImage,
    title: "Sprawdź",
    backgroundImage: " url('../../assets/image/tint_640.jpg')",
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
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
                  href={`/automotive/${service.id}`}
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
