import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Register() {
  const [user, setUser] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  
const navigate = useNavigate()

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("User sending to backend 👇", user); // ✅ log this

  try {
    const res = await axios.post("http://localhost:5000/api/auth/register", user);
    setMessage(res.data.msg);
    setUser({ username: '', email: '', password: '' });

    setTimeout(() => {
      navigate("/login");
    }, 1000);

  } catch (err) {
    console.log("Register error 👉", err.response?.data);
    setMessage(err.response?.data?.msg || "Server error");
  }
};


  

  return (
    <div className="form-box">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
  <input
    type="text"
    name="username"         // ✅ Must be "username"
    placeholder="Username"
    value={user.username}
    onChange={handleChange}
  />
  <input
    type="email"
    name="email"
    placeholder="Email"
    value={user.email}
    onChange={handleChange}
  />
  <input
    type="password"
    name="password"
    placeholder="Password"
    value={user.password}
    onChange={handleChange}
  />
  <button type="submit">Register</button>
</form>

      {message && <p>{message}</p>}
      
    </div>
    
  );
}

export default Register;
