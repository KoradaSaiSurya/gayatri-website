const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose =require('mongoose')
const authRoutes =require('./routes/authRoutes')
const nodemailer = require("nodemailer");


const app = express();

// ✅ CORS allowed origins
const allowedOrigins = [
  'http://localhost:3000',
  'https://gayatri-website.vercel.app',
  'https://gayatri-frontend.onrender.com',
  // 'https://gayathri-website-tuni.vercel.app',
];


// ✅ CORS Setup

const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      'http://localhost:3000',
      'https://gayatri-frontend.onrender.com',
      'https://gayatri-website.vercel.app'
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());




app.use("/api/auth",authRoutes)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB error:', err));


// ✅ Sample test route
app.get("/api/test", (req, res) => {
  res.json({
    message: 'API working successfully!',
    yourID: req.params.id,
  });
});


// ✅ Home route
app.get('/', (req, res) => {
  res.send('🚀 Gayatri Website Backend is Live!');
});



// ✅ Contact form
// ✅ Example in server.js
app.post("/send-message", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Setup nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL, // receiver email
      subject: `New Contact Message from ${name}`,
      text: message
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    console.error("Error sending message:", err);
    res.status(500).json({ error: "Failed to send message" });
  }
});





// ✅ Admission form
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
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  subject: ` 🎓 New Admission Request from ${parentName}`,
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
    res.json({ success: true, message: 'Admission form submitted!' });
  } catch (err) {
    console.error('❌ Admission form error:', err);
    res.status(500).json({ success: false, message: 'Failed to send admission form.' });
  }
});

// ✅ Invalid routes handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});










