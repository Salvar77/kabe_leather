import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { textVariant } from "../../../utils/motion";
import classes from "./o-mnie.module.scss";
import ownerPhoto from "../../assets/image/owner-kamil-brzoskwinia-kabetintleather.webp";
import SEO from "@/components/Main/SEO";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="O Mnie - KabeTintLeather Auto Detailing w Opolu"
        description="Poznaj Kamila Brzoskwinię, właściciela KabeTintLeather, i jego pasję do auto detailingu oraz pielęgnacji samochodów. Profesjonalna autokosmetyka w Opolu."
        image="https://www.kabetintleather.opole.pl/owner-kamil-brzoskwinia-kabetintleather.jpg"
        url="https://www.kabetintleather.opole.pl/o-mnie"
      />
      <div className={classes.backgroundAbout}>
        <section id="o-mnie" className={classes.aboutMe}>
          <h1 className={classes.aboutMe__header}>O mnie</h1>
          <div className={classes.aboutMe__grid}>
            <motion.div
              className={classes.aboutMe__box}
              initial="hidden"
              whileInView="show"
              variants={textVariant(0.15)}
              viewport={{ once: true }}
            >
              <Image
                src={ownerPhoto}
                alt="Kamil Brzoskwinia, właściciel KabeTintLeather"
                className={classes.aboutMe__img}
                priority
              />
            </motion.div>
            <div className={classes.aboutMe__content}>
              <motion.p
                className={classes.aboutMe__text}
                initial="hidden"
                whileInView="show"
                variants={textVariant(0.2)}
                viewport={{ once: true }}
              >
                Nazywam się{" "}
                <span className={classes.highlight}>Kamil Brzoskwinia</span> i
                jestem właścicielem firmy{" "}
                <span className={classes.highlight}>KabeTintLeather</span>. Moja
                pasja do motoryzacji rozpoczęła się w wieku 15 lat, a od ponad
                10 lat profesjonalnie zajmuję się{" "}
                <span className={classes.highlight}>auto detailingiem</span>.
                Specjalizuję się w kompleksowej pielęgnacji pojazdów, dbając o
                każdy, nawet najmniejszy detal.
              </motion.p>
              <motion.p
                className={classes.aboutMe__text}
                initial="hidden"
                whileInView="show"
                variants={textVariant(0.4)}
                viewport={{ once: true }}
              >
                W swojej pracy korzystam z najwyższej jakości produktów i
                nowoczesnych technologii, co pozwala mi osiągać doskonałe
                rezultaty. Moje usługi obejmują{" "}
                <Link
                  href={"/uslugi/pranie-tapicerki"}
                  className={classes.highlight}
                >
                  pranie tapicerki materiałowej i skórzanej
                </Link>
                ,{" "}
                <Link
                  href={"/uslugi/renowacja-i-czyszczenie-skor"}
                  className={classes.highlight}
                >
                  renowację i czyszczenie skór
                </Link>
                ,{" "}
                <Link
                  href={"/uslugi/przyciemnianie-szyb"}
                  className={classes.highlight}
                >
                  przyciemnianie szyb
                </Link>
                ,{" "}
                <Link
                  href={"/uslugi/korekta-lakieru"}
                  className={classes.highlight}
                >
                  korektę lakieru
                </Link>
                ,{" "}
                <Link
                  href={"/uslugi/powloka-ceramiczna"}
                  className={classes.highlight}
                >
                  aplikację powłok ceramicznych
                </Link>{" "}
                oraz{" "}
                <Link
                  href={"/uslugi/folia-ppf-ochrona-lakieru"}
                  className={classes.highlight}
                >
                  ochronnych folii PPF
                </Link>
                .
              </motion.p>
              <motion.p
                className={classes.aboutMe__text}
                initial="hidden"
                whileInView="show"
                variants={textVariant(0.6)}
                viewport={{ once: true }}
              >
                Zaufało mi już wielu klientów z Opola i okolic, którzy docenili
                moje zaangażowanie i profesjonalizm. Opinie zadowolonych
                klientów oraz przykłady zrealizowanych projektów można znaleźć w
                sekcji{" "}
                <Link href="/referencje" className={classes.highlight}>
                  Referencje
                </Link>{" "}
                oraz{" "}
                <Link href="/realizacje" className={classes.highlight}>
                  Realizacje
                </Link>
                .
              </motion.p>
              <motion.p
                className={classes.aboutMe__text}
                initial="hidden"
                whileInView="show"
                variants={textVariant(0.8)}
                viewport={{ once: true }}
              >
                Moim celem jest nie tylko poprawa wyglądu samochodu, ale także
                zapewnienie jego długotrwałej ochrony i zwiększenie wartości.
                Każde zlecenie traktuję indywidualnie, dostosowując usługi do
                potrzeb i oczekiwań klienta.
              </motion.p>
              <motion.p
                className={classes.aboutMe__text}
                initial="hidden"
                whileInView="show"
                variants={textVariant(1)}
                viewport={{ once: true }}
              >
                Jeśli chcesz, aby Twój samochód wyglądał jak nowy i był
                odpowiednio zabezpieczony, zapraszam do kontaktu. Razem zadbamy
                o to, by Twój pojazd prezentował się doskonale przez długi czas.
              </motion.p>
              <div className={classes.signature}>
                <span className={classes.signature__name}>
                  Kamil Brzoskwinia
                </span>
                <span className={classes.signature__title}>
                  Właściciel KabeTintLeather
                </span>
              </div>
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
