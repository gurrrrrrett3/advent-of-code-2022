import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.resolve('./challenges/day01/b/input.txt'), 'utf-8');

const data = input.split("\n\n").map((group) => {
    return group.split("\n").map((cals) => {
        return parseInt(cals);
    });
});

const elves: number[] = []

for (let i = 0; i < data.length; i++) {
    elves.push(
        data[i].reduce((a, b) => a + b, 0)
    );
}

const sorted = elves.sort((a, b) => b - a)

console.log(sorted[0] + sorted[1] + sorted[2])