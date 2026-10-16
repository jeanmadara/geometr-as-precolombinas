// --- VARIABLES GLOBALES ---
const imagePaths = [
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

// --- CONFIGURACIÓN DE PERFORMANCE ---
const slideDuration = 5000;
const fadeDuration = 1000;
let archiveRunning = false;
let startFrame = 0;
let totalMs = 0; // Motor de tiempo unificado por cuadros

let images = [];        // Arreglo para guardar las imágenes cargadas

// Motor de captura CCapture.js
let capturer = new CCapture({ format: 'webm', framerate: 30 });
let p5Canvas;

// 1. CARGA DE ARCHIVOS CON OPTIMIZACIÓN (1080x1080 Fuerza bruta)
function preload() {
  for (let i = 0; i < imagePaths.length; i++) {
    loadImage(imagePaths[i], img => {
      //img.resize(1080, 1080); 
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

  // INICIO DE GRABACIÓN AUTOMÁTICO
  if (frameCount === 1) {
    capturer.start();
    console.log("GRABACIÓN INICIADA");
  }
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
