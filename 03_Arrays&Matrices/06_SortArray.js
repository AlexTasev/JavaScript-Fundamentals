function sortArray(array) {
    array.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .sort((a, b) => a.length - b.length)
        .forEach(e => console.log(e))
}