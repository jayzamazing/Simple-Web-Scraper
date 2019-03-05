//use pupeteer when dealing with scrapping pages that require javascript execution
//puppeteer allows control over a headless browser
const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://www.reddit.com';

//iife
(
  async () => {
    //create browser object
    const browser = await puppeteer.launch();
    //get page object
    const page = await browser.newPage();
    //have page load the url
    await page.goto(url);
    //wait for the content to load
    const content = await page.content();
    //iterate through the content looking for h2's
    $('h2', content).each(function() {
      console.log($(this).text());
    });
    //close the browser
    await browser.close();
  }
)();
