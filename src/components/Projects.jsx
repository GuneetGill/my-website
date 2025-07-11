import React, { useState } from "react";
import "../styles/Projects.css";

function Projects() {
  const [activeIndices, setActiveIndices] = useState([]);

  const toggleDetails = (index) => {
    setActiveIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const projectData = [
    {
      title: "Rate My Prof API/Chrome Extension - In Progress",
      summary:
        "An API for RateMyProfessors and a Chrome extension that assists students in selecting courses.",
      timePeriod: "January - current",
      details: [
        "Scraped professor rating data from RateMyProfessors and stored it in an AWS RDS PostgreSQL database.",
        "Designed and deployed a RESTful API using AWS API Gateway to serve database content in a user-friendly format.",
        "Developed a Chrome extension that integrates with the SFU course selection site to display professor ratings directly to students.",
        "The Chrome extension interacts with a backend AWS Lambda function, connected to API Gateway within a private VPC, to retrieve and serve rating data.",
        "Containerized the backend using Docker and deployed the image to AWS ECR, which was then used by the Lambda function. Infrastructure was provisioned using AWS CDK for full automation.",
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
      logoImage: "/images/rmp-thumbnail.png",
      images: "",
      link: "https://github.com/GuneetGill/RateMyProf-API",
    },
    {
      title: "Eco GPT 🏆 Cmd-f sponser prize winner",
      summary:
        "A Chrome extension to reduce ChatGPT usage and promote sustainability. ",
      timePeriod: "March 9, 2025",
      details: [
        "Won Redbrick's Impact Challenge Sponsor Prize at NW Hacks Cmd-f 2025.",
        "Built a machine learning algorithm using natural language processing (NLP) to classify user prompts as either simple or complex, triggering tailored responses.",
        "Designed to raise awareness of the environmental impact of AI usage by encouraging sustainable alternatives like Google Search.",
        "Developed a custom ML model to classify queries as simple/complex.",
      ],
      skills: [
        "GraphQL",
        "Python",
        "Cloud Hosting",
        "Machine Learning",
        "JavaScript",
      ],
      logoImage: "/images/eco-gpt-thumbnail.png",
      images: "",
      link: "https://github.com/GuneetGill/cmd-f-2025",
      devpostLink:
        "https://devpost.com/software/ecogpt?_gl=1*15h52el*_gcl_au*MTQwODQyMjE4MC4xNzQ1NDcwMTgw*_ga*MTE2NjI3NjEzNC4xNzQ1NDcwMTgx*_ga_0YHJK3Y10M*MTc0NTc4Nzg3My4zLjEuMTc0NTc4NzkxMC4wLjAuMA..",
    },
    {
      title: "Memory Haven",
      summary:
        "An Android application that supports dementia patients through reminiscence therapy by enabling curated multimedia sharing from loved ones.",
      timePeriod: "September - December 2024",
      details: [
        "Built an intuitive Android application using Android Studio to assist dementia patients in memory recall through photos and audio from their loved ones.",
        "Implemented secure authentication and role-based UI using Firebase Authentication to support both patients and caregivers/family logins.",
        "Designed and integrated Firebase Realtime Database for storing user-generated content (images, audio, descriptions, tags) and tracking memory response ratings.",
        "Created a dynamic daily feed that refreshes with curated media, incorporating new uploads or randomly selected archived content.",
        "Developed archive browsing functionality with chronological sorting and keyword search for memory recall.",
        "Implemented data visualization for memory response ratings over time to assist caregivers and medical professionals in monitoring cognitive trends.",
      ],
      skills: [
        "Android Studio",
        "Java",
        "Firebase Authentication",
        "Firebase Realtime Database",
        "Firebase Storage",
        "XML",
        "Data Visualization",
        "Agile Development",
      ],
      logoImage: "images/memory-haven-thumbnail.png",
      images: "",
      link: "https://github.com/GuneetGill/MemoryHaven",
      youtubeLink: "https://youtu.be/UUUruiFl3Rs",
    },
    {
      title: "Travelouge",
      summary:
        "A travel journaling Android app that simplifies documenting, organizing, and preserving travel memories through interactive maps, multimedia, and secure storage.",
        timePeriod: "September - December 2024",
      details: [
        "Developed an Android application that serves as a digital scrapbook, enabling users to create detailed travel journals with multimedia content such as photos, videos, and voice recordings.",
        "Integrated Firebase Authentication to provide secure and role-based user access, ensuring personal content is protected.",
        "Implemented Google Maps Places API to allow users to add interactive pins to a world map and visualize all their visited destinations.",
        "Designed and built a trip-based expense tracker with visual summaries to help users manage and review their spending habits.",
        "Created a biometric-authenticated document folder for safely storing sensitive travel files like passports, itineraries, and tickets.",
        "Enabled users to plan future adventures with a built-in bucket list feature to organize dream destinations",
        "Utilized speech-to-text functionality to allow voice journaling, enhancing accessibility and ease of memory recording.",
      ],
      skills: [
        "Kotlin",
        "Android Studio",
        "Firebase Authentication",
        "Google Maps Places API",
        "Speech-to-Text",
        "Biometric Authentication",
        "Agile Development"
      ],
      logoImage: "images/travel-thumbnail.png",
      images: "",
      link: "https://github.com/GuneetGill/Travelouge",
      youtubeLink: "https://youtu.be/tKQViz3dEcU",
    },    
    {
      title: "Moodify",
      summary:
        "A dynamic web application that analyzes your Spotify listening history to predict mood and provide playlist insights.",
      timePeriod: "May - July 2024",
      details: [
        "Developed a mood prediction system by analyzing recently played tracks using the Spotify API and the Spotipy Python library.",
        "Implemented playlist analysis to detect and suggest the overall mood of user playlists.",
        "Utilized OAuth 2.0 for secure and seamless authentication with Spotify accounts.",
        "Designed a modern, responsive interface to ensure accessibility and an engaging user experience across devices.",
        "Built the application using Flask for backend routing and Python for data processing, with a front-end developed in HTML, CSS, and JavaScript.",
      ],
      skills: [
        "Spotify API",
        "OAuth 2.0",
        "Flask",
        "Python",
        "JavaScript",
        "HTML",
        "CSS"
      ],
      logoImage: "/images/moodify-thumbnail.png",
      images: "",
      link: "https://github.com/GuneetGill/Moodify"
    },    
    {
      title: "Flappy Bird AI",
      summary:
        "A self-learning version of Flappy Bird powered by a neural network that evolves over time to master the game autonomously.",
      timePeriod: "June - July 2024",
      details: [
        "Recreated the classic Flappy Bird game using Python and Pygame with an integrated AI component.",
        "Designed and implemented a neural network model with 2 input nodes, 1 hidden layer with 5 sigmoid-activated nodes, and 1 output node.",
        "Trained the AI using an evolutionary algorithm: birds were evaluated based on survival time and proximity to pipe gaps, with top performers breeding new generations.",
        "Leveraged NumPy for efficient vectorized computations and matrix operations critical to neural network training.",
      ],
      skills: [
        "Python",
        "Pygame",
        "Neural Networks",
        "NumPy"
      ],
      logoImage: "/images/flappy-bird-thumbnail.png",
      images: "",
      link: "https://github.com/GuneetGill/Flappy_Bird_NN"
    },    
    {
      title: "Breast Cancer Prediction Model",
      summary:
        "A machine learning project focused on accurately classifying breast cancer tumors as benign or malignant using clinical data.",
      timePeriod: "Sept - Nov 2024",
      details: [
        "Developed and evaluated multiple classification models—including logistic regression, linear regression, and decision trees—to identify the most effective algorithm for tumor classification.",
        "Performed data preprocessing steps including normalization, feature selection, and handling missing values to improve model accuracy.",
        "Utilized scikit-learn and pandas for streamlined data manipulation, model training, and evaluation.",
        "Achieved high prediction accuracy on test data, supporting decision-making with interpretable results."
      ],
      skills: [
        "Machine Learning",
        "Python",
        "Scikit-learn",
        "Pandas",
        "Logistic Regression",
        "Data Analysis"
      ],
      logoImage: "/images/breast-cancer-thumbnail.png",
      images: "",
      link: "https://github.com/GuneetGill/Breast_Cancer_Prediction"
    },    
    {
      title: "Final Touch Finishing Website",
      summary:
        "A professional website developed for a local finishing business to showcase services, increase customer engagement, and boost online visibility.",
      timePeriod: "April - May 2024",
      details: [
        "Built the entire website using HTML, CSS, and JavaScript to create a clean, modern, and interactive user interface.",
    "Implemented responsive design techniques with CSS media queries to ensure optimal display on desktops, tablets, and smartphones.",
        "Collaborated with the client to iterate on design and functionality, ensuring the final product met business goals."
      ],
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
      logoImage: "/images/final-touch-thumbnail.png",
      images: "",
      link: "https://github.com/GuneetGill/final_touch_finishing",
      websiteLink: "https://www.finaltouchfinishing.ca"
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
      logoImage: "/images/forex-thumbnail.png",
      images: "",
      link: "https://github.com/GuneetGill/Forex_Project",
    },
  ];

return (
  <div className="Projects">
    <h1>Projects</h1>
    <div className="project-container">
      {projectData.map((project, index) => (
        <div className="project-capsule" key={index}>
          <div className="project-item" onClick={() => toggleDetails(index)}>
            <div className="project-img-div">
              <img
                className="project-img"
                src={project.logoImage}
                alt="img"
              />
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
                src="images/dropdown-arrow.png"
                alt="dropdown button"
                className={`dropdown-btn-img ${
                  activeIndices.includes(index) ? "flipped" : ""
                }`}
              />
            </div>
          </div>

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

              {project.images && (
                <div className="project-imgs">
                  <img
                    className="project-logo"
                    src={project.images}
                    alt="Screenshot of the project interface"
                  />
                </div>
              )}

              <div className="links-section">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/github-logo.png"
                      alt="GitHub logo"
                      className="logo"
                    />
                  </a>
                )}
                {project.youtubeLink && (
                  <a
                    href={project.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/youtube-logo.png"
                      alt="YouTube logo"
                      className="logo"
                    />
                  </a>
                )}
                {project.devpostLink && (
                  <a
                    href={project.devpostLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/devpost-logo.png"
                      alt="Devpost logo"
                      className="logo"
                    />
                  </a>
                )}
                {project.websiteLink && (
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/website-logo.png"
                      alt="website logo"
                      className="logo"
                    />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);  
}      

export default Projects;

