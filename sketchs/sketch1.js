/*
==============================================================
  SKETCH 1: Geometric Heartbeat (Jaguar Tolita 3D Wireframe)
  UBICACIÓN: sketchs/sketch1.js
==============================================================
*/

let modelObj;
let angle = 0;
let capturer;
let p5Canvas;
let capturing = false;

const MODEL_URL = (typeof MODEL_PATH !== 'undefined') 
  ? MODEL_PATH 
  : 'scene1 3D/assets/tolita2.obj';

function preload() {
  modelObj = loadModel(MODEL_URL, true);
}

function setup() {
  p5Canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  if (new URLSearchParams(window.location.search).get('capture') === 'true') {
    capturing = true;
    capturer = new CCapture({ format: 'webm', framerate: 30 });
  }
}

function draw() {
  background(0);

  let breathSpeed = frameCount * 1.5;
  let breathScale = map(sin(breathSpeed), -1, 1, 1.0, 1.08);

  let pulse = map(sin(breathSpeed), -1, 1, 150, 255);
  stroke(255, pulse, 100, 150);
  strokeWeight(0.9);
  noFill();

  rotateY(angle);
  angle += 0.25;

  if (frameCount > 1800) rotateX(angle * 0.7);
  if (frameCount > 3600) rotateZ(angle * 0.5);

  let baseScale = min(width, height) / 480;
  scale(-2.4 * baseScale * breathScale);

  if (modelObj) model(modelObj);

  if (capturing) {
    if (frameCount === 1) capturer.start();
    capturer.capture(p5Canvas.canvas);
    if (frameCount === 5400) {
      noLoop();
      capturer.stop();
      capturer.save();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
