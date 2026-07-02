import os

target_str = """Dt. Fatih Barakat | Diş Hekimi, Ankara"""

base_dir = "/Users/berat/Downloads/fatih_personal_page/tr"

for root, _, files in os.walk(base_dir):
    for file in files:
        if file.endswith(".html"):
            path = os.path.join(root, file)
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()
            
            import re
            new_content = re.sub(r"<title>.*?</title>", f"<title>{target_str}</title>", content)
            
            if new_content != content:
                with open(path, "w", encoding="utf-8") as f:
                    f.write(new_content)
