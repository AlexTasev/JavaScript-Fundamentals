function findNumbers(array) {
    console.log(array.join(" ").match(/[0-9]+/g).join(" "));
}

findNumbers(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45']);