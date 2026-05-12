const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Fix <h class="reveal delay-1"2> -> <h2 class="reveal delay-1">
    content = content.replace(/<h class="reveal delay-1"([12])>/g, '<h$1 class="reveal delay-1">');
    
    // Fix <h class="reveal delay-1"1> -> <h1 class="reveal delay-1">
    // (covered by above)

    // Fix reveal" reveal" -> reveal"
    content = content.replace(/reveal" reveal"/g, 'reveal"');
    
    // Fix reveal delay-4"" -> reveal delay-4"
    content = content.replace(/reveal delay-4""/g, 'reveal delay-4"');
    
    fs.writeFileSync(file, content);
});
console.log('Cleanup finished.');
