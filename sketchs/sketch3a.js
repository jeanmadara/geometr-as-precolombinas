/*
==============================================================
  SKETCH 3a: América Orrala
  UBICACIÓN: sketchs/sketch3a.js
==============================================================
*/

let circles = [];
let total = 100;
let img;
let capturer;
let p5Canvas;
let capturing = false;

const IMG_URL = (typeof ORRALA_IMG !== 'undefined')
  ? ORRALA_IMG
  : 'scene3-1 AmericaOrrala/orrala.png';

function preload() {
  img = loadImage(IMG_URL);
}

function setup() {
  p5Canvas = createCanvas(windowWidth, windowHeight);
  frameRate(30);
  imageMode(CENTER);
  background(0);

  if (new URLSearchParams(window.location.search).get('capture') === 'true') {
    capturing = true;
    capturer = new CCapture({ format: 'webm', framerate: 30 });
  }

  for (let i = 0; i < total; i++) {
    circles[i] = {
      prevPos: { x: width / 2, y: height / 2 },
      pos: { x: width / 2, y: height / 2 },
      dir: random() > 0.5 ? 1 : -1,
      radius: random(3, 10),
      angle: 0
    };
  }
}

function draw() {
  if (!img || !img.width) return;

  for (let i = 0; i < total; i++) {
    let circle = circles[i];
    circle.angle += (1 / circle.radius) * circle.dir;

    circle.pos.x += cos(circle.angle) * circle.radius;
    circle.pos.y += sin(circle.angle) * circle.radius;

    let sampleX = round(map(circle.pos.x, 0, width, 0, img.width));
    let sampleY = round(map(circle.pos.y, 0, height, 0, img.height));
    let pixelColor = img.get(sampleX, sampleY);

    if (
      brightness(pixelColor) > 70 ||
      circle.pos.x < 0 || circle.pos.x > width ||
      circle.pos.y < 0 || circle.pos.y > height
    ) {
      circle.dir *= -1;
      circle.radius = random(3, 10);
      circle.angle += PI;
    }

    stroke(pixelColor);
    strokeWeight(1.2);
    line(circle.prevPos.x, circle.prevPos.y, circle.pos.x, circle.pos.y);

    circle.prevPos.x = circle.pos.x;
    circle.prevPos.y = circle.pos.y;
  }

  if (capturing) {
    if (frameCount === 1) capturer.start();
    capturer.capture(p5Canvas.canvas);
    if (frameCount === 4000) {
      noLoop();
      capturer.stop();
      capturer.save();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
