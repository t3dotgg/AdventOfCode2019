var fs = require('fs');
var contents = fs.readFileSync('input.txt', 'utf8');

const values = contents.split("\n");

const orbits = new Map();

values.forEach(val => {
    const [a, b] = val.split(")");
    orbits.set(b, a);
});

let count = 0;
orbits.forEach((val) => {
    let o = val;
    count += 1;
    while (orbits.has(o)) {
        count += 1;
        o = orbits.get(o);
    }
})

console.log(count);