import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Faculty2 from './Faculty2';
import AddFaculty from '../components/AddFaculty';

const FacultyPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isFacultyAdmin");
    if (!isAdmin) {
      navigate('/login');
    }
  }, []);

    return (
        <div className="faculty-page-container">
        <div className="faculty-left">
            <AddFaculty />
        </div>
        <div className="faculty-right">
            <Faculty2 />
        </div>
        </div>
    );
    };

    export default FacultyPage;
