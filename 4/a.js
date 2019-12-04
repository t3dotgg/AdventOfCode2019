var fs = require('fs');
var contents = fs.readFileSync('input.txt', 'utf8');

const values = contents.split("\n").map(row => row.split("-"))[0];

const criteriaCheck = (password) => {
    const ps = password.toString().split("");
    let hasRepeat = false;
    const safe = ps.reduce((prev, n) => {
        if (prev === false) {
            return prev;
        }
        if (prev === n) {
            hasRepeat = true;
        }
        if (prev > n) {
            return false;
        }
        return n;
    }, 0)
    return safe !== false && hasRepeat;
}


let count = 0;

const start = parseInt(values[0]);
const end = parseInt(values[1]);

for (let y = start; y < end; y++) {
    if (criteriaCheck(y)) {
        count += 1;
    }
}

console.log(count);