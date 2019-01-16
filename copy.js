const fs = require('fs');
const fsPromise = require('fs').promises;


module.exports = (src, dst) => {
  return fsPromise.readFile(src)
    .then(data => fsPromise.writeFile(dst, data))
    // .then(() => console.log('DONE'))
    .catch(err => console.error(err));
}