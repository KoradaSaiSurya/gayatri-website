

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Faculty = () => {
  const [facultyList, setFacultyList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Set sample faculty data if not already present
    const existing = JSON.parse(localStorage.getItem("facultyList"));
    if (!existing || existing.length === 0) {
      const sampleFaculty = [
        {
          facultyName: "Mr. Rama Krishna",
          subjectName: "Mathematics",
          qualification: "M.Sc, B.Ed",
          experience: "12 Years"
        },
        {
          facultyName: "Ms. Sravani Devi",
          subjectName: "Science",
          qualification: "M.Sc, B.Ed",
          experience: "10 Years"
        },
        {
          facultyName: "Mr. Venkat Rao",
          subjectName: "English",
          qualification: "M.A, B.Ed",
          experience: "9 Years"
        },
        {
          facultyName: "Ms. Anjali Kumari",
          subjectName: "Computer Science",
          qualification: "M.Tech",
          experience: "8 Years"
        },
        {
          facultyName: "Mr. Ajay Varma",
          subjectName: "Physics",
          qualification: "M.Sc, B.Ed",
          experience: "11 Years"
        }
      ];
      localStorage.setItem("facultyList", JSON.stringify(sampleFaculty));
      setFacultyList(sampleFaculty);
    } else {
      setFacultyList(existing);
    }
  }, []);

  const handleAddFacultyClick = () => {
    // Logout logic
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    localStorage.removeItem("isFacultyAdmin");
    navigate('/login');
  };

  return (
    <div className="faculty-table-page">
      <h1 className="faculty-title" onClick={handleAddFacultyClick}>
        🎓 Meet Our Faculty
      </h1>
      <p className="faculty-subtext">
        Highly qualified, experienced & passionate educators who shape the future.
      </p>

      {/* Desktop Table */}
      <div className="faculty-table-container">
        <div className="faculty-row faculty-header">
          <div>S.No</div>
          <div>Name</div>
          <div>Subject</div>
          <div>Qualification</div>
          <div>Experience</div>
        </div>
        {facultyList.map((f, index) => (
          <div className="faculty-row" key={index}>
            <div>{index + 1}</div>
            <div>{f.facultyName}</div>
            <div>{f.subjectName}</div>
            <div>{f.qualification}</div>
            <div>{f.experience}</div>
          </div>
        ))}
      </div>

      {/* Mobile Cards */}
      <div className="faculty-cards-mobile">
        {facultyList.map((f, index) => (
          <div key={index} className="faculty-card">
            <p><strong>Name:</strong> {f.facultyName}</p>
            <p><strong>Subject:</strong> {f.subjectName}</p>
            <p><strong>Qualification:</strong> {f.qualification}</p>
            <p><strong>Experience:</strong> {f.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;













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








// const mongoose = require('mongoose');

// const FacultySchema = new mongoose.Schema({
//   name: String,
//   subject: String,
//   experience: Number,
// });

// module.exports = mongoose.model('Faculty', FacultySchema);







// const express = require('express');
// const router = express.Router();
// const Faculty = require('../models/FacultyModel');

// router.post('/submit', async (req, res) => {
//   try {
//     const newFaculty = new Faculty(req.body);
//     await newFaculty.save();
//     res.status(201).json({ message: 'Faculty data saved successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to save faculty data' });
//   }
// });

// router.get('/all', async (req, res) => {
//   try {
//     const allFaculty = await Faculty.find();
//     res.status(200).json(allFaculty);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch faculty data' });
//   }
// });

// module.exports = router;





// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Faculty = () => {
//   const [facultyList, setFacultyList] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // ✅ Set sample faculty data if not already present
//     const existing = JSON.parse(localStorage.getItem("facultyList"));
//     if (!existing || existing.length === 0) {
//       const sampleFaculty = [
//         {
//           facultyName: "Mr. Rama Krishna",
//           subjectName: "Mathematics",
//           qualification: "M.Sc, B.Ed",
//           experience: "12 Years"
//         },
//         {
//           facultyName: "Ms. Sravani Devi",
//           subjectName: "Science",
//           qualification: "M.Sc, B.Ed",
//           experience: "10 Years"
//         },
//         {
//           facultyName: "Mr. Venkat Rao",
//           subjectName: "English",
//           qualification: "M.A, B.Ed",
//           experience: "9 Years"
//         },
//         {
//           facultyName: "Ms. Anjali Kumari",
//           subjectName: "Computer Science",
//           qualification: "M.Tech",
//           experience: "8 Years"
//         },
//         {
//           facultyName: "Mr. Ajay Varma",
//           subjectName: "Physics",
//           qualification: "M.Sc, B.Ed",
//           experience: "11 Years"
//         }
//       ];
//       localStorage.setItem("facultyList", JSON.stringify(sampleFaculty));
//       setFacultyList(sampleFaculty);
//     } else {
//       setFacultyList(existing);
//     }
//   }, []);

//   const handleAddFacultyClick = () => {
//     // Logout logic
//     localStorage.removeItem("token");
//     localStorage.removeItem("email");
//     localStorage.removeItem("username");
//     localStorage.removeItem("isFacultyAdmin");
//     navigate('/login');
//   };

//   return (
//     <div className="faculty-table-page">
//       <h1 className="faculty-title" onClick={handleAddFacultyClick}>
//         🎓 Meet Our Faculty
//       </h1>
//       <p className="faculty-subtext">
//         Highly qualified, experienced & passionate educators who shape the future.
//       </p>

//       {/* Desktop Table */}
//       <div className="faculty-table-container">
//         <div className="faculty-row faculty-header">
//           <div>S.No</div>
//           <div>Name</div>
//           <div>Subject</div>
//           <div>Qualification</div>
//           <div>Experience</div>
//         </div>
//         {facultyList.map((f, index) => (
//           <div className="faculty-row" key={index}>
//             <div>{index + 1}</div>
//             <div>{f.facultyName}</div>
//             <div>{f.subjectName}</div>
//             <div>{f.qualification}</div>
//             <div>{f.experience}</div>
//           </div>
//         ))}
//       </div>

//       {/* Mobile Cards */}
//       <div className="faculty-cards-mobile">
//         {facultyList.map((f, index) => (
//           <div key={index} className="faculty-card">
//             <p><strong>Name:</strong> {f.facultyName}</p>
//             <p><strong>Subject:</strong> {f.subjectName}</p>
//             <p><strong>Qualification:</strong> {f.qualification}</p>
//             <p><strong>Experience:</strong> {f.experience}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Faculty;







// import React, { useEffect, useState } from 'react';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import AddFaculty from '../components/AddFaculty';


// const Faculty2 = () => {
//   const [facultyList, setFacultyList] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);
//   const [editedFaculty, setEditedFaculty] = useState({});
//   const [showAddForm, setShowAddForm] = useState(false); // ✅ toggling form

//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem("facultyList")) || [];
//     setFacultyList(storedData);
//   }, []);

//   const handleDelete = (index) => {
//     const updated = [...facultyList];
//     updated.splice(index, 1);
//     setFacultyList(updated);
//     localStorage.setItem("facultyList", JSON.stringify(updated));
//   };

//   const handleEditClick = (index) => {
//     setEditIndex(index);
//     setEditedFaculty({ ...facultyList[index] });
//   };

//   const handleInputChange = (e) => {
//     setEditedFaculty({ ...editedFaculty, [e.target.name]: e.target.value });
//   };

//   const handleSave = () => {
//     const updated = [...facultyList];
//     updated[editIndex] = editedFaculty;
//     setFacultyList(updated);
//     localStorage.setItem("facultyList", JSON.stringify(updated));
//     setEditIndex(null);
//   };

//   // 🔥 toggle function
//   const toggleAddForm = () => {
//     setShowAddForm(!showAddForm);
//   };

//   return (
//     <div className="faculty2-table-page">
//       {/* <h1 className="faculty2-title">🎓 Meet Our Faculty</h1> */}
//       {/* <p className="faculty2-subtext">Highly qualified, experienced & passionate educators who shape the future.</p> */}

//       <div className="faculty2-table-container">
//         <div className="faculty2-row faculty-header">
//           <div style={{fontSize:"13px"}} >Name</div>
//           <div style={{fontSize:"13px"}}>Subject</div>
//           <div style={{fontSize:"13px"}}>Qualification</div>
//           <div style={{fontSize:"13px"}}>Experience</div>
//           <div style={{fontSize:"13px"}}>Actions</div>
//         </div>

//         {facultyList.map((f, index) => (
//           <div className="faculty2-row" key={index}>
//             {editIndex === index ? (
//               <>
//                 <div><input name="facultyName" value={editedFaculty.facultyName} onChange={handleInputChange} /></div>
//                 <div><input name="subjectName" value={editedFaculty.subjectName} onChange={handleInputChange} /></div>
//                 <div><input name="qualification" value={editedFaculty.qualification} onChange={handleInputChange} /></div>
//                 <div><input name="experience" value={editedFaculty.experience} onChange={handleInputChange} /></div>
//                 <div><button onClick={handleSave} className="save-btn">Save</button></div>
//               </>
//             ) : (
//               <>
//                 <div>{f.facultyName}</div>
//                 <div>{f.subjectName}</div>
//                 <div>{f.qualification}</div>
//                 <div>{f.experience}</div>
//                 <div className="action-icons">
//                   <FaEdit className="edit-icon" onClick={() => handleEditClick(index)} />
//                   <FaTrash className="delete-icon" onClick={() => handleDelete(index)} />
//                 </div>
//               </>
//             )}
//           </div>
//         ))}
//       </div>

      

//       {/* ✅ show AddFaculty if toggled */}
//       {showAddForm && <AddFaculty />}
//     </div>
//   );
// };

// export default Faculty2;




// import { useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Faculty2 from './Faculty2';
// import AddFaculty from '../components/AddFaculty';

// const FacultyPage = () => {
//   const navigate = useNavigate();

//  useEffect(() => {
//   const isAdmin = localStorage.getItem("isFacultyAdmin");
  
//   const timeout = setTimeout(() => {
//     if (!isAdmin) {
//       navigate('/login');
//     }
//   }, 0);

//   return () => clearTimeout(timeout);
// }, [navigate]);



//   return (
//     <div className="faculty-page-container">
//       <div className="faculty-left">
//         <AddFaculty />
//       </div>
//       <div className="faculty-right">
//         <Faculty2 />
//       </div>

//       {/* 👇 Back Button Section */}
//       <div className="back-button-container">
//         <Link to="/faculty" className="back-button">
//           ← Back
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default FacultyPage;




// import React, { useState, useContext, useEffect } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [msg, setMsg] = useState('');
//   const { user, setUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//  useEffect(() => {
//   if (user?.token) {
//     const timeout = setTimeout(() => {
//       navigate('/faculty/add');
//     }, 100); // wait 100ms before navigating

//     return () => clearTimeout(timeout); // cleanup
//   }
// }, [user, navigate]);


//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const adminEmail = "admin@gayathri.com";

//   const handleLogin = async (e) => {
//   e.preventDefault();
//   try {
//     const res = await axios.post("https://gayatri-backend.onrender.com/api/auth/login", form, {
//       headers: {
//         "Content-Type": "application/json"
//       },
//       withCredentials: true
//     });

//     if (!res || !res.data) {
//       return setMsg("Unexpected response from server.");
//     }

//     if (res.data.email !== adminEmail) {
//       return setMsg("Only admin can login!");
//     }

//     localStorage.setItem("token", res.data.token);
//     localStorage.setItem("username", res.data.username);
//     localStorage.setItem("email", res.data.email);
//     localStorage.setItem("isFacultyAdmin", "true");

//     setUser({
//       username: res.data.username,
//       token: res.data.token,
//       email: res.data.email,
//     });

//     navigate('/faculty/add'); // handled by useEffect

//   } catch (err) {
//     // Safely read error message
//     const errorMessage = err?.response?.data?.msg || "Login failed. Please try again.";
//     setMsg(errorMessage);
//   }
// };


//   return (
//     <section className='login'> 
//     <div className="form-box">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
//         <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
//         <button type="submit">Login</button>
//       </form>
//       {msg && <p>{msg}</p>}
//     </div>
//     </section>
//   );
// }

// export default Login;



// problem : mobile lo faculty ni add chesthunte only mobile lo ne display avuthundhi and laptop lo chesthunte laptop lone display avuthundhi , vakoka mobile lo vakoka la vuntundhi ra data .AddFaculty

// requirement : i want the solution for this problem, anni mobiles i mean eh mobile lo choosin adata same gane vundali add chesina remove cddhesina edit chesina anni devices lo data same ga vundaal. 

// note this : add chesina taruvata Faculty2.js update avvali Faculty2.js lo add chesina data save avvali and alane same faculty.js lo kuda data save avvali , button vundhi kani kanipinchadhu meet our faculty h2 text eh button 

// remember this and give the full updated code which i said.