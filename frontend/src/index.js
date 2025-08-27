import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// frontend------


// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Gallery from './pages/Gallery'
// import Sports from './pages/Sports'
// import Footer from './pages/Footer'
// import Admission from './pages/Admission'
// import Faculty from './pages/Faculty'
// import Login from './components/Login'
// import Dashboard from './components/Dashboard'
// import PrivateRoute from './components/PrivateRoute'
// import { AuthProvider } from './context/AuthContext'
// import FacultyPage from './pages/FacultyPage'



// const App = () => {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='/gallery' element={<Gallery />} />
//           <Route path='/sports' element={<Sports />} />
//           <Route path='/admission' element={<Admission />} />
//           <Route path='/login' element={<Login />} />
//           <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />

//          <Route path='/faculty' element={<Faculty />} />
//          <Route path="/facultyPage" element={<FacultyPage />} />



//           <Route path='/faculty/add' element={
//             <PrivateRoute>
//               <FacultyPage />
//             </PrivateRoute>
//           } />


//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </AuthProvider>
//   )
// }

// export default App


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );




// import React, { useState , useEffect} from 'react';
// import axios from 'axios';

// function Admission() {
//     const [alertMsg, setAlertMsg] = useState('');
//     const [alertType, setAlertType] = useState(''); // 'success' or 'error'

//   const [form, setForm] = useState({
//     studentName: '',
//     parentName: '',
//     className: '',
//     phone: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//    useEffect(() => {
//         if (alertMsg) {
//             const timer = setTimeout(() => {
//             setAlertMsg('');
//             setAlertType('');
//             }, 5000); // 3 seconds lo hide avuthundhi

//             return () => clearTimeout(timer); // cleanup
//         }
//         }, [alertMsg]);


// const handleSubmit = async (e) => {
//   e.preventDefault();

//   // 1️⃣ Immediate feedback
//   setAlertMsg("Submitting admission form...");
//   setAlertType("info");

//   try {
//     // 2️⃣ Send data to backend
//    const res =await axios.post('https://gayatri-backend.onrender.com/admission-form', form);

//     // 3️⃣ On success, update message
//     setAlertMsg(res.data.message );
//     setAlertType("success");

//     // 4️⃣ Clear the form
//     setForm({
//       studentName: '',
//       parentName: '',
//       className: '',
//       phone: '',
//       email: '',
//       message: ''
//     });

//   } catch (err) {
//     // 5️⃣ If error occurs    
//     console.log("AXIOS ERROR:", err);
//     setAlertMsg("❌ Something went wrong! Please try again.");
//     setAlertType("error");
//   }
// };



//   return (

//     <div className="admission-page">

//                 {alertMsg && (
//             <div className={
//                 alertType === 'success'
//                 ? 'alert-success'
//                 : alertType === 'error'
//                 ? 'alert-error'
//                 : 'alert-submitting' // for info
//             }>
//                 {alertType === 'info' && <span className="loader"></span>}
//                 {alertMsg}
//             </div>
//             )}


        


//        <h1>🎓 Admissions Open for 2025</h1>
//       <p className="admission-subtext">
//   Unlock your child's full potential at <strong>Sri Gayathri High School</strong> – where academic brilliance meets innovation and care.
//   <br />
//   Join us for the 2025 admissions season and be a part of our growing legacy of excellence.
// </p>


//       <form className="admission-form" onSubmit={handleSubmit}>
//          <h2 className="form-title">🧑‍🎓 Student Admission Form</h2>
//         <input name="studentName" type="text" placeholder="Student's Name" required  value={form.studentName} onChange={handleChange} />
//         <input name="parentName" type="text" placeholder="Parent's Name" required  value={form.parentName} onChange={handleChange} />
//         <input name="className" type="text" placeholder="Class Applying For" required  value={form.className} onChange={handleChange} />
//         <input name="phone" type="tel" placeholder="Parent's Phone Number" required  value={form.phone} onChange={handleChange} />
//         <input name="email" type="email" placeholder="Parent's Email" required  value={form.email} onChange={handleChange} />
//         <textarea name="message" placeholder="Additional Message (optional)" rows="4"  value={form.message} onChange={handleChange}></textarea>
//         <button type="submit">Submit Admission Form</button>
//       </form>

      

//     </div>
//   );
// }

// export default Admission;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Maps from './Maps';

// function Contact() {

//       const [alertMsg, setAlertMsg] = useState('');
//       const [alertType, setAlertType] = useState(''); // 'success' or 'error'
  
//   const [form, setForm] = useState({ name: '', email: '', message: '' });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//         useEffect(() => {
//              if (alertMsg) {
//                  const timer = setTimeout(() => {
//                  setAlertMsg('');
//                  setAlertType('');
//                  }, 5000); // 3 seconds lo hide avuthundhi
     
//                  return () => clearTimeout(timer); // cleanup
//              }
//              }, [alertMsg]);

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   setAlertMsg("Submitting your message...");
//   setAlertType("info");

//   try {
//     const res = await axios.post('https://gayatri-backend.onrender.com/send-message', form);

//     setAlertMsg(res.data.message);
//     setAlertType("success");

//     // ✅ Correct reset fields (only name, email, message)
//     setForm({
//       name: '',
//       email: '',
//       message: ''
//     });

//   } catch (err) {
//     console.log("AXIOS ERROR:", err);
//     setAlertMsg("❌ Something went wrong! Please try again.");
//     setAlertType("error");
//   }
// };

  
//   return (
//     <div className='about'> 
//     <div className="contact-page">

//          {alertMsg && (
//             <div className={
//                 alertType === 'success'
//                 ? 'alert-success'
//                 : alertType === 'error'
//                 ? 'alert-error'
//                 : 'alert-submitting' // for info
//             }>
//                 {alertType === 'info' && <span className="loader"></span>}
//                 {alertMsg}
//             </div>
//             )}


//       <h1>🤝   Reach Out to Us </h1>

//       <div className="contact-container">
//         {/* Contact Details */}
//         <div className="contact-info">
//           {/* <h2>Reach Out</h2> */}
//           <p>📍 D.No: 5-6-89, Main Road, Vijayawada, AP</p>
//           <p>📞 +91 98765 43210</p>
//           <p>📧 schoolgayathri@gmail.com</p>
//           <p>🕒 Mon - Sat: 9 AM - 4 PM</p>
//         </div>

//         {/* Contact Forrm */}
//               <form className="contact-form" onSubmit={handleSubmit}>
//         <h2>Send a Message</h2>

//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="message"
//           placeholder="Your Message"
//           rows="5"
//           value={form.message}
//           onChange={handleChange}
//           required
//         ></textarea>

//         <button type="submit">Send Message</button>
//       </form>

//             </div>
//           </div>

//           <Maps />
//           </div>
//         );
//       };

// export default Contact;





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



// import React, { useState } from 'react';

// const AddFaculty = () => {
//   const [formData, setFormData] = useState({
//     facultyName: '',
//     subjectName: '',
//     qualification: '',
//     experience: '',
//   });

//   const [alertMsg, setAlertMsg] = useState('');
//   const [alertType, setAlertType] = useState(''); // 'success' or 'error'

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const existing = JSON.parse(localStorage.getItem("facultyList")) || [];
//     const updated = [...existing, formData];
//     localStorage.setItem("facultyList", JSON.stringify(updated));

//     setFormData({
//       facultyName: '',
//       subjectName: '',
//       qualification: '',
//       experience: '',
//     });

//     // Show alert
//     setAlertType('success');
//     setAlertMsg(' Faculty added successfully!');

//     // Remove alert after 3 sec
//     setTimeout(() => {
//       setAlertMsg('');
//       setAlertType('');
//     }, 3000);
//   };

//   return (
//     <div className='add-faculty-page'>
//       <h1>🎓 Faculty Details</h1>
//       <p className="add-faculty-subtext">
//         Enter complete details of new faculty members to showcase on the school website.
//       </p>

//       {/*  Alert Box */}
//       {alertMsg && (
//         <div
//           className={
//             alertType === 'success'
//               ? 'alert-success'
//               : alertType === 'error'
//               ? 'alert-error'
//               : 'alert-submitting'
//           }
//         >
//           {alertType === 'info' && <span className="loader"></span>}
//           {alertMsg}
//         </div>
//       )}

//       <form className="add-faculty-form" onSubmit={handleSubmit}>
//         <input name="facultyName" type="text" placeholder="Faculty's Name" value={formData.facultyName} onChange={handleChange} required />
//         <input name="subjectName" type="text" placeholder="Subject Name" value={formData.subjectName} onChange={handleChange} required />
//         <input name="qualification" type="text" placeholder="Qualification" value={formData.qualification} onChange={handleChange} required />
//         <input name="experience" type="text" placeholder="Experience" value={formData.experience} onChange={handleChange} required />

//         <button type="submit">Add Faculty</button>
//       </form>
//     </div>
//   );
// };

// export default AddFaculty;




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



// import React, { useContext } from 'react'
// import { Navigate } from 'react-router-dom'
// import { AuthContext } from '../context/AuthContext'

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext)

//   if (loading) return <p>Loading...</p>

//   return user?.username === 'admin' ? children : <Navigate to="/login" />
// }

// export default PrivateRoute


// import React, { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// function Dashboard() {
//   const { user, setUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("username");
//     console.log("user in dashboard:", user);

//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <div className="form-box">
//       <h2>Welcome {user?.username} 🎉</h2>
//       <p>This is your protected dashboard page</p>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }

// export default Dashboard;



//   import React, { createContext, useState, useEffect } from "react";

//   export const AuthContext = createContext();

//   export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true); 

//     useEffect(() => {
//   const token = localStorage.getItem("token");
//   const username = localStorage.getItem("username");
//   const email = localStorage.getItem("email");

//   if (token && username && email) {
//     setUser({ token, username, email });
//   }

//   setLoading(false);
// }, []);
// useEffect(() => {
//       const token = localStorage.getItem("token");
//       const username = localStorage.getItem("username");
//       if (token && username) {
//         setUser({ username, token });
//       }
//       setLoading(false);
//     }, []);

//     return (
//       <AuthContext.Provider value={{ user, setUser, loading }}>
//         {children}
//       </AuthContext.Provider>
//     );
//   };


  
