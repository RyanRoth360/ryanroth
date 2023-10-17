import "../styles/AboutMe.css";
import "../styles/Project.css";
import image1 from "../assets/website.png";
import React from "react";

interface Props {
  title: string;
  image: string;
  skills: string;
  des: string;
}

const Project: React.FC<Props> = ({ title, image, skills, des }) => {
  return (
    <>
      <div className="project-container">
        <div className="project-body">
          <div className="img-container">
            <img src={image1} />
            {/* <img className="headshot" src={image} /> */}
            <div className="proj-text-container">
              <p className="title-text">{title}</p>
              <p className="skill-text">{skills}</p>
              <p className="project-text">{des}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
