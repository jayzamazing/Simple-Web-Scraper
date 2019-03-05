const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
//make request to the url
rp(url)
  //once response is received successfully
  .then((html) => {
    console.log(html);
  })
  .catch((err) => {
    console.log(err);
  });
