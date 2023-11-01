// import React, { useState, useEffect } from "react";
import "../styles/ProjectPage.css"; // Create a CSS file for styling
import Project from "./Project";
import ProjectVert from "./ProjectVert";
import rideshare1 from "../assets/rideshare1.png";
import rideshare2 from "../assets/rideshare2.png";
import rideshare3 from "../assets/rideshare3.png";
import rideshare4 from "../assets/rideshare4.png";
import rideshare5 from "../assets/rideshare5.png";
import mendix from "../assets/mendix.jpeg";
import spotify from "../assets/spotify.jpeg";

const ProjectPage: React.FC = () => {
  const rideshare_title: string = "Rideshare App";
  const rideshare_des: string =
    "In December 2021, I had the opportunity to participate in the Design-a-thon event at Design @ UCI. Teaming up with a diverse group of talented designers, we embarked on a three-day challenge to rapidly prototype and present a product. Our focus was on designing a user-friendly carpooling app, and we showcased its UI/UX using Figma, effectively presenting its functionality to a panel of five industry judges. Our concept aimed to address the commuting challenges faced by students, making it easy for them to find rides to and from campus. This experience underscored the power of collaboration and innovation in creating solutions that simplify everyday life.";
  const rideshare_skills: string =
    "Graphic Design · Wireframing · User Interface Design · Figma (Software)";
  const rideshare_imgs = [
    rideshare1,
    rideshare2,
    rideshare3,
    rideshare4,
    rideshare5,
  ];

  const webreg_title: string = "UCI WebReg Hackathon";
  const webreg_des: string =
    "In January 2023, I had the privilege of leading a dynamic cross-functional team at the UCI ANTrepreneur Center for the WebReg Hackathon. Our mission was to improve the user experience of WebReg, a vital tool for UCI students during class enrollment. Through a combination of UI/UX design, Mendix development, and data collection, we successfully identified and addressed critical customer needs. To achieve this, we conducted extensive research, surveying over 100 students to gather invaluable insights. Our hard work paid off when we presented our innovative application to a panel of five industry judges. We were thrilled to secure a remarkable top-three position among 30 competing teams, and our efforts were further rewarded with a prestigious prize of $150. This experience was a testament to the power of teamwork, problem-solving, and a commitment to user-centric design.";
  const webreg_skills: string =
    "Project Management · User Interface Design · Mendix · Data Collection · Presentation Skills";

  const spotipy_title: string = "Spotify API Playlist Generator";
  const spotipy_des: string =
    "I had the opportunity to leverage Spotipy, a Python wrapper for Spotify's Web API, to develop a highly efficient app that allows users to seamlessly filter and construct playlists based on their recent listening habits and top picks. By harnessing the power of Spotipy, I enabled users to curate personalized playlists that perfectly align with their musical preferences. To provide users with a visual representation of their data and facilitate playlist creation, I created a temporary model Tkinter GUI interface. This interface offered an intuitive and user-friendly experience, allowing individuals to interact with their music data effortlessly. Presently, I am actively engaged in the development of a web-based application, aimed at making this innovative project accessible to the public. Through this endeavor, I aspire to empower music enthusiasts worldwide to discover and curate their ideal playlists with ease and convenience.";
  const spotipy_skills: string =
    "Application Programming Interfaces (API) · JavaScript · Cascading Style Sheets (CSS) · HTML · Python (Programming Language)";
  const spotify_repo: string =
    "https://github.com/RyanRoth360/spotifyPlaylistCreator";

  return (
    <>
      <div className="proj-container">
        <p className="project-text">- Portfolio -</p>
        <Project
          title={rideshare_title}
          skills={rideshare_skills}
          des={rideshare_des}
          imgs={rideshare_imgs}
        />
        <div className="vert-projects">
          <ProjectVert
            title={webreg_title}
            skills={webreg_skills}
            des={webreg_des}
            img={mendix}
            url={""}
          />
          <ProjectVert
            title={spotipy_title}
            skills={spotipy_skills}
            des={spotipy_des}
            img={spotify}
            url={spotify_repo}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
