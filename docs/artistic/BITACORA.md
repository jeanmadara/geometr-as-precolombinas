# GEOMETRÍAS PRECOLOMBINAS
## Bitácora de Proceso

---

> Diario de desarrollo del proyecto. Decisiones creativas, hallazgos técnicos, iteraciones y reflexiones.

---

## 2024

### Investigación y Documentación

**Objetivo**: Documentar el acervo cerámico del litoral ecuatoriano. Identificar piezas con potencial generativo.

- Visitas a la Reserva Arqueológica del Museo Antropológico y de Arte Contemporáneo (MAAC) (Guayaquil).
- Consulta del Archivo del Patrimonio Cultural del Ecuador.
- Registro fotográfico de piezas con códigos GA-XX-XXXX-XX.
- Estudio iconográfico: identificación de geometrías dominantes por cultura.
- Primeras intuiciones: la espiral Valdivia como función sinusoidal, el jaguar Tolita como wireframe.

**Hallazgo clave**: Las piezas no son objetos estáticos — contienen instrucciones formales (proporciones, simetrías, ritmos) que pueden leerse como código fuente.

---

## 2025

### Enero – Febrero · Prototipado

- Primer sketch funcional en p5.js: wireframe de modelo .obj con rotación simple.
- Pruebas con CCapture.js para captura de video determinista.
- Decisión: usar p5.js en lugar de Three.js por su accesibilidad y la filosofía de Processing (código como herramienta artística, no como ingeniería).
- Pruebas de remoción de fondos con `rembg` (Python). Resultados buenos con el modelo u2net.
- Primer inventario: 47 figuras femeninas identificadas y fotografiadas.

**Decisión de diseño**: Cada escena será un HTML autocontenido. Sin frameworks, sin bundlers. Arte que se ejecuta abriendo un archivo.

### Marzo · Escenas 1 y 2

**Escena 1 — Geometric Heartbeat**:
- Modelo `tolita2.obj` seleccionado como protagonista. Probados 6 modelos.
- Efecto de respiración sinusoidal: `map(sin(frameCount * 1.5), -1, 1, 1.0, 1.08)`. El rango 1.0–1.08 es crucial: más sutil de lo que parece suficiente. Si es mayor, se ve mecánico. Si es menor, es invisible.
- Rotación progresiva por ejes: inspirada en la idea de "despertar" — el objeto se libera gradualmente de la vitrina.
- `noFill()` + `strokeWeight(0.8)` = la estética correcta. Con relleno se pierde la transparencia y la sensación de estructura ósea.

**Escena 2 — Archivo de Mujeres**:
- Motor de slideshow construido desde cero. No usar librerías de slideshow: necesitamos control total sobre el timing.
- Decisión crítica: temporización por `frameCount`, no por `millis()`. Razón: `millis()` fluctúa con la carga del CPU, causando desincronización en la captura de CCapture.
- Ken Burns (zoom 0.85→1.0): probado con rangos mayores (0.7→1.0), pero el movimiento era excesivo. La sutileza es clave.
- Crossfade de 1 segundo sobre slide de 4 segundos: ritmo contemplativo, no informativo.

### Abril · Escenas 3, 4 y 5

**Escena 3a — América Orrala**:
- Algoritmo de Vamoss (OpenProcessing #624879) adaptado. Código original en Processing, portado a p5.js.
- 100 agentes es el punto óptimo: con 50 el retrato tarda demasiado, con 200 se pierde la textura orgánica.
- Umbral de brillo > 70: calibrado experimentalmente contra la imagen fuente. Depende del contraste de cada imagen.
- NO limpiar el fondo en `draw()`: la acumulación de líneas ES la pieza.

**Escena 3b — Vasijas Funerarias**:
- Mismo motor que Escena 2, con 20 vasijas de 4 culturas.
- Corpus deliberadamente menor: las vasijas funerarias son objetos de tránsito. Su presencia debe ser más breve.

**Escena 4 — Cosmovisión**:
- Modo instancia de p5.js para evitar conflictos con variables globales.
- Textura de grano pixel a pixel: tres niveles de brillo (1.2% brillante, 2.8% medio, 96% oscuro). Simula grano fotográfico analógico.
- 28 formas + 20 líneas: cantidad calibrada para densidad visual correcta sin saturación.
- `easeOut` para nacimiento, `easeInOut` para muerte: las formas llegan rápido y se van lentamente.
- Formas hijas (35% de probabilidad): eco geométrico. Referencia a la iconografía precolombina de "figuras dentro de figuras".

**Escena 5 — El Agua como Vínculo**:
- La escena más compleja: 5 capas superpuestas.
- Paleta HSB 195°–215°: azules oceánicos fríos. Probados rangos más amplios, pero la coherencia cromática se perdía.
- Fondo `#020d18` con alpha 22: el trail es largo pero no infinito. Cada movimiento deja memoria que eventualmente se desvanece.
- 22 nodos, distancia de conexión 19% del ancho: red densa pero no opaca. 
- Palabras tipográficas: "vínculo", "tránsito", "origen"... en monospace, casi invisibles. No son texto para leer: son atmósfera.

### Abril · GP-DEMO2025

- Adaptación de las 5 escenas a formato 9:16 (1080×1920) para redes sociales.
- 250 frames a 25 fps (~10 segundos por escena).
- Reescalado de velocidades: las animaciones deben ser visualmente coherentes en 10 segundos vs 3 minutos.
- Escala del modelo 3D ajustada de -2.5 a -10.0 para llenar el formato vertical.

### Mayo · Documentación

- Creación del archivo `agents.md` como guía técnica completa.
- Escritura del `Dossier.md` artístico.
- Generación de textos curatoriales por escena.
- Ficha técnica, glosario, referencias, rider, guión.
- Skills del proyecto documentadas en `.gemini/skills/`.

---

## 2026

### 29 de Abril · Presentación — Museo Centro Cultural Manta
_Día Mundial de la Danza_

**Hito**: Primera presentación pública de **Geometrías Precolombinas** como performance escénico en el **Museo Centro Cultural Manta** (Av. Malecón Jaime Chávez Gutiérrez, Manta, Manabí). 18h00. Estreno en el marco del Día Mundial de la Danza.

**Título completo presentado:** *"Geometrías Precolombinas — Iconografía y Territorio"*

El museo, administrado por el Ministerio de Cultura y Patrimonio del Ecuador y parte de la Red Nacional de Museos, alberga una de las colecciones arqueológicas más importantes de la costa ecuatoriana. Su exposición permanente **"Vida y Poder"** —centrada en la cultura Manteña— convierte al espacio en un interlocutor idóneo para el proyecto: la misma iconografía que se genera en pantalla habita las vitrinas del edificio.

**Decisiones escénicas clave para Manta**:
- Formato **performance escénico**: se suma la dimensión corporal en vivo. El video generativo deja de ser instalación autónoma para convertirse en escenografía.
- **Darla Anaís Alarcón** se incorpora como co-performer. Estructura dual Jean-Darla: solos alternados y dúos.
- Duración expandida: **35–40 minutos** (vs. ~17 min del ciclo original). Se añade la videodanza **"Umiña"** como Escena 6.
- Uso de palo santo como elemento escénico en la apertura.
- Voz en off escrita ex-profeso para el contexto de Manta: texto de 2:20 min en la línea de Eduardo Galeano.
- El auditorio como **territorio ritual**: la sala oscurecida convierte la proyección en experiencia liminal.

**Nuevo documento creado**: `MuseoManta.md` — guión escénico completo con storyboard, texto de voz en off, coreografía por escena, requerimientos técnicos y distribución espacial.

**Eje conceptual para Manta**: *cuerpo — imagen — territorio*. Las imágenes no ilustran: se transforman. El cuerpo no representa: encarna. El video no acompaña: estructura la dramaturgia.

**Espacio**: Auditorio del Museo Centro Cultural Manta. Sala oscurecida, condiciones técnicas correctas. Prueba técnica sin incidencias.

**Gestión**: Autogestión en colaboración con el museo.

**Créditos**:
- Curaduría: Jean Carlos Correa
- Producción: Darla Anaís Alarcón

**Recepción**: Gran aceptación del público. Post-performance: conversatorio abierto con preguntas sobre JavaScript / p5.js, Sonic Pi, América Orrala y el proceso de traducción artefacto→código. Demostración del proceso técnico.

**Registro audiovisual** (disponible):
- Video completo del performance
- Grabación del Q&A / conversatorio post-performance
- Fotografías de la noche
- Videos del evento

**Reel**: https://www.instagram.com/reels/DXmnlFhkeU3/

---

## Decisiones de Diseño Fundamentales

1. **HTML autocontenido**: Sin npm, sin build, sin frameworks. Cada escena es un archivo que se ejecuta en cualquier navegador. La obra debe ser tan accesible como un PDF.

2. **Fondo negro absoluto**: Las piezas arqueológicas flotaban originalmente en vitrinas con fondos neutros. El negro digital es la vitrina perfecta: infinita, sin bordes, sin reflejos.

3. **30 fps, no 60**: Deliberado. 30 fps produce un movimiento más cinematográfico, menos "videojuego". Coincide con la cadencia del cine.

4. **No interactivo**: Las escenas no responden al mouse ni al teclado (excepto pantalla completa). Son organismos autónomos, no juguetes. El espectador observa, no controla.

5. **Captura determinista**: CCapture.js graba frame-by-frame, no en tiempo real. Esto garantiza que el video resultante es idéntico independientemente de la velocidad del computador.

6. **Código como ofrenda**: Cada `function draw()` es un ritual de repetición — 30 iteraciones por segundo, variaciones infinitas de la misma forma. El frameCount es un reloj ceremonial.

---

## Problemas Resueltos

| Problema | Solución |
|---|---|
| CCapture no definido | Cargar CCapture.js en `<head>` ANTES que p5.js |
| `p5Canvas` no inicializado | Declarar como `let` global, asignar en `setup()`, no al declarar |
| Desincronización de slideshow | Usar `frameCount * 33.333` en lugar de `millis()` |
| Imágenes no cargan (CORS) | Usar servidor HTTP local, nunca `file://` |
| Modelo 3D invertido | Usar `scale(-2.5)` (escala negativa) para corregir orientación |
| Trail visual en Escena 5 | `background(2, 13, 24, 22)` — alpha 22 para persistencia |
| Grano fotográfico lento | Generar textura una sola vez en `setup()`, dibujar como `image()` |
