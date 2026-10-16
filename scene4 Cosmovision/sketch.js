// ESCENA 4: Cosmovisión (Geometría progresiva sobre grano fotográfico)
let W, H, shapes = [], lines = [], noiseOff = 0, pg;

// 🎥 CAPTURA
let capturer = new CCapture({
  format: 'webm',
  framerate: 30,
});

let capturing = false; // cambiar a true para exportar

function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
function easeInOut(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

class Shape {
  constructor() { this.reset(true); }
  reset(immediate) {
    let margin = 40;
    this.x = random(margin, width - margin);
    this.y = random(margin, height - margin);
    this.type = random() < 0.5 ? 'rect' : 'circle';
    this.size = random(12, 80);
    this.born = frameCount + (immediate ? floor(random(0, 180)) : 0);
    this.lifespan = random(200, 500);
    this.alpha = 0;
    this.targetAlpha = random(30, 120);
    this.rotation = random(TWO_PI);
    this.rotSpeed = random(-0.004, 0.004);
    this.hasChild = random() < 0.35;
    this.childOffset = random(0.3, 0.7);
  }

  update() {
    let age = frameCount - this.born;
    if (age < 0) return;
    let t = constrain(age / this.lifespan, 0, 1);
    let fadeIn = constrain(age / 80, 0, 1);
    let fadeOut = constrain((this.lifespan - age) / 60, 0, 1);
    this.alpha = easeOut(fadeIn) * easeInOut(fadeOut) * this.targetAlpha;
    this.rotation += this.rotSpeed;
    if (age > this.lifespan) this.reset(false);
  }

  draw() {
    if (frameCount < this.born) return;
    let age = frameCount - this.born;
    let prog = constrain(age / 80, 0, 1);
    let easedProg = easeOut(prog);

    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    stroke(255, this.alpha);
    strokeWeight(0.7);
    noFill();

    if (this.type === 'rect') {
      rectMode(CENTER);
      rect(0, 0, this.size * easedProg, this.size * easedProg);
      if (this.hasChild) {
        let childSize = this.size * this.childOffset * easedProg;
        rect(0, 0, childSize, childSize);
      }
    } else {
      ellipse(0, 0, this.size * easedProg);
      if (this.hasChild) {
        let childSize = this.size * this.childOffset * easedProg;
        ellipse(0, 0, childSize);
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
    this.targetAlpha = random(20, 80);
    this.alpha = 0;
    this.isHoriz = random() < 0.5;
    if (this.isHoriz) {
      this.y = random(height);
      this.x1 = random(width * 0.1, width * 0.3);
      this.x2 = this.x1 + random(80, 350);
    } else {
      this.x = random(width);
      this.y1 = random(height * 0.1, height * 0.3);
      this.y2 = this.y1 + random(80, 350);
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
    let age = frameCount - this.born;
    let prog = easeOut(constrain(age / 60, 0, 1));
    stroke(255, this.alpha);
    strokeWeight(0.6);
    if (this.isHoriz) {
      let curX2 = lerp(this.x1, this.x2, prog);
      line(this.x1, this.y, curX2, this.y);
    } else {
      let curY2 = lerp(this.y1, this.y2, prog);
      line(this.x, this.y1, this.x, curY2);
    }
  }
}

function buildTexture() {
  pg.loadPixels();
  for (let x = 0; x < pg.width; x++) {
    for (let y = 0; y < pg.height; y++) {
      let n = noise(x * 0.05, y * 0.05);
      let r = random(-14, 14);
      let val = constrain(n * 25 + r, 0, 255);
      pg.set(x, y, color(val, 16));
    }
  }
  pg.updatePixels();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);

  if (new URLSearchParams(window.location.search).get('capture') === 'true') {
    capturing = true;
  }

  pg = createGraphics(width, height);
  buildTexture();

  for (let i = 0; i < 28; i++) shapes.push(new Shape());
  for (let i = 0; i < 20; i++) lines.push(new GeoLine());
}

function draw() {
  if (capturing && frameCount === 1) capturer.start();

  background(0);
  image(pg, 0, 0);

  noiseOff += 0.003;
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].update();
    shapes[i].draw();
  }

  for (let i = 0; i < lines.length; i++) {
    lines[i].update();
    lines[i].draw();
  }

  if (capturing) capturer.capture(document.querySelector('canvas'));

  if (capturing && frameCount === 5400) {
    noLoop();
    capturer.stop();
    capturer.save();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  pg = createGraphics(width, height);
  buildTexture();
}
