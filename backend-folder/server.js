// const express = require('express');
// import cors from 'cors';
// import mongoose from 'mongoose';
// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';
// import helmet from 'helmet';
// import morgan from 'morgan';

// import authRoutes from './routes/authRoutes.js';
// import facultyRoutes from './routes/facultyRoutes.js';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const nodemailer = require('nodemailer');

const authRoutes = require('./routes/authRoutes');
const facultyRoutes = require('./routes/facultyRoutes');



dotenv.config();
const app = express();

// ✅ Allowed Origins for CORS
const allowedOrigins = [
  'http://localhost:3000',
  'https://gayatri-frontend.onrender.com',
  'https://gayatri-website.vercel.app'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('❌ Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

// ✅ Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(helmet());       // 🔒 Adds security headers
app.use(morgan('dev'));  // 📜 Logs requests in terminal

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/faculty", facultyRoutes);

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1); // Exit if DB fails
});

// ✅ Test Route
app.get("/api/test", (req, res) => {
  res.json({ message: '🚀 API working successfully!' });
});

// ✅ Home Route
app.get('/', (req, res) => {
  res.send('🚀 Gayatri Website Backend is Live!');
});

// ✅ Contact Form Email
app.post("/send-message", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Contact Message from ${name}`,
      text: `From: ${email}\n\nMessage:\n${message}`
    });

    res.status(200).json({ message: "✅ Message sent successfully" });
  } catch (err) {
    console.error("❌ Error sending message:", err);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// ✅ Admission Form Email
app.post('/admission-form', async (req, res) => {
  const { studentName, parentName, className, phone, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${parentName}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🎓 New Admission Request from ${parentName}`,
      html: `
        <h2>📋 Admission Form</h2>
        <p><strong>Student Name:</strong> ${studentName}</p>
        <p><strong>Parent Name:</strong> ${parentName}</p>
        <p><strong>Class:</strong> ${className}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: '✅ Admission form submitted!' });
  } catch (err) {
    console.error('❌ Admission form error:', err);
    res.status(500).json({ success: false, message: 'Failed to send admission form.' });
  }
});

// ✅ 404 Handler (Always last)
app.use((req, res) => {
  res.status(404).json({ error: '❌ Route not found' });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});










