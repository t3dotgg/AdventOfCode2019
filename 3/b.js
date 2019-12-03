var fs = require('fs');
var contents = fs.readFileSync('input.txt', 'utf8');

const wires = contents.split("\n").map(row => row.split(","));

const pointsTouched = new Map();

const crossedPoints = new Map();

console.log(pointsTouched);

let x = 0;
let y = 0;
let wireNum = 0;

wires.forEach(wire => {
    wireNum += 1;
    x = 0;
    y = 0;
    let steps = 0;
    wire.forEach(val => {
        const amount = parseInt(val.substr(1));
        console.log(amount);
        for (let i = 0; i < amount; i++) {
            steps += 1;
            switch (val[0]) {
                case "R":
                    x = x + 1;
                    break;
                case "L":
                    x = x - 1;
                    break;

                case "U":
                    y = y + 1;
                    break;

                case "D":
                    y = y - 1;
                    break;
                default:
                    break;
            }
            const point = x + "," + y;
            if (wireNum === 1 && !pointsTouched.has(point)) {
                pointsTouched.set(point, steps);
            } else {
                if (pointsTouched.has(point) && !crossedPoints.has(point)) {
                    crossedPoints.set(point, pointsTouched.get(point) + steps);
                }
            }
        }
    }
    )
}
)


let shortest = null;

crossedPoints.forEach((numSteps, point) => {
    if (numSteps < shortest || shortest === null) {
        shortest = numSteps;
    }
})

console.log(shortest);