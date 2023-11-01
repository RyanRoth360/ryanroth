// import "../styles/AboutMe.css";
import "../styles/ProjectVert.css";

import React from "react";
import Carousel from "./Carousel";

interface Props {
  title: string;
  skills: string;
  des: string;
  img: string;
  url: string;
}

const Project: React.FC<Props> = ({ title, skills, des, img, url }) => {
  const openGitHubRepo = (url: string) => {
    if (url && url.trim() !== "") {
      window.open(url, "_blank");
    }
  };

  return (
    <>
      <div className="vert-project-container">
        <label className="vert-title-text">{title}</label>
        <div className="car-container">
          <img
            className="vert-img"
            src={img}
            onClick={() => openGitHubRepo(url)}
          />
        </div>
        <p className=" skill-text">{skills}</p>
        <p className="des-text">{des}</p>
      </div>
    </>
  );
};

export default Project;
