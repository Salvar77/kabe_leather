import React from "react";
import Contact from "@/components/Main/Contact";
import classes from "./ContactSide.module.scss";
import GoogleMap from "@/components/More/GoogleMap";

const ContactSide = () => {
  return (
    <section id="kontakt-strona" className={classes.contactSide}>
      <div className={classes.contactSide__box}>
        <Contact />
      </div>
      <GoogleMap />
    </section>
  );
};

export default ContactSide;
