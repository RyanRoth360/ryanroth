// import "../styles/AboutMe.css";
import "../styles/Project.css";

import React from "react";
import ImageComponent from "./ImageComponent"; // Assuming you named the file accordingly

interface Props {
  title: string;
  skills: string;
  des: string;
  imgs: string[] | string;
  url: string;
}

const Project: React.FC<Props> = ({ title, skills, des, imgs, url }) => {
  return (
    <>
      <div className="project-container">
        {/* <hr /> */}
        <div className="title-text-container">
          <p className="title-text">{title}</p>
          <p className="where-text">@UCI</p>
        </div>
        <p className="title-sub-text">{skills}</p>
        <p className="des-text">{des}</p>
        <div className="proj-img-container">
          <ImageComponent images={imgs} url={url} />
        </div>
      </div>
    </>
  );
};

export default Project;
