function main(input) {
    let heroData = [];

    for (let i = 0; i < input.length; i++) {
        let currentArguments = input[i].split(" / ");

        let currentHeroName = currentArguments[0];
        let currentHeroLevel = +currentArguments[1];
        let currentHeroItems = [];

        if (currentArguments.length > 2) {
            currentHeroItems = currentArguments[2].split(", ")
        }

        let hero = {
            name: currentHeroName,
            level: currentHeroLevel,
            items: currentHeroItems
        };

        heroData.push(hero);
    }

    console.log(JSON.stringify(heroData));
}

main(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);