import React from "react";
import "../styles/TypingText.css";

const TypingText: React.FC = () => {
  return (
    <>
      <div className="buffer" id="main-text"></div>
      <div className="text-container">
        <p className="main-text">RYAN ROTH</p>
        <div className="text-line">
          <p className="sub-text">
            a software engineer primarily interested in
          </p>
        </div>
        <div className="interests">
          <div className="interest">
            {/* <img className="icon1" src={webdev} /> */}
            <p>Full Stack Development</p>
          </div>
          <div className="interest">
            {/* <img className="icon2" src={data} /> */}
            <p>Data Analytics</p>
          </div>
          <div className="interest">
            {/* <img className="icon3" src={ml} /> */}
            <p>Machine Learning</p>
          </div>
        </div>
        {/* <p className="bottom-text">
          Learn more about me and my professional experience
        </p>
        <img
          className="arrow"
          src={darrow}
          onClick={() => scrollToElement("about-me")}
        /> */}
        <div id="about-me" className="about-pos">
          .
        </div>
      </div>
    </>
  );
};

export default TypingText;
