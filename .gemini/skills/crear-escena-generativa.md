# Skill: Crear una Nueva Escena Generativa

## Descripción
Crea una nueva escena (agente visual) para el proyecto Geometrías Precolombinas. Cada escena es un archivo HTML autocontenido con p5.js que funciona como pieza de arte generativo capaz de capturarse como video.

## Cuándo usar
- Cuando se necesite añadir un nuevo agente visual al laboratorio escénico
- Cuando se quiera explorar una nueva cultura o artefacto precolombino
- Cuando se necesite una nueva composición generativa

## Instrucciones

### 1. Crear la estructura de directorio
```
GP/
└── sceneN NombreEscena/
    ├── index.html          (o nombre_descriptivo.html)
    └── Img/                (si usa imágenes)
        └── Cultura/
            └── archivos.png
```

### 2. Plantilla HTML base
Todo archivo HTML de escena debe seguir esta estructura:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Nombre de la Escena]</title>
  <!-- CCapture.js SIEMPRE antes de p5.js -->
  <script src="https://unpkg.com/ccapture.js@1.1.0/build/CCapture.all.min.js"></script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #000; overflow: hidden; }
    canvas { display: block; }
  </style>
</head>
<body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
  <script>
    // --- CONFIGURACIÓN ---
    const WIDTH = 1280;
    const HEIGHT = 720;
    const FPS = 30;
    const TOTAL_FRAMES = 5400; // 3 minutos a 30fps

    // --- CAPTURA ---
    let capturer = new CCapture({ format: 'webm', framerate: FPS });
    let p5Canvas;

    function setup() {
      p5Canvas = createCanvas(WIDTH, HEIGHT);
      frameRate(FPS);
      pixelDensity(1);
      // ... configuración específica de la escena
    }

    function draw() {
      // ... lógica de la escena

      // CAPTURA (siempre al final del draw)
      if (frameCount === 1) capturer.start();
      capturer.capture(p5Canvas.canvas);
      if (frameCount >= TOTAL_FRAMES) {
        noLoop();
        capturer.stop();
        capturer.save();
      }
    }

    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }
  </script>
</body>
</html>
```

### 3. Reglas obligatorias
- **CCapture.js** se carga ANTES que p5.js en el `<head>`
- `capturer` se inicializa FUERA de `setup()` como variable global
- `p5Canvas` se asigna dentro de `setup()` con `createCanvas()`
- La captura se ejecuta al FINAL de `draw()`: start en frame 1, capture cada frame, stop al final
- `pixelDensity(1)` siempre para captura estable
- `frameRate(30)` es el estándar del proyecto
- Fondo negro `#000` por defecto
- Resolución estándar: `1280 × 720` para captura, adaptativa para visualización

### 4. Si usa WEBGL (3D)
```javascript
function preload() {
  modelObj = loadModel('assets/modelo.obj', true);
}

function setup() {
  p5Canvas = createCanvas(WIDTH, HEIGHT, WEBGL);
  angleMode(DEGREES);
}
```

### 5. Actualizar `agents.md`
Después de crear la escena, añadir su documentación en `agents.md` siguiendo el formato existente con la tabla de metadatos y la sección de comportamiento.

## Verificación
- [ ] El archivo HTML se abre correctamente con Live Server
- [ ] La escena se renderiza sin errores en la consola
- [ ] CCapture inicia la grabación (mensaje en consola o descarga de .webm)
- [ ] La escena se detiene automáticamente al alcanzar TOTAL_FRAMES
