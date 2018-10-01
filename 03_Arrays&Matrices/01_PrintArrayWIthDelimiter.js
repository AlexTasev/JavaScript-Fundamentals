function printWithDelimiter(arr) {
    let delimiter = arr.pop();
    console.log(arr.join(delimiter));
}

printWithDelimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'])