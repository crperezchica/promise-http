
module.exports = req => {
  return new Promise((resolve, reject) => {
    //check that content-type is json
    //if no json reject with error

    //check if method is GET
    //if method is GET resolve with empty body
    let body = '';
    //the request is a read stream
    req.on('data', chunk => {
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
  });
};





