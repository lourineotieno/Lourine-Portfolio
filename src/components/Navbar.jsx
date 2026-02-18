import { useState } from "react";

function Navbar() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    document.body.classList.toggle("light");
    setDark(!dark);
  };

  return (
    <nav>
      <h2 className="logo">Lourine.dev</h2>
      <div>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button onClick={toggleTheme}>
          {dark ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
