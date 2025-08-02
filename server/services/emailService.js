const nodemailer = require("nodemailer");

const gmailUser = process.env.GMAIL_USER;
const gmailPass = process.env.GMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailUser,
    pass: gmailPass,
  },
});

exports.sendMessage = async (data) => {
  const { name, email, message } = data;

  if (!name || !message || !email) {
    throw new Error("Incomplete data!");
  }

  const mailOptions = {
    from: gmailUser,
    to: gmailUser, // send to yourself
    subject: `[Portfolio] New message from ${name}`,
    replyTo: email,
    text: message,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong><br>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent via Gmail!" };
  } catch (error) {
    console.error("Nodemailer error:", error);
    throw new Error("Failed to send email via Gmail.");
  }
};
