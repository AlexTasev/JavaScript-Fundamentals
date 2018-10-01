function printTriangle(num) {
    let line = "";
    for (let row = 1; row <= num; row++) {
        console.log("$".repeat(row))
    }
}

printTriangle(3)