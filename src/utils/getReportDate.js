export default function getReportDate(altText) {
    try {
        return new Date(altText.split(".")[0].split("on"));
    } catch {
        return undefined;
    }
}
