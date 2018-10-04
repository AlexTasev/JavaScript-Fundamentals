function extractLinks(arr) {
    let inputAsString = arr.join(" ");
    let regex = /www\.[a-zA-Z0-9-]+(\.[a-z]+)+/gm;
    let arrOfMatches = inputAsString.match(regex);
    if (arrOfMatches !== null) {
        console.log(arrOfMatches.join("\n"));
    }
}

extractLinks(
    ['Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko'] );