import React from "react";
import Contact from "@/components/Main/Contact";
import classes from './ContactSide.module.scss';

const ContactSide = () => {
  return (
    <section id="kontakt-strona" className={classes.contactSide}>
      <Contact />
    </section>
  );
};

export default ContactSide;
