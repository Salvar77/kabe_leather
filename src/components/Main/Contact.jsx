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

        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "conversion", {
            send_to: "AW-16652411588/FSKBCKn448gZEMTFvoQ-",
          });
        }

        setShowModal(true);
      } else {
        setMessageStatus("Wystąpił błąd przy wysyłaniu wiadomości.");
        console.error("Błąd wysyłania: ", data.error);
        setShowModal(true);
      }
    } catch (error) {
      setMessageStatus("Wystąpił błąd przy wysyłaniu wiadomości.");
      console.error("Błąd: ", error);
      setShowModal(true);
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
      <section id="kontakt-główna" className={classes.contactSection}>
        <div className={classes.contactInfo}>
          <h2>Kontakt</h2>
          <p>KabeTintLeather - Pranie tapicerki samochodowej Opole</p>
          <p>Ulica: Generała Emila Fieldorfa 12</p>
          <p>Miasto: 45-273 Opole</p>
          <p>
            <FaPhoneAlt /> Telefon:{" "}
            <a
              href="tel:881325631"
              className={`${classes.highlightedText} ${classes.noLinkStyle}`}
            >
              881 325 631
            </a>
          </p>
          <p>
            <FaEnvelope /> E-mail: kabetint@gmail.com
          </p>
          <div className={classes.openingHours}>
            <h3>Godziny otwarcia:</h3>
            <table>
              <tbody>
                <tr>
                  <td>Poniedziałek:</td>
                  <td className={classes.hours}>07:00–20:00</td>
                </tr>
                <tr>
                  <td>Wtorek:</td>
                  <td className={classes.hours}>07:00–20:00</td>
                </tr>
                <tr>
                  <td>Środa:</td>
                  <td className={classes.hours}>07:00–20:00</td>
                </tr>
                <tr>
                  <td>Czwartek:</td>
                  <td className={classes.hours}>07:00–20:00</td>
                </tr>
                <tr>
                  <td>Piątek:</td>
                  <td className={classes.hours}>07:00–20:00</td>
                </tr>
                <tr>
                  <td>Sobota:</td>
                  <td className={classes.hours}>08:00–18:00</td>
                </tr>
                <tr>
                  <td>Niedziela:</td>
                  <td className={classes.closed}>Zamknięte</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <form className={classes.contactForm} onSubmit={handleSubmit}>
          <h2>Wyślij mi wiadomość</h2>
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
            />
            <label htmlFor="rodoConsent" id="rodoDescription">
              Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą o
              ochronie danych osobowych w związku z wysłaniem zapytania przez
              formularz kontaktowy. Podanie danych jest dobrowolne, ale
              niezbędne do przetworzenia zapytania. Przysługuje mi prawo dostępu
              do swoich danych, ich poprawienia oraz żądania zaprzestania
              przetwarzania. Administratorem danych osobowych jest
              KabeTintLeather Auto Detailing Kamil Brzoskwinia, ul. Generała
              Emila Fieldorfa 12.
            </label>
          </div>

          <button type="submit" aria-label="Wyślij formularz kontaktowy">
            Wyślij
          </button>
        </form>

        <div className={classes.linkWrapper}>
          <Link
            href="tel:+48881325631"
            className={classes.appointmentLink}
            aria-label="Zadzwoń, aby umówić wizytę"
          >
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
      </section>
    </>
  );
};

export default Contact;
