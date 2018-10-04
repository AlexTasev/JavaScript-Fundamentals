function printSplitedString(string, delimiter) {
    let splitedElements = string.split(delimiter);
    splitedElements.forEach(st => console.log(st));
}

printSplitedString('One-Two-Three-Four-Five', '-');