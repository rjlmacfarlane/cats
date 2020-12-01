const fs = require('fs');

const breedDetailsFromFile = function(breed) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) callback(breed, data);
  });
};

const callback = (breed, data) => {
  console.log(`\nInformation about the ${breed} breed of cat:\n\n ${data}`);
};

breedDetailsFromFile('Bombay');