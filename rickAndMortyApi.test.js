const request = require('superagent');

describe('rick and morty service', () => {
  it('gets a character by id', () => {
    return getCharacter(1)
      .then(character => {
        expect(character).toEqual({
          name: 'Rick',
          status: 'Alive',
          species: 'Human'
      });
  });
});