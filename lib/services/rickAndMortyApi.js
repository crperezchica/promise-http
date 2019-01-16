const request = require('superagent');

const getCharacter = () => {
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => ({
      name: res.body,
      species: res.body,
      status: res.body.status
    }));
}

const getCharacters = () => {
  .get('https://rickandmortyapi.com/api/characters')
  .then(res => {
    
  })
};

module.exports = {
  getCharacter,
  getCharacters
};





