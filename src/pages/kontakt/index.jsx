// /src/pages/kontakt/index.jsx
import React from "react";
import Contact from "@/components/Main/Contact";
import classes from "./kontakt.module.scss";
import SEO from "@/components/Main/SEO";

import { motion } from "framer-motion";
import { textVariant, fadeIn, fadeScale } from "../../../utils/motion";

const ContactSide = () => (
  <>
    <SEO
      title="Pranie tapicerki samochodowej Opole | KabeTintLeather Auto Detailing"
      description="Skontaktuj się z nami! KabeTintLeather Auto Detailing oferuje profesjonalne usługi prania tapicerki, czyszczenia samochodów i przyciemniania szyb. Zapraszamy do kontaktu."
      image="https://www.kabetintleather.opole.pl/logo-kabetintleather-auto-detailing-opole.jpg"
      url="https://www.kabetintleather.opole.pl/kontakt"
    />

    <section id="kontakt" className={classes.contactSide}>
      <motion.div
        className={classes.contactSide__box}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Contact />
      </motion.div>

      <div className={classes.contactContent}>
        <motion.h2
          variants={textVariant(0.2)}
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          Skontaktuj się z KabeTintLeather – Opole
        </motion.h2>

        <motion.p
          variants={fadeIn("up", "tween", 0.3, 0.7)}
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          Cześć! Nazywam się <span className={classes.bold}>Kamil</span>, mam
          ponad 10 lat doświadczenia w detailingu i prowadzę studio{" "}
          <span className={classes.bold}>KabeTintLeather</span> w Opolu.
          Codziennie pomagam kierowcom przywracać ich samochodom świeżość – od{" "}
          <span className={classes.bold}>czyszczenia tapicerki</span>, przez{" "}
          <span className={classes.bold}>korektę lakieru</span>, aż po{" "}
          <span className={classes.bold}>przyciemnianie szyb</span>.
        </motion.p>

        <motion.p
          variants={fadeIn("up", "tween", 0.4, 0.7)}
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          Masz pytanie? Chcesz zapytać mnie o termin, zakres usługi lub cenę?{" "}
          <span className={classes.bold}>
            Zadzwoń lub napisz – odpowiem w ciągu godziny
          </span>{" "}
          i przedstawię darmową wycenę. Kontaktujesz się bezpośrednio ze mną –
          bez pośredników, bez presji, z pełnym zaangażowaniem.
        </motion.p>

        <motion.h3
          variants={textVariant(0.6)}
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          Dane kontaktowe
        </motion.h3>

        <motion.p
          variants={fadeIn("up", "tween", 0.7, 0.7)}
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={classes.bold}>
            KabeTintLeather – Auto Detailing Opole
          </span>
          <br />
          📍 ul. Generała Emila Fieldorfa 12, 45-273 Opole
          <br />
          📞 <a href="tel:881325631">881 325 631</a>
          <br />
          ✉️ <a href="mailto:kabetint@gmail.com">kabetint@gmail.com</a>
        </motion.p>

        <motion.h3
          variants={textVariant(0.9)}
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          Godziny otwarcia
        </motion.h3>

        <motion.p
          variants={fadeIn("up", "tween", 1.0, 0.7)}
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          🕒 Pon.–Pt. 07:00–20:00
          <br />
          🕗 Sobota 08:00–18:00
          <br />
          🚫 Niedziela: nieczynne
        </motion.p>

        <motion.p
          variants={fadeIn("up", "tween", 1.1, 0.7)}
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          💬 Wycena jest{" "}
          <span className={classes.bold}>bezpłatna i niezobowiązująca</span> –
          możesz też do mnie napisać poprzez formularz kontaktowy. Twoje dane są
          bezpieczne – szanuję prywatność moich klientów.
        </motion.p>

        <motion.h3
          variants={textVariant(1.2)}
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          Znajdziesz mnie również tutaj:
        </motion.h3>

        <motion.ul
          className={classes.socialList}
          variants={fadeScale(1.3, 0.7)}
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <li>
            📘{" "}
            <a
              href="https://www.facebook.com/profile.php?id=61554800660887"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            📸{" "}
            <a
              href="https://www.instagram.com/kabetintleather_autodetailing/#"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            🎥{" "}
            <a
              href="https://www.youtube.com/@KabeTintLeather"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
          </li>
          <li>
            🎵{" "}
            <a
              href="https://www.tiktok.com/@kabetintleather"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>
          </li>
        </motion.ul>
      </div>
    </section>
  </>
);

export default ContactSide;
