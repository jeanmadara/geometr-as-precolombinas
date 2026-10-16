/*
==============================================================
  ESCENA 1: Geometric Heartbeat (Jaguar Tolita 3D Wireframe)
  REFERENCIA: Jaguar zoomorfo Tolita (500 a.C. - 500 d.C.)
  UBICACIÓN: sketchs/scene1/sketch.js
==============================================================
*/

let modelObj;
let angle = 0;
let capturer;
let p5Canvas;
let capturing = false; // Activar con ?capture=true en URL

const MODEL_URL = (typeof MODEL_PATH !== 'undefined') 
  ? MODEL_PATH 
  : '../../scene1 3D/assets/tolita2.obj';

function preload() {
  modelObj = loadModel(MODEL_URL, true);
}

function setup() {
  p5Canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  // Parámetro de captura opcional
  if (new URLSearchParams(window.location.search).get('capture') === 'true') {
    capturing = true;
    capturer = new CCapture({ format: 'webm', framerate: 30 });
  }
}

function draw() {
  background(0);

  // Animación de respiración (Heartbeat sinusoidal)
  let breathSpeed = frameCount * 1.5;
  let breathScale = map(sin(breathSpeed), -1, 1, 1.0, 1.08);

  // Pulso de luz entre dorado y blanco brillante
  let pulse = map(sin(breathSpeed), -1, 1, 150, 255);
  stroke(255, pulse, 100, 150);
  strokeWeight(0.9);
  noFill();

  // Rotaciones progresivas
  rotateY(angle);
  angle += 0.25;

  if (frameCount > 1800) {
    rotateX(angle * 0.7);
  }
  if (frameCount > 3600) {
    rotateZ(angle * 0.5);
  }

  // Escala adaptada a la ventana
  let baseScale = min(width, height) / 480;
  scale(-2.4 * baseScale * breathScale);

  if (modelObj) {
    model(modelObj);
  }

  // Captura opcional
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

// Receptor de eventos de pausa/reanudación desde el dossier
window.addEventListener('message', (e) => {
  if (e.data === 'pause' || e.data?.action === 'pause') {
    if (typeof noLoop === 'function') noLoop();
  } else if (e.data === 'resume' || e.data?.action === 'resume') {
    if (typeof loop === 'function') loop();
  }
});
