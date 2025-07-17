

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose =require('mongoose')
const authRoutes =require('./routes/authRoutes')

const app = express();

// ✅ CORS allowed origins
const allowedOrigins = [
  'http://localhost:3000',
  'https://gayatri-website.vercel.app',
  'https://gayatri-frontend.onrender.com',
  'https://gayathri-website-tuni.vercel.app',
];


// ✅ CORS Setup
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  })
);

app.use(cors());
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
app.post('/send-message', async (req, res) => {
  const { name, email, message } = req.body;
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
  subject: `New Message from ${name}`,
  html: `
    <h2>New Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `,
};


    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('❌ Contact form error:', err);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
})




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



  

app.get('/', (req, res) => {
  res.send('✅ Server is running');
});

// ✅ Invalid routes handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
















// const express = require('express');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// const mongoose = require('mongoose');
// require('dotenv').config();
// const authRoutes = require('./routes/authRoutes'); 

// const app = express();

// // ✅ CORS allowed origins
// const allowedOrigins = [
//   'http://localhost:3000',
//   'https://gayatri-website.vercel.app',
//   'https://gayatri-frontend.onrender.com',
//   'https://gayathri-website-tuni.vercel.app',
// ];

// // ✅ CORS Setup
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     credentials: true,
//   })
// );

// // ✅ Preflight for all routes
// app.options('*', cors());

// // ✅ JSON parser middleware
// app.use(express.json());


// app.use("/api/auth", authRoutes);

// // ✅ Mongoose DB connect
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log('✅ Connected to MongoDB'))
//   .catch((err) => console.error('❌ MongoDB error:', err));



// // ✅ Sample test route
// app.get("/api/test", (req, res) => {
//   res.json({
//     message: 'API working successfully!',
//     yourID: req.params.id,
//   });
// });


// // ✅ Home route
// app.get('/', (req, res) => {
//   res.send('🚀 Gayatri Website Backend is Live!');
// });

// // ✅ Contact form
// app.post('/send-message', async (req, res) => {
//   const { name, email, message } = req.body;
//   try {
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       subject: `New Message from ${name}`,
//       html: `
//         <h2>New Message</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);
//     res.json({ success: true, message: 'Message sent successfully!' });
//   } catch (err) {
//     console.error('❌ Contact form error:', err);
//     res.status(500).json({ success: false, message: 'Failed to send message.' });
//   }
// });

// // ✅ Admission form
// app.post('/admission-form', async (req, res) => {
//   const { studentName, parentName, className, phone, email, message } = req.body;
//   try {
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       subject: `🎓 New Admission Request from ${parentName}`,
//       html: `
//         <h2>📋 Admission Form</h2>
//         <p><strong>Student Name:</strong> ${studentName}</p>
//         <p><strong>Parent Name:</strong> ${parentName}</p>
//         <p><strong>Class:</strong> ${className}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);
//     res.json({ success: true, message: 'Admission form submitted!' });
//   } catch (err) {
//     console.error('❌ Admission form error:', err);
//     res.status(500).json({ success: false, message: 'Failed to send admission form.' });
//   }
// });

// // ✅ Invalid routes handler
// app.use((req, res) => {
//   res.status(404).json({ error: 'Route not found' });
// });

// // ✅ Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });


