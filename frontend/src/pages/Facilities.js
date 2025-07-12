import React from 'react';

const Facilities= () => {
  return (
    <section className="facilities3-section">
        
      <h1 className="facilities3-title">🏫 Our School Facilities</h1>

      <div className="facilities3-grid">
        <div className="facility-card">
          <div className="card-inner">
            <div className="card-front">
              <img src='library-3d.png' alt='library' className="facility-icon"/>  
              <h3>Library</h3>
            </div>
            <div className="card-back">
              A peaceful space filled with thousands of books to explore and learn.
            </div>
          </div>
        </div>

        <div className="facility-card">
          <div className="card-inner">
            <div className="card-front">
              <img src='computer-3d.png' alt='library' className="facility-icon"/>  
              <h3>Computer Lab</h3>
            </div>
            <div className="card-back">
              Advanced systems for practical exposure to programming and technology.
            </div>
          </div>
        </div>

        <div className="facility-card">
          <div className="card-inner">
            <div className="card-front">
              <img src='lab-3d.png' alt='library' className="facility-icon"/>  
              <h3>Science Labs</h3>
            </div>
            <div className="card-back">
              Fully equipped Physics, Chemistry, and Biology labs for hands-on experiments.
            </div>
          </div>
        </div>

        <div className="facility-card">
          <div className="card-inner">
            <div className="card-front">
             <img src='bus-3d.png' alt='library' className="facility-icon"/>  
              <h3>Transport</h3>
            </div>
            <div className="card-back">
              Safe and reliable GPS-enabled transport with experienced staff.
            </div>
          </div>
        </div>

        <div className="facility-card">
          <div className="card-inner">
            <div className="card-front">
             <img src='basketball-3d.png' alt='library' className="facility-icon"/>  
              <h3>Sports</h3>
            </div>
            <div className="card-back">
              Dedicated play areas for cricket, basketball, yoga, and indoor games.
            </div>
          </div>
        </div>

        <div className="facility-card">
          <div className="card-inner">
            <div className="card-front">
              <img src='digital-3d.png' alt='library' className="facility-icon"/>  
              <h3>Smart Classrooms</h3>
            </div>
            <div className="card-back">
              Digital learning experience with smart boards and interactive teaching.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;



