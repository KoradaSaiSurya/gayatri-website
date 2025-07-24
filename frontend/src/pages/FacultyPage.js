

import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Faculty2 from './Faculty2';
import AddFaculty from '../components/AddFaculty';

const FacultyPage = () => {
  const navigate = useNavigate();

 useEffect(() => {
  const isAdmin = localStorage.getItem("isFacultyAdmin");
  
  const timeout = setTimeout(() => {
    if (!isAdmin) {
      navigate('/login');
    }
  }, 0);

  return () => clearTimeout(timeout);
}, [navigate]);



  return (
    <div className="faculty-page-container">
      <div className="faculty-left">
        <AddFaculty />
      </div>
      <div className="faculty-right">
        <Faculty2 />
      </div>

      {/* 👇 Back Button Section */}
      <div className="back-button-container">
        <Link to="/faculty" className="back-button">
          ← Back
        </Link>
      </div>
    </div>
  );
};

export default FacultyPage;

