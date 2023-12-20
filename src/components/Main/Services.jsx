import classes from "./Services.module.scss";
import Link from "next/link";
import Image from "next/image";
import picture from "../../assets/image/hero_640.jpg";

const Services = () => {
  return (
    <section id="services" className={classes.services}>
      <h2>Usługi</h2>
      <div className={classes.services__one}>
        <h3>Renowacja Tapicerki Skórzanej samochodowej</h3>
        <p></p>
        <Link href="#services" className={classes.services__button}>
          Sprawdź
        </Link>
      </div>
      <div className={classes.services__two}>
        <h3>Regeneracja Tapicerki Skórzanej domowej</h3>
        <p></p>
        <Link href="#services" className={classes.services__button}>
          Sprawdź
        </Link>
      </div>
      <div className={classes.services__three}>
        <h3>Bezinwazyjne Przyciemnianie szyb samochodowych</h3>
        <p></p>
        <Link href="#services" className={classes.services__button}>
          Sprawdź
        </Link>
      </div>
    </section>
  );
};

export default Services;
