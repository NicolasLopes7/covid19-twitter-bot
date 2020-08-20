import vision from "@google-cloud/vision";

export default async function getImageContent(imagePath) {
    const client = new vision.ImageAnnotatorClient();
    const [result] = await client.textDetection(imagePath);

    result.textAnnotations[0].description;
    return result.textAnnotations[0].description;
}
