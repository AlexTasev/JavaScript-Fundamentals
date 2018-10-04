function checkIfStarts(str, substr) {
     let result = str.indexOf(substr);
     if (result === 0) {
         return true;
     } else {
         return false
     }
}

checkIfStarts('Marketing Fundamentals, starting 19/10/2016',
    'Something');