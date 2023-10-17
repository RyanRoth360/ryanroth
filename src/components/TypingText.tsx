import React from "react";
import "../styles/TypingText.css"; // Create a CSS file for styling
// import webdev from "../assets/webdev.png";
// import ml from "../assets/ml.png";
// import data from "../assets/data.png";
// import darrow from "../assets/darrow.png";
// import art1 from "../assets/art1.png";

const TypingText: React.FC = () => {
  // const scrollToElement = (elementId: string) => {
  //   const element = document.getElementById(elementId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <>
      <div className="buffer" id="main-text"></div>
      <div className="text-container">
        {/* <p className="typing-text">
          Hello, my name is&nbsp; <span className="blue-text"> Ryan!</span>
        </p> */}
        <p className="typing-text">RYAN ROTH</p>

        <div className="text-line">
          <p className="sub-text">
            a&nbsp;
            <span className="orange">software engineer&nbsp;</span>
            primarily interested in
          </p>
        </div>
        <div className="options">
          <div className="op">
            {/* <img className="icon1" src={webdev} /> */}
            <p>Full Stack Development</p>
          </div>
          <div className="op">
            {/* <img className="icon2" src={data} /> */}
            <p>Data Analytics</p>
          </div>
          <div className="op">
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
