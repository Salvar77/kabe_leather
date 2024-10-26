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

const WhyUs = () => {
  const features = [
    {
      icon: <MdOutlineCarRepair size={64} />,
      title: "BEZPŁATNY DOJAZD DO KLIENTA I WYCENA",
      text: "Zapewniamy bezpłatny dojazd do klienta oraz bezpłatną wycenę, maksymalizując Twoją wygodę i oszczędzając czas.",
      className: classes.whyUs__boxOne,
    },
    {
      icon: <MdAttachMoney size={64} />,
      title: "ATRAKCYJNE CENY",
      text: "Oferujemy konkurencyjne ceny dla nowych i stałych klientów, zachowując najwyższą jakość usług.",
      className: classes.whyUs__boxTwo,
    },
    {
      icon: <MdEco size={64} />,
      title: "MARKOWY SPRZĘT I CHEMIA",
      text: "Stosujemy najwyższej jakości sprzęt i biodegradowalne środki czystości od renomowanych producentów.",
      className: classes.whyUs__boxThree,
    },
    {
      icon: <MdSchedule size={64} />,
      title: "DYSPOZYCYJNOŚĆ",
      text: "Oferujemy elastyczność godzin pracy, dostosowując się do Twojego grafika, w tym realizację usług poza standardowymi godzinami pracy.",
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
            variants={fadeIn("up", "spring", index * 0.1, 1)} // Dynamiczne opóźnienie dla efektu "stagger"
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
