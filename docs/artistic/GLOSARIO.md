# GEOMETRÍAS PRECOLOMBINAS
## Glosario

---

> Glosario bilingüe (ES/EN) de términos arqueológicos, técnicos y conceptuales del proyecto.

---

## Términos del Proyecto

| Término | EN | Definición |
|---|---|---|
| **Agente visual** | Visual agent | Escena autónoma con comportamiento propio. Cada escena del proyecto es un agente que se ejecuta independientemente. |
| **Archivo expandido** | Expanded archive | Documentación patrimonial que no se conserva como fotografía estática sino como geometría activa, reproducible y mutable. |
| **Crossfade** | Crossfade | Transición suave entre dos imágenes donde una se desvanece mientras la otra aparece, creando una superposición temporal. |
| **Efecto Ken Burns** | Ken Burns effect | Zoom progresivo lento sobre una imagen estática, simulando movimiento cinematográfico. En el proyecto: de escala 0.85 a 1.0. |
| **Geometría viva** | Living geometry | Forma geométrica que exhibe comportamiento dinámico (respiración, pulso, rotación), como si estuviera animada por una fuerza vital. |
| **Latido geométrico** | Geometric heartbeat | Efecto de respiración sinusoidal aplicado a wireframes 3D. La escala del objeto oscila rítmicamente creando la ilusión de un pulso vital. |
| **Motor de tiempo por cuadros** | Frame-based time engine | Sistema de sincronización temporal basado en `frameCount` en lugar de `millis()`, garantizando consistencia en la captura de video. |
| **Persistencia visual** | Visual persistence / Trail | Efecto de estela causado por un fondo que no se borra completamente entre frames (`background` con alpha bajo), dejando rastros de movimiento. |
| **Pulso cromático** | Color pulse | Variación cíclica del color de un elemento, típicamente controlada por una función sinusoidal. |
| **Respiración orgánica** | Organic breathing | Oscilación sutil de la escala de un objeto mediante ondas sinusoidales, simulando la expansión y contracción del acto de respirar. |

---

## Términos Técnicos

| Término | Definición |
|---|---|
| **Canvas** | Elemento HTML5 donde p5.js dibuja. Superficie de renderizado. |
| **CCapture.js** | Librería JavaScript para captura de video frame-by-frame desde un canvas. |
| **Easing** | Función matemática que suaviza transiciones. `easeOut`: desaceleración. `easeInOut`: aceleración y desaceleración. |
| **Frame / Cuadro** | Una imagen individual en una secuencia de animación. A 30 fps, cada frame dura 33.33ms. |
| **frameCount** | Variable de p5.js que cuenta el número total de frames renderizados desde el inicio. |
| **HSB** | Modelo de color: Hue (tono, 0°–360°), Saturation (saturación), Brightness (brillo). Usado en la Escena 5. |
| **Noise (Perlin)** | Función de ruido pseudo-aleatorio que genera valores suaves y orgánicos. Usado para movimiento natural de partículas y nodos. |
| **p5.js** | Librería JavaScript de código creativo basada en Processing. Motor gráfico del proyecto. |
| **pixelDensity** | Densidad de píxeles del canvas. Se fija en `1` para captura estable independiente de la pantalla. |
| **Shader / WEBGL** | Modo de renderizado 3D de p5.js que usa la GPU. Necesario para modelos .obj. |
| **Wireframe** | Representación de un modelo 3D usando solo las aristas (líneas), sin superficies rellenas. |
| **.obj** | Formato de archivo para modelos 3D que almacena geometría (vértices, caras). |
| **.webm** | Formato de video abierto usado por CCapture.js para las capturas. |

---

## Términos Arqueológicos

| Término | EN | Definición |
|---|---|---|
| **Antropomorfo** | Anthropomorphic | Con forma humana. Figura que representa o evoca el cuerpo humano. |
| **Cerámica** | Ceramics / Pottery | Material producido al cocer arcilla. Soporte principal de la producción artística precolombina del litoral ecuatoriano. |
| **Cultura** | Culture | Conjunto de prácticas, creencias y producciones materiales de un grupo humano en un período y territorio específicos. |
| **Desarrollo Regional** | Regional Development | Segundo período de la cronología del litoral ecuatoriano (500 a.C. – 500 d.C.). Especialización artesanal y expansión comercial. |
| **Figurín / Figurina** | Figurine | Escultura de pequeño formato que representa figuras humanas o animales. |
| **Formativo** | Formative | Primer período de la cronología (3500–500 a.C.). Inicio de la agricultura, la cerámica y los asentamientos permanentes. |
| **Integración** | Integration | Tercer período (500–1530 d.C.). Confederaciones políticas, urbanización, comercio a larga distancia. |
| **Ofrenda funeraria** | Funerary offering | Objeto depositado junto al difunto para acompañarlo en el tránsito al mundo de los muertos. |
| **Urna funeraria** | Funerary urn | Vasija de cerámica destinada a contener restos humanos u ofrendas en contextos mortuorios. |
| **Venus** | Venus | Denominación convencional para figurinas femeninas precolombinas, especialmente las de la cultura Valdivia. |
| **Vasija** | Vessel | Recipiente de cerámica con función utilitaria, ritual o funeraria. |
| **Zoomorfo** | Zoomorphic | Con forma animal. Figura que representa o evoca un animal (jaguares, aves, serpientes). |

---

## Culturas del Proyecto

| Cultura | Período | Cronología | Región |
|---|---|---|---|
| **Valdivia** | Formativo | 3500–1800 a.C. | Santa Elena |
| **Machalilla** | Formativo | 1800–1000 a.C. | Manabí, Guayas |
| **Chorrera** | Formativo | 1000–500 a.C. | Manabí, Guayas, Los Ríos |
| **Bahía** | Desarrollo Regional | 500 a.C.–500 d.C. | Manabí central |
| **Tolita** | Desarrollo Regional | 600 a.C.–400 d.C. | Esmeraldas |
| **Guangala** | Desarrollo Regional | 100 a.C.–800 d.C. | Santa Elena, Guayas sur |
| **Jama-Coaque** | Desarrollo Regional | 350 a.C.–1530 d.C. | Manabí norte |
| **Manteño** | Integración | 800–1530 d.C. | Manabí, Santa Elena |
| **Milagro-Quevedo** | Integración | 400–1530 d.C. | Guayas, Los Ríos |
