# Skill: Minimalismo Cinético (Geometría Progresiva)

## Descripción
Patrón para crear composiciones de formas geométricas autónomas con ciclo de vida propio (nacimiento, existencia, muerte), sobre fondo con textura de ruido estático. Basado en la Escena 4 (Cosmovisión).

## Cuándo usar
- Para crear fondos o escenografías generativas abstractas
- Para composiciones de geometría elemental con easing orgánico
- Para piezas con estética de grano analógico + geometría digital

## Instrucciones

### 1. Modo instancia de p5.js
La Escena 4 usa el modo instancia para evitar conflictos:
```javascript
new p5(function(p) {
  p.setup = function() { /* ... */ };
  p.draw = function() { /* ... */ };
}, document.body);
```
En modo instancia, todas las funciones p5 se llaman con `p.`:
`p.createCanvas()`, `p.background()`, `p.rect()`, etc.

### 2. Textura de ruido estático (grano fotográfico)
```javascript
let pg; // Graphics buffer para la textura

function buildTexture() {
  pg.loadPixels();
  for (let i = 0; i < pg.pixels.length; i += 4) {
    let n = Math.random();
    let v = n < 0.012 ? floor(random(18, 45)) :
            n < 0.04  ? floor(random(8, 22))  :
                        floor(random(0, 9));
    pg.pixels[i] = v;
    pg.pixels[i+1] = v;
    pg.pixels[i+2] = v;
    pg.pixels[i+3] = 255;
  }
  pg.updatePixels();
}
```
- Se genera una sola vez en `setup()` y se dibuja como `image(pg, 0, 0)` en cada frame
- Tres niveles de brillo: puntos brillantes (1.2%), medios (2.8%), oscuros (96%)

### 3. Clase Shape con ciclo de vida
```javascript
function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
function easeInOut(t) { return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2; }

class Shape {
  constructor() { this.reset(true); }

  reset(immediate) {
    this.x = random(margin, W - margin);
    this.y = random(margin, H - margin);
    this.type = random() < 0.5 ? 'rect' : 'circle';
    this.size = random(12, 80);
    this.born = frameCount + (immediate ? floor(random(0, 180)) : 0);
    this.lifespan = random(200, 500);
    this.targetAlpha = random(30, 120);
    this.rotation = random(TWO_PI);
    this.rotSpeed = random(-0.004, 0.004);
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
}
```

### 4. Formas hijas (anidadas)
```javascript
// Dentro de Shape.draw():
if (this.hasChild) {
  let childSize = size * this.childOffset;
  stroke(255, this.alpha * 0.5);
  // Dibujar forma hija con menor opacidad
}
```

### 5. Líneas progresivas
```javascript
class Line {
  draw() {
    let prog = constrain(age / 60, 0, 1);
    let ep = easeOut(prog);
    let mx = lerp(this.x1, this.x2, ep);
    let my = lerp(this.y1, this.y2, ep);
    line(this.x1, this.y1, mx, my);
  }
}
```

## Estética
- Fondo: negro + textura de grano estático
- Formas: solo `stroke`, sin `fill` (`noFill()`)
- `strokeWeight(0.5)` para formas, `strokeWeight(0.4)` para líneas
- Alpha bajo (30–120): formas sutiles, casi fantasmales
- Rotación lenta continua: cada forma gira independientemente

## Verificación
- [ ] La textura de grano se genera correctamente (no uniforme)
- [ ] Las formas aparecen y desaparecen suavemente (no cortan)
- [ ] La rotación es continua y lenta
- [ ] Las formas hijas son visibles pero más tenues
- [ ] Las líneas se dibujan progresivamente (no instantáneas)
