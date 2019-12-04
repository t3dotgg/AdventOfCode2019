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

const checkTwo = p => {
    const ps = p.toString().split("");
    let c = 0;
    let l = "";
    let good = false;
    ps.forEach(n => {
        if (n === l) {
            c++;
        } else {
            if (c === 1) {
                good = true;
            }
            c = 0;
            l = n;
        }
    })
    return good || c === 1;
}

let count = 0;

const p1 = [];

const start = parseInt(values[0]);
const end = parseInt(values[1]);

for (let y = start; y < end; y++) {
    if (criteriaCheck(y)) {
        count += 1;
        p1.push(y);
    }
}

console.log(count);

const filtered = p1.filter(checkTwo);

console.log(filtered.length);