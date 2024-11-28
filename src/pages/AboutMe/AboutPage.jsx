import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { zoomIn } from "../../../utils/motion";
import classes from "./AboutPage.module.scss";
import picture from "../../assets/image/heroMain.jpg";
import SEO from "@/components/Main/SEO";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="O Mnie - Kabe Tint&Leather Auto Detailing w Opolu"
        description="Poznaj Kamila i jego pasję do motoryzacji oraz prania tapicerki i czyszczenia samochodów. Profesjonalna autokosmetyka w Opolu."
        image="https://www.kabetintleather.pl/hero_main.jpg"
      />
      <div className={classes.backgroundAbout}>
        <section id="o-mnie" className={classes.aboutMe}>
          <h1 className={classes.aboutMe__header}>O mnie</h1>
          <div className={classes.aboutMe__grid}>
            <motion.div
              className={classes.aboutMe__box}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={zoomIn(0.5, 1)}
            >
              <Image
                src={picture}
                alt="Właściciel Kabe Tint&Leather wykonujący pranie tapicerki i czyszczenie samochodu"
                className={classes.aboutMe__img}
                priority
              />
            </motion.div>
            <div className={classes.aboutMe__content}>
              <motion.p
                className={classes.aboutMe__text}
                initial="hidden"
                whileInView="show"
                variants={zoomIn(0.2, 1)}
                viewport={{ once: true }}
              >
                Witaj na stronie mojej firmy! Nazywam się{" "}
                <span className={classes.highlight}>Kamil</span> i mam 30 lat.{" "}
                <br></br>Z{" "}
                <span className={classes.highlight}>motoryzacją</span> jestem
                związany od 15. roku życia, a moją największą pasją jest{" "}
                <span className={classes.highlight}>
                  dbanie o wygląd samochodów
                </span>
                . Zawsze sprawia mi ogromną przyjemność poprawianie stanu
                technicznego i wizualnego pojazdów, tak aby były one czyste,
                pachnące, a lakier lśnił jak nowy.
              </motion.p>
              <motion.p
                className={classes.aboutMe__text}
                initial="hidden"
                whileInView="show"
                variants={zoomIn(0.4, 1)}
                viewport={{ once: true }}
              >
                <span className={classes.highlight}>Autokosmetyka</span> to coś
                więcej niż tylko praca – to moja pasja, która z biegiem lat
                stała się zawodem. Z pełnym zaangażowaniem i dbałością o każdy
                detal zajmuję się{" "}
                <span className={classes.highlight}>renowacją wnętrz</span>,{" "}
                <span className={classes.highlight}>pielęgnacją tapicerki</span>
                ,<span className={classes.highlight}>detailingiem lakieru</span>{" "}
                oraz{" "}
                <span className={classes.highlight}>
                  kompleksową ochroną pojazdów
                </span>
                . Moim celem jest, by każdy{" "}
                <span className={classes.highlight}>samochód</span>, który
                trafia w moje ręce, prezentował się jak najlepiej i sprawiał
                radość jego właścicielowi.
              </motion.p>
              <motion.p
                className={classes.aboutMe__text}
                initial="hidden"
                whileInView="show"
                variants={zoomIn(0.6, 1)}
                viewport={{ once: true }}
              >
                Do każdego zlecenia podchodzę indywidualnie, starając się
                zrozumieć{" "}
                <span className={classes.highlight}>potrzeby klienta</span> i
                dopasować odpowiednie rozwiązania. Dzięki doświadczeniu, pasji
                oraz nowoczesnym{" "}
                <span className={classes.highlight}>technologiom</span> mogę
                zapewnić profesjonalną i skuteczną usługę, która poprawi wygląd
                Twojego auta.
              </motion.p>
              <motion.p
                className={classes.aboutMe__text}
                initial="hidden"
                whileInView="show"
                variants={zoomIn(0.7, 1)}
                viewport={{ once: true }}
              >
                Jeśli zależy Ci na perfekcyjnej{" "}
                <span className={classes.highlight}>autokosmetyce</span>,
                zapraszam do kontaktu!
              </motion.p>
              <Link
                href="/realizacje"
                className={classes.realizationButton}
                aria-label="Zobacz nasze realizacje"
              >
                Realizacje
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
