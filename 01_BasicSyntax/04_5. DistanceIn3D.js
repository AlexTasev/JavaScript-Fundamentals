function threeDDistance(input) {
    let p1x = input[0];
    let p1y = input[1];
    let p1z = input[2];

    let p2x = input[3];
    let p2y = input[4];
    let p2z = input[5];

    let deltaX = Math.abs(p1x - p2x);
    let deltaY = Math.abs(p1y - p2y);
    let deltaZ = Math.abs(p1z - p2z);

    let distance = Math.sqrt(Math.pow(deltaX,2)+ Math.pow(deltaY,2)+ Math.pow(deltaZ,2));

    console.log(distance);
}

threeDDistance ([1, 1, 0, 5, 4, 0])