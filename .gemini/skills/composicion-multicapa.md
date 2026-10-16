# Skill: Composición Multicapa con Persistencia Visual

## Descripción
Patrón para crear composiciones generativas complejas con múltiples capas superpuestas y persistencia de movimiento (trail visual), como se usa en la Escena 5 (El Agua como Vínculo).

## Cuándo usar
- Cuando se necesite una escena con múltiples sistemas de partículas
- Para crear composiciones con efecto de estela/trail
- Para escenas tipo "ecosistema" con entidades autónomas

## Instrucciones

### 1. Trail visual (persistencia de movimiento)
En lugar de `background(0)` limpio, usar fondo con alpha bajo:
```javascript
function draw() {
  // Fondo con transparencia = trail de movimiento
  background(2, 13, 24, 22);  // RGBA: azul oscuro, alpha=22
}
```
- Alpha bajo (15-30): trails largos, movimiento fantasmal
- Alpha alto (100+): trails cortos, movimiento nítido
- El color del fondo define la "niebla" del trail

### 2. Estructura de capas (dibujar en orden)
```javascript
function draw() {
  background(2, 13, 24, 22);
  t += SPEED;

  dibujarCapa1(t);  // Fondo (más sutil)
  dibujarCapa2(t);  // Elementos medios
  dibujarCapa3(t);  // Elementos principales
  dibujarCapa4(t);  // Primer plano
  dibujarCapa5(t);  // Overlay (texto, UI)
}
```

### 3. Clase base para entidades autónomas
```javascript
class Entidad {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.fase = random(TWO_PI);     // Desfase temporal único
    this.pulso = 0;                  // Estado de pulsación
  }

  update(tt) {
    // Movimiento por Perlin noise
    let nx = noise(this.pos.x * 0.003, tt * 0.4 + this.fase);
    this.pos.x += map(nx, 0, 1, -1, 1);
    // Pulso sinusoidal individual
    this.pulso = map(sin(tt * 1.8 + this.fase), -1, 1, 0.4, 1.0);
  }

  draw() {
    let alpha = map(this.pulso, 0.4, 1.0, 80, 220);
    fill(160, 230, 240, alpha);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 5 * this.pulso);
  }
}
```

### 4. Paleta HSB para gradientes de profundidad
```javascript
colorMode(HSB, 360, 100, 100, 255);
// Gradiente por profundidad (capas más profundas = hue mayor)
let h = map(depth, 0, maxDepth, 195, 215);
let s = map(depth, 0, maxDepth, 70, 40);
stroke(h, s, 85, alpha);
colorMode(RGB, 255); // Restaurar siempre
```

### 5. Red de conexiones dinámicas
```javascript
function dibujarRed() {
  let distMax = W * 0.19;
  for (let i = 0; i < nodos.length; i++) {
    for (let j = i + 1; j < nodos.length; j++) {
      let d = dist(nodos[i].pos.x, nodos[i].pos.y, nodos[j].pos.x, nodos[j].pos.y);
      if (d < distMax) {
        let alpha = map(d, 0, distMax, 70, 0);
        stroke(200, 55, 80, alpha);
        strokeWeight(map(d, 0, distMax, 0.9, 0.2));
        line(nodos[i].pos.x, nodos[i].pos.y, nodos[j].pos.x, nodos[j].pos.y);
      }
    }
  }
}
```

### 6. Texto tipográfico ambiental
```javascript
function dibujarTexto(tt) {
  let palabras = ["vínculo", "tránsito", "origen", "corriente"];
  fill(200, 220, 230, map(sin(tt * 1.2), -1, 1, 12, 45));
  noStroke();
  textSize(9);
  textFont('monospace');
  for (let i = 0; i < palabras.length; i++) {
    let px = (W * 0.08 + i * W * 0.12 + sin(tt * 0.5 + i) * 12) % W;
    let py = H * 0.04 + (i % 2) * H * 0.93;
    text(palabras[i], px, py);
  }
}
```

## Verificación
- [ ] El trail visual genera estelas suaves (sin parpadeo)
- [ ] Las capas se superponen correctamente (orden de dibujo)
- [ ] Las entidades tienen movimiento orgánico e individual (desfase por `fase`)
- [ ] El cambio entre `colorMode(HSB)` y `colorMode(RGB)` se restaura siempre
