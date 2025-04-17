import { useState, useEffect, useRef } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/joy/Switch";
import "../styles/Header.css";
import * as fabric from "fabric";

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
import drawing13 from "../drawings/drawing13.json";
import drawing14 from "../drawings/drawing14.json";


function Header({ fabricCanvas }) {

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log("click");
  
    const drawings = [
      drawing0, drawing1, drawing2, drawing3, drawing4,
      drawing5, drawing6, drawing7, drawing8, drawing9,
      drawing10, drawing11, drawing12, drawing13, drawing14,
    ];
  

    if(!fabricCanvas) return;

    drawings.forEach((drawing, index) => {
      const delay = Math.random() * 4000;
    
      setTimeout(() => {
        console.log(`Loading drawing ${index}`);
        
        // Parse and add drawing objects instead of replacing canvas
        fabric.util.enlivenObjects(drawing.objects, (objects) => {
          objects.forEach((obj) => {
            fabricCanvas.add(obj);
          });
          fabricCanvas.renderAll();
          console.log(`Drawing ${index} loaded`);
        });
      }, delay);
    });
    
    
    // drawings.forEach((drawing, index) => {
    //   const delay = Math.random() * 4000; // random delay between 0 and 4000ms

    //   setTimeout(() => {
    //     console.log(`Loading drawing ${index}`);
    //     fabricCanvas.loadFromJSON(drawing, () => {
    //       fabricCanvas.renderAll();
    //       console.log(`Drawing ${index} loaded`);
    //     });
    //   }, delay);
    // });
  
    // drawings.forEach((drawing, index) => {
    //   console.log(drawing)
    //   fabricCanvas.loadFromJSON(drawing, () => {
    //       fabricCanvas.renderAll()});
    // });


  };
  
  return (
    <div className="Header">
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
    </div>
  );
}

export default Header;


/* 
his is usually caused by fabricCanvas.renderAll() not triggering a proper repaint, often due to:

Multiple rapid calls to loadFromJSON()

The DOM not updating until an interaction (like scroll or resize)

Fabric.js needing a reflow/refresh

⚠️ 2. You're Overwriting Each Drawing Instead of Stacking Them
fabricCanvas.loadFromJSON() replaces the entire canvas contents with each drawing.

So instead of "building up" drawings one by one, you're replacing the canvas over and over, and only the last one (with the last delay) will be visible.
*/