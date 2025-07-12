import React from 'react';

const features = [
  {
    icon1: 'faculty-3d.png',
    title: 'Expert Faculty',
    desc: "Experienced, qualified, and passionate teachers guiding every step of your child's journey.",
  },
  {
    icon2: 'lab-3d.png',
    title: 'Modern Labs',
    desc: 'Well-equipped Science and Computer labs to enhance hands-on learning and innovation.',
  },
  {
    icon3: 'basketball-3d.png',
    title: 'Sports & Activities',
    desc: 'From cricket to chess, we support holistic development through diverse extracurriculars.',
  },
  {
    icon4: 'campus-3d.png',
    title: 'Safe Campus',
    desc: '24/7 surveillance, discipline, and hygiene ensure a safe and secure environment for kids.',
  },
];

const Why = () => {
  return (
    <section className="why-choose-section">
      <div className='why'> 
      <h2 className="why-title">🌟 Why Choose Our School?</h2>
      <p className="why-subtext">
        Our mission is to provide quality education that empowers students to succeed in all walks of life.
      </p>

      {features.map((item, index) => (
  <div className={`why-row ${index % 2 === 0 ? 'row-normal' : 'row-reverse'}`} key={index}>
    <div className="why-icon">
      <img src={`/${item.icon1 || item.icon2 || item.icon3 || item.icon4}`} alt="icon" className="why-img" />
    </div>
    <div className="why-text">
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  </div>
))}

      </div>
    </section>
  );
};

export default Why;
