import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* LEFT SIDE - Text */}
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">Lourine Otieno</span>
          </h1>

          <h2>
            <Typewriter
              words={[
                "Full Stack Developer",
                "Backend Engineer",
                "System Architect"
              ]}
              loop={true}
              cursor={true}
              typeSpeed={70}
              deleteSpeed={50}
            />
          </h2>

          <p>
            A Full Stack Developer with expertise in building responsive
            frontend interfaces and secure backend systems. I am passionate
            about turning ideas into functional, scalable digital products.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn">Hire Me</a>
            <a
              href="/Lourine_Otieno_CV.pdf"
              download
              className="btn-outline"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="hero-image">
          <img src={profile} alt="Lourine Otieno" />
        </div>

      </div>
    </section>
  );
}

export default Hero;
