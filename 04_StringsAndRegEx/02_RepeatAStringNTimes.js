function repeatStr(str, num) {
    let result = "";
    for (let i = 0; i < +num; i++) {
        result= result.concat(str)
    }
    console.log(result)
}

repeatStr('magic is real', '3')