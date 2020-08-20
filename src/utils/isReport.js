export default function isReport(altText) {
    const patterns = [
        /BOLETIME EPIDEMIOLÓGICO CRONAVÍRUS/g,
        /BOLETIM EPIDEMIOLOGICO CRONAVÍRUS/g,
        /BOLETIME EPIDEMIOLOGICO CRONAVÍRUS/g,
        /BOLETIM EPIDEMIOLÓGICO DETALHADO/g,
        /BOLETIM/g,
    ];
    let matches = 0;
    patterns.forEach((pattern) => {
        const match = altText.match(pattern);
        if (match) matches += 1;
    });
    return matches > 0;
}
