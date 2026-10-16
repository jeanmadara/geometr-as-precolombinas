from pathlib import Path
from rembg import remove, new_session

INPUT_DIR  = Path("Img/new")
OUTPUT_DIR = Path("Img")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

session = new_session("u2net")
extensions = {".webp", ".jpg", ".jpeg", ".png"}
files = sorted([f for f in INPUT_DIR.iterdir() if f.suffix.lower() in extensions])
total = len(files)
print(f"{total} imagenes encontradas\n")

for i, p in enumerate(files, 1):
    out = OUTPUT_DIR / (p.stem + ".png")
    print(f"[{i:02d}/{total}] {p.name} -> {out.name} ...", end=" ", flush=True)
    out.write_bytes(remove(p.read_bytes(), session=session))
    print(f"OK ({out.stat().st_size // 1024} KB)")

print(f"\nListo! PNGs en: {OUTPUT_DIR.resolve()}")
