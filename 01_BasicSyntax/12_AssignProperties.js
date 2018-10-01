function assignProperties ([keyOne, valueOne, keyTwo,
                               valueTwo, keyThree, valueThree]) {
    return JSON.parse(`{ "${keyOne}": "${valueOne}", "${keyTwo}": "${valueTwo}", 
    "${keyThree}": "${valueThree}" }`)
}