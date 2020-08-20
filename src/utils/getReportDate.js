export default function getReportDate(altText) {
    return new Date(altText.split(".")[0].split("on"));
}
