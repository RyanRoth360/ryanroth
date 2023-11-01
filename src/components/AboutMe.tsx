import "../styles/AboutMe.css";
import ryan from "../assets/prof_text_img.png";
import anteater from "../assets/anteater.png";
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

import React from "react";

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="about">
        <div className="headshot-container">
          <img alt="" className="headshot" src={ryan} />
        </div>
        {/* <p className="vertical-text">ABOUT</p> */}

        <div className="about-text-container">
          <p className="about-title-text">Who am I?</p>
          <p className="body-text">
            Hi! I'm Ryan, a Computer Science student at UC Irvine with a passion
            for tech. I specialize in Intelligent Systems and have a knack for
            problem-solving. I've honed my skills in Python, C++, React, and
            more, and I've applied them during my internship at Pearl AI this
            past summer. There, I helped develop a full-stack application for
            real-time image analysis.
          </p>
          <p className="body-text">
            I'm also a researcher who uses computational simulations to explore
            wildfire behavior and its relationship to climate change. When I'm
            not studying or working, I'm bringing creativity to events as a
            Student Talent Intern at UCI Associated Students. I also love to
            surf and play music!
          </p>
          <p className="body-text">
            Explore my portfolio to see my journey in the tech world, and feel
            free to reach out!
          </p>
          <div className="bottom-container">
            <div>
              <a
                href="mailto:rtroth@uci.edu"
                target="_blank"
                className="social-container"
              >
                <div className="social">
                  <img className="social-icon" src={mail} />
                  <p>Email: rtroth@uci.edu</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/ryanroth360"
                target="_blank"
                className="social-container"
              >
                <div className="social">
                  <img className="social-icon" src={linkedin} />
                  <p>LinkedIn</p>
                </div>
              </a>

              <a
                href="https://github.com/RyanRoth360"
                target="_blank"
                className="social-container"
              >
                <div className="social">
                  <img className="social-icon" src={github} />
                  <p>Github</p>
                </div>
              </a>
            </div>

            {/* <img alt="" className="anteater" src={anteater} /> */}
          </div>
          <div id="projects" className="project-pos"></div>
          {/* </div> */}
        </div>
        {/* <p className="bottom-about-text">Projects & Skills</p> */}
        {/* <img
          className="about-arrow"
          src={darrow}
          alt=""
          onClick={() => scrollToElement("projects")}
        /> */}
      </div>
    </>
  );
};

export default AboutMe;
