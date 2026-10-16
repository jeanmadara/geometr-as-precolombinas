# GEOMETRÍAS PRECOLOMBINAS
## Rider Técnico de Montaje

---

## 1. Información General

| | |
|---|---|
| **Obra** | Geometrías Precolombinas — Laboratorio Escénico |
| **Artista** | Jean Carlos Correa · @jeanmadara |
| **Formato** | Instalación audiovisual generativa / Escenografía digital en vivo |
| **Duración** | Variable (16 min ciclo completo / continuo en loop / acto escénico) |
| **Contacto técnico** | @jeanmadara |

---

## 2. Modalidades de Montaje

### Modalidad A · Instalación Multi-pantalla
5 escenas proyectadas simultáneamente en pantallas o superficies independientes.

### Modalidad B · Pieza Lineal (Proyección Frontal)
Escenas concatenadas como pieza audiovisual de ~16 min. Una sola proyección.

### Modalidad C · Escenografía en Vivo
Escenas ejecutándose en tiempo real como fondo visual para performance (danza, conferencia, spoken word).

### Modalidad D · Digital / Streaming
Ejecución directa en navegador web. Sin equipamiento físico adicional.

---

## 3. Equipamiento Requerido

### 3.1 Proyección

| Componente | Especificación | Cantidad |
|---|---|---|
| Proyector | Full HD (1920×1080), ≥3000 lúmenes, entrada HDMI | 1 (Mod. B/C) · 5 (Mod. A) |
| Pantalla / Superficie | Blanca o gris neutra, mínimo 2m × 1.12m (16:9) | 1 o 5 según modalidad |
| Cable HDMI | ≥5m, versión 1.4+ | 1 por proyector |

**Alternativa**: Monitores/TV LED de ≥42" (Full HD) en lugar de proyectores.

### 3.2 Computación

| Componente | Especificación | Cantidad |
|---|---|---|
| Computador | Cualquier laptop/desktop con navegador moderno + WebGL | 1 (Mod. B/C) · hasta 5 (Mod. A) |
| Sistema operativo | Windows / macOS / Linux | — |
| Navegador | Google Chrome (recomendado) o Firefox | — |
| GPU | Dedicada para Escena 1 (WEBGL). Integrada suficiente para escenas 2D | — |
| RAM | ≥4 GB | — |

> **Nota**: Un solo computador potente puede ejecutar las 5 escenas en pestañas separadas (Mod. A), pero se recomienda un equipo por escena para rendimiento óptimo a 30 fps.

### 3.3 Audio

| Componente | Especificación | Cantidad |
|---|---|---|
| Sistema de audio | PA estéreo o monitores de estudio (≥2 canales) | 1 par |
| Computador para audio | Laptop con Sonic Pi instalado | 1 |
| Cable de audio | Minijack 3.5mm → XLR o RCA (según sistema PA) | 1 |

> La obra incluye **diseño sonoro propio**: texturas generativas en **Sonic Pi** (live coding) a partir de samples de instrumentos precolombinos del MAAC y voces de América Orrala, sus hijas y su nieta. El audio puede ejecutarse en vivo (Sonic Pi) o pregrabado (WAV/MP3).

### 3.4 Conexión

| Componente | Especificación | Notas |
|---|---|---|
| Internet | WiFi o Ethernet, ≥5 Mbps | Solo para carga inicial de librerías CDN (~200KB) |

> La obra puede funcionar **100% offline** si las librerías p5.js y CCapture.js se alojan localmente.

---

## 4. Condiciones de Sala

| Aspecto | Requisito |
|---|---|
| **Iluminación** | Sala oscurecida. Las escenas requieren fondo negro absoluto. |
| **Blackout** | Necesario. Cualquier luz ambiental degrada la experiencia. |
| **Superficie** | Paredes lisas o pantallas dedicadas. Evitar superficies texturadas. |
| **Temperatura** | Estándar (18-25°C). Los equipos generan calor mínimo. |
| **Acceso eléctrico** | 1 toma de corriente por proyector + 1 por computador |

---

## 5. Distribución Espacial

### Modalidad A · Instalación Multi-pantalla (ejemplo)

```
┌──────────────────────────────────────────────┐
│                                              │
│    [Esc.1]          [Esc.4]         [Esc.5]  │
│    Jaguar 3D       Cosmovisión      Mar      │
│                                              │
│         ╔══════════════════╗                  │
│         ║   ESPECTADOR     ║                  │
│         ╚══════════════════╝                  │
│                                              │
│    [Esc.2]                          [Esc.3b] │
│    Mujeres                          Vasijas  │
│                                              │
└──────────────────────────────────────────────┘
```

### Modalidad B/C · Proyección Frontal

```
┌──────────────────────────────────────────────┐
│                                              │
│         ┌────────────────────┐               │
│         │   PROYECCIÓN       │               │
│         │   (2m × 1.12m)     │               │
│         └────────────────────┘               │
│                                              │
│                                              │
│         ╔══════════════════╗                  │
│         ║   ESPECTADOR     ║                  │
│         ╚══════════════════╝                  │
│                                              │
│         [Laptop operador: fondo/lateral]      │
│                                              │
└──────────────────────────────────────────────┘
```

---

## 6. Tiempos de Montaje y Desmontaje

| Fase | Duración estimada | Actividades |
|---|---|---|
| **Montaje** | 2–3 horas | Instalación de proyectores, calibración, prueba de escenas |
| **Prueba técnica** | 1 hora | Verificación de resolución, FPS, color, blackout |
| **Desmontaje** | 1 hora | Desconexión y embalaje de equipos |

---

## 7. Operación Durante la Función

| Rol | Responsabilidad |
|---|---|
| **Operador técnico** | Abrir los HTML en el navegador, poner en pantalla completa (`F11`), verificar que las escenas corren a 30 fps |
| **Artista** | Puede operar directamente. No requiere técnico dedicado si es Mod. B/C |

### Comandos de operación
- **`F11`** — Pantalla completa del navegador
- **`F`** — Pantalla completa en escenas con soporte de tecla (Escenas 2, 3b)
- **`Ctrl+Shift+I`** — Consola de desarrollo (para verificar FPS y errores)
- Recargar página = reiniciar escena desde frame 0

---

## 8. Formatos Alternativos (Pregrabado)

Si no es posible la ejecución en vivo, la obra puede presentarse como video pregrabado:

| Formato | Resolución | FPS | Archivo |
|---|---|---|---|
| WebM | 1280×720 | 30 | Captura directa de CCapture.js |
| MP4 (H.264) | 1280×720 | 30 | Conversión vía FFmpeg |
| MP4 vertical | 1080×1920 | 25 | Versión demo (GP-DEMO2025) |

> El artista puede proveer archivos MP4 pregrabados si se solicitan con ≥7 días de anticipación.

---

## 9. Lo que el Artista Provee

- [x] Archivos HTML de las 5 escenas (en USB o descarga)
- [x] Videos pregrabados MP4 si se solicitan
- [x] Soporte técnico remoto para montaje
- [x] Textos curatoriales y ficha técnica para programa de mano

## 10. Lo que la Sala Provee

- [ ] Proyector(es) según modalidad
- [ ] Computador(es) con navegador moderno
- [ ] Cables HDMI
- [ ] Blackout de sala
- [ ] Acceso eléctrico
- [ ] Técnico de sala para montaje (si aplica)
- [ ] Sistema de audio PA o monitores (2 canales estéreo)
