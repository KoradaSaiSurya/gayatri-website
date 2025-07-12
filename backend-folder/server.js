const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// ✅ Dynamic CORS for both frontend URLs
const allowedOrigins = [
  'https://gayatri-website.vercel.app',
  'https://gayatri-frontend.onrender.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed'));
    }
  },
  methods: ['GET', 'POST'],
}));

// Optional: Preflight

app.use(express.json());

// 💌 Contact Form API
app.post('/send-message', async (req, res) => {
  const { name, email, message } = req.body;
  console.log("📥 Contact form data received:", req.body);

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email, // optional: set to process.env.EMAIL_USER for safety
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      html: `
        <h2>New Message from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Contact Email sent!");
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error("❌ Failed to send contact email:", err);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
});

// 🎓 Admission Form API
app.post('/admission-form', async (req, res) => {
  const { studentName, parentName, className, phone, email, message } = req.body;
  console.log("📩 Admission form received:", req.body);

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `🎓 New Admission Request from ${parentName}`,
      html: `
        <h2>📋 Admission Form Details</h2>
        <p><strong>Student's Name:</strong> ${studentName}</p>
        <p><strong>Parent's Name:</strong> ${parentName}</p>
        <p><strong>Class Applying For:</strong> ${className}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Admission Email sent!");
    res.json({ success: true, message: 'Admission form submitted successfully!' });
  } catch (err) {
    console.error("❌ Failed to send admission form:", err);
    res.status(500).json({ success: false, message: 'Failed to send form. Try again later.' });
  }
});

// 🌍 Root
app.get('/', (req, res) => {
  res.send("🚀 Gayatri Website Backend is Live!");
});

// 🛡️ Port Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});




