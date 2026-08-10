const fs = require('fs');
const path = require('path');

const imgPath = path.join(__dirname, 'public', 'wp-content', 'uploads', '2023', '05', 'vizagivf.png');
const imgBase64 = fs.readFileSync(imgPath, 'base64');

// The original image is wide. We want to show the full image, but scaled to fit inside a square.
// Alternatively, we can clip the left part (the logo mark). Let's just scale it to fit for safety so no text is cut off.
// A square SVG:
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#ffffff" />
  <image href="data:image/png;base64,${imgBase64}" width="512" height="512" preserveAspectRatio="xMidYMid meet" />
</svg>`;

fs.writeFileSync(path.join(__dirname, 'public', 'favicon.svg'), svg);
console.log('Favicon updated!');
