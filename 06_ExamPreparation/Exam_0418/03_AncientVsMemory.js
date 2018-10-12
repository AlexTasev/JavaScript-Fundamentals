function solve(input) {
    let strArray = input.join(" ").split(" ");

    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i] === '32656' && strArray[i + 1] === '19759' && strArray[i + 2] === '32763') {
            let length = +strArray[i + 4];
            let result = strArray
                .slice(i + 6, length + i + 6)
                .map(st => String.fromCharCode(st))
                .join("");
            console.log(result);
        }
    }
}

// solve(['32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0',
//     '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0']);
solve(['0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0',
    '5 0 71 111 115 104 111 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 4 0',
    '75 105 114 111 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 8 0 86 101',
    '114 111 110 105 107 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0']);
