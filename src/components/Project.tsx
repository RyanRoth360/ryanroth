// import "../styles/AboutMe.css";
import "../styles/Project.css";

import React from "react";
import ImageComponent from "./ImageComponent"; // Assuming you named the file accordingly
import rarrow from "../assets/rarrow.png";

interface Props {
  title: string;
  skills: string;
  des: string;
  imgs: string[] | string;
  url: string;
}

const Project: React.FC<Props> = ({ title, skills, des, imgs, url }) => {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <>
      <div className="project-container">
        {/* <hr /> */}
        <div className="text">
          <div className="text-padding"></div>
          <p className="title-text">{title}</p>
          {/* <p className="where-text">@UCI</p> */}
          <p className="title-sub-text">{skills}</p>
          <p className="des-text">{des}</p>
          <div className="flex" onClick={handleClick}>
            <p className="view-more-text">View more</p>
            <img className="rarrow" src={rarrow} />
          </div>
        </div>
        <div className="proj-img-container">
          <ImageComponent images={imgs} url={url} />
        </div>
      </div>
    </>
  );
};

export default Project;
