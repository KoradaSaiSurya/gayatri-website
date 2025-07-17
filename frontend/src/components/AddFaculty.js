import React, { useState } from 'react';

const AddFaculty = () => {
  const [formData, setFormData] = useState({
    facultyName: '',
    subjectName: '',
    // department: '',
    qualification: '',
    experience: '',
    // specialization: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    

    // get existing list
    const existing = JSON.parse(localStorage.getItem("facultyList")) || [];

    // add new faculty
    const updated = [...existing, formData];

    // save to localStorage
    localStorage.setItem("facultyList", JSON.stringify(updated));

    // reset form
    setFormData({
      facultyName: '',
      subjectName: '',
      // department: '',
      qualification: '',
      experience: '',
      // specialization: ''
    });

    alert("✅ Faculty added successfully!");
  };

  return (
    <div className='add-faculty-page'>
      <h1>🎓 Faculty Details</h1>
      <p className="add-faculty-subtext">
        Enter complete details of new faculty members to showcase on the school website.
      </p>

      <form className="add-faculty-form" onSubmit={handleSubmit}>
        {/* <h2 className="add-faculty-form-title">Faculty Details</h2> */}
        <input name="facultyName" type="text" placeholder="Faculty's Name" value={formData.facultyName} onChange={handleChange} required />
        <input name="subjectName" type="text" placeholder="Subject Name" value={formData.subjectName} onChange={handleChange} required />
        {/* <input name="department" type="text" placeholder="Department" value={formData.department} onChange={handleChange} required /> */}
        <input name="qualification" type="text" placeholder="Qualification" value={formData.qualification} onChange={handleChange} required />
        <input name="experience" type="text" placeholder="Experience" value={formData.experience} onChange={handleChange} required />
        {/* <input name="specialization" type="text" placeholder="Specialization" value={formData.specialization} onChange={handleChange} /> */}

        <button type="submit">Add Faculty</button>
      </form>
    </div>
  );
};

export default AddFaculty;
