const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/service/rickAndMortyApi.js')//path we want to mock
//   //function of all we want to mock
//   getCharacter(id) { 
//     //return a promise
//     return promise.resolve({
//       name: 'Rick Sanchez',
//       species: 'Human',
//       status: 'Alive'
//     });
//   } 
// ));

describe('app', () => {
  it('has a character', () => {
    return request(app)
      .get('/character/1')
      .then(res => {
        expect(res.body).toEqual({
          name: 'Rick Sanchez',
          species: 'Human',
          status: 'Alive'
        });
      });
  });
});
