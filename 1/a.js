var fs = require('fs');
var contents = fs.readFileSync('input.txt', 'utf8');

const calcFuel = (num) => {
    return Math.floor(num / 3) - 2;
}
const fuel = contents.split("\n").reduce((sum, num) => sum + calcFuel(parseInt(num)), 0);

console.log("fuel", fuel);
