import { useState, useEffect, useRef } from "react";
import "../styles/DrawingCanvas.css";
import * as fabric from "fabric";

//this is the one where u can freehand draw

function DrawingCanvas({selectedColor}) {

  //creates referance of <canvas> element in DOM 
  const canvasRef = useRef(null);

  //creates referance to store the Fabric.js canvas instance 
  const fabricCanvasRef = useRef(null);

  //runs code after component renders
    useEffect(() => {
        // Get full document height
        const pageHeight = document.documentElement.scrollHeight;

        // Initialize Fabric.js canvas and attach to <canvas> element 
        const fabricCanvas = new fabric.Canvas(canvasRef.current, {
            height: pageHeight, // Make it as tall as the document
            width: window.innerWidth,
            isDrawingMode: true,
        });

        // Store the Fabric.js canvas instance in the reference
        fabricCanvasRef.current = fabricCanvas;

        // Define the brush used for drawing
        fabricCanvas.freeDrawingBrush = new fabric.PencilBrush(fabricCanvas);
        fabricCanvas.freeDrawingBrush.color = selectedColor;
        fabricCanvas.freeDrawingBrush.width = 4;

        // Update canvas height if the page height changes
        const updateCanvasSize = () => {
          const newHeight = document.documentElement.scrollHeight;
          fabricCanvas.setHeight(newHeight);
          fabricCanvas.setWidth(window.innerWidth);
        };
        
        //listen for canvas page scroll or resize 
        window.addEventListener("resize", updateCanvasSize);
        window.addEventListener("scroll", updateCanvasSize);


        // Runs when the component is unmounted or before re-running useEffect
        //every time page is loaded we create new canvas
        return () =>{
            fabricCanvas.dispose();
            window.removeEventListener("resize", updateCanvasSize);
            window.removeEventListener("scroll", updateCanvasSize);
        };

    },[]); // The empty dependency array means this useEffect runs only once after the first render
    //this means it consttanly listening for those changes we mentioned its running in loop

  //Listen for color changes**
  useEffect(() => {
    if (fabricCanvasRef.current) {
      fabricCanvasRef.current.isDrawingMode = false; // Disable to force update
      fabricCanvasRef.current.freeDrawingBrush = new fabric.PencilBrush(fabricCanvasRef.current); // Reassign brush
      fabricCanvasRef.current.freeDrawingBrush.color = selectedColor;
      fabricCanvasRef.current.freeDrawingBrush.width = 4;
      fabricCanvasRef.current.isDrawingMode = true; // Re-enable
    }
  }, [selectedColor]);

  return (
    <div className="Canvas">
      <canvas ref = {canvasRef}> </canvas>
    </div>
  );
}

export default DrawingCanvas;
