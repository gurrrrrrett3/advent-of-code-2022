import fs from "fs";
import path from "path";

const input = fs.readFileSync(path.resolve("./challenges/day03/input.txt"), "utf-8");

const priorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getPriority(char: string) {
  return priorities.indexOf(char) + 1;
}

let total = 0;

input.split("\n").forEach((line) => {

    const half = line.length / 2;
    const firstHalf = line.slice(0, half);
    const secondHalf = line.slice(half);

    const char = firstHalf.split("").find((char) => {
        return secondHalf.includes(char);
    });

    if (char) {
        total += getPriority(char);
    }

})

console.log(total);