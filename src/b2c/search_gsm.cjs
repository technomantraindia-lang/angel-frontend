const fs = require('fs');
const path = require('path');

const files = [
  'c:\\Users\\Admin\\Desktop\\Dhruv\\Angel React\\frontend\\src\\app.jsx',
  'c:\\Users\\Admin\\Desktop\\Dhruv\\Angel React\\frontend\\src\\b2c\\B2CApp.jsx'
];

files.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split(/\r?\n/);
    console.log(`\nFile: ${filePath}`);
    lines.forEach((line, index) => {
      if (/gsm/i.test(line)) {
        console.log(`  Line ${index + 1}: ${line.trim()}`);
      }
    });
  } else {
    console.log(`File not found: ${filePath}`);
  }
});
