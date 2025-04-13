import React, { useState, Component } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Footer from "./components/Footer";
import DrawingCanvas from "./components/DrawingCanvas";


function App() {
  // State to store the currently selected brush color
  const [selectedColor, setSelectedColor] = useState("#000000"); // Default black change this!

  return (
    <div className="App">
      {/* <DrawingCanvas selectedColor = {selectedColor}/> */}

      <div className="main-content">
        <Header />
        <LandingPage />
        <WorkExperience />
        <Projects />
      </div>

      <div className="footer">
        <Footer setColor = {setSelectedColor} />
      </div>

    </div>
  );
}

export default App;
