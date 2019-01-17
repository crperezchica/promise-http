
module.exports = req => {
  return new Promise((resolve, reject) => {
    //check if method is GET
    //if method is GET resolve with empty body
    if(req.method === 'GET') {
      return resolve ();
    }

    const headers = req.headers || req.getHeaders();
    if(headers['content-type'] !== 'application/json'){
      return reject('We only support JSON');
    }

    let body = '';
    //the request is a read stream
    req.on('data', chunk => {
      body += chunk; //adding each chunk to the string above let body=''
    });
    req.on('end', () => { //it ends once we get all the chunks and we parse it
      let json = null;
      try {
        json = JSON.parse(body);
      } catch(e) { 
        return reject (e);
      }
      resolve(json);
    });
    req.on('error', err => reject (err));
  });
};





