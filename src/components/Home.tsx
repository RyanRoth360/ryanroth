import React from "react";
import "../styles/Home.css";

const TypingText: React.FC = () => {
  return (
    <>
      <div className="buffer" id="main-text"></div>
      <div className="text-container">
        {/* <div className="bg-container" /> */}
        <p className="main-text">Hi, I'm Ryan!</p>
        <p className="sub-text">
          Passionate Full Stack Developer and Data Analyst studying Computer
          Science at UC Irvine, specializing in Intelligent Systems. Based in
          Orange County, CA.
        </p>
        <p className="sub-text">
          Feel free to contact me at <u>rtroth@uci.edu</u>!
        </p>

        <div id="about-me" className="about-pos"></div>
      </div>
    </>
  );
};

export default TypingText;
