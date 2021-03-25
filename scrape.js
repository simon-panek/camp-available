'use strict'; 

const puppeteer = require('puppeteer');

const dataGather = async () => {
  let browser = await puppeteer.launch();
  let page = await browser.newPage();

  page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36');
  
  let url = 'https://washington.goingtocamp.com/create-booking/results?resourceLocationId=-2147483552&mapId=-2147483354&searchTabGroupId=0&bookingCategoryId=0&startDate=2021-07-26&endDate=2021-07-27&nights=1&isReserving=true&equipmentId=-32768&subEquipmentId=-32768&partySize=4&searchTime=2021-03-25T09:18:29.744';

  await page.goForward(url, { waitUntil: 'networkidle2' });

  //Gather data here

  let data = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.ng-tns-c49-67 > h3'), element => element.textContent);
  })

  await browser.close();
};

