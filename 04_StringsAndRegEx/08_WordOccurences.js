function findWordOccurences(str, substr) {
    console.log(str
        .split(/[\s?!\.,;:_]+/)
        .map(s => s.toLowerCase())
        .filter(s => s === substr)
        .length);
}

findWordOccurences('The waterfall was so high, that the child couldn’t see its peak.',
    'the');