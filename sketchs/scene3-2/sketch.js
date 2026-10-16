/*
==============================================================
  ESCENA 3b: Vasijas Funerarias
  REFERENCIA: 20 vasijas y urnas mortuorias (Formativo a Integración)
  UBICACIÓN: sketchs/scene3-2/sketch.js
==============================================================
*/

const BASE_DIR = (typeof SCENE3B_BASE !== 'undefined')
  ? SCENE3B_BASE
  : '../../scene3-2 Vasija funeraria/';

const rawPaths = [
  // Jama-Coaque
  "Img/Jama-Coaque/GA-10-1118-79.png",

  // Manteño
  "Img/Manteño/GA-1-1395-80.png",
  "Img/Manteño/GA-1-2230-82.png",
  "Img/Manteño/GA-12-1161-79.png",
  "Img/Manteño/GA-36-3122-95.png",
  "Img/Manteño/GA-43-3122-95.png",
  "Img/Manteño/GA-5-3229-07.png",
  "Img/Manteño/GA-75-3256-19.png",

  // Milagro-Quevedo
  "Img/Milagro-Quevedo/GA-1-181-76.png",
  "Img/Milagro-Quevedo/GA-1-2180-82.png",
  "Img/Milagro-Quevedo/GA-1-2481-83.png",
  "Img/Milagro-Quevedo/GA-1-654-77.png",
  "Img/Milagro-Quevedo/GA-1-736-77.png",
  "Img/Milagro-Quevedo/GA-1-987-78.png",
  "Img/Milagro-Quevedo/GA-22-2114-82.png",
  "Img/Milagro-Quevedo/GA-5-2122-82.png",

  // Tolita
  "Img/Tolita/GA-1-1002-78.png",
  "Img/Tolita/GA-1-1490-80.png",
  "Img/Tolita/GA-1-2092-81.png",
  "Img/Tolita/GA-2-2093-81.png"
];

const imagePaths = rawPaths.map(p => BASE_DIR + p);

const slideDuration = 5000;
const fadeDuration = 1200;
let archiveRunning = true;
let startFrame = 0;
let totalMs = 0;
let images = [];
let capturer;
let p5Canvas;
let capturing = false;

function preload() {
  for (let i = 0; i < imagePaths.length; i++) {
    loadImage(imagePaths[i], img => {
      images[i] = img;
    }, err => {
      console.warn("No se pudo cargar urna:", imagePaths[i]);
    });
  }
}

function setup() {
  p5Canvas = createCanvas(windowWidth, windowHeight);
  frameRate(30);
  imageMode(CENTER);
  startFrame = frameCount;

  if (new URLSearchParams(window.location.search).get('capture') === 'true') {
    capturing = true;
    capturer = new CCapture({ format: 'webm', framerate: 30 });
  }
}

function draw() {
  background(0);
  if (!archiveRunning || images.length === 0) return;

  totalMs = (frameCount - startFrame) * 33.333;
  let currentSlideMs = totalMs % slideDuration;
  let index = floor(totalMs / slideDuration) % images.length;
  let progreso = currentSlideMs / slideDuration;

  let opacidad = 255;
  if (currentSlideMs < fadeDuration) {
    opacidad = map(currentSlideMs, 0, fadeDuration, 0, 255);
  }

  // Imagen previa con fade-out
  if (currentSlideMs < fadeDuration && totalMs >= slideDuration) {
    let prevIndex = (index - 1 + images.length) % images.length;
    push();
    tint(255, 255 - opacidad);
    dibujarPieza(prevIndex, 1.0);
    pop();
  }

  // Imagen actual con zoom solemne Ken Burns
  push();
  tint(255, opacidad);
  dibujarPieza(index, progreso);
  pop();

  if (capturing) {
    if (frameCount === 1) capturer.start();
    capturer.capture(p5Canvas.canvas);
    let totalMsCycle = images.length * slideDuration;
    if (totalMs >= totalMsCycle) {
      noLoop();
      capturer.stop();
      capturer.save();
    }
  }
}

function dibujarPieza(i, prog) {
  let img = images[i];
  if (!img) return;

  let zoom = 0.85 + (prog * 0.15);
  let maxW = min(width * 0.85, height * 0.85 * (img.width / img.height));
  let w = maxW * zoom;
  let h = (img.height / img.width) * w;

  image(img, width / 2, height / 2, w, h);
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
