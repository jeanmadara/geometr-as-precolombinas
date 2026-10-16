# Geometrías Precolombinas: Traducción Algorítmica de Artefactos Arqueológicos del Litoral Ecuatoriano

**Jean Carlos Correa** · @jeanmadara · Ecuador

---

## Resumen

Este artículo presenta *Geometrías Precolombinas*, un laboratorio escénico digital que traduce 75 artefactos arqueológicos de nueve culturas precolombinas del litoral ecuatoriano en escenas de arte generativo. El proyecto emplea p5.js como motor gráfico y Sonic Pi como entorno de composición sonora generativa. Se describen cinco agentes visuales y la metodología de traducción formal que convierte propiedades materiales de las piezas en parámetros algorítmicos. Se discute el concepto de *archivo expandido* como alternativa a la documentación patrimonial estática y las implicaciones de utilizar exclusivamente software libre.

**Palabras clave:** arte generativo, p5.js, Sonic Pi, arqueología digital, patrimonio precolombino, software libre, archivo expandido

## Abstract

This paper presents *Geometrías Precolombinas*, a digital scenic laboratory that translates 75 archaeological artifacts from nine pre-Columbian cultures of the Ecuadorian coast into generative art scenes with autonomous behavior. The project employs p5.js as a real-time graphics engine and Sonic Pi as a generative sound composition environment. Five visual agents and the formal translation methodology that converts material properties into algorithmic parameters are described. The concept of *expanded archive* as an alternative to static heritage documentation and the implications of using exclusively free and open-source software are discussed.

**Keywords:** generative art, p5.js, Sonic Pi, digital archaeology, pre-Columbian heritage, free software, expanded archive

---

## 1. Introducción

El litoral ecuatoriano alberga uno de los registros cerámicos más antiguos del continente americano. Desde las figurinas Valdivia (ca. 3500 a.C.) hasta las urnas funerarias Milagro-Quevedo (ca. 1500 d.C.), cinco milenios de producción material se extienden a lo largo de la costa del Pacífico (Marcos, 2005; Meggers et al., 1965).

La digitalización de acervos arqueológicos ha avanzado significativamente —fotogrametría, escaneo 3D, bases de datos de acceso abierto (Roosevelt et al., 2015)— pero mantiene una relación documental con el objeto: lo registra, lo cataloga, lo preserva como artefacto estático. El código creativo ofrece una alternativa: no documentar el objeto sino *ejecutarlo* — traducir sus cualidades formales en comportamientos algorítmicos que generan variaciones infinitas en tiempo real.

### 1.1. Objetivos

1. Desarrollar una metodología de *traducción algorítmica* de propiedades formales cerámicas a parámetros de comportamiento generativo.
2. Construir cinco agentes visuales autónomos sobre un corpus de 75 piezas de nueve culturas.
3. Integrar diseño sonoro generativo basado en samples de instrumentos precolombinos y registros vocales intergeneracionales.
4. Explorar el *archivo expandido* como documentación patrimonial activa.
5. Demostrar la viabilidad de un performance construido exclusivamente con software libre.

---

## 2. Antecedentes

### 2.1. Arte generativo y código creativo

El arte generativo —"cualquier práctica donde el artista utiliza un sistema con algún grado de autonomía" (Galanter, 2003)— tiene raíces en Vera Molnár (1968), Manfred Mohr (1973) y Harold Cohen (1973). Processing (Reas & Fry, 2007) y p5.js (McCarthy et al., 2014) democratizaron el acceso, estableciendo el navegador web como espacio de exhibición.

### 2.2. Arqueología digital

La intersección computación-patrimonio ha sido explorada desde la documentación: fotogrametría, 3D, GIS (Huggett, 2012). Como señala Roosevelt et al. (2015): "la excavación es destrucción; la digitalización es su complemento necesario". Este proyecto propone un paso adicional: la *ejecución* del artefacto digitalizado.

### 2.3. Marco conceptual: analogía estructural entre la ofrenda y la iteración algorítmica

Guinea (2004) documenta que la ofrenda funeraria en las culturas del litoral ecuatoriano funcionaba como un dispositivo de mediación simbólica: un objeto que codificaba información cultural (estatus, cosmovisión, relaciones de parentesco) y la trasladaba de un dominio ontológico a otro. Este proyecto propone una analogía estructural entre dicho mecanismo y la iteración computacional. En ambos casos se observan tres propiedades compartidas: (1) **repetición formal** — la producción cerámica seriada y el ciclo `draw()` ejecutado 30 veces por segundo operan mediante la reiteración de un patrón con variaciones; (2) **codificación de información** — tanto el artefacto como el algoritmo traducen propiedades de un sistema (material/formal) en propiedades de otro (simbólico/visual); (3) **mediación entre dominios** — la ofrenda media entre el mundo de los vivos y el de los muertos, mientras que el código media entre el artefacto físico y su manifestación generativa en pantalla. Esta analogía no pretende una equivalencia ontológica, sino identificar una correspondencia funcional que fundamenta la metodología de traducción algorítmica descrita en la Sección 4.

---

## 3. Corpus

### 3.1. Fuentes

- Museo Antropológico y de Arte Contemporáneo (MAAC), Guayaquil
- Catálogo Digital de Bienes Culturales del Ecuador

Piezas identificadas con código patrimonial GA-XX-XXXX-XX.

### 3.2. Composición

| Período | Cultura | Cronología | Figuras | Vasijas | 3D | Total |
|---|---|---|---|---|---|---|
| Formativo | Valdivia | 3500–1800 a.C. | 9 | — | 2 | 11 |
| Formativo | Machalilla | 1800–1000 a.C. | 7 | — | — | 7 |
| Formativo | Chorrera | 1000–500 a.C. | 6 | — | — | 6 |
| Des. Regional | Bahía | 500 a.C.–500 d.C. | 5 | — | — | 5 |
| Des. Regional | Tolita | 600 a.C.–400 d.C. | 2 | 3 | 4 | 9 |
| Des. Regional | Guangala | 100 a.C.–800 d.C. | 4 | — | — | 4 |
| Des. Regional | Jama-Coaque | 350 a.C.–1530 d.C. | 10 | 1 | — | 11 |
| Integración | Manteño | 800–1530 d.C. | 5 | 7 | — | 12 |
| Integración | Milagro-Quevedo | 400–1530 d.C. | 1 | 9 | — | 10 |
| | **Total** | | **49** | **20** | **6** | **75** |

### 3.3. Fuentes sonoras

1. **Instrumentos precolombinos (MAAC)**: Ocarinas, silbatos zoomorfos, flautas de cerámica y percusiones rituales.
2. **Voces intergeneracionales**: América Orrala, sus hijas y su nieta — tres generaciones de transmisión oral costera.

---

## 4. Metodología: Traducción Algorítmica

### 4.1. Pipeline

```
ARTEFACTO → FOTOGRAFÍA → AISLAMIENTO (rembg) → ANÁLISIS FORMAL
                                                        ↓
                                            ┌───────────┴───────────┐
                                            │ VISUAL (p5.js)        │ SONORO (Sonic Pi)
                                            └───────────┬───────────┘
                                                        ↓
                                              ESCENA GENERATIVA → CAPTURA (CCapture.js)
```

### 4.2. Tabla de traducción formal

| Propiedad material | Parámetro algorítmico | Implementación |
|---|---|---|
| Volumen / masa | Escala | `scale(-2.5)` |
| Respiración / vitalidad | Onda sinusoidal | `map(sin(t), -1, 1, 1.0, 1.08)` |
| Color / pigmento | Gradiente HSB | HSB 195°–215° |
| Textura superficial | Ruido estático | 3 niveles de brillo pixel a pixel |
| Simetría | Ejes de rotación | Y → X → Z progresiva |
| Ritmo decorativo | Frecuencia de oscilación | `frameCount * 1.5` |
| Luminosidad | Umbral de muestreo | `brightness() > 70` |
| Fluidez | Perlin noise | `noise(x*0.003, y*0.003, t*0.4)` |
| Peso visual | Alpha / opacidad | `background(2, 13, 24, 22)` |

### 4.3. Sincronización temporal

Motor de tiempo por cuadros: `totalMs = (frameCount - startFrame) * 33.333`. Garantiza determinismo en captura de video independiente de la velocidad del procesador.

---

## 5. Agentes Visuales y Diseño Sonoro

### 5.1. Agente 1: Geometric Heartbeat

Modelo `.obj` (jaguar Tolita) renderizado como wireframe WEBGL. Respiración sinusoidal (escala 1.0–1.08), pulso cromático (dorado→blanco), rotación progresiva en 3 ejes activados secuencialmente.

### 5.2. Agentes 2 y 3b: Slideshows Cinematográficos

Motor de slideshow con temporización por cuadros, crossfade de 1 seg y Ken Burns (`zoom = 0.85 + prog * 0.15`). El Agente 2 recorre 47 figuras femeninas; el Agente 3b, 20 vasijas funerarias.

### 5.3. Agente 3a: Retrato Generativo

Adaptación del algoritmo *wandering circles* (Vamoss, OpenProcessing #624879): 100 agentes autónomos muestrean brillo e invierten dirección al detectar zonas luminosas. Color extraído del pixel correspondiente. El retrato emerge por acumulación.

### 5.4. Agente 4: Geometría Cinética

28 formas + 20 líneas autónomas sobre grano fotográfico generativo. Ciclo de vida con easing orgánico: `easeOut(fadeIn) * easeInOut(fadeOut) * targetAlpha`. Formas hijas anidadas (35% probabilidad).

### 5.5. Agente 5: Composición Oceánica

Cinco capas con persistencia visual: rutas de tránsito, olas geométricas (gradiente HSB por profundidad), red de 22 nodos con conexión dinámica, 120 partículas con flujo Perlin, texto tipográfico ambiental.

### 5.6. Diseño Sonoro

Sonic Pi procesa los samples mediante: inversión temporal, granulación, filtrado por frecuencia, superposición estocástica y modulación sinusoidal. Distribución: percusiones para el wireframe, voces para el archivo de mujeres, ocarinas para vasijas, superposición total para el cierre oceánico.

---

## 6. Discusión

### 6.1. El archivo expandido

El proyecto propone el *archivo expandido*: documentación patrimonial donde el artefacto se conserva como comportamiento generativo, no como imagen estática. La fidelidad no está en la apariencia sino en la *lógica formal*: proporciones, ritmos y simetrías se preservan como parámetros algorítmicos.

### 6.2. Software libre como infraestructura cultural

| Herramienta | Licencia |
|---|---|
| p5.js | LGPL-2.1 |
| Sonic Pi | MIT |
| CCapture.js | MIT |
| Python | PSF License |
| OpenCV | Apache 2.0 |
| FFmpeg | LGPL / GPL |
| rembg | MIT |

El software libre comparte con la producción cerámica precolombina una lógica de transmisión abierta del conocimiento. Las técnicas cerámicas se transmitían como conocimiento comunitario. El código abierto opera bajo la misma lógica.

### 6.3. La voz como material generativo

Las voces intergeneracionales de América Orrala introducen una dimensión inmaterial: la voz no se conserva en tierra, no se excava, no tiene código GA. Procesarla algorítmicamente es un acto de traducción análogo al que se realiza con la cerámica.

### 6.4. Limitaciones

- Traducción sobre representaciones (fotos/escaneos), no piezas originales.
- Sincronización audiovisual manual (p5.js ↔ Sonic Pi). Futuro: comunicación OSC.
- Corpus limitado a colecciones MAAC y catálogo digital ecuatoriano.

---

## 7. Conclusiones

*Geometrías Precolombinas* demuestra la viabilidad de la *traducción algorítmica* para activar patrimonio arqueológico con herramientas de software libre. El *archivo expandido* ofrece una alternativa a los paradigmas de digitalización convencional.

**Trabajo futuro**: Comunicación OSC p5.js↔Sonic Pi; extensión del corpus a la región andina; interactividad corporal (Kinect/cámara); publicación como repositorio abierto; talleres de código creativo en comunidades costeras del litoral ecuatoriano.

---

## Referencias

- Galanter, P. (2003). What is Generative Art? *International Conference on Generative Art*.
- Guinea, M. (2004). Los símbolos del poder. En *Simbolismo y Ritual en los Andes Septentrionales*. Abya-Yala.
- Huggett, J. (2012). Core or Periphery? *Historical Social Research*, 37(3).
- Marcos, J. G. (2005). *Los Pueblos Navegantes del Ecuador Prehispánico*. Abya-Yala.
- McCarthy, L., Reas, C., & Fry, B. (2014). p5.js. Processing Foundation.
- Meggers, B. J., Evans, C., & Estrada, E. (1965). *Early Formative Period of Coastal Ecuador*. Smithsonian.
- Reas, C., & Fry, B. (2007). *Processing: A Programming Handbook*. MIT Press.
- Roosevelt, C. H., et al. (2015). Excavation is Destruction Digitization. *Journal of Field Archaeology*, 40(3).
- Taylor, D. (2003). *The Archive and the Repertoire*. Duke University Press.

---

> **Citar como**: Correa, J. C. (2026). Geometrías Precolombinas: Traducción algorítmica de artefactos arqueológicos del litoral ecuatoriano. *[Publicación pendiente]*.
