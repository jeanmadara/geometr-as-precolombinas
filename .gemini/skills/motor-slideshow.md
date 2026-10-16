# Skill: Motor de Slideshow Cinematográfico

## Descripción
Implementa el motor de slideshow con crossfade y efecto Ken Burns usado en las escenas de archivo fotográfico (Escena 2: Mujeres, Escena 3b: Vasijas Funerarias). Este motor permite recorrer un corpus de imágenes con transiciones suaves y zoom progresivo.

## Cuándo usar
- Cuando se necesite crear una nueva escena de archivo fotográfico
- Cuando se quiera presentar un conjunto de piezas arqueológicas con estética cinematográfica
- Cuando se necesite un slideshow con temporización por cuadros (no por `millis()`)

## Instrucciones

### 1. Estructura de imágenes
Las imágenes deben estar organizadas por cultura en el directorio `Img/`:
```
Img/
├── Cultura1/
│   ├── pieza1.png
│   └── pieza2.png
└── Cultura2/
    └── pieza3.png
```
- Formato: PNG con fondo removido (usar skill `procesar-imagenes`)
- Resolución: preferentemente alta (el motor redimensiona automáticamente)

### 2. Configuración del motor
```javascript
// --- VARIABLES GLOBALES ---
const imagePaths = [
  "Img/Cultura/pieza1.png",
  "Img/Cultura/pieza2.png",
  // ...
];

// --- PARÁMETROS DE TIMING ---
const slideDuration = 4000;   // 4 segundos por pieza (en ms simulados)
const fadeDuration = 1000;    // 1 segundo de crossfade (en ms simulados)
let archiveRunning = false;
let startFrame = 0;
let totalMs = 0;              // Motor de tiempo unificado por cuadros

let images = [];
```

### 3. Carga de imágenes
```javascript
function preload() {
  for (let i = 0; i < imagePaths.length; i++) {
    loadImage(imagePaths[i], img => {
      images[i] = img;
    });
  }
}
```

### 4. Motor de tiempo por cuadros
**IMPORTANTE**: El timing se sincroniza por cuadros, NO por `millis()`:
```javascript
// En draw():
totalMs = (frameCount - startFrame) * 33.333; // 1000/30 = 33.333ms por frame
let currentSlideMs = totalMs % slideDuration;
let index = floor(totalMs / slideDuration) % images.length;
let progreso = currentSlideMs / slideDuration;
```

### 5. Lógica de crossfade
```javascript
// Opacidad de fade-in
let opacidad = 255;
if (currentSlideMs < fadeDuration) {
  opacidad = map(currentSlideMs, 0, fadeDuration, 0, 255);
}

// 1. Imagen previa (se desvanece)
if (currentSlideMs < fadeDuration && totalMs >= slideDuration) {
  let prevIndex = (index - 1 + images.length) % images.length;
  push();
  tint(255, 255 - opacidad);
  dibujarPieza(prevIndex, 1.0);
  pop();
}

// 2. Imagen actual (aparece con zoom)
push();
tint(255, opacidad);
dibujarPieza(index, progreso);
pop();
```

### 6. Efecto Ken Burns (zoom progresivo)
```javascript
function dibujarPieza(i, prog) {
  let img = images[i];
  if (!img) return;

  // Zoom: de 0.85 a 1.0 durante la duración del slide
  let zoom = 0.85 + (prog * 0.15);

  let w = width * zoom * 0.8;
  let h = (img.height / img.width) * w;

  image(img, width / 2, height / 2, w, h);
}
```
- `imageMode(CENTER)` debe estar activado en `setup()`

### 7. Condición de parada del ciclo
```javascript
// Cuando todas las imágenes han sido mostradas:
let totalMsCycle = images.length * slideDuration;
if (totalMs >= totalMsCycle) {
  noLoop();
  capturer.stop();
  capturer.save();
}
```

### 8. HUD curatorial (opcional)
```javascript
function dibujarAdornos(idx) {
  fill(255, 120);
  textSize(15);
  textFont('Courier New');
  textAlign(LEFT);

  let x = 45, y = 55, interlineado = 24;
  textSize(25); text("GEOMETRÍAS PRECOLOMBINAS", x, y);
  textSize(14);
  text("SOURCE: " + imagePaths[idx], x, y + interlineado + 15);
  text("SUBJECT REFERENCE: " + nf(idx + 1, 3), x, y + interlineado * 2 + 15);
  text("FRAME: " + (frameCount - startFrame), x, y + interlineado * 3 + 15);
}
```

## Parámetros ajustables
| Parámetro | Default | Efecto |
|---|---|---|
| `slideDuration` | 4000 | Duración total de cada pieza en ms simulados |
| `fadeDuration` | 1000 | Duración del crossfade en ms simulados |
| `zoom inicio` | 0.85 | Escala inicial del Ken Burns |
| `zoom fin` | 1.0 | Escala final del Ken Burns (0.85 + 0.15) |
| `width * 0.8` | 80% | Proporción de la imagen respecto al canvas |

## Verificación
- [ ] Todas las imágenes cargan sin errores en consola
- [ ] El crossfade es suave (sin saltos ni parpadeos)
- [ ] El zoom se percibe como movimiento lento y continuo
- [ ] La escena se detiene al completar el ciclo de todas las imágenes
- [ ] El archivo .webm se descarga correctamente
