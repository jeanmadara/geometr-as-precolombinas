# Skill: Visualizador Wireframe 3D (Latido Geométrico)

## Descripción
Implementa el patrón de visualización 3D con estética de "latido geométrico" usado en la Escena 1. Un modelo .obj se renderiza como wireframe con respiración orgánica, pulso de color y rotación progresiva.

## Cuándo usar
- Cuando se necesite visualizar un modelo 3D precolombino
- Cuando se quiera crear una pieza con estética wireframe pulsante
- Cuando se añadan nuevos modelos .obj al proyecto

## Instrucciones

### 1. Estructura de archivos
```
sceneN 3D/
├── index.html
├── sketch.js
└── assets/
    ├── modelo.obj      (modelo principal)
    ├── modelo.mtl      (materiales, opcional)
    └── textura.png     (textura, opcional)
```

### 2. Modelos disponibles
Modelos existentes en `scene1 3D/assets/`:
| Modelo | Tamaño | Cultura | Tipo |
|---|---|---|---|
| `tolita.obj` | 1.0 MB | Tolita | Zoomorfo |
| `tolita2.obj` | 2.2 MB | Tolita | Zoomorfo (detallado) |
| `tolita3.obj` | 2.1 MB | Tolita | Variante |
| `mascara.obj` | 1.2 MB | Tolita | Máscara ceremonial |
| `venus.obj` | 1.2 MB | Valdivia | Venus de fertilidad |
| `venus2.obj` | 609 KB | Valdivia | Venus (variante) |
| `aros.obj` | 1.6 MB | — | Aros/anillos |

### 3. Carga del modelo
```javascript
let modelObj;

function preload() {
  // `true` activa la normalización automática del modelo
  modelObj = loadModel('assets/modelo.obj', true);
}

function setup() {
  p5Canvas = createCanvas(WIDTH, HEIGHT, WEBGL);
  angleMode(DEGREES);
}
```

### 4. Respiración orgánica (onda sinusoidal)
```javascript
// En draw():
let breathSpeed = frameCount * 1.5;
let breathScale = map(sin(breathSpeed), -1, 1, 1.0, 1.08);
```
- Rango `1.0 → 1.08`: respiración sutil, casi imperceptible
- `frameCount * 1.5`: velocidad del ciclo de respiración

### 5. Pulso de color
```javascript
let pulse = map(sin(breathSpeed), -1, 1, 150, 255);
stroke(255, pulse, 100, 150); // R=255, G=variable, B=100, A=150
strokeWeight(0.8);
noFill(); // SIEMPRE sin relleno para wireframe
```
- El color oscila entre dorado suave y blanco brillante
- `noFill()` es obligatorio para la estética wireframe

### 6. Rotación progresiva
```javascript
let angle = 0; // variable global

// En draw():
rotateY(angle);
angle += 0.2; // Rotación lenta y solemne

// Activar ejes progresivamente:
if (frameCount > 1800) { // Después de 1 minuto
  rotateX(angle);
}
if (frameCount > 3600) { // Después de 2 minutos
  rotateZ(angle);
}
```
- Orden de activación: Y → X → Z
- Esto crea un efecto de "despertar" del objeto

### 7. Escala del modelo
```javascript
// Escala negativa corrige la orientación del modelo
scale(-2.5 * breathScale);
model(modelObj);
```
- La escala negativa (`-2.5`) corrige la inversión de algunos modelos .obj
- Se multiplica por `breathScale` para integrar la respiración

### 8. Plantilla completa del sketch
```javascript
let modelObj;
let angle = 0;
let capturer = new CCapture({ format: 'webm', framerate: 30 });
let p5Canvas;

function preload() {
  modelObj = loadModel('assets/modelo.obj', true);
}

function setup() {
  p5Canvas = createCanvas(1280, 720, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  let breathSpeed = frameCount * 1.5;
  let breathScale = map(sin(breathSpeed), -1, 1, 1.0, 1.08);
  let pulse = map(sin(breathSpeed), -1, 1, 150, 255);

  stroke(255, pulse, 100, 150);
  strokeWeight(0.8);
  noFill();

  rotateY(angle);
  angle += 0.2;

  if (frameCount > 1800) rotateX(angle);
  if (frameCount > 3600) rotateZ(angle);

  scale(-2.5 * breathScale);
  model(modelObj);

  // Captura
  if (frameCount === 1) capturer.start();
  capturer.capture(p5Canvas.canvas);
  if (frameCount === 5400) {
    noLoop();
    capturer.stop();
    capturer.save();
  }
}
```

## Parámetros ajustables
| Parámetro | Default | Efecto |
|---|---|---|
| `breathScale` rango | 1.0 – 1.08 | Amplitud de la respiración |
| `frameCount * 1.5` | 1.5 | Velocidad del latido |
| `angle += 0.2` | 0.2 | Velocidad de rotación |
| `strokeWeight(0.8)` | 0.8 | Grosor de las líneas del wireframe |
| `stroke(255, pulse, 100, 150)` | dorado→blanco | Paleta del wireframe |
| `scale(-2.5)` | -2.5 | Tamaño del modelo en pantalla |

## Verificación
- [ ] El modelo carga sin errores (requiere servidor HTTP)
- [ ] El wireframe respira suavemente (no parpadea)
- [ ] La rotación es lenta y solemne
- [ ] Los ejes adicionales se activan progresivamente
- [ ] No hay relleno visible (solo líneas)
