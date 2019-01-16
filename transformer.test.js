const { transformer,
  removeCapitals

} = require ('./transformer');

describe('transfomer', () => {
  it('transforms some file', () => {
    return transformer('./transform.txt')
      .then(transTxt => {
        //-> Hi There
        //-> i here
        //-> I HERE
        //-> EREH I
        expect(transTxt).toEqual('EREH I');
      });
  });
});
