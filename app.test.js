const request = require ('supertest');
const app = require('./app');

describe('app', () => {
  it('has a testing route', () => {
    return request(app)
      .get('/tester')
      .then(res => {
        expect(res.text).toEqual('testing123');
      });
  });
  it('testing JSON', () => {
    return request(app)
      .get('/tester')
      
      .then(res => {
        expect(res.body).toEqual({ testing: 123 });
      }); 
  });
  it(('query string', () => {
    return request(app)
      .get('/tester')
      .query({ name: 'ryan' })
      .then(res => {
        expect(res.body).toEqual({ hi: 'there ryan' });

      });
      
      
  }));
  it('has a tester route', () => {
    return request(app)
      .post('/note')
      .send({ text: })
      .then(res => {
        expect(res.status).toEqual(204);
      });
  });
  })
});
