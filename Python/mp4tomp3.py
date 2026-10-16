from moviepy import VideoFileClip
import os

def convert_mp4_to_mp3(input_file, output_file):
    """
    Convierte un archivo MP4 a MP3 extrayendo el audio.
    """
    if not os.path.exists(input_file):
        print(f"Error: El archivo '{input_file}' no existe.")
        return

    try:
        print(f"Cargando video: {input_file}...")
        video = VideoFileClip(input_file)
        
        print(f"Extrayendo audio y guardando en: {output_file}...")
        video.audio.write_audiofile(output_file)
        
        video.close()
        print("¡Conversión exitosa!")
    except Exception as e:
        print(f"Ocurrió un error: {e}")

if __name__ == "__main__":
    # Nombres de archivos según tu solicitud
    archivo_entrada = "GP-full.mp4"
    archivo_salida = "GP-full.mp3"
    
    convert_mp4_to_mp3(archivo_entrada, archivo_salida)
