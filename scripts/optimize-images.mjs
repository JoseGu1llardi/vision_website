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
      // Grid thumbnail: square tiles crop the 3:2 photo, so a ~370px tile
      // needs ~560 CSS px of width — 1200px keeps it sharp on 2x screens
      { name: `gallery/${name}-1200.webp`, width: 1200 },
      { name: `gallery/${name}-2000.webp`, width: 2000 }, // modal / full view
    ],
  })),
  {
    source: "Contemporary landscape.avif",
    // Single size: on portrait phones the full-height crop scales the photo
    // wider than the screen, so phones need the largest version too
    outputs: [{ name: "hero/hero.webp", width: 1920 }],
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
