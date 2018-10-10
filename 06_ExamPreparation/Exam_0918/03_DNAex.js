function dna(input) {
    let text = input.slice(0);
    let regex = /^([a-z!@#$?]+)=([1-9]+)--([0-9]+)<<([a-z]+)$/;
    let result = new Map();

    for (let i = 0; i < text.length; i++) {
        let line = text[i];
        if (!regex.test(line)) {
            continue;
        } else {
            let match = regex.exec(line);
            let geneName = match[1].split(/[!@#$?]*/).join("");
            let nameLenght = +match[2];

            if (geneName.length !== nameLenght) {
                continue;
            }
            else {
                let genesCount = +match[3];
                let organism = match[4];

                if (result.has(organism) === false) {
                    result.set(organism, [])
                }
                result.get(organism).push(genesCount);
            }
        }
    }

    let sorted = [...result].sort((a, b) => {
        let first = a[1].reduce((c,d) => c + d);
        let second = b[1].reduce((c, d) => c + d);
        return second - first
    });

    for (let [organism, count] of sorted) {
        let total = count.reduce((a, b) => a + b)
        console.log(`${organism} has genome size of ${total}`)
    }
}

dna([
    "=12<<cat",
    "!vi@rus?=2--142",
    "?!cur##viba@cter!!=11--800<<cat",
    "!fre?esia#=7--450<<mouse",
    "@pa!rcuba@cteria$=13--351<<mouse",
    "!richel#ia??=8--900<<human"
]);
