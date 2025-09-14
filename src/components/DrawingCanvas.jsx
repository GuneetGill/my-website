import { useState, useEffect, useRef } from "react";
import "../styles/DrawingCanvas.css";
import * as fabric from "fabric";


function DrawingCanvas({ selectedColor, onCanvasReady }) {
  const canvasRef = useRef(null);        // Ref to <canvas> element
  const fabricCanvasRef = useRef(null);  // Ref to Fabric.js instance

  // set up fabric.js canvas, set up drawings
  useEffect(() => {

    const canvasElement = canvasRef.current;

    const getMainContentHeight = () => {

      const mainContent = document.querySelector(".main-content");
      const footer = document.querySelector(".footer");
      const mainHeight = mainContent ? mainContent.offsetHeight : 0;
      const footerHeight = footer ? footer.offsetHeight : 0;

  
      console.log("Main height:", mainHeight);
      console.log("Footer height:", footerHeight);
      console.log("Footer offsetHeight:", footer?.offsetHeight);
      console.log("Footer clientHeight:", footer?.clientHeight);
      console.log("Footer scrollHeight:", footer?.scrollHeight);

      return mainHeight + footerHeight;
     
    };

    // Initial height based on main-content
    const fabricCanvas = new fabric.Canvas(canvasElement, {
      height: getMainContentHeight(),
      width: window.innerWidth,
      isDrawingMode: true,
    });

    fabricCanvasRef.current = fabricCanvas;
    if (onCanvasReady) onCanvasReady(fabricCanvas);
    

    fabricCanvas.freeDrawingBrush = new fabric.PencilBrush(fabricCanvas);
    fabricCanvas.freeDrawingBrush.color = selectedColor;
    fabricCanvas.freeDrawingBrush.width = 4;


    // Resize handler
    const updateCanvasSize = () => {
      const newHeight = getMainContentHeight();
      fabricCanvas.setHeight(newHeight);
      fabricCanvas.setWidth(window.innerWidth);
      fabricCanvas.renderAll(); // important to refresh canvas after resize
    };

    fabricCanvas.freeDrawingCursor = 'url("/pencil.png") 2 2, auto';


    // Attach resize listener
    window.addEventListener("resize", updateCanvasSize);  

    return () => {
      fabricCanvas.dispose();
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, [onCanvasReady]);

  // Update brush color when it changes
  useEffect(() => {
    if (fabricCanvasRef.current) {
      fabricCanvasRef.current.isDrawingMode = false;
      fabricCanvasRef.current.freeDrawingBrush = new fabric.PencilBrush(fabricCanvasRef.current);
      fabricCanvasRef.current.freeDrawingBrush.color = selectedColor;
      fabricCanvasRef.current.freeDrawingBrush.width = 4;
      fabricCanvasRef.current.isDrawingMode = true;
    }
  }, [selectedColor]);

  //Load static images and keep on
  useEffect(() => {
    if (!fabricCanvasRef.current) return;
  
    const fabricCanvas = fabricCanvasRef.current;
  
    fabricCanvas.clear();



    const combinedJSON = {
      objects: [],
      background: null,
      backgroundImage: null,
      overlay: null,
      overlayImage: null,
      clipPath: null,
    };
    
  
    fabricCanvas.loadFromJSON(combinedJSON)
      .then(canvas => {
        canvas.requestRenderAll();
        console.log("Loaded drawing successfully!");
      })
      .catch(err => {
        console.error("Failed to load drawing:", err);
      });
  }, []);


  // Function to save the drawing as JSON or PNG when the user presses the "S" key
  //  const handleKeyDown = (e) => {
  //   if (e.key === "s" || e.key === "S") {

  //     // Export the canvas content as a PNG image
  //   const dataURL = fabricCanvasRef.current.toDataURL({
  //     format: 'png',
  //     quality: 1.0,
  //   });

    // const json = fabricCanvasRef.current.toJSON(); // Get the current drawing as JSON

    // // Create a new Blob from the JSON data, specifying the MIME type as 'application/json'
    // const blob = new Blob([JSON.stringify(json, null, 2)], {
    //   type: "application/json", // This indicates that it's a JSON file
    // });

    // Create a temporary <a> tag to trigger the download
    // const link = document.createElement("a");
    // link.href = dataURL;
    // link.download = "drawing.png";
   // link.href = URL.createObjectURL(blob); // Create a URL for the Blob
   // link.download = "drawing.json"; // Specify the filename for the download
  //   link.click(); // Programmatically click the link to trigger the download

  //   }
  // };

 // Add the keydown event listener
  // useEffect(() => {
  //   window.addEventListener("keydown", handleKeyDown);

  //   // Cleanup event listener on unmount
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  return (
    <div className="Canvas">
      <canvas ref={canvasRef} />
    </div>
  );
}

export default DrawingCanvas;
