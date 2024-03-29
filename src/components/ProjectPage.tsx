// import React, { useState, useEffect } from "react";
import "../styles/ProjectPage.css"; // Create a CSS file for styling
import React, { useEffect } from "react";
import Project from "./Project";
import rideshare from "../assets/rideshare.png";
import pytorch from "../assets/pytorch-2.png";
import spotify from "../assets/spotify-2.png";
import mendix from "../assets/mendix2.png";

const ProjectPage: React.FC = () => {
  const rideshare_title: string = "Rideshare App";
  const rideshare_des: string =
    "Rapidly prototyped and presented a carpool application for UCI students.";
  const rideshare_skills: string = "Fall 2023 | Wireframing · Figma";
  const emotion_title: string = "AI Facial Emotion Detector";
  const emotion_time: string = "Fall 2023 | Artificial Intelligence";
  const emotion_des: string =
    "Developed a convolutional nerual network to identify emotions in images, achieving 94% testing accuracy.";

  const emotion_url: string =
    "https://github.com/RyanRoth360/facial_expressions";

  const spotipy_title: string = "Spotify API Playlist Generator";
  const spotipy_des: string =
    "Created a program for users to easily build Spotify playlists based on their recent listening.";
  const spotipy_skills: string = "Winter 2023 | Python · APIs";
  const spotify_repo: string =
    "https://github.com/RyanRoth360/spotifyPlaylistCreator";

  const webreg_title: string = "WebReg Hackathon";
  const webreg_des: string =
    "Redesigned UCI's course enrollment software, awarded 3rd place for best UI/UX design.";
  const webreg_skills: string = "Winter 2023 | UI/UX Design";

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      const projContainer = document.querySelector(".proj-container");
      if (projContainer) {
        projContainer.classList.add("animate-done");
      }
    });
  }, []);
  return (
    <>
      <div className="proj-container">
        <p className="proj-header">Portfolio</p>
        <Project
          title={emotion_title}
          skills={emotion_time}
          des={emotion_des}
          imgs={pytorch}
          url={emotion_url}
        />

        <Project
          title={webreg_title}
          skills={webreg_skills}
          des={webreg_des}
          imgs={mendix}
          url={""}
        />

        <Project
          title={spotipy_title}
          skills={spotipy_skills}
          des={spotipy_des}
          imgs={spotify}
          url={spotify_repo}
        />

        <Project
          title={rideshare_title}
          skills={rideshare_skills}
          des={rideshare_des}
          imgs={rideshare}
          url={""}
        />

        {/* <div className="projects">
          <div className="col">
            <p className="project-text">Featured Projects</p>
            <Project
              title={emotion_title}
              skills={emotion_time}
              des={emotion_des}
              imgs={pytorch}
              url={emotion_url}
            />
            <hr />

          </div>
          <div className="divider"></div>
          <div className="col">
            <Project
              title={spotipy_title}
              skills={spotipy_skills}
              des={spotipy_des}
              imgs={spotify}
              url={spotify_repo}
            />
            <hr />

            <Project
              title={rideshare_title}
              skills={rideshare_skills}
              des={rideshare_des}
              imgs={rideshare_imgs}
              url={""}
            />
          </div>
        </div>
        <div className="single-proj"></div>

        <div className="vert-projects"></div> */}
      </div>
    </>
  );
};

export default ProjectPage;
