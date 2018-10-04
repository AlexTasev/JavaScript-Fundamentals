function findVarNames(input) {
    let regex = /\b(?:_)([A-Za-z0-9]+)\b/g;
    let match;
    let result = [];
    while (match = regex.exec(input)){
        result.push(match[1]);
    }
    console.log(result.join());

}

findVarNames('The _id and _age variables are both integers.');