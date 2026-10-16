# Skill: Retrato Generativo por Agentes-Partícula

## Descripción
Reconstruye una imagen fotográfica mediante agentes autónomos que trazan líneas, muestreando color y brillo de la imagen fuente. Basado en la Escena 3a (América Orrala) y el algoritmo de Vamoss.

## Cuándo usar
- Para crear retratos generativos de personas o artefactos
- Cuando se quiera un efecto de "imagen emergente" construida línea a línea

## Instrucciones

### 1. Imagen fuente
- Formato: PNG de alta resolución
- Fondo oscuro para mejor contraste del muestreo de brillo
- Colocar en el mismo directorio que el sketch

### 2. Implementación
```javascript
var circles = [];
var total = 100;  // Número de agentes
var img;

function preload() {
  img = loadImage('imagen_fuente.png');
}

function setup() {
  createCanvas(1920, 1080);
  background(0);
  for (var i = 0; i < total; i++) {
    circles[i] = {
      prevPos: { x: width/2, y: height/2 },
      pos: { x: width/2, y: height/2 },
      dir: random() > 0.5 ? 1 : -1,
      radius: random(3, 10),
      angle: 0
    };
  }
}

function draw() {
  for (var i = 0; i < total; i++) {
    var c = circles[i];
    c.angle += 1 / c.radius * c.dir;
    c.pos.x += cos(c.angle) * c.radius;
    c.pos.y += sin(c.angle) * c.radius;

    // Si detecta brillo alto o sale del canvas → invertir
    if (brightness(img.get(round(c.pos.x), round(c.pos.y))) > 70 ||
        c.pos.x < 0 || c.pos.x > width ||
        c.pos.y < 0 || c.pos.y > height) {
      c.dir *= -1;
      c.radius = random(3, 10);
      c.angle += PI;
    }

    // Color del trazo = pixel de la imagen fuente
    stroke(img.get(c.pos.x, c.pos.y));
    line(c.prevPos.x, c.prevPos.y, c.pos.x, c.pos.y);

    c.prevPos.x = c.pos.x;
    c.prevPos.y = c.pos.y;
  }
}
```

### 3. Parámetros clave
| Parámetro | Default | Efecto |
|---|---|---|
| `total` | 100 | Más agentes = retrato más rápido |
| `brightness > 70` | 70 | Umbral de inversión (ajustar según imagen) |
| `radius (3, 10)` | 3–10 | Radio de curvatura de las líneas |
| `background(0)` | negro | Solo en setup — nunca limpiar en draw |

### 4. Importante
- **NO** llamar `background()` en `draw()` — las líneas se acumulan
- El retrato emerge gradualmente durante la ejecución
- La duración depende del nivel de detalle deseado (4000+ frames típico)

## Créditos
Algoritmo original: [Vamoss](https://github.com/vamoss) · [OpenProcessing #624879](https://www.openprocessing.org/sketch/624879)

## Verificación
- [ ] La imagen fuente carga correctamente
- [ ] Los agentes se mueven orgánicamente (no en línea recta)
- [ ] El retrato emerge gradualmente sobre fondo negro
- [ ] Los colores corresponden a la imagen fuente
