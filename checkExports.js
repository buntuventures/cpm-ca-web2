const fs = require('fs');
const path = require('path');

// Fonction pour parcourir les fichiers récursivement
const scanDirectory = (directoryPath) => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach(file => {
      const fullPath = path.join(directoryPath, file);
      fs.stat(fullPath, (err, stats) => {
        if (err) {
          console.log(`Error reading file stats: ${err}`);
          return;
        }
        if (stats.isDirectory()) {
          scanDirectory(fullPath); // Recurse into subdirectory
        } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (!content.includes('export')) {
            console.log(`No exports found in ${fullPath}`);
          }
        }
      });
    });
  });
};

// Chemin du répertoire contenant vos fichiers source
const directoryPath = path.join(__dirname, 'src');
scanDirectory(directoryPath);
