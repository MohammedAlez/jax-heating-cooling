import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');
const files = fs.readdirSync(publicDir);
console.log("Files in public:", files);

for (const file of files) {
  if (file.includes('galllery')) {
    const oldPath = path.join(publicDir, file);
    const newPath = path.join(publicDir, 'gallery');
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed "${file}" to "gallery"`);
  }
}
