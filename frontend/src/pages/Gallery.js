import React from 'react';

const Gallery = () => {
  const images = [
    { src: 'events.jpg', title: 'Annual Day' },
    { src: 'labs.jpg', title: 'Science Fair' },
    { src: 'classroom.jpg', title: 'Classroom' },
    { src: 'play.jpg', title: 'Sports Day' },

     { src: 'play.jpg', title: 'Independence Day' },
     { src: 'classroom.jpg', title: 'Cultural Program' },
      { src: 'labs.jpg', title: 'Independence Day' },
    { src: 'events.jpg', title: 'Cultural Program' },
   
    
   
  ];

  return (
    <div className='about'> 
    <div className="gallery-page">
      <h1>📸 School Memories Gallery</h1>

       <p className="gallery-intro">
          Welcome to the <strong>Sri Gayathri High School</strong> Gallery — a vibrant collection of memories, achievements, and joyful moments.
          Every photo here tells a story of learning, laughter, celebration, and togetherness. From science fairs to sports day,
          from cultural events to classroom smiles — our students shine in every corner of the campus.
      </p>

      <p className="gallery-intro">
        We believe that education is not just about textbooks, but about creating lifelong experiences.
        Through these glimpses, you will witness our commitment to all-round development and student happiness.
      </p>

      <p className="gallery-intro">
        📸 Dive in and relive the moments that make our school a second home for every child.
      </p>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img.src} alt={img.title} />
            <h3>{img.title}</h3>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Gallery;

