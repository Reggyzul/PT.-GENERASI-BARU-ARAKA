import sharp from 'sharp';

async function processNewLogo() {
  const inputPath = './public/logo-raw.jpg';
  
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixelCount = info.width * info.height;
  const channels = info.channels;

  // Make near-white / checkered background transparent
  for (let i = 0; i < pixelCount; i++) {
    const idx = i * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];

    // Check if pixel is near white / light grey (checkered pattern around eagle)
    if (r > 220 && g > 220 && b > 220) {
      data[idx + 3] = 0; // transparent
    } else if (r > 190 && g > 190 && b > 190 && Math.abs(r - g) < 20 && Math.abs(g - b) < 20) {
      // Light grey checkering
      data[idx + 3] = 0;
    }
  }

  // Save logo.png
  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
  .png()
  .toFile('./public/logo.png');

  // Also create cropped logo-icon.png
  await sharp('./public/logo.png')
    .trim({ threshold: 10 })
    .resize(200, 200, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('./public/logo-icon.png');

  console.log('Successfully updated logo.png and logo-icon.png');
}

processNewLogo().catch(console.error);
