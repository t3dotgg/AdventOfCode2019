var fs = require('fs');
var contents = fs.readFileSync('input.txt', 'utf8');
// var contents = fs.readFileSync('../2/input.txt', 'utf8');

const values = contents.split(",").map(n => parseInt(n));
console.log(values);

let index = 0;

const input = [1];

let result = "";

const getXY = (opcode, index) => {
    let x = values[index + 1];
    let y = values[index + 2];
    if (opcode[2] === "0") {
        x = values[x]
    }
    if (opcode[1] === "0") {
        y = values[y]
    }
    return { x, y };
}

while (values[index] !== 99) {

    let value = values[index].toString();
    while (value.length < 5) {
        value = "0" + value;
    }

    const { x, y } = getXY(value, index);

    console.log(value);
    switch (value[4]) {
        case "1":
            values[values[index + 3]] = x + y;
            console.log(values[values[index + 3]], "added");
            // console.log("added", x + y, x, y);
            index = index + 4;
            break;
        case "2":
            values[values[index + 3]] = x * y;
            console.log(values[values[index + 3]], "multi");
            index = index + 4;
            break;
        case "3":
            values[values[index + 1]] = input[0];
            index = index + 2;
            console.log(values[values[index + 1]], "assign");
            break;
        case "4":
            console.log("OUTPUTTING", x, value);
            result = result + x;
            index = index + 2;
            break;
        default:
            console.log(value + " not found");
            console.error("fail");
            process.exit(1);
    }
}

console.log(result);