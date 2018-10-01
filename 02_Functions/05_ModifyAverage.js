function modifyAVG(num) {
    let numAsStr = num.toString();
    let finalSum = sumDigits(numAsStr);

    function sumDigits(num) {
        let sumOfDigits = 0;
        for (let digit of num) {
            sumOfDigits += +digit;
        }
        return sumOfDigits;
    }

    while (finalSum / numAsStr.length <= 5) {
        numAsStr += "9";
        finalSum = sumDigits(numAsStr);
    }

    console.log(numAsStr)
}

modifyAVG(101);