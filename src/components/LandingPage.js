import * as React from "react";
import "../styles/LandingPage.css";

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
      <img src="/images/my-drawing.png" alt="Description of image" />
    </div>
  );
}

export default LandingPage;
