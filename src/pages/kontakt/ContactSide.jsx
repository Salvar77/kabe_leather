import React from "react";
import Contact from "@/components/Main/Contact";
import classes from "./ContactSide.module.scss";

const ContactSide = () => {
  return (
    <section id="kontakt" className={classes.contactSide}>
      <div className={classes.contactSide__box}>
        <Contact />
      </div>
    </section>
  );
};

export default ContactSide;
