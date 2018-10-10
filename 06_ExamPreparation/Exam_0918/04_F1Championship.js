function championship(input) {
    let result = {};

    for (let line of input) {
        let team = line.split(" -> ")[0];
        let pilot = line.split(" -> ")[1];
        let points = +line.split(" -> ")[2];

        if (result.hasOwnProperty(team) === false) {
            result[team] = {};
            result[team].totalPoints = 0;
        }
        if (result[team].hasOwnProperty(pilot) === false) {
            result[team][pilot] = +points;
            result[team].totalPoints += +points;
        } else {
            result[team][pilot] += +points;
            result[team].totalPoints += +points;
        }
    }

    let sortedTeams = Object.keys(result)
        .sort((t1, t2) => result[t2]["totalPoints"] - result[t1]["totalPoints"]);

    for (const team of sortedTeams.slice(0, 3)) {
        console.log(`${team}: ${result[team]["totalPoints"]}`);

        let sortedPilotes = Object.keys(result[team])
            .filter(p => p !== "totalPoints")
            .sort((p1, p2) => result[team][p2] - result[team][p1]);

        for (const pilot of sortedPilotes.slice(0, 3)) {
            console.log(`-- ${pilot} -> ${result[team][pilot]}`)
        }
    }
}

championship([
    "Ferrari -> Kimi Raikonnen -> 25",
    "Ferrari -> Sebastian Vettel -> 18",
    "Mercedes -> Lewis Hamilton -> 10",
    "Mercedes -> Valteri Bottas -> 8",
    "Red Bull -> Max Verstapen -> 6",
    "Red Bull -> Daniel Ricciardo -> 4",
    "Mercedes -> Lewis Hamilton -> 25",
    "Someteam -> Max Verstapen -> 6",
    "Someteam -> Daniel Ricciardo -> 4"
]);