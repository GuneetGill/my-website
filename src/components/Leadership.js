import "../styles/Leadership.css";

function Leadership() {
  return (
    <div className="Leadership">
      <div clasName = "section-heading">
      <h1>Leadership</h1>
      </div>
      
      <div className="clubs-list">

        <div className="club">
          <div className = "logo">
          <img
              src="images/student-energy-logo.jpeg"
              alt="student energy logo"
              className="club-logo"
            />
          </div>
          <h3>Student Energy at SFU</h3>
          <div className="role">Director of Finance</div>
          <div className="duration">March 2021 - June 2023</div>
          <p className="organization-desc">
            Student Energy is a global youth-led organization empowering the next generation of leaders to accelerate
             the transition to a sustainable, equitable energy future.
          </p>
          <ul>
            <li>Collaborated with executive members to identify external funding opportunities.</li>
            <li>Managed operational financial tasks, including reimbursements and grant applications.</li>
            <li>Demonstrated leadership by overseeing budget allocation and financial reporting.</li>
          </ul>
        </div>

        <div className="club">
        <div className = "logo">
          <img
              src="images/sma-logo.jpeg"
              alt="sma logo"
              className="club-logo"
            />
          </div>
          <h3>Student Marketing Association at SFU</h3>
          <div className="role">Business Development Coordinator</div>
          <div className="duration">July 2020 - April 2021</div>
          <p className="organization-desc">
            SFU Student Marketing Association bridges the gap between students and the marketing industry by 
            providing hands-on project experience and industry networking opportunities.
          </p>
          <ul>
            <li>Networked with industry professionals to secure speakers for marketing workshops.</li>
            <li>Developed and delivered engaging presentations to students.</li>
            <li>Enhanced written and verbal communication through outreach campaigns.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Leadership;
