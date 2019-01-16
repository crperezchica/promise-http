const fs = require('fs');

describe('check promise', () => {
  it('return true if it is a promise', () => {
    expect(promiseCheck(fsPromises.readFiel('./http.md'))).toBeTruthy();
  });
  it('returns true if it is not a promise', () => {
    expect(promiseCheck({}).toBeFalsey());
  });

})