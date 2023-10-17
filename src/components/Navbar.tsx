import "../styles//Navbar.css";

import React, { useEffect } from "react";

const Navbar: React.FC = () => {
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const navbar = document.querySelector(".nav") as HTMLElement;
  //     const scrollY = window.scrollY;
  //     console.log(scrollY);

  //     if (navbar) {
  //       if (scrollY > 100) {
  //         navbar.style.backgroundColor = "rgb(18, 18, 18)";
  //       } else {
  //         navbar.style.backgroundColor = "transparent";
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <nav className="nav">
      <div className="navbar-container">
        <div className="navbar-links">
          <label
            className="section"
            onClick={() => scrollToElement("main-text")}
          >
            Home
          </label>
          <label
            className="section"
            onClick={() => scrollToElement("about-me")}
          >
            About
          </label>
          <label
            className="section"
            onClick={() => scrollToElement("projects")}
          >
            Projects
          </label>
          <label className="section">Contact</label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
