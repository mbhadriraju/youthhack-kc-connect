const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); 
const port = 5000;

app.use(cors());
app.use(express.json());


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: `${process.env.EMAIL_USER_1}`,
    pass: `${process.env.EMAIL_PASS}`,
  },
});

app.post('/email-submission', async (req, res) => {
  const { email } = req.body;
  console.log(`New submission: ${email}`);

  if (!email) {
    return res.status(400).json({ error: 'Email required' });
  }

  try {
    await transporter.sendMail({
      from: `${process.env.EMAIL_USER_1}`,
      to: `${process.env.EMAIL_USER_1}, ${process.env.EMAIL_USER_2}`,
      subject: 'YouthHackKC Contact Submission',
      text: `A new user has submitted the email: ${email}. Please reach out.`,
    });

    console.log(`Email sent for: ${email}`);
    res.json({ success: true });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});