# GEOMETRÍAS PRECOLOMBINAS

### Laboratorio Escénico de Arte Generativo

---

> *"Performance escénico — video generativo — nuevos medios"*

---

## Ficha Técnica

| | |
|---|---|
| **Título** | Geometrías Precolombinas |
| **Subtítulo** | Performance que explora las geometrías precolombinas como expresión iconográfica y su vínculo con el territorio. |
| **Autor** | Jean Carlos Correa · @jeanmadara |
| **Disciplina** | Arte generativo · Código creativo · Escenografía digital |
| **Técnica** | Programación en tiempo real con p5.js |
| **Formato** | 5 escenas audiovisuales generativas (HTML/JS autocontenidos) |
| **Duración total** | ~16 minutos de material generativo continuo |
| **Territorio** | Litoral ecuatoriano — Costa del Pacífico sudamericano |

---

## I. Sinopsis

**Geometrías Precolombinas** es un laboratorio escénico digital que traduce artefactos arqueológicos del litoral ecuatoriano en piezas de arte generativo. El proyecto opera en la intersección entre la memoria material precolombina y el código creativo contemporáneo, construyendo una escenografía digital donde cada objeto ancestral —venus de Valdivia, vasijas funerarias, figuras zoomorfas, jaguares rituales— renace como geometría viva: formas que respiran, pulsan, se fragmentan y se recomponen en la pantalla.

Cada escena funciona como un **agente visual autónomo**: un organismo algorítmico que interpreta un fragmento del archivo arqueológico y lo transforma en una pieza audiovisual con comportamiento propio. No se trata de digitalización ni de reproducción documental, sino de **traducción poética**: el barro se convierte en wireframe, la espiral ceremonial en función sinusoidal, el pigmento mineral en gradiente HSB, la ofrenda funeraria en crossfade cinematográfico.

El resultado es un archivo vivo —un repositorio de geometrías que laten— donde coexisten nueve culturas precolombinas separadas por milenios pero unidas por la misma costa del Pacífico.

---

## II. Declaración Artística

El litoral ecuatoriano alberga uno de los registros cerámicos más antiguos de América. Desde las Venus de Valdivia (3500 a.C.) hasta las urnas funerarias Milagro-Quevedo (1500 d.C.), cinco mil años de producción material quedaron sepultados bajo capas de tierra, olvido institucional y narrativas coloniales.

**Geometrías Precolombinas** no pretende rescatar ni restaurar. Pretende **reactivar**.

Cada artefacto de la reserva arqueológica del MAAC y del Catálogo Digital de Bienes Culturales del Ecuador es tratado como un **sistema generativo latente**: una forma que contiene instrucciones de movimiento, proporción y ritmo. El código no ilustra el objeto; lo ejecuta. Un jaguar Tolita no se exhibe como modelo 3D estático, sino como un wireframe que respira con una onda sinusoidal —un latido geométrico que traduce la energía vital que el artesano original insufló en el barro.

El proyecto se posiciona en tres ejes:

1. **Arqueología algorítmica**: Leer las formas precolombinas como código fuente de una estética ancestral y ejecutarlas con herramientas contemporáneas.
2. **Escenografía generativa**: Crear fondos y ambientes visuales para la escena artística que no sean decoración, sino organismos vivos con comportamiento autónomo.
3. **Archivo expandido**: Proponer una nueva forma de documentar el patrimonio: no como fotografía muerta, sino como geometría activa que puede reproducirse, mutarse y distribuirse infinitamente.

---

## III. Marco Conceptual

### El Código como Ofrenda

En las culturas precolombinas del litoral ecuatoriano, la ofrenda funeraria era un acto de traducción: trasladar la vida al mundo de los muertos mediante un objeto cargado de significado. La vasija no contenía alimento solamente; contenía tránsito.

En **Geometrías Precolombinas**, el código cumple una función análoga. Cada `function draw()` es un ritual de repetición: un ciclo que se ejecuta 30 veces por segundo, generando variaciones infinitas de una misma forma. El `frameCount` es un reloj ceremonial. El `noise()` de Perlin es un oráculo algorítmico. La pantalla es el espacio liminal donde el artefacto arqueológico deja de ser pasado y se convierte en presente continuo.

### Nueve Culturas, Un Litoral

El proyecto trabaja con piezas de **nueve culturas** que habitaron la costa ecuatoriana a lo largo de tres períodos:

| Período | Cronología | Culturas | Tipo de piezas |
|---|---|---|---|
| **Formativo** | 3500 – 500 a.C. | Valdivia, Machalilla, Chorrera | Venus de fertilidad, figurines antropomorfos |
| **Desarrollo Regional** | 500 a.C. – 500 d.C. | Bahía, Tolita, Guangala, Jama-Coaque | Jaguares zoomorfos, figuras ceremoniales |
| **Integración** | 500 – 1530 d.C. | Manteño, Milagro-Quevedo | Vasijas funerarias, urnas mortuorias |

Estas culturas no existieron en aislamiento. El Pacífico fue su vínculo: ruta de comercio, fuente de alimento, eje cosmogónico. La escena final del proyecto, *El Agua como Vínculo*, traduce esta idea en un sistema de nodos, olas y partículas que flotan en un océano algorítmico.

### Latido Geométrico: La Respiración del Wireframe

El concepto central del proyecto es el **latido geométrico** (*Geometric Heartbeat*): la idea de que toda forma ancestral contiene un pulso vital que puede ser reactivado mediante código. Este pulso se manifiesta de múltiples formas:

- **Respiración orgánica**: escalas oscilantes controladas por ondas sinusoidales (`sin(frameCount * 1.5)`).
- **Pulso cromático**: variaciones de color entre dorado y blanco que simulan energía fluyendo por la malla.
- **Rotación progresiva**: ejes de rotación que se activan secuencialmente, como un despertar gradual del objeto.
- **Persistencia visual**: fondos con transparencia parcial (`background(2, 13, 24, 22)`) que generan estelas de movimiento, como si la geometría dejara un rastro de su existencia.

---

## IV. Las Escenas

### Escena 1 · *Geometric Heartbeat*
**Visualizador 3D del Jaguar Tolita**

Un modelo tridimensional de un jaguar zoomorfo de la cultura Tolita (500 a.C. – 500 d.C.) se renderiza como wireframe sobre fondo negro absoluto. Sin relleno, sin textura: solo la estructura ósea del objeto, sus líneas de contorno pulsando entre dorado y blanco.

El modelo respira. Una onda sinusoidal controla su escala, oscilando suavemente entre `1.0` y `1.08` —un latido imperceptible pero constante. La rotación comienza lenta, solo en el eje Y, como si el jaguar girara en exhibición ceremonial. Después de un minuto, se activa la rotación en X. Después de dos, en Z. El objeto se libera progresivamente de las restricciones del espacio museístico y entra en un movimiento libre, cósmico.

| | |
|---|---|
| **Referencia arqueológica** | GA-7-876-78 · Cabeza y torso antropomorfo · Cultura Tolita |
| **Modelo 3D** | `tolita2.obj` (2.2 MB, wireframe) |
| **Duración** | 5400 frames · 3 minutos |
| **Resolución** | 1280 × 720 (WEBGL) |
| **Estética** | Minimalismo lumínico · Latido sinusoidal · Wireframe dorado |

---

### Escena 2 · *Archivo de Mujeres*
**Slideshow Cinematográfico de Figuras Femeninas**

Un recorrido visual por **47 figuras femeninas** de cerámica, organizadas cronológicamente desde el Formativo hasta el período de Integración. Cada pieza aparece con un fade-in suave, permanece 4 segundos en pantalla con un efecto Ken Burns (zoom progresivo de `0.85` a `1.0`), y se disuelve en crossfade hacia la siguiente.

No es un slideshow convencional. Es un **acto de presencia**: cada Venus, cada figurín femenino, ocupa la totalidad de la pantalla durante su momento. El zoom lento crea una sensación de acercamiento íntimo, como si el espectador se inclinara sobre la vitrina del museo hasta que su aliento empañara el cristal.

| | |
|---|---|
| **Corpus** | 47 imágenes de alta resolución (PNG, fondo removido) |
| **Culturas** | Valdivia (9), Machalilla (7), Chorrera (6), Bahía (5), Tolita (2), Guangala (4), Jama-Coaque (10), Milagro (1), Manteño (5) |
| **Duración por pieza** | 4 segundos + 1 segundo de transición |
| **Duración total** | ~3 min 55 seg (ciclo completo) |
| **Estética** | Fondo negro · Crossfade cinematográfico · Ken Burns |

---

### Escena 3a · *América Orrala*
**Retrato Generativo por Agentes-Partícula**

Un retrato fotográfico de América Orrala —guardiana de la memoria arqueológica de la costa— es reconstruido línea a línea por 100 agentes autónomos que recorren el canvas trazando caminos. Cada agente muestrea el brillo de la imagen fuente: si detecta una zona luminosa (brillo > 70) o sale del canvas, invierte su dirección. El color de cada trazo se extrae directamente del pixel correspondiente en la fotografía original.

El resultado es un **retrato emergente**: una imagen que no existe al inicio y se construye gradualmente, como un recuerdo que se reconstruye desde fragmentos. El algoritmo de "círculos errantes" produce una textura orgánica, casi capillar, que evoca tanto el tejido como la cartografía.

| | |
|---|---|
| **Imagen fuente** | `orrala.png` (3.1 MB, alta resolución) |
| **Agentes** | 100 partículas con dirección, radio y ángulo independientes |
| **Algoritmo** | Círculos errantes (basado en Vamoss/OpenProcessing) |
| **Resolución** | 1920 × 1080 |
| **Estética** | Retrato construido · Línea sobre negro · Emergencia visual |

---

### Escena 3b · *Vasijas Funerarias*
**Archivo Cinematográfico de Urnas Mortuorias**

Con el mismo motor de slideshow de la Escena 2, esta pieza se enfoca exclusivamente en **20 vasijas funerarias** de cuatro culturas del período tardío. Las vasijas —urnas que contenían restos humanos, ofrendas y objetos rituales— flotan sobre fondo negro con la misma cadencia contemplativa: zoom lento, crossfade suave, presencia absoluta.

| | |
|---|---|
| **Corpus** | 20 imágenes de vasijas funerarias (PNG, fondo removido) |
| **Culturas** | Jama-Coaque (1), Manteño (7), Milagro-Quevedo (9), Tolita (3) |
| **Duración por pieza** | 4 segundos + 1 segundo de transición |
| **Duración total** | ~1 min 40 seg |
| **Estética** | Fondo negro · Crossfade · Ken Burns · Silencio visual |

---

### Escena 4 · *Cosmovisión*
**Fondo Geométrico Progresivo**

Un espacio negro con textura de grano fotográfico —generada pixel a pixel como ruido estático analógico— donde formas geométricas elementales (rectángulos y círculos) aparecen, rotan, pulsan y desaparecen con curvas de easing orgánicas. 28 formas y 20 líneas coexisten como entidades autónomas, cada una con su propio ciclo de vida: nacimiento (fade-in con `easeOut`), existencia (rotación continua, transparencia pulsante) y muerte (fade-out con `easeInOut`).

Algunas formas contienen formas hijas anidadas —un eco geométrico que evoca las figuras dentro de figuras de la iconografía precolombina. Las líneas se dibujan progresivamente, como si una mano invisible las trazara lentamente sobre la oscuridad.

| | |
|---|---|
| **Elementos** | 28 formas (rect/circle) + 20 líneas autónomas |
| **Textura** | Ruido estático pixel a pixel (grano fotográfico generativo) |
| **Duración** | 5400 frames · 3 minutos |
| **Resolución** | 1280 × 720 |
| **Estética** | Minimalismo cinético · Textura analógica · Easing orgánico |

---

### Escena 5 · *El Agua como Vínculo*
**Composición Oceánica en Cinco Capas**

La pieza final del laboratorio traduce la idea del Pacífico como conector cultural en un sistema visual de cinco capas superpuestas:

1. **Rutas de tránsito**: Segmentos horizontales que viajan a velocidad constante, evocando las rutas de navegación costera.
2. **Olas geométricas**: Siete polilíneas ondulantes con quiebres angulares y gradiente de color por profundidad (HSB 195°–215°), que no imitan el mar sino que lo abstraen en geometría.
3. **Red de nodos**: 22 nodos luminosos conectados por líneas cuando están suficientemente cerca, formando una red que se reconfigura constantemente —como las relaciones comerciales y ceremoniales entre comunidades costeras.
4. **Partículas flotantes**: 120 partículas de tres tipos (punto, rombo, cruz) que derivan por corrientes de flujo Perlin, como organismos marinos o estrellas bajo el agua.
5. **Texto tipográfico**: Palabras como *vínculo*, *tránsito*, *origen*, *corriente*, *red*, *nodo*, *flujo* y *territorio* flotan en los bordes con opacidad pulsante, como mensajes que el agua arrastra.

La persistencia visual (`background(2, 13, 24, 22)`) genera estelas de movimiento que convierten toda la escena en un organismo fluido, un sistema que respira como el océano.

| | |
|---|---|
| **Capas** | 5 (rutas, olas, red, partículas, texto) |
| **Nodos** | 22 con conexión dinámica por proximidad |
| **Partículas** | 120 (punto, rombo, cruz) con flujo Perlin |
| **Paleta** | Tonos fríos oceánicos HSB 195°–215° · Fondo `#020d18` |
| **Duración** | 5610 frames · ~3.1 minutos |
| **Resolución** | 1280 × 720 |
| **Estética** | Cartografía líquida · Flujo oceánico · Persistencia visual |

---

## V. Metodología

### Del Museo al Código

El proceso creativo sigue una secuencia de operaciones que transforma el artefacto físico en agente digital:

```
ARTEFACTO → FOTOGRAFÍA → REMOCIÓN DE FONDO → ANÁLISIS FORMAL → ALGORITMO → ESCENA GENERATIVA → CAPTURA DE VIDEO
                                                                     ↑
                                               SAMPLES SONOROS → SONIC PI → TEXTURA SONORA
```

1. **Documentación fotográfica**: Registro de alta resolución de las piezas del archivo patrimonial.
2. **Aislamiento**: Remoción algorítmica de fondos con `rembg` (Python), dejando la pieza suspendida en el vacío.
3. **Análisis formal**: Identificación de las geometrías dominantes, proporciones, ritmos y texturas del artefacto.
4. **Traducción algorítmica**: Escritura del código p5.js que interpreta las cualidades formales como parámetros de comportamiento (amplitud, frecuencia, velocidad, easing).
5. **Composición sonora**: Construcción de texturas sonoras en Sonic Pi a partir de samples de instrumentos precolombinos y voces de las guardianas de la memoria oral.
6. **Ejecución generativa**: La escena se ejecuta en el navegador, generando una pieza única e irrepetible en cada ejecución.
7. **Captura de video**: CCapture.js graba fotograma a fotograma a 30 fps, generando archivos WebM de alta fidelidad para exhibición y distribución.

### Diseño Sonoro

El componente sonoro del proyecto se construye en **Sonic Pi** (live coding), generando texturas sonoras a partir de dos fuentes:

**Instrumentos precolombinos (MAAC)**:
Samples grabados piezas originales de instrumentos musicales de las culturas del litoral ecuatoriano, provenientes de la colección del Museo Antropológico y de Arte Contemporáneo (MAAC, Guayaquil). Ocarinas, silbatos zoomorfos, flautas de cerámica y percusiones rituales se procesan y superponen como capas sonoras que acompañan las geometrías visuales.

**Voces de América Orrala y su linaje**:
Registros vocales de América Orrala —guardiana de la memoria arqueológica de la costa—, sus hijas y su nieta. Tres generaciones de una misma línea de transmisión oral, cuyas voces se convierten en material sonoro generativo: fragmentos, respiraciones, palabras procesados algorítmicamente en Sonic Pi.

El sonido no ilustra la imagen: la habita. Las texturas sonoras operan como un paisaje acústico que emerge de la misma materia conceptual que las geometrías visuales — el artefacto, el territorio, la memoria transmitida de cuerpo a cuerpo.

### Stack Tecnológico

| Componente | Herramienta | Función |
|---|---|---|
| Motor gráfico | p5.js (v1.9) | Renderizado 2D/3D en tiempo real |
| Modo 3D | p5.js WEBGL | Renderizado de modelos .obj |
| Diseño sonoro | Sonic Pi | Texturas sonoras generativas (live coding) |
| Samples | MAAC + grabación de campo | Instrumentos precolombinos + voces |
| Captura | CCapture.js | Grabación frame-by-frame a WebM |
| Post-producción | Python + OpenCV + FFmpeg | Ensamblaje, conversión, optimización |
| Procesamiento de imagen | Python + Pillow + rembg | Remoción de fondos, conversión de formatos |
| Distribución | HTML estático autocontenido | Cada escena es un archivo ejecutable independiente |

---

## VI. Patrimonio y Fuentes

### Acervos Consultados

Las piezas arqueológicas que componen el archivo visual del proyecto provienen de:

- **Museo Antropológico y Arte Contemporáneo (MAAC)** (Guayaquil, Ecuador)
- **Catálogo Digital de Bienes Culturales del Ecuador**
- **Reservas arqueológicas del litoral ecuatoriano**

Cada imagen está identificada con su **código de registro patrimonial** (formato GA-XX-XXXX-XX), que permite su trazabilidad completa hasta la pieza original.

### Inventario de Piezas

| Cultura | Figuras femeninas | Vasijas funerarias | Modelos 3D | Total |
|---|---|---|---|---|
| Valdivia | 9 | — | 2 (venus.obj, venus2.obj) | 11 |
| Machalilla | 7 | — | — | 7 |
| Chorrera | 6 | — | — | 6 |
| Bahía | 5 | — | — | 5 |
| Tolita | 2 | 3 | 4 (tolita.obj, tolita2.obj, tolita3.obj, mascara.obj) | 9 |
| Guangala | 4 | — | — | 4 |
| Jama-Coaque | 10 | 1 | — | 11 |
| Milagro-Quevedo | 1 | 9 | — | 10 |
| Manteño | 5 | 7 | — | 12 |
| **Total** | **49** | **20** | **6** | **75** |

---

## VII. Requerimientos Técnicos

### Exhibición

- **Proyección**: Proyector Full HD (1920×1080) o pantalla LED. Brillo mínimo: 3000 lúmenes.
- **Computador**: Cualquier equipo con navegador moderno (Chrome/Firefox) y soporte WebGL.
- **Audio**: Texturas sonoras generativas en Sonic Pi. Requiere sistema PA o monitores de estudio.
- **Espacio**: Sala oscurecida. Las escenas requieren fondo negro absoluto para lectura correcta.
- **Conexión a internet**: Solo para la carga inicial de librerías CDN (p5.js, CCapture.js). Puede funcionar offline si las librerías se alojan localmente. 

### Formatos de Salida

| Formato | Uso | Características |
|---|---|---|
| HTML (en vivo) | Exhibición en tiempo real | Generativo, irrepetible, interactivo |
| WebM (captura) | Proyección pregrabada | 30 fps, duración definida, determinista |
| MP4 (post-producción) | Distribución, archivo | Convertido desde WebM vía FFmpeg |

### Modalidades de Presentación

1. **Instalación en sala**: Las 5 escenas proyectadas simultáneamente en múltiples pantallas o superficies, creando un ambiente inmersivo.
2. **Pieza lineal**: Las escenas concatenadas como una pieza audiovisual de ~16 minutos para proyección frontal.
3. **Escenografía en vivo**: Las escenas ejecutándose en tiempo real como fondo visual para una presentación escénica (danza, performance, conferencia).
4. **Distribución digital**: Cada HTML es un archivo autocontenido que puede ejecutarse en cualquier navegador, sin instalación.

---

## VIII. Cronología del Proyecto

| Fase | Período | Actividades |
|---|---|---|
| Investigación | 2024 – Ene 2025 | Documentación de acervos, fotografía de piezas, estudio iconográfico |
| Desarrollo v1 | Feb – Abr 2025 | Prototipado de escenas, desarrollo de motores visuales en p5.js |
| Producción | May – Jul 2025 | Refinamiento de escenas, captura de video, post-producción |
| Versión Demo | Abr 2025 | `GP-DEMO2025/` — 5 agentes adaptados a formato 9:16 (1080×1920), 250 frames a 25 fps |
| Exhibición | abril 2025 | Museo de Manta|

---

## IX. Sobre el Autor

**Jean Carlos Correa** · @jeanmadara

Artista visual y programador creativo ecuatoriano. Su trabajo explora la intersección entre el patrimonio cultural precolombino, el código generativo y las artes escénicas. Utiliza la programación como herramienta de traducción poética, convirtiendo artefactos arqueológicos en organismos digitales con comportamiento autónomo.

---

## X. Contacto

| | |
|---|---|
| **Artista** | Jean Carlos Correa |
| **Instagram** | @jeanmadara |

---

## XI. Licencia y Créditos

- **Código fuente**: Desarrollado por Jean Carlos Correa.
- **Algoritmo de retrato generativo** (Escena 3a): Basado en el código de [Vamoss](https://github.com/vamoss) / [OpenProcessing #624879](https://www.openprocessing.org/sketch/624879), adaptado para el proyecto.
- **Librerías**: [p5.js](https://p5js.org/) (Lauren McCarthy / Processing Foundation), [CCapture.js](https://github.com/spite/ccapture.js) (Jaume Sanchez Elias).
- **Piezas arqueológicas**: Registro fotográfico del Museo Precolombino Casa del Alabado y del Archivo del Patrimonio Cultural del Ecuador. Uso con fines artísticos y educativos.

---

<p align="center">

*Geometrías Precolombinas — 2026*  
*El barro es código. La espiral es algoritmo. El silencio arqueológico es un latido que espera ser ejecutado.*

</p>
