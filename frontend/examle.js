// frontend : 


// dashboard:

// import React from 'react';
// import { useAuth } from '../context/AuthContext';

// const Dashboard = () => {
//   const { role, logout } = useAuth();

//   return (
//     <div className="dashboard-page">
//       <h2>Welcome, {role === 'principal' ? 'Principal' : 'User'}!</h2>
//       <p>This is your dashboard. You have full access.</p>
//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// };

// export default Dashboard;


// login:

// import React, { useState } from 'react';
// import { ServerRouter, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Login = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(email, password);
//       navigate('/dashboard');
//     } catch (err) {
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div className="login-page">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
//         <button type="submit">Login</button>
//       </form>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default Login;



// register:

// import React, { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const role = 'principal'; // fixed role, not editable
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/auth/register', { email, password, role });
//       setMessage('Registration successful! You can now login.');
//     } catch (err) {
//       setMessage('Registration failed!');
//     }
//   };

//   return (
//     <div className="register-page">
//       <h2>Register (Only for Principal)</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
//         <button type="submit">Register</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default Register;



// unauthorized:


// import React from 'react';

// const Unauthorized = () => {
//   return (
//     <div className="unauthorized-page">
//       <h2>⛔ Access Denied</h2>
//       <p>You are not authorized to view this page.</p>
//     </div>
//   );
// };

// export default Unauthorized;



// Faculty.js


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import StudentDashboard from './src/pages/StudentDashboard';

// const Faculty = () => {
//   const [facultyList, setFacultyList] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);
//   const [editedFaculty, setEditedFaculty] = useState({});

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

//   return (
//     <div className="faculty-table-page">
//       <h1 className="faculty-title">🎓 Meet Our Faculty</h1>
//       <p className="faculty-subtext">Highly qualified, experienced & passionate educators who shape the future.</p>

//       <div className="faculty-table-container">
//         <div className="faculty-row faculty-header">
//           <div>Name</div>
//           <div>Subject</div>
//           <div>Department</div>
//           <div>Qualification</div>
//           <div>Experience</div>
//           <div>Specialization</div>
//           <div>Actions</div>
//         </div>

//         {facultyList.map((f, index) => (
//           <div className="faculty-row" key={index}>
//             {editIndex === index ? (
//               <>
//                 <div><input name="facultyName" value={editedFaculty.facultyName} onChange={handleInputChange} /></div>
//                 <div><input name="subjectName" value={editedFaculty.subjectName} onChange={handleInputChange} /></div>
//                 <div><input name="department" value={editedFaculty.department} onChange={handleInputChange} /></div>
//                 <div><input name="qualification" value={editedFaculty.qualification} onChange={handleInputChange} /></div>
//                 <div><input name="experience" value={editedFaculty.experience} onChange={handleInputChange} /></div>
//                 <div><input name="specialization" value={editedFaculty.specialization} onChange={handleInputChange} /></div>
//                 <div>
//                   <button onClick={handleSave} className="save-btn">Save</button>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div>{f.facultyName}</div>
//                 <div>{f.subjectName}</div>
//                 <div>{f.department}</div>
//                 <div>{f.qualification}</div>
//                 <div>{f.experience}</div>
//                 <div>{f.specialization}</div>
//                 <div className="action-icons">
//                   <FaEdit className="edit-icon" onClick={() => handleEditClick(index)} />
//                   <FaTrash className="delete-icon" onClick={() => handleDelete(index)} />
//                 </div>
//               </>
//             )}
//           </div>
//         ))}
//       </div>

//       <div>
//         <Link to='/addFaculty'>
//           <button className="faculty-btn">Add Faculty</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Faculty;



// StudentDashboard:


// import React from 'react';

// const StudentDashboard = () => {
//   return (
//     <div className="student-dashboard">
//       <h2>📚 Student Dashboard</h2>
//       <p>Books, Results, and more coming soon...</p>
//     </div>
//   );
// };

// export default StudentDashboard;


// studentlogin:

// import React, { useState } from 'react';

// const StudentLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // You can add real student login logic here
//     alert('Student login successful (mock)');
//   };

//   return (
//     <div className="student-login-page">
//       <h2>Student Login</h2>
//       <form onSubmit={handleLogin}>
//         <input type="email" placeholder="Student Email" value={email} onChange={e => setEmail(e.target.value)} />
//         <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default StudentLogin;



// teachersdashboard:

// import React from 'react';

// const TeacherDashboard = () => {
//   return (
//     <div className="teacher-dashboard">
//       <h2>🕒 Teacher Dashboard</h2>
//       <p>View time tables and manage classes here.</p>
//     </div>
//   );
// };

// export default TeacherDashboard;




// teacherslogin:



// import React, { useState } from 'react';

// const TeachersLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // You can add real teacher login logic here
//     alert('Teacher login successful (mock)');
//   };

//   return (
//     <div className="teacher-login-page">
//       <h2>Teacher Login</h2>
//       <form onSubmit={handleLogin}>
//         <input type="email" placeholder="Teacher Email" value={email} onChange={e => setEmail(e.target.value)} />
//         <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default TeachersLogin;


// import React, { useState } from 'react';

// const AddFaculty = () => {
//   const [formData, setFormData] = useState({
//     facultyName: '',
//     subjectName: '',
//     department: '',
//     qualification: '',
//     experience: '',
//     specialization: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // get existing list
//     const existing = JSON.parse(localStorage.getItem("facultyList")) || [];

//     // add new faculty
//     const updated = [...existing, formData];

//     // save to localStorage
//     localStorage.setItem("facultyList", JSON.stringify(updated));

//     // reset form
//     setFormData({
//       facultyName: '',
//       subjectName: '',
//       department: '',
//       qualification: '',
//       experience: '',
//       specialization: ''
//     });

//     alert("✅ Faculty added successfully!");
//   };

//   return (
//     <div className='add-faculty-page'>
//       <h1>🎓 Faculty Details</h1>
//       <p className="add-faculty-subtext">
//         Enter complete details of new faculty members to showcase on the school website.
//       </p>

//       <form className="add-faculty-form" onSubmit={handleSubmit}>
//         <h2 className="add-faculty-form-title">Faculty Details</h2>
//         <input name="facultyName" type="text" placeholder="Faculty's Name" value={formData.facultyName} onChange={handleChange} required />
//         <input name="subjectName" type="text" placeholder="Subject Name" value={formData.subjectName} onChange={handleChange} required />
//         <input name="department" type="text" placeholder="Department" value={formData.department} onChange={handleChange} required />
//         <input name="qualification" type="text" placeholder="Qualification" value={formData.qualification} onChange={handleChange} required />
//         <input name="experience" type="text" placeholder="Experience" value={formData.experience} onChange={handleChange} required />
//         <input name="specialization" type="text" placeholder="Specialization" value={formData.specialization} onChange={handleChange} />

//         <button type="submit">Add Faculty</button>
//       </form>
//     </div>
//   );
// };

// export default AddFaculty;





// authcontext.js:


// import { createContext, useContext, useEffect, useState } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null);

//   const login = async (email, password) => {
//     const res = await axios.post('/api/auth/login', { email, password });
//     localStorage.setItem('token', res.data.token);
//     setUser(email); // or res.data.user
//     setRole(res.data.role);
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//     setRole(null);
//   };

//   // ✅ Check localStorage on first load
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       // Optional: You can verify token from backend again here
//       // For now, restore role and user dummy
//       const savedRole = localStorage.getItem('role');
//       const savedUser = localStorage.getItem('user');
//       if (savedRole && savedUser) {
//         setUser(savedUser);
//         setRole(savedRole);
//       }
//     }
//   }, []);

//   // ✅ Also save role/user to localStorage
//   useEffect(() => {
//     if (user && role) {
//       localStorage.setItem('user', user);
//       localStorage.setItem('role', role);
//     }
//   }, [user, role]);

//   const value = { user, role, login, logout };
//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => useContext(AuthContext);


// Home.js


// import React from 'react';
// import { Link } from 'react-router-dom';
// import Toppers from './Toppers';
// import Why from './Why';
// import CampusLife from './CampusLife';
// // import Faculty from './Faculty';
// import Admission from './Admission';
// // import Enquiry from '../components/Enquiry';
// import Contact from './Contact';
// import Facilities from './Facilities';
// import StudentLogin from './StudentLogin';
// import TeachersLogin from './TeachersLogin';
// import StudentDashboard from './StudentDashboard';
// import TeacherDashboard from './TeacherDashboard';

// const Home = () => {

  
// const announcements = [
//   {
//     tag: 'Notice',
//     date: 'July 10, 2025',
//     title: 'Admissions Open for 2025-26',
//     desc: 'Applications are now open. Apply before August 15th to secure your seat.',
//   },
//   {
//     tag: 'Event',
//     date: 'July 18, 2025',
//     title: 'Annual Science Fair',
//     desc: 'Students will present exciting science projects. Parents are welcome!',
//   },
//   {
//     tag: 'Holiday',
//     date: 'August 15, 2025',
//     title: 'Independence Day Holiday',
//     desc: 'School will remain closed on account of Independence Day.',
//   },
// ];


//   return (
//     <div className="home">
//       <section className="hero">
//         <img className="school-img" src='sri chaitanya school.jpg' alt='img' />
//         <div className="img-text">
//           <h1>Welcome To Sri Gayathri School</h1>
//           <p>Empowering Young Minds for a Brighter Future</p>
//           <Link to='/admission' > <button className="admission-btn">Admissions Open 2025</button> </Link>
//         </div>
//       </section>




//       <section className="leaders">
//         <div className="leader-card">
//           <img src="/my--image.jpg" alt="Principal" />
//         </div>
//         <div className='leader-img-text'> 
//           <h3>Mr. Sai Surya</h3>
//           <p className='principal'>Principal</p>
//           <p className='leader-para'>He is the principal of the school who strongly believes in holistic development, academic excellence, and nurturing every child's potential with care and discipline. His leadership inspires both students and staff to reach their full potential.</p>
//         </div>
//       </section>




//     <StudentLogin />
//     <StudentDashboard />
//     <TeachersLogin />
//     <TeacherDashboard />



      

//     <section className="announcements-section">
//       <h2 className="announce-title">📢 Latest Announcements</h2>
//       <div className="announce-cards">
//         {announcements.map((item, index) => (
//           <div key={index} className="announce-card">
//             <div className="announce-top">
//               <span className={`tag ${item.tag.toLowerCase()}`}>{item.tag}</span>
//               <span className="date">{item.date}</span>
//             </div>
//             <h3>{item.title}</h3>
//             <p>{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
  

 
       


//       <Why />

//       <Toppers />

//       <Facilities />

//       <Admission />

//       <CampusLife />

//       <Contact />



      

//     </div>
//   );
// };

// export default Home;







// backend  :


// models/faculty.js

// const mongoose = require('mongoose');

// const facultySchema = new mongoose.Schema({
//   name: String,
//   subject: String,
//   department: String,
//   qualification: String,
//   experience: String,
//   specialization: String
// });

// module.exports = mongoose.model('Faculty', facultySchema);



// models/User.js

// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   role: { type: String, enum: ['principal', 'teacher', 'student'], required: true }
// });

// module.exports = mongoose.model('User', userSchema);



// routes/auth.js:


// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// // Register
// router.post('/register', async (req, res) => {
//   const { name, email, password, role } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ name, email, password: hashedPassword, role });
//     await user.save();
//     res.json({ success: true });
//   } catch (err) {
//     res.status(400).json({ error: 'User already exists' });
//   }
// });

// // Login
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ error: 'Invalid email' });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ error: 'Invalid password' });

//     const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET);
//     res.json({ token, role: user.role });
//   } catch (err) {
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// module.exports = router;



// faculty.js:


// const mongoose = require('mongoose');

// const facultySchema = new mongoose.Schema({
//   name: String,
//   subject: String,
//   department: String,
//   qualification: String,
//   experience: String,
//   specialization: String
// });

// module.exports = mongoose.model('Faculty', facultySchema);



// .env:


// EMAIL_USER=saisuryakorada2003@gmail.com 
// EMAIL_PASS=fobchbvjcafwvntu
// MONGO_URI=mongodb+srv://surya:korada2003@cluster0.tvs6lrd.mongodb.net/school?retryWrites=true&w=majority
// JWT_SECRET=supersecret123



// server.js:

//   const express = require('express');
//   const cors = require('cors');
//   const nodemailer = require('nodemailer');
//   const mongoose = require('mongoose');

//   require('dotenv').config();

//   const app = express();

//   // ✅ CORS allowed domains
//  const allowedOrigins = [
//   'https://gayatri-website.vercel.app', // ✅ This must be here
//   'http://localhost:3000',
//   'https://gayatri-frontend.onrender.com',
//   'https://gayathri-website-tuni.vercel.app'
// ];



//   // ✅ CORS Middleware
//  // ✅ CORS Middleware
// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       console.error("❌ Blocked by CORS:", origin);
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   methods: ['GET', 'POST'],
//   credentials: true,
//   optionsSuccessStatus: 200  // ✅ FIX: Helps avoid some CORS preflight errors
// }));


//   app.use(express.json());



//   mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('✅ Connected to MongoDB'))
//   .catch(err => console.error('❌ MongoDB error:', err));

// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/faculty', require('./routes/faculty'));




//   // 💌 Contact Form API
//   app.post('/send-message', async (req, res) => {
//     const { name, email, message } = req.body;
//     console.log("📥 Contact form data received:", req.body);

//     try {
//       const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: process.env.EMAIL_USER,
//           pass: process.env.EMAIL_PASS,
//         },
//       });

//       const mailOptions = {
//         from: process.env.EMAIL_USER, // safer than using user email
//         to: process.env.EMAIL_USER,
//         subject: `New Message from ${name}`,
//         html: `
//           <h2>New Message from Website</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Message:</strong> ${message}</p>
//         `
//       };

//       await transporter.sendMail(mailOptions);
//       console.log("✅ Contact Email sent!");
//       res.json({ success: true, message: 'Message sent successfully!' });
//     } catch (err) {
//       console.error("❌ Contact form error:", err);
//       res.status(500).json({ success: false, message: 'Failed to send message.' });
//     }
//   });

//   // 🎓 Admission Form API
//   app.post('/admission-form', async (req, res) => {
//     const { studentName, parentName, className, phone, email, message } = req.body;
//     console.log("📩 Admission form received:", req.body);

//     try {
//       const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: process.env.EMAIL_USER,
//           pass: process.env.EMAIL_PASS,
//         },
//       });

//       const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: process.env.EMAIL_USER,
//         subject: `🎓 New Admission Request from ${parentName}`,
//         html: `
//           <h2>📋 Admission Form Details</h2>
//           <p><strong>Student's Name:</strong> ${studentName}</p>
//           <p><strong>Parent's Name:</strong> ${parentName}</p>
//           <p><strong>Class Applying For:</strong> ${className}</p>
//           <p><strong>Phone:</strong> ${phone}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Message:</strong> ${message}</p>
//         `
//       };

//       await transporter.sendMail(mailOptions);
//       console.log("✅ Admission Email sent!");
//       res.json({ success: true, message: 'Admission form submitted successfully!' });
//     } catch (err) {
//       console.error("❌ Admission form error:", err);
//       res.status(500).json({ success: false, message: 'Failed to send form. Try again later.' });
//     }
//   });

//   // 🌍 Root route
//   app.get('/', (req, res) => {
//     res.send("🚀 Gayatri Website Backend is Live!");
//   });

//   // 🛡️ Start server
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => {
//     console.log(`✅ Server running on http://localhost:${PORT}`);
//   });




