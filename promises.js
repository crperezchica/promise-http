const fsPromises = require('fs').promises;

//pending -> waiting for the promise to finish
// fulfilled -> the promised finished and resolved
// rejected -> the promise finished and rejected

fsPromises.readFile('./http.md', { encoding: 'utf8' })
  .then(data => console.log(data)) //console log the data from the file
  .catch(err => console.error(err));


fsPromises.writeFile('text.txt', 'Data to write')
  .then(() => console.log('DONE'))
  .catch(err => console.error(err));


//Copy file exercise
fsPromises.readFile('/http.md', { encoding: 'utf8' })
  .then(data => fsPromises.writeFile('./http-copy.md', data))
  .then(() => console.log('DONE'))
  .catch(err => console.error(err));

