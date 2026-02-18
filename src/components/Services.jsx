 

import React from "react";

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-title">My Services</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>Frontend Development</h3>
            <p>
              Building responsive and modern user interfaces using React and
              clean design principles.
            </p>
          </div>

          <div className="service-card">
            <h3>Backend Development</h3>
            <p>
              Developing secure APIs and scalable backend systems using
              Node.js and Java.
            </p>
          </div>

          <div className="service-card">
            <h3>Database Design</h3>
            <p>
              Designing efficient database structures using MySQL and MongoDB
              to ensure smooth data flow.
            </p>
          </div>

          <div className="service-card">
            <h3>Full Stack Projects</h3>
            <p>
              Combining frontend and backend knowledge to deliver fully
              functional and maintainable applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
