import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import HTMLtoJSX from 'htmltojsx';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '..', 'vizagivfcentre.com');
const destDir = path.join(__dirname, 'src', 'pages');
const appFile = path.join(__dirname, 'src', 'App.jsx');
const indexFile = path.join(__dirname, 'index.html');

// Create pages directory if it doesn't exist
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const converter = new HTMLtoJSX({ createClass: false });

let routes = [];
let imports = [];

function toPascalCase(str) {
    if (!str) return 'Home';
    return str
        .replace(/\//g, '-')
        .split('-')
        .filter(Boolean)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

function processHTML(filePath, routePath) {
    console.log(`Processing: ${filePath}`);
    const html = fs.readFileSync(filePath, 'utf8');
    const $ = cheerio.load(html);
    
    // For the root index.html, let's extract the head, body attributes, and scripts to update Vite's index.html
    if (routePath === '/') {
        let headHtml = $('head').html();
        // Remove existing title if any to avoid duplicates
        headHtml = headHtml.replace(/<title>.*?<\/title>/gi, '');
        
        // Fix asset paths in head
        headHtml = headHtml.replace(/(href|src)=["'](wp-content\/|wp-includes\/)/gi, '$1="/$2');
        
        // Extract body classes
        const bodyTag = $('body');
        const bodyClass = bodyTag.attr('class') || '';
        
        // Extract scripts from body to put in Vite's index.html
        let bodyScripts = '';
        $('body script').each((i, el) => {
            // Skip inline module scripts (like wp-emoji-loader) to prevent Vite proxy errors
            if ($(el).attr('type') === 'module') {
                $(el).remove();
                return;
            }
            
            // Add defer to external scripts so they run after React
            if ($(el).attr('src')) {
                $(el).attr('defer', 'defer');
                let src = $(el).attr('src');
                if (src.startsWith('wp-content/') || src.startsWith('wp-includes/')) {
                    $(el).attr('src', '/' + src);
                }
            }
            bodyScripts += $.html(el) + '\n';
            $(el).remove();
        });

        // Start with a clean Vite index.html
        const cleanViteIndex = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vizag IVF Centre</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`;
        
        // Replace head
        let newViteIndex = cleanViteIndex.replace(
            /<\/head>/i,
            `${headHtml}\n</head>`
        );
        
        // Replace body tag
        newViteIndex = newViteIndex.replace(
            /<body>/i,
            `<body class="${bodyClass}">`
        );
        
        // Append scripts after the React root/script
        newViteIndex = newViteIndex.replace(
            /<\/body>/i,
            `${bodyScripts}\n</body>`
        );

        fs.writeFileSync(indexFile, newViteIndex);
    } else {
        // For non-root pages, just remove scripts from body so they don't break React rendering
        $('body script').remove();
    }

    const bodyClass = $('body').attr('class') || '';

    // Fix asset paths
    $('[src]').each((i, el) => {
        let src = $(el).attr('src');
        if (src && (src.startsWith('wp-content/') || src.startsWith('wp-includes/'))) {
            $(el).attr('src', '/' + src);
        }
    });
    $('[href]').each((i, el) => {
        let href = $(el).attr('href');
        if (href && (href.startsWith('wp-content/') || href.startsWith('wp-includes/'))) {
            $(el).attr('href', '/' + href);
        }
    });

    // Fix HTTrack relative links
    $('a').each((i, el) => {
        let href = $(el).attr('href');
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('tel:') && !href.startsWith('mailto:')) {
            let dirPath = routePath.endsWith('/') ? routePath : routePath + '/';
            let resolved = path.posix.resolve(dirPath, href);
            if (resolved.endsWith('/index.html')) {
                resolved = resolved.slice(0, -11);
            } else if (resolved.endsWith('index.html')) {
                resolved = resolved.slice(0, -10);
            }
            if (resolved === '') resolved = '/';
            $(el).attr('href', resolved);
            el.tagName = 'ReactRouterLink';
        }
    });

    // Extract head styles and CSS links to include them in the page component
    let headStyles = '';
    $('head link[rel="stylesheet"], head style').each((i, el) => {
        let href = $(el).attr('href');
        if (href) {
            if (href.startsWith('wp-content/') || href.startsWith('wp-includes/')) {
                $(el).attr('href', '/' + href);
            } else if (href.startsWith('../')) {
                $(el).attr('href', href.replace(/^(\.\.\/)+/, '/'));
            }
        }
        headStyles += $.html(el);
    });

    // Extract body content
    let bodyContent = headStyles + $('body').html();
    
    if (!bodyContent) return;

    // Convert to JSX
    let jsx = converter.convert(bodyContent);
    
    // Transform reactrouterlink to Link and replace class with className if HTMLtoJSX missed it
    jsx = jsx.replace(/<reactrouterlink/gi, '<Link')
             .replace(/<\/reactrouterlink>/gi, '</Link>')
             .replace(/<Link([^>]*) href=/g, '<Link$1 to=');
    jsx = jsx.replace(/class=/g, 'className=');

    const componentName = toPascalCase(routePath === '/' ? 'Home' : routePath.replace(/^\//, ''));
    
    const componentCode = `
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ${componentName} = () => {
    useEffect(() => {
        document.body.className = "${bodyClass}";
    }, []);

    return (
        <React.Fragment>
            ${jsx}
        </React.Fragment>
    );
};

export default ${componentName};
`;

    const componentFileName = `${componentName}.jsx`;
    fs.writeFileSync(path.join(destDir, componentFileName), componentCode.trim());

    imports.push(`import ${componentName} from './pages/${componentName}';`);
    routes.push(`        <Route path="${routePath}" element={<${componentName} />} />`);
}

function traverseDirectory(currentDir, currentRoute) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
        const fullPath = path.join(currentDir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            // Ignore wordpress system folders
            if (['wp-content', 'wp-includes', 'wp-json', 'feed', 'comments', 'wa'].includes(file)) continue;
            
            traverseDirectory(fullPath, `${currentRoute}${file}/`);
        } else if (file === 'index.html') {
            // It's a page route
            const route = currentRoute.endsWith('/') && currentRoute !== '/' 
                ? currentRoute.slice(0, -1) 
                : currentRoute;
            processHTML(fullPath, route);
        }
    }
}

// Start traversal
traverseDirectory(sourceDir, '/');

// Generate App.jsx
const appJsxCode = `
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
${imports.join('\n')}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
${routes.join('\n')}
      </Routes>
    </Router>
  );
}

export default App;
`;

fs.writeFileSync(appFile, appJsxCode.trim());
console.log('Migration completed successfully!');
