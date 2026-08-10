const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

const skipFiles = ['AboutUs.jsx', 'ContactUs.jsx', 'OurDoctors.jsx', 'Treatments.jsx', 'Home.jsx', 'Gallery.jsx', 'HelloWorld.jsx', 'Surgeries.jsx'];

const treatments = [];

files.forEach(file => {
    if (skipFiles.includes(file)) return;

    const content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');
    
    // Extract title (usually from the file name for now)
    const slug = file.replace('.jsx', '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
    const title = file.replace('.jsx', '').replace(/([A-Z])/g, ' $1').trim();
    
    // Find paragraphs. This is a very rough regex extraction just to get some content
    const pMatches = [...content.matchAll(/<p>(.*?)<\/p>/gi)];
    let paragraphs = [];
    if (pMatches) {
        paragraphs = pMatches.map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(p => p.length > 20 && !p.includes('Copyright') && !p.includes('Use this feature'));
    }

    // Try to find a hero image
    const imgMatches = [...content.matchAll(/<img[^>]+src=\\?"([^"\\]+)\\?"/gi)];
    let image = "/wp-content/uploads/2023/06/happy-couple-enjoying-vizagivf-scaled-e1689949830314-1024x683.jpg"; // default
    if (imgMatches && imgMatches.length > 0) {
        // filter out small icons, emojis, logos
        const validImgs = imgMatches.map(m => m[1]).filter(src => src.includes('uploads') && !src.includes('logo') && !src.includes('icon'));
        if (validImgs.length > 0) {
            image = validImgs[0];
        }
    }

    treatments.push({
        id: slug,
        title: title,
        image: image,
        content: paragraphs.slice(0, 3) // first 3 paragraphs
    });
});

const dataDir = path.join(__dirname, 'src', 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}
fs.writeFileSync(path.join(dataDir, 'treatments.json'), JSON.stringify(treatments, null, 2));
console.log('Successfully extracted ' + treatments.length + ' treatments!');
