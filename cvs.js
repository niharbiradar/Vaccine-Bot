const puppeteer = require('puppeteer');

async function getCVS() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    });
    const page = await browser.newPage();
    const url = 'https://www.cvs.com/vaccine/intake/store/covid-screener/covid-qns';

    await page.goto(url);    

    //Page 1 Choices
    await page.evaluate(()=>document.querySelector('#q8_2').click())
    await page.evaluate(()=>document.querySelector('#q9_2').click())
    await page.click('#content > div.footer-content-wrapper > button')

    //Page 2
    

}


getCVS()