var fs = require('fs');
var contents = fs.readFileSync('input.txt', 'utf8');

const wires = contents.split("\n").map(row => row.split(","));

const pointsTouched = new Map([["0,0", 1]]);

const crossedPoints = [];

console.log(pointsTouched);

let x = 0;
let y = 0;
let wireNum = 0;

wires.forEach(wire => {
    wireNum += 1;
    x = 0;
    y = 0;
    wire.forEach(val => {
        const amount = parseInt(val.substr(1));
        console.log(amount);
        for (let i = 0; i < amount; i++) {
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
            if (pointsTouched.has(point) && pointsTouched.get(point) !== wireNum) {
                crossedPoints.push(point);
            } else {
                pointsTouched.set(point, wireNum);
            }
        }
    }
    )
}
)

console.log(crossedPoints);

let shortest = null;

crossedPoints.forEach(point => {
    const pointy = point.split(",");
    console.log(pointy);
    const distance = Math.abs(parseInt(pointy[0])) + Math.abs(parseInt(pointy[1]));
    if (distance < shortest || shortest === null) {
        shortest = distance;
        console.log(shortest);
    }
})

console.log(shortest);