import React from 'react';

const sportsData = [
  { title: '🏃‍♂️ Athletics', image: 'atletics.jpg', desc: 'Track & field events that build stamina and determination.' },
  { title: '🏏 Cricket', image: 'cricket.jpg', desc: 'Team spirit, focus, and strategy come alive on our cricket ground.' },
  { title: '🏀 Basketball', image: 'basketball.jpg', desc: 'Fast-paced action and smart moves on the court.' },
  { title: '⚽ Football', image: 'football.jpg', desc: 'Passion meets energy on the football field.' },
  { title: '🎯 Indoor Games', image: 'carrom.jpg', desc: 'Chess, carrom, and table tennis sharpen the mind and reflexes.' },
  { title: '🤸 Yoga & PT', image: 'yoga.jpg', desc: 'Fitness, balance, and calm through regular yoga and PT.' },
  { title: '🎯 Indoor Games', image: 'chess.jpg', desc: 'Chess, carrom, and table tennis sharpen the mind and reflexes.' },
  { title: '🤸 Yoga & PT', image: 'yoga.jpg', desc: 'Fitness, balance, and calm through regular yoga and PT.' },
];

const Sports = () => {
  return (
    <div className='about'> 
    <div className="sports-page">
      <h1>🏆 Sports & Games @ Sri Gayathri</h1>
      <p className="sports-intro">
        We believe that sports not only strengthen the body, but also teach discipline, teamwork, leadership, and focus.  
        Our students actively participate in a variety of indoor and outdoor games, building strong minds in strong bodies.
      </p>

      <div className="sports-grid">
        {sportsData.map((sport, index) => (
          <div className="sports-card" key={index}>
            <img src={sport.image} alt={sport.title} />
            <h2>{sport.title}</h2>
            <p>{sport.desc}</p>
          </div>
        ))}
      </div>

      <blockquote className="sports-quote">
        "A healthy body leads to a sharper mind. At Sri Chaitanya, we build both."
      </blockquote>


    </div>
    </div>
  );
};

export default Sports;
