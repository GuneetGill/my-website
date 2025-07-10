import { useState, useEffect, useRef } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/joy/Switch";
import "../styles/Header.css";
import * as fabric from "fabric";

import tryme from "../static-img/tryme.png";

import drawing0 from "../drawings/drawing0.json";
import drawing1 from "../drawings/drawing1.json";
import drawing2 from "../drawings/drawing2.json";
import drawing3 from "../drawings/drawing3.json";
import drawing4 from "../drawings/drawing4.json";
import drawing5 from "../drawings/drawing5.json";
import drawing6 from "../drawings/drawing6.json";
import drawing7 from "../drawings/drawing7.json";
import drawing8 from "../drawings/drawing8.json";
import drawing9 from "../drawings/drawing9.json";
import drawing10 from "../drawings/drawing10.json";
import drawing11 from "../drawings/drawing11.json";
import drawing12 from "../drawings/drawing12.json";


function Header({ fabricCanvas }) {

 const fabricCanvasRef = useRef(null);
 const canvasRef = useRef(null);

  const [checked, setChecked] = useState(true);
  const cancelRef = useRef(false); 

  const drawings = [
    drawing0, drawing1, drawing2, drawing3, drawing4,
    drawing5, drawing6, drawing7, drawing8, drawing9,
    drawing10, drawing11, drawing12
  ];


  // Set a consistent delay for all drawings (e.g., 1000ms)
  const delayTime = 800;

  // Load all drawings with delay between each
  const animateDrawings = async () => {
    for (let i = 0; i < drawings.length; i++) {
      if (cancelRef.current) return //cancel animation
      
      try 
      {
        //display item 
        await fabricCanvas.loadFromJSON(drawings[i]).then((fabricCanvas) => fabricCanvas.renderAll());
        //add timeout 
        await new Promise((resolve) => setTimeout(resolve, delayTime));
      } 
      catch (error) 
      {
        console.error(`Error loading drawing ${i}:`, error);
      }
    }
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(event.target.checked);

    if (!fabricCanvas) return;

    if (event.target.checked){
      //clear canvas
      fabricCanvas.clear()
      cancelRef.current = true;
      console.log("turn off")
      return
    }
    else{
      cancelRef.current = false;
      console.log("turn on")
      animateDrawings()
    }
  };


  return (
    <div className="Header">
      <div className="header-top">

        <h1>Guneet Gill</h1>
  
        <span className="switch-container">
          <FormControlLabel
            className="switch"
            control={
              <Switch
                checked={checked}
                onChange={handleChange}
                size="lg"
                variant="solid"
                color={checked ? "neutral" : "primary"}
              />
            }
            label="Crazy Mode"
          />
        </span>

        <img src={tryme} className="tryme-img" />

      </div>
  
      {/* <div className="tryme">
        <img src={tryme} className="tryme-img" />
      </div> */}


    </div>
  );
}
  export default Header;


 