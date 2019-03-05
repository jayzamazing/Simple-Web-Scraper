const rp = require('request-promise');
const $ = require('cheerio');

const potusParse = (url) => {
  //make request to the url
  return rp(url)
  //once response is received successfully
    .then((html) => {
      return {
        name: $('.firstHeading', html).text(),
        birthday: $('.bday', html).text()
      };
    })
    //error handling code
    .catch((err) => {
      console.error(err);
    });
}
module.exports = potusParse;
