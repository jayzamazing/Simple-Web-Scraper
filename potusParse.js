const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/George_Washington';
//make request to the url
rp(url)
    //once response is received successfully
  .then((html) => {
    console.log(html);
  })
  .catch((err) => {
    console.error(err);
  });
