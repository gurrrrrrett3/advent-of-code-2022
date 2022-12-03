import fs from "fs";
import path from "path";

const input = fs.readFileSync(path.resolve("./challenges/day03/input.txt"), "utf-8");

const priorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getPriority(char: string) {
  return priorities.indexOf(char) + 1;
}

let total = 0;

const data = input.split("\n")

for (let i = 0; i < data.length; i += 3) {
    const elf1 = data[i];
    const elf2 = data[i + 1];
    const elf3 = data[i + 2];

    const char = elf1.split("").find((char) => {
        return elf2.includes(char) && elf3.includes(char);
    })

    if (char) {
        total += getPriority(char);
    }
}

console.log(total);