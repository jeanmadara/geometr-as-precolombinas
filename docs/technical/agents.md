# 🏛️ Geometrías Precolombinas — Guía de Agentes

> **Proyecto:** Laboratorio Escénico "Geometrías Vivas"  
> **Geometrías Precolombinas:** 
> **Autor:** Jean Correa – @jeanmadara  

---

## Descripción General

**Geometrías Precolombinas (GP)** es un laboratorio escénico digital compuesto por múltiples escenas audiovisuales generativas. Cada escena es un agente visual autónomo construido con **p5.js**, diseñado para ejecutarse como una pieza de arte generativo que puede capturarse como video mediante **CCapture.js**.

El proyecto explora la intersección entre la arqueología precolombina del litoral ecuatoriano y el código creativo, traduciendo artefactos ancestrales en geometrías vivas y dinámicas.

---

## Arquitectura del Proyecto

```
GP/
├── scene1 3D/              → Agente 1: Visualizador 3D
├── scene2 Mujeres/         → Agente 2: Archivo de Mujeres
├── scene3-1 AmericaOrrala/  → Agente 3a: América Orrala
├── scene3-2 Vasija funeraria/ → Agente 3b: Vasija Funeraria
├── scene4 Cosmovision/      → Agente 4: Cosmovisión
├── scene5 Mar/              → Agente 5: El Agua como Vínculo
└── Python/                  → Utilidades de procesamiento
```

---

## Agentes Visuales (Escenas)

### 🔹 Agente 1 — `scene1 3D` · Visualizador 3D (Geometric Heartbeat)

| Campo | Valor |
|---|---|
| **Archivos** | `index.html`, `sketch.js` |
| **Tecnología** | p5.js (WEBGL), CCapture.js |
| **Referencia** | GA-7-876-78, Cabeza y torso antropomorfo, cultura Tolita |
| **Resolución** | 1280 × 720 | (adaptativa)
| **FPS / Duración** | 30 fps / 5400 frames (3 min) |

**Comportamiento:**
- Carga un modelo `.obj` (Jaguar zoomorfo - Tolita) y lo renderiza como **wireframe** con estética de latido geométrico.
- **Respiración orgánica**: escala oscilante con onda sinusoidal (`1.0 → 1.08`).
- **Pulso de color**: las líneas del wireframe pulsan entre dorado y blanco brillante.
- **Rotación progresiva**: solo rotación Y al inicio; se activa X después de 1800 frames y Z después de 3600 frames.
- Sin relleno (`noFill`), solo trazos finos (`strokeWeight(0.8)`).

---

### 🔹 Agente 2 — `scene2 Mujeres` · Archivo Fotográfico de Mujeres

| Campo | Valor |
|---|---|
| **Archivos** | `index.html` |
| **Tecnología** | p5.js, CCapture.js |
| **Fuentes** | 47 imágenes de figuras femeninas (Formativo, Desarrollo Regional, Integración) |
| **Resolución** | `windowWidth × windowHeight` (adaptativa) |
| **FPS / Duración** | 30 fps / ciclo completo de todas las imágenes |

**Comportamiento:**
- Slideshow cinematográfico con **fade-in/crossfade** entre imágenes.
- Cada imagen permanece 4 segundos con transición de 1 segundo.
- **Efecto Ken Burns**: zoom progresivo de `0.85` a `1.0` durante cada slide.
- Recorre figuras femeninas de las culturas: Valdivia, Machalilla, Chorrera, Bahía, Tolita, Guangala, Jama-Coaque, Milagro, Manteño.
- HUD curatorial opcional con datos de fuente, referencia y coordenadas.

**Culturas representadas:**
1. **Formativo**: Valdivia (9), Machalilla (7), Chorrera (6)
2. **Desarrollo Regional**: Bahía (5), Tolita (2), Guangala (4), Jama-Coaque (10)
3. **Integración**: Milagro (1), Manteño (5)

---

### 🔹 Agente 3a — `scene3-1 AmericaOrrala` · Retrato Generativo

| Campo | Valor |
|---|---|
| **Archivos** | `index.html`, `mySketch.js` |
| **Tecnología** | p5.js, CCapture.js |
| **Fuente** | `orrala.png` (imagen de alta resolución) |
| **Resolución** | 1920 × 1080 | (adaptativa)
| **FPS** | 30 fps |

**Comportamiento:**
- Algoritmo de **círculos errantes** (basado en código de Vamoss/OpenProcessing).
- 100 agentes-partícula recorren el espacio del canvas trazando líneas.
- Cada partícula muestrea el brillo de la imagen fuente: si detecta brillo > 70 o sale del canvas, invierte su dirección.
- El color del trazo se obtiene directamente del pixel correspondiente en la imagen.
- El resultado es un **retrato emergente** construido línea a línea.

---

### 🔹 Agente 3b — `scene3-2 Vasija funeraria` · Archivo de Vasijas

| Campo | Valor |
|---|---|
| **Archivos** | `index.html` |
| **Tecnología** | p5.js, CCapture.js |
| **Fuentes** | 20 imágenes de vasijas funerarias |
| **Resolución** | `windowWidth × windowHeight` | (adaptativa)
| **FPS / Duración** | 30 fps / ciclo completo |

**Comportamiento:**
- Mismo motor de slideshow que Agente 2 `scene2 Mujeres` (crossfade + Ken Burns).
- Enfocado exclusivamente en **vasijas funerarias** de 4 culturas:
  - Jama-Coaque (1), Manteño (7), Milagro-Quevedo (9), Tolita (3)
- HUD curatorial desactivado por defecto.

---

### 🔹 Agente 4 — `scene4 Cosmovision` · Fondo Geométrico Progresivo

| Campo | Valor |
|---|---|
| **Archivos** | `fondo_negro_geometria_progresiva.html` |
| **Tecnología** | p5.js (modo instancia), CCapture.js |
| **Resolución** | 1280 × 720 | (adaptativa)
| **FPS / Duración** | 30 fps / 5400 frames (3 min) |

**Comportamiento:**
- Fondo negro con **textura de ruido estático** (grano fotográfico generado pixel a pixel).
- Formas geométricas (`rect`, `circle`) aparecen y desaparecen con curvas de easing (`easeOut`, `easeInOut`).
- 28 formas + 20 líneas como entidades autónomas con ciclo de vida propio.
- Cada forma tiene: posición aleatoria, rotación continua, transparencia pulsante, y opcionalmente una forma hija (anidada).
- Las líneas se dibujan progresivamente con `easeOut`.
- Estética: **minimalismo cinético sobre textura analógica**.

---

### 🔹 Agente 5 — `scene5 Mar` · El Agua como Vínculo

| Campo | Valor |
|---|---|
| **Archivos** | `agua_vinculo.html` |
| **Tecnología** | p5.js, CCapture.js |
| **Resolución** | 1280 × 720 | (adaptativa)
| **FPS / Duración** | 30 fps / 5610 frames (~3.1 min) |

**Comportamiento:**
- Composición en 5 capas superpuestas:
  1. **Rutas de tránsito**: segmentos horizontales que viajan a velocidad constante (fondo sutil).
  2. **Olas geométricas** (7 olas): polilíneas ondulantes con quiebres angulares, gradiente de color HSB por profundidad.
  3. **Red de nodos** (22 nodos): nodos luminosos conectados por líneas cuando están a menos de 19% del ancho; nodos secundarios en puntos medios.
  4. **Partículas flotantes** (120): tres tipos (punto, rombo, cruz) con movimiento por flujo de noise y corriente.
  5. **Texto tipográfico**: palabras como "vínculo", "tránsito", "origen" flotan en los bordes con opacidad pulsante.
- Paleta: **tonos fríos oceánicos** (HSB ~195–215), fondo azul oscuro `#020d18`.
- Trail visual con `background(2, 13, 24, 22)` (persistencia de movimiento).

---

## Utilidades Python

### 📂 `Python/`

| Script | Función |
|---|---|
| `video.py` | Genera video MP4, usando OpenCV + FFmpeg |
| `convert.py` | Conversión de formatos de imagen |
| `remove_bg.py` | Eliminación de fondos con `rembg` |
| `mp4tomp3.py` | Extracción de audio MP3 desde archivos MP4 |

---

## Stack Tecnológico Común

| Componente | Tecnología |
|---|---|
| **Motor gráfico** | p5.js (v1.0 – v1.9) |
| **Modo 3D** | p5.js WEBGL (scene1) |
| **Captura de video** | CCapture.js (webm, 30fps) |
| **Post-producción** | Python (OpenCV, Pillow, FFmpeg, rembg) |
| **Distribución** | Archivos HTML estáticos autocontenidos |

---

## Patrones Recurrentes

### 🎥 Captura de Video (CCapture.js)
Todas las escenas comparten el mismo patrón de grabación:

```javascript
let capturer = new CCapture({ format: 'webm', framerate: 30 });
let p5Canvas;

function setup() {
  p5Canvas = createCanvas(WIDTH, HEIGHT);
  // ...
}

function draw() {
  if (frameCount === 1) capturer.start();
  capturer.capture(p5Canvas.canvas);
  if (frameCount === TOTAL_FRAMES) {
    noLoop();
    capturer.stop();
    capturer.save();
  }
}
```

### ⏱️ Motor de Tiempo por Cuadros
Las escenas de slideshow sincronizan su tiempo mediante cuadros, no por `millis()`:
```javascript
totalMs = (frameCount - startFrame) * 33.333; // 1000/30 ms exactos
```

### 🖼️ Efecto Ken Burns (Zoom Progresivo)
```javascript
let zoom = 0.85 + (progreso * 0.15);
```

### 🔄 Crossfade entre Imágenes
```javascript
if (currentSlideMs < fadeDuration && totalMs >= slideDuration) {
  // Dibujar imagen previa con opacidad inversa
  tint(255, 255 - opacidad);
  dibujarPieza(prevIndex, 1.0);
}
// Dibujar imagen actual
tint(255, opacidad);
dibujarPieza(index, progreso);
```

---

## Culturas Precolombinas Representadas

| Período | Cultura | Escenas |
|---|---|---|
| **Formativo** | Valdivia | 1, 2 |
| **Formativo** | Machalilla | 2 |
| **Formativo** | Chorrera | 2 |
| **Desarrollo Regional** | Bahía | 2 |
| **Desarrollo Regional** | Tolita | 1, 2, 3b |
| **Desarrollo Regional** | Guangala | 2 |
| **Desarrollo Regional** | Jama-Coaque | 2, 3b |
| **Integración** | Manteño | 2, 3b |
| **Integración** | Milagro-Quevedo | 2, 3b |

---

## Notas de Ejecución

1. **Servir localmente**: Cada escena funciona abriendo su `index.html` o `.html` principal con un servidor local (e.g., Live Server de VS Code). Los archivos que cargan imágenes o modelos 3D **requieren un servidor HTTP** por restricciones CORS.

2. **Captura de video**: Al ejecutarse, cada escena graba automáticamente en formato WebM. El archivo se descarga al completar el ciclo definido.

3. **Resoluciones**: Las escenas usan resoluciones fijas para captura estable. Para visualización interactiva, algunas se adaptan al tamaño de ventana.

4. **Dependencias externas**: Todas las librerías se cargan desde CDN. No se requiere instalación de paquetes npm para las escenas.
