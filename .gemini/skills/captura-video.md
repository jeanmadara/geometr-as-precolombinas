# Skill: Captura y Post-producción de Video

## Descripción
Pipeline completo de captura de video desde las escenas p5.js y su post-producción con Python (conversión WebM→MP4, extracción de audio).

## Cuándo usar
- Para exportar cualquier escena como video
- Para convertir capturas WebM a MP4
- Para extraer audio de videos existentes

## 1. Captura con CCapture.js (en la escena)

### Patrón estándar
```javascript
let capturer = new CCapture({ format: 'webm', framerate: 30 });
let p5Canvas;

function setup() {
  p5Canvas = createCanvas(WIDTH, HEIGHT);
}

function draw() {
  // ... lógica de escena

  if (frameCount === 1) capturer.start();
  capturer.capture(p5Canvas.canvas);
  if (frameCount >= TOTAL_FRAMES) {
    noLoop();
    capturer.stop();
    capturer.save(); // Descarga automática del .webm
  }
}
```

### Reglas críticas
- `CCapture.all.min.js` SIEMPRE se carga en `<head>` ANTES que p5.js
- `capturer` se declara como variable GLOBAL (no dentro de setup)
- `p5Canvas.canvas` es el elemento DOM (no `p5Canvas` directo)
- Para WEBGL: `capturer.capture(p5Canvas.canvas)` funciona igual

## 2. Conversión WebM → MP4
**Script**: `Python/convert.py`

```bash
cd GP/Python
python convert.py
```

Cambiar los nombres de entrada/salida en el script:
```python
input_name = "nombre_captura.webm"
output_name = "nombre_final.mp4"
```

Parámetros de calidad: `-crf 18 -preset slow` (alta calidad).

**Requisitos**: `pip install imageio-ffmpeg`

## 3. Video generativo con Python (sin navegador)
**Script**: `Python/video.py` — Renderiza el slideshow directamente con OpenCV+FFmpeg.

```bash
cd "GP/scene2 Mujeres"
python ../Python/video.py
```

Genera `geometrias_archive_vertical.mp4` (1080×1920, 30fps) con HUD curatorial.

**Requisitos**: `pip install opencv-python pillow imageio-ffmpeg tqdm numpy`

## 4. Extracción de audio MP4 → MP3
**Script**: `Python/mp4tomp3.py`

```bash
python mp4tomp3.py
```

**Requisitos**: `pip install moviepy`

## Verificación
- [ ] El .webm se descarga al completar la captura
- [ ] El MP4 convertido se reproduce sin artefactos
- [ ] La resolución y FPS del MP4 coinciden con la configuración
