import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { textVariant } from "../../../utils/motion";
import classes from "./o-mnie.module.scss";
import { useState, useEffect } from "react";

import backgroundDesktop from "../../assets/image/blogFotoMain4-2.webp";
import backgroundMobile from "../../assets/image/blogFotoMain4-2-mobile.webp";

import ownerPhotoDesktop from "../../assets/image/owner-kamil-brzoskwinia-kabetintleather.webp";
import ownerPhotoMobile from "../../assets/image/owner-kamil-brzoskwinia-kabetintleather-mobile.webp";

import Head from "next/head";

import SEO from "@/components/Main/SEO";

const AboutPage = () => {
  const [isDesktop, setIsDesktop] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backgroundImage = isDesktop ? backgroundDesktop : backgroundMobile;
  const ownerImage = isDesktop ? ownerPhotoDesktop : ownerPhotoMobile;

  if (isDesktop === null) {
    return (
      <div className={classes.loadingContainer}>
        <p>Loading...</p>
      </div>
    );
  }

  const motionProps = isDesktop
    ? {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true },
      }
    : {};

  return (
    <>
      <SEO
        title="O Mnie - KabeTintLeather Auto Detailing w Opolu"
        description="Poznaj Kamila Brzoskwinię, właściciela KabeTintLeather, i jego pasję do auto detailingu oraz pielęgnacji samochodów. Profesjonalna autokosmetyka w Opolu."
        image="https://www.kabetintleather.opole.pl/owner-kamil-brzoskwinia-kabetintleather.jpg"
        url="https://www.kabetintleather.opole.pl/o-mnie"
      />
      <Head>
        <link
          rel="preload"
          href="/_next/static/media/owner-kamil-brzoskwinia-kabetintleather.webp"
          as="image"
          type="image/webp"
          imageSrcSet="
            /_next/static/media/owner-kamil-brzoskwinia-kabetintleather.webp 1x,
            /_next/static/media/owner-kamil-brzoskwinia-kabetintleather-mobile.webp 2x
          "
          imageSizes="(max-width: 991px) 100vw, 50vw"
        />
      </Head>
      <div className={classes.backgroundAbout}>
        <Image
          src={backgroundImage}
          alt="Tło strony"
          fill
          sizes="100vw"
          priority
          fetchPriority="high"
          className={classes.backgroundAbout__image}
        />
        <div className={classes.backgroundAbout__overlay} />

        <section id="o-mnie" className={classes.aboutMe}>
          <h1 className={classes.aboutMe__header}>O mnie</h1>
          <div className={classes.aboutMe__grid}>
            <motion.div
              className={classes.aboutMe__box}
              {...motionProps}
              variants={isDesktop ? textVariant(0.15) : {}}
            >
              <Image
                src={ownerImage}
                alt="Kamil Brzoskwinia, właściciel KabeTintLeather"
                className={classes.aboutMe__img}
                priority={true}
                fetchPriority="high"
                sizes="(max-width: 991px) 100vw, 50vw"
                quality={85}
              />
            </motion.div>
            <div className={classes.aboutMe__content}>
              <motion.p
                className={classes.aboutMe__text}
                {...motionProps}
                variants={isDesktop ? textVariant(0.2) : {}}
              >
                Nazywam się{" "}
                <span className={classes.highlight}>Kamil Brzoskwinia</span> i
                jestem właścicielem firmy{" "}
                <span className={classes.highlight}>KabeTintLeather</span>. Moja
                pasja związana z motoryzacją rozpoczęła się w wieku 15 lat, a od
                ponad 10 lat profesjonalnie zajmuję się{" "}
                <span className={classes.highlight}>auto detailingiem</span>.
                Specjalizuję się w kompleksowej pielęgnacji pojazdów, dbając o
                każdy najmniejszy detal.
              </motion.p>
              <motion.p
                className={classes.aboutMe__text}
                {...motionProps}
                variants={isDesktop ? textVariant(0.4) : {}}
              >
                W swojej pracy wykorzystuje najwyższej jakości produkty i
                nowoczesne technologie, co pozwala mi osiągać doskonałe
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
                {...motionProps}
                variants={isDesktop ? textVariant(0.6) : {}}
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
                {...motionProps}
                variants={isDesktop ? textVariant(0.8) : {}}
              >
                Moim celem jest nie tylko poprawa wyglądu samochodu, ale również
                zapewnienie jego długotrwałej ochrony i zwiększenie wartości
                auta. Każde zlecenie traktuję indywidualnie, dostosowując usługi
                do potrzeb i oczekiwań klienta.
              </motion.p>
              <motion.p
                className={classes.aboutMe__text}
                {...motionProps}
                variants={isDesktop ? textVariant(1) : {}}
              >
                Jeśli chcesz, aby Twoje auto wyglądało jak nowe i było należycie
                zabezpieczone, zapraszam do kontaktu. Razem zadbamy o to, by
                Twój samochód prezentował się doskonale przez długi czas.
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
