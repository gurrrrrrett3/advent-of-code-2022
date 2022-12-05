import loadData from "../../../misc/loadData";

const input = loadData(5);

const initalState = loadCrates(input);

// load rest of file (each line is a move) (skip first 10 lines)
const moves = input.split("\n").slice(9);

// loop through moves

// format is "move {count} from {col} to {col}"

moves.forEach((move) => {
  const [, count, , from, , to] = move.split(" ");

  const fromCol = initalState[parseInt(from) - 1] as string[];
  const toCol = initalState[parseInt(to) - 1] as string[];

  let cratesToMove = fromCol.splice(0, parseInt(count));
  toCol.unshift(...cratesToMove.reverse());
});

// log tops of columns

let out = "";

initalState.forEach((column) => {
  out += column[0] + "";
});

console.log(out);

function loadCrates(input: string) {
  // 2d array of crates, 9x9, prefilled with 0s
  let crates: string[][] = Array.from({ length: 9 }, () => Array.from({ length: 8 }, () => "_"));

  const initalCrates = input.split("\n").slice(0, 8);
  initalCrates.forEach((line, y) => {
    line.split("").forEach((crate, x) => {
      crates[x][y] = crate;
    });
  });

  // remove spaces from columns
   crates = crates.map((column) => column.join("").replace(/ /g, "").split(""));

  return crates;
}
