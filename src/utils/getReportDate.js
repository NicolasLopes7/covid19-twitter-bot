export default function getReportDate(altText) {
    try {
        const date = new Date(altText.split(".")[0].split("on"));
        return date;
    } catch {
        return undefined;
    }
}
