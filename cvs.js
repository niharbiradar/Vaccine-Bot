const puppeteer = require('puppeteer')

async function getCVS() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    });
    const page = await browser.newPage();
    const url = 'https://www.cvs.com/vaccine/intake/store/vaccine-select?icid=coronavirus-lp-vaccine-hero-schedule';

    await page.goto(url);    

}

getCVS()