import sharp from 'sharp';
import fs from 'fs';

async function processLogo() {
  const inputPath = './public/logo-raw.jpg';
  const outputPath = './public/logo.png';
  const iconPath = './public/logo-icon.png';

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixelCount = info.width * info.height;
  const channels = info.channels; // 4 (RGBA)

  // Process raw RGBA pixels to make dark background transparent
  for (let i = 0; i < pixelCount; i++) {
    const idx = i * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];

    const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

    // Dark background threshold for deep blacks/darks surrounding the eagle logo
    if (r < 32 && g < 28 && b < 22) {
      data[idx + 3] = 0; // Alpha 0 (transparent)
    } else if (brightness < 38 && (r < 45 && g < 40 && b < 35)) {
      const alpha = Math.max(0, Math.min(255, (brightness - 12) * 10));
      data[idx + 3] = Math.round(alpha);
    }
  }

  // Save transparent PNG
  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
  .png()
  .toFile(outputPath);

  // Also create a cropped high-res square icon PNG for header & favicon
  await sharp(outputPath)
    .trim({ threshold: 10 })
    .resize(200, 200, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(iconPath);

  console.log('Successfully created logo.png and logo-icon.png!');
}

processLogo().catch(err => console.error(err));
