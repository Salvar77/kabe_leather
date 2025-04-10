import React from "react";
import Contact from "@/components/Main/Contact";
import classes from "./kontakt.module.scss";
import SEO from "@/components/Main/SEO";

const ContactSide = () => {
  return (
    <>
      <SEO
        title="Pranie tapicerki samochodowej Opole | KabeTintLeather Auto Detailing"
        description="Skontaktuj się z nami! KabeTintLeather Auto Detailing oferuje profesjonalne usługi prania tapicerki, czyszczenia samochodów i przyciemniania szyb. Zapraszamy do kontaktu."
        image="https://www.kabetintleather.opole.pl/logo-kabetintleather-auto-detailing-opole.jpg"
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
