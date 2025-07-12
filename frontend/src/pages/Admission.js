import React, { useState , useEffect} from 'react';
import axios from 'axios';

function Admission() {
    const [alertMsg, setAlertMsg] = useState('');
    const [alertType, setAlertType] = useState(''); // 'success' or 'error'

  const [form, setForm] = useState({
    studentName: '',
    parentName: '',
    className: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

   useEffect(() => {
        if (alertMsg) {
            const timer = setTimeout(() => {
            setAlertMsg('');
            setAlertType('');
            }, 5000); // 3 seconds lo hide avuthundhi

            return () => clearTimeout(timer); // cleanup
        }
        }, [alertMsg]);


const handleSubmit = async (e) => {
  e.preventDefault();

  // 1️⃣ Immediate feedback
  setAlertMsg("Submitting admission form...");
  setAlertType("info");

  try {
    // 2️⃣ Send data to backend
    const res = await axios.post('http://localhost:5000/admission-form', form);

    // 3️⃣ On success, update message
    setAlertMsg(res.data.message );
    setAlertType("success");

    // 4️⃣ Clear the form
    setForm({
      studentName: '',
      parentName: '',
      className: '',
      phone: '',
      email: '',
      message: ''
    });

  } catch (err) {
    // 5️⃣ If error occurs    
    setAlertMsg("❌ Something went wrong! Please try again.");
    setAlertType("error");
  }
};



  return (

    <div className="admission-page">

                {alertMsg && (
            <div className={
                alertType === 'success'
                ? 'alert-success'
                : alertType === 'error'
                ? 'alert-error'
                : 'alert-submitting' // for info
            }>
                {alertType === 'info' && <span className="loader"></span>}
                {alertMsg}
            </div>
            )}


        


       <h1>🎓 Admissions Open for 2025</h1>
      <p className="admission-subtext">
  Unlock your child's full potential at <strong>Sri Gayathri High School</strong> – where academic brilliance meets innovation and care.
  <br />
  Join us for the 2025 admissions season and be a part of our growing legacy of excellence.
</p>


      <form className="admission-form" onSubmit={handleSubmit}>
         <h2 className="form-title">🧑‍🎓 Student Admission Form</h2>
        <input name="studentName" type="text" placeholder="Student's Name" required  value={form.studentName} onChange={handleChange} />
        <input name="parentName" type="text" placeholder="Parent's Name" required  value={form.parentName} onChange={handleChange} />
        <input name="className" type="text" placeholder="Class Applying For" required  value={form.className} onChange={handleChange} />
        <input name="phone" type="tel" placeholder="Parent's Phone Number" required  value={form.phone} onChange={handleChange} />
        <input name="email" type="email" placeholder="Parent's Email" required  value={form.email} onChange={handleChange} />
        <textarea name="message" placeholder="Additional Message (optional)" rows="4"  value={form.message} onChange={handleChange}></textarea>
        <button type="submit">Submit Admission Form</button>
      </form>

      

    </div>
  );
}

export default Admission;



