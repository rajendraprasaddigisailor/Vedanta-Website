const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

function processFile(file) {
    console.log(`Processing ${file}...`);
    let content = fs.readFileSync(file, 'utf8');

    // 1. Add reveal to all <p> tags inside main sections that don't have it
    // We avoid adding it to very short paragraphs or those already having a class that might conflict
    // But generally, all body text should reveal
    content = content.replace(/<p(?! class="reveal)([^>]*)>(.*?)<\/p>/g, (match, attrs, text) => {
        if (text.length < 20) return match; // Skip short text like "Buy Now" or "Contact Us" if in p
        if (attrs.includes('reveal')) return match;
        
        // Check if there's an existing class
        if (attrs.includes('class="')) {
            return `<p class="reveal ${attrs.match(/class="([^"]+)"/)[1]}" ${attrs.replace(/class="[^"]+"/, '')}>${text}</p>`;
        } else {
            return `<p class="reveal"${attrs}>${text}</p>`;
        }
    });

    // 2. Stagger lists (li)
    content = content.replace(/<li>(.*?)<\/li>/g, (match, text) => {
        if (match.includes('reveal')) return match;
        return `<li class="reveal">${text}</li>`;
    });

    // 3. Stagger grid items (mvv-item, person, stat-card, product-card, job, etc.)
    const items = ['mvv-item', 'person', 'stat-card', 'fin-tile', 'fin-report', 'esg-card', 'job', 'news-card', 'pillar-card', 'tl-item'];
    items.forEach(item => {
        const re = new RegExp(`class="${item}"`, 'g');
        content = content.replace(re, `class="${item} reveal"`);
    });

    // 4. Add delays to staggered items within their containers
    // This is hard with regex, but we can try to find blocks of reveals and add sequential delays
    const containers = ['glance-mvv', 'people-grid', 'stat-grid', 'fin-grid', 'fin-reports', 'esg-grid', 'jobs-list', 'news-grid', 'pillars-row', 'tl-item'];
    // For simplicity, we'll just add some default delays to known patterns or use a JS approach in common.js
    // Let's stick to adding some basic delays to the first few items if we can identify them.
    
    // 5. Fix any double reveal classes that might have occurred
    content = content.replace(/class="reveal reveal/g, 'class="reveal');
    content = content.replace(/class="reveal\s+reveal/g, 'class="reveal');

    fs.writeFileSync(file, content);
}

files.forEach(processFile);
console.log('Scroll animations applied to all text and grid items.');
