import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import classes from "./ContactBar.module.scss";

const ContactBar = () => {
  return (
    <div className={classes.contactBar}>
      <a href="tel:881325631" className={classes.contactButton}>
        <FaPhoneAlt className={classes.icon} />
        Zadzwoń teraz
      </a>
      <div className={classes.separator}></div>
      <a
        href="https://wa.me/881325631"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.contactButton}
      >
        <FaWhatsapp className={classes.icon} />
        Napisz na WhatsApp
      </a>
    </div>
  );
};

export default ContactBar;
