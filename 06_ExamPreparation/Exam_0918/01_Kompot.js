
function makeKompot(arr) {
    let input = arr.slice(0);
    let cherryKompots = 0;
    let plumKompots = 0;
    let peachKompots = 0;
    let rakiya = 0;

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(/\s+/);
        //.filter(x => x !== "");
        let fruit = tokens[0].toLowerCase();
        let weight = +tokens[1];

        if (weight > 0) {
            switch (fruit) {
                case "cherry":
                    let cherryCount = (weight * 1000) / 9;
                    cherryKompots += cherryCount / 25;
                    break;
                case "plum":
                    let plumCount = weight * 1000 / 20;
                    plumKompots += plumCount / 10;
                    break;
                case "peach":
                    let peachCount = weight * 1000 / 140;
                    peachKompots += peachCount / 2.5;
                    break;
                default:
                    rakiya += weight * 0.2;
                    break;
            }
        }
    }

    console.log(`Cherry kompots: ${parseInt(cherryKompots)}`);
    console.log(`Peach kompots: ${parseInt(peachKompots)}`);
    console.log(`Plum kompots: ${parseInt(plumKompots)}`);
    console.log(`Rakiya liters: ${rakiya.toFixed(2)}`)
}
// 100 %

makeKompot([
        'apple     6',
        'peach 25.158',
        'strawberry 0.200',
        'peach 0.1',
        'banana 1.55',
        'cherry 20.5',
        'banana 16.8',
        'grapes 205.65',
        'watermelon 20.54'
    ]
);