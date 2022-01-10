const puppeteer = require('puppeteer');

async function getWalgreens() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    });

    const url = 'https://www.walgreens.com/findcare/vaccination/covid/19/landing';
    const pageTwo = await browser.newPage();
    
    await pageTwo.goto(url);

    //page click first form
    await pageTwo.click("#covid-btn", {clickCount:1});
}
getWalgreens();
