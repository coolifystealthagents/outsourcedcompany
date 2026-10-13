#!/usr/bin/env python3
"""Render the October 13 batch in OutsourcedCompany's boardroom visual system."""

import hashlib
import json
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
MANIFEST = Path(__file__).with_name("manifest.json")
BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
REGULAR = "/System/Library/Fonts/Supplemental/Arial.ttf"
PALETTES = [
    ("#101216", "#E23838", "#F7F7F4"), ("#16181D", "#EF5B45", "#FAFAF7"),
    ("#111827", "#F04444", "#F8FAFC"), ("#18181B", "#DC4C64", "#FAFAFA"),
    ("#101418", "#E6573E", "#F5F6F3"), ("#191B20", "#F26A4F", "#FBFAF7"),
    ("#12151B", "#D94747", "#F8F8F5"), ("#1A1719", "#E84E4E", "#FFF9F6"),
    ("#11161A", "#F05A44", "#FAFAF6"), ("#181A1F", "#D93C54", "#F9F9F7"),
    ("#121317", "#EE6250", "#FBFBF8"), ("#17191E", "#DB4747", "#F7F8F6"),
    ("#111720", "#F04B3E", "#F8FAFC"), ("#1B171A", "#E05858", "#FFF9F7"),
    ("#12161B", "#D94343", "#F7F8F7"), ("#18191C", "#F26952", "#FAFAF8"),
    ("#101419", "#E34B4B", "#F8F9F6"),
]


def font(size, regular=False):
    return ImageFont.truetype(REGULAR if regular else BOLD, size)


def wrap(draw, text, chosen_font, max_width):
    lines, current = [], ""
    for word in text.split():
        trial = f"{current} {word}".strip()
        if draw.textbbox((0, 0), trial, font=chosen_font)[2] <= max_width:
            current = trial
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def title_layout(draw, title):
    for size in range(59, 31, -2):
        chosen = font(size)
        lines = wrap(draw, title, chosen, 790)
        line_height = int(size * 1.18)
        if len(lines) * line_height <= 390:
            return chosen, lines, line_height
    raise ValueError(f"Title does not fit: {title}")


def diagram(draw, accent, ink, seed):
    positions = [(1080, 260), (1270, 360), (1050, 520), (1290, 660), (1110, 810)]
    for index in range(1, len(positions)):
        draw.line((*positions[index - 1], *positions[index]), fill=accent, width=7)
    for index, (x, y) in enumerate(positions):
        radius = 48 + seed[index] % 13
        draw.ellipse((x-radius, y-radius, x+radius, y+radius), fill=accent, outline=ink, width=4)
        draw.text((x, y), str(index + 1), anchor="mm", font=font(28), fill=ink)


def render(item, kind, index):
    background, accent, ink = PALETTES[index]
    image = Image.new("RGB", (1536, 1024), background)
    draw = ImageDraw.Draw(image)
    seed = hashlib.sha256(item["slug"].encode()).digest()
    draw.rectangle((80, 80, 1456, 944), outline=accent, width=5)
    draw.rectangle((80, 80, 104, 944), fill=accent)
    diagram(draw, accent, ink, seed)

    label = "OUTSOURCED COMPANY  /  BLOG" if kind == "blog" else "OUTSOURCED COMPANY  /  RESEARCH"
    draw.text((140, 145), label, font=font(27), fill=accent)
    chosen, lines, line_height = title_layout(draw, item["title"])
    y = 275
    for line in lines:
        draw.text((140, y), line, font=chosen, fill=ink)
        y += line_height
    draw.line((140, 830, 720, 830), fill=accent, width=6)
    draw.text((140, 858), "PHILIPPINES OPERATIONS • EVIDENCE • OWNERSHIP", font=font(22), fill=accent)

    output = ROOT / "public" / item["thumbnail"].lstrip("/")
    output.parent.mkdir(parents=True, exist_ok=True)
    image.save(output, "WEBP", quality=91, method=6)


def main():
    manifest = json.loads(MANIFEST.read_text())
    entries = [(item, "blog") for item in manifest["blog"]] + [(item, "research") for item in manifest["research"]]
    for index, (item, kind) in enumerate(entries):
        render(item, kind, index)
    print(f"Rendered {len(entries)} unique exact-title thumbnails without date text.")


if __name__ == "__main__":
    main()
