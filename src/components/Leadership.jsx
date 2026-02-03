import "../styles/Leadership.css";
import { useState } from "react";

function Leadership() {

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
    <div className="Leadership">
      <div className = "section-heading">
      <h1>Leadership</h1>
      </div>
      
      <div className="clubs-list">

      <div className="club">

      <div className="visable-container" onClick={() => toggleDetails(0)}>
       
          <div className = "logo-container-club">
          <img
              src="images/student-energy-logo.jpeg"
              alt="student energy logo"
              className="club-logo"
            />
          </div>
          <div className="club-role">Director of Finance</div>
          <div className="club-name"><p>Student Energy at SFU</p></div>
       

          <div className="dropdown-btn">
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

        </div>

            {activeIndices.includes(0) && (
            <div className = "hidden-info">
            <div className="duration">March 2021 - June 2023</div>
            <p className="organization-desc">
              Student Energy is a global youth-led organization empowering the next generation of leaders to accelerate
              the transition to a sustainable, equitable energy future.
            </p>
            <ul>
              <li>Collaborated with executive members to identify external funding opportunities.</li>
              <li>Managed operational financial tasks, including reimbursements and grant applications.</li>
              <li>Demonstrated leadership by overseeing budget allocation and financial reporting.</li>
              <li>Helped in the organization and delivery of events such as Professor of the Semester,
                  student networking events, skills building workshops and much more.
              </li>
            </ul>
         </div>
        )}


        </div>

        <div className="club">

        <div className="visable-container" onClick={() => toggleDetails(1)}>
        <div className = "logo-container-club">
          <img
              src="images/sma-logo.jpeg"
              alt="sma logo"
              className="club-logo"
            />
          </div>
          <div className="club-role">Business Development Coordinator</div>
           <div className="club-name"><p>Student Marketing Association at SFU</p></div>
         
          <div className="dropdown-btn">
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

          </div>

          

          {activeIndices.includes(1) && (
        <div className = "hidden-info">
          
          <div className="duration">July 2020 - April 2021</div>

          <p className="organization-desc">
            SFU Student Marketing Association bridges the gap between students and the marketing industry by 
            providing hands-on project experience and industry networking opportunities.
          </p>

          <ul>
            <li>Helped organize and run the REACH program, which is a semester-long program connecting 
                SFU Students with local businesses, providing them with the opportunity to gain hands-on 
                marketing experience.</li>
            <li>Networked with industry professionals to secure speakers for marketing workshops.</li>
            <li>Developed and delivered engaging presentations to students.</li>
            <li>Collaborated with other organizers to deliver weekly workshops to students</li>
          </ul>

        </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Leadership;
