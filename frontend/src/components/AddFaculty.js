import React, { useState } from 'react';

const AddFaculty = () => {
  const [formData, setFormData] = useState({
    facultyName: '',
    subjectName: '',
    qualification: '',
    experience: '',
  });

  const [alertMsg, setAlertMsg] = useState('');
  const [alertType, setAlertType] = useState(''); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("facultyList")) || [];
    const updated = [...existing, formData];
    localStorage.setItem("facultyList", JSON.stringify(updated));

    setFormData({
      facultyName: '',
      subjectName: '',
      qualification: '',
      experience: '',
    });

    // Show alert
    setAlertType('success');
    setAlertMsg(' Faculty added successfully!');

    // Remove alert after 3 sec
    setTimeout(() => {
      setAlertMsg('');
      setAlertType('');
    }, 3000);
  };

  return (
    <div className='add-faculty-page'>
      <h1>🎓 Faculty Details</h1>
      <p className="add-faculty-subtext">
        Enter complete details of new faculty members to showcase on the school website.
      </p>

      {/*  Alert Box */}
      {alertMsg && (
        <div
          className={
            alertType === 'success'
              ? 'alert-success'
              : alertType === 'error'
              ? 'alert-error'
              : 'alert-submitting'
          }
        >
          {alertType === 'info' && <span className="loader"></span>}
          {alertMsg}
        </div>
      )}

      <form className="add-faculty-form" onSubmit={handleSubmit}>
        <input name="facultyName" type="text" placeholder="Faculty's Name" value={formData.facultyName} onChange={handleChange} required />
        <input name="subjectName" type="text" placeholder="Subject Name" value={formData.subjectName} onChange={handleChange} required />
        <input name="qualification" type="text" placeholder="Qualification" value={formData.qualification} onChange={handleChange} required />
        <input name="experience" type="text" placeholder="Experience" value={formData.experience} onChange={handleChange} required />

        <button type="submit">Add Faculty</button>
      </form>
    </div>
  );
};

export default AddFaculty;


