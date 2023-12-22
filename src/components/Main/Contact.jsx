import classes from "./Contact.module.scss";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className={classes.contactSection}>
      <div className={classes.contactInfo}>
        <h2>Kontakt</h2>
        <p>Ulica: Grota Roweckiego 18</p>
        <p>Miasto: Opole</p>
        <p>Telefon: 881 325 631</p>
        <p>Email: kabetint@gmail.com</p>
      </div>
      <form className={classes.contactForm}>
        <h2>Wyślij nam wiadomość</h2>
        <input type="text" placeholder="Twoje imię" required />
        <input type="email" placeholder="Twój email" required />
        <textarea placeholder="Twoja wiadomość" required></textarea>
        <button type="submit">Wyślij</button>
      </form>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.1219679260016!2d17.944938899999997!3d50.680561000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471053a4ba7c88cb%3A0x78814edaf226a49a!2sGrota-Roweckiego%2018%2C%2045-268%20Opole!5e0!3m2!1spl!2spl!4v1702909803946!5m2!1spl!2spl"
        width="250"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Contact;
