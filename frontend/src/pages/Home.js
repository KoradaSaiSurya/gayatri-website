import React from 'react';
import { Link } from 'react-router-dom';
import Toppers from './Toppers';
import Why from './Why';
import CampusLife from './CampusLife';
// import Faculty from './Faculty';
import Admission from './Admission';
// import Enquiry from '../components/Enquiry';
import Contact from './Contact';
import Facilities from './Facilities';

const Home = () => {

  
const announcements = [
  {
    tag: 'Notice',
    date: 'July 10, 2025',
    title: 'Admissions Open for 2025-26',
    desc: 'Applications are now open. Apply before August 15th to secure your seat.',
  },
  {
    tag: 'Event',
    date: 'July 18, 2025',
    title: 'Annual Science Fair',
    desc: 'Students will present exciting science projects. Parents are welcome!',
  },
  {
    tag: 'Holiday',
    date: 'August 15, 2025',
    title: 'Independence Day Holiday',
    desc: 'School will remain closed on account of Independence Day.',
  },
];


  return (
    <div className="home">
      <section className="hero">
        <img className="school-img" src='sri chaitanya school.jpg' alt='img' />
        <div className="img-text">
          <h1>Welcome To Sri Gayathri School</h1>
          <p>Empowering Young Minds for a Brighter Future</p>
          <Link to='/admission' > <button className="admission-btn">Admissions Open 2025</button> </Link>
        </div>
      </section>




      <section className="leaders">
        <div className="leader-card">
          <img src="/my--image.jpg" alt="Principal" />
        </div>
        <div className='leader-img-text'> 
          <h3>Mr. Sai Surya</h3>
          <p className='principal'>Principal</p>
          <p className='leader-para'>He is the principal of the school who strongly believes in holistic development, academic excellence, and nurturing every child's potential with care and discipline. His leadership inspires both students and staff to reach their full potential.</p>
        </div>
      </section>





      

    <section className="announcements-section">
      <h2 className="announce-title">📢 Latest Announcements</h2>
      <div className="announce-cards">
        {announcements.map((item, index) => (
          <div key={index} className="announce-card">
            <div className="announce-top">
              <span className={`tag ${item.tag.toLowerCase()}`}>{item.tag}</span>
              <span className="date">{item.date}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  

 
       


      <Why />

      <Toppers />

      <Facilities />

      <Admission />

      <CampusLife />

      <Contact />



      

    </div>
  );
};

export default Home;
