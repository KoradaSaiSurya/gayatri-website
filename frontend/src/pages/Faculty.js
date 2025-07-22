import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Faculty = () => {
  const [facultyList, setFacultyList] = useState([]);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const res = await axios.get('https://gayatri-backend.onrender.com/api/faculty/all');
        setFacultyList(res.data);
      } catch (error) {
        console.error('Error fetching faculty data:', error);
      }
    };

    fetchFaculty();
  }, []);

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




