const puppeteer = require('puppeteer')

async function getCVS() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    });
    const page = await browser.newPage();
    const url = 'https://www.cvs.com/vaccine/intake/store/vaccine-select?icid=coronavirus-lp-vaccine-hero-schedule';
    const pageTwo = await browser.newPage();
    const urlTwo = 'https://www.walgreens.com/findcare/vaccination/covid/19/landing';

    await page.goto(url);
    await pageTwo.goto(urlTwo);
}

getCVS()