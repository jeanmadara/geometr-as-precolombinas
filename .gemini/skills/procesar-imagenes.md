# Skill: Procesar Imágenes para el Archivo

## Descripción
Pipeline de procesamiento de imágenes para preparar fotografías de piezas arqueológicas. Incluye remoción de fondos, conversión de formatos y organización por cultura.

## Cuándo usar
- Cuando se incorporen nuevas fotografías de piezas al proyecto
- Cuando se necesite preparar imágenes para las escenas de slideshow
- Cuando se reciban archivos en formatos distintos a PNG

## Instrucciones

### 1. Remoción de fondos
**Script**: `Python/remove_bg.py`

```python
from pathlib import Path
from rembg import remove, new_session

INPUT_DIR  = Path("Img/new")       # Directorio de entrada
OUTPUT_DIR = Path("Img")            # Directorio de salida
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

session = new_session("u2net")      # Modelo de segmentación
extensions = {".webp", ".jpg", ".jpeg", ".png"}
files = sorted([f for f in INPUT_DIR.iterdir() if f.suffix.lower() in extensions])

for i, p in enumerate(files, 1):
    out = OUTPUT_DIR / (p.stem + ".png")
    out.write_bytes(remove(p.read_bytes(), session=session))
```

**Ejecución:**
```bash
cd "GP/scene2 Mujeres"    # O la escena correspondiente
python ../Python/remove_bg.py
```

**Requisitos:**
```bash
pip install rembg onnxruntime pillow
```

### 2. Conversión de formatos
Para convertir imágenes de otros formatos a PNG, usar Pillow directamente o adaptar el flujo de `remove_bg.py`. Las escenas del proyecto solo aceptan **PNG**.

### 3. Organización del archivo por cultura
Las imágenes deben seguir la estructura taxonómica del proyecto:

```
Img/
├── Formativo/
│   ├── Valdivia/
│   ├── Machalilla/
│   └── Chorrera/
├── DesarrolloRegional/
│   ├── Bahia/
│   ├── Tolita/
│   ├── guangala/
│   └── Jama/
└── Integracion/
    ├── Manteño/
    └── Milagro/
```

Para vasijas funerarias (`scene3-2`):
```
Img/
├── Jama-Coaque/
├── Manteño/
├── Milagro-Quevedo/
└── Tolita/
```

### 4. Nomenclatura de archivos
Los archivos deben conservar su **código de registro patrimonial** como nombre:
- Formato: `GA-XX-XXXX-XX.png` (e.g., `GA-7-876-78.png`)
- Si no tiene código GA, conservar el nombre original de la fotografía

### 5. Actualizar el array de rutas
Después de agregar imágenes, actualizar el array `imagePaths` en el HTML correspondiente:
```javascript
const imagePaths = [
  "Img/Cultura/nuevo-archivo.png",
  // ...
];
```

## Flujo completo
```
1. Colocar fotos en Img/new/
2. Ejecutar remove_bg.py
3. Mover PNGs a la carpeta de cultura correspondiente
4. Actualizar imagePaths[] en el HTML
5. Probar con Live Server
```

## Verificación
- [ ] Las imágenes PNG tienen fondo transparente
- [ ] Los nombres conservan el código patrimonial GA-XX-XXXX-XX
- [ ] Las imágenes están en el directorio de cultura correcto
- [ ] El array `imagePaths` refleja las nuevas rutas
- [ ] Las imágenes cargan sin errores CORS con Live Server
