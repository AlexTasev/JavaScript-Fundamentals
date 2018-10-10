function race(input) {
    let result = input[0].split(/\s+/).slice(0);
    let actionsAndRacers = input.slice(1);

    for (let i = 0; i < actionsAndRacers.length; i++) {
        let tokens = actionsAndRacers[i].split(/\s+/);
        let action = tokens[0].toLowerCase();
        let racer = tokens[1];

        switch (action) {
            case "join":
                if (result.includes(racer) === false) {
                    result.push(racer);
                }
                break;
            case "crash":
                if (result.includes(racer)) {
                    let index = result.indexOf(racer);
                    result.splice(index, 1);
                }
                break;
            case "pit":
                if (result.includes(racer)) {
                    let index = result.indexOf(racer);
                    let movedRacer = result.splice(index, 1);
                    result.splice(index + 1, 0, movedRacer[0]);

                }
                break;
            case "overtake":
                if (result.includes(racer)) {
                    let index = result.indexOf(racer);
                    if (index !== 0) {
                        let movedRacer = result.splice(index, 1);
                        result.splice(index - 1, 0, movedRacer[0]);
                    }
                }
                break;
        }
    }
    console.log(result.join(" ~ "));
}

race(
    [
        "Vetel Hamilton Raikonnen Botas Slavi",
        "Pit Hamilton",
        "Overtake LeClerc",
        "Join Vetel",
        "Join Ricardo",
        "Crash Botas",
        "Overtake Ricardo",
        "Overtake Ricardo",
        "Overtake Ricardo",
        "Crash Slavi"
    ]
);