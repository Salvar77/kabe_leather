import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // Ignoruje błędy związane z certyfikatem SSL
      },
    });

    const mailOptions = {
      from: "Kabetint@kabetintleather.pl",
      to: "Kabetint@kabetintleather.pl",
      subject: "Wiadomość z formularza kontaktowego",
      text: `Nowa wiadomość od: ${name} \nEmail: ${email} \nTreść wiadomości: ${message}`,
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
