function calculateDistance(array) {
    let speedFirst = array[0];
    let speedSecond = array[1];   // km/h
    let time = array[2];         // seconds

    let distanceOne = speedFirst * (time / 3600) * 1000;
    let distanceTwo = speedSecond * (time / 3600) * 1000;
    let delthaDistance = Math.abs(distanceOne - distanceTwo);

    console.log(delthaDistance);
}

calculateDistance([11, 10, 120]);