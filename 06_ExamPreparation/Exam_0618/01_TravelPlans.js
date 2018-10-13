function calculate(input) {
    let earnedGold = 0;
    let specialised = ["Programming", "Hardware maintenance", "Cooking", "Translating", "Designing"];
    let countSpecialized = 1;
    const reward = 200;
    let average = ["Driving", "Managing", "Fishing", "Gardening"];
    let countClumsy = 1;

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" : ");
        let profession = tokens[0];
        let goldOffered = +tokens[1];

        if (specialised.includes(profession)) {
            if (goldOffered >= reward) {
                earnedGold += goldOffered * 0.8;
                if (countSpecialized % 2 === 0) {
                    earnedGold += reward;
                }
                countSpecialized++;
            }
        } else if (average.includes(profession)) {
            earnedGold += goldOffered;
        } else {
            if (countClumsy % 2 === 0) {
                earnedGold += goldOffered * 0.95;
            } else if (countClumsy % 3 === 0) {
                earnedGold += goldOffered * 0.9;
            } else {
                earnedGold += goldOffered;
            }
            countClumsy++;
        }
    }
    console.log(`Final sum: ${earnedGold.toFixed(2)}`);

    const neededGold = 1000;
    let difference = Math.abs(earnedGold - neededGold);

    if (earnedGold < neededGold) {
        console.log(`Mariyka need to earn ${difference.toFixed(2)} gold more to continue in the next task.`)
    } else {
        console.log(`Mariyka earned ${difference.toFixed(2)} gold more.`)
    }
}

calculate(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199",
    "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);