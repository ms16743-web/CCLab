/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/

let dotX, dotY;
let dotVisible = false;
let pacX, pacY;
let speed = 3;
let pacSize=60;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent("p5-canvas-container");
  pacX = width / 2;
  pacY = height / 2;
}

function draw() {
  background(0);

  // Move Pac-Man toward dot if it exists
  if (dotVisible) {
    let dx = dotX - pacX;
    let dy = dotY - pacY;
    let d = sqrt(dx * dx + dy * dy);

    if (d > speed) {
      pacX += (dx / d) * speed;
      pacY += (dy / d) * speed;
    } else {
      dotVisible = false; // Pac-Man reached dot -> "eat" it
      pacSize+=40;
      
    }
  }

  // Draw Pac-Man
  push();
  translate(pacX, pacY);
  let mouth = map(sin(frameCount * 0.15), -1, 1, PI / 30, PI / 4);
  fill(255, 255, 0);
  arc(0, 0, pacSize, pacSize, mouth, TWO_PI - mouth, PIE);
  fill(0);
  circle(pacSize * 0.07, -pacSize * 0.25, pacSize * 0.08);
  pop();

  // Draw dot if visible
  if (dotVisible) {
    fill(255, 0, 0);
    circle(dotX, dotY, 6);
  }
}

function mousePressed() {
  dotX = mouseX;
  dotY = mouseY;
  dotVisible = true;
}

