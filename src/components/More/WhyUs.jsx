import React from "react";
import {
  MdOutlineCarRepair,
  MdAttachMoney,
  MdEco,
  MdSchedule,
} from "react-icons/md";
import classes from "./WhyUs.module.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

const ARIA_LABELS = {
  freeEstimate:
    "Bezpłatna wycena usługi prania tapicerki i czyszczenia samochodu",
  attractivePrices:
    "Atrakcyjne ceny na pranie tapicerki i czyszczenie samochodu",
  qualityEquipment:
    "Markowy sprzęt i chemia do prania tapicerki i czyszczenia tapicerki samochodowej",
  availability:
    "Elastyczne godziny pracy na czyszczenie samochodów i pranie tapicerki",
};

const WhyUs = () => {
  const features = [
    {
      icon: (
        <MdOutlineCarRepair size={64} aria-label={ARIA_LABELS.freeEstimate} />
      ),
      title: "BEZPŁATNA WYCENA USŁUGI",
      text: "Zapewniamy bezpłatną wycenę, maksymalizując Twoją wygodę i oszczędzając czas.",
      className: classes.whyUs__boxOne,
    },
    {
      icon: (
        <MdAttachMoney size={64} aria-label={ARIA_LABELS.attractivePrices} />
      ),
      title: "ATRAKCYJNE CENY",
      text: "Oferujemy konkurencyjne ceny dla nowych i stałych klientów, zachowując najwyższą jakość usług.",
      className: classes.whyUs__boxTwo,
    },
    {
      icon: <MdEco size={64} aria-label={ARIA_LABELS.qualityEquipment} />,
      title: "MARKOWY SPRZĘT I CHEMIA",
      text: "Stosujemy najwyższej jakości sprzęt i biodegradowalne środki czystości od renomowanych producentów.",
      className: classes.whyUs__boxThree,
    },
    {
      icon: <MdSchedule size={64} aria-label={ARIA_LABELS.availability} />,
      title: "DYSPOZYCYJNOŚĆ",
      text: "Oferujemy elastyczny czas pracy, dostosowując się do Twojego grafika, w tym realizację usług poza standardowymi godzinami pracy.",
      className: classes.whyUs__boxFour,
    },
  ];

  return (
    <motion.section
      id="dlaczegoMy"
      className={classes.whyUs}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className={classes.whyUs__header}>Dlaczego My?</h2>
      <div className={classes.whyUs__box}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={feature.className}
            variants={fadeIn("up", "spring", index * 0.1, 1)}
            initial="hidden"
            whileInView="show"
          >
            <div className={classes.icon}>{feature.icon}</div>
            <h3 className={classes.whyUs__title}>{feature.title}</h3>
            <p className={classes.whyUs__text}>{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyUs;
