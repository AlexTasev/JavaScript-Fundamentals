function solve(input) {
    let equipment = input.shift().split(/\s+/);

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(/\s+/);
        let action = tokens[0];
        let item = tokens[1];

        switch (action) {
            case "Buy":
                if (!equipment.includes(item)) {
                    equipment.push(item)
                }
                break;
            case "Trash":
                if (equipment.includes(item)) {
                    let index = equipment.indexOf(item);
                    equipment.splice(index, 1)
                }
                break;
            case "Repair":
                if (equipment.includes(item)) {
                    let index = equipment.indexOf(item);
                    let moved = equipment.splice(index, 1);
                    equipment.push(moved);
                }
                break;
            case "Upgrade":
                let [improved, upgrade] = item.split("-");
                if (equipment.includes(improved)) {
                    let index = equipment.indexOf(improved);
                    let temp = [];
                    temp.push(improved);
                    temp.push(upgrade);
                    let newItem = temp.join(":");
                    equipment.splice(index + 1, 0, newItem)
                }
                break;
        }

    }
    console.log(equipment.join(" "))
}

solve([
    "SWORD Shield Spear",
    "Buy Bag",
    "Trash Shield",
    "Repair Spear",
    "Upgrade SWORD-Steel"
]);