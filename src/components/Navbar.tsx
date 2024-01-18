import "../styles/Navbar.css";

import React, { useEffect } from "react";
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Navbar: React.FC = () => {
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".nav") as HTMLElement;
      const scrollY = window.scrollY;

      // if (navbar) {
      //   if (scrollY > 100) {
      //     navbar.style.backgroundColor = "rgb(18, 18, 18)";
      //   } else {
      //     navbar.style.backgroundColor = "transparent";
      //   }
      // }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="nav">
      <div className="navbar-container">
        {/* <label className="section" onClick={() => scrollToElement("main-text")}>
          Home
        </label>
        <label className="section" onClick={() => scrollToElement("about-me")}>
          About
        </label>
        <label className="section" onClick={() => scrollToElement("projects")}>
          Projects
        </label> */}
        {/* <label className="contact">Contact</label> */}
        <div className="contact-icons">
          <a href="mailto:rtroth@uci.edu" target="_blank">
            <img className="social-icon" src={mail} />
          </a>

          <a href="https://www.linkedin.com/in/ryanroth360" target="_blank">
            <img className="social-icon" src={linkedin} />
          </a>

          <a href="https://github.com/RyanRoth360" target="_blank">
            <img className="social-icon" src={github} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
