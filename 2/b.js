var fs = require('fs');
var contents = fs.readFileSync('input.txt', 'utf8');

const input = contents.split(",").map(val => parseInt(val));

let values = [...input];

let a = 0;
let b = -1;

let index = 0;

while (values[0] !== 19690720) {
    values = [...input];
    index = 0;
    if (b < 99) {
        b += 1;
        values[1] = a;
        values[2] = b;
    } else {
        a += 1;
        b = 0;
        values[1] = a;
        values[2] = b;
    }
    while (values[index] !== 99 && index !== -1) {
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
                index = -1;
        }
    }
}

console.log(values[1], ",", values[2]);
console.log(values[1] * 100 + values[2])