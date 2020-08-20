import puppeteer from "puppeteer";

(async function getImages() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.instagram.com/prefeituracurraisnovos");

    const imgArray = await page.evaluate(() => {
        const imgArray = [
            ...document.querySelectorAll("article img"),
        ].map(({ src, alt }) => ({ src, alt }));

        return imgArray;
    });
    console.log(imgArray);
    await browser.close();
})();
