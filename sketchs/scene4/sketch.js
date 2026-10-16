/*
==============================================================
  ESCENA 4: Cosmovisión
  REFERENCIA: Geometría progresiva sobre grano fotográfico
  UBICACIÓN: sketchs/scene4/sketch.js
==============================================================
*/

let W, H;
let shapes = [];
let noiseOff = 0;
let pg;
let capturer;
let p5Canvas;
let capturing = false;

function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
function easeInOut(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

class Shape {
  constructor() { this.reset(true); }

  reset(immediate) {
    let margin = 40;
    this.x = random(margin, width - margin);
    this.y = random(margin, height - margin);
    this.type = random() < 0.5 ? 'rect' : 'circle';
    this.size = random(16, 90);
    this.born = frameCount + (immediate ? floor(random(0, 180)) : 0);
    this.lifespan = random(200, 500);
    this.alpha = 0;
    this.targetAlpha = random(40, 150);
    this.rotation = random(TWO_PI);
    this.rotSpeed = random(-0.005, 0.005);
    this.hasChild = random() < 0.35;
    this.childOffset = random(0.3, 0.7);
  }

  update() {
    let age = frameCount - this.born;
    if (age < 0) return;
    let fadeIn = constrain(age / 80, 0, 1);
    let fadeOut = constrain((this.lifespan - age) / 60, 0, 1);
    this.alpha = easeOut(fadeIn) * easeInOut(fadeOut) * this.targetAlpha;
    this.rotation += this.rotSpeed;
    if (age > this.lifespan) this.reset(false);
  }

  draw() {
    if (frameCount < this.born) return;
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    stroke(255, this.alpha);
    strokeWeight(1);
    noFill();

    if (this.type === 'rect') {
      rectMode(CENTER);
      rect(0, 0, this.size, this.size);
      if (this.hasChild) {
        rect(0, 0, this.size * this.childOffset, this.size * this.childOffset);
      }
    } else {
      ellipse(0, 0, this.size);
      if (this.hasChild) {
        ellipse(0, 0, this.size * this.childOffset);
      }
    }
    pop();
  }
}

class GeoLine {
  constructor() { this.reset(true); }

  reset(immediate) {
    this.born = frameCount + (immediate ? floor(random(0, 120)) : 0);
    this.lifespan = random(180, 360);
    this.targetAlpha = random(30, 90);
    this.alpha = 0;
    this.isHoriz = random() < 0.5;
    if (this.isHoriz) {
      this.y = random(height);
      this.x1 = random(width * 0.1, width * 0.4);
      this.x2 = this.x1 + random(100, 450);
    } else {
      this.x = random(width);
      this.y1 = random(height * 0.1, height * 0.4);
      this.y2 = this.y1 + random(100, 450);
    }
  }

  update() {
    let age = frameCount - this.born;
    if (age < 0) return;
    let fadeIn = constrain(age / 60, 0, 1);
    let fadeOut = constrain((this.lifespan - age) / 50, 0, 1);
    this.alpha = easeOut(fadeIn) * easeInOut(fadeOut) * this.targetAlpha;
    if (age > this.lifespan) this.reset(false);
  }

  draw() {
    if (frameCount < this.born) return;
    stroke(229, 185, 90, this.alpha * 0.8);
    strokeWeight(0.7);
    if (this.isHoriz) {
      line(this.x1, this.y, this.x2, this.y);
    } else {
      line(this.x, this.y1, this.x, this.y2);
    }
  }
}

let lines = [];

function setup() {
  p5Canvas = createCanvas(windowWidth, windowHeight);
  frameRate(30);

  if (new URLSearchParams(window.location.search).get('capture') === 'true') {
    capturing = true;
    capturer = new CCapture({ format: 'webm', framerate: 30 });
  }

  pg = createGraphics(width, height);
  buildTexture();

  for (let i = 0; i < 28; i++) shapes.push(new Shape());
  for (let i = 0; i < 20; i++) lines.push(new GeoLine());
}

function buildTexture() {
  pg.loadPixels();
  let d = pg.pixelDensity();
  let total = 4 * (pg.width * d) * (pg.height * d);
  let pix = pg.pixels;
  for (let i = 0; i < total; i += 4) {
    let val = (Math.random() * 28) | 0;
    pix[i] = val;
    pix[i + 1] = val;
    pix[i + 2] = val;
    pix[i + 3] = 16;
  }
  pg.updatePixels();
}

// Receptor de eventos de pausa/reanudación desde el dossier
window.addEventListener('message', (e) => {
  if (e.data === 'pause' || e.data?.action === 'pause') {
    if (typeof noLoop === 'function') noLoop();
  } else if (e.data === 'resume' || e.data?.action === 'resume') {
    if (typeof loop === 'function') loop();
  }
});

function draw() {
  background(0);
  image(pg, 0, 0);

  noiseOff += 0.003;

  for (let i = 0; i < lines.length; i++) {
    lines[i].update();
    lines[i].draw();
  }

  for (let i = 0; i < shapes.length; i++) {
    shapes[i].update();
    shapes[i].draw();
  }

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
  pg = createGraphics(width, height);
  buildTexture();
}
