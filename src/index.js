import {
    getImages,
    getImageContent,
    parseImageContentToTweet,
} from "./services";

import { getReportDate, isReport } from "./utils";
import { TwitterClient } from "./lib";

const sendedReports = [];

setInterval(async () => {
    console.log(sendedReports);
    const imgArray = await getImages();
    const dayImages = [];
    imgArray.forEach((img) => {
        if (
            isReport(img.alt) &&
            new Date().toISOString().slice(0, 10) ===
                getReportDate(img.alt).toISOString().slice(0, 10) &&
            sendedReports.indexOf(img.alt) === -1
        )
            dayImages.push(img);
    });

    for (let i = 0; i < dayImages.length; i++) {
        const imageContent = await getImageContent(dayImages[i].src);

        if (imageContent != false) {
            TwitterClient.tweet(parseImageContentToTweet(imageContent));
            sendedReports.push(dayImages[i].alt);
        }
    }
}, 100000);
