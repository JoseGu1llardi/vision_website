// Generates web-optimized copies of the original photos.
//
// The site uses `output: "export"` with `images.unoptimized`, so Next.js does not
// resize anything at build time — whatever sits in /public is what the browser
// downloads. This script produces right-sized WebP files ahead of time.
//
// Originals live in /images-src (not deployed). Outputs go to /public/images.
// Every photo in /images-src/gallery and /images-src/hero is processed — to add
// one, drop it there, run the script and reference it in app/data/.
// Use a new file name when changing a photo, so browsers don't keep the cached one.
// Usage: npm run optimize-images

import { mkdir, readdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCE_DIR = "images-src";
const OUTPUT_DIR = "public/images";
const QUALITY = 78;
const PHOTO_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".heic",
]);

// Grid thumbnail: tiles are square crops ~370 CSS px wide, so the photo's
// SHORT side needs ~740px to stay sharp on 2x screens, whatever its orientation
const THUMB = {
  suffix: "thumb",
  resize: { width: 800, height: 800, fit: "outside" },
};

// Modal / full view: limit the LONG side, so portrait photos aren't
// 3000px tall when the modal only ever shows them at screen height
const FULL = {
  suffix: "full",
  resize: { width: 2000, height: 2000, fit: "inside" },
};

const listPhotos = async (folder) =>
  (await readdir(path.join(SOURCE_DIR, folder)))
    .filter((file) => PHOTO_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort();

const JOBS = [
  ...(await listPhotos("gallery")).map((file) => {
    const name = path.parse(file).name;
    return {
      source: `gallery/${file}`,
      outputs: [THUMB, FULL].map(({ suffix, resize }) => ({
        name: `gallery/${name}-${suffix}.webp`,
        resize,
      })),
    };
  }),
  // Single size: on portrait phones the full-height crop scales the photo
  // wider than the screen, so phones need the largest version too
  ...(await listPhotos("hero")).map((file) => ({
    source: `hero/${file}`,
    outputs: [
      { name: `hero/${path.parse(file).name}.webp`, resize: { width: 1920 } },
    ],
  })),
];

// Start from clean output folders so removed or renamed photos don't linger
for (const folder of ["gallery", "hero"]) {
  await rm(path.join(OUTPUT_DIR, folder), { recursive: true, force: true });
}

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

for (const job of JOBS) {
  const input = path.join(SOURCE_DIR, job.source);
  const { size: inputSize } = await stat(input);

  for (const output of job.outputs) {
    const outPath = path.join(OUTPUT_DIR, output.name);
    await mkdir(path.dirname(outPath), { recursive: true });

    const info = await sharp(input)
      .rotate() // apply EXIF orientation from the camera before stripping metadata
      .resize({ ...output.resize, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outPath);

    console.log(
      `${job.source} (${kb(inputSize)}) -> ${output.name} ${info.width}x${info.height} (${kb(info.size)})`,
    );
  }
}
