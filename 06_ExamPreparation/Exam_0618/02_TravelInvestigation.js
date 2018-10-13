function findValidAndInvalidSentences(input) {
    let pattern = input.shift()
        .split(input.shift());
    let validSentences = [];
    let invalidSentences = [];

    for (let sentence of input) {
        let currentSentence = sentence.toLowerCase();
        for (let i = 0; i < pattern.length - 2; i++) {
            if (currentSentence.includes(pattern[i]) && currentSentence.includes(pattern[i + 1]) && currentSentence.includes(pattern[i + 2])) {
                validSentences.push(currentSentence);
                break;
            } else {
                invalidSentences.push(currentSentence);
                break;
            }
            break;
        }
    }
    if (validSentences.length > 0) {
        console.log("ValidSentences");
        validSentences.forEach((sentence, index) => {
            console.log(`${index + 1}. ${sentence}`)
        })
    }
    if (validSentences.length > 0 && invalidSentences.length > 0) {
        console.log('='.repeat(30));
    }
    if (invalidSentences.length > 0) {
        console.log("InvalidSentences");
        invalidSentences.forEach((sentence, index) => {
            console.log(`${index + 1}. ${sentence}`)
        })
    }
}

findValidAndInvalidSentences([
    "bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"

]);