import { Rive } from "@rive-app/canvas";

const canvas = document.getElementById("riveCanvas");

// Initialize Rive animation
const riveInstance = new Rive({
  src: "/remote (2).riv", // Path to .riv file (must be in the /public folder)
  canvas: canvas,
  autoplay: true,
  stateMachines: ["State Machine 1"], // Replace with your state machine name later. right now its this one
  onLoad: () => {
    console.log("Rive loaded");

    // List all inputs from the state machine right now we just have one for click right below 
    const inputs = riveInstance.stateMachineInputs("State Machine 1");
    console.log("Inputs:", inputs); 

    const clickTrigger = inputs.find(
      (input) => input.name === "Click" && input.type === "trigger"
    );

    // Fire the trigger when the canvas is clicked
    if (clickTrigger) {
      canvas.addEventListener("click", () => clickTrigger.fire());
    }
  },
});
