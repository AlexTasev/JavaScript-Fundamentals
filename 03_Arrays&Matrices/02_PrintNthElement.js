function printNthElement(arr) {
    let element = +arr.pop();

    for (let i = 0; i < arr.length; i+= element) {
        console.log(arr[i]);
    }
}