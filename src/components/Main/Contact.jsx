import { useState } from "react";
import classes from "./Contact.module.scss";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageStatus, setMessageStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      } else {
        setMessageStatus("Wystąpił błąd przy wysyłaniu wiadomości.");
        console.error("Błąd wysyłania: ", data.error);
      }
      setShowModal(true); // Dodaj tę linię, aby wyświetlić modal
    } catch (error) {
      setMessageStatus("Wystąpił błąd przy wysyłaniu wiadomości.");
      console.error("Błąd: ", error);
      setShowModal(true); // Dodaj tę linię, aby wyświetlić modal również w przypadku błędu
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    setShowModal(false); // Zamknij modal po kliknięciu
    setMessageStatus(null); // Opcjonalnie wyczyść status wiadomości
  };

  return (
    <section id="kontakt" className={classes.contactSection}>
      <div className={classes.contactInfo}>
        <h2>Kontakt</h2>
        <p>Ulica: Grota Roweckiego 18</p>
        <p>Miasto: Opole</p>
        <p>Telefon: 881 325 631</p>
        <p>E-mail: kabetint@gmail.com</p>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.1219679260016!2d17.944938899999997!3d50.680561000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471053a4ba7c88cb%3A0x78814edaf226a49a!2sGrota-Roweckiego%2018%2C%2045-268%20Opole!5e0!3m2!1spl!2spl!4v1702909803946!5m2!1spl!2spl"
          title="Mapa lokalizacji firmy"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
