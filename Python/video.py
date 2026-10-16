import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont
import subprocess
import imageio_ffmpeg
import os
from tqdm import tqdm

# --- CONFIGURACIÓN DE PERFORMANCE ---
image_paths = [
    # 1. FORMATIVO
    "Img/Formativo/Valdivia/1 _MG_8305.png", "Img/Formativo/Valdivia/GA-17-2558-83.png", "Img/Formativo/Valdivia/GA-2-2373-82.png", "Img/Formativo/Valdivia/GA-2-793-78.png", "Img/Formativo/Valdivia/GA-3-1101-79.png", "Img/Formativo/Valdivia/IMG_1629.png", "Img/Formativo/Valdivia/_MG_8272.png", "Img/Formativo/Valdivia/_MG_8493.png", "Img/Formativo/Valdivia/_MG_8510.png",
    "Img/Formativo/Machalilla/0G7A9999.png", "Img/Formativo/Machalilla/GA-1-2400-82.png", "Img/Formativo/Machalilla/GA-1-2520-83.png", "Img/Formativo/Machalilla/GA-1-2668-84.png", "Img/Formativo/Machalilla/GA-1-851-78.png", "Img/Formativo/Machalilla/GA-179-969-78 J.png", "Img/Formativo/Machalilla/GA-576-200-76.png",
    "Img/Formativo/Chorrera/GA-1-1978-81 Chorrera.png", "Img/Formativo/Chorrera/GA-3-2511-83.png", "Img/Formativo/Chorrera/GA-5-2326-82.png", "Img/Formativo/Chorrera/IMG_20250716_163931_072.png", "Img/Formativo/Chorrera/IMG_20250723_122937_937.png", "Img/Formativo/Chorrera/_DSC8673.png",

    # 2. DESARROLLO REGIONAL
    "Img/DesarrolloRegional/Bahia/IMG_20250718_120421_308.png", "Img/DesarrolloRegional/Bahia/IMG_7757.png", "Img/DesarrolloRegional/Bahia/IMG_8373.png", "Img/DesarrolloRegional/Bahia/_JPC3117.png", "Img/DesarrolloRegional/Bahia/_MG_9493.png",
    "Img/DesarrolloRegional/Tolita/GA-2-990-78.png", "Img/DesarrolloRegional/Tolita/_DSC8642.png",
    "Img/DesarrolloRegional/guangala/1M5-04424-86.png", "Img/DesarrolloRegional/guangala/GA-2-1076-78.png", "Img/DesarrolloRegional/guangala/GA-2-2164-82.png", "Img/DesarrolloRegional/guangala/GA-3-467-77.png",
    "Img/DesarrolloRegional/Jama/GA-1-1596-80.png", "Img/DesarrolloRegional/Jama/GA-1-2198-82.png", "Img/DesarrolloRegional/Jama/GA-1-3123-96 jama.png", "Img/DesarrolloRegional/Jama/GA-3-1105-79.png", "Img/DesarrolloRegional/Jama/GA-4-1046-78 jama.png", "Img/DesarrolloRegional/Jama/GA-79-2150-82.png", "Img/DesarrolloRegional/Jama/IMG_20250718_114626_265.png", "Img/DesarrolloRegional/Jama/IMG_8357.png", "Img/DesarrolloRegional/Jama/_MG_9504.png", "Img/DesarrolloRegional/Jama/_MG_9511.png",

    # 3. INTEGRACIÓN
    "Img/Integracion/Milagro/GA-61-971-78.png",
    "Img/Integracion/Manteño/GA-1-1949-81.png", "Img/Integracion/Manteño/GA-1-2017-81.png", "Img/Integracion/Manteño/GA-1281-3122-95.png", "Img/Integracion/Manteño/GA-3-1779-81.png", "Img/Integracion/Manteño/IMG_20250723_103455_672.png"
]

# --- PARÁMETROS TÉCNICOS ---
WIDTH, HEIGHT = 1080, 1920
FPS = 30
SLIDE_DURATION = 4 
FADE_DURATION = 1 
OUTPUT_FILE = "geometrias_archive_vertical.mp4"

print("Pre-cargando recursos en memoria...")
loaded_images = []
hud_templates = []

try:
    font_title = ImageFont.truetype("C:/Windows/Fonts/cour.ttf", 42)
    font_data = ImageFont.truetype("C:/Windows/Fonts/cour.ttf", 24)
except:
    font_title = ImageFont.load_default()
    font_data = ImageFont.load_default()

def imread_unicode(path):
    try:
        with open(path, "rb") as f:
            arr = np.frombuffer(f.read(), np.uint8)
            return cv2.imdecode(arr, cv2.IMREAD_UNCHANGED)
    except:
        return None

for i, path in enumerate(tqdm(image_paths, desc="Cargando Imágenes")):
    img = imread_unicode(path)
    if img is None:
        print(f"\n[!] Error cargando: {path}")
        img = np.zeros((100, 100, 3), dtype=np.uint8)
    elif img.shape[2] == 4:
        alpha = img[:, :, 3:4] / 255.0
        img = (img[:, :, :3] * alpha).astype(np.uint8)
    elif len(img.shape) == 2:
        img = cv2.cvtColor(img, cv2.COLOR_GRAY2BGR)
    elif img.shape[2] == 3:
        pass # OK
    
    loaded_images.append(img)
    
    ui = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    draw = ImageDraw.Draw(ui)
    x, y = 60, 100
    color = (255, 255, 255, 120)
    draw.text((x, y), "GEOMETRÍAS PRECOLOMBINAS", font=font_title, fill=color)
    draw.text((x, y + 70), f"SOURCE: {path}", font=font_data, fill=color)
    draw.text((x, y + 110), f"SUBJECT REFERENCE: {i+1:03d}", font=font_data, fill=color)
    draw.text((x, y + 150), "COORD: 1° 13' S / 80° 44' W", font=font_data, fill=color)
    hud_templates.append(np.array(ui))

def get_optimized_frame(idx, progress, frame_abs):
    img = loaded_images[idx]
    zoom = 0.85 + (progress * 0.30)
    tw = int(WIDTH * zoom * 0.9)
    aspect = img.shape[0] / img.shape[1]
    th = int(tw * aspect)
    
    if tw <= 0 or th <= 0:
        return np.zeros((HEIGHT, WIDTH, 3), dtype=np.uint8)
        
    img_r = cv2.resize(img, (tw, th), interpolation=cv2.INTER_LINEAR)
    
    canvas = np.zeros((HEIGHT, WIDTH, 3), dtype=np.uint8)
    
    # Pegado seguro centrado
    px = (WIDTH - tw) // 2
    py = (HEIGHT - th) // 2
    
    # Calcular coordenadas de intersección
    x1, y1 = max(0, px), max(0, py)
    x2, y2 = min(WIDTH, px + tw), min(HEIGHT, py + th)
    
    # Calcular coordenadas de origen
    sx1, sy1 = max(0, -px), max(0, -py)
    sx2, sy2 = sx1 + (x2 - x1), sy1 + (y2 - y1)
    
    # Pegar solo el área válida
    if x2 > x1 and y2 > y1:
        canvas[y1:y2, x1:x2] = img_r[sy1:sy2, sx1:sx2]
    
    return canvas

def generate_video():
    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    cmd = [
        ffmpeg_exe, "-y", "-f", "rawvideo", "-vcodec", "rawvideo",
        "-s", f"{WIDTH}x{HEIGHT}", "-pix_fmt", "bgr24", "-r", str(FPS),
        "-i", "-", "-c:v", "libx264", "-pix_fmt", "yuv420p",
        "-preset", "ultrafast", "-crf", "23", OUTPUT_FILE
    ]

    total_slides = len(image_paths)
    f_p_s = FPS * SLIDE_DURATION
    f_fade = FPS * FADE_DURATION
    step = f_p_s - f_fade
    total_f = (total_slides * f_p_s) - ((total_slides - 1) * f_fade)

    process = subprocess.Popen(cmd, stdin=subprocess.PIPE, stderr=subprocess.DEVNULL)

    try:
        for f in tqdm(range(total_f), desc="Renderizando"):
            idx = min(f // step, total_slides - 1)
            start_f = idx * step
            prog = (f - start_f) / f_p_s
            
            frame = get_optimized_frame(idx, prog, f)
            
            if f < start_f + f_fade and idx > 0:
                p_idx = idx - 1
                p_prog = (f - (p_idx * step)) / f_p_s
                frame_p = get_optimized_frame(p_idx, p_prog, f)
                alpha = (f - start_f) / f_fade
                frame = cv2.addWeighted(frame, alpha, frame_p, 1 - alpha, 0)
            
            hud = hud_templates[idx]
            h_rgb = hud[:, :, :3]
            h_alpha = hud[:, :, 3:4] / 255.0
            frame = (frame * (1 - h_alpha) + h_rgb * h_alpha).astype(np.uint8)
            
            cv2.putText(frame, f"FRAME: [ {f} ]", (60, 290), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 255), 1, cv2.LINE_AA)

            process.stdin.write(frame.tobytes())
            
    finally:
        process.stdin.close()
        process.wait()
        print(f"\nVIDEO GENERADO: {OUTPUT_FILE}")

if __name__ == "__main__":
    generate_video()
