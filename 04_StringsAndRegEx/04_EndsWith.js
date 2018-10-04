function checkIfEnds(str, substr) {
    let result = str.endsWith(substr);
    if (result) {
        return true;
    } else {
        return false
    }
}

checkIfEnds('This sentence ends with fun?',
    'fun?')