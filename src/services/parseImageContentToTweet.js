export default function parseImageContentToTweet(imageContent) {
    const dailyCovidData = {};

    const lines = imageContent.split("\n");

    dailyCovidData.lastUpdate = lines[3];
    dailyCovidData.monitoredPeopleCount = lines[4].match(/(\d+)/)[0];
    dailyCovidData.suspectedPeopleCount = lines[5].match(/(\d+)/)[0];
    dailyCovidData.ignoredPeopleCount = lines[7];
    dailyCovidData.discardedPeopleCount = lines[9];
    dailyCovidData.confirmedPeopleCount = lines[12];
    dailyCovidData.inTreatmentPeopleCount = lines[15];
    dailyCovidData.recoveredPeopleCount = lines[14];
    dailyCovidData.deathsCount = lines[16];

    const message = `CASOS DE COVID-19 EM CURRAIS NOVOS\n\n🧐 MONITORADOS: ${dailyCovidData.monitoredPeopleCount}\n🚑 CONFIRMADOS: ${dailyCovidData.confirmedPeopleCount}\n🥳 CURADOS: ${dailyCovidData.recoveredPeopleCount}\n😀 DESCARTADOS: ${dailyCovidData.discardedPeopleCount}\n😰 MORTES: ${dailyCovidData.deathsCount}\n🥶 EM TRATAMENTO: ${dailyCovidData.inTreatmentPeopleCount}\n\n⏰ ${dailyCovidData.lastUpdate}`;
    return message;
}
