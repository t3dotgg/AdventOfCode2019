var fs = require('fs');
var contents = fs.readFileSync('input.txt', 'utf8');

const defaultValues = contents.split(",").map(n => parseInt(n));


const getXY = (opcode, index, values) => {
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

const padInput = (x) => {
    let i = x.toString();

    while (i.length < 5) {
        i = "0" + i;
    }
    return i;
}

let maxResult = 0;

function getAllPermutations(string) {
    var results = [];

    if (string.length === 1) {
        results.push(string);
        return results;
    }

    for (var i = 0; i < string.length; i++) {
        var firstChar = string[i];
        var charsLeft = string.substring(0, i) + string.substring(i + 1);
        var innerPermutations = getAllPermutations(charsLeft);
        for (var j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
        }
    }
    return results;
}

const inputs = getAllPermutations("01234");


inputs.forEach(s => {
    const phaseSettings = s.split("").map(n => parseInt(n));
    let input = 0;
    phaseSettings.forEach(ps => {
        let values = [...defaultValues];
        let setting = ps;
        let index = 0;
        let result = "";

        while (values[index] !== 99) {

            let value = values[index].toString();
            while (value.length < 5) {
                value = "0" + value;
            }

            const { x, y, z } = getXY(value, index, values);

            switch (value[4]) {
                case "1":
                    values[z] = x + y;
                    index = index + 4;
                    break;
                case "2":
                    values[z] = x * y;
                    index = index + 4;
                    break;
                case "3":
                    if (setting !== -1) {
                        values[values[index + 1]] = setting;
                        setting = -1;
                    } else {
                        values[values[index + 1]] = input;
                    }
                    index = index + 2;
                    break;
                case "4":
                    result = `${result}${x}`;
                    index = index + 2;
                    break;
                case "5":
                    if (x !== 0) {
                        index = y;
                    } else {
                        index = index + 3;
                    }
                    break;
                case "6":
                    if (x === 0) {
                        index = y;
                    } else {
                        index = index + 3;
                    }
                    break;
                case "7":
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
        }
        input = parseInt(result);
    })
    if (maxResult < input) {
        maxResult = input;
        console.log("new max", maxResult)
    }
}
)
