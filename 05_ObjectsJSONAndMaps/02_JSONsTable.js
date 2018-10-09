function main(input) {
    console.log("<table>");
    let person = {};
    for (const obj of input) {
        console.log("<tr>");
        person = JSON.parse(obj);
        console.log(`<td>${person.name}</td>`);
        console.log(`<td>${person.position}</td>`);
        console.log(`<td>${person.salary}</td>`);
        console.log("<tr>");
    }
    console.log("</table>");
}

main(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
)