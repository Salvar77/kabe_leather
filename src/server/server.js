const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: "Kabetint@kabetintleather.pl",
    pass: "twoje_haslo",
  },
});

const sendEmail = async (emailData) => {
  const mailOptions = {
    from: "Kabetint@kabetintleather.pl",
    to: "adresat_email@example.com",
    subject: "Wiadomość z formularza kontaktowego",
    text: emailData.message,
  };
};

try {
  await transporter.sendMail(mailOptions);
  console.log("Email wysłany pomyślnie");
} catch (error) {
  console.log("Błąd wysyłania emaila: ", error);
}
