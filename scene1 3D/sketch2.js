let modelObj;
let textureImg;

function preload() {
  modelObj = loadModel('assets/tolita2.obj', true);
  textureImg = loadImage('assets/venus2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  // === RESPIRACIÓN ===
  let breath = sin(frameCount * 1.2);
  let breathScale = map(breath, -1, 1, 0.97, 1.05);
  let zoom = map(breath, -1, 1, -40, 60);

  // === TRANSFORMACIONES ===
  translate(0, 0, zoom);
  rotateY(180); // corregir orientación
  scale(-2.5 * breathScale);

  // === TEXTURA ===
  noStroke();       // 🔥 importante: sin malla
  //texture(textureImg);
  ambientLight(80);
  directionalLight(255, 255, 255, 0.5, 1, -0.5);

  // Material base (color)
  ambientMaterial(212, 175, 55); // dorado

  // Brillo especular
  specularMaterial(255, 220, 120);
  shininess(50);
  model(modelObj);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}