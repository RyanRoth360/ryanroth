// import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar"; // Import the Navbar component from the appropriate location
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import ProjectPage from "./components/ProjectPage";

function App() {
  return (
    <>
      <div className="hero">
        <Navbar />
        {/* <main className="main"> */}
        <Home />
        {/* <AboutMe /> */}
        <ProjectPage />
        {/* </main> */}
      </div>
    </>
  );
}

export default App;
