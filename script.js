// JavaScript code to work with the canvas
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

// Set the canvas size to match the viewport size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define your animation or game logic here
function draw() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Example: Draw a moving rectangle
  const rectWidth = 50;
  const rectHeight = 50;
  const x = (canvas.width - rectWidth) * 0.5 + Math.sin(Date.now() * 0.005) * 100;
  const y = (canvas.height - rectHeight) * 0.5;

  context.fillStyle = "blue";
  context.fillRect(x, y, rectWidth, rectHeight);

  // Add more drawing and animation logic here

  // Request the next animation frame
  requestAnimationFrame(draw);
}

// Start the animation loop
draw();
