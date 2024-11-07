import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import classes from "./ContactBar.module.scss";

const ContactBar = () => {
  return (
    <div className={classes.contactBar}>
      <div className={classes.contactButtonsWrapper}>
        <a href="tel:881325631" className={classes.contactButton}>
          <FaPhoneAlt className={classes.icon} />
          Zadzwoń
        </a>
        <div className={classes.separator}></div>
        <a
          href="https://wa.me/48881325631"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.contactButton}
        >
          <FaWhatsapp className={classes.icon} />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ContactBar;
