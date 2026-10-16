# 🔺 Geometrías Precolombinas — Open Source

> Arte generativo + arqueología precolombina + software libre.
> Traduciendo 5000 años de cerámica del litoral ecuatoriano en código creativo.

---

## ¿Qué es esto?

**Geometrías Precolombinas** es un laboratorio escénico de arte generativo construido **100% con software libre y código abierto**. Traduce 75 artefactos arqueológicos de nueve culturas precolombinas del litoral ecuatoriano en escenas audiovisuales con comportamiento autónomo.

Cada escena es un agente visual: un programa que se ejecuta en tiempo real en el navegador, generando variaciones únicas e irrepetibles. No hay bases de datos, no hay frameworks, no hay build tools. Solo HTML, JavaScript y p5.js.

**Autor**: Jean Carlos Correa · [@jeanmadara](https://instagram.com/jeanmadara) · Ecuador 🇪🇨

---

## Stack (100% libre)

| Herramienta | Uso | Licencia |
|---|---|---|
| [p5.js](https://p5js.org/) | Motor gráfico 2D/3D | LGPL-2.1 |
| [Sonic Pi](https://sonic-pi.net/) | Diseño sonoro generativo (live coding) | MIT |
| [CCapture.js](https://github.com/spite/ccapture.js) | Captura de video frame-by-frame | MIT |
| [Python](https://python.org/) | Post-producción y utilidades | PSF |
| [OpenCV](https://opencv.org/) | Procesamiento de video | Apache 2.0 |
| [FFmpeg](https://ffmpeg.org/) | Conversión de video | LGPL / GPL |
| [Pillow](https://python-pillow.org/) | Procesamiento de imagen | HPND |
| [rembg](https://github.com/danielgatis/rembg) | Remoción de fondos | MIT |

**Cero dependencias propietarias. Cero SaaS. Cero suscripciones.**

---

## Las 5 Escenas

### 1. Geometric Heartbeat — Wireframe 3D pulsante
Un jaguar Tolita (cultura Tolita, ~500 a.C.) renderizado como wireframe en p5.js WEBGL. Respira con una onda sinusoidal. Rota progresivamente en 3 ejes.

```javascript
let breathScale = map(sin(frameCount * 1.5), -1, 1, 1.0, 1.08);
stroke(255, pulse, 100, 150);
noFill();
model(modelObj);
```

### 2. Archivo de Mujeres — Slideshow cinematográfico
47 figuras femeninas de cerámica (3500 a.C. → 1500 d.C.) en crossfade con efecto Ken Burns. Motor de tiempo por cuadros, no por `millis()`.

```javascript
let zoom = 0.85 + (progreso * 0.15);
totalMs = (frameCount - startFrame) * 33.333;
```

### 3a. América Orrala — Retrato generativo
100 agentes autónomos recorren el canvas trazando líneas. Muestrean brillo de la imagen fuente. El retrato emerge por acumulación. Basado en el algoritmo de [Vamoss](https://github.com/vamoss).

### 3b. Vasijas Funerarias — Archivo cinematográfico
20 vasijas funerarias de 4 culturas. Mismo motor que la escena 2.

### 4. Cosmovisión — Geometría cinética
28 formas + 20 líneas con ciclo de vida autónomo sobre textura de grano fotográfico generada pixel a pixel. Modo instancia de p5.js.

### 5. El Agua como Vínculo — Composición oceánica
5 capas: rutas de tránsito, olas geométricas, red de nodos, partículas Perlin, texto tipográfico. Persistencia visual con `background(2, 13, 24, 22)`.

---

## Cómo ejecutar

```bash
# Clonar
git clone [url-del-repo]
cd GP

# Opción 1: Python
cd "scene1 3D"
python -m http.server 8000
# Abrir http://localhost:8000

# Opción 2: npx
npx serve "scene5 Mar"

# Opción 3: VS Code Live Server
# Click derecho en cualquier .html → Open with Live Server
```

> ⚠️ Las escenas que cargan imágenes o modelos 3D requieren servidor HTTP (CORS).

Cada escena **graba automáticamente** en WebM via CCapture.js.

---

## Estructura del proyecto

```
GP/
├── scene1 3D/                    → Wireframe 3D (WEBGL)
│   ├── index.html
│   ├── sketch.js
│   └── assets/                   → Modelos .obj
├── scene2 Mujeres/               → Slideshow 47 figuras
│   ├── index.html
│   └── Img/                      → PNGs por cultura
├── scene3-1 AmericaOrrala/       → Retrato generativo
├── scene3-2 Vasija funeraria/    → Slideshow 20 vasijas
├── scene4 Cosmovision/           → Geometría cinética
├── scene5 Mar/                   → Composición oceánica
├── GP-DEMO2025/                  → Demos 9:16 vertical (10 seg)
└── Python/                       → Utilidades
    ├── remove_bg.py              → Remoción de fondos (rembg)
    ├── convert.py                → WebM → MP4 (FFmpeg)
    ├── video.py                  → Render directo con OpenCV
    └── mp4tomp3.py               → Extracción de audio
```

---

## Patrones reutilizables

### Captura de video (CCapture.js)
```javascript
let capturer = new CCapture({ format: 'webm', framerate: 30 });
let p5Canvas;

function setup() {
  p5Canvas = createCanvas(1280, 720);
}

function draw() {
  // ... tu escena
  if (frameCount === 1) capturer.start();
  capturer.capture(p5Canvas.canvas);
  if (frameCount >= 5400) {
    noLoop();
    capturer.stop();
    capturer.save();
  }
}
```

### Motor de slideshow con crossfade + Ken Burns
```javascript
totalMs = (frameCount - startFrame) * 33.333;
let index = floor(totalMs / slideDuration) % images.length;
let progreso = (totalMs % slideDuration) / slideDuration;
let zoom = 0.85 + (progreso * 0.15);
```

### Respiración sinusoidal (latido geométrico)
```javascript
let breathScale = map(sin(frameCount * 1.5), -1, 1, 1.0, 1.08);
let pulse = map(sin(frameCount * 1.5), -1, 1, 150, 255);
```

### Persistencia visual (trail)
```javascript
// En lugar de background(0):
background(2, 13, 24, 22); // RGBA con alpha bajo = estela
```

---

## Utilidades Python

```bash
# Instalar dependencias
pip install rembg onnxruntime pillow opencv-python imageio-ffmpeg tqdm moviepy

# Remover fondos
cd "scene2 Mujeres"
python ../Python/remove_bg.py

# Convertir WebM → MP4 (alta calidad)
python Python/convert.py

# Extraer audio
python Python/mp4tomp3.py
```

---

## Diseño sonoro

Las texturas sonoras se construyen en **[Sonic Pi](https://sonic-pi.net/)** (live coding, licencia MIT) a partir de:

- **Samples de instrumentos precolombinos** grabados en el MAAC (Guayaquil): ocarinas, silbatos zoomorfos, flautas de cerámica, percusiones rituales.
- **Voces intergeneracionales**: registros de América Orrala, sus hijas y su nieta — tres generaciones de transmisión oral.

El sonido se procesa algorítmicamente: granulación, filtrado, superposición estocástica, modulación sinusoidal.

---

## ¿Por qué software libre?

Este proyecto demuestra que **no se necesita software propietario para producir arte digital de calidad**. Todo el pipeline —desde la remoción de fondos hasta la captura de video, desde el renderizado 3D hasta la composición sonora— funciona con herramientas libres.

Hay una razón conceptual además de la práctica: el software libre comparte con la producción cerámica precolombina una lógica de **transmisión abierta del conocimiento**. Las técnicas cerámicas no estaban protegidas por patentes; se transmitían de generación en generación como bien comunitario. El código abierto opera bajo la misma lógica.

---

## Contribuir

### Ideas para extensión
- 🔌 Comunicación **OSC** entre p5.js y Sonic Pi para sincronización audiovisual
- 🌎 Extensión del corpus a otros acervos arqueológicos de la región andina
- 🤸 Interactividad corporal (Kinect / webcam / MIDI)
- 🎓 Adaptación como material pedagógico para talleres de código creativo
- 🌐 Traducción de la documentación al inglés, kichwa, o lenguas originarias

### Si quieres usar estos patrones
Todo el código es reutilizable. Los patrones de captura de video, slideshow cinematográfico, wireframe 3D y composición multicapa están documentados en `.gemini/skills/` y pueden adaptarse a cualquier corpus visual.

---

## Contexto arqueológico

| Período | Cronología | Culturas |
|---|---|---|
| **Formativo** | 3500–500 a.C. | Valdivia · Machalilla · Chorrera |
| **Desarrollo Regional** | 500 a.C.–500 d.C. | Bahía · Tolita · Guangala · Jama-Coaque |
| **Integración** | 500–1530 d.C. | Manteño · Milagro-Quevedo |

75 piezas: 49 figuras femeninas + 20 vasijas funerarias + 6 modelos 3D.
Fuentes: MAAC (Guayaquil) · Catálogo Digital de Bienes Culturales del Ecuador.

---

## Documentación completa

| Documento | Contenido |
|---|---|
| [Dossier.md](../artistic/Dossier.md) | Dossier artístico completo |
| [FichaTecnica.md](../technical/FichaTecnica.md) | Especificaciones técnicas por escena |
| [PAPER.md](PAPER.md) | Artículo académico |
| [TextosCuratoriales.md](../artistic/TextosCuratoriales.md) | Textos de sala y statement |
| [GLOSARIO.md](../artistic/GLOSARIO.md) | Glosario bilingüe ES/EN |
| [REFERENCIAS.md](../artistic/REFERENCIAS.md) | Bibliografía y referentes |
| [agents.md](../technical/agents.md) | Guía técnica de agentes |

---

## Créditos

- **Artista / Programador**: Jean Carlos Correa · @jeanmadara
- **Algoritmo retrato generativo**: [Vamoss](https://github.com/vamoss) (OpenProcessing #624879) — adaptado
- **Librerías**: [p5.js](https://p5js.org/) · [CCapture.js](https://github.com/spite/ccapture.js) · [Sonic Pi](https://sonic-pi.net/)
- **Acervos**: MAAC (Guayaquil) · Catálogo Digital del Patrimonio Cultural del Ecuador
- **Voces**: América Orrala, sus hijas y su nieta

---

<p align="center">

*El barro es código. La espiral es algoritmo.*
*El silencio arqueológico es un latido que espera ser ejecutado.*

🔺 Geometrías Precolombinas · 2026 · Software Libre

</p>
