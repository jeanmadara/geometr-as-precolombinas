# Skill: Documentación del Proyecto

## Descripción
Genera y mantiene la documentación del proyecto Geometrías Precolombinas: dossier artístico, guía de agentes, fichas técnicas y textos curatoriales.

## Cuándo usar
- Al crear o modificar una escena (actualizar `agents.md`)
- Al preparar materiales para convocatorias, festivales o exposiciones (actualizar `Dossier.md`)
- Al incorporar nuevas piezas arqueológicas al archivo
- Al documentar decisiones técnicas o conceptuales

## Archivos de documentación

| Archivo | Propósito | Audiencia |
|---|---|---|
| `Dossier.md` | Dossier artístico completo del proyecto | Curadores, festivales, jurados, instituciones |
| `agents.md` | Guía técnica de agentes visuales (escenas) | Desarrollador, colaboradores técnicos |
| `README.md` | Introducción rápida al repositorio | Cualquier visitante del repo |

## 1. Actualizar `agents.md` (al crear/modificar escenas)

### Formato de ficha por agente
```markdown
### 🔹 Agente N — `sceneN Nombre` · Título de la Escena

| Campo | Valor |
|---|---|
| **Archivos** | `index.html`, `sketch.js` |
| **Tecnología** | p5.js, CCapture.js |
| **Fuentes** | Descripción de los assets |
| **Resolución** | ANCHO × ALTO | (adaptativa) |
| **FPS / Duración** | 30 fps / TOTAL frames (X min) |

**Comportamiento:**
- Descripción del comportamiento principal
- Detalle de animaciones y efectos
- Paleta de colores y estética
```

### Datos obligatorios por agente
- [ ] Archivos que componen la escena
- [ ] Tecnología usada (p5.js modo, CCapture, etc.)
- [ ] Referencia arqueológica (código GA-XX-XXXX-XX si aplica)
- [ ] Resolución y FPS
- [ ] Descripción del comportamiento algorítmico
- [ ] Culturas precolombinas representadas

## 2. Actualizar `Dossier.md` (para presentaciones)

### Secciones del dossier
1. **Ficha Técnica** — Título, autor, disciplina, formato, duración
2. **Sinopsis** — Descripción general (1 párrafo)
3. **Declaración Artística** — Posicionamiento conceptual (3 ejes)
4. **Marco Conceptual** — El código como ofrenda, las 9 culturas, latido geométrico
5. **Las Escenas** — Descripción expandida de cada escena con ficha
6. **Metodología** — Pipeline del museo al código
7. **Patrimonio y Fuentes** — Inventario de piezas por cultura
8. **Requerimientos Técnicos** — Exhibición, formatos, modalidades
9. **Cronología** — Fases del proyecto
10. **Sobre el Autor** — Bio
11. **Licencia y Créditos** — Atribuciones

### Tono y estilo
- **Idioma**: Español
- **Registro**: Curatorial-académico, poético pero preciso
- **Voz**: Primera persona del plural o impersonal
- **Evitar**: Jerga técnica excesiva en secciones conceptuales
- **Incluir siempre**: Datos verificables (códigos GA, conteos de piezas, duraciones exactas)

### Al añadir una nueva escena al dossier
```markdown
### Escena N · *Título Poético*
**Subtítulo Descriptivo**

[Párrafo narrativo de 3-5 líneas describiendo la escena desde lo conceptual]

| | |
|---|---|
| **Referencia arqueológica** | GA-XX-XXXX-XX · Descripción · Cultura |
| **Duración** | XXXX frames · X minutos |
| **Resolución** | ANCHO × ALTO |
| **Estética** | Palabras clave separadas por · |
```

## 3. Vocabulario del proyecto

### Términos técnicos propios
| Término | Significado |
|---|---|
| **Agente visual** | Escena autónoma con comportamiento propio |
| **Latido geométrico** | Efecto de respiración sinusoidal en wireframes |
| **Archivo expandido** | Documentación patrimonial como geometría activa |
| **Motor de tiempo por cuadros** | Sincronización temporal basada en frameCount |
| **Persistencia visual** | Trail de movimiento por fondo con alpha bajo |
| **Ken Burns** | Zoom progresivo durante un slide |
| **Crossfade** | Transición suave entre imágenes superpuestas |

### Períodos arqueológicos
| Período | Cronología | Uso en el proyecto |
|---|---|---|
| **Formativo** | 3500 – 500 a.C. | Valdivia, Machalilla, Chorrera |
| **Desarrollo Regional** | 500 a.C. – 500 d.C. | Bahía, Tolita, Guangala, Jama-Coaque |
| **Integración** | 500 – 1530 d.C. | Manteño, Milagro-Quevedo |

## 4. Actualizar el inventario de piezas

Cuando se añadan nuevas imágenes, actualizar la tabla en `Dossier.md` sección VII:
```markdown
| Cultura | Figuras femeninas | Vasijas funerarias | Modelos 3D | Total |
|---|---|---|---|---|
| NuevaCultura | X | Y | Z | X+Y+Z |
```

## Verificación
- [ ] `agents.md` refleja todas las escenas existentes
- [ ] `Dossier.md` tiene conteos actualizados de piezas
- [ ] Cada escena tiene ficha técnica completa en ambos documentos
- [ ] Los códigos GA-XX-XXXX-XX son verificables
- [ ] El tono es consistente entre secciones
