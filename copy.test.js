const copy = require('./copy');
const fs = require('fs');
const fsPromises = require('fs').promises;

describe('copy', () => {
  afterEach(() => {
    return fsPromises.unlink('./http-copy.md')
  });

  it('will copy a file', () => {
    return copy('./http.md', './http-copy.md')
      .then(() => {
        //read http.md and http-copy.md
        //-> expect that they are equal
        // fs.readFileSync('./http.md');
        // expect().toEqual();
        //expect(fs.readFileSync('./http.md)).toEqual(fs.readFileSync('./http-copy.md))

        return Promise.all([
          fsPromises.readFile('./http.md'),
          fsPromises.readFile('./http-copy.md')
        ]);
      })
      .then(([httpMd, httpCopyMd]) => { //array of resolved promises
        expect(httpMd).toEqual(httpCopyMd);
      }) 
      .catch(err => expect(err).toBeFalsy());
  });
})
;
