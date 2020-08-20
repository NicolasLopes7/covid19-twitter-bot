import puppeteer from "puppeteer";

export default async function getImages() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.instagram.com/prefeituracurraisnovos");

    const imgArray = await page.evaluate(() => {
        const imgArray = [
            ...document.querySelectorAll("article img"),
        ].map(({ src, alt }) => ({ src, alt }));

        return imgArray;
    });
    await browser.close();
    return imgArray;
}
