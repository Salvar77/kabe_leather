import React from "react";
import Contact from "@/components/Main/Contact";
import classes from "./kontakt.module.scss";
import SEO from "@/components/Main/SEO";

const ContactSide = () => {
  return (
    <>
      <SEO
        title="Kontakt - Kabe Tint&Leather Auto Detailing w Opolu"
        description="Skontaktuj się z nami! Kabe Tint&Leather Auto Detailing oferuje profesjonalne usługi prania tapicerki, czyszczenia samochodów i przyciemniania szyb. Zapraszamy do kontaktu."
        image="https://www.kabetintleather.opole.pl/kabelogooo.webp"
        url="https://www.kabetintleather.opole.pl/kontakt"
      />
      <section id="kontakt" className={classes.contactSide}>
        <div className={classes.contactSide__box}>
          <Contact />
        </div>
      </section>
    </>
  );
};

export default ContactSide;
