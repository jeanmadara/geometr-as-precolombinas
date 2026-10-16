import subprocess
import os
import imageio_ffmpeg

def convert_webm_to_mp4(input_file, output_file):
    """
    Convierte un archivo WebM a MP4 usando ffmpeg con alta calidad.
    """
    if not os.path.exists(input_file):
        print(f"[!] Error: El archivo '{input_file}' no existe en el directorio actual.")
        return

    print(f"[*] Iniciando conversión de '{input_file}' a '{output_file}'...")
    
    # Obtenemos la ruta del ejecutable de ffmpeg
    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()

    # Parámetros de conversión:
    # -c:v libx264: Usar el codec H.264 para máxima compatibilidad.
    # -preset slow: Mayor tiempo de procesamiento para mejor compresión.
    # -crf 18: Calidad visualmente sin pérdidas (rango 0-51, menor es mejor).
    # -pix_fmt yuv420p: Requerido para que el video se reproduzca en la mayoría de dispositivos.
    command = [
        ffmpeg_exe,
        "-i", input_file,
        "-c:v", "libx264",
        "-preset", "slow",
        "-crf", "18",
        "-pix_fmt", "yuv420p",
        "-y",  # Sobrescribir si el archivo de salida ya existe
        output_file
    ]

    try:
        # Ejecutar el comando
        subprocess.run(command, check=True)
        print(f"\n[+] ¡ÉXITO! Video exportado como: {output_file}")
    except subprocess.CalledProcessError as e:
        print(f"\n[!] Error durante la conversión: {e}")
    except Exception as e:
        print(f"\n[!] Ocurrió un error inesperado: {e}")

if __name__ == "__main__":
    # Nombre del archivo capturado por CCapture
    input_name = "mujeres.webm"
    output_name = "mujeres.mp4"
    
    convert_webm_to_mp4(input_name, output_name)
