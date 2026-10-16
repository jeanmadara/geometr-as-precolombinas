# GEOMETRÍAS PRECOLOMBINAS
## Ficha Técnica

---

## Datos Generales

| | |
|---|---|
| **Título** | Geometrías Precolombinas |
| **Subtítulo** | Laboratorio Escénico "Geometrías Vivas" |
| **Autor** | Jean Carlos Correa |
| **Contacto** | @jeanmadara |
| **Año** | 2026 |
| **País** | Ecuador |
| **Disciplina** | Arte generativo · Código creativo · Escenografía digital |
| **Técnica** | Programación en tiempo real con p5.js |
| **Formato** | 5 escenas audiovisuales generativas (HTML/JS) |
| **Duración total** | ~16 minutos (material generativo continuo) |
| **Territorio de referencia** | Litoral ecuatoriano — Costa del Pacífico |

---

## Fichas por Escena

### Escena 1 · *Geometric Heartbeat*

| | |
|---|---|
| **Título** | Geometric Heartbeat (Latido Geométrico) |
| **Tipo** | Visualización 3D generativa |
| **Archivo** | `scene1 3D/index.html` + `sketch.js` |
| **Tecnología** | p5.js (WEBGL), CCapture.js |
| **Resolución** | 1280 × 720 px |
| **Duración** | 3 minutos (5400 frames a 30 fps) |
| **Referencia arqueológica** | GA-7-876-78 |
| **Pieza** | Cabeza y torso antropomorfo / Jaguar zoomorfo |
| **Cultura** | Tolita |
| **Período** | Desarrollo Regional (500 a.C. – 500 d.C.) |
| **Modelo 3D** | `tolita2.obj` (2.2 MB, wireframe) |
| **Paleta** | Dorado pulsante (#FFA064) → Blanco (#FFFFFF) sobre negro |
| **Comportamiento** | Respiración sinusoidal · Pulso cromático · Rotación progresiva en 3 ejes |

---

### Escena 2 · *Archivo de Mujeres*

| | |
|---|---|
| **Título** | Archivo de Mujeres |
| **Tipo** | Slideshow cinematográfico generativo |
| **Archivo** | `scene2 Mujeres/index.html` |
| **Tecnología** | p5.js, CCapture.js |
| **Resolución** | Adaptativa (ventana completa) |
| **Duración** | ~3 min 55 seg (ciclo completo de 47 imágenes) |
| **Corpus** | 47 fotografías de figuras femeninas de cerámica |
| **Culturas** | Valdivia (9), Machalilla (7), Chorrera (6), Bahía (5), Tolita (2), Guangala (4), Jama-Coaque (10), Milagro (1), Manteño (5) |
| **Períodos** | Formativo, Desarrollo Regional, Integración |
| **Tiempo por pieza** | 4 seg exposición + 1 seg transición |
| **Efectos** | Crossfade · Zoom progresivo Ken Burns (0.85 → 1.0) |
| **Paleta** | Fondo negro · Imágenes a color original |

---

### Escena 3a · *América Orrala*

| | |
|---|---|
| **Título** | América Orrala — Retrato Generativo |
| **Tipo** | Retrato emergente por agentes-partícula |
| **Archivo** | `scene3-1 AmericaOrrala/index.html` + `mySketch.js` |
| **Tecnología** | p5.js, CCapture.js |
| **Resolución** | 1920 × 1080 px |
| **Duración** | Continua (retrato emerge progresivamente) |
| **Imagen fuente** | `orrala.png` (3.1 MB) |
| **Agentes** | 100 partículas autónomas |
| **Algoritmo** | Círculos errantes (Vamoss / OpenProcessing #624879) |
| **Comportamiento** | Muestreo de brillo · Inversión por umbral (>70) · Color por pixel |
| **Paleta** | Colores extraídos de la imagen fuente sobre negro |

---

### Escena 3b · *Vasijas Funerarias*

| | |
|---|---|
| **Título** | Vasijas Funerarias |
| **Tipo** | Slideshow cinematográfico generativo |
| **Archivo** | `scene3-2 Vasija funeraria/index.html` |
| **Tecnología** | p5.js, CCapture.js |
| **Resolución** | Adaptativa (ventana completa) |
| **Duración** | ~1 min 40 seg (ciclo completo de 20 imágenes) |
| **Corpus** | 20 fotografías de vasijas funerarias |
| **Culturas** | Jama-Coaque (1), Manteño (7), Milagro-Quevedo (9), Tolita (3) |
| **Períodos** | Desarrollo Regional, Integración |
| **Tiempo por pieza** | 4 seg exposición + 1 seg transición |
| **Efectos** | Crossfade · Zoom progresivo Ken Burns (0.85 → 1.0) |
| **Paleta** | Fondo negro · Imágenes a color original |

---

### Escena 4 · *Cosmovisión*

| | |
|---|---|
| **Título** | Cosmovisión — Fondo Geométrico Progresivo |
| **Tipo** | Composición cinética abstracta |
| **Archivo** | `scene4 Cosmovision/fondo_negro_geometria_progresiva.html` |
| **Tecnología** | p5.js (modo instancia), CCapture.js |
| **Resolución** | 1280 × 720 px |
| **Duración** | 3 minutos (5400 frames a 30 fps) |
| **Elementos** | 28 formas (rect/circle) + 20 líneas autónomas |
| **Textura** | Ruido estático pixel a pixel (grano fotográfico) |
| **Easing** | `easeOut` (fade-in), `easeInOut` (fade-out) |
| **Comportamiento** | Ciclo de vida autónomo · Formas anidadas · Líneas progresivas |
| **Paleta** | Blanco sobre negro con textura de grano |

---

### Escena 5 · *El Agua como Vínculo*

| | |
|---|---|
| **Título** | El Agua como Vínculo |
| **Tipo** | Composición oceánica multicapa |
| **Archivo** | `scene5 Mar/agua_vinculo.html` |
| **Tecnología** | p5.js, CCapture.js |
| **Resolución** | 1280 × 720 px |
| **Duración** | ~3.1 minutos (5610 frames a 30 fps) |
| **Capa 1** | 5 rutas de tránsito (segmentos horizontales) |
| **Capa 2** | 7 olas geométricas (polilíneas con quiebres angulares) |
| **Capa 3** | 22 nodos luminosos con conexión dinámica por proximidad |
| **Capa 4** | 120 partículas flotantes (punto, rombo, cruz) |
| **Capa 5** | 8 palabras tipográficas con opacidad pulsante |
| **Palabras** | vínculo · tránsito · origen · corriente · red · nodo · flujo · territorio |
| **Paleta** | Tonos fríos oceánicos HSB 195°–215° · Fondo `#020d18` |
| **Persistencia** | Trail visual: `background(2, 13, 24, 22)` |

---

## Inventario de Piezas

| Cultura | Período | Figuras femeninas | Vasijas funerarias | Modelos 3D | Total |
|---|---|---|---|---|---|
| Valdivia | Formativo | 9 | — | 2 | 11 |
| Machalilla | Formativo | 7 | — | — | 7 |
| Chorrera | Formativo | 6 | — | — | 6 |
| Bahía | Desarrollo Regional | 5 | — | — | 5 |
| Tolita | Desarrollo Regional | 2 | 3 | 4 | 9 |
| Guangala | Desarrollo Regional | 4 | — | — | 4 |
| Jama-Coaque | Desarrollo Regional | 10 | 1 | — | 11 |
| Milagro-Quevedo | Integración | 1 | 9 | — | 10 |
| Manteño | Integración | 5 | 7 | — | 12 |
| **TOTAL** | | **49** | **20** | **6** | **75** |

---

## Stack Tecnológico

| Componente | Herramienta | Versión |
|---|---|---|
| Motor gráfico | p5.js | 1.9.0 |
| Modo 3D | p5.js WEBGL | 1.9.0 |
| Diseño sonoro | Sonic Pi | 4.x |
| Captura de video | CCapture.js | 1.1.0 |
| Post-producción | Python + OpenCV + FFmpeg | — |
| Procesamiento de imagen | Python + Pillow + rembg | — |
| Distribución | HTML estático autocontenido | — |

---

## Requerimientos de Exhibición

| Componente | Especificación |
|---|---|
| **Proyección** | Full HD (1920×1080) · ≥3000 lúmenes |
| **Computador** | Navegador moderno con soporte WebGL |
| **Espacio** | Sala oscurecida (fondo negro requerido) |
| **Audio** | Texturas sonoras generativas en Sonic Pi (live coding) |
| **Fuentes sonoras** | Samples de instrumentos precolombinos (MAAC) + voces de América Orrala, sus hijas y su nieta |
| **Conexión** | Internet para carga inicial de CDN (o librerías locales) |

### Modalidades

| Modalidad | Descripción |
|---|---|
| **Instalación** | 5 escenas simultáneas en múltiples pantallas |
| **Pieza lineal** | Escenas concatenadas · ~16 min de proyección frontal |
| **Escenografía** | Ejecución en tiempo real como fondo visual para performance |
| **Digital** | Cada HTML ejecutable en cualquier navegador sin instalación |

### Formatos de Salida

| Formato | Uso |
|---|---|
| HTML (en vivo) | Generativo, irrepetible, interactivo |
| WebM (captura) | 30 fps, duración definida, determinista |
| MP4 (post) | Distribución y archivo · Convertido vía FFmpeg |

---

## Créditos

| Rol | Nombre |
|---|---|
| **Artista / Programador** | Jean Carlos Correa · @jeanmadara |
| **Diseño sonoro** | Jean Carlos Correa · Sonic Pi (live coding) |
| **Samples instrumentales** | Colección del MAAC (Museo Antropológico y de Arte Contemporáneo, Guayaquil) |
| **Voces** | América Orrala, sus hijas y su nieta |
| **Algoritmo retrato generativo** | Vamoss (OpenProcessing #624879) — adaptado |
| **Librerías** | p5.js (Processing Foundation) · CCapture.js (Jaume Sanchez Elias) · Sonic Pi (Sam Aaron) |
| **Acervos** | MAAC (Guayaquil) · Archivo del Patrimonio Cultural del Ecuador |
