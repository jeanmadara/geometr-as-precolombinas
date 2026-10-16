# GEOMETRÍAS PRECOLOMBINAS
## Changelog

---

> Historial de versiones y cambios significativos del proyecto.

---

## [v1.1] — Mayo 2026

### Visor Maestro & Navegación
- ✨ `index.html` — Visor interactivo y catálogo general de las 6 escenas generativas + videodanza Umiña
- ✨ Soporte de previsualización en vivo (16:9 escénico y demo vertical 9:16)
- ✨ Atajos de teclado para performance (`1-6`, `F` fullscreen, `R` recarga, `◀` `▶` navegación)
- ✨ Escaleta narrativa interactiva sincronizada con el storyboard de Museo Manta
- ✨ Wrappers `index.html` en `scene4 Cosmovision/` y `scene5 Mar/` para compatibilidad directa con servidores locales

---

## [v1.0] — Mayo 2026

### Documentación
- ✨ `README.md` — Introducción al repositorio
- ✨ `Dossier.md` — Dossier artístico completo (11 secciones)
- ✨ `FichaTecnica.md` — Fichas técnicas detalladas por escena
- ✨ `TextosCuratoriales.md` — Textos de sala, catálogo, statement
- ✨ `RIDER.md` — Rider técnico de montaje (4 modalidades)
- ✨ `GUION.md` — Guión/escaleta con 3 opciones de orden
- ✨ `REFERENCIAS.md` — Bibliografía y referentes (4 categorías)
- ✨ `GLOSARIO.md` — Glosario bilingüe ES/EN
- ✨ `BITACORA.md` — Diario de proceso
- ✨ `PRESSKIT.md` — Kit de prensa con bios y citas
- ✨ `CONVOCATORIAS.md` — Tracker de postulaciones
- ✨ `CHANGELOG.md` — Este archivo
- ✨ `agents.md` — Guía técnica de agentes visuales

### Skills (`.gemini/skills/`)
- ✨ `crear-escena-generativa.md`
- ✨ `motor-slideshow.md`
- ✨ `wireframe-3d.md`
- ✨ `composicion-multicapa.md`
- ✨ `minimalismo-cinetico.md`
- ✨ `retrato-generativo.md`
- ✨ `procesar-imagenes.md`
- ✨ `captura-video.md`
- ✨ `adaptar-demo.md`
- ✨ `documentacion.md`
- ✨ `community-manager.md`

---

## [v0.9] — Abril 2026

### GP-DEMO2025
- ✨ `agente1-jaguar3d.html` — Demo vertical 9:16 del Jaguar Tolita
- ✨ `agente2-mujeres.html` — Demo vertical del Archivo de Mujeres
- ✨ `agente3b-vasijas.html` — Demo vertical de Vasijas Funerarias
- ✨ `agente4-cosmovision.html` — Demo vertical de Cosmovisión
- ✨ `agente5-mar.html` — Demo vertical de El Agua como Vínculo
- Formato: 1080×1920, 25 fps, 250 frames

### Utilidades Python
- ✨ `Python/mp4tomp3.py` — Extracción de audio MP4→MP3

---

## [v0.8] — Marzo 2026

### Escenas
- ✨ Escena 5 (`scene5 Mar/agua_vinculo.html`) — Composición oceánica multicapa
- ✨ Escena 4 (`scene4 Cosmovision/fondo_negro_geometria_progresiva.html`) — Geometría cinética
- 🔧 Escena 2 — Corrección de rutas de imágenes en `imagePaths[]`
- 🔧 Escena 1 — Fix de CCapture initialization

---

## [v0.5] — Febrero 2026

### Escenas
- ✨ Escena 1 (`scene1 3D/`) — Wireframe 3D del Jaguar Tolita
- ✨ Escena 2 (`scene2 Mujeres/`) — Archivo de Mujeres (47 figuras)
- ✨ Escena 3a (`scene3-1 AmericaOrrala/`) — Retrato generativo
- ✨ Escena 3b (`scene3-2 Vasija funeraria/`) — Vasijas funerarias (20 piezas)

### Utilidades Python
- ✨ `Python/video.py` — Generador de video MP4 con OpenCV
- ✨ `Python/convert.py` — Conversión WebM→MP4
- ✨ `Python/remove_bg.py` — Remoción de fondos

### Assets
- 📦 6 modelos 3D (.obj) en `scene1 3D/assets/`
- 📦 47 imágenes de figuras femeninas en `scene2 Mujeres/Img/`
- 📦 20 imágenes de vasijas en `scene3-2 Vasija funeraria/Img/`
- 📦 1 imagen fuente para retrato generativo (`orrala.png`)

---

## Leyenda

| Emoji | Tipo de cambio |
|---|---|
| ✨ | Nuevo archivo o feature |
| 🔧 | Corrección de bug |
| 📦 | Assets añadidos |
| ♻️ | Refactorización |
| 🗑️ | Archivo eliminado |
| 📝 | Actualización de documentación |
