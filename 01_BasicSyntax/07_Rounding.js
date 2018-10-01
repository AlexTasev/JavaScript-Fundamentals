function rounding(input) {
    let num = input[0];
    let precision = input[1];

    if (precision > 15) {
        precision = 15;
    }

    num = Number(num.toFixed(precision));

    console.log(num);
}