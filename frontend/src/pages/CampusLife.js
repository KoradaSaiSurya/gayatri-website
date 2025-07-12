import React from 'react'

const CampusLife = () => {
  return (
    <section className="campus-life">
      <h1>🏫 Life at Our Campus</h1>
      <p className="campus-subtext">
        Our campus is more than just buildings. It’s a place where students explore, learn, and grow together.
      </p>

      <div className="campus-grid">
        <div className="campus-card">
          <img src="interactive-classes.jpg" alt="Classroom Learning" />
          <h3>Interactive Classrooms</h3>
          <p>Smart boards, group discussions, and real-time learning experiences.</p>
        </div>

        <div className="campus-card">
          <img src="library.jpg" alt="Library" />
          <h3>Digital Library</h3>
          <p>Thousands of books, peaceful atmosphere and e-resources for deep learning.</p>
        </div>

        <div className="campus-card">
          <img src="labs.jpg" alt="Science Lab" />
          <h3>Advanced Labs</h3>
          <p>Hands-on learning in well-equipped Physics, Chemistry, and Computer labs.</p>
        </div>

        <div className="campus-card">
          <img src="play.jpg" alt="Playground" />
          <h3>Playgrounds</h3>
          <p>Spacious play areas for sports, physical education, and fun time!</p>
        </div>

        <div className="campus-card">
          <img src="events.jpg" alt="Events" />
          <h3>School Events</h3>
          <p>Cultural events, science fairs, and competitions bring out hidden talents.</p>
        </div>

        <div className="campus-card">
          <img src="transport.jpg" alt="Transport" />
          <h3>Safe Transport</h3>
          <p>GPS-enabled school buses with safety and comfort for every child.</p>
        </div>
      </div>
    </section>
  )
}

export default CampusLife
