const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'A server error occurred' });
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: `${process.env.EMAIL_USER_1}`,
    pass: `${process.env.EMAIL_PASS}`,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  console.log(`New contact submission from: ${email}`);

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required' });
  }

  try {
    const mailOptions = {
      from: `${process.env.EMAIL_USER_1}`,
      to: `${process.env.EMAIL_USER_1}, ${process.env.EMAIL_USER_2}, ${email}`,
      subject: `YouthHackKC Contact: ${subject || 'New Submission'}`,
      text: `
        Name: ${name || 'N/A'}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Subject: ${subject || 'N/A'}
        
        Message:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log(`Email sent for: ${email}`);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

module.exports = app;