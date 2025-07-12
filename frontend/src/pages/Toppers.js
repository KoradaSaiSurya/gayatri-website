import React, { useState } from 'react';

const toppers = [
  {
    name: 'Sai Surya',
    image: 'my--image.jpg',
    gpa: '10/10',
    rank: '1st',
  },
  {
    name: 'Anusha Reddy',
    image: 'my--image.jpg',
    gpa: '9.8/10',
    rank: '2nd',
  },
  {
    name: 'Ravi Kumar',
    image: 'my--image.jpg',
    gpa: '9.7/10',
    rank: '3rd',
  },
  {
    name: 'Divya Sree',
    image: 'my--image.jpg',
    gpa: '9.6/10',
    rank: '4th',
  }
];

const Toppers = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? toppers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === toppers.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="toppers-page">
      <h1 className="toppers-title">🏆 Our School Toppers - Class X (2024)</h1>
      <p className="toppers-subtext">Excellence is not a skill, it's an attitude. Meet the brightest stars of our school!</p>

      <div className="toppers-grid desktop-view">
        {toppers.map((topper, i) => (
          <div className="topper-card" key={i}>
            <div className="rank-badge">{topper.rank}</div>
            <img src={topper.image} alt={topper.name} />
            <h3>{topper.name}</h3>
            <p className="gpa">{topper.gpa}</p>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="carousel mobile-view">
        <button onClick={handlePrev} className="carousel-btn left">{'❮ '}</button>
        <div className="topper-card">
          <div className="rank-badge">{toppers[index].rank}</div>
          <img src={toppers[index].image} alt={toppers[index].name} />
          <h3>{toppers[index].name}</h3>
          <p className="gpa">{toppers[index].gpa}</p>
        </div>
        <button onClick={handleNext} className="carousel-btn right">{'❯ '}</button>
      </div>

      <div className="success-note">
        🥇 Hard work, dedication, and discipline lead to greatness. We are proud of our students!
      </div>
    </div>
  );
};

export default Toppers;
