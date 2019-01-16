
const bodyParse = require('./bodyParser');
const { parse } = require('url');

let noteId = 0;
const notes = {};

//test app.js
module.exports = (req, res) => {
  const url = parse(req.url);
  if(url.pathname === '/tester') {
    res.setHeader('Content-Type', 'application/json');
    // res.end('testing123');
    res.end(JSON.stringify({ testing: 123 }));
  }
  const url = parse(req.url);
  if(url.pathname === '/you') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ hi: `there ${url.query.name}`}))
  }
};

const url = parse(req.url, true);
if(req.method === 'POST' && url.pathname === '/note') {
  bodyParser(req)
    .then(body => {
      notes[noteId++] = body;
      res.statusCode = 204;
      res.end();

    });
  }
