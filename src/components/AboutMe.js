import "../styles/AboutMe.css";

function AboutMe() {
  return (
    <div className="AboutMe">
      <h1>About Me</h1>

      <div className="paragraphs">
        <p>
          Hey! I'm Guneet, welcome to my little corner of the internet. Super glad you're here 
          (hi mom, if you're reading this 👋). I'm wrapping up my final year at Simon Fraser University, 
          studying Computer Science and Business. 💻📈
        </p>

        <p>
          When I'm not debugging code, you'll probably find me chasing sunsets in the mountains, skiing down slopes, 
          or getting lost in nature. ☀️❄️⛰️ Curious to know more or just wanna say hi? 
          My socials are linked below, so feel free to hit me up, I'm always open for a coffee chat. ☕
        </p>
      </div>

      <div className="logo-collection">
        <a
          href="https://github.com/GuneetGill"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/github-logo.png" alt="GitHub logo" className="logo" />
        </a>

        <a
          href="https://linkedin.com/in/guneet-gill"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/linkedin-logo.png" alt="LinkedIn logo" className="logo" />
        </a>

        <a href="mailto:gkg26@sfu.ca">
          <img src="/images/email-logo.png" alt="Email logo" className="logo" />
        </a>
      </div>
    </div>
  );
}

export default AboutMe;



