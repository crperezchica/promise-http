const { parse } = require('url');
const { 
  getCharacter, 
  getCharacters
} = require('./service/rickAndMortyApi');

module.exports = (req, res) => {
  const url = parse(req.url, true); //parse url
  if(url.pathname.includes('/character/')) { //want to make the path includes
    //get id of character
    //split on /
    const id = url.pathname.slice(1).split('/')[1]; //grab id of teh character i want to fetch
    getCharacter(id)
      .then(character => {
        res.setHeader('Content-Type', 'application/json'); 
        // console.log(character);
        res.end(JSON.stringify(character)); // 
      })
      .catch(err => {
        res.statusCode = 500;
        res.end(`Error ${err}`);
      });
    getCharacters(id)
      .then(body => {
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><body><html>');
      })
      .catch(err => {
        res.statusCode = 500;
        res.end('Error ${err}');
      });
  }

};
