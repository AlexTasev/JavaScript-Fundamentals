function arenaTier(input) {
    let gladiators = {};

    for (let i = 0; i < input.length; i++) {
        let line = input[i];
        if (line.includes("->")) {
            let tokens = line.split(" -> ");
            let name = tokens[0];
            let technique = tokens[1];
            let points = +tokens[2];

            if (gladiators.hasOwnProperty(name) === false) {
                gladiators[name] = {};
                gladiators[name]["totalPoints"] = 0;
            }
            if (gladiators[name].hasOwnProperty(technique) === false) {
                gladiators[name][technique] = points;
                gladiators[name]["totalPoints"] += points;
            }
            if (points > gladiators[name][technique]) {
                gladiators[name]["totalPoints"] -= gladiators[name][technique];
                gladiators[name][technique] = points;
                gladiators[name]["totalPoints"] += points;
            }
        } else if (line.includes("vs")) {
            let [firstGl, secondGl] = line.split(" vs ").filter(e => e !== "");
            if (gladiators.hasOwnProperty(firstGl) && gladiators.hasOwnProperty(secondGl)) {
                let itemsFirst = Object.keys(gladiators[firstGl]).filter(i => i !== "totalPoints");
                let itemsSecond = Object.keys(gladiators[secondGl]).filter(i => i !== "totalPoints");
                for (item of itemsFirst) {
                    if (itemsSecond.includes(item)) {
                        if (gladiators[firstGl]["totalPoints"] > gladiators[secondGl]["totalPoints"]) {
                            delete gladiators[secondGl];
                            break;
                        } else {
                            delete gladiators[firstGl];
                            break;
                        }
                    }
                }
            }
        }
    }

    let sortedGladiators = Object.keys(gladiators).sort((g1, g2) => {
        let diff = gladiators[g2]["totalPoints"] - gladiators[g1]["totalPoints"];
        if (diff === 0) {
            return g1.localeCompare(g2);
        }
        return diff
    });

    for (let gl of sortedGladiators) {
        console.log(`${gl}: ${gladiators[gl]["totalPoints"]} skill`);

        let sortedSkills = Object.keys(gladiators[gl])
            .filter(f => f !== "totalPoints")
            .sort((s1, s2) => {
                let diff = gladiators[gl][s2] - gladiators[gl][s1];
                if (diff === 0) {
                    return s1.localeCompare(s2);
                }
                return diff;
            });

        for (let skill of sortedSkills) {
            console.log(`- ${skill} <!> ${gladiators[gl][skill]}`)
        }
    }
}

arenaTier([
    "Pesho -> Duck -> 400",
    "Julius -> Shield -> 150",
    "Gladius -> Heal -> 200",
    "Gladius -> Shield -> 250",
    "Gladius -> Shield -> 550",
    "Gladius vs Julius",
    "Gladius vs Gosho"
]);