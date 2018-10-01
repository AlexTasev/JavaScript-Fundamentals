function compoundInterest(input) {
    let principalSum = input[0];
    let interestRate = input[1]/100;
    let frequency = 12 / input[2];  //times in year
    let totalTimespan = input[3];   //years

    let pow = frequency * totalTimespan;

    let compaundInt = principalSum * Math.pow(1 +(interestRate/ frequency),pow);

    console.log(compaundInt.toFixed(2));
}