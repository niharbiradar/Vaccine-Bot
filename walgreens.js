const puppeteer = require('puppeteer');

async function getWalgreens() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    });

    const url = 'https://www.walgreens.com/findcare/vaccination/covid/19/landing';
    const page = await browser.newPage();
    
    await page.goto(url);

    // FIRST PAGE

    await page.click("#covid-btn", {clickCount:1});

    await page.click('#inputLocations', {clickCount:3});
    await page.type('#inputLocations', '08902');

    await page.type('#userDob', '09052003');

    await page.click('#dose2', {clickCount:1});

    await page.type('#id-textbox-1', '05242020');

    await page.select('#manufacturer-dropdown', '5fd1ab9f5fa47e056c076ff2');        //PFIZER
    //await page.select('#manufacturer-dropdown', '5fd42921195d89e656c0b028');      //MODERNA

    await page.click('#nextBtn');
}
getWalgreens();

