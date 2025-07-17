import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import AddFaculty from '../components/AddFaculty';


const Faculty2 = () => {
  const [facultyList, setFacultyList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedFaculty, setEditedFaculty] = useState({});
  const [showAddForm, setShowAddForm] = useState(false); // ✅ toggling form

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("facultyList")) || [];
    setFacultyList(storedData);
  }, []);

  const handleDelete = (index) => {
    const updated = [...facultyList];
    updated.splice(index, 1);
    setFacultyList(updated);
    localStorage.setItem("facultyList", JSON.stringify(updated));
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditedFaculty({ ...facultyList[index] });
  };

  const handleInputChange = (e) => {
    setEditedFaculty({ ...editedFaculty, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const updated = [...facultyList];
    updated[editIndex] = editedFaculty;
    setFacultyList(updated);
    localStorage.setItem("facultyList", JSON.stringify(updated));
    setEditIndex(null);
  };

  // 🔥 toggle function
  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div className="faculty2-table-page">
      {/* <h1 className="faculty2-title">🎓 Meet Our Faculty</h1> */}
      {/* <p className="faculty2-subtext">Highly qualified, experienced & passionate educators who shape the future.</p> */}

      <div className="faculty2-table-container">
        <div className="faculty2-row faculty-header">
          <div style={{fontSize:"13px"}} >Name</div>
          <div style={{fontSize:"13px"}}>Subject</div>
          <div style={{fontSize:"13px"}}>Qualification</div>
          <div style={{fontSize:"13px"}}>Experience</div>
          <div style={{fontSize:"13px"}}>Actions</div>
        </div>

        {facultyList.map((f, index) => (
          <div className="faculty2-row" key={index}>
            {editIndex === index ? (
              <>
                <div><input name="facultyName" value={editedFaculty.facultyName} onChange={handleInputChange} /></div>
                <div><input name="subjectName" value={editedFaculty.subjectName} onChange={handleInputChange} /></div>
                <div><input name="qualification" value={editedFaculty.qualification} onChange={handleInputChange} /></div>
                <div><input name="experience" value={editedFaculty.experience} onChange={handleInputChange} /></div>
                <div><button onClick={handleSave} className="save-btn">Save</button></div>
              </>
            ) : (
              <>
                <div>{f.facultyName}</div>
                <div>{f.subjectName}</div>
                <div>{f.qualification}</div>
                <div>{f.experience}</div>
                <div className="action-icons">
                  <FaEdit className="edit-icon" onClick={() => handleEditClick(index)} />
                  <FaTrash className="delete-icon" onClick={() => handleDelete(index)} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      

      {/* ✅ show AddFaculty if toggled */}
      {showAddForm && <AddFaculty />}
    </div>
  );
};

export default Faculty2;
