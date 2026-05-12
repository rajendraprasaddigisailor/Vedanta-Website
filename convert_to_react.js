import fs from 'fs';
import path from 'path';

// Helper to convert HTML to JSX
function htmlToJsx(html) {
  let jsx = html;
  
  // Replace class= with className=
  jsx = jsx.replace(/class=/g, 'className=');
  
  // Replace for= with htmlFor=
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  
  // Self-close tags that need it: img, input, br, hr
  jsx = jsx.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
  jsx = jsx.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
  jsx = jsx.replace(/<br([^>]*[^\/])?>/g, '<br />');
  jsx = jsx.replace(/<hr([^>]*[^\/])?>/g, '<hr />');
  
  // Replace inline styles with objects
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styleString) => {
    const styleObj = {};
    styleString.split(';').forEach(rule => {
      if (!rule.trim()) return;
      const [key, value] = rule.split(':').map(s => s.trim());
      if (key && value) {
        // camelCase the key
        const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        styleObj[camelKey] = value;
      }
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });
  
  // Remove comments (JSX comments are {/* */})
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
  
  // Replace xmlns:xlink with xmlnsXlink
  jsx = jsx.replace(/xmlns:xlink/g, 'xmlnsXlink');
  // viewBox should be viewBox
  
  // Make sure checked, disabled, etc. don't have empty string value or are standalone
  // e.g., disabled -> disabled={true} (not strictly necessary if it's boolean but some tags have issues)
  // But let's leave them for now unless it causes errors
  
  return jsx;
}

const htmlFiles = [
  'home.html', 'about.html', 'business.html', 'investors.html', 
  'sustainability.html', 'news.html', 'careers.html', 'contact.html', 'buy.html'
];

const pagesMap = {
  'home.html': 'Home',
  'about.html': 'About',
  'business.html': 'Business',
  'investors.html': 'Investors',
  'sustainability.html': 'Sustainability',
  'news.html': 'News',
  'careers.html': 'Careers',
  'contact.html': 'Contact',
  'buy.html': 'Buy'
};

if (!fs.existsSync('src/components')) fs.mkdirSync('src/components', { recursive: true });
if (!fs.existsSync('src/pages')) fs.mkdirSync('src/pages', { recursive: true });

let navbarExtracted = false;
let footerExtracted = false;

for (const file of htmlFiles) {
  if (!fs.existsSync(file)) {
    console.log(`Skipping ${file}, not found.`);
    continue;
  }
  
  const content = fs.readFileSync(file, 'utf-8');
  
  // Extract Nav
  if (!navbarExtracted) {
    const navMatch = content.match(/<nav[\s\S]*?<\/nav>/);
    if (navMatch) {
      let navJsx = htmlToJsx(navMatch[0]);
      navJsx = navJsx.replace(/href="([a-z]+)\.html"/g, (match, p1) => {
        if (p1 === 'index' || p1 === 'home') return `to="/"`;
        return `to="/${p1}"`;
      });
      // Replace <a> with <Link>
      navJsx = navJsx.replace(/<a([^>]*)href="([^"]*)"([^>]*)>/g, '<Link$1to="$2"$3>');
      navJsx = navJsx.replace(/<\/a>/g, '</Link>');
      
      const navComp = `import React from 'react';\nimport { Link } from 'react-router-dom';\n\nexport default function Navbar() {\n  return (\n    ${navJsx}\n  );\n}\n`;
      fs.writeFileSync('src/components/Navbar.jsx', navComp);
      navbarExtracted = true;
    }
  }

  // Extract Footer
  if (!footerExtracted) {
    const footerMatch = content.match(/<footer[\s\S]*?<\/footer>/);
    if (footerMatch) {
      const footerJsx = htmlToJsx(footerMatch[0]);
      const footerComp = `import React from 'react';\n\nexport default function Footer() {\n  return (\n    ${footerJsx}\n  );\n}\n`;
      fs.writeFileSync('src/components/Footer.jsx', footerComp);
      footerExtracted = true;
    }
  }

  // Extract Main content (between NAV and FOOTER)
  // Usually it starts after </nav> and ends before <footer>
  let mainContent = '';
  let startIndex = content.indexOf('</nav>');
  if (startIndex === -1) startIndex = content.indexOf('<body');
  else startIndex += 6;
  
  let endIndex = content.indexOf('<footer');
  if (endIndex === -1) endIndex = content.indexOf('</body>');
  
  if (startIndex !== -1 && endIndex !== -1) {
    mainContent = content.substring(startIndex, endIndex);
    
    // Some files might have Skip link and reading guides before nav
    mainContent = mainContent.replace(/<!-- Skip link -->[\s\S]*?<!-- NAV -->/, '');
    
    const pageJsx = htmlToJsx(mainContent);
    const componentName = pagesMap[file];
    
    const pageComp = `import React from 'react';\n\nexport default function ${componentName}() {\n  return (\n    <>\n${pageJsx}\n    </>\n  );\n}\n`;
    fs.writeFileSync(`src/pages/${componentName}.jsx`, pageComp);
    console.log(`Generated src/pages/${componentName}.jsx`);
  }
}

// Generate App.jsx
let appJsx = `import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
`;

for (const key in pagesMap) {
  appJsx += `import ${pagesMap[key]} from './pages/${pagesMap[key]}';\n`;
}

appJsx += `
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
`;

for (const key in pagesMap) {
  if (key === 'home.html') continue;
  const routePath = key.replace('.html', '');
  appJsx += `        <Route path="/${routePath}" element={<${pagesMap[key]} />} />\n`;
}

appJsx += `      </Routes>
      <Footer />
    </Router>
  );
}
`;

fs.writeFileSync('src/App.jsx', appJsx);
console.log('Generated src/App.jsx');

// Delete dummy Vite App.css
if (fs.existsSync('src/App.css')) fs.unlinkSync('src/App.css');
