function capitalizeWords(string) {
    console.log(string.split(' ')
        .map(ch => ch.toLowerCase())
        .map(w => w[0].toUpperCase() + w
            .slice(1))
        .join(' '));
}

capitalizeWords('Capitalize these words');