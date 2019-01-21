const http = require('http');
const app = require('./lib/rickAndMortyApp');

http
  .createServer(app)
  .listen(7890, () => console.log('Listening on 7890')); //eslint-disable-line