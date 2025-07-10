import * as React from "react";
import "../styles/LandingPage.css";
import welcome from "../static-img/welcome.png";

function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="text-container">
        <h1>
          Hello my name is Guneet Gill, and I'm a software developer who likes
          to build applications.
        </h1>
        <p>
          Check out my{" "}
          <a
            href="https://linkedin.com/in/guneet-gill"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          ,{" "}
          <a
            href="https://github.com/GuneetGill"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          or{" "}
          <a href="/files/guneet-gill-resume.pdf" download>
            click here
          </a>{" "}
          to download a copy of my resume!
        </p>
        
      </div>
    
<div className="image-container">
    <img src="/images/my-drawing.png" alt="Drawing" className="drawing-img" />
    <img src={welcome} className="welcome-img" alt="Welcome" />
</div>


    </div>
  );
}

export default LandingPage;
