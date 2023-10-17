// Navbar.tsx
import "../styles//Navbar.css"; // Import the CSS file

import React, { useEffect } from "react";

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
      console.log(scrollY);

      if (navbar) {
        // Check if navbar is not null or undefined
        if (scrollY > 100) {
          navbar.style.backgroundColor = "rgb(18, 18, 18)";
        } else {
          navbar.style.backgroundColor = "transparent";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="nav">
      <div className="navbar-container">
        {/* <div className="navbar-title">{title}</div> */}
        <div className="navbar-links">
          <label
            className="option"
            onClick={() => scrollToElement("main-text")}
          >
            Home
          </label>
          <label className="option" onClick={() => scrollToElement("about-me")}>
            About
          </label>
          <label className="option" onClick={() => scrollToElement("projects")}>
            Projects
          </label>
          <label className="option">Contact</label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
