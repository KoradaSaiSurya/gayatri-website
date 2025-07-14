import React from "react";

const Maps = () => {
  return (
    <div className="map-container">
      <h2 className="map-heading">📍 Gayathri School Location</h2>

      <iframe
        src="https://www.google.co.in/maps/embed?pb=!1m18!1m12!1m3!1d3807.1957994518465!2d82.53421557490764!3d17.3540612834344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39c7c36f06c45b%3A0x9d5460c84105b187!2sGayathri%20Public%20School!5e0!3m2!1sen!2sin!4v1720691504639!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        title="Gayathri School Map"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <a
        href="https://www.google.co.in/maps/place/Gayathri+Public+School/@17.3540613,82.5342156,18z/data=!4m10!1m2!2m1!1sgayathri+school+tuni+andhrapradesh!3m6!1s0x3a39c7c36f06c45b:0x9d5460c84105b187!8m2!3d17.3540523!4d82.5355582!15sCiJnYXlhdGhyaSBzY2hvb2wgdHVuaSBhbmRocmFwcmFkZXNokgEYZ2VuZXJhbF9lZHVjYXRpb25fc2Nob29sqgFrCggvbS8wNnpkahABKhMiD2dheWF0aHJpIHNjaG9vbCgAMiAQASIcheqGRUzvcdRpT2ufbbUfFMN1xEc-NxbiRFGnaDImEAIiImdheWF0aHJpIHNjaG9vbCB0dW5pIGFuZGhyYXByYWRlc2jgAQA!16s%2Fg%2F11g8wq66qg?entry=ttu"
        className="map-link"
        target="_blank"
        rel="noreferrer"
      >
        👉 Open in Google Maps
      </a>
    </div>
  );
};

export default Maps;
