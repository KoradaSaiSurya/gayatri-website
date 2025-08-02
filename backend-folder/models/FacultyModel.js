// models/FacultyModel.js
const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
  facultyName: { type: String, required: true },
  subjectName: { type: String, required: true },
  qualification: { type: String, required: true },
  experience: { type: String, required: true }
});

module.exports = mongoose.model('Faculty', FacultySchema);






// backend ----

// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const mongoose = require('mongoose');
// const authRoutes = require('./routes/authRoutes');
// const nodemailer = require("nodemailer");
// const facultyRoutes = require('./routes/facultyRoutes');

// const app = express();

// // ✅ CORS Setup
// const corsOptions = {
//   origin: function (origin, callback) {

//     const allowedOrigins = [
//       'http://localhost:3000',
//       'https://gayatri-frontend.onrender.com',
//       'https://gayatri-website.vercel.app'
//     ];

//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true,
//   optionsSuccessStatus: 200
// };

// app.use(cors(corsOptions));
// app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use('/api/faculty', facultyRoutes);

// // ✅ MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log('✅ Connected to MongoDB'))
//   .catch((err) => console.error('❌ MongoDB error:', err));
  

// // mongoose.connect(process.env.MONGO_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// // mongoose.connection.once("open", () => {
// //   console.log("✅ Connected to MongoDB");
// // });

// // ✅ Test route
// app.get("/api/test", (req, res) => {
//   res.json({ message: 'API working successfully!' });
// });

// // ✅ Home route
// app.get('/', (req, res) => {
//   res.send('🚀 Gayatri Website Backend is Live!');
// });

// // ✅ Contact Form
// app.post("/send-message", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//       }
//     });

//     await transporter.sendMail({
//       from: `"${name}" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_USER,
//       subject: `New Contact Message from ${name}`,
//       text: message
//     });

//     res.status(200).json({ message: "Message sent successfully" });
//   } catch (err) {
//     console.error("❌ Error sending message:", err);
//     res.status(500).json({ error: "Failed to send message" });
//   }
// });

// // ✅ Admission Form
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
//       from: `"${parentName}" <${process.env.EMAIL_USER}>`,
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

// // ✅ 404 Handler
// app.use((req, res) => {
//   res.status(404).json({ error: 'Route not found' });
// });


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });



// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// const router = express.Router();

// // Register
// router.post("/register", async (req, res) => {
//   const { username, email, password } = req.body;

//   if (!username || !email || !password) {
//     return res.status(400).json({ msg: "All fields required" });
//   }

//   const existingUser = await User.findOne({ email });
//   if (existingUser) return res.status(400).json({ msg: "Email already used" });

//   const hashedPassword = await bcrypt.hash(password, 10);
//   const newUser = new User({ username, email, password: hashedPassword });

//   await newUser.save();
//   res.status(201).json({ msg: "Registered Successfully" });
// });

// // 🔥 login route lo token create cheyyi
// // 🔐 Only allow fixed admin
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   const adminEmail = "admin@gayathri.com";
//   const adminPassword = "admin123";

//   // Check email
//   if (email !== adminEmail) {
//     return res.status(401).json({ msg: "Only admin can login!" });
//   }

//   // Check password
//   if (password !== adminPassword) {
//     return res.status(401).json({ msg: "Invalid admin password" });
//   }

//   // Create token manually (no DB)
//   const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });

//   // Send token and admin info
//   res.json({
//     msg: "Admin login success",
//     token,
//     username: "admin",
//     email: adminEmail,
//   });
// });


// module.exports = router;




// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// const router = express.Router();

// // Register
// router.post("/register", async (req, res) => {
//   const { username, email, password } = req.body;

//   if (!username || !email || !password) {
//     return res.status(400).json({ msg: "All fields required" });
//   }

//   const existingUser = await User.findOne({ email });
//   if (existingUser) return res.status(400).json({ msg: "Email already used" });

//   const hashedPassword = await bcrypt.hash(password, 10);
//   const newUser = new User({ username, email, password: hashedPassword });

//   await newUser.save();
//   res.status(201).json({ msg: "Registered Successfully" });
// });

// // 🔥 login route lo token create cheyyi
// // 🔐 Only allow fixed admin
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   const adminEmail = "admin@gayathri.com";
//   const adminPassword = "admin123";

//   // Check email
//   if (email !== adminEmail) {
//     return res.status(401).json({ msg: "Only admin can login!" });
//   }

//   // Check password
//   if (password !== adminPassword) {
//     return res.status(401).json({ msg: "Invalid admin password" });
//   }

//   // Create token manually (no DB)
//   const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });

//   // Send token and admin info
//   res.json({
//     msg: "Admin login success",
//     token,
//     username: "admin",
//     email: adminEmail,
//   });
// });


// module.exports = router;





// // models/FacultyModel.js
// const mongoose = require('mongoose');

// const FacultySchema = new mongoose.Schema({
//   facultyName: { type: String, required: true },
//   subjectName: { type: String, required: true },
//   qualification: { type: String, required: true },
//   experience: { type: String, required: true },
// });

// module.exports = mongoose.model('Faculty', FacultySchema);





// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   username: {           // ✅ spelling must be "username"
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   }
// });

// module.exports = mongoose.model("User", userSchema);



// EMAIL_USER=saisuryakorada2003@gmail.com 
// EMAIL_PASS=yanqhbwfqyjalybs
// MONGO_URI=mongodb+srv://surya:korada2003@cluster0.tvs6lrd.mongodb.net/school?retryWrites=true&w=majority&appName=Cluster0
// JWT_SECRET=supersecret123


