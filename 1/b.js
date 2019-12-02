var fs = require('fs');
var contents = fs.readFileSync('input.txt', 'utf8');

const calcFuel = (num) => {
    const fuel = Math.floor(num / 3) - 2;
    return fuel > 0 ? fuel + (calcFuel(fuel)) : 0;
}
const fuel = contents.split("\n").reduce((sum, num) => sum + calcFuel(parseInt(num)), 0);

console.log("fuel", fuel);
