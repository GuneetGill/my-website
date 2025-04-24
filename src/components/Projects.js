import React, { useState } from "react";
import "../styles/Projects.css";


function Projects() {
  // Track the open/close state of each item with an array
  // intilize with empty array since no sections are open by default
  const [activeIndices, setActiveIndices] = useState([]);


  const toggleDetails = (index) => {
    if (activeIndices.includes(index)) {
      // If the index is already in the array, remove it to close the section
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      // Otherwise, add it to the array to open the section
      setActiveIndices([...activeIndices, index]);
    }
  };


  return (
    <div className="Projects">
      <h1>Projects</h1>


      <div className="project-container">
        <div className="project-item" onClick={() => toggleDetails(0)}>
          <div className="project-img">
            <img src="test-images.png" alt="img" />
          </div>


          <div className="project-info">
            <div className="project-title">
              <h3>Rate My Prof API/Chrome Extention</h3>
            </div>
            <div className="project-description">
              <p>
                An API for RateMyProfessors website and a Chrome extension that
                assists students in selecting courses.
              </p>
            </div>
          </div>


          <div className="dropdown-btn-project">
            <img
              src="images/logo2.png"
              alt="dropdown button"
              //appiles javascript so first we check if the the key for this div aka 0
              // is within the activeIndex array if it is then we apply the css class
              // flipeed otherwise we apply "" class which is nothing
              className={`dropdown-btn-img ${
                activeIndices.includes(0) ? "flipped" : ""
              }`}
            />
          </div>
        </div>


        <div className="project-item" onClick={() => toggleDetails(1)}>
          <div className="project-img">
            <img src="test-images.png" alt="img" />
          </div>


          <div className="project-info">
            <div className="project-title">
              <h3>Eco GPT</h3>
            </div>


            <div className="project-description">
              <p>
                A Chrome extension designed to reduce ChatGPT usage and promote
                environmental sustainability.
              </p>
            </div>
          </div>


          <div className="dropdown-btn-project">
            <img
              src="images/logo2.png"
              alt="dropdown button"
              className={`dropdown-btn-img ${
                activeIndices.includes(1) ? "flipped" : ""
              }`}
            />
          </div>
        </div>


        <div className="project-item " onClick={() => toggleDetails(2)}>
          <div className="project-img">
            <img src="test-images.png" alt="img" />
          </div>


          <div className="project-info">
            <div className="project-title">
              <h3>Memory Haven</h3>
            </div>


            <div className="project-description">
              <p>
                An Android app that supports dementia patients through
                reminiscence therapy.
              </p>
            </div>
          </div>


          <div className="dropdown-btn-project">
            <img
              src="images/logo2.png"
              alt="dropdown button"
              className={`dropdown-btn-img ${
                activeIndices.includes(2) ? "flipped" : ""
              }`}
            />
          </div>
        </div>


        <div className="project-item" onClick={() => toggleDetails(3)}>
          <div className="project-img">
            <img src="test-images.png" alt="img" />
          </div>


          <div className="project-info">
            <div className="project-title">
              <h3>Travelouge</h3>
            </div>


            <div className="project-description">
              <p>
                A travel journaling app for Android that lets users document
                their experiences.
              </p>
            </div>
          </div>


          <div className="dropdown-btn-project">
            <img
              src="images/logo2.png"
              alt="dropdown button"
              className={`dropdown-btn-img ${
                activeIndices.includes(3) ? "flipped" : ""
              }`}
            />
          </div>
        </div>


        <div className="project-item" onClick={() => toggleDetails(4)}>
          <div className="project-img">
            <img src="test-images.png" alt="img" />
          </div>


          <div className="project-info">
            <div className="project-title">
              <h3>Moodify</h3>
            </div>


            <div className="project-description">
              <p>
                A website that predicts user mood based on recent Spotify
                listening history.
              </p>
            </div>
          </div>


          <div className="dropdown-btn-project">
            <img
              src="images/logo2.png"
              alt="dropdown button"
              className={`dropdown-btn-img ${
                activeIndices.includes(4) ? "flipped" : ""
              }`}
            />
          </div>
        </div>


        <div className="project-item" onClick={() => toggleDetails(5)}>
          <div className="project-img">
            <img src="test-images.png" alt="img" />
          </div>


          <div className="project-info">
            <div className="project-title">
              <h3>Flappy Bird</h3>
            </div>


            <div className="project-description">
              <p>
                A self-playing Flappy Bird game powered by a neural network
                model.
              </p>
            </div>
          </div>


          <div className="dropdown-bnt-project">
            <img
              src="images/logo2.png"
              alt="dropdown button"
              className={`dropdown-btn-img ${
                activeIndices.includes(5) ? "flipped" : ""
              }`}
            />
          </div>
        </div>


        <div className="project-item" onClick={() => toggleDetails(6)}>
          <div className="project-img">
            <img src="test-images.png" alt="img" />
          </div>


          <div className="project-info">
            <div className="project-title">
              <h3>Breast Cancer Prediction Model</h3>
            </div>


            <div className="project-description">
              <p>
              A machine learning model developed to predict malignant or benign breast cancer.
              </p>
            </div>
          </div>


          <div className="dropdown-btn-project">
            <img
              src="images/logo2.png"
              alt="dropdown button"
              className={`dropdown-btn-img ${
                activeIndices.includes(6) ? "flipped" : ""
              }`}
            />
          </div>
        </div>


        <div className="project-item" onClick={() => toggleDetails(7)}>
          <div className="project-img">
            <img src="test-images.png" alt="img" />
          </div>


          <div className="project-info">
            <div className="project-title">
              <h3>Final Touch Finishing website</h3>
            </div>


            <div className="project-description">
              <p>
                Website for a local business aimed to showcase services and
                attract clients.
              </p>
            </div>
          </div>


          <div className="dropdown-btn-project">
            <img
              src="images/logo2.png"
              alt="dropdown button"
              className={`dropdown-btn-img ${
                activeIndices.includes(7) ? "flipped" : ""
              }`}
            />
          </div>
        </div>


        <div className="project-item" onClick={() => toggleDetails(8)}>
          <div className="project-img">
            <img src="test-images.png" alt="img" />
          </div>


          <div className="project-info">
            <div className="project-title">
              <h3>Forex Prediction Model</h3>
            </div>


            <div className="project-description">
              <p>
              A project focused on analyzing Forex markets and automating trading with real-time insights.
              </p>
            </div>
          </div>


          <div className="dropdown-btn-project">
            <img
              src="images/logo2.png"
              alt="dropdown button"
              className={`dropdown-btn-img ${
                activeIndices.includes(8) ? "flipped" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;