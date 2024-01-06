import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "ssl0.ovh.net",
      port: 587,
      secure: false,
      auth: {
        user: "Kabetint@kabetintleather.pl",
        pass: "Haslofirmoweodlotowe126!", // Uważaj na bezpieczeństwo hasła
      },
      tls: {
        rejectUnauthorized: false, // Ignoruje błędy związane z certyfikatem SSL
      },
    });

    const mailOptions = {
      from: "Kabetint@kabetintleather.pl",
      to: email,
      subject: "Wiadomość z formularza kontaktowego",
      text: `Cześć ${name}, \n\nDziękuję za Twoją wiadomość. Oto treść Twojej wiadomości:\n\n${message} \n\nSkontaktuję się z Tobą wkrótce. \n\nPozdrawiam, \nKabetint&Leather`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).json({
          error: "Wystąpił błąd podczas wysyłania wiadomości e-mail.",
        });
      } else {
        console.log("E-mail wysłany: " + info.response);
        res.status(200).json({ message: "Wiadomość e-mail została wysłana." });
      }
    });
  } else {
    res.status(405).json({ error: "Metoda HTTP nie jest obsługiwana." });
  }
}
