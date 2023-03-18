const fs = require('fs');
const path = require('path');

const scriptFile = '../js/disable-copy.js';
const directoryPath = 'C:/Users/nine0426/Documents/GitHub/nine0426.github.io/pages';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log('Error reading directory:', err);
    return;
  }
  
  files.forEach(file => {
    if (path.extname(file) === '.html') {
      const filePath = path.join(directoryPath, file);
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.log('Error reading file:', err);
          return;
        }
        
        const updatedData = data.replace(/<\/head>/gi, `<script src="${scriptFile}"></script></head>`);
        
        fs.writeFile(filePath, updatedData, 'utf8', err => {
          if (err) {
            console.log('Error writing file:', err);
            return;
          }
          
          console.log(`Script added to ${file}`);
        });
      });
    }
  });
});
