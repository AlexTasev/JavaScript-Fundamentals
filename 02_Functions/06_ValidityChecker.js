function checkValidity([x1, y1, x2, y2]) {
    function checkDistance(x1, y1, x2, y2) {
        let dx = Math.abs(x2 - x1);
        let dy = Math.abs(y2 - y1);
        let distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        if (Number.isInteger(distance)) {
            return true;
        } else {
            return false;
        }
    }
    let pointOneToCenter = checkDistance(x1, y1, 0, 0);
    let pointTwoToCenter = checkDistance(x2, y2, 0, 0);
    let pointOneToPointTwo = checkDistance(x1, y1, x2, y2);

    if (pointOneToCenter) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }
    if (pointTwoToCenter) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }
    if (pointOneToPointTwo) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}

checkValidity([3, 0, 0, 4]);
console.log();
checkValidity([2, 1, 1, 1]);