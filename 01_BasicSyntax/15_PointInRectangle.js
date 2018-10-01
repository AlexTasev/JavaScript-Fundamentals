function pointInRectangle(input) {
    let x = input[0];
    let y = input[1];
    let xMin = input[2];
    let xMax = input[3];
    let yMin = input[4];
    let yMax = input[5];

    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        console.log("inside");
    } else {
        console.log("outside");
    }
}

pointInRectangle([8,
    -1,
    2,
    12,
    -3,
    3]);
pointInRectangle([12.5,
    -1,
    2,
    12,
    -3,
    3]);