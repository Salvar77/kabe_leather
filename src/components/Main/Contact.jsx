import { useState } from "react";
import classes from "./Contact.module.scss";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageStatus, setMessageStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consent) {
      setMessageStatus(
        "Musisz wyrazić zgodę na przetwarzanie danych osobowych."
      );
      setShowModal(true);
      return;
    }
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessageStatus("Wiadomość wysłana pomyślnie!");
        console.log("Wiadomość wysłana: ", data.message);

        window.gtag("event", "conversion", {
          send_to: "AW-16652411588/FSKBCKn448gZEMTFvoQ-",
        });
        setShowModal(true);
      } else {
        setMessageStatus("Wystąpił błąd przy wysyłaniu wiadomości.");
        console.error("Błąd wysyłania: ", data.error);
      }
    } catch (error) {
      setMessageStatus("Wystąpił błąd przy wysyłaniu wiadomości.");
      console.error("Błąd: ", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    setShowModal(false);
    setMessageStatus(null);
  };

  return (
    <>
      <section id="kontakt" className={classes.contactSection}>
        <div className={classes.contactInfo}>
          <h2>Kontakt</h2>
          <p>Ulica: Grota Roweckiego 18</p>
          <p>Miasto: Opole</p>
          <p>
            <FaPhoneAlt /> Telefon:{" "}
            <span className={`${classes.highlightedText} noLinkStyle`}>
              881 325 631
            </span>
          </p>
          <p>
            <FaEnvelope /> E-mail: kabetint@gmail.com
          </p>
        </div>
        <form className={classes.contactForm} onSubmit={handleSubmit}>
          <h2>Wyślij nam wiadomość</h2>
          <input
            type="text"
            name="name"
            placeholder="Twoje imię"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Twój email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            type="message"
            name="message"
            placeholder="Twoja wiadomość"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <div className={classes.consentWrapper}>
            <input
              type="checkbox"
              id="rodoConsent"
              checked={consent}
              onChange={() => setConsent(!consent)}
              required
            />
            <label htmlFor="rodoConsent">
              Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z
              ustawą o ochronie danych osobowych w związku z wysłaniem zapytania
              przez formularz kontaktowy. Podanie danych jest dobrowolne, ale
              niezbędne do przetworzenia zapytania. Zostałem poinformowany, że
              przysługuje mi prawo dostępu do swoich danych, możliwość ich
              poprawienia oraz żądanie zaprzestania ich przetwarzania.
              Administratorem danych osobowych jest KaBe Tint & Leather Kamil
              Brzoskwinia, ul. Grota Roweckiego 18.
            </label>
          </div>
          <button type="submit">Wyślij</button>
        </form>
        <div className={classes.linkWrapper}>
          <Link href="tel:+48881325631" className={classes.appointmentLink}>
            Umów się na wizytę!
          </Link>
        </div>
        {showModal && (
          <div className={classes.modal} onClick={closeModal}>
            <div className={classes.modalContent}>
              {messageStatus && <p>{messageStatus}</p>}
            </div>
          </div>
        )}
        <div className={classes.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.8642185435515!2d17.940067993576342!3d50.680564297643635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710531a4c7c14dd%3A0x6c8dfa970a39f1fe!2sKabe%20Tint%26Leather%20Pranie%20Tapicerki%20%2C%20Przyciemnianie%20szyb%20Opole!5e1!3m2!1spl!2spl!4v1723622809834!5m2!1spl!2spl"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <p className={classes.policy}>
        Więcej informacji na temat przetwarzania danych osobowych znajdziesz w
        naszej{" "}
        <Link href="/polityka-prywatnosci" className={classes.policy__link}>
          Polityce Prywatności
        </Link>
        .
      </p>
    </>
  );
};

export default Contact;
