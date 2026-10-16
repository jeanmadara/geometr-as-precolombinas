// --- VARIABLES GLOBALES ---
const imagePaths = [
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

// --- CONFIGURACIÓN DE PERFORMANCE ---
const slideDuration = 4000;
const fadeDuration = 1000;
let archiveRunning = false;
let startFrame = 0;
let totalMs = 0; // Motor de tiempo unificado por cuadros

let images = [];        // Arreglo para guardar las imágenes cargadas

// Motor de captura CCapture.js
let capturer = new CCapture({ format: 'webm', framerate: 30 });
let p5Canvas;

// 1. CARGA DE ARCHIVOS CON OPTIMIZACIÓN
function preload() {
  for (let i = 0; i < imagePaths.length; i++) {
    loadImage(imagePaths[i], img => {
      images[i] = img;
    });
  }
}

// 2. CONFIGURACIÓN INICIAL
function setup() {
  p5Canvas = createCanvas(windowWidth, windowHeight);
  frameRate(30);
  imageMode(CENTER);

  // Iniciar automáticamente el archivo
  archiveRunning = true;
  startFrame = frameCount;
}

// 3. DIBUJO 
function draw() {
  if (!archiveRunning) {
    background(0);
    return;
  }

  // INICIO DE GRABACIÓN AUTOMÁTICO
  if (frameCount === 1) {
    capturer.start();
    console.log("GRABACIÓN INICIADA");
  }

  // --- CÁLCULOS DE TIEMPO (Sincronía por Cuadros) ---
  totalMs = (frameCount - startFrame) * 33.333; // 1000/30ms exactos
  let currentSlideMs = totalMs % slideDuration;
  let index = floor(totalMs / slideDuration) % images.length;
  let progreso = currentSlideMs / slideDuration;

  // LÓGICA DE FADE-IN (Sincronizada por Ms)
  let opacidad = 255;
  if (currentSlideMs < fadeDuration) {
    opacidad = map(currentSlideMs, 0, fadeDuration, 0, 255);
  }

  // 1. DIBUJAR IMAGEN PREVIA (Por debajo, se desvanece suavemente)
  if (currentSlideMs < fadeDuration && totalMs >= slideDuration) {
    let prevIndex = (index - 1 + images.length) % images.length;
    push();
    tint(255, 255 - opacidad);
    dibujarPieza(prevIndex, 1.0); // Se queda quieta en su tamaño final
    pop();
  }

  // 2. DIBUJAR IMAGEN ACTUAL (Siempre en movimiento real)
  push();
  tint(255, opacidad);
  dibujarPieza(index, progreso);
  pop();

  // CAPTURA Y GESTIÓN DE TIEMPO
  capturer.capture(p5Canvas.canvas);

  let totalMsCycle = images.length * slideDuration;
  if (totalMs >= totalMsCycle) {
    noLoop();
    capturer.stop();
    capturer.save();
    console.log("CICLO COMPLETO: Grabación guardada.");
  }
}

// FUNCIONES DE APOYO
function dibujarPieza(i, prog) {
  let img = images[i];
  if (!img) return;

  // Lógica de Zoom: Empieza en 1.0 (o .85) y crece hasta 1.15
  let zoom = .85 + (prog * 0.15);

  let w = width * zoom * 0.8;
  let h = (img.height / img.width) * w;

  image(img, width / 2, height / 2, w, h);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key === 'f' || key === 'F') {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
