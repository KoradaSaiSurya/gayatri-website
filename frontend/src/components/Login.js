import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


const adminEmail = "admin@gayathri.com"; // 👈 your choice

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", form);

    if (res.data.email !== adminEmail) {
      return setMsg("Only admin can login!");
    }

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("username", res.data.username);
    localStorage.setItem("email", res.data.email); // 👈 store email too
    setUser({ username: res.data.username, token: res.data.token, email: res.data.email });

    localStorage.setItem("isFacultyAdmin", "true"); // 👈 persist session
// navigate("/faculty/add");

  } catch (err) {
    setMsg(err.response.data.msg);
  }
};


  return (
    <div className="form-box">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}

export default Login;
