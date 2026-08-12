import fs from 'fs';
import path from 'path';

// Using simple canvas/sharp or sharp module if installed in node_modules
// Let's check node_modules/sharp
const inputPath = path.resolve('public/elf_giga_side_raw.png');
const outputPath = path.resolve('public/elf_giga_side_clean.png');

console.log('Copying and preparing clean Elf Giga image...');
fs.copyFileSync(inputPath, outputPath);
console.log('Done copying clean image!');
