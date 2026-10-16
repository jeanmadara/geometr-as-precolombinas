/*
==============================================================
  VISUAL: Visualizador 3D - Venus de Valdivia (Geometric Heartbeat)
  REFERENCIA: GA-7-876-78, (Cabeza y torso de figura antropomorfa, VALDIVIA) 
==============================================================

DESCRIPCIÓN:
Visualizador interactivo 3D con estética de "Latido Geométrico".
El modelo respira orgánicamente y la malla pulsa con luz, creando una
apariencia de artefacto digital vivo.

AUTOR:
Jean Carlos Correa – @jeanmadara 

PROYECTO:
Laboratorio Escénico "Geometrías Vivas", Premio Brasil VI Edición – Jóvenes Artistas 2025

FECHA:
julio 2025

==============================================================
*/

let modelObj;           // Contenedor del modelo .obj cargado
let angle = 0;          // Ángulo de rotación actual en grados
let textureImg;         // Imagen de textura (opcional si usamos solo wireframe)



/**
 * Configuración inicial
 */
let capturer = new CCapture({ format: 'webm', framerate: 30 });
let p5Canvas;
/**
 * Función de precarga - Ejecuta antes de setup()
 */
function preload() {
  // Carga el modelo .obj con normalización automática
  modelObj = loadModel('assets/tolita2.obj', true);
}
function setup() {
  p5Canvas = createCanvas(1280, 720, WEBGL);
  angleMode(DEGREES);
}
/**
 * Loop principal de renderizado
 */
function draw() {
  background(0);

  // === ANIMACIÓN DE RESPIRACIÓN (HEARTBEAT) ===
  // Calcula un factor de escala que oscila suavemente (onda sinusoidal)
  // frameCount * 1.5 controla la velocidad del latido
  // map(...) convierte la onda (-1 a 1) en un rango de escala sutil (1.0 a 1.08)
  let breathSpeed = frameCount * 1.5;
  let breathScale = map(sin(breathSpeed), -1, 1, 1.0, 1.08);

  // === ESTILO DE MALLA DINÁMICO ===
  // El color de la línea también pulsa, pero con un ligero desfase o velocidad diferente
  // Oscila entre un dorado suave y un blanco brillante
  let pulse = map(sin(breathSpeed), -1, 1, 150, 255);

  // Color: R=255, G=pulse (varía), B=100, Alpha=150
  // Esto crea un efecto de "energía" fluyendo por la malla
  stroke(255, pulse, 100, 150);
  strokeWeight(0.8); // Líneas finas y elegantes
  noFill();          // Solo wireframe

  // === ILUMINACIÓN ===
  // Aunque es wireframe, la luz puede afectar si se usan materiales, 
  // pero aquí es puramente estético por el color del stroke.
  //ambientLight(50, 50, 50);

  // === TRANSFORMACIONES ===
  rotateY(angle);
  angle += 0.2; // Rotación muy lenta y solemne

  // Activar rotaciones progresivamente:
  // Después de 1 minuto (1800 frames a 30fps)
  if (frameCount > 1800) {
    rotateX(angle);
  }

  // Después de otro minuto (3600 frames total)
  if (frameCount > 3600) {
    rotateZ(angle);
  }
  // Aplicar escala negativa (corrección de modelo) multiplicada por el factor de respiración
  scale(-2.5 * breathScale);

  // === RENDERIZADO ===
  model(modelObj);

  // CAPTURA Y GESTIÓN DE TIEMPO
  if (frameCount === 1) capturer.start();
  capturer.capture(p5Canvas.canvas);
  if (frameCount === 5400) {
    noLoop();
    capturer.stop();
    capturer.save();

  }
}


