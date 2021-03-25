'use strict'; 

const puppeteer = require('puppeteer');

const dataGather = async () => {
  let browser = await puppeteer.launch();
  let page = await browser.newPage();

  page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36');
  
  let url = '';

  await page.goForward(url, { waitUntil: 'networkidle2' });

  //Gather data here

  await browser.close();
};

