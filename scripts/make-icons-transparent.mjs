import sharp from 'sharp';
import path from 'path';
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = path.join(__dirname, '..', 'icons', 'assets');

const DEFAULT_THRESHOLD = 35;
const CHAOS_THRESHOLD = 28;
const FEATHER = 15;

function rgbDistance(r1, g1, b1, r2, g2, b2) {
  const dr = r1 - r2;
  const dg = g1 - g2;
  const db = b1 - b2;
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

function sampleBackground(data, width, height, channels) {
  const corners = [
    [0, 0],
    [width - 1, 0],
    [0, height - 1],
    [width - 1, height - 1],
  ];

  let r = 0;
  let g = 0;
  let b = 0;

  for (const [x, y] of corners) {
    const i = (y * width + x) * channels;
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
  }

  return { r: r / 4, g: g / 4, b: b / 4 };
}

async function loadIcon(filePath) {
  const input = readFileSync(filePath);
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  return { filePath, data: Buffer.from(data), info };
}

function processPixels({ data, info, threshold }) {
  const { width, height, channels } = info;
  const bg = sampleBackground(data, width, height, channels);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const dist = rgbDistance(data[i], data[i + 1], data[i + 2], bg.r, bg.g, bg.b);

      if (dist < threshold) {
        data[i + 3] = 0;
      } else if (dist < threshold + FEATHER) {
        const alpha = Math.round((255 * (dist - threshold)) / FEATHER);
        data[i + 3] = Math.min(data[i + 3], alpha);
      }
    }
  }

  return bg;
}

async function saveIcon({ filePath, data, info }) {
  const output = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: info.channels },
  })
    .png()
    .toBuffer();

  writeFileSync(filePath, output);
}

async function main() {
  const files = readdirSync(ASSETS_DIR).filter((f) => f.endsWith('.png'));
  const loaded = await Promise.all(
    files.map((f) => loadIcon(path.join(ASSETS_DIR, f))),
  );

  for (const icon of loaded) {
    const name = path.basename(icon.filePath, '.png');
    const threshold = name === 'chaos' ? CHAOS_THRESHOLD : DEFAULT_THRESHOLD;
    const bg = processPixels({ ...icon, threshold });
    console.log(
      `Processed ${name}.png (bg: rgb(${Math.round(bg.r)}, ${Math.round(bg.g)}, ${Math.round(bg.b)}), threshold: ${threshold})`,
    );
  }

  for (const icon of loaded) {
    await saveIcon(icon);
  }

  console.log(`\nDone. Processed ${files.length} icons.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
