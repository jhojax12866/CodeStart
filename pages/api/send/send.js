import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "johanburbano2021@itp.edu.co",  
      pass: "1124848674",         // CAMBIA ESTO (Usa una contraseña de aplicación en Gmail)
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "johanburbano2021@itp.edu.co",
      subject: subject,
      text: message,
      html: `<p><strong>De:</strong> ${email}</p><p>${message}</p>`,
    });

    console.log("✅ Email enviado con éxito.");
    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error enviando email:", error);
    return res.status(500).json({ message: "Error sending email", error });
  }
}
