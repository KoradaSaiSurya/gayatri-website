import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Maps from './Maps';

function Contact() {

      const [alertMsg, setAlertMsg] = useState('');
      const [alertType, setAlertType] = useState(''); // 'success' or 'error'
  
  const [form, setForm] = useState({ name: '', email: '', message: '' });

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
  setAlertMsg("Sending message to Principal...");
  setAlertType("info");

  try {
    const res = await axios.post('https://gayatri-backend.onrender.com/send-message', form);





     setAlertMsg(res.data.message );
    setAlertType("success");

    setForm({name:'', email: '', message: ''});
  } catch (err) {
    setAlertMsg("❌ Something went wrong! Please try again.");
    setAlertType("error");
  }
};
;
  
  return (
    <div className='about'> 
    <div className="contact-page">

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


      <h1>🤝   Reach Out to Us </h1>

      <div className="contact-container">
        {/* Contact Details */}
        <div className="contact-info">
          {/* <h2>Reach Out</h2> */}
          <p>📍 D.No: 5-6-89, Main Road, Vijayawada, AP</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 schoolgayathri@gmail.com</p>
          <p>🕒 Mon - Sat: 9 AM - 4 PM</p>
        </div>

        {/* Contact Form */}
              <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send a Message</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

            </div>
          </div>

          <Maps />
          </div>
        );
      };

export default Contact;
