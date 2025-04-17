import React, { useState, Component } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Footer from "./components/Footer";
import DrawingCanvas from "./components/DrawingCanvas";
import AboutMe from "./components/AboutMe";
import Leadership from "./components/Leadership";

function App() {
  // State to store the currently selected brush color
  const [selectedColor, setSelectedColor] = useState("#000000"); // Default black
  const [fabricCanvas, setFabricCanvas] = useState(null);

  return (
    <div className="App">
      <DrawingCanvas selectedColor = {selectedColor} onCanvasReady={setFabricCanvas}/>

      <div className="main-content">
        <Header fabricCanvas={fabricCanvas}/>
        <LandingPage />
        <WorkExperience />
        <Projects />
        <Leadership/>
        <AboutMe/>
      </div>

      <div className="footer">
        <Footer setColor = {setSelectedColor} />
      </div>

    </div>
  );
}

export default App;
