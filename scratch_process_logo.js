import sharp from 'sharp';

const inputPath = `C:\\Users\\UsEr\\.gemini\\antigravity-ide\\brain\\01aeac0b-df96-438b-ade1-04d6f9198c07\\media__1785658652114.jpg`;
const outputPath = `c:\\Users\\UsEr\\OneDrive\\Documents\\Website\\Dhatia Travel\\public\\logo-dhatia.png`;

async function processLogo() {
  const image = sharp(inputPath);
  const { width, height } = await image.metadata();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

  const channels = info.channels;
  const newBuffer = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = data[i * channels];
    const g = data[i * channels + 1];
    const b = data[i * channels + 2];

    newBuffer[i * 4] = r;
    newBuffer[i * 4 + 1] = g;
    newBuffer[i * 4 + 2] = b;

    // Remove white and near-white background (with subtle anti-aliasing tolerance)
    if (r > 220 && g > 220 && b > 220) {
      newBuffer[i * 4 + 3] = 0; // Transparent
    } else {
      newBuffer[i * 4 + 3] = 255;
    }
  }

  await sharp(newBuffer, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
  .png()
  .toFile(outputPath);

  console.log('Logo processed & saved to:', outputPath);
}

processLogo().catch(console.error);
