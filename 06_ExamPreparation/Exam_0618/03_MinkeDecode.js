function decode(input) {
    let startChar = +input[0];
    let endChar = +input[1];
    let replace = input[2];
    let string = input[3];

    let countryPattern = /[A-Z][a-z]+[A-Z]/g;
    let countryMatch = string.match(countryPattern)[0];
    let startPart = countryMatch.substring(0, startChar);
    let endPart = countryMatch.substring(endChar + 1, countryMatch.length).toLowerCase();
    let country = startPart + replace + endPart;

    let townPattern = /[0-9]{3}\.*[0-9]*/g;
    let townMatches = string.match(townPattern);
    let town = "";
    for (let num of townMatches) {
        num = +(Math.ceil(num));
        town += String.fromCharCode(num);
    }

    town = town.charAt(0).toUpperCase() + town.slice(1);

    console.log(`${country} => ${town}`)
}

decode(["3",
    "5",
    "gar",
    "114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);
console.log();
decode(["1",
    "4",
    "loveni",
    "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"])