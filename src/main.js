import { Rive } from "@rive-app/canvas";

const canvas = document.getElementById("riveCanvas");

const riveInstance = new Rive({
  src: "/remote (2).riv", // Make sure this file is in the "public" folder
  canvas: canvas,
  autoplay: true,
  stateMachines: ["State Machine 1"], // Replace with your actual state machine name
  onLoad: () => {
    console.log("Rive loaded");

    const inputs = riveInstance.stateMachineInputs("State Machine 1");
    console.log("Inputs:", inputs); // log available triggers, booleans, numbers

    const clickTrigger = inputs.find((input) => input.name === "Click" && input.type === "trigger");

    if (clickTrigger) {
      canvas.addEventListener("click", () => clickTrigger.fire());
    }
  },
});
