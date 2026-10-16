# 🔺 Geometrías Precolombinas

**Laboratorio escénico de arte generativo** que traduce artefactos arqueológicos del litoral ecuatoriano en organismos digitales con comportamiento autónomo.

75 piezas · 9 culturas · 5000 años · 5 escenas generativas · p5.js

---

## ✦ Qué es

Cada escena es un **agente visual autónomo**: un programa que se ejecuta en tiempo real, generando variaciones únicas e irrepetibles. El código no ilustra el objeto arqueológico; lo ejecuta. La espiral se convierte en función sinusoidal, el pigmento mineral en gradiente HSB, la ofrenda funeraria en crossfade cinematográfico.

## ✦ Las Escenas

| # | Escena | Descripción | Duración |
|---|---|---|---|
| 1 | **Geometric Heartbeat** | Jaguar Tolita como wireframe 3D con respiración sinusoidal | 3 min |
| 2 | **Archivo de Mujeres** | 47 figuras femeninas en slideshow cinematográfico | ~4 min |
| 3a | **América Orrala** | Retrato generativo construido por 100 agentes-partícula | continua |
| 3b | **Vasijas Funerarias** | 20 urnas mortuorias en tránsito contemplativo | ~1:40 min |
| 4 | **Cosmovisión** | Geometría progresiva sobre grano fotográfico | 3 min |
| 5 | **El Agua como Vínculo** | Composición oceánica multicapa (olas, nodos, partículas) | ~3 min |

## ✦ Estructura

```
GP/
├── index.html                   → Visor maestro interactivo de las 6 escenas y videodanza
├── scene1 3D/                    → Wireframe 3D pulsante (WEBGL)
├── scene2 Mujeres/               → Slideshow de figuras femeninas
├── scene3-1 AmericaOrrala/       → Retrato generativo por agentes
├── scene3-2 Vasija funeraria/    → Slideshow de vasijas funerarias
├── scene4 Cosmovision/           → Geometría cinética abstracta
├── scene5 Mar/                   → Composición oceánica multicapa
├── GP-DEMO2026/                  → Versiones demo (9:16, 10 seg)
├── Python/                       → Utilidades de post-producción
├── docs/                         → Documentación organizada
│   ├── artistic/                 → Dossier, bitácora, referencias
│   ├── technical/                → Ficha técnica, agents, rider
│   ├── management/               → Presskit, convocatorias
│   └── academic/                 → Paper, opensource
└── .gemini/skills/               → 11 skills del proyecto
```

## ✦ Cómo ejecutar

Puedes ver el laboratorio completo desde el **visor maestro interactivo** (`index.html`) o cada escena por separado:

```bash
# Opción 1: Visor maestro interactivo (Recomendado)
# En la raíz del proyecto:
python -m http.server 8000
# Abrir http://localhost:8000 en el navegador

# Opción 2: Live Server en VS Code / IDE
# Clic derecho en index.html -> "Open with Live Server"

# Opción 3: npx
npx serve .
```

Al ejecutarse, cada escena **graba automáticamente** en formato WebM. El archivo se descarga al completar el ciclo.

## ✦ Culturas Representadas

| Período | Cronología | Culturas |
|---|---|---|
| **Formativo** | 3500 – 500 a.C. | Valdivia · Machalilla · Chorrera |
| **Desarrollo Regional** | 500 a.C. – 500 d.C. | Bahía · Tolita · Guangala · Jama-Coaque |
| **Integración** | 500 – 1530 d.C. | Manteño · Milagro-Quevedo |

## ✦ Stack

| | |
|---|---|
| **Motor gráfico** | [p5.js](https://p5js.org/) v1.9 |
| **3D** | p5.js WEBGL |
| **Captura** | [CCapture.js](https://github.com/spite/ccapture.js) v1.1 |
| **Post-producción** | Python · OpenCV · FFmpeg · Pillow · rembg |

## ✦ Demo

El directorio `GP-DEMO2025/` contiene versiones adaptadas de cada escena en formato **vertical 9:16** (1080×1920), 250 frames a 25 fps (~10 segundos). Ideales para previsualización y redes sociales.

## ✦ Documentación

### Artística
- **[Dossier.md](docs/artistic/Dossier.md)** — Dossier artístico completo (sinopsis, declaración, marco conceptual)
- **[TextosCuratoriales.md](docs/artistic/TextosCuratoriales.md)** — Textos de sala, catálogo y statement del artista
- **[BITACORA.md](docs/artistic/BITACORA.md)** — Diario de proceso creativo y decisiones de diseño
- **[REFERENCIAS.md](docs/artistic/REFERENCIAS.md)** — Bibliografía, referentes artísticos y arqueológicos
- **[GLOSARIO.md](docs/artistic/GLOSARIO.md)** — Glosario bilingüe ES/EN

### Técnica
- **[FichaTecnica.md](docs/technical/FichaTecnica.md)** — Especificaciones técnicas detalladas por escena
- **[agents.md](docs/technical/agents.md)** — Guía técnica de agentes visuales (para desarrolladores)
- **[RIDER.md](docs/technical/RIDER.md)** — Rider técnico de montaje (equipos, sala, tiempos)
- **[GUION.md](docs/artistic/GUION.md)** — Guión / escaleta con orden de escenas y cues
- **[CHANGELOG.md](CHANGELOG.md)** — Historial de versiones

### Difusión y Academia
- **[PRESSKIT.md](docs/management/PRESSKIT.md)** — Kit de prensa (bios, descripciones, citas, material visual)
- **[CONVOCATORIAS.md](docs/management/CONVOCATORIAS.md)** — Tracker de postulaciones a festivales y convocatorias
- **[OPENSOURCE.md](docs/academic/OPENSOURCE.md)** — Filosofía y stack de software libre
- **[PAPER.md](docs/academic/PAPER.md)** — Artículo académico y metodología de traducción

---

## ✦ Autor

**Jean Carlos Correa** · [@jeanmadara](https://instagram.com/jeanmadara)  
Artista visual y programador creativo 🇪🇨  
Litoral ecuatoriano → código creativo → escenografía digital

---


<p align="center">🔺 Geometrías Precolombinas · 2026</p>
