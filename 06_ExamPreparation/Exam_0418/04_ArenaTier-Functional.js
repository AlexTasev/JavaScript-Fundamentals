function arenaTier(input) {
    let gladiatorsData = input
        .filter((item) => item !== "Ave Cesar")
        .map((gladiatorInfo) => {
            if (gladiatorInfo.indexOf(" vs ") > -1) {
                return {
                    fight: gladiatorInfo.split(" vs ")
                };
            } else {
                return {
                    info: gladiatorInfo.split(" -> ")
                };
            }
        })
        .reduce((acc, cur) => {
            if (cur.info) {
                const gladiatorName = cur.info[0];
                const technique = cur.info[1];
                const skill = +cur.info[2];
                if (!acc[gladiatorName]) {
                    acc[gladiatorName] = {};
                    acc[gladiatorName][technique] = skill;
                    acc[gladiatorName].totalSkill = skill;

                    return acc;
                }
                if (acc[gladiatorName][technique] ||
                    (acc[gladiatorName][technique] && acc[gladiatorName][technique] < skill)) {
                    acc[gladiatorName].totalSkill += skill - acc[gladiatorName][technique];
                    acc[gladiatorName][technique] = skill;
                } else if (!acc[gladiatorName][technique]) {
                    acc[gladiatorName][technique] = skill;
                    acc[gladiatorName].totalSkill += skill;
                }
                return acc;
            } else if (cur.fight) {
                const firstFighter = cur.fight[0];
                const secondFighter = cur.fight[1];

                if (acc[firstFighter] && acc[secondFighter]) {
                    const hasFight = Object.keys(acc[firstFighter])
                        .filter(s => s !== "totalSkill")
                        .some((technique) => {
                            return Object.keys(acc[secondFighter]).includes(technique)
                        });
                    if (hasFight) {
                        const loser = acc[firstFighter].totalSkill < acc[secondFighter].totalSkill ? firstFighter : secondFighter;
                        delete acc[loser];
                    }
                }
                return acc;
            }
        }, {});

    Object.keys(gladiatorsData).sort((a, b) => {
        return gladiatorsData[b].totalSkill - gladiatorsData[a].totalSkill || a.localeCompare(b);
    })
        .forEach((name) => {
            console.log(`${name}: ${gladiatorsData[name].totalSkill} skill`);

            Object.keys(gladiatorsData[name])
                .filter((technique) => technique !== "totalSkill")
                .sort((a, b) => {
                    return gladiatorsData[name][b] - gladiatorsData[name][a] || a.localeCompare(b);
                })
                .forEach((technique) => {
                    console.log(`- ${technique} <!> ${gladiatorsData[name][technique]}`)
                });
        });
}

arenaTier([
    "Pesho -> Duck -> 400",
    "Julius -> Shield -> 150",
    "Gladius -> Heal -> 200",
    "Gladius -> Shield -> 250",
    "Gladius -> Shield -> 550",
    "Gladius vs Julius",
    "Gladius vs Gosho",
    "Ave Cesar"
]);