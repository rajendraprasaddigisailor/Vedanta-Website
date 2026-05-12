const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

function finalCleanup(file) {
    let content = fs.readFileSync(file, 'utf8');

    // Fix double reveal on eyebrows
    content = content.replace(/class="eyebrow reveal" reveal"/g, 'class="eyebrow reveal"');
    
    // Fix mangled H2s
    content = content.replace(/reveal delay-1 reveal delay-1""/g, 'reveal delay-1"');
    
    // Fix containers that lost their closing quote before reveal
    // Target: class="some-grid" reveal delay-3"
    content = content.replace(/class="([^"]+)" (reveal delay-[234])"/g, 'class="$1 $2"');
    
    // Fix any leftover reveal" reveal"
    content = content.replace(/reveal" reveal"/g, 'reveal"');
    
    // Ensure lede and copy have reveal if they don't
    content = content.replace(/class="lede"(?!.*reveal)/g, 'class="lede reveal delay-2"');
    content = content.replace(/class="copy"(?!.*reveal)/g, 'class="copy reveal delay-3"');

    fs.writeFileSync(file, content);
}

files.forEach(finalCleanup);
console.log('Final cleanup complete.');
