var fs = require('fs');
var contents = fs.readFileSync('input.txt', 'utf8');

const values = contents.split(",").map(val => parseInt(val));

values[1] = 12;
values[2] = 2;

let index = 0;

while (values[index] !== 99) {
    let x;
    let y;
    switch (values[index]) {
        case 1:
            x = values[values[index + 1]];
            y = values[values[index + 2]];
            values[values[index + 3]] = x + y;
            index = index + 4;
            break;
        case 2:
            x = values[values[index + 1]];
            y = values[values[index + 2]];
            values[values[index + 3]] = x * y;
            index = index + 4;
            break;
        default:
            console.log(values[index] + " not found");
    }
}

console.log(values[0]);