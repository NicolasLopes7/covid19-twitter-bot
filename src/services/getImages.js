import * as puppeteer from "puppeteer";

export default async function getImages() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.instagram.com/prefeituracurraisnovos");

    await page.evaluate(() => {});
    await browser.close();
}
