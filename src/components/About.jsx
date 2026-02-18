
function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <h2>About Me</h2>

        <p className="about-intro">
          I am a Computer Science graduate and Full Stack Developer
          passionate about building impactful digital solutions.
          I enjoy transforming complex ideas into clean, scalable,
          and user-friendly applications.
        </p>

        <div className="about-grid">

          <div className="about-card">
            <h3>🚀 What I Do</h3>
            <p>
              I design and develop full stack applications — from
              intuitive frontend interfaces to secure and scalable
              backend systems.
            </p>
          </div>

          <div className="about-card">
            <h3>💡 My Approach</h3>
            <p>
              I believe in clean architecture, maintainable code,
              and performance-driven development. Every project I
              build focuses on efficiency and user experience.
            </p>
          </div>

          <div className="about-card">
            <h3>🛠 Tech Stack</h3>
            <p>
              React, Node.js, Express, Java, MongoDB, MySQL,
              REST APIs, Git, and modern deployment tools.
            </p>
          </div>

          <div className="about-card">
            <h3>🎯 Career Goal</h3>
            <p>
              To work on innovative projects that solve real-world
              problems and contribute to scalable systems in
              dynamic tech environments.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
