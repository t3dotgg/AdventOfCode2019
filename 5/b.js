var fs = require('fs');
var contents = fs.readFileSync('input.txt', 'utf8');
// var contents = fs.readFileSync('example.txt', 'utf8');


const values = contents.split(",").map(n => parseInt(n));
console.log(values);

let index = 0;

const input = [5];

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
    return { x, y, z: values[index + 3] };
}

while (values[index] !== 99) {

    let value = values[index].toString();
    while (value.length < 5) {
        value = "0" + value;
    }

    const { x, y, z } = getXY(value, index);

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
            values[z] = input[0];
            index = index + 2;
            console.log(values[z], "assign");
            break;
        case "4":
            console.log("OUTPUTTING", x, value);
            result = result + x;
            index = index + 2;
            break;
        case "5":
            console.log("Checking not z", x, y);
            if (x !== 0) {
                index = y;
            } else {
                index = index + 3;
            }
            break;
        case "6":
            console.log("Checking z", x, y);
            if (x === 0) {
                index = y;
            } else {
                index = index + 3;
            }
            break;
        case "7":
            console.log("Comparing", x, y);
            if (x < y) {
                values[z] = 1;
            } else {
                values[z] = 0;
            }
            index = index + 4;
            break;
        case "8":
            if (x === y) {
                values[z] = 1;
            } else {
                values[z] = 0;
            }
            index = index + 4;
            break;
        default:
            console.log(value + " not found");
            console.error("fail");
            process.exit(1);
    }
    console.log("   new value,", value[y], value[z])
}

console.log(result);