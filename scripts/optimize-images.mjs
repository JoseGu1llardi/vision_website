// Generates web-optimized copies of the original photos.
//
// The site uses `output: "export"` with `images.unoptimized`, so Next.js does not
// resize anything at build time — whatever sits in /public is what the browser
// downloads. This script produces right-sized WebP files ahead of time.
//
// Originals live in /images-src (not deployed). Outputs go to /public/images.
// Usage: npm run optimize-images

import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCE_DIR = "images-src";
const OUTPUT_DIR = "public/images";
const QUALITY = 78;

// source file -> list of { name, width } outputs
const JOBS = [
  ...["gd1", "gd2", "gd3", "gd4", "gd5", "gd6"].map((name) => ({
    source: `${name}.jpg`,
    outputs: [
      { name: `gallery/${name}-800.webp`, width: 800 }, // grid thumbnail
      { name: `gallery/${name}-2000.webp`, width: 2000 }, // modal / full view
    ],
  })),
  {
    source: "Contemporary landscape.avif",
    outputs: [
      { name: "hero/hero-828.webp", width: 828 }, // phones
      { name: "hero/hero-1920.webp", width: 1920 }, // tablets and desktops
    ],
  },
];

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

for (const job of JOBS) {
  const input = path.join(SOURCE_DIR, job.source);
  const { size: inputSize } = await stat(input);

  for (const output of job.outputs) {
    const outPath = path.join(OUTPUT_DIR, output.name);
    await mkdir(path.dirname(outPath), { recursive: true });

    const info = await sharp(input)
      .rotate() // apply EXIF orientation from the camera before stripping metadata
      .resize({ width: output.width, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outPath);

    console.log(
      `${job.source} (${kb(inputSize)}) -> ${output.name} ${info.width}x${info.height} (${kb(info.size)})`,
    );
  }
}
