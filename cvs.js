const puppeteer = require('puppeteer')

async function getCVS() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    });
    const page = await browser.newPage();
    const url = 'https://www.cvs.com/vaccine/intake/store/covid-screener/covid-qns';

    await page.goto(url);    

    await page.click('#q8_1', {clickCount:1});
    
}


getCVS()