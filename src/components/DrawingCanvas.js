// import { useState, useEffect, useRef } from "react";
// import "../styles/DrawingCanvas.css";
// import * as fabric from "fabric";

// //this is the one where u can freehand draw

// function DrawingCanvas({selectedColor , onCanvasReady }) {

//   //creates referance of <canvas> element in DOM 
//   const canvasRef = useRef(null);

//   //creates referance to store the Fabric.js canvas instance 
//   const fabricCanvasRef = useRef(null);

//   //runs code after component renders
//     useEffect(() => {
//         // Get full document height
//         const pageHeight = document.documentElement.scrollHeight;

//         // Initialize Fabric.js canvas and attach to <canvas> element 
//         const fabricCanvas = new fabric.Canvas(canvasRef.current, {
//             height: pageHeight, // Make it as tall as the document
//             width: window.innerWidth,
//             isDrawingMode: true,
//         });

//         // Store the Fabric.js canvas instance in the reference
//         fabricCanvasRef.current = fabricCanvas;

//         // Pass the canvas reference up to the parent
//         if (onCanvasReady) {
//           onCanvasReady(fabricCanvas);
//         }

//         // Define the brush used for drawing
//         fabricCanvas.freeDrawingBrush = new fabric.PencilBrush(fabricCanvas);
//         fabricCanvas.freeDrawingBrush.color = selectedColor;
//         fabricCanvas.freeDrawingBrush.width = 4;

//         // Update canvas height if the page height changes
//         const updateCanvasSize = () => {
//           const newHeight = document.documentElement.scrollHeight;
//           fabricCanvas.setHeight(newHeight);
//           fabricCanvas.setWidth(window.innerWidth);
//         };
        
//         //listen for canvas page scroll or resize 
//         window.addEventListener("resize", updateCanvasSize);
//         window.addEventListener("scroll", updateCanvasSize);


//         // Runs when the component is unmounted or before re-running useEffect
//         //every time page is loaded we create new canvas
//         return () =>{
//             fabricCanvas.dispose();
//             window.removeEventListener("resize", updateCanvasSize);
//             window.removeEventListener("scroll", updateCanvasSize);
//         };

//     },[]); // The empty dependency array means this useEffect runs only once after the first render
//     //this means it consttanly listening for those changes we mentioned its running in loop

//   //Listen for color changes**
//   useEffect(() => {
//     if (fabricCanvasRef.current) {
//       fabricCanvasRef.current.isDrawingMode = false; // Disable to force update
//       fabricCanvasRef.current.freeDrawingBrush = new fabric.PencilBrush(fabricCanvasRef.current); // Reassign brush
//       fabricCanvasRef.current.freeDrawingBrush.color = selectedColor;
//       fabricCanvasRef.current.freeDrawingBrush.width = 4;
//       fabricCanvasRef.current.isDrawingMode = true; // Re-enable
//     }
//   }, [selectedColor]);


//   //  // Function to save the drawing as JSON or SVG when the user presses the "S" key
//   //  const handleKeyDown = (e) => {
//   //   if (e.key === "s" || e.key === "S") {

//   //   const json = fabricCanvasRef.current.toJSON(); // Get the current drawing as JSON

//   //   // Create a new Blob from the JSON data, specifying the MIME type as 'application/json'
//   //   const blob = new Blob([JSON.stringify(json, null, 2)], {
//   //     type: "application/json", // This indicates that it's a JSON file
//   //   });

//   //   // Create a temporary <a> tag to trigger the download
//   //   const link = document.createElement("a");
//   //   link.href = URL.createObjectURL(blob); // Create a URL for the Blob
//   //   link.download = "drawing.json"; // Specify the filename for the download
//   //   link.click(); // Programmatically click the link to trigger the download

//   //   }
//   // };

//   // // Add the keydown event listener
//   // useEffect(() => {
//   //   window.addEventListener("keydown", handleKeyDown);

//   //   // Cleanup event listener on unmount
//   //   return () => {
//   //     window.removeEventListener("keydown", handleKeyDown);
//   //   };
//   // }, []);


//   return (
//     <div className="Canvas">
//       <canvas ref = {canvasRef}> </canvas>
//     </div>
//   );
// }

// export default DrawingCanvas;
import { useState, useEffect, useRef } from "react";
import "../styles/DrawingCanvas.css";
import * as fabric from "fabric";

function DrawingCanvas({ selectedColor, onCanvasReady }) {
  const canvasRef = useRef(null);        // Ref to <canvas> element
  const fabricCanvasRef = useRef(null);  // Ref to Fabric.js instance

  useEffect(() => {
    const canvasElement = canvasRef.current;

    const getMainContentHeight = () => {
      const mainContent = document.querySelector(".main-content");
      return mainContent ? mainContent.offsetHeight : window.innerHeight;
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


   // Function to save the drawing as JSON or SVG when the user presses the "S" key
   const handleKeyDown = (e) => {
    if (e.key === "s" || e.key === "S") {

    const json = fabricCanvasRef.current.toJSON(); // Get the current drawing as JSON

    // Create a new Blob from the JSON data, specifying the MIME type as 'application/json'
    const blob = new Blob([JSON.stringify(json, null, 2)], {
      type: "application/json", // This indicates that it's a JSON file
    });

    // Create a temporary <a> tag to trigger the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob); // Create a URL for the Blob
    link.download = "drawing.json"; // Specify the filename for the download
    link.click(); // Programmatically click the link to trigger the download

    }
  };

  // Add the keydown event listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="Canvas">
      <canvas ref={canvasRef} />
    </div>
  );
}

export default DrawingCanvas;
