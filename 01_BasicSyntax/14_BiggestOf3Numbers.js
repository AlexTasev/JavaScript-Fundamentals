"use strict"

function findBiggestNum(input) {
    let numOne = input[0];
    let numTwo = input[1];
    let numThree = input[2];

    console.log(Math.max(numOne, numTwo, numThree));
}

findBiggestNum([
    5,
    -2,
    7
])