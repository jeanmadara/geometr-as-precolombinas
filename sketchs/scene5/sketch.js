/*
==============================================================
  ESCENA 5: El Agua como Vínculo
  REFERENCIA: Composición oceánica multicapa (Olas, nodos, partículas)
  UBICACIÓN: sketchs/scene5/sketch.js
==============================================================
*/

let W, H;
let nodos = [];
const NUM_NODOS = 22;
let particulas = [];
const MAX_PART = 120;
const NUM_OLAS = 7;
let t = 0;
const SPEED = 0.0018;
let capturer;
let p5Canvas;
let capturing = false;

class Nodo {
  constructor(x, y) {
    this.base = createVector(x, y);
    this.pos = createVector(x, y);
    this.fase = random(TWO_PI);
    this.radio = random(2.5, 5.5);
    this.pulso = 0;
  }

  update(tiempo) {
    let dx = sin(tiempo * 1.2 + this.fase) * 18;
    let dy = cos(tiempo * 0.9 + this.fase * 1.3) * 12;
    this.pos.x = this.base.x + dx;
    this.pos.y = this.base.y + dy;
    this.pulso = sin(tiempo * 2.5 + this.fase);
  }

  draw() {
    push();
    noStroke();
    let rHalo = this.radio * (2.2 + this.pulso * 0.8);
    fill(0, 180, 220, 25 + this.pulso * 15);
    circle(this.pos.x, this.pos.y, rHalo * 2);

    fill(180, 240, 255, 200);
    circle(this.pos.x, this.pos.y, this.radio * 2);

    fill(255, 255, 255, 240);
    circle(this.pos.x, this.pos.y, this.radio);
    pop();
  }
}

class Particula {
  constructor() { this.reset(true); }

  reset(primera) {
    this.x = random(width);
    this.y = primera ? random(height) : height + 10;
    this.vx = random(-0.3, 0.5);
    this.vy = random(-0.25, -0.85);
    this.alfa = random(20, 90);
    this.tam = random(1.2, 3.2);
    this.vida = 0;
    this.maxVida = random(200, 600);
    this.fase = random(TWO_PI);
  }

  update(tiempo) {
    this.x += this.vx + sin(tiempo * 2 + this.fase) * 0.4;
    this.y += this.vy;
    this.vida++;
    if (this.vida > this.maxVida || this.y < -10 || this.x < -10 || this.x > width + 10) {
      this.reset(false);
    }
  }

  draw() {
    let fade = sin(map(this.vida, 0, this.maxVida, 0, PI));
    push();
    noStroke();
    fill(100, 210, 240, this.alfa * fade);
    circle(this.x, this.y, this.tam);
    pop();
  }
}

function setup() {
  p5Canvas = createCanvas(windowWidth, windowHeight);
  frameRate(30);

  if (new URLSearchParams(window.location.search).get('capture') === 'true') {
    capturing = true;
    capturer = new CCapture({ format: 'webm', framerate: 30 });
  }

  crearRed();
  for (let i = 0; i < MAX_PART; i++) particulas.push(new Particula());
}

function crearRed() {
  nodos = [];
  let margenX = width * 0.1;
  let margenY = height * 0.15;
  for (let i = 0; i < NUM_NODOS; i++) {
    let x = map(i % 6, 0, 5, margenX, width - margenX) + random(-40, 40);
    let fila = floor(i / 6);
    let y = map(fila, 0, 3, margenY, height - margenY) + random(-30, 30);
    nodos.push(new Nodo(x, y));
  }
}

function dibujarOla(idx, tiempo) {
  let baseY = map(idx, 0, NUM_OLAS - 1, height * 0.28, height * 0.92);
  let amp = map(idx, 0, NUM_OLAS - 1, 14, 38);
  let freq = map(idx, 0, NUM_OLAS - 1, 0.003, 0.007);
  let vel = map(idx, 0, NUM_OLAS - 1, 1.2, 0.6);

  push();
  noFill();
  let r = map(idx, 0, NUM_OLAS - 1, 10, 30);
  let g = map(idx, 0, NUM_OLAS - 1, 80, 160);
  let b = map(idx, 0, NUM_OLAS - 1, 140, 210);
  let a = map(idx, 0, NUM_OLAS - 1, 35, 75);

  stroke(r, g, b, a);
  strokeWeight(map(idx, 0, NUM_OLAS - 1, 0.8, 1.8));

  beginShape();
  for (let x = 0; x <= width; x += 12) {
    let y = baseY + sin(x * freq + tiempo * vel * 4) * amp
                  + sin(x * freq * 2.1 - tiempo * vel * 2.5) * (amp * 0.35);
    vertex(x, y);
  }
  endShape();
  pop();
}

function dibujarRed(tiempo) {
  const DIST_MAX = min(width, height) * 0.26;
  push();
  for (let i = 0; i < nodos.length; i++) {
    for (let j = i + 1; j < nodos.length; j++) {
      let d = p5.Vector.dist(nodos[i].pos, nodos[j].pos);
      if (d < DIST_MAX) {
        let alfa = map(d, 0, DIST_MAX, 85, 0);
        let pulsoOnda = sin(tiempo * 3 + (i + j) * 0.5) * 0.5 + 0.5;
        stroke(20, 150, 195, alfa * (0.6 + pulsoOnda * 0.4));
        strokeWeight(map(d, 0, DIST_MAX, 1.2, 0.3));
        line(nodos[i].pos.x, nodos[i].pos.y, nodos[j].pos.x, nodos[j].pos.y);
      }
    }
  }
  pop();
}

function draw() {
  background(2, 13, 24, 25);
  t += SPEED;

  for (let i = 0; i < NUM_OLAS; i++) dibujarOla(i, t);

  for (let n of nodos) n.update(t);
  dibujarRed(t);
  for (let n of nodos) n.draw();

  for (let p of particulas) {
    p.update(t);
    p.draw();
  }

  if (capturing) {
    if (frameCount === 1) capturer.start();
    capturer.capture(p5Canvas.canvas);
    if (frameCount === 5610) {
      noLoop();
      capturer.stop();
      capturer.save();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  crearRed();
}

// Receptor de eventos de pausa/reanudación desde el dossier
window.addEventListener('message', (e) => {
  if (e.data === 'pause' || e.data?.action === 'pause') {
    if (typeof noLoop === 'function') noLoop();
  } else if (e.data === 'resume' || e.data?.action === 'resume') {
    if (typeof loop === 'function') loop();
  }
});
