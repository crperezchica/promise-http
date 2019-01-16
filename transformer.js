const fsPromises = require('fs').promises;

//cons read = src => fsPromises.readFile(src, { encoding: 'utf8 });

const removeCapitals = str => {
  return str
    .split('')
    .filter(letter => {
      return letter === letter.toLowerCase();
    })
    .join('');
};

const makeAllLettersCapital = str => str.toUpperCase();

const reverse = str => str.split('').reverse().join;

const trim = str => str.trim();

const transformer = src => {
  //read file with fsPromises.readFile
  return fsPromises.readFile(src, { encoding: 'utf8' })
  //then remove capitals
    .then(data => removeCapitals(data))
    .then(data => makeAllLettersCapital(data))
    .then(data => reverse(data))
    .then(data => trim(data));
  //.then(removeCapitals)
  //.then(makeAllLettersCapital)


};



module.exports = {
  transformer,
  removeCapitals,
  makeAllLettersCapital
};
