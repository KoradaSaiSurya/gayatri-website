import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    console.log("user in dashboard:", user);

    setUser(null);
    navigate("/login");
  };

  return (
    <div className="form-box">
      <h2>Welcome {user?.username} 🎉</h2>
      <p>This is your protected dashboard page</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;

