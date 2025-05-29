import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Wszystkie pola są wymagane." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ error: "Nieprawidłowy format adresu e-mail." });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        requireTLS: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      const mailOptions = {
        from: "kabe@kabetintleather.opole.pl",
        to: "kabetint@gmail.com",
        subject: "Wiadomość z formularza kontaktowego",
        text: `Nowa wiadomość od: ${name} \nEmail: ${email} \nTreść wiadomości: ${message}`,
      };

      const info = await transporter.sendMail(mailOptions);

      console.log("E-mail wysłany: " + info.response);
      return res
        .status(200)
        .json({ message: "Wiadomość e-mail została wysłana." });
    } catch (error) {
      console.error("Błąd wysyłania e-maila: ", error);
      return res
        .status(500)
        .json({ error: "Wystąpił błąd podczas wysyłania wiadomości e-mail." });
    }
  } else {
    res.status(405).json({ error: "Metoda HTTP nie jest obsługiwana." });
  }
}
