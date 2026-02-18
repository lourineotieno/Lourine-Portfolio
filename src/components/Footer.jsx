import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Lourine Otieno</h3>
        <p>Full stack Developer | Computer Science </p>

        <div className="footer-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/lourine-otieno-5ab094330" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/lourieno?igsh=MTFkcW9yaXoyOGpwZA==" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Lourine Otieno. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
