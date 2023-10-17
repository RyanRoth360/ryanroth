import React, { useState } from "react";
import "../styles/ProjectWheel.css";

const ProjectWheel: React.FC = () => {
  const projectNames: string[] = [
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const rotateNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectNames.length);
  };

  const rotatePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projectNames.length) % projectNames.length
    );
  };

  return (
    <div className="project-wheel">
      <ul className="project-list">
        {projectNames.map((projectName, index) => (
          <li
            key={index}
            style={{
              transform: `translateY(${100 * (index - currentIndex)}%)`,
              opacity: index === currentIndex ? 1 : 0.5,
            }}
          >
            {projectName}
          </li>
        ))}
      </ul>
      <button onClick={rotatePrevious} id="prevButton">
        Previous
      </button>
      <button onClick={rotateNext} id="nextButton">
        Next
      </button>
    </div>
  );
};

export default ProjectWheel;
