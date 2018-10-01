function manipulateArr(array) {
    let result = [];
    let num = 1;
    let commands = {
        add: (num) => result.push(num),
        remove: (num) => result.pop()
    };

    for (let i = 0; i < array.length; i++) {
        const command = array[i];
        commands[command](num);
        num++;
    }
    if (result.length < 1) {
        console.log("Empty");
    } else {
        result.forEach((e) => console.log(e));
    }
}