import fs from "fs";
import path from "path";

export default function loadData(day: number) {
const dayString = day.toString().padStart(2, "0");
const input = fs.readFileSync(path.resolve(`./challenges/day${dayString}/input.txt`), "utf-8");
return input;
}
