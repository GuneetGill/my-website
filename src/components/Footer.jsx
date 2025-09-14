import "../styles/Footer.css";

import doodleimg from "../static-img/doodle.png";

function Footer({setColor}) {

  return (
    <div className="Footer">

      <img src={doodleimg} alt="doodle here" className="doodle-img" />

      <div id="footer-color">
        <button className="circle-btn red" onClick={() => setColor("#FF0000")}></button>
        <button className="circle-btn blue" onClick={() => setColor("#0000FF")}></button>
        <button className="circle-btn green" onClick={() => setColor("#00FF00")}></button>
        <button className="circle-btn black" onClick={() => setColor("#000000")}></button>
      </div>
     
    </div>
  );
}

export default Footer;
