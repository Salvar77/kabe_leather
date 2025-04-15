import React from "react";
import Contact from "@/components/Main/Contact";
import classes from "./kontakt.module.scss";
import SEO from "@/components/Main/SEO";

const ContactSide = () => {
  return (
    <>
      <SEO
        title="Pranie tapicerki samochodowej Opole | KabeTintLeather Auto Detailing"
        description="Skontaktuj się z nami! KabeTintLeather Auto Detailing oferuje profesjonalne usługi prania tapicerki, czyszczenia samochodów i przyciemniania szyb. Zapraszamy do kontaktu."
        image="https://www.kabetintleather.opole.pl/logo-kabetintleather-auto-detailing-opole.jpg"
        url="https://www.kabetintleather.opole.pl/kontakt"
      />
      <section id="kontakt" className={classes.contactSide}>
        <div className={classes.contactSide__box}>
          <Contact />
        </div>
        <div className={classes.contactContent}>
          <h2>Skontaktuj się z KabeTintLeather – Opole</h2>
          <p>
            Cześć! Nazywam się <span className={classes.bold}>Kamil</span>, mam
            ponad 10 lat doświadczenia w detailingu i prowadzę studio{" "}
            <span className={classes.bold}>KabeTintLeather</span> w Opolu.
            Codziennie pomagam kierowcom przywracać ich samochodom świeżość – od{" "}
            <span className={classes.bold}>czyszczenia tapicerki</span>, przez{" "}
            <span className={classes.bold}>korektę lakieru</span>, aż po{" "}
            <span className={classes.bold}>przyciemnianie szyb</span>.
          </p>

          <p>
            Masz pytanie? Chcesz zapytać mnie o termin, zakres usługi lub cenę?{" "}
            <span className={classes.bold}>
              Zadzwoń lub napisz – odpowiem w ciągu godziny
            </span>{" "}
            i przedstawię darmową wycenę. Kontaktujesz się bezpośrednio ze mną –
            bez pośredników, bez presji, z pełnym zaangażowaniem.
          </p>

          <h3>Dane kontaktowe</h3>
          <p>
            <span className={classes.bold}>
              KabeTintLeather – Auto Detailing Opole
            </span>
            <br />
            📍 ul. Generała Emila Fieldorfa 12, 45-273 Opole
            <br />
            📞 <a href="tel:881325631">881 325 631</a>
            <br />
            ✉️ <a href="mailto:kabetint@gmail.com">kabetint@gmail.com</a>
          </p>

          <h3>Godziny otwarcia</h3>
          <p>
            🕒 Pon.–Pt. 07:00–20:00
            <br />
            🕗 Sobota 08:00–18:00
            <br />
            🚫 Niedziela: nieczynne
          </p>

          <p>
            💬 Wycena jest{" "}
            <span className={classes.bold}>bezpłatna i niezobowiązująca</span> –
            możesz też do mnie napisać poprzez formularz kontaktowy. Twoje dane
            są bezpieczne – szanuję prywatność moich klientów.
          </p>

          <h3>Znajdziesz mnie również tutaj:</h3>
          <ul>
            <li>
              📘{" "}
              <a
                href="https://www.facebook.com/profile.php?id=61554800660887"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              📸{" "}
              <a
                href="https://www.instagram.com/kabetintleather_autodetailing/#"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              🎥{" "}
              <a
                href="https://www.youtube.com/@Nesill3262"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>
            </li>
            <li>
              🎵{" "}
              <a
                href="https://www.tiktok.com/@kabetintleather"
                target="_blank"
                rel="noreferrer"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ContactSide;
