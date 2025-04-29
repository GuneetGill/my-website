import React, { useState } from "react";
import "../styles/Projects.css";

function Projects() {
  const [activeIndices, setActiveIndices] = useState([]);

  const toggleDetails = (index) => {
    setActiveIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };


const projectData = [
  {
    title: "Rate My Prof API/Chrome Extension",
    summary:
      "An API for RateMyProfessors and a Chrome extension that assists students in selecting courses.",
    timePeriod: "January - April 2025",
    details: [
      "Collected data by web scraping RateMyProfessors and stored it in an AWS RDS database.",
      "Developed an API to present this data to users in a clean, accessible format.",
      "Built a Chrome extension to display professor ratings directly on the SFU course selection site.",
    ],
    skills: [
      "AWS Lambda",
      "Python",
      "AWS RDS",
      "AWS ECR",
      "Docker",
      "JavaScript",
      "Beautiful Soup",
      "Selenium",
    ],
    image: "test-images.png",
    link: "https://github.com/GuneetGill/RateMyProf-API",
  },
  {
    title: "Eco GPT 🏆",
    summary:
      "A Chrome extension to reduce ChatGPT usage and promote sustainability. ",
    timePeriod: "January - April 2025",
    details: [
      "Won Redbrick’s Impact Challenge Sponsor Prize at NW Hacks Cmd-f 2025.",
      "Reminds users of AI’s environmental impact and promotes alternatives.",
      "Developed a custom ML model to classify queries as simple/complex.",
    ],
    skills: ["GraphQL", "Python", "Cloud Hosting", "Machine Learning", "JavaScript"],
    image: "test-images.png",
    link: "https://github.com/GuneetGill/cmd-f-2025",
    devpostLink: "https://devpost.com/software/ecogpt?_gl=1*15h52el*_gcl_au*MTQwODQyMjE4MC4xNzQ1NDcwMTgw*_ga*MTE2NjI3NjEzNC4xNzQ1NDcwMTgx*_ga_0YHJK3Y10M*MTc0NTc4Nzg3My4zLjEuMTc0NTc4NzkxMC4wLjAuMA.."
  },

    {
      title: "Memory Haven",
      summary:
        "An Android app that supports dementia patients through reminiscence therapy.",
      timePeriod: "January - April 2025",
      details: [
        "Collected data by web scraping RateMyProfessors and stored it in an AWS RDS database.",
        "Developed a website to present this data to users in a clean, accessible format.",
        "Built a Chrome extension using a custom API to display professor ratings directly on the SFU course selection site.",
      ],
      skills: [
        "AWS Lambda",
        "Python",
        "AWS RDS",
        "AWS ECR",
        "Docker",
        "JavaScript",
        "Beautiful Soup",
        "Selenium",
      ],
      image: "test-images.png",
      link: "https://github.com/GuneetGill/MemoryHaven",
      youtubeLink: "https://youtu.be/UUUruiFl3Rs"
    },
    {
      title: "Travelouge",
      summary:
        "A travel journaling Android app that lets users document their experiences.",
      timePeriod: "January - April 2025",
      details: [
        "Your personal digital scrapbook where users can store personalized journals and multimedia from their travels.",
        "Visualize all visited locations using world map and add pins for destinations visited.",
        "Log expenses and track spending for travel and store travel documents within folders.",
      ],
      skills: [
        "Kotlin",
        "Firebase Authentication",
        "Google Maps Places API",
        "Speech-to-Text",
        "Biometric Authentication",
      ],
      image: "test-images.png",
      link: "https://github.com/GuneetGill/Travelouge",
      youtubeLink: "https://youtu.be/tKQViz3dEcU"
    },
    {
      title: "Moodify",
      summary:
        "A website that predicts user mood based on recent Spotify listening history.",
      timePeriod: "January - April 2025",
      details: [
        "Using the Spotify API, analyzed user's listening history to predict mood.",
        "Added mood suggestions for user's playlist.",
      ],
      skills: [
        "Flask",
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
        "OAuth 2.0",
      ],
      image: "test-images.png",
      link: "https://github.com/GuneetGill/Moodify",
    },
    {
      title: "Flappy Bird AI",
      summary:
        "A self-playing Flappy Bird game powered by a neural network model.",
      timePeriod: "January - April 2025",
      details: [
        "Created neural network model with an input layer, hidden layer and output layer.",
        "Neural network helped AI improve its performance over time by training itself and learning to navigate better.",
        "Utilized evolutionary approach which allowed AI to continuously improve over time.",
      ],
      skills: ["Pygame", "Python", "Neural Networks", "Numpy"],
      image: "test-images.png",
      link: "https://github.com/GuneetGill/Flappy_Bird_NN",
    },
    {
      title: "Breast Cancer Prediction Model",
      summary:
        "A machine learning model developed to predict malignant or benign breast cancer.",
      timePeriod: "January - April 2025",
      details: [
        "Utilized logistic regression, linear regression and other models to compare and find best model to predict what type of cancer tumor is being shown.",
      ],
      skills: ["Machine Learning", "Python"],
      image: "test-images.png",
      link: "https://github.com/GuneetGill/Breast_Cancer_Prediction",
    },
    {
      title: "Final Touch Finishing Website",
      summary:
        "Website for a local business aimed to showcase services and attract clients.",
      timePeriod: "January - April 2025",
      details: [
        "Developed professional and responsive website for a local business to enhance their online presence.",
      ],
      skills: ["CSS", "HTML", "JavaScript"],
      image: "test-images.png",
      link: "https://github.com/GuneetGill/final_touch_finishing",
      websiteLink: "www.finaltouchfinishing.ca"
    },
    {
      title: "Forex Prediction Model",
      summary:
        "A project focused on analyzing Forex markets and automating trading with real-time insights.",
      timePeriod: "January - April 2025",
      details: [
        "Utilized the OANDA API to retrieve real-time market data for Forex currency pairs.",
        "Conducted detailed analysis on Forex pairs, including strategy development, backtesting, and indicator calculation.",
        "Implemented algorithms to detect and analyze candle patterns for trading signals.",
        "Collected market sentiment, headlines, and economic data using real-time web scraping, and displayed data onto web application to provide comprehensive view of trading activities.",
      ],
      skills: ["Python", "Pandas", "Beautiful Soup", "Flask", "React"],
      image: "test-images.png",
      link: "https://github.com/GuneetGill/Forex_Project",
    },
  ];
  return (
    <div className="Projects">
      <h1>Projects</h1>
      <div className="project-container">
  
        {projectData.map((project, index) => (
          <React.Fragment key={index}>
            <div className="project-item" onClick={() => toggleDetails(index)}>
              <div className="project-img">
                <img src={project.image} alt="img" />
              </div>
  
              <div className="project-info">
                <div className="project-title">
                  <h3>{project.title}</h3>
                </div>
                <div className="project-description">
                  <p>{project.summary}</p>
                </div>
              </div>
  
              <div className="dropdown-btn-project">
                <img
                  src="images/logo2.png"
                  alt="dropdown button"
                  className={`dropdown-btn-img ${activeIndices.includes(index) ? "flipped" : ""}`}
                />
              </div>
            </div>
  
            {/* Moved OUTSIDE of .project-item */}
            {activeIndices.includes(index) && (
              <div className="project-info-hidden">
                <p className="time-period">{project.timePeriod}</p>
  
                <div className="project-description">
                  <ul>
                    {project.details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
  
                <div className="skills-tag">
                  {project.skills.map((skill, i) => (
                    <p key={i}>{skill}</p>
                  ))}
                </div>
  
                <div className="project-imgs">
                  <img
                    className="project-logo"
                    src={project.image}
                    alt="Screenshot of the project interface"
                  />
                </div>
  
               
                  <div className="links-section">
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <img src="/images/github-logo.png" alt="GitHub logo" className="logo" />
                        </a>
                      )}
                      {project.youtubeLink && (
                        <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer">
                          <img src="/images/youtube-logo.png" alt="YouTube logo" className="logo" />
                        </a>
                      )}
                        {project.devpostLink && (
                        <a href={project.devpostLink} target="_blank" rel="noopener noreferrer">
                          <img src="/images/devpost-logo.png" alt="Devpost logo" className="logo" />
                        </a>
                      )}
                          {project.websiteLink && (
                        <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                          <img src="/images/website-logo.png" alt="website logo" className="logo" />
                        </a>
                      )}
                  </div>
              
              </div>
              
            )}
          </React.Fragment>
        ))}
  
      </div>
    </div>
  );
  }
  
  export default Projects;
  