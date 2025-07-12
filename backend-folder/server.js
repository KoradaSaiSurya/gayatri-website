// server.js or index.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('Env loaded:', process.env.EMAIL_USER, process.env.EMAIL_PASS);

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-message', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    console.log('Sending email to:', process.env.EMAIL_USER);
    console.log('From user:', email);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      html: `
        <h2>New Message from School Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('❌ Error sending email:', err);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});




app.post('/admission-form' , async(req,res)=>{
  const {studentName, parentName, className, phone, email, message } =req.body;


 
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
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
    res.json({ success: true, message: '  Admission form submitted successfully!' });
  } catch (err) {
    console.error('❌ Error sending admission email:', err);
    res.status(500).json({ success: false, message: 'Failed to send form. Try again later.' });
  }
});

app.get('/', (req, res) => {
  res.send('✅ Gayatri backend is live!');
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});



