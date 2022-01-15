const puppeteer = require('puppeteer');
const fs = require('fs/promises');

async function getWalgreens() {
    const browser = await puppeteer.launch();

    const url = 'https://www.walgreens.com/findcare/vaccination/covid/19/landing';
    const page = await browser.newPage({
        headless: false,
        defaultViewport: null
    });
    
    await page.goto(url);

    // FIRST PAGE

    await page.click("#covid-additionalbtn", {clickCount:1});

    await page.click('#inputLocations', {clickCount:3});
    await page.type('#inputLocations', '08902');

    await page.type('#userDob', '09052003');

    await page.click('#additionaldose2', {clickCount:1});

    await page.click('#immuno_no', {clickCount:1});

    await page.type('#id-textbox-1', '05242020');

    await page.select('#manufacturer-dropdown', '5fd1ab9f5fa47e056c076ff2');        //PFIZER
    //await page.select('#manufacturer-dropdown', '5fd42921195d89e656c0b028');      //MODERNA

    await page.click('#nextBtn');

    await page.waitForNavigation();

    //SECOND PAGE

    await page.waitForNetworkIdle();
    await page.click('#checkList_1', {clickCount:1});

    await page.click('#nextBtn', {clickCount:1});

    //THIRD PAGE
   /* const html = await page.evaluate(() => {
        return document.getElementById("#wag-store-info-0 > div > div > section.pull-left.address-wrapper").innerHTML;
    });
    console.log(html); */
    
    const pullData = await page.evaluate(() => {
        const test = {};
        const locations = document.querySelector('.pull-left.address-wrapper span');
        return locations.innerText;
       // return test;
    })   

    console.log(pullData);

   // await fs.writeFile('title.txt', titles.join("\r\n"));


    browser.close();
}
getWalgreens();

