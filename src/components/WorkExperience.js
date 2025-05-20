import React, { useState } from "react";
import "../styles/WorkExperience.css";

function WorkExperience() {
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
    <div className="work-experience">
      <h1>Work Experience</h1>

      <div className="work-experience-container">
        {/* Workday Section */}
        <div className="work-experience-item">
          <div className="logo-container" onClick={() => toggleDetails(0)}>
            <img
              src="images/workday-logo.png"
              alt="Workday Logo"
              className="company-logo"
            />
            <h3 className="role">
              Software Application Development Intern @ Workday
            </h3>
          </div>
          <div className="dropdown-btn">
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
          {activeIndices.includes(0) && (
            <div className="work-info">
              <p className="work-period"> ⏳  May 2025 - Present</p>
              <div className="key-responsibilities">
                <ul>
                  <li>
                    I will be working with the Financials Global Extend Team
                  </li>
                </ul>
              </div>
              <p className="company-description">
                Workday is a leading enterprise software company that provides
                cloud-based solutions for finance, human resources, and
                planning. It's known for helping organizations manage their
                workforce and financial operations with a focus on usability and
                innovation.
              </p>
            </div>
          )}
        </div>

        {/* Metalab Section */}
        <div className="work-experience-item">
          <div className="logo-container" onClick={() => toggleDetails(1)}>
            <img
              src="images/metalab-logo-transparent.png"
              alt="Metalab Logo"
              className="company-logo"
            />
            <h3 className="role">Software Engineering Intern @ Metalab</h3>
          </div>
          <div className="dropdown-btn">
            <img
              src="images/logo2.png"
              alt="dropdown button"
              className={`dropdown-btn-img ${
                activeIndices.includes(1) ? "flipped" : ""
              }`}
            />
          </div>
          {activeIndices.includes(1) && (
            <div className="work-info">
              <p className="work-period">⏳ Jan 2025 - April 2025</p>
              <div className="key-responsibilities">
                <ul>
                  <li>
                    Deployed AWS Lambda function using Docker containers,
                    leveraging Python and AWS CDK for efficient serverless
                    architecture implementation.
                  </li>
                  <li>
                    Assisted in rendering PDFs onto a webpage within a Next.js
                    app using React, enhancing user interaction and content
                    delivery.
                  </li>
                  <li>
                  Prototyped a simple PDF-reading assistant using OpenAI's Swarm library to provide contextual help while reading.
                  </li>
                </ul>
              </div>
              <p className="company-description">
                MetaLab is a product design and development agency known for
                creating intuitive digital experiences for top tech companies
                like Slack, Google, and Uber. Headquartered in Victoria, BC,
                they specialize in UX/UI design, software engineering, and
                product strategy.
              </p>
            </div>
          )}
        </div>

        {/* Canada Revenue Agency Section */}
        <div className="work-experience-item">
          <div className="logo-container" onClick={() => toggleDetails(2)}>
            <img
              src="images/cra-logo.svg.png"
              alt="CRA Logo"
              className="company-logo"
            />
            <h3 className="role">
              Non-Resident Officer @ Canada Revenue Agency
            </h3>
          </div>
          <div className="dropdown-btn">
            <img
              src="images/logo2.png"
              alt="dropdown button"
              className={`dropdown-btn-img ${
                activeIndices.includes(2) ? "flipped" : ""
              }`}
            />
          </div>
          {activeIndices.includes(2) && (
            <div className="work-info">
              <p className="work-period">⏳ May 2021 - August 2022</p>
              <div className="key-responsibilities">
                <ul>
                  <li>
                    Reviewed and processed non-resident tax forms for compliance
                    with Canadian tax laws.
                  </li>
                  <li>
                    Communicated with clients to clarify and resolve any
                    discrepancies in tax filings.
                  </li>
                  <li>
                    Prepared reports to assist in audits and ensure proper tax
                    collection from non-residents.
                  </li>
                </ul>
              </div>
              <p className="company-description">
                The Canada Revenue Agency (CRA) is the federal agency
                responsible for administering tax laws and delivering government
                benefit programs in Canada. It ensures compliance with tax
                regulations and supports the financial well-being of Canadians
                through efficient tax collection and benefits distribution.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;