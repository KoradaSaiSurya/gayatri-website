import React from 'react';

const facultyData = [
  {
    name: "Mr. Rama Krishna",
    subject: "Mathematics",
    department: "Senior Faculty",
    qualification: "M.Sc, B.Ed",
    experience: "12 Years",
    specialization: "Algebra & Geometry"
  },
  {
    name: "Ms. Sravani Devi",
    subject: "Science",
    department: "Physics",
    qualification: "M.Sc, B.Ed",
    experience: "8 Years",
    specialization: "Mechanics & Experiments"
  },
  {
    name: "Mr. Naresh Babu",
    subject: "English",
    department: "Literature",
    qualification: "MA English, B.Ed",
    experience: "10 Years",
    specialization: "Grammar & Communication"
  },
  {
    name: "Mrs. Haritha",
    subject: "Social Studies",
    department: "History",
    qualification: "MA History, B.Ed",
    experience: "9 Years",
    specialization: "Civics & Indian History"
  },
  {
    name: "Mr. Rama Krishna",
    subject: "Mathematics",
    department: "Senior Faculty",
    qualification: "M.Sc, B.Ed",
    experience: "12 Years",
    specialization: "Algebra & Geometry"
  },
  {
    name: "Ms. Sravani Devi",
    subject: "Science",
    department: "Physics",
    qualification: "M.Sc, B.Ed",
    experience: "8 Years",
    specialization: "Mechanics & Experiments"
  },
  {
    name: "Mr. Naresh Babu",
    subject: "English",
    department: "Literature",
    qualification: "MA English, B.Ed",
    experience: "10 Years",
    specialization: "Grammar & Communication"
  },
  {
    name: "Mrs. Haritha",
    subject: "Social Studies",
    department: "History",
    qualification: "MA History, B.Ed",
    experience: "9 Years",
    specialization: "Civics & Indian History"
  }
];

const Faculty = () => {
 return (
  <div className="faculty-table-page">
    <h1 className="faculty-title">🎓 Meet Our Faculty</h1>
    <p className="faculty-subtext">Highly qualified, experienced & passionate educators who shape the future.</p>

    <div className="faculty-table-container">
      <div className="faculty-row faculty-header">
        <div>Name</div>
        <div>Subject</div>
        <div>Department</div>
        <div>Qualification</div>
        <div>Experience</div>
        <div>Specialization</div>
      </div>

      {facultyData.map((f, index) => (
        <div className="faculty-row" key={index}>
          <div>{f.name}</div>
          <div>{f.subject}</div>
          <div>{f.department}</div>
          <div>{f.qualification}</div>
          <div>{f.experience}</div>
          <div>{f.specialization}</div>
        </div>
      ))}
    </div>

    {/* Mobile view cards */}
    <div className="faculty-cards-mobile">
      {facultyData.map((f, index) => (
        <div className="faculty-card" key={index}>
          <h3>{f.name}</h3>
          <p><strong>Subject:</strong> {f.subject}</p>
          <p><strong>Department:</strong> {f.department}</p>
          <p><strong>Qualification:</strong> {f.qualification}</p>
          <p><strong>Experience:</strong> {f.experience}</p>
          <p><strong>Specialization:</strong> {f.specialization}</p>
        </div>
      ))}
    </div>
  </div>
);

};

export default Faculty;
