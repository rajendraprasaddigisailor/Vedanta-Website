const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

function fixAndStandardize(file) {
    console.log(`Processing ${file}...`);
    let content = fs.readFileSync(file, 'utf8');

    // First, undo the damage from the previous script
    content = content.replace(/class="eyebrow" class="reveal"/g, 'class="eyebrow reveal"');
    content = content.replace(/<h class="reveal delay-1"([12]) class="([^"]+)">/g, '<h$1 class="$2 reveal delay-1">');
    content = content.replace(/class="reveal delay-2" class="([^"]+)"/g, 'class="$1 reveal delay-2"');
    
    // Now apply more careful replacements for untouched sections
    
    // 1. Generic Eyebrow + Heading standardization
    // Target: <div class="eyebrow">...</div>\s*<h2 class="h-section">...</h2>
    content = content.replace(
        /(<div class="eyebrow)([^>]*>)(.*?)(<\/div>\s*<h([12]) class="([^"]+))([^>]*>)/gi,
        (match, p1, p2, p3, p4, p5, p6, p7) => {
            if (p1.includes('reveal')) return match;
            return `<div class="eyebrow reveal"${p2}${p3}</div>\n    <h${p5} class="${p6} reveal delay-1"${p7}`;
        }
    );

    // 2. Grids and Containers
    const grids = ['glance-mvv', 'gallery', 'pillars-grid', 'pillars-row', 'scale-inner', 'products-grid', 'csr-grid', 'csr-right', 'investors-grid', 'social-cards', 'news-grid', 'stat-grid', 'people-grid', 'contact-grid', 'fin-grid'];
    grids.forEach(g => {
        const re = new RegExp(`(<div class="${g}")([^>]*>)`, 'g');
        content = content.replace(re, (match, p1, p2) => {
            if (match.includes('reveal')) return match;
            return `<div class="${g} reveal delay-3"${p2}`;
        });
    });

    // 3. Buttons
    const buttons = ['btn-primary', 'apply-btn', 'btn-buy', 'btn-ghost'];
    buttons.forEach(b => {
        const re = new RegExp(`(<(button|a) class="${b}")([^>]*>)`, 'g');
        content = content.replace(re, (match, p1, p2, p3) => {
            if (match.includes('reveal')) return match;
            return `<${p2} class="${b} reveal delay-4"${p3}`;
        });
    });

    // 4. Special fix for index.html lede/copy that were missed or partially mangled
    content = content.replace(/<p class="lede">/g, '<p class="lede reveal delay-2">');
    content = content.replace(/<p class="copy">/g, '<p class="copy reveal delay-3">');

    fs.writeFileSync(file, content);
}

files.forEach(fixAndStandardize);
console.log('Fixed and standardized.');
