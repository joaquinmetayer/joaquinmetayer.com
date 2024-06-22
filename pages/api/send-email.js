import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { to, subject, text } = req.body;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      bcc: to.split(","),
      subject: subject,
      text: text,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Emails sent successfully" });
    } catch (error) {
      console.error("Error sending emails:", error);
      res.status(500).json({ message: "Error sending emails", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
