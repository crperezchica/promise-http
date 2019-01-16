
const {
  getCharacter,
  getCharacters

} = require('../../lib/services/rickAndMortyApi.js');

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

  it('gets characters', () => {
    return getCharacters()
      .then(characters => {
        expect(characters).toHaveLength(20);
      });
  });
});
