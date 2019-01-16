const request = require('superagent');

request
  .get('https://rickandmortyapi.com/api/character/') //make a requeet to get a list of all characters
  .then(res => { //this .then give me a body
    return res.body.results
      .map(character => character.origin.url)
      .filter(originUrl => originUrl !== '');
  })
  .then(originUrls => {
    //iterate through originUrls
    return Promise.all(originUrls.map(url => { //for each origin Url we make a request and we wait for this promise all to get information back
      return request.get(url);
    }));
    //-> request.get(url)
    //->->console.log(originJson)
  
  })
  .then(originRess => originRess.map(originRes => originRes.body)) //get body only
  .then(origins => console.log(origins)); //->-> console.lor(originJson)


