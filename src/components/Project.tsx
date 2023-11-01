// import "../styles/AboutMe.css";
import "../styles/Project.css";

import React from "react";
import Carousel from "./Carousel";

interface Props {
  title: string;
  skills: string;
  des: string;
  imgs: string[];
}

const Project: React.FC<Props> = ({ title, skills, des, imgs }) => {
  return (
    <>
      <div className="project-container">
        <div className="project-body">
          <div className="car-container">
            <Carousel images={imgs} />
          </div>
          <div className="proj-text-container">
            <p className="title-text">{title}</p>
            <p className="skill-text">{skills}</p>
            <p className="des-text">{des}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
