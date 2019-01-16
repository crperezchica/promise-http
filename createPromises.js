const fs = require('fs');

//pending -> waiting for the promise to finish

// fulfilled -> the promise finished and resolved
// rejected -> the promise finished and rejected
// fsPromises.readFile('./http.md, { encoding: 'utf8' })
//  .then(data => fs.Promises.writeFile('./http-copy.md', data))
//  .then(() => console.log('DONE'))
//  .catch(err => console.error(err));

const readPromise = src => new Promise((resolve, reject) => { //create a function that takes source and return a new promise
  //read our file the old callback way
  fs.readFile(src, { encoding: 'utf8' }, (err, data) => { //read the file at source
    //invoke the resolve function with data if succesful 
    if(err) return reject(err); //if error we call the err function

    resolve(data);

  });
  //invoke the reject fucntion with an error if unsuccessful 
});

readPromise('./http.md')
  .then(data => console.log(data));