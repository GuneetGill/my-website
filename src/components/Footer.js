import * as React from "react";
import "../styles/Footer.css";

function Footer({setColor}) {
  return (
    <div className="Footer">
      <div id="footer-color">
      <button className="circle-btn red" onClick={() => setColor("#FF0000")}></button>
        <button className="circle-btn blue" onClick={() => setColor("#0000FF")}></button>
        <button className="circle-btn green" onClick={() => setColor("#00FF00")}></button>
        <button className="circle-btn yellow" onClick={() => setColor("#FFFF00")}></button>
      </div>
    </div>
  );
}

export default Footer;
