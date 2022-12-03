import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.resolve('./challenges/day01/a/input.txt'), 'utf-8');

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

console.log(elves.sort((a, b) => b - a)[0])