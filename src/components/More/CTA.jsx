import React from "react";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import classes from "./CTA.module.scss";

const CTA = () => {
  return (
    <div className={classes.cta}>
      <h3>
        <IoMdHelpCircleOutline className={classes.cta__icon} />
        Masz pytania lub chcesz skorzystać z usługi?
      </h3>
      <p>
        Skontaktuj się z nami za pomocą formularza kontaktowego, aby omówić
        szczegóły!
      </p>
      <Link href="/kontakt" className={classes.cta__button}>
        <FaEnvelope className={classes.cta__icon} />
        Skontaktuj się
      </Link>
    </div>
  );
};

export default CTA;
