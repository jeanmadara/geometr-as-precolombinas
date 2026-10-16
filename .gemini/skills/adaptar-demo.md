# Skill: Adaptar Escena para GP-DEMO2025

## Descripción
Adapta una escena existente al formato demo: HTML autocontenido en formato vertical 9:16, 250 frames a 25 fps (~10 segundos).

## Cuándo usar
- Para crear versiones demo cortas de escenas existentes
- Para presentaciones rápidas o redes sociales (formato vertical)

## Parámetros DEMO
```javascript
const WIDTH = 1080;
const HEIGHT = 1920;
const FPS = 25;
const TOTAL_FRAMES = 250;
```

## Cambios clave respecto al original
| Aspecto | Original | DEMO |
|---|---|---|
| Resolución | 1280×720 (16:9) | 1080×1920 (9:16) |
| FPS | 30 | 25 |
| Duración | 5400 frames (3 min) | 250 frames (10 seg) |
| Archivos | Multi-archivo | HTML único |

## Adaptaciones necesarias
1. **Reescalar velocidades** de animación proporcionalmente al total de frames
2. **Ajustar escala** para formato vertical (e.g., `scale(-10.0)` vs `scale(-2.5)`)
3. **Rutas relativas** al directorio original: `'../scene1 3D/assets/modelo.obj'`
4. **Nomenclatura**: `agente{N}-{nombre}.html` en `GP-DEMO2025/`
5. **Eliminar** `windowResized()` — resolución fija para captura

## Verificación
- [ ] Resolución 1080×1920, 25fps, 250 frames
- [ ] Animaciones visualmente coherentes en 10 segundos
- [ ] Assets cargan desde rutas relativas correctas
- [ ] WebM se genera y descarga correctamente
