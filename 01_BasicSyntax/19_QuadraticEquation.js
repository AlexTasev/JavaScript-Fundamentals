function quadraticEquasion(a, b, c) {
    // d = b2 - 4*a*c
    let discriminant = (b * b) - (4 * a * c);

    if (discriminant > 0) {
        //x1 = (-b + √d) / (2*a)
        let rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
        //x2 = (-b - √d) / (2*a)
        let rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
        if (rootTwo < rootOne) {
            console.log(rootTwo);
            console.log(rootOne);
        } else {
            console.log(rootOne);
            console.log(rootTwo);
        }
    } else if (discriminant === 0) {
        //x = -b / (2*a)
        let root = -b / (2 * a);
        console.log(root);
    } else {
        console.log("No");
    }
}

quadraticEquasion(6, 11, -35);
quadraticEquasion(1, -12, 36);
quadraticEquasion(5, 2, 1);