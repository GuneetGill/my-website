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
              <h3>PulseTrack</h3>
            </div>

            <div className="project-description">
              <p>
                PulseTrack helps users monitor and improve their mental
                well-being through mood tracking and personalized
                recommendations.
              </p>
            </div>
          </div>
        </div>

        <div className="project-item" onClick={() => toggleDetails(1)}>
          <div className="project-img">
            <img src="test-images.png" alt="img" />
          </div>

          <div className="project-info">
            <div className="project-title">
              <h3>TaskMaster Pro</h3>
            </div>

            <div className="project-description">
              <p>
                TaskMaster Pro is a powerful productivity tool designed to
                streamline your daily tasks and increase efficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="project-item " onClick={() => toggleDetails(2)}>
          <div className="project-img">
            <img src="test-images.png" alt="img" />
          </div>

          <div className="project-info">
            <div className="project-title">
              <h3>ShopEase</h3>
            </div>

            <div className="project-description">
              <p>
                ShopEase offers an intuitive shopping experience with smart
                suggestions and seamless payment integration.
              </p>
            </div>
          </div>
        </div>

        <div className="project-item" onClick={() => toggleDetails(3)}>
          <div className="project-img">
            <img src="test-images.png" alt="img" />
          </div>

          <div className="project-info">
            <div className="project-title">
              <h3>PulseTrack</h3>
            </div>

            <div className="project-description">
              <p>
                PulseTrack helps users monitor and improve their mental
                well-being through mood tracking and personalized
                recommendations.
              </p>
            </div>
          </div>
        </div>

        <div className="project-item" onClick={() => toggleDetails(4)}>
          <div className="project-img">
            <img src="test-images.png" alt="img" />
          </div>

          <div className="project-info">
            <div className="project-title">
              <h3>TaskMaster Pro</h3>
            </div>

            <div className="project-description">
              <p>
                TaskMaster Pro is a powerful productivity tool designed to
                streamline your daily tasks and increase efficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="project-item" onClick={() => toggleDetails(5)}>
          <div className="project-img">
            <img src="test-images.png" alt="img" />
          </div>

          <div className="project-info">
            <div className="project-title">
              <h3>ShopEase</h3>
            </div>

            <div className="project-description">
              <p>
                ShopEase offers an intuitive shopping experience with smart
                suggestions and seamless payment integration.
              </p>
            </div>
          </div>
        </div>
        <div className="project-item" onClick={() => toggleDetails(6)}>
          <div className="project-img">
            <img src="test-images.png" alt="img" />
          </div>

          <div className="project-info">
            <div className="project-title">
              <h3>PulseTrack</h3>
            </div>

            <div className="project-description">
              <p>
                PulseTrack helps users monitor and improve their mental
                well-being through mood tracking and personalized
                recommendations.
              </p>
            </div>
          </div>
        </div>

        <div className="project-item" onClick={() => toggleDetails(7)}>
          <div className="project-img">
            <img src="test-images.png" alt="img" />
          </div>

          <div className="project-info">
            <div className="project-title">
              <h3>TaskMaster Pro</h3>
            </div>

            <div className="project-description">
              <p>
                TaskMaster Pro is a powerful productivity tool designed to
                streamline your daily tasks and increase efficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="project-item" onClick={() => toggleDetails(8)}>
          <div className="project-img">
            <img src="test-images.png" alt="img" />
          </div>

          <div className="project-info">
            <div className="project-title">
              <h3>ShopEase</h3>
            </div>

            <div className="project-description">
              <p>
                ShopEase offers an intuitive shopping experience with smart
                suggestions and seamless payment integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;

/*

image with name 



Memory Haven

2-3 sentecnes about project

tech skills u learned /used 

gifs or youtube video links


*/