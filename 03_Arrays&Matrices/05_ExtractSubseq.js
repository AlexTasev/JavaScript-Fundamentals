function increasingSubsequence(array) {
    let currentMax = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= currentMax) {
            currentMax = array[i];
            console.log(array[i]);
        }
    }
}

increasingSubsequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])