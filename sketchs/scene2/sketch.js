/*
==============================================================
  ESCENA 2: Archivo de Mujeres
  REFERENCIA: 47 figuras antropomorfas (Formativo a Integración)
  UBICACIÓN: sketchs/scene2/sketch.js
==============================================================
*/

const BASE_DIR = (typeof SCENE2_BASE !== 'undefined')
  ? SCENE2_BASE
  : '../../scene2 Mujeres/';

const rawPaths = [
  // 1. FORMATIVO
  "Img/Formativo/Valdivia/1 _MG_8305.png", "Img/Formativo/Valdivia/GA-17-2558-83.png", "Img/Formativo/Valdivia/GA-2-2373-82.png", "Img/Formativo/Valdivia/GA-2-793-78.png", "Img/Formativo/Valdivia/GA-3-1101-79.png", "Img/Formativo/Valdivia/IMG_1629.png", "Img/Formativo/Valdivia/_MG_8272.png", "Img/Formativo/Valdivia/_MG_8493.png", "Img/Formativo/Valdivia/_MG_8510.png",
  "Img/Formativo/Machalilla/0G7A9999.png", "Img/Formativo/Machalilla/GA-1-2400-82.png", "Img/Formativo/Machalilla/GA-1-2520-83.png", "Img/Formativo/Machalilla/GA-1-2668-84.png", "Img/Formativo/Machalilla/GA-1-851-78.png", "Img/Formativo/Machalilla/GA-179-969-78 J.png", "Img/Formativo/Machalilla/GA-576-200-76.png",
  "Img/Formativo/Chorrera/GA-1-1978-81 Chorrera.png", "Img/Formativo/Chorrera/GA-3-2511-83.png", "Img/Formativo/Chorrera/GA-5-2326-82.png", "Img/Formativo/Chorrera/IMG_20250716_163931_072.png", "Img/Formativo/Chorrera/IMG_20250723_122937_937.png", "Img/Formativo/Chorrera/_DSC8673.png",

  // 2. DESARROLLO REGIONAL
  "Img/DesarrolloRegional/Bahia/IMG_20250718_120421_308.png", "Img/DesarrolloRegional/Bahia/IMG_7757.png", "Img/DesarrolloRegional/Bahia/IMG_8373.png", "Img/DesarrolloRegional/Bahia/_JPC3117.png", "Img/DesarrolloRegional/Bahia/_MG_9493.png",
  "Img/DesarrolloRegional/Tolita/GA-2-990-78.png", "Img/DesarrolloRegional/Tolita/_DSC8642.png",
  "Img/DesarrolloRegional/guangala/1M5-04424-86.png", "Img/DesarrolloRegional/guangala/GA-2-1076-78.png", "Img/DesarrolloRegional/guangala/GA-2-2164-82.png", "Img/DesarrolloRegional/guangala/GA-3-467-77.png",
  "Img/DesarrolloRegional/Jama/GA-1-1596-80.png", "Img/DesarrolloRegional/Jama/GA-1-2198-82.png", "Img/DesarrolloRegional/Jama/GA-1-3123-96 jama.png", "Img/DesarrolloRegional/Jama/GA-3-1105-79.png", "Img/DesarrolloRegional/Jama/GA-4-1046-78 jama.png", "Img/DesarrolloRegional/Jama/GA-79-2150-82.png", "Img/DesarrolloRegional/Jama/IMG_20250718_114626_265.png", "Img/DesarrolloRegional/Jama/IMG_8357.png", "Img/DesarrolloRegional/Jama/_MG_9504.png", "Img/DesarrolloRegional/Jama/_MG_9511.png",

  // 3. INTEGRACIÓN
  "Img/Integracion/Milagro/GA-61-971-78.png",
  "Img/Integracion/Manteño/GA-1-1949-81.png", "Img/Integracion/Manteño/GA-1-2017-81.png", "Img/Integracion/Manteño/GA-1281-3122-95.png", "Img/Integracion/Manteño/GA-3-1779-81.png", "Img/Integracion/Manteño/IMG_20250723_103455_672.png"
];

const imagePaths = rawPaths.map(p => BASE_DIR + p);

const slideDuration = 4000;
const fadeDuration = 1000;
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
      console.warn("No se pudo cargar:", imagePaths[i]);
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

  // Dibujar imagen previa en fade-out
  if (currentSlideMs < fadeDuration && totalMs >= slideDuration) {
    let prevIndex = (index - 1 + images.length) % images.length;
    push();
    tint(255, 255 - opacidad);
    dibujarPieza(prevIndex, 1.0);
    pop();
  }

  // Dibujar imagen actual con zoom progresivo Ken Burns
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
