const rp = require('request-promise');
const $ = require('cheerio');
const potusParse = require('./potusParse');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
//make request to the url
rp(url)
  //once response is received successfully
  .then((html) => {
    // console.log(html);
    const wikiUrls = [];
    // console.log($('big > a', html).length);
    // console.log($('big > a', html));
    for (let i = 0; i < 45; i++) {
      wikiUrls.push($('big > a', html)[i].attribs.href);
    }
    // console.log(wikiUrls);
    return Promise.all(
      wikiUrls.map((url) => {
        return potusParse('https://en.wikipedia.org' + url);
      })
    );
  })
  .then(function(presidents) {
    console.log(presidents);
  })
  //error handling code
  .catch((err) => {
    console.error(err);
  });
