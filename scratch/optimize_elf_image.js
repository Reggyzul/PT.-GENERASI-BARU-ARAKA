import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const inputPath = path.resolve('public/elf_giga_front.png');
const outputPath = path.resolve('public/elf_giga_front_optimized.png');

async function processImage() {
  try {
    console.log('Processing Elf Giga image...');
    
    // Trim empty transparent space and sharpen/enhance image
    const metadata = await sharp(inputPath).metadata();
    console.log('Original dimensions:', metadata.width, 'x', metadata.height);

    await sharp(inputPath)
      .trim({ threshold: 5 }) // Trim transparent background precisely
      .sharpen({ sigma: 1.2, m1: 1.0, m2: 2.0 }) // High clarity sharpness
      .toFile(outputPath);

    const newMetadata = await sharp(outputPath).metadata();
    console.log('Optimized dimensions:', newMetadata.width, 'x', newMetadata.height);

    // Replace original file
    fs.renameSync(outputPath, inputPath);
    console.log('Successfully optimized and trimmed public/elf_giga_front.png!');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

processImage();
