const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Fix footer manifesto
  content = content.replace(
    /(<div class="foot-manifesto">[\s\S]*?)<h2>(Copper is the <em>quiet infrastructure<\/em>.*?)<\/h2>([\s\S]*?)<div class="cta-card">/g,
    '$1<h2 class="reveal delay-1">$2</h2>$3<div class="cta-card reveal delay-2">'
  );
  
  // Fix esg section
  content = content.replace(
    /<section class="esg reveal"([^>]*)>\s*<div class="esg-head">\s*<div class="eyebrow"([^>]*)>(.*?)<\/div>\s*<h2>(.*?)<\/h2>\s*<div class="live">(.*?)<\/div>\s*<\/div>\s*<div class="esg-grid">/g,
    '<section class="esg"$1>\n  <div class="esg-head">\n    <div class="eyebrow reveal"$2>$3</div>\n    <h2 class="reveal delay-1">$4</h2>\n    <div class="live reveal delay-2">$5</div>\n  </div>\n  <div class="esg-grid reveal delay-3">'
  );
  
  // Fix cta-band section
  content = content.replace(
    /<section class="cta-band reveal">\s*<div class="cta-inner">\s*<div><div class="eyebrow">(.*?)<\/div><h2>(.*?)<\/h2><\/div>\s*<div class="cta-btns">/g,
    '<section class="cta-band">\n  <div class="cta-inner">\n    <div><div class="eyebrow reveal">$1</div><h2 class="reveal delay-1">$2</h2></div>\n    <div class="cta-btns reveal delay-2">'
  );
  
  // Fix fin-tiles section
  content = content.replace(
    /<section class="fin-tiles reveal"([^>]*)>\s*<div class="fin-inner">\s*<div class="fin-head">\s*<div>\s*<div class="eyebrow">(.*?)<\/div>\s*<h2>(.*?)<\/h2>\s*<\/div>\s*<div class="fin-ticker"([^>]*)>/g,
    '<section class="fin-tiles"$1>\n  <div class="fin-inner">\n    <div class="fin-head">\n      <div>\n        <div class=\"eyebrow reveal\">$2</div>\n        <h2 class=\"reveal delay-1\">$3</h2>\n      </div>\n      <div class=\"fin-ticker reveal delay-2\"$4>'
  );

  // Fix fin-grid
  content = content.replace(
    /<\/div>\s*<div class=\"fin-grid\">/g,
    '</div>\n    <div class=\"fin-grid reveal delay-3\">'
  );
  
  // Fix page-section alt reveal
  content = content.replace(
    /<section class="page-section alt reveal"([^>]*)>\s*<div class="ps-inner">\s*<div class="section-head"><div class="eyebrow">(.*?)<\/div><h2>(.*?)<\/h2><\/div>\s*<div class="([^"]+)">/g,
    '<section class="page-section alt"$1>\n  <div class="ps-inner">\n    <div class="section-head"><div class="eyebrow reveal">$2</div><h2 class="reveal delay-1">$3</h2></div>\n    <div class="$4 reveal delay-2">'
  );

  // Fix normal page-section reveal
  content = content.replace(
    /<section class="page-section reveal"([^>]*)>\s*<div class="ps-inner">\s*<div class="section-head"><div class="eyebrow">(.*?)<\/div><h2>(.*?)<\/h2><\/div>\s*<div class="([^"]+)">/g,
    '<section class="page-section"$1>\n  <div class="ps-inner">\n    <div class="section-head"><div class="eyebrow reveal">$2</div><h2 class="reveal delay-1">$3</h2></div>\n    <div class="$4 reveal delay-2">'
  );

  // Fix intro text content
  content = content.replace(
    /<div class="text-content">\s*<div class="eyebrow">(.*?)<\/div>\s*<h2>(.*?)<\/h2>/g,
    '<div class="text-content">\n    <div class="eyebrow reveal">$1</div>\n    <h2 class="reveal delay-1">$2</h2>'
  );

  fs.writeFileSync(file, content);
}
console.log('done');
