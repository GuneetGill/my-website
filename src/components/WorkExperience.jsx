import { useState } from "react";
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

        {/* Clio Section */}
        <div className="work-experience-item">
          <div className="logo-container" onClick={() => toggleDetails(0)}>
            <img
              src="images/clio-logo.png"
              alt="Clio Logo"
              className="company-logo clio-logo-img"
            />
            <h3 className="role">
              Software Development Engineer Intern @ Clio
            </h3>
          </div>
          <div className="dropdown-btn" onClick={() => toggleDetails(0)}>
            <img
              src="images/dropdown-arrow.png"
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
              <p className="work-period"> ⏳  Jan 2026 - Present</p>
              <div className="key-responsibilities">
                <ul>
                  <li>
                    Drove revenue growth as part of the Product-Led Growth team by
                    designing and shipping in-product add-ons that boosted customer upgrades and engagement.
                  </li>
                  <li>
                   Delivered reliable, production-ready full-stack code using Ruby on Rails and TypeScript,
                    with thorough test coverage, and actively participated in code reviews to maintain high-quality
                     customer-facing features.
                  </li>
                  <li>
                   Collaborated closely with product managers and designers to refine features, 
                   optimize user experience, and drive customer engagement.
                  </li>
                  <li>
                    Built and maintained end-to-end features across the stack, from backend services 
                    to front-end interfaces, ensuring seamless integration and performance.
                  </li>
                </ul>
              </div>
              <p className="company-description">
                Clio is a legal technology company, it offers law firms cloud-based software that handles 
                various law practice management tasks including client intake, contact management, calendaring, 
                document management, timekeeping, billing, and trust accounting.
              </p>
            </div>
          )}
        </div>

        
        {/* Workday Section */}
        <div className="work-experience-item">
          <div className="logo-container" onClick={() => toggleDetails(1)}>
            <img
              src="images/workday-logo.png"
              alt="Workday Logo"
              className="company-logo"
            />
            <h3 className="role">
              Software Development Engineer Intern @ Workday
            </h3>
          </div>
          <div className="dropdown-btn" onClick={() => toggleDetails(1)}>
            <img
              src="images/dropdown-arrow.png"
              alt="dropdown button"
              //appiles javascript so first we check if the the key for this div aka 0
              // is within the activeIndex array if it is then we apply the css class
              // flipeed otherwise we apply "" class which is nothing
              className={`dropdown-btn-img ${
                activeIndices.includes(1) ? "flipped" : ""
              }`}
            />
          </div>
          {activeIndices.includes(1) && (
            <div className="work-info">
              <p className="work-period"> ⏳  May 2025 - Dec 2025</p>
              <div className="key-responsibilities">
                <ul>
                  <li>
                   Contributed to the Financials Global Extend team, bringing Workday Financial products to markets
                   outside North America and directly driving revenue growth. 
                  </li>
                  <li>
                    Built and shipped a Java application integrated with Workday SOAP web services, 
                    automating accounting processes for hundreds of enterprise customers and cutting 
                    processing time from minutes to seconds. 
                  </li>
                  <li>
                    Developed new features by applying Object Oriented Principles to improve maintainability and 
                    support growth in customer adoption. 
                  </li>
                  <li>
                    Created automated test suites that boosted code coverage, improved system reliability, 
                    and reduced manual QA effort. 
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
          <div className="logo-container" onClick={() => toggleDetails(2)}>
            <img
              src="images/metalab-logo-transparent.png"
              alt="Metalab Logo"
              className="company-logo"
            />
            <h3 className="role">Software Engineering Intern @ Metalab</h3>
          </div>
          <div className="dropdown-btn" onClick={() => toggleDetails(2)}>
            <img
              src="images/dropdown-arrow.png"
              alt="dropdown button"
              className={`dropdown-btn-img ${
                activeIndices.includes(2) ? "flipped" : ""
              }`}
            />
          </div>
          {activeIndices.includes(2) && (
            <div className="work-info">
              <p className="work-period">⏳ Jan 2025 - April 2025</p>
              <div className="key-responsibilities">
                <ul>
                  <li>
                    Developed and deployed serverless microservices using AWS Lambda, Python,
                     and Docker, enabling scalable, event-driven automation for hundreds of workflows.
                  </li>
                  <li>
                    Set up and managed cloud infrastructure using AWS CDK and Terraform,
                     making deployments repeatable and secure.
                  </li>
                  <li>
                    Improved frontend performance in a Next.js/TypeScript app by optimizing 
                    large PDF rendering with lazy loading and caching, enhancing user experience.
                  </li>
                  <li>
                    Built a prototype PDF-reading assistant using OpenAI’s Swarm API to provide AI-powered 
                    contextual guidance, helping users navigate and understand very large PDFs more efficiently.
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
          <div className="logo-container" onClick={() => toggleDetails(3)}>
            <img
              src="images/cra-logo.svg.png"
              alt="CRA Logo"
              className="company-logo"
            />
            <h3 className="role">
              Non-Resident Tax Auditor @ Canada Revenue Agency
            </h3>
          </div>
          <div className="dropdown-btn" onClick={() => toggleDetails(3)}>
            <img
              src="images/dropdown-arrow.png"
              alt="dropdown button"
              className={`dropdown-btn-img ${
                activeIndices.includes(3) ? "flipped" : ""
              }`}
            />
          </div>
          {activeIndices.includes(3) && (
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