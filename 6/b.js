var fs = require('fs');
var contents = fs.readFileSync('input.txt', 'utf8');

const values = contents.split("\n");

const orbits = new Map();

values.forEach(val => {
    const [a, b] = val.split(")");
    orbits.set(b, a);
});

let santaCounts = new Map();
let o = "SAN";
let count = 0;
while (orbits.has(o)) {
    santaCounts.set(o, count);
    count += 1;
    o = orbits.get(o);
}

o = "YOU"
count = 0;
while (!santaCounts.has(o)) {
    count += 1;
    o = orbits.get(o);
}

count += santaCounts.get(o);

console.log(count - 2);